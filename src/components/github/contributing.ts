import { Component, github, Project, ReleasableCommits } from 'projen';
import { NodeProject } from 'projen/lib/javascript';
import { formatList } from './format';
import { Readme, ReadmeOrder } from '../readme';

// projen's default pull request title types; its PullRequestLint keeps its
// options private, so they are read from the project's options instead
const DEFAULT_TYPES = ['feat', 'fix', 'chore'];

export interface ContributingOptions {
  /**
   * The project's GitHub options, which configure the pull request title check
   */
  readonly githubOptions?: github.GitHubOptions;
  /**
   * The project's releasable commits, which decide whether other types release
   */
  readonly releasableCommits?: ReleasableCommits;
  /**
   * The project's major version, which keeps releases at that major version
   */
  readonly majorVersion?: number;
  /**
   * The project's minimum major version, which keeps releases at or above it
   */
  readonly minMajorVersion?: number;
}

interface PullRequestTitle {
  readonly types: Array<string>;
  readonly requireScope: boolean;
  readonly scopes: Array<string>;
  readonly release: boolean;
  readonly everyCommitReleases: boolean;
  readonly canBePreMajor: boolean;
}

function titleParagraph(title: PullRequestTitle): string {
  const scope = title.scopes.length
    ? `${title.requireScope ? 'and a scope' : 'and, optionally, a scope'} from ${formatList(title.scopes)}`
    : title.requireScope
      ? 'and a scope'
      : '';
  const exampleScope =
    title.requireScope || title.scopes.length
      ? `(${title.scopes[0] ?? 'scope'})`
      : '';
  return `Pull request titles must follow [Conventional Commits](https://www.conventionalcommits.org), with one of the types ${formatList(title.types)}${scope ? ` ${scope}` : ''}, such as \`${title.types[0]}${exampleScope}: describe the change\`. The **Validate PR title** check fails until the title does.`;
}

function releaseParagraph(title: PullRequestTitle, mergeQueue: boolean): string {
  const bumps = [
    ...(title.types.includes('feat') ? ['`feat` releases a minor version'] : []),
    ...(title.types.includes('fix')
      ? [`\`fix\`${title.types.includes('feat') ? '' : ' releases'} a patch version`]
      : []),
  ];
  const otherTypes = title.types.filter((t) => t !== 'feat' && t !== 'fix');
  const others = !otherTypes.length
    ? ''
    : title.everyCommitReleases
      ? ' Other types still release a patch version.'
      : ' Other types only release a patch version if `releasableCommits` counts them.';
  const intro = mergeQueue
    ? 'The type decides the next release'
    : 'Once a pull request is squash merged with its title as the commit message, its type decides the next release';
  const preMajorBumps = title.types.includes('feat')
    ? 'a breaking change releases a minor version and `feat` a patch version'
    : 'a breaking change releases a minor version';
  const preMajor = title.canBePreMajor
    ? ` While the version is below 1.0.0, ${preMajorBumps}.`
    : '';
  return `${intro}: ${bumps.length ? `${bumps.join(' and ')}, while ` : ''}a breaking change, marked by \`!\` after the type (such as \`${title.types[0]}!: ...\`) or a \`BREAKING CHANGE:\` footer, releases a major version.${others}${preMajor}`;
}

/**
 * The Contributing section of the README, describing the pull request title
 * check and the merge queue that are configured
 */
export class Contributing extends Component {
  /**
   * The project's Contributing section, created if it does not have one yet
   */
  public static of(project: Project): Contributing {
    return (
      project.components.find(
        (c): c is Contributing => c instanceof Contributing,
      ) ?? new Contributing(project)
    );
  }

  private pullRequestTitle?: PullRequestTitle;
  private mergeQueue?: string;

  private constructor(project: Project) {
    super(project);
  }

  /**
   * Describes the pull request title check, if the project runs it
   */
  configurePullRequestTitle(options: ContributingOptions) {
    const githubOptions = options.githubOptions ?? {};
    const lintOptions = githubOptions.pullRequestLintOptions ?? {};
    const project = this.project as Project & { github?: github.GitHub };
    if (
      !project.github?.workflowsEnabled ||
      !(githubOptions.pullRequestLint ?? true) ||
      !(lintOptions.semanticTitle ?? true)
    ) {
      return;
    }
    const titleOptions = lintOptions.semanticTitleOptions ?? {};
    this.pullRequestTitle = {
      types: titleOptions.types ?? DEFAULT_TYPES,
      requireScope: titleOptions.requireScope ?? false,
      scopes: titleOptions.scopes ?? [],
      release:
        this.project instanceof NodeProject &&
        this.project.release !== undefined,
      everyCommitReleases: options.releasableCommits === undefined,
      // the version comes from git tags, so only these options rule out a
      // version below 1.0.0
      canBePreMajor:
        (options.majorVersion ?? 0) < 1 && (options.minMajorVersion ?? 0) < 1,
    };
    this.render();
  }

  /**
   * Describes how pull requests are merged by the merge queue
   */
  configureMergeQueue(description: string) {
    this.mergeQueue = description;
    this.render();
  }

  private render() {
    const paragraphs = [
      ...(this.pullRequestTitle ? [titleParagraph(this.pullRequestTitle)] : []),
      ...(this.mergeQueue ? [this.mergeQueue] : []),
      ...(this.pullRequestTitle?.release
        ? [releaseParagraph(this.pullRequestTitle, this.mergeQueue !== undefined)]
        : []),
    ];
    if (paragraphs.length) {
      Readme.of(this.project)?.addSection(
        CONTRIBUTING_TITLE,
        paragraphs.join('\n\n'),
        { order: ReadmeOrder.CONTRIBUTING },
      );
    }
  }
}

const CONTRIBUTING_TITLE = 'Contributing';
