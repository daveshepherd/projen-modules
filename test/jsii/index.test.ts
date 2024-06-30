import { synthSnapshot } from 'projen/lib/util/synth';
import { JsiiProject } from '../../src/jsii';

describe('JSII Package', () => {
  it('synthesizes', () => {
    const project = new JsiiProject({
      defaultReleaseBranch: 'main',
      name: 'test',
      author: 'Test',
      authorAddress: 'test@example.com',
      repositoryUrl: 'test.com',
    });

    const output = synthSnapshot(project);

    expect(output).toMatchSnapshot();
  });
});
