import { typescript } from 'projen';
import { NpmCircleCi } from '../circleci';
import { CodeOwners } from '../github/codeowners';
import { DEFAULT_PULL_REQUEST_TEMPLATE } from '../github/pull-request-template';
import { mergeOptions } from '../utils/merge-options';

export interface NpmPackageOptions extends typescript.TypeScriptProjectOptions {
  /**
   * List of teams used to generate the CODEOWNERS file
   * @defaultValue []
   */
  readonly codeOwners: Array<string>;
}

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

    new CodeOwners(this, mergedOptions.codeOwners);
    new NpmCircleCi(this);
  }
}
