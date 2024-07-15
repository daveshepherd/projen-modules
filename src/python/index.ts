import { PythonProject } from 'projen/lib/python';
import { PythonPackageOptions } from './python-package-options';
import { Readme } from '../components';
import { CodeOwners } from '../github/codeowners';
import { DEFAULT_PULL_REQUEST_TEMPLATE } from '../github/pull-request-template';
import { mergeOptions } from '../utils/merge-options';

function getOptions(options: PythonPackageOptions) {
  const { name } = options;

  const defaults = {
    name,
    pullRequestTemplate: true,
    pullRequestTemplateContents: DEFAULT_PULL_REQUEST_TEMPLATE,
    readme: {
      enable: true,
      filename: 'README.md',
      lines: [],
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
  readme?: Readme;

  constructor(options: PythonPackageOptions) {
    const mergedOptions = getOptions(options);

    super({
      ...mergedOptions,
    });
    if (mergedOptions.readme.enable) {
      this.readme = new Readme(this, {
        filename: mergedOptions.readme.filename,
        lines: mergedOptions.readme.lines,
      });
    }

    new CodeOwners(this, mergedOptions.codeOwners);
    if (mergedOptions.pullRequestTemplate ?? true) {
      this.github?.addPullRequestTemplate(
        ...(mergedOptions.pullRequestTemplateContents ?? []),
      );
    }
  }
}

export * from './python-package-options';
