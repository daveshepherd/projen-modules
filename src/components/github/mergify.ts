import { github, Project } from 'projen';

export interface MergifyOptions {
  readonly assignUsers?: Array<string>;
  readonly reportingMethod?: string;
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
  const reportingMethod = options.reportingMethod ?? 'deployments';

  project.github?.mergify?.addRule({
    name: 'Automatic approval for projen upgrade pull requests',
    conditions: [
      'author=endor-projen[bot]',
      ...(project.buildWorkflow?.buildJobIds?.map(
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

  project.github?.mergify?.addRule({
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
    reportingMethod,
  );
}