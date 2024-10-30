export interface SectionOptions {
  title: string;
  body: string;
}

export class Section {
  readonly options: SectionOptions;
  constructor(options: SectionOptions) {
    this.options = options;
  }
  synth() {
    return `## ${this.options.title}

${this.options.body}`;
  }
}
