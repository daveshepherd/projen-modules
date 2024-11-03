import { FileBase, IResolver, Project } from 'projen';
import { Section } from './elements/section';

export interface ReadmeOptions {
  /**
   * The description of the project.
   */
  readonly description?: string;
}

export class Readme extends FileBase {
  description: string | undefined;
  sections: Array<Section> = [];
  constructor(project: Project, options: ReadmeOptions = {}) {
    super(project, 'README.md', {});
    this.description = options.description;
  }

  addSection(title: string, body: string) {
    this.sections.push(new Section({ title, body }));
  }

  protected synthesizeContent(_: IResolver): string | undefined {
    let content = `# ${this.project.name}\n\n`;
    content = content.concat(this.description ? `${this.description}\n\n` : '');
    return content.concat(this.sections.map((s) => s.synth()).join('\n\n'));
  }
}
