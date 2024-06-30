import { cdk } from 'projen';
import { mergeOptions } from '../utils/merge-options';

export interface JsiiProjectOptions extends cdk.JsiiProjectOptions {}

function getOptions(options: JsiiProjectOptions) {
  const { name } = options;

  const defaults = {
    name,
    autoMerge: false,
    defaultReleaseBranch: 'main',
    gitignore: ['.npmrc', '.vscode'],
    pullRequestTemplateContents: [
      '### Background',
      '_Short description of issue being resolved or a feature being added._',
      '',
      '**JIRA TICKET**: [SAB-](https://unibuddy.atlassian.net/browse/SAB-)',
      '',
      '### Problems Encountered / Decisions Made / Potential Solutions Abandoned',
      '_Any problems you had when working on the PR and what decisions or trade-offs you had to make._',
      '',
      '### Check List',
      '* [ ] Added tests for all new code.',
      '* [ ] Added comments and documentation for new code.',
    ],
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
