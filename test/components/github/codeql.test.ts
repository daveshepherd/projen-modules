import { synthSnapshot } from 'projen/lib/util/synth';
import * as yaml from 'yaml';
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
});
