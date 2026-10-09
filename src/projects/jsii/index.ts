import { cdk, github } from 'projen';
import { JsiiProjectOptions } from './jsii-project-options';
import { CodeOwners } from '../../components/github/codeowners';
import { CodeQl } from '../../components/github/codeql';
import {
  autoMergeOptions,
  configureMergify,
} from '../../components/github/mergify';
import { DEFAULT_PULL_REQUEST_TEMPLATE } from '../../components/github/pull-request-template';
import { Readme, ReadmeOrder } from '../../components/readme';
import { gettingStartedCommands } from '../../components/readme/getting-started';
import { mergeOptions } from '../../utils/merge-options';

function getOptions(options: JsiiProjectOptions) {
  const { name } = options;

  const defaults = {
    name,
    autoMerge: true,
    defaultReleaseBranch: 'main',
    gitignore: ['.npmrc', '.vscode'],
    pullRequestTemplateContents: DEFAULT_PULL_REQUEST_TEMPLATE,
    projenrcTs: true,
    // authenticate as the GitHub App, so mergify can approve upgrade pull requests
    projenCredentials: github.GithubCredentials.fromApp({}),
    // ts-jest skips type-checking under the isolatedModules setting of the jsii dev tsconfig,
    // and jsii only compiles src, so type-check the test suite first
    typecheckTests: true,
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
  readme: Readme;

  constructor(options: JsiiProjectOptions) {
    const mergedOptions = getOptions(options);

    super({
      ...mergedOptions,
      autoMergeOptions: autoMergeOptions(mergedOptions),
    } as cdk.JsiiProjectOptions);

    new CodeOwners(this, mergedOptions.codeOwners);
    this.readme = new Readme(this, {
      description: mergedOptions.readme?.description,
    });
    this.readme.addSection(
      'Getting Started',
      `${gettingStartedCommands(this)}\n
This will:
* Install the dependencies
* Apply any projen changes
* Run tests
* Package project locally

Any files changed by projen should be committed to git.

Running the tests like this will update any snapshot files, this should be reviewed and committed to git.`,
      { order: ReadmeOrder.INTRODUCTION },
    );
    this.readme.addSection(
      'Testing',
      `Types of testing:
* Snapshot - projen project outputs are stored as a snapshot in the corresponding \`__snapshots__\` directory. When the project changes then it is expected that these snapshots change too and should be reviewed committed alongside the project.
* Unit tests - these assert on specific functionality of the project and should be written for any new functionality added.
`,
      { order: ReadmeOrder.USAGE },
    );
    if ((mergedOptions.codeql ?? true) && this.github?.workflowsEnabled) {
      new CodeQl(this.github, {
        branches: [mergedOptions.defaultReleaseBranch],
        languages: ['javascript-typescript', 'actions'],
      });
    }
    if (this.autoMerge) {
      configureMergify(this, {
        approvedReviews: mergedOptions.autoMergeOptions?.approvedReviews,
        trustedAuthors: mergedOptions.trustedAuthors,
      });
    }
  }
}

export * from './jsii-project-options';
