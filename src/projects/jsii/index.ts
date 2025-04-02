import { cdk } from 'projen';
import { JsiiProjectOptions } from './jsii-project-options';
import { CodeOwners } from '../../components/github/codeowners';
import { DEFAULT_PULL_REQUEST_TEMPLATE } from '../../components/github/pull-request-template';
import { Readme } from '../../components/readme';
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
    } as cdk.JsiiProjectOptions);

    new CodeOwners(this, mergedOptions.codeOwners);
    this.readme = new Readme(this, {
      description: mergedOptions.readme?.description,
    });
    this.readme.addSection(
      'Getting Started',
      `\`\`\`sh\nyarn install\nnpx projen build\n\`\`\`\n
This will:
* Install the dependencies
* Apply any projen changes
* Run tests
* Package project locally

Any files changed by projen should be committed to git.

Running the tests like this will update any snapshot files, this should be reviewed and committed to git.`,
    );
    this.readme.addSection(
      'Testing',
      `Types of testing:
* Snapshot - projen project outputs are stored as a snapshot in the corresponding \`__snapshots__\` directory. When the project changes then it is expected that these snapshots change too and should be reviewed committed alongside the project.
* Unit tests - these assert on specific functionality of the project and should be written for any new functionality added.
`,
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
      this.github?.mergify?.addRule({
        name: 'Assign PR when check fails',
        conditions: ['#check-failure > 0'],
        actions: {
          assign: {
            add_users: ['daveshepherd'],
          },
        },
      });
    }
  }
}

export * from './jsii-project-options';
