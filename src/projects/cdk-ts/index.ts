import {
  AwsCdkTypeScriptApp,
  AwsCdkTypeScriptAppOptions,
} from 'projen/lib/awscdk';
import { CdkTypeScriptAppOptions } from './cdk-typescript-app-options';
import { CodeOwners } from '../../components/github/codeowners';
import { DEFAULT_PULL_REQUEST_TEMPLATE } from '../../components/github/pull-request-template';
import { Readme } from '../../components/readme';
import { mergeOptions } from '../../utils/merge-options';

function getOptions(options: CdkTypeScriptAppOptions) {
  const { name } = options;

  const defaults = {
    name,
    defaultReleaseBranch: 'main',
    githubOptions: {
      workflows: false,
    },
    gitignore: ['.npmrc', '.vscode'],
    pullRequestTemplateContents: DEFAULT_PULL_REQUEST_TEMPLATE,
    projenrcTs: true,
  } satisfies Partial<CdkTypeScriptAppOptions>;

  return mergeOptions(defaults, options);
}

/**
 * A CDK application in TypeScript
 *
 *
 * @pjid cdk-typescript-app
 */
export class CdkTypeScriptApp extends AwsCdkTypeScriptApp {
  readme: Readme;

  constructor(options: CdkTypeScriptAppOptions) {
    const mergedOptions = getOptions(options);

    super({
      ...mergedOptions,
    } as AwsCdkTypeScriptAppOptions);

    new CodeOwners(this, mergedOptions.codeOwners);
    this.readme = new Readme(this, {
      description: mergedOptions.readme?.description,
    });
    this.readme.addSection(
      'Getting Started',
      '```sh\nyarn install\nnpx projen build\n```',
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

export * from './cdk-typescript-app-options';
