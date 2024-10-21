import { synthSnapshot } from 'projen/lib/util/synth';
import { NpmPackage } from '../../../src/projects/npm';

describe('NPM Package', () => {
  it('synthesizes', () => {
    const project = new NpmPackage({
      codeOwners: ['test'],
      defaultReleaseBranch: 'main',
      name: 'test',
    });

    const output = synthSnapshot(project);

    expect(output.CODEOWNERS).toBeDefined();
    expect(output).toMatchSnapshot();
  });
});
