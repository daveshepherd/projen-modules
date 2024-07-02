import { cdk } from 'projen';
import { DEFAULT_PULL_REQUEST_TEMPLATE } from '../github/pull-request-template';
import { mergeOptions } from '../utils/merge-options';

export interface JsiiProjectOptions extends cdk.JsiiProjectOptions {}

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

export class JsiiProject extends cdk.JsiiProject {
  constructor(options: JsiiProjectOptions) {
    const mergedOptions = getOptions(options);

    super({
      ...mergedOptions,
    });
  }
}
