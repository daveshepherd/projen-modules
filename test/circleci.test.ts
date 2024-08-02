import { synthSnapshot } from 'projen/lib/util/synth';
import { NpmPackage } from '../src/projects/npm';

describe('NPM Package', () => {
  it('synthesizes', () => {
    const project = new NpmPackage({
      codeOwners: ['test'],
      name: 'test',
    });

    const output = synthSnapshot(project)['.circleci/config.yml'];

    expect(output).toMatchSnapshot();
  });
});
