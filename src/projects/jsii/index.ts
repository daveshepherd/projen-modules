import { cdk } from 'projen';
import { JsiiProjectOptions } from './jsii-project-options';
import { CodeOwners } from '../../components/github/codeowners';
import { DEFAULT_PULL_REQUEST_TEMPLATE } from '../../components/github/pull-request-template';
import { mergeOptions } from '../../utils/merge-options';

function getOptions(options: JsiiProjectOptions) {
  const { name } = options;

  const defaults = {
    name,
    autoMerge: false,
    defaultReleaseBranch: 'main',
    gitignore: ['.npmrc', '.vscode'],
    pullRequestTemplateContents: DEFAULT_PULL_REQUEST_TEMPLATE,
    projenrcTs: true,
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

export * from './jsii-project-options';
