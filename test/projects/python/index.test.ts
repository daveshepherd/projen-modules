import { synthSnapshot } from 'projen/lib/util/synth';
import * as yaml from 'yaml';
import { PythonPackage } from '../../../src/projects/python';

describe('Python Package', () => {
  it('synthesizes', () => {
    const project = new PythonPackage({
      authorEmail: 'test@example.com',
      authorName: 'test',
      codeOwners: ['test'],
      moduleName: 'test',
      name: 'test-python',
      version: '0.1.0',
    });

    const output = synthSnapshot(project);

    expect(output.CODEOWNERS).toBeDefined();
    expect(output).toMatchSnapshot();
  });

  it('has readme with project details', () => {
    const project = new PythonPackage({
      authorEmail: 'test@example.com',
      authorName: 'test',
      autoMerge: false,
      codeOwners: ['test'],
      moduleName: 'test',
      name: 'test-python',
      version: '0.1.0',
    });

    const output = synthSnapshot(project);

    expect(output['README.md']).toBe(`# test-python

## Getting Started

\`\`\`sh
yarn install
npx projen build
\`\`\``);
  });

  it('has readme with a project description', () => {
    const project = new PythonPackage({
      authorEmail: 'test@example.com',
      authorName: 'test',
      autoMerge: false,
      codeOwners: ['test'],
      moduleName: 'test',
      name: 'test-python',
      readme: {
        description: 'A test project description.',
      },
      version: '0.1.0',
    });

    const output = synthSnapshot(project);

    expect(output['README.md']).toBe(`# test-python

A test project description.

## Getting Started

\`\`\`sh
yarn install
npx projen build
\`\`\``);
  });

  it('merges pull requests through the mergify queue', () => {
    const project = new PythonPackage({
      authorEmail: 'test@example.com',
      authorName: 'test',
      codeOwners: ['test'],
      moduleName: 'test',
      name: 'test-python',
      version: '0.1.0',
    });

    const output = synthSnapshot(project);
    const mergify = yaml.parse(output['.mergify.yml']);

    expect(mergify.queue_rules[0].queue_conditions).toStrictEqual([
      '#approved-reviews-by>=1',
      '-label~=(do-not-merge)',
    ]);
    expect(output['README.md']).toContain('## GitHub Configuration');
  });

  it('can disable the mergify queue', () => {
    const project = new PythonPackage({
      authorEmail: 'test@example.com',
      authorName: 'test',
      autoMerge: false,
      codeOwners: ['test'],
      moduleName: 'test',
      name: 'test-python',
      version: '0.1.0',
    });

    const output = synthSnapshot(project);

    expect(output['.mergify.yml']).toBeUndefined();
    expect(output['README.md']).not.toContain('GitHub Configuration');
  });

  it('can disable the pull request template', () => {
    const project = new PythonPackage({
      authorEmail: 'test@example.com',
      authorName: 'test',
      codeOwners: ['test'],
      moduleName: 'test',
      name: 'test-python',
      pullRequestTemplate: false,
      version: '0.1.0',
    });

    const output = synthSnapshot(project);

    expect(output['.github/pull_request_template.md']).toBeUndefined();
  });

  it('keeps an empty pull request template when options are explicitly undefined', () => {
    const project = new PythonPackage({
      authorEmail: 'test@example.com',
      authorName: 'test',
      codeOwners: ['test'],
      moduleName: 'test',
      name: 'test-python',
      pullRequestTemplate: undefined,
      pullRequestTemplateContents: undefined,
      version: '0.1.0',
    });

    const output = synthSnapshot(project);

    expect(output['.github/pull_request_template.md']).toBeDefined();
  });

  it('skips the pull request template when github is disabled', () => {
    const project = new PythonPackage({
      authorEmail: 'test@example.com',
      authorName: 'test',
      codeOwners: ['test'],
      github: false,
      moduleName: 'test',
      name: 'test-python',
      version: '0.1.0',
    });

    const output = synthSnapshot(project);

    expect(output['.github/pull_request_template.md']).toBeUndefined();
  });
});
