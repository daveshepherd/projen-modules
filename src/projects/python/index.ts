import { PythonProject } from 'projen/lib/python';
import { PythonPackageOptions } from './python-package-options';
import { CodeOwners } from '../../components/github/codeowners';
import { DEFAULT_PULL_REQUEST_TEMPLATE } from '../../components/github/pull-request-template';
import { Readme } from '../../components/readme';
import { mergeOptions } from '../../utils/merge-options';

function getOptions(options: PythonPackageOptions) {
  const { name } = options;

  const defaults = {
    name,
    pullRequestTemplate: true,
    pullRequestTemplateContents: DEFAULT_PULL_REQUEST_TEMPLATE,
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
    const readme = new Readme(this);
    readme.addSection(
      'Getting Started',
      '```sh\nyarn install\nnpx projen build\n```',
    );
  }
}

export * from './python-package-options';