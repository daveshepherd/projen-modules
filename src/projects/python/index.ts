import { github } from 'projen';
import { PythonProject, PythonProjectOptions } from 'projen/lib/python';
import { PythonPackageOptions } from './python-package-options';
import { CodeOwners } from '../../components/github/codeowners';
import { CodeQl } from '../../components/github/codeql';
import {
  autoMergeOptions,
  configureMergify,
} from '../../components/github/mergify';
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
  readonly autoMerge?: github.AutoMerge;
  readme: Readme;

  constructor(options: PythonPackageOptions) {
    const mergedOptions = getOptions(options);

    super({
      ...mergedOptions,
    } as PythonProjectOptions);

    new CodeOwners(this, mergedOptions.codeOwners);
    if (mergedOptions.pullRequestTemplate ?? true) {
      this.github?.addPullRequestTemplate(
        ...(mergedOptions.pullRequestTemplateContents ?? []),
      );
    }
    this.readme = new Readme(this, {
      description: mergedOptions.readme?.description,
    });
    this.readme.addSection(
      'Getting Started',
      '```sh\nyarn install\nnpx projen build\n```',
    );
    if ((mergedOptions.codeql ?? true) && this.github?.workflowsEnabled) {
      new CodeQl(this.github, {
        languages: ['python', 'actions'],
      });
    }
    // projen only wires the merge queue up for node projects
    if ((mergedOptions.autoMerge ?? true) && this.github?.mergify) {
      this.autoMerge = new github.AutoMerge(
        this.github,
        autoMergeOptions(mergedOptions),
      );
      configureMergify(this, {
        approvedReviews: mergedOptions.autoMergeOptions?.approvedReviews,
        trustedAuthors: mergedOptions.trustedAuthors,
      });
    }
  }
}

export * from './python-package-options';
