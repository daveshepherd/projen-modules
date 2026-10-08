import { github } from 'projen';
import {
  AwsCdkTypeScriptApp,
  AwsCdkTypeScriptAppOptions,
  LambdaRuntime,
} from 'projen/lib/awscdk';
import { CdkTypeScriptAppOptions } from './cdk-typescript-app-options';
import { CodeOwners } from '../../components/github/codeowners';
import { CodeQl } from '../../components/github/codeql';
import {
  autoMergeOptions,
  configureMergify,
} from '../../components/github/mergify';
import { DEFAULT_PULL_REQUEST_TEMPLATE } from '../../components/github/pull-request-template';
import { Readme } from '../../components/readme';
import { mergeOptions } from '../../utils/merge-options';

function getOptions(options: CdkTypeScriptAppOptions) {
  const { name } = options;

  const defaults = {
    name,
    defaultReleaseBranch: 'main',
    gitignore: ['.npmrc', '.vscode'],
    pullRequestTemplateContents: DEFAULT_PULL_REQUEST_TEMPLATE,
    projenrcTs: true,
    // authenticate as the GitHub App, so mergify can approve upgrade pull requests
    projenCredentials: github.GithubCredentials.fromApp({}),
    lambdaOptions: { runtime: LambdaRuntime.NODEJS_24_X },
    jestOptions: { jestVersion: '^30' },
    // match the lambda runtime, unless derived from minNodeVersion; a consumer
    // @types/node in devDeps is added later, so replaces this one
    devDeps: options.minNodeVersion ? [] : ['@types/node@^24'],
  } satisfies Partial<CdkTypeScriptAppOptions>;

  return mergeOptions(defaults, options);
}

/**
 * A CDK application in TypeScript
 *
 * Defaults to the Node.js 24 Lambda runtime (`lambdaOptions.runtime`) with
 * matching `@types/node`, and Jest 30 (`jestOptions.jestVersion`).
 *
 * @pjid cdk-typescript-app
 */
export class CdkTypeScriptApp extends AwsCdkTypeScriptApp {
  readme: Readme;

  constructor(options: CdkTypeScriptAppOptions) {
    const mergedOptions = getOptions(options);

    super({
      ...mergedOptions,
      autoMergeOptions: autoMergeOptions(mergedOptions),
    } as AwsCdkTypeScriptAppOptions);

    new CodeOwners(this, mergedOptions.codeOwners);
    this.readme = new Readme(this, {
      description: mergedOptions.readme?.description,
    });
    this.readme.addSection(
      'Getting Started',
      '```sh\nyarn install\nnpx projen build\n```',
    );
    this.readme.addSection(
      'CDK',
      `On first run of a CDK installation:

\`\`\`sh
npx cdk bootstrap
\`\`\`

Build the project
\`\`\`sh
npx projen build
\`\`\`

Deploy the CDK stack
\`\`\`sh
npx projen deploy
\`\`\``,
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

export * from './cdk-typescript-app-options';
