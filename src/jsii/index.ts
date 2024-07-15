import { cdk } from 'projen';
import { JsiiProjectOptions } from './jsii-project-options';
import { Readme } from '../components/readme';
import { CodeOwners } from '../github/codeowners';
import { DEFAULT_PULL_REQUEST_TEMPLATE } from '../github/pull-request-template';
import { mergeOptions } from '../utils/merge-options';

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
      enable: true,
      filename: 'README.md',
      lines: [],
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
  readme?: Readme;

  constructor(options: JsiiProjectOptions) {
    const mergedOptions = getOptions(options);

    super({
      ...(mergedOptions as cdk.JsiiProjectOptions),
    });
    if (mergedOptions.readme.enable) {
      this.readme = new Readme(this, {
        filename: mergedOptions.readme.filename,
        lines: mergedOptions.readme.lines,
      });
    }

    new CodeOwners(this, mergedOptions.codeOwners);
  }
}

export * from './jsii-project-options';
