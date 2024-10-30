import { FileBase, IResolver, Project } from 'projen';
import { Section } from './element/section';

export class Readme extends FileBase {
  sections: Array<Section> = [];
  constructor(project: Project) {
    super(project, 'README.md', {});
  }

  addSection(title: string, body: string) {
    this.sections.push(new Section({ title, body }));
  }

  protected synthesizeContent(_: IResolver): string | undefined {
    const content = `# ${this.project.name}\n\n`;
    return content.concat(this.sections.map((s) => s.synth()).join('\n\n'));
  }
}
