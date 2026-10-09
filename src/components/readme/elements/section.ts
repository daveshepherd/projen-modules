export interface SectionOptions {
  /**
   * The heading of the section
   */
  readonly title: string;
  /**
   * The markdown content of the section
   */
  readonly body: string;
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
