export interface ISectionOptions {
  title: string;
  body: string;
}

export class Section {
  readonly options: ISectionOptions;
  constructor(options: ISectionOptions) {
    this.options = options;
  }
  synth() {
    return `## ${this.options.title}

${this.options.body}`;
  }
}
