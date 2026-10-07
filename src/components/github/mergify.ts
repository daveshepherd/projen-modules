import { github, Project } from 'projen';
import { CodeQl } from './codeql';
import { Readme } from '../readme';

export interface MergifyOptions {
  /**
   * Number of approving reviews the merge queue waits for, which should match
   * `autoMergeOptions.approvedReviews`
   *
   * @default 1
   */
  readonly approvedReviews?: number;
  readonly assignUsers?: Array<string>;
  readonly reportingMethod?: string;
  /**
   * Authors whose pull requests the merge queue merges without an approval, such
   * as the single maintainer of a repository, who cannot approve their own pull
   * requests. Pull requests from anyone else still need `approvedReviews`.
   *
   * @default []
   */
  readonly trustedAuthors?: Array<string>;
  /**
   * Author of the projen upgrade pull requests that are automatically approved
   *
   * @default 'endor-projen[bot]'
   */
  readonly upgradeAuthor?: string;
}

type MergifyProject = Project & {
  readonly autoMerge?: github.AutoMerge;
  readonly github?: github.GitHub;
  readonly buildWorkflow?: {
    readonly buildJobIds?: Array<string>;
  };
  readonly readme?: Readme;
};

/**
 * Options for projen's auto merge, which requires its approvals from every
 * author, so with trusted authors `configureMergify` requires them instead
 */
export function autoMergeOptions(options: {
  readonly autoMergeOptions?: github.AutoMergeOptions;
  readonly trustedAuthors?: Array<string>;
}): github.AutoMergeOptions | undefined {
  if (!options.trustedAuthors?.length) {
    return options.autoMergeOptions;
  }
  return { ...options.autoMergeOptions, approvedReviews: 0 };
}

function formatList(values: Array<string>): string {
  const quoted = values.map((value) => '`' + value + '`');
  return quoted.length > 1
    ? `${quoted.slice(0, -1).join(', ')} or ${quoted[quoted.length - 1]}`
    : quoted.join('');
}

interface GithubConfiguration {
  readonly approvedReviews: number;
  readonly codeScanning: boolean;
  readonly requiredChecks: Array<string>;
  readonly trustedAuthors: Array<string>;
}

function queueDescription(config: GithubConfiguration): string {
  if (!config.approvedReviews) {
    return "Once a pull request's checks pass";
  }
  if (config.trustedAuthors.length) {
    return `Once a pull request is approved, or is opened by ${formatList(config.trustedAuthors)}, and its checks pass`;
  }
  return 'Once a pull request is approved and its checks pass';
}

function approvalGuidance(config: GithubConfiguration): string {
  if (!config.approvedReviews) {
    return `

**Warning:** no approvals are required, so the queue merges any pull request whose checks pass, including one from a fork that changes the workflows producing those checks. Set \`autoMergeOptions.approvedReviews\` to at least 1, and use \`trustedAuthors\` for maintainers who cannot approve their own pull requests.`;
  }
  if (!config.trustedAuthors.length) {
    return `

A repository with a single maintainer, who cannot approve their own pull requests, should list them in \`trustedAuthors\` in \`.projenrc.ts\`. Their pull requests are then merged without an approval, while everyone else's still need one.`;
  }
  return '';
}

