import { typescript } from 'projen';
import { NpmPackageOptions } from './npm-package-options';
import { NpmCircleCi } from '../../circleci';
import { CodeOwners } from '../../components/github/codeowners';
import { DEFAULT_PULL_REQUEST_TEMPLATE } from '../../components/github/pull-request-template';
import { Readme } from '../../components/readme';
import { mergeOptions } from '../../utils/merge-options';

function getOptions(options: NpmPackageOptions) {
  const { name } = options;

  const defaults = {
    name,
    defaultReleaseBranch: 'main',
    githubOptions: {
      workflows: false,
    },
    gitignore: ['.npmrc', '.vscode'],
    pullRequestTemplateContents: DEFAULT_PULL_REQUEST_TEMPLATE,
    projenrcTs: true,
  } satisfies Partial<NpmPackageOptions>;

  return mergeOptions(defaults, options);
}

/**
 * A NPM/node package in TypeScript
 *
 *
 * @pjid npm-package
 */
export class NpmPackage extends typescript.TypeScriptProject {
  readme: Readme;

  constructor(options: NpmPackageOptions) {
    const mergedOptions = getOptions(options);

    super({
      ...mergedOptions,
    } as typescript.TypeScriptProjectOptions);

    new CodeOwners(this, mergedOptions.codeOwners);
    new NpmCircleCi(this);
    this.readme = new Readme(this, {
      description: mergedOptions.readme?.description,
    });
    this.readme.addSection(
      'Getting Started',
      '```sh\nyarn install\nnpx projen build\n```',
    );
    if (this.autoMerge) {
      this.github?.mergify?.addRule({
        name: 'Automatic approval for projen upgrade pull requests',
        conditions: [
          'author=endor-projen[bot]',
          ...(this.buildWorkflow?.buildJobIds?.map(
            (id) => `status-success=${id}`,
          ) ?? []),
        ],
        actions: {
          review: {
            type: 'APPROVE',
            message: 'Automatically approving projen upgrade',
          },
        },
      });
    }
  }
}

export * from './npm-package-options';
