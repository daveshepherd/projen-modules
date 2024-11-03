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
});
