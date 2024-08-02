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
    autoMerge: false,
    defaultReleaseBranch: 'main',
    githubOptions: {
      workflows: false,
    },
    gitignore: ['.npmrc', '.vscode'],
    pullRequestTemplateContents: DEFAULT_PULL_REQUEST_TEMPLATE,
    projenrcTs: true,
    readme: {
      enable: true,
      filename: 'README.md',
      lines: [],
    },
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
  readme?: Readme;

  constructor(options: NpmPackageOptions) {
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
    new NpmCircleCi(this);
  }
}

export * from './npm-package-options';
