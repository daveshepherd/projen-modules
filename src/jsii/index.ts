import { cdk } from 'projen';
import { CodeOwners } from '../github/codeowners';
import { DEFAULT_PULL_REQUEST_TEMPLATE } from '../github/pull-request-template';
import { mergeOptions } from '../utils/merge-options';

export interface JsiiProjectOptions extends cdk.JsiiProjectOptions {
  /**
   * List of teams used to generate the CODEOWNERS file
   * @defaultValue []
   */
  readonly codeOwners: Array<string>;
}

function getOptions(options: JsiiProjectOptions) {
  const { name } = options;

  const defaults = {
    name,
    autoMerge: false,
    defaultReleaseBranch: 'main',
    gitignore: ['.npmrc', '.vscode'],
    pullRequestTemplateContents: DEFAULT_PULL_REQUEST_TEMPLATE,
    projenrcTs: true,
    readme: {
      filename: 'README.md',
      contents: `# ${name}

Example README
    `,
    },
  } satisfies Partial<JsiiProjectOptions>;

  return mergeOptions(defaults, options);
}

/**
 * A JSII project in TypeScript
 *
 *
 * @pjid jsii-project
 */
export class JsiiProject extends cdk.JsiiProject {
  constructor(options: JsiiProjectOptions) {
    const mergedOptions = getOptions(options);

    super({
      ...mergedOptions,
    });

    new CodeOwners(this, mergedOptions.codeOwners);
  }
}
