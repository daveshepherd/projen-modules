import { Project, ProjectOptions } from 'projen';

export class TestProject extends Project {
  constructor(options: Omit<ProjectOptions, 'name'> = {}) {
    super({
      name: 'my-project',
      ...options,
    });
  }
}
