import { github, Project } from 'projen';

export interface MergifyOptions {
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
  readonly github?: github.GitHub;
  readonly buildWorkflow?: {
    readonly buildJobIds?: Array<string>;
  };
};

export function configureMergify(
  project: MergifyProject,
  options: MergifyOptions = {},
) {
  const mergify = project.github?.mergify;
  if (!mergify) {
    return;
  }

  const buildJobIds = project.buildWorkflow?.buildJobIds ?? [];

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
}
