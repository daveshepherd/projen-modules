import { synthSnapshot } from 'projen/lib/util/synth';
import { JsiiProject } from '../../src/jsii';

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
  it('disable README', () => {
    const project = new JsiiProject({
      author: 'Test',
      authorAddress: 'test@example.com',
      codeOwners: ['test'],
      defaultReleaseBranch: 'main',
      name: 'test',
      readme: {
        enable: false,
      },
      repositoryUrl: 'test.com',
    });

    const output = synthSnapshot(project);

    expect(output.CODEOWNERS).toBeDefined();
    expect(output).toMatchSnapshot();
  });
});
