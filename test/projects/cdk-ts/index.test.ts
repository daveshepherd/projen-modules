import { mkdirSync, mkdtempSync, writeFileSync } from 'fs';
import { tmpdir } from 'os';
import { join } from 'path';
import { github } from 'projen';
import { LambdaRuntime } from 'projen/lib/awscdk';
import { synthSnapshot } from 'projen/lib/util/synth';
import { CdkTypeScriptApp, DEFAULT_INTEG_RUNNER_VERSION } from '../../../src';

describe('CDK Typescript App', () => {
  it('synthesizes', () => {
    const project = new CdkTypeScriptApp({
      cdkVersion: '2.1.0',
      codeOwners: ['test'],
      name: 'test-cdk',
    });

    const output = synthSnapshot(project);

    expect(output.CODEOWNERS).toBeDefined();
    expect(output).toMatchSnapshot();
  });

  it('has readme with project details', () => {
    const project = new CdkTypeScriptApp({
      autoMerge: false,
      cdkVersion: '2.1.0',
      codeOwners: ['test'],
      name: 'test-cdk',
    });

    const output = synthSnapshot(project);

    expect(output['README.md']).toBe(`# test-cdk

## Getting Started

\`\`\`sh
yarn install
npx projen build
\`\`\`

## CDK

On first run of a CDK installation:

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
\`\`\``);
  });

  it('has readme with a project description', () => {
    const project = new CdkTypeScriptApp({
      autoMerge: false,
      cdkVersion: '2.1.0',
      codeOwners: ['test'],
      name: 'test-cdk',
      readme: {
        description: 'A test project description.',
      },
    });

    const output = synthSnapshot(project);

    expect(output['README.md']).toBe(`# test-cdk

A test project description.

## Getting Started

\`\`\`sh
yarn install
npx projen build
\`\`\`

## CDK

On first run of a CDK installation:

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
\`\`\``);
  });

  describe('integ runner', () => {
    const integPackages = [
      '@aws-cdk/integ-runner',
      '@aws-cdk/integ-tests-alpha',
    ];

    it('pins the integ dependencies and adds integ tasks', () => {
      const project = new CdkTypeScriptApp({
        cdkVersion: '2.272.0',
        codeOwners: ['test'],
        experimentalIntegRunner: true,
        name: 'test-cdk',
      });

      const output = synthSnapshot(project);

      const devDependencies = output['package.json'].devDependencies;
      expect(devDependencies['@aws-cdk/integ-tests-alpha']).toBe(
        '2.272.0-alpha.0',
      );
      expect(devDependencies['@aws-cdk/integ-runner']).toBe(
        DEFAULT_INTEG_RUNNER_VERSION,
      );
      expect(DEFAULT_INTEG_RUNNER_VERSION).toBe('2.205.6');
      for (const name of integPackages) {
        expect(devDependencies[name]).not.toBe('latest');
      }

      const tasks = output['.projen/tasks.json'].tasks;
      expect(tasks['integ:force'].steps).toEqual([
        {
          execArgs: ['integ-runner', '$@', '--language', 'typescript', '--force'],
          receiveArgs: true,
        },
      ]);
      expect(tasks['integ:watch'].steps).toEqual([
        {
          execArgs: ['integ-runner', '$@', '--language', 'typescript', '--watch'],
          receiveArgs: true,
        },
      ]);
      expect(tasks['integ:debug'].steps).toEqual([
        {
          execArgs: ['integ-runner', '$@', '--language', 'typescript', '-vv', '--inspect-failures'],
          receiveArgs: true,
        },
      ]);

      const upgradeFilter: string = tasks.upgrade.steps
        .flatMap((step: { execArgs?: string[] }) => step.execArgs ?? [])
        .find((arg: string) => arg.startsWith('--filter='));
      expect(upgradeFilter).toBeDefined();
      for (const name of integPackages) {
        expect(upgradeFilter.split('=')[1].split(',')).not.toContain(name);
      }

      expect(output['README.md']).toContain('## Integration Tests');
      expect(output).toMatchSnapshot();
    });

    it('pins integ-runner to integRunnerVersion', () => {
      const project = new CdkTypeScriptApp({
        cdkVersion: '2.272.0',
        codeOwners: ['test'],
        experimentalIntegRunner: true,
        integRunnerVersion: '2.200.0',
        name: 'test-cdk',
      });

      const output = synthSnapshot(project);

      expect(
        output['package.json'].devDependencies['@aws-cdk/integ-runner'],
      ).toBe('2.200.0');
    });

    it('does not add the integ dependencies when integ runner is disabled', () => {
      const project = new CdkTypeScriptApp({
        cdkVersion: '2.272.0',
        codeOwners: ['test'],
        name: 'test-cdk',
      });

      const output = synthSnapshot(project);

      for (const name of integPackages) {
        expect(output['package.json'].devDependencies[name]).toBeUndefined();
      }
      expect(output['.projen/tasks.json'].tasks['integ:force']).toBeUndefined();
      expect(output['README.md']).not.toContain('## Integration Tests');
    });
  });

  describe('projen credentials', () => {
    const baseOptions = {
      cdkVersion: '2.1.0',
      codeOwners: ['test'],
      name: 'test-cdk',
    };

    it('authenticates the upgrade workflow as the GitHub App by default', () => {
      const project = new CdkTypeScriptApp(baseOptions);

      const output = synthSnapshot(project);
      const upgrade = output['.github/workflows/upgrade.yml'];

      expect(upgrade).toContain('uses: actions/create-github-app-token@');
      expect(upgrade).toContain('app-id: ${{ secrets.PROJEN_APP_ID }}');
      expect(upgrade).toContain(
        'private-key: ${{ secrets.PROJEN_APP_PRIVATE_KEY }}',
      );
      expect(upgrade).not.toContain('PROJEN_GITHUB_TOKEN');
    });

    it('keeps the GitHub App when other github options are set', () => {
      const project = new CdkTypeScriptApp({
        ...baseOptions,
        githubOptions: { mergify: true },
      });

      expect(project.github?.projenCredentials).toEqual(
        github.GithubCredentials.fromApp({}),
      );
    });

    it('can be overridden with projenCredentials', () => {
      const credentials = github.GithubCredentials.fromPersonalAccessToken();
      const project = new CdkTypeScriptApp({
        ...baseOptions,
        projenCredentials: credentials,
      });

      expect(project.github?.projenCredentials).toBe(credentials);
    });

    it('can be overridden with githubOptions.projenCredentials', () => {
      const credentials = github.GithubCredentials.fromPersonalAccessToken();
      const project = new CdkTypeScriptApp({
        ...baseOptions,
        githubOptions: { projenCredentials: credentials },
      });

      expect(project.github?.projenCredentials).toBe(credentials);
    });
  });

  describe('defaults', () => {
    const baseOptions = {
      cdkVersion: '2.1.0',
      codeOwners: ['test'],
      name: 'test-cdk',
    };

    const devDependencies = (project: CdkTypeScriptApp) =>
      synthSnapshot(project)['package.json'].devDependencies;

    const synthLambda = (options: Partial<typeof baseOptions> & object) => {
      const outdir = mkdtempSync(join(tmpdir(), 'cdk-ts-'));
      mkdirSync(join(outdir, 'src'));
      writeFileSync(join(outdir, 'src', 'hello.lambda.ts'), '');
      const project = new CdkTypeScriptApp({
        ...baseOptions,
        ...options,
        outdir,
        sampleCode: false,
      });
      return synthSnapshot(project)['src/hello-function.ts'];
    };

    it('uses the Node.js 24 lambda runtime', () => {
      expect(synthLambda({})).toContain("new lambda.Runtime('nodejs24.x'");
    });

    it('can override the lambda runtime', () => {
      expect(
        synthLambda({
          lambdaOptions: { runtime: LambdaRuntime.NODEJS_22_X },
        }),
      ).toContain("new lambda.Runtime('nodejs22.x'");
    });

    it('uses @types/node 24 and jest 30', () => {
      const deps = devDependencies(new CdkTypeScriptApp(baseOptions));

      expect(deps['@types/node']).toBe('^24');
      expect(deps.jest).toBe('^30');
      expect(deps['@types/jest']).toBe('^30');
      expect(deps['ts-jest']).toBe('^29');
    });

    it('can override @types/node with devDeps', () => {
      const deps = devDependencies(
        new CdkTypeScriptApp({ ...baseOptions, devDeps: ['@types/node@^22'] }),
      );

      expect(deps['@types/node']).toBe('^22');
    });

    it('derives @types/node from minNodeVersion', () => {
      const deps = devDependencies(
        new CdkTypeScriptApp({ ...baseOptions, minNodeVersion: '22.0.0' }),
      );

      expect(deps['@types/node']).toBe('^22');
    });

    it('keeps jest 30 when other jest options are set', () => {
      const project = new CdkTypeScriptApp({
        ...baseOptions,
        jestOptions: { jestConfig: { testTimeout: 1000 } },
      });

      expect(devDependencies(project).jest).toBe('^30');
      expect(project.jest?.config.testTimeout).toBe(1000);
    });

    it('can override the jest version', () => {
      const deps = devDependencies(
        new CdkTypeScriptApp({
          ...baseOptions,
          jestOptions: { jestVersion: '^29' },
        }),
      );

      expect(deps.jest).toBe('^29');
    });
  });
});
