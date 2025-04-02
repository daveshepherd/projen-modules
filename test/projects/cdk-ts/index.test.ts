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
});
