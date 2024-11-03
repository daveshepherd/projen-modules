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

    expect(output['README.md']).toContain(`# test-jsii

`);
  });

  it('has readme with a project description', () => {
    const project = new JsiiProject({
      author: 'Test',
      authorAddress: 'test@example.com',
      codeOwners: ['test'],
      defaultReleaseBranch: 'main',
      name: 'test-jsii',
      readme: {
        description: 'A test project description.',
      },
      repositoryUrl: 'test.com',
    });

    const output = synthSnapshot(project);

    expect(output['README.md']).toContain(`# test-jsii

A test project description.

`);
  });
});
