import { typescript } from 'projen';
import { NpmCircleCi } from '../circleci';
import { DEFAULT_PULL_REQUEST_TEMPLATE } from '../github/pull-request-template';
import { mergeOptions } from '../utils/merge-options';

export interface NpmPackageOptions
  extends typescript.TypeScriptProjectOptions {}

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
      filename: 'README.md',
      contents: `# ${name}

Example README
    `,
    },
  } satisfies Partial<NpmPackageOptions>;

  return mergeOptions(defaults, options);
}

export class NpmPackage extends typescript.TypeScriptProject {
  constructor(options: NpmPackageOptions) {
    const mergedOptions = getOptions(options);

    super({
      ...mergedOptions,
    });

    new NpmCircleCi(this);
  }
}
