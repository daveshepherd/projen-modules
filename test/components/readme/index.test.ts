import { synthSnapshot } from 'projen/lib/util/synth';
import { Readme } from '../../../src/components/readme';
import { TestProject } from '../../utils/test-project';

describe('README generation', () => {
  it('has a README with just has project title if nothing else is specified', () => {
    // GIVEN
    const project = new TestProject();

    // WHEN
    new Readme(project);

    // THEN
    const output = synthSnapshot(project)['README.md'];
    expect(output).toEqual('# my-project\n\n');
  });

  it('has a README has a description when specified', () => {
    // GIVEN
    const project = new TestProject();

    // WHEN
    new Readme(project, { description: 'This is a test project.' });

    // THEN
    const output = synthSnapshot(project)['README.md'];
    expect(output).toEqual(
      `# my-project

This is a test project.

`,
    );
  });
});
