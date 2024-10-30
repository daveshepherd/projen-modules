import { Project, TextFile } from 'projen';

export class Readme extends TextFile {
  constructor(project: Project) {
    super(project, 'README.md', {});
    this.addLine(`# ${project.name}`);
  }
}