function githubConfigurationSection(config: GithubConfiguration): string {
  const statusChecks = config.requiredChecks.length
    ? 'the checks that `.mergify.yml` waits for: `' +
      config.requiredChecks.join('`, `') +
      '`'
    : 'any CI checks added to the project (none are configured yet), keeping them in sync with `.mergify.yml`';
  const approvals = config.trustedAuthors.length
    ? '0 required approvals, because Mergify requires approvals itself for authors other than ' +
      formatList(config.trustedAuthors) +
      ' and is exempt from this rule'
    : config.approvedReviews === 1
      ? '1 required approval'
      : `${config.approvedReviews} required approvals`;
  const codeScanningSettings = config.codeScanning
    ? `

### Code scanning

CodeQL runs from \`.github/workflows/codeql.yml\`, which is managed by projen. In **Settings → Advanced Security**, leave CodeQL **Default setup** off, because it cannot run alongside this workflow. Under **Protection rules**, keep the **Check run failure threshold** at **High or higher** for security alerts and **Errors** for other alerts, as this decides whether the \`${CodeQl.CHECK_NAME}\` check fails. Private repositories also need GitHub Code Security enabled there for code scanning results to be uploaded.`
    : '';
  const codeScanningRule = config.codeScanning
    ? `
* **Require code scanning results**, with the tool **CodeQL**, security alerts set to **High or higher** and alerts set to **Errors**. Mergify is exempt from this rule, so \`.mergify.yml\` also waits for the \`${CodeQl.CHECK_NAME}\` check instead.`
    : '';
  return `All pull requests are merged by the [Mergify](https://mergify.com) merge queue, configured in \`.mergify.yml\`. ${queueDescription(config)}, Mergify queues it, brings it up to date with the default branch, waits for the checks again and squash merges it. Draft pull requests and those labelled \`do-not-merge\` are not merged.

The repository must be configured as below so that nothing can be merged without going through the queue.

### Mergify

Install the [Mergify GitHub App](https://github.com/apps/mergify) and give it access to this repository.

### Pull request settings

In **Settings → General → Pull Requests**:
* Allow squash merging only (untick merge commits and rebase merging), matching the queue's merge method.
* Untick **Allow auto-merge**, because GitHub's own auto-merge merges outside the queue.
* Tick **Automatically delete head branches**.

### Actions settings

In **Settings → Actions → General**, set **Approval for running fork pull request workflows from contributors** to **Require approval for all external contributors**. A pull request from a fork runs its own copy of the workflows, so it can change how the required checks pass.${codeScanningSettings}

### Branch ruleset

In **Settings → Rules → Rulesets**, create a branch ruleset with enforcement **Active** that targets the default branch, and set:
* **Bypass list**: the **Mergify** app only, in **Exempt** mode. Do not add admins or other roles, as anyone on this list can merge without the queue.
* **Restrict updates**: only bypass actors can update the branch, so pull requests cannot be merged from the GitHub UI or CLI and commits cannot be pushed directly.
* **Restrict deletions** and **Block force pushes**.
* **Require a pull request before merging**, with ${approvals}. Tick **Dismiss stale pull request approvals when new commits are pushed**, so that commits pushed after an approval need approving again before the queue merges them.
* **Require status checks to pass**, listing ${statusChecks}. Leave **Require branches to be up to date before merging** unticked, as the queue already updates and retests each pull request.${codeScanningRule}

Do not enable GitHub's own **Require merge queue** rule, as it competes with Mergify.

If the queue is unavailable and a change has to be merged, add yourself to the bypass list temporarily and remove yourself afterwards.${approvalGuidance(config)}`;
}

export function configureMergify(
  project: MergifyProject,
  options: MergifyOptions = {},
) {
  const mergify = project.github?.mergify;
  if (!mergify) {
    return;
  }

  const buildJobIds = project.buildWorkflow?.buildJobIds ?? [];

  project.autoMerge?.addConditions('-draft');

  const approvedReviews = options.approvedReviews ?? 1;
  const trustedAuthors = options.trustedAuthors ?? [];
  if (trustedAuthors.length && approvedReviews) {
    const approvedOrTrusted: github.MergifyCondition = {
      or: [
        `#approved-reviews-by>=${approvedReviews}`,
        ...trustedAuthors.map((author) => `author=${author}`),
      ],
    };
    // projen types auto merge conditions as strings, but mergify accepts operators too
    project.autoMerge?.addConditions(approvedOrTrusted as unknown as string);
  }

  // Mergify is exempt from the ruleset's code scanning rule, so the queue enforces it instead
  const codeScanning = project.components.some((c) => c instanceof CodeQl);
  if (codeScanning) {
    project.autoMerge?.addConditions(`status-success=${CodeQl.CHECK_NAME}`);
  }

  mergify.addRule({
    name: 'Automatic approval for projen upgrade pull requests',
    conditions: [
      `author=${options.upgradeAuthor ?? 'endor-projen[bot]'}`,
      ...buildJobIds.map((id) => `status-success=${id}`),
    ],
    actions: {
      review: {
        type: 'APPROVE',
        message: 'Automatically approving projen upgrade',
      },
    },
  });

  mergify.addRule({
    name: 'Assign PR when check fails',
    conditions: ['#check-failure > 0'],
    actions: {
      assign: {
        add_users: options.assignUsers ?? ['daveshepherd'],
      },
    },
  });

  project.tryFindObjectFile('.mergify.yml')?.addOverride(
    'merge_protections_settings.reporting_method',
    options.reportingMethod ?? 'deployments',
  );

  project.readme?.addSection(
    'GitHub Configuration',
    githubConfigurationSection({
      approvedReviews,
      codeScanning,
      requiredChecks: buildJobIds,
      trustedAuthors,
    }),
  );
}
