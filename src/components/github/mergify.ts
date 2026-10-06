import { github, Project } from 'projen';
import { CodeQl } from './codeql';
import { Readme } from '../readme';

export interface MergifyOptions {
  /**
   * Number of approving reviews the merge queue waits for, which should match
   * `autoMergeOptions.approvedReviews`. Use 0 for a repository with a single
   * maintainer, who cannot approve their own pull requests.
   *
   * @default 1
   */
  readonly approvedReviews?: number;
  readonly assignUsers?: Array<string>;
  readonly reportingMethod?: string;
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

function githubConfigurationSection(
  requiredChecks: Array<string>,
  approvedReviews: number,
  codeScanning: boolean,
): string {
  const statusChecks = requiredChecks.length
    ? 'the checks that `.mergify.yml` waits for: `' +
      requiredChecks.join('`, `') +
      '`'
    : 'any CI checks added to the project (none are configured yet), keeping them in sync with `.mergify.yml`';
  const approvals = approvedReviews === 1 ? '1 required approval' : `${approvedReviews} required approvals`;
  const queued = approvedReviews
    ? 'Once a pull request is approved and its checks pass'
    : 'Once a pull request\'s checks pass';
  const soleMaintainer = approvedReviews
    ? `

A repository with a single maintainer, who cannot approve their own pull requests, should set \`autoMergeOptions: { approvedReviews: 0 }\` in \`.projenrc.ts\` and set the ruleset's required approvals to 0. Pull requests are then merged as soon as their checks pass.`
    : '';
  const codeScanningSettings = codeScanning
    ? `

### Code scanning

CodeQL runs from \`.github/workflows/codeql.yml\`, which is managed by projen. In **Settings → Advanced Security**, leave CodeQL **Default setup** off, because it cannot run alongside this workflow. Under **Protection rules**, keep the **Check run failure threshold** at **High or higher** for security alerts and **Errors** for other alerts, as this decides whether the \`${CodeQl.CHECK_NAME}\` check fails. Private repositories also need GitHub Code Security enabled there for code scanning results to be uploaded.`
    : '';
  const codeScanningRule = codeScanning
    ? `
* **Require code scanning results**, with the tool **CodeQL**, security alerts set to **High or higher** and alerts set to **Errors**. Mergify is exempt from this rule, so \`.mergify.yml\` also waits for the \`${CodeQl.CHECK_NAME}\` check instead.`
    : '';
  return `All pull requests are merged by the [Mergify](https://mergify.com) merge queue, configured in \`.mergify.yml\`. ${queued}, Mergify queues it, brings it up to date with the default branch, waits for the checks again and squash merges it. Draft pull requests and those labelled \`do-not-merge\` are not merged.

The repository must be configured as below so that nothing can be merged without going through the queue.

### Mergify

Install the [Mergify GitHub App](https://github.com/apps/mergify) and give it access to this repository.

### Pull request settings

In **Settings → General → Pull Requests**:
* Allow squash merging only (untick merge commits and rebase merging), matching the queue's merge method.
* Untick **Allow auto-merge**, because GitHub's own auto-merge merges outside the queue.
* Tick **Automatically delete head branches**.${codeScanningSettings}

### Branch ruleset

In **Settings → Rules → Rulesets**, create a branch ruleset with enforcement **Active** that targets the default branch, and set:
* **Bypass list**: the **Mergify** app only, in **Exempt** mode. Do not add admins or other roles, as anyone on this list can merge without the queue.
* **Restrict updates**: only bypass actors can update the branch, so pull requests cannot be merged from the GitHub UI or CLI and commits cannot be pushed directly.
* **Restrict deletions** and **Block force pushes**.
* **Require a pull request before merging**, with ${approvals}.
* **Require status checks to pass**, listing ${statusChecks}. Leave **Require branches to be up to date before merging** unticked, as the queue already updates and retests each pull request.${codeScanningRule}

Do not enable GitHub's own **Require merge queue** rule, as it competes with Mergify.

If the queue is unavailable and a change has to be merged, add yourself to the bypass list temporarily and remove yourself afterwards.${soleMaintainer}`;
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
    githubConfigurationSection(
      buildJobIds,
      options.approvedReviews ?? 1,
      codeScanning,
    ),
  );
}
