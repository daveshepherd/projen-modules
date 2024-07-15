import { synthSnapshot } from 'projen/lib/util/synth';
import { JsiiProject } from '../../src/jsii';

describe('JSII Package', () => {
  it('synthesizes', () => {
    const project = new JsiiProject({
      author: 'Test',
      authorAddress: 'test@example.com',
      codeOwners: ['test'],
      name: 'test',
      repositoryUrl: 'test.com',
    });

    const output = synthSnapshot(project);

    expect(output.CODEOWNERS).toBeDefined();
    expect(output['README.md']).toBeDefined();
    expect(output['.github/pull_request_template.md']).toBeDefined();
    expect(output).toMatchSnapshot();
  });
  it('disable README', () => {
    const project = new JsiiProject({
      author: 'Test',
      authorAddress: 'test@example.com',
      codeOwners: ['test'],
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
