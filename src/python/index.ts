import { PythonProject, PythonProjectOptions } from 'projen/lib/python';
import { CodeOwners } from '../github/codeowners';
import { DEFAULT_PULL_REQUEST_TEMPLATE } from '../github/pull-request-template';
import { mergeOptions } from '../utils/merge-options';

export interface PythonPackageOptions extends PythonProjectOptions {
  /**
   * List of teams used to generate the CODEOWNERS file
   * @defaultValue []
   */
  readonly codeOwners: Array<string>;
  /**
   * Include a GitHub pull request template.
   *
   * @default true
   */
  readonly pullRequestTemplate?: boolean;

  /**
   * The contents of the pull request template.
   *
   * @default - default content
   */
  readonly pullRequestTemplateContents?: string[];
}

function getOptions(options: PythonPackageOptions) {
  const { name } = options;

  const defaults = {
    name,
    pullRequestTemplate: true,
    pullRequestTemplateContents: DEFAULT_PULL_REQUEST_TEMPLATE,
    readme: {
      filename: 'README.md',
      contents: `# ${name}

Example README
    `,
    },
  } satisfies Partial<PythonPackageOptions>;

  return mergeOptions(defaults, options);
}

/**
 * A Python package
 *
 *
 * @pjid python-package
 */
export class PythonPackage extends PythonProject {
  constructor(options: PythonPackageOptions) {
    const mergedOptions = getOptions(options);

    super({
      ...mergedOptions,
    });

    new CodeOwners(this, mergedOptions.codeOwners);
    if (mergedOptions.pullRequestTemplate ?? true) {
      this.github?.addPullRequestTemplate(
        ...(mergedOptions.pullRequestTemplateContents ?? []),
      );
    }
  }
}
