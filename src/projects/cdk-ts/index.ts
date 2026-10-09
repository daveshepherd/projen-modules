import { DependencyType, github } from 'projen';
import {
  AwsCdkTypeScriptApp,
  AwsCdkTypeScriptAppOptions,
  LambdaRuntime,
} from 'projen/lib/awscdk';
import { CdkTypeScriptAppOptions } from './cdk-typescript-app-options';
import { CodeOwners } from '../../components/github/codeowners';
import { CodeQl } from '../../components/github/codeql';
import { addDeployments } from '../../components/github/deployments';
import {
  autoMergeOptions,
  configureMergify,
} from '../../components/github/mergify';
import { DEFAULT_PULL_REQUEST_TEMPLATE } from '../../components/github/pull-request-template';
import { Readme, ReadmeOrder } from '../../components/readme';
import { gettingStartedCommands } from '../../components/readme/getting-started';
import { mergeOptions } from '../../utils/merge-options';

/**
 * The version of `@aws-cdk/integ-runner` pinned when `experimentalIntegRunner` is enabled.
 */
export const DEFAULT_INTEG_RUNNER_VERSION = '2.205.6';

const INTEG_RUNNER = '@aws-cdk/integ-runner';
const INTEG_TESTS_ALPHA = '@aws-cdk/integ-tests-alpha';

function getOptions(options: CdkTypeScriptAppOptions) {
  const { name } = options;

  const defaults = {
    name,
    defaultReleaseBranch: 'main',
    gitignore: ['.npmrc', '.vscode'],
    pullRequestTemplateContents: DEFAULT_PULL_REQUEST_TEMPLATE,
    projenrcTs: true,
    // authenticate as the GitHub App, so mergify can approve upgrade pull requests
    projenCredentials: github.GithubCredentials.fromApp({}),
    lambdaOptions: { runtime: LambdaRuntime.NODEJS_24_X },
    jestOptions: { jestVersion: '^30' },
    // match the lambda runtime, unless derived from minNodeVersion; a consumer
    // @types/node in devDeps is added later, so replaces this one
    devDeps: options.minNodeVersion ? [] : ['@types/node@^24'],
    // ts-jest only reports type errors in the files a test run loads, so type-check the whole suite first
    typecheckTests: true,
  } satisfies Partial<CdkTypeScriptAppOptions>;

  return mergeOptions(defaults, options);
}

/**
 * A CDK application in TypeScript
 *
 * Defaults to the Node.js 24 Lambda runtime (`lambdaOptions.runtime`) with
 * matching `@types/node`, and Jest 30 (`jestOptions.jestVersion`).
 *
 * @pjid cdk-typescript-app
 */
export class CdkTypeScriptApp extends AwsCdkTypeScriptApp {
  readme: Readme;

  constructor(options: CdkTypeScriptAppOptions) {
    const mergedOptions = getOptions(options);

    super({
      ...mergedOptions,
      autoMergeOptions: autoMergeOptions(mergedOptions),
    } as AwsCdkTypeScriptAppOptions);

    new CodeOwners(this, mergedOptions.codeOwners);
    this.readme = new Readme(this, {
      description: mergedOptions.readme?.description,
    });
    this.readme.addSection('Getting Started', gettingStartedCommands(this), {
      order: ReadmeOrder.INTRODUCTION,
    });
    this.readme.addSection(
      'CDK',
      `On first run of a CDK installation:

\`\`\`sh
npx cdk bootstrap
\`\`\`

Build the project
\`\`\`sh
npx projen build
\`\`\`

Deploy the CDK stack
\`\`\`sh
npx projen deploy
\`\`\``,
      { order: ReadmeOrder.USAGE },
    );
    if (mergedOptions.experimentalIntegRunner) {
      this.configureIntegRunner(
        mergedOptions.integRunnerVersion ?? DEFAULT_INTEG_RUNNER_VERSION,
      );
    }
    if ((mergedOptions.codeql ?? true) && this.github?.workflowsEnabled) {
      new CodeQl(this.github, {
        branches: [mergedOptions.defaultReleaseBranch],
        languages: ['javascript-typescript', 'actions'],
      });
    }
    addDeployments(this, {
      deployments: mergedOptions.deployments ?? [],
      nodeVersion: this.nodeVersion,
      releaseWorkflowName: mergedOptions.releaseWorkflowName,
    });
    if (this.autoMerge) {
      configureMergify(this, {
        approvedReviews: mergedOptions.autoMergeOptions?.approvedReviews,
        trustedAuthors: mergedOptions.trustedAuthors,
      });
    }
  }

  /**
   * Pins the integration test dependencies that projen adds at `latest`, as
   * each `@aws-cdk/integ-tests-alpha` release rewrites the bundled assertion
   * code in the snapshots and drifts from `aws-cdk-lib`.
   */
  private configureIntegRunner(integRunnerVersion: string) {
    this.deps.removeDependency(INTEG_RUNNER, DependencyType.DEVENV);
    this.deps.removeDependency(INTEG_TESTS_ALPHA, DependencyType.DEVENV);
    this.deps.addDependency(
      `${INTEG_RUNNER}@${integRunnerVersion}`,
      DependencyType.BUILD,
    );
    this.deps.addDependency(
      `${INTEG_TESTS_ALPHA}@${this.cdkDeps.cdkMinimumVersion}-alpha.0`,
      DependencyType.BUILD,
    );

    this.addTask('integ:force', {
      description:
        "Run integration snapshot tests, forcing tests to run even if there's no changes",
      execArgs: ['integ-runner', '$@', '--language', 'typescript', '--force'],
      receiveArgs: true,
    });
    this.addTask('integ:watch', {
      description: 'Watch the integration snapshot tests',
      execArgs: ['integ-runner', '$@', '--language', 'typescript', '--watch'],
      receiveArgs: true,
    });
    this.addTask('integ:debug', {
      description:
        'Run integration tests with verbose diagnostics and failure artifacts',
      execArgs: [
        'integ-runner',
        '$@',
        '--language',
        'typescript',
        '-vv',
        '--inspect-failures',
      ],
      receiveArgs: true,
    });

    this.readme.addSection(
      'Integration Tests',
      `Integration tests are run by [integ-runner](https://github.com/aws/aws-cdk-cli/tree/main/packages/%40aws-cdk/integ-runner) as part of \`npx projen test\`, which compares each test's snapshot with a fresh synth. Run them with:
* \`npx projen integ\` to run the snapshot tests.
* \`npx projen integ:update\` to update the snapshots of tests that changed.
* \`npx projen integ:force\` to run all tests, even if their snapshots are unchanged.
* \`npx projen integ:watch\` to watch the tests.
* \`npx projen integ:debug\` to run the tests with verbose diagnostics and keep the artifacts of failed tests.

\`${INTEG_RUNNER}\` is pinned to \`${integRunnerVersion}\` and \`${INTEG_TESTS_ALPHA}\` to the release matching \`cdkVersion\`, so the upgrade workflow never changes their versions: they only change when \`cdkVersion\` or \`integRunnerVersion\` is changed. This is intended, as each \`${INTEG_TESTS_ALPHA}\` release rewrites the assertion code bundled in the snapshots.

integ-runner ignores changes to asset hashes, so a test whose only change is Lambda code is reported as \`UNCHANGED\` and is not deployed. Run \`npx projen integ:force\` to exercise new Lambda code end to end.`,
      { order: ReadmeOrder.USAGE },
    );
  }
}

export * from './cdk-typescript-app-options';
export * from './deployment-environment';
