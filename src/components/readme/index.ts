import { FileBase, IResolver, Project, SampleReadme } from 'projen';
import { Section } from './elements/section';

export interface ReadmeOptions {
  /**
   * The description of the project.
   */
  readonly description?: string;
}

export interface AddSectionOptions {
  /**
   * Position of the section in the README, lowest first. Sections with the
   * same order keep the order they were added in.
   *
   * @default - `ReadmeOrder.DEFAULT`, or the existing order when replacing a section
   */
  readonly order?: number;
}

/**
 * Orders of the bands of sections in the README, leaving room for sections
 * in between
 */
export class ReadmeOrder {
  /**
   * Sections a reader needs first, such as getting started
   */
  public static readonly INTRODUCTION = 10;
  /**
   * How to use and operate the project
   */
  public static readonly USAGE = 20;
  /**
   * Sections added without an order
   */
  public static readonly DEFAULT = 50;
  /**
   * Reference material, such as repository configuration and known issues
   */
  public static readonly REFERENCE = 90;

  private constructor() {}
}

interface SectionEntry {
  readonly section: Section;
  readonly order: number;
}

export class Readme extends FileBase {
  /**
   * The README of a project, if it has one
   */
  public static of(project: Project): Readme | undefined {
    return project.components.find((c): c is Readme => c instanceof Readme);
  }

  description: string | undefined;
  private readonly entries: Array<SectionEntry> = [];

  constructor(project: Project, options: ReadmeOptions = {}) {
    super(project, 'README.md', {});
    this.description = options.description;

    // projen's projects add a sample README.md, which this replaces
    for (const sample of project.components) {
      if (sample instanceof SampleReadme) {
        sample.node.scope?.node.tryRemoveChild(sample.node.id);
      }
    }
  }

  /**
   * The sections, in the order they appear in the README
   */
  get sections(): Array<Section> {
    return this.orderedEntries().map((e) => e.section);
  }

  /**
   * Adds a section, or replaces the section with the same title
   *
   * @returns the section
   */
  addSection(
    title: string,
    body: string,
    options: AddSectionOptions = {},
  ): Section {
    const index = this.findIndex(title);
    const order =
      options.order ??
      (index >= 0 ? this.entries[index].order : ReadmeOrder.DEFAULT);
    const entry = { section: new Section({ title, body }), order };
    if (index >= 0) {
      this.entries[index] = entry;
    } else {
      this.entries.push(entry);
    }
    return entry.section;
  }

  /**
   * Removes the section with the given title
   *
   * @returns whether a section was removed
   */
  removeSection(title: string): boolean {
    const index = this.findIndex(title);
    if (index < 0) {
      return false;
    }
    this.entries.splice(index, 1);
    return true;
  }

  /**
   * The section with the given title, if there is one
   */
  tryFindSection(title: string): Section | undefined {
    const index = this.findIndex(title);
    return index >= 0 ? this.entries[index].section : undefined;
  }

  protected synthesizeContent(_: IResolver): string | undefined {
    let content = this.marker ? `<!-- ${this.marker} -->\n\n` : '';
    content = content.concat(`# ${this.project.name}\n\n`);
    content = content.concat(this.description ? `${this.description}\n\n` : '');
    return content.concat(this.sections.map((s) => s.synth()).join('\n\n'));
  }

  private findIndex(title: string): number {
    return this.entries.findIndex((e) => e.section.options.title === title);
  }

  // Array.prototype.sort is stable, so sections with the same order keep the order they were added in
  private orderedEntries(): Array<SectionEntry> {
    return [...this.entries].sort((a, b) => a.order - b.order);
  }
}
