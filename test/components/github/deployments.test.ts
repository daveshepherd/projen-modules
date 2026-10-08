import * as fs from 'fs';
import * as path from 'path';
import { github } from 'projen';
import { NodePackageManager } from 'projen/lib/javascript';
import { synthSnapshot } from 'projen/lib/util/synth';
import * as yaml from 'yaml';
import { CdkTypeScriptApp, CdkTypeScriptAppOptions } from '../../../src';

function createProject(options: Partial<CdkTypeScriptAppOptions> = {}) {
  return new CdkTypeScriptApp({
    cdkVersion: '2.1.0',
    codeOwners: ['test'],
    name: 'test-cdk',
    release: true,
    ...options,
  });
}

function releaseJobs(project: CdkTypeScriptApp) {
  const output = synthSnapshot(project);
  return yaml.parse(output['.github/workflows/release.yml']).jobs;
}

describe('Deployments', () => {
  it('generates the deploy jobs river-levels wrote by hand', () => {
    const project = createProject({
      cdkVersion: '2.262.2',
      codeOwners: ['daveshepherd'],
      githubOptions: {
        projenCredentials: github.GithubCredentials.fromApp({}),
      },
      majorVersion: 1,
      name: 'river-levels',
      packageManager: NodePackageManager.YARN_CLASSIC,
      workflowPackageCache: true,
      deployments: [
        {
          environment: 'development',
          region: 'eu-west-2',
          env: {
            STAGE: 'development',
            ALERT_EMAIL: '${{ secrets.ALERT_EMAIL }}',
          },
        },
        {
          environment: 'production',
          region: 'eu-west-2',
          env: {
            STAGE: 'production',
            ALERT_EMAIL: '${{ secrets.ALERT_EMAIL }}',
          },
        },
      ],
    });
    const output = synthSnapshot(project);
    const jobs = yaml.parse(output['.github/workflows/release.yml']).jobs;
    const expected = yaml.parse(
      fs.readFileSync(
        path.join(__dirname, 'fixtures', 'river-levels-deploy-jobs.yml'),
        'utf8',
      ),
    );

    expect({
      deploy_development: jobs.deploy_development,
      deploy_production: jobs.deploy_production,
    }).toStrictEqual(expected);
    expect(output['.github/workflows/release.yml']).toMatchSnapshot();
    expect(output['README.md']).toMatchSnapshot();
  });

  it('adds no deploy jobs by default', () => {
    const project = createProject();
    const output = synthSnapshot(project);
    const jobs = yaml.parse(output['.github/workflows/release.yml']).jobs;

    expect(Object.keys(jobs).filter((id) => id.startsWith('deploy_'))).toEqual(
      [],
    );
    expect(output['README.md']).not.toContain('## Deployment');
  });

  it('chains the jobs in array order, each needing the release job', () => {
    const jobs = releaseJobs(
      createProject({
        deployments: [
          { environment: 'dev', region: 'eu-west-1' },
          { environment: 'staging', region: 'eu-west-1' },
          { environment: 'prod', region: 'eu-west-1' },
        ],
      }),
    );

    expect(jobs.deploy_dev.needs).toBe('release');
    expect(jobs.deploy_staging.needs).toStrictEqual(['release', 'deploy_dev']);
    expect(jobs.deploy_prod.needs).toStrictEqual(['release', 'deploy_staging']);
  });

  it('assumes the role in AWS_DEPLOYMENT_ROLE_ARN unless another secret is given', () => {
    const jobs = releaseJobs(
      createProject({
        deployments: [
          { environment: 'dev', region: 'eu-west-1' },
          { environment: 'prod', region: 'us-east-1', roleSecret: 'PROD_ROLE_ARN' },
        ],
      }),
    );
    const credentials = (id: string) =>
      jobs[id].steps.find((s: any) => s.name === 'configure aws credentials')
        .with;

    expect(credentials('deploy_dev')).toStrictEqual({
      'role-to-assume': '${{ secrets.AWS_DEPLOYMENT_ROLE_ARN }}',
      'role-session-name': 'test-cdk-deploy',
      'aws-region': 'eu-west-1',
    });
    expect(credentials('deploy_prod')['role-to-assume']).toBe(
      '${{ secrets.PROD_ROLE_ARN }}',
    );
    expect(credentials('deploy_prod')['aws-region']).toBe('us-east-1');
  });

  it('overrides the job name and approval level', () => {
    const jobs = releaseJobs(
      createProject({
        deployments: [
          {
            environment: 'prod',
            region: 'eu-west-1',
            name: 'Ship it',
            requireApproval: 'broadening',
          },
        ],
      }),
    );
    const deploy = jobs.deploy_prod.steps.find((s: any) => s.name === 'deploy');

    expect(jobs.deploy_prod.name).toBe('Ship it');
    expect(deploy.run).toBe('yarn deploy --require-approval broadening');
  });

  it('omits the deploy step env when there is none', () => {
    const jobs = releaseJobs(
      createProject({
        deployments: [{ environment: 'dev', region: 'eu-west-1' }],
      }),
    );
    const deploy = jobs.deploy_dev.steps.find((s: any) => s.name === 'deploy');

    expect(jobs.deploy_dev.name).toBe('Deploy to Dev');
    expect(deploy).not.toHaveProperty('env');
  });

  it('sets up the node version the release workflow uses', () => {
    const jobs = releaseJobs(
      createProject({
        deployments: [{ environment: 'dev', region: 'eu-west-1' }],
        workflowNodeVersion: '24.x',
      }),
    );
    const setupNode = jobs.deploy_dev.steps.find(
      (s: any) => s.name === 'Setup Node.js',
    );

    expect(setupNode.with).toStrictEqual({ 'node-version': '24.x', 'cache': 'yarn' });
  });

  it('uses the package manager to install and deploy', () => {
    const jobs = releaseJobs(
      createProject({
        deployments: [{ environment: 'dev', region: 'eu-west-1' }],
        packageManager: NodePackageManager.NPM,
      }),
    );
    const step = (name: string) =>
      jobs.deploy_dev.steps.find((s: any) => s.name === name);

    expect(step('Setup Node.js').with.cache).toBe('npm');
    expect(step('Install dependencies').run).toBe('npm ci');
    expect(step('deploy').run).toBe(
      'npm run deploy -- --require-approval never',
    );
  });

  it('lets the project override the actions', () => {
    const project = createProject({
      deployments: [{ environment: 'dev', region: 'eu-west-1' }],
    });
    project.github!.actions.set(
      'aws-actions/configure-aws-credentials',
      'aws-actions/configure-aws-credentials@v9',
    );
    project.github!.actions.set('actions/setup-node', 'actions/setup-node@v9');
    const jobs = releaseJobs(project);
    const uses = jobs.deploy_dev.steps.map((s: any) => s.uses);

    expect(uses).toContain('aws-actions/configure-aws-credentials@v9');
    expect(uses).toContain('actions/setup-node@v9');
  });

  it('documents the environments and their secrets in the README', () => {
    const output = synthSnapshot(
      createProject({
        deployments: [
          { environment: 'dev', region: 'eu-west-1' },
          { environment: 'prod', region: 'us-east-1', roleSecret: 'PROD_ROLE_ARN' },
        ],
      }),
    );

    expect(output['README.md']).toContain('## Deployment');
    expect(output['README.md']).toContain(
      '| dev | eu-west-1 | `AWS_DEPLOYMENT_ROLE_ARN` |',
    );
    expect(output['README.md']).toContain(
      '| prod | us-east-1 | `PROD_ROLE_ARN` |',
    );
  });

  it.each(['', 'my env', 'prod/eu'])(
    'rejects the environment name %p',
    (environment) => {
      expect(() =>
        createProject({ deployments: [{ environment, region: 'eu-west-1' }] }),
      ).toThrow(/only contain letters, digits/);
    },
  );

  it('rejects duplicate environments', () => {
    expect(() =>
      createProject({
        deployments: [
          { environment: 'dev', region: 'eu-west-1' },
          { environment: 'dev', region: 'us-east-1' },
        ],
      }),
    ).toThrow(/"dev" is duplicated/);
  });

  it('needs a release workflow', () => {
    expect(() =>
      createProject({
        deployments: [{ environment: 'dev', region: 'eu-west-1' }],
        release: false,
      }),
    ).toThrow(/release enabled/);
  });
});
