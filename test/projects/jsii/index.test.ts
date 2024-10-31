import { synthSnapshot } from 'projen/lib/util/synth';
import { JsiiProject } from '../../../src/projects/jsii';

describe('JSII Package', () => {
  it('synthesizes', () => {
    const project = new JsiiProject({
      author: 'Test',
      authorAddress: 'test@example.com',
      codeOwners: ['test'],
      defaultReleaseBranch: 'main',
      name: 'test-jsii',
      repositoryUrl: 'test.com',
    });

    const output = synthSnapshot(project);

    expect(output.CODEOWNERS).toBeDefined();
    expect(output).toMatchSnapshot();
  });

  it('has readme with project details', () => {
    const project = new JsiiProject({
      author: 'Test',
      authorAddress: 'test@example.com',
      codeOwners: ['test'],
      defaultReleaseBranch: 'main',
      name: 'test-jsii',
      repositoryUrl: 'test.com',
    });

    const output = synthSnapshot(project);

    expect(output['README.md']).toBe(`# test-jsii

## Getting Started

\`\`\`sh
yarn install
npx projen build
\`\`\``);
  });
});
