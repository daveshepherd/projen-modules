import { PythonProject, PythonProjectOptions } from 'projen/lib/python';
import { DEFAULT_PULL_REQUEST_TEMPLATE } from '../github/pull-request-template';
import { mergeOptions } from '../utils/merge-options';

export interface PythonPackageOptions extends PythonProjectOptions {
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

export class PythonPackage extends PythonProject {
  constructor(options: PythonPackageOptions) {
    const mergedOptions = getOptions(options);

    super({
      ...mergedOptions,
    });

    if (mergedOptions.pullRequestTemplate ?? true) {
      this.github?.addPullRequestTemplate(
        ...(mergedOptions.pullRequestTemplateContents ?? []),
      );
    }
  }
}
