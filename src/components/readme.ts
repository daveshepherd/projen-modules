import { IConstruct } from 'constructs';
import { FileBase, IResolver } from 'projen';

export interface ReadmeOptions {
  /**
   * If false, the README.md file will not be generated
   * @defaultValue true
   */
  readonly enable?: boolean;
  /**
   * The name of the README.md file
   *
   * @defaultValue "README.md"
   * @example "ANOTHER_README.md"
   */

  readonly filename?: string;
  /**
   * List lines to add to the file
   * @defaultValue []
   */
  readonly lines?: Array<string>;
}

export class Readme extends FileBase {
  private readonly lines = new Array<string>();

  public constructor(scope: IConstruct, options: ReadmeOptions) {
    super(scope, options.filename ? options.filename : 'README.md', {
      readonly: true,
      executable: false,
    });
    this.lines = options.lines ? options.lines : [];
  }
  protected synthesizeContent(_: IResolver): string | undefined {
    return [`# ${this.project.name}`].concat(this.lines).join('\n');
  }

  /**
   * Adds the specified lines to the README.
   *
   * @param lines Lines of text
   */
  public addLines(...lines: string[]) {
    for (let line of lines) {
      this.lines.push(line);
    }
  }
}
