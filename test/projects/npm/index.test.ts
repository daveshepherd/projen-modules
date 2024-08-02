import { synthSnapshot } from 'projen/lib/util/synth';
import { NpmPackage } from '../../../src/projects/npm';

describe('NPM Package', () => {
  it('synthesizes', () => {
    const project = new NpmPackage({
      codeOwners: ['test'],
      name: 'test',
    });

    const output = synthSnapshot(project);

    expect(output.CODEOWNERS).toBeDefined();
    expect(output['README.md']).toBeDefined();
    expect(output['.github/pull_request_template.md']).toBeDefined();
    expect(output).toMatchSnapshot();
  });
});
