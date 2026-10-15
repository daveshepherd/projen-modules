import { synthSnapshot } from 'projen/lib/util/synth';
import * as yaml from 'yaml';
import { CodeQl } from '../../../src/components/github/codeql';
import {
  CdkTypeScriptApp,
  CdkTypeScriptAppOptions,
} from '../../../src/projects/cdk-ts';
import { JsiiProject, JsiiProjectOptions } from '../../../src/projects/jsii';

function createProject(options: Partial<JsiiProjectOptions> = {}) {
  return new JsiiProject({
    author: 'Test Person',
    authorAddress: 'test@example.com',
    codeOwners: ['test-team'],
    defaultReleaseBranch: 'main',
    name: 'test',
    repositoryUrl: 'https://github.com/example/example.git',
    ...options,
  });
}

describe('CodeQL Component', () => {
  it('scans the default branch and its pull requests', () => {
    const output = synthSnapshot(createProject({ defaultReleaseBranch: 'trunk' }));
    const workflow = yaml.parse(output['.github/workflows/codeql.yml']);

    expect(workflow.on.push.branches).toStrictEqual(['trunk']);
    expect(workflow.on.pull_request.branches).toStrictEqual(['trunk']);
    expect(workflow.jobs.analyze.strategy.matrix.language).toStrictEqual([
      'javascript-typescript',
      'actions',
    ]);
  });

  it('makes the merge queue wait for code scanning results', () => {
    const output = synthSnapshot(createProject());
    const mergify = yaml.parse(output['.mergify.yml']);

    expect(mergify.queue_rules[0].queue_conditions).toContain(
      'status-success=CodeQL',
    );
    expect(output['README.md']).toContain('### Code scanning');
    expect(output['README.md']).toContain('**Require code scanning results**');
  });

  it('can be disabled', () => {
    const output = synthSnapshot(createProject({ codeql: false }));
    const mergify = yaml.parse(output['.mergify.yml']);

    expect(output['.github/workflows/codeql.yml']).toBeUndefined();
    expect(mergify.queue_rules[0].queue_conditions).not.toContain(
      'status-success=CodeQL',
    );
    expect(output['README.md']).not.toContain('Code scanning');
  });

  describe('paths ignore', () => {
    const initStep = (output: Record<string, any>) =>
      yaml
        .parse(output['.github/workflows/codeql.yml'])
        .jobs.analyze.steps.find(
          (step: { name?: string }) => step.name === 'Initialize CodeQL',
        );

    it('scans everything by default', () => {
      const output = synthSnapshot(createProject());

      expect(initStep(output).with.config).toBeUndefined();
    });

    it('configures the paths that are not scanned', () => {
      const project = createProject({ codeql: false });
      const codeQl = new CodeQl(project.github!, {
        languages: ['javascript-typescript'],
        pathsIgnore: ['generated/**'],
      });

      codeQl.addPathsIgnore('**/*.snapshot/**');

      const config = yaml.parse(initStep(synthSnapshot(project)).with.config);
      expect(config).toStrictEqual({
        'paths-ignore': ['generated/**', '**/*.snapshot/**'],
      });
      expect(codeQl.pathsIgnore).toStrictEqual([
        'generated/**',
        '**/*.snapshot/**',
      ]);
    });
  });

  describe('CDK app', () => {
    const createApp = (options: Partial<CdkTypeScriptAppOptions> = {}) =>
      new CdkTypeScriptApp({
        cdkVersion: '2.1.0',
        codeOwners: ['test'],
        name: 'test-cdk',
        ...options,
      });

    const initConfig = (output: Record<string, any>) => {
      const step = yaml
        .parse(output['.github/workflows/codeql.yml'])
        .jobs.analyze.steps.find(
          (s: { name?: string }) => s.name === 'Initialize CodeQL',
        );
      return step.with.config === undefined
        ? undefined
        : yaml.parse(step.with.config);
    };

    it('does not scan the integ-runner snapshots by default', () => {
      const output = synthSnapshot(createApp());

      expect(initConfig(output)).toStrictEqual({
        'paths-ignore': ['**/*.snapshot/**'],
      });
      expect(output['README.md']).toContain(
        'CodeQL does not scan the integ-runner snapshots (`**/*.snapshot/**`)',
      );
    });

    it('replaces the default with codeqlPathsIgnore', () => {
      const output = synthSnapshot(
        createApp({ codeqlPathsIgnore: ['generated/**'] }),
      );

      expect(initConfig(output)).toStrictEqual({
        'paths-ignore': ['generated/**'],
      });
      expect(output['README.md']).toContain(
        'CodeQL does not scan paths matching `generated/**`.',
      );
      expect(output['README.md']).not.toContain('integ-runner snapshots');
    });

    it('scans everything when codeqlPathsIgnore is empty', () => {
      const output = synthSnapshot(createApp({ codeqlPathsIgnore: [] }));

      expect(initConfig(output)).toBeUndefined();
      expect(output['README.md']).not.toContain('CodeQL does not scan');
    });

    it('has no workflow when CodeQL is disabled', () => {
      const output = synthSnapshot(createApp({ codeql: false }));

      expect(output['.github/workflows/codeql.yml']).toBeUndefined();
    });
  });
});
