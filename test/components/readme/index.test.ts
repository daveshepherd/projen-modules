import { Project, ProjectOptions } from 'projen';
import { synthSnapshot } from 'projen/lib/util/synth';
import { Readme } from '../../../src/components/readme';

export class TestProject extends Project {
  constructor(options: Omit<ProjectOptions, 'name'> = {}) {
    super({
      name: 'my-project',
      ...options,
    });
  }
}

test('empty README just has project title', () => {
  // GIVEN
  const project = new TestProject();

  // WHEN
  new Readme(project);

  // THEN
  const output = synthSnapshot(project)['README.md'];
  expect(output).toEqual('# my-project\n\n');
});
