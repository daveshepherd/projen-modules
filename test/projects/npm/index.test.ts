import { synthSnapshot } from 'projen/lib/util/synth';
import { NpmPackage } from '../../../src/projects/npm';

describe('NPM Package', () => {
  it('synthesizes', () => {
    const project = new NpmPackage({
      codeOwners: ['test'],
      defaultReleaseBranch: 'main',
      name: 'test-npm',
    });

    const output = synthSnapshot(project);

    expect(output.CODEOWNERS).toBeDefined();
    expect(output).toMatchSnapshot();
  });

  it('has readme with project details', () => {
    const project = new NpmPackage({
      autoMerge: false,
      codeOwners: ['test'],
      defaultReleaseBranch: 'main',
      name: 'test-npm',
    });

    const output = synthSnapshot(project);

    expect(output['README.md']).toBe(`# test-npm

## Getting Started

\`\`\`sh
yarn install
npx projen build
\`\`\``);
  });

  it('has readme with a project description', () => {
    const project = new NpmPackage({
      autoMerge: false,
      codeOwners: ['test'],
      defaultReleaseBranch: 'main',
      name: 'test-npm',
      readme: {
        description: 'A test project description.',
      },
    });

    const output = synthSnapshot(project);

    expect(output['README.md']).toBe(`# test-npm

A test project description.

## Getting Started

\`\`\`sh
yarn install
npx projen build
\`\`\``);
  });

  it('type-checks the tests before running them', () => {
    const project = new NpmPackage({
      codeOwners: ['test'],
      defaultReleaseBranch: 'main',
      name: 'test-npm',
    });

    const output = synthSnapshot(project);

    expect(output['.projen/tasks.json'].tasks.test.steps[0]).toEqual({
      name: 'Type-check the test suite',
      execArgs: ['tsc', '--noEmit', '-p', 'test/tsconfig.json'],
    });
  });

  it('can disable type-checking the tests', () => {
    const project = new NpmPackage({
      codeOwners: ['test'],
      defaultReleaseBranch: 'main',
      name: 'test-npm',
      typecheckTests: false,
    });

    const output = synthSnapshot(project);

    expect(output['.projen/tasks.json'].tasks.test.steps).not.toContainEqual(
      expect.objectContaining({ name: 'Type-check the test suite' }),
    );
  });
});
