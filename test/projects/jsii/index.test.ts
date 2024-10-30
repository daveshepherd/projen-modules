import { synthSnapshot } from 'projen/lib/util/synth';
import { JsiiProject } from '../../../src/projects/jsii';

describe('JSII Package', () => {
  it('synthesizes', () => {
    const project = new JsiiProject({
      author: 'Test',
      authorAddress: 'test@example.com',
      codeOwners: ['test'],
      defaultReleaseBranch: 'main',
      name: 'test',
      repositoryUrl: 'test.com',
    });

    const output = synthSnapshot(project);

    expect(output.CODEOWNERS).toBeDefined();
    expect(output).toMatchSnapshot();
  });
});
