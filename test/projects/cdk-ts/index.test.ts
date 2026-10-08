import { github } from 'projen';
import { synthSnapshot } from 'projen/lib/util/synth';
import { CdkTypeScriptApp } from '../../../src';

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
\`\`\``);
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
});
