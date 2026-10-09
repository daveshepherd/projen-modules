import { github } from 'projen';
import { BUILD_ARTIFACT_NAME } from 'projen/lib/github/constants';
import { JobPermission, JobStep } from 'projen/lib/github/workflows-model';
import { NodePackageManager, NodeProject } from 'projen/lib/javascript';
import { isYarnBerry, isYarnClassic } from 'projen/lib/javascript/util';
import { DeploymentEnvironment } from '../../projects/cdk-ts/deployment-environment';
import { Readme, ReadmeOrder } from '../readme';

// projen only pins these by tag, so they are pinned by SHA here. Steps reference
// them by `name@sha`, which project.github.actions resolves when the workflow is
// rendered, so `project.github.actions.set('actions/setup-node', ...)` overrides them.
/** actions/setup-node at v7.0.0 */
export const ACTIONS_SETUP_NODE =
  'actions/setup-node@820762786026740c76f36085b0efc47a31fe5020';
/** aws-actions/configure-aws-credentials at v6.3.0 */
export const AWS_ACTIONS_CONFIGURE_AWS_CREDENTIALS =
  'aws-actions/configure-aws-credentials@e1253824e5c10ff9df46874f81ed3ec929e19cfd';

const DEFAULT_ROLE_SECRET = 'AWS_DEPLOYMENT_ROLE_ARN';
const RELEASE_JOB_ID = 'release';

export interface DeploymentsOptions {
  readonly deployments: Array<DeploymentEnvironment>;
  /**
   * Name of the release workflow for the default branch
   *
   * @default 'release'
   */
  readonly releaseWorkflowName?: string;
  /**
   * Node.js version that the release workflow sets up
   *
   * @default - the runner's version
   */
  readonly nodeVersion?: string;
}

const capitalise = (value: string) =>
  value.charAt(0).toUpperCase() + value.slice(1);

/**
 * Adds a job per deployment environment to the default branch's release
 * workflow, each one deploying after the release job and the previous
 * environment's job
 */
export function addDeployments(
  project: NodeProject,
  options: DeploymentsOptions,
) {
  const { deployments } = options;
  if (deployments.length === 0) {
    return;
  }

  const workflowName = options.releaseWorkflowName ?? 'release';
  const workflow = project.github?.tryFindWorkflow(workflowName);
  if (!project.release || !workflow) {
    throw new Error(
      `deployments need a "${workflowName}" GitHub workflow, so the project must have release enabled and GitHub workflows enabled`,
    );
  }

  const seen = new Set<string>();
  for (const { environment } of deployments) {
    if (!/^[A-Za-z0-9_-]+$/.test(environment)) {
      throw new Error(
        `Deployment environment "${environment}" must be non-empty and only contain letters, digits, "_" and "-", as it is used in the job id`,
      );
    }
    if (seen.has(environment)) {
      throw new Error(`Deployment environment "${environment}" is duplicated`);
    }
    seen.add(environment);
  }

  // deploy jobs run on the same runners as the release job
  const releaseJob = workflow.getJob(RELEASE_JOB_ID) as github.workflows.Job;
  const setupSteps = packageManagerSetupSteps(project, options.nodeVersion);
  // role session names only allow [\w+=,.@-]
  const roleSessionName = `${project.name}-deploy`.replace(
    /[^\w+=,.@-]/g,
    '-',
  );

  let previousJobId: string | undefined;
  for (const deployment of deployments) {
    const jobId = `deploy_${deployment.environment}`;
    const roleSecret = deployment.roleSecret ?? DEFAULT_ROLE_SECRET;
    const env = deployment.env ?? {};
    workflow.addJob(jobId, {
      name:
        deployment.name ?? `Deploy to ${capitalise(deployment.environment)}`,
      environment: deployment.environment,
      // release is listed explicitly, as the condition reads its outputs
      needs: previousJobId ? [RELEASE_JOB_ID, previousJobId] : [RELEASE_JOB_ID],
      runsOn: releaseJob.runsOn,
      runsOnGroup: releaseJob.runsOnGroup,
      permissions: {
        idToken: JobPermission.WRITE,
      },
      if: `needs.${RELEASE_JOB_ID}.outputs.tag_exists != 'true'`,
      // The commit is not rebuilt: the release job already built and tested it,
      // and cdk deploy bundles the Lambdas itself through the build hook in
      // cdk.json. The release's artifact (with releasetag.txt) is still
      // downloaded, so the app can read the released version.
      steps: [
        {
          name: 'Checkout',
          uses: github.ActionRefs.ACTIONS_CHECKOUT,
        },
        {
          name: 'Download build artifacts',
          uses: github.ActionRefs.ACTIONS_DOWNLOAD_ARTIFACT,
          with: {
            name: BUILD_ARTIFACT_NAME,
            path: project.release.artifactsDirectory,
          },
        },
        ...setupSteps,
        {
          name: 'configure aws credentials',
          uses: AWS_ACTIONS_CONFIGURE_AWS_CREDENTIALS,
          with: {
            'role-to-assume': `\${{ secrets.${roleSecret} }}`,
            'role-session-name': roleSessionName,
            'aws-region': deployment.region,
          },
        },
        {
          name: 'deploy',
          run: `${deployCommand(project.package.packageManager)} --require-approval ${deployment.requireApproval ?? 'never'}`,
          ...(Object.keys(env).length > 0 && { env }),
        },
      ],
    });
    previousJobId = jobId;
  }

  Readme.of(project)?.addSection(
    'Deployment',
    [
      'After each release, the release workflow deploys to these GitHub environments in order, each after the previous one succeeds:',
      '',
      '| Environment | Region | Role ARN secret |',
      '| ----------- | ------ | --------------- |',
      ...deployments.map(
        (d) =>
          `| ${d.environment} | ${d.region} | \`${d.roleSecret ?? DEFAULT_ROLE_SECRET}\` |`,
      ),
      '',
      'Each environment needs its role ARN secret, for a role that trusts GitHub\'s OIDC provider.',
    ].join('\n'),
    { order: ReadmeOrder.USAGE },
  );
}

/**
 * Steps that install the project's dependencies, mirroring projen's own
 * workflow setup but with setup-node pinned by SHA
 */
function packageManagerSetupSteps(
  project: NodeProject,
  nodeVersion?: string,
): Array<JobStep> {
  const pm = project.package.packageManager;
  const steps = new Array<JobStep>();
  if (pm === NodePackageManager.BUN) {
    steps.push({
      name: 'Setup bun',
      uses: github.ActionRefs.OVEN_SH_SETUP_BUN,
      with: { 'bun-version': project.package.bunVersion },
    });
  } else {
    if (isYarnBerry(pm)) {
      steps.push({ name: 'Enable corepack', run: 'corepack enable' });
    } else if (pm === NodePackageManager.PNPM) {
      steps.push({
        name: 'Setup pnpm',
        uses: github.ActionRefs.PNPM_ACTION_SETUP,
        with: { version: project.package.pnpmVersion },
      });
    }
    steps.push({
      name: 'Setup Node.js',
      uses: ACTIONS_SETUP_NODE,
      with: {
        ...(nodeVersion && { 'node-version': nodeVersion }),
        cache: isYarnClassic(pm) || isYarnBerry(pm) ? 'yarn' : pm,
      },
    });
  }
  steps.push({
    name: 'Install dependencies',
    run: project.package.installCommand,
  });
  return steps;
}

/**
 * Runs the project's deploy task, passing on the arguments that follow
 */
function deployCommand(pm: NodePackageManager) {
  if (isYarnClassic(pm) || isYarnBerry(pm)) {
    return 'yarn deploy';
  }
  switch (pm) {
    case NodePackageManager.NPM:
      return 'npm run deploy --';
    case NodePackageManager.PNPM:
      // `pnpm deploy` is a pnpm command, not the script
      return 'pnpm run deploy';
    default:
      return 'bun run deploy';
  }
}
