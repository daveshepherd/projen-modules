import { MergifyRule } from 'projen/lib/github';
import { synthSnapshot } from 'projen/lib/util/synth';
import * as yaml from 'yaml';
import { configureMergify } from '../../../src/components/github/mergify';
import { JsiiProject, JsiiProjectOptions } from '../../../src/projects/jsii';

function createProject(options: Partial<JsiiProjectOptions> = {}) {
  return new JsiiProject({
    author: 'Test Person',
    authorAddress: 'test@example.com',
    autoMerge: false,
    codeOwners: ['test-team'],
    defaultReleaseBranch: 'main',
    name: 'test',
    repositoryUrl: 'https://github.com/example/example.git',
    ...options,
  });
}

function findRule(output: Record<string, any>, name: string): MergifyRule {
  return yaml
    .parse(output['.mergify.yml'])
    .pull_request_rules.find((rule: MergifyRule) => rule.name === name);
}

describe('Mergify Component', () => {
  it('creates the default mergify rules', () => {
    const project = createProject();

    configureMergify(project);

    const output = synthSnapshot(project);
    expect(output['.mergify.yml']).toBeDefined();

    const mergifyConfiguration = yaml.parse(output['.mergify.yml']);
    const autoApproveUpgradeRule: MergifyRule =
      mergifyConfiguration.pull_request_rules.find(
        (rule: MergifyRule) =>
          rule.name === 'Automatic approval for projen upgrade pull requests',
      );
    const assignRule: MergifyRule = mergifyConfiguration.pull_request_rules.find(
      (rule: MergifyRule) => rule.name === 'Assign PR when check fails',
    );

    expect(autoApproveUpgradeRule).toBeDefined();
    expect(autoApproveUpgradeRule.conditions).toStrictEqual([
      'author=endor-projen[bot]',
      'status-success=build',
      'status-success=package-js',
    ]);
    expect(assignRule).toBeDefined();
    expect(assignRule.actions.assign.add_users).toStrictEqual(['daveshepherd']);
    expect(
      mergifyConfiguration.merge_protections_settings.reporting_method,
    ).toBe('deployments');
  });

  it('supports custom assignees', () => {
    const project = createProject();

    configureMergify(project, {
      assignUsers: ['alice', 'bob'],
    });

    const output = synthSnapshot(project);
    const mergifyConfiguration = yaml.parse(output['.mergify.yml']);
    const assignRule: MergifyRule = mergifyConfiguration.pull_request_rules.find(
      (rule: MergifyRule) => rule.name === 'Assign PR when check fails',
    );

    expect(assignRule.actions.assign.add_users).toStrictEqual(['alice', 'bob']);
  });

  it('applies merge protection reporting method override', () => {
    const project = createProject();

    configureMergify(project, {
      reportingMethod: 'check-runs',
    });

    const output = synthSnapshot(project);
    const mergifyConfiguration = yaml.parse(output['.mergify.yml']);

    expect(mergifyConfiguration.merge_protections_settings).toBeDefined();
    expect(
      mergifyConfiguration.merge_protections_settings.reporting_method,
    ).toBe('check-runs');
  });

  it('supports a custom upgrade author', () => {
    const project = createProject();

    configureMergify(project, {
      upgradeAuthor: 'renovate[bot]',
    });

    const output = synthSnapshot(project);
    const autoApproveUpgradeRule = findRule(
      output,
      'Automatic approval for projen upgrade pull requests',
    );

    expect(autoApproveUpgradeRule.conditions[0]).toBe('author=renovate[bot]');
  });

  it('only requires the author when there is no build workflow', () => {
    const project = createProject({ buildWorkflow: false });

    configureMergify(project);

    const output = synthSnapshot(project);
    const autoApproveUpgradeRule = findRule(
      output,
      'Automatic approval for projen upgrade pull requests',
    );

    expect(autoApproveUpgradeRule.conditions).toStrictEqual([
      'author=endor-projen[bot]',
    ]);
  });

  it('documents the github configuration in the readme', () => {
    const project = createProject();

    configureMergify(project);

    const readme: string = synthSnapshot(project)['README.md'];
    expect(readme).toContain('## GitHub Configuration');
    expect(readme).toContain('**Restrict updates**');
    expect(readme).toContain(
      'the checks that `.mergify.yml` waits for: `build`, `package-js`.',
    );
  });

  it('documents that no checks are configured when there is no build workflow', () => {
    const project = createProject({ buildWorkflow: false });

    configureMergify(project);

    expect(synthSnapshot(project)['README.md']).toContain(
      'none are configured yet',
    );
  });

  it('does not merge draft pull requests', () => {
    const project = createProject({ autoMerge: true });

    const mergify = yaml.parse(synthSnapshot(project)['.mergify.yml']);

    expect(mergify.queue_rules[0].queue_conditions).toContain('-draft');
  });

  it('documents how a sole maintainer can merge without approvals', () => {
    const project = createProject();

    configureMergify(project);

    const readme: string = synthSnapshot(project)['README.md'];
    expect(readme).toContain('with 1 required approval.');
    expect(readme).toContain('autoMergeOptions: { approvedReviews: 0 }');
  });

  it('documents merging without approvals for a sole maintainer', () => {
    const project = createProject({
      autoMerge: true,
      autoMergeOptions: { approvedReviews: 0 },
    });

    const output = synthSnapshot(project);
    const mergify = yaml.parse(output['.mergify.yml']);
    const readme: string = output['README.md'];

    expect(mergify.queue_rules[0].queue_conditions).toContain(
      '#approved-reviews-by>=0',
    );
    expect(readme).toContain("Once a pull request's checks pass");
    expect(readme).toContain('with 0 required approvals.');
    expect(readme).not.toContain('A repository with a single maintainer');
  });

  it('does nothing when the project has no mergify', () => {
    const project = createProject({ github: false });

    configureMergify(project);

    const output = synthSnapshot(project);
    expect(output['.mergify.yml']).toBeUndefined();
    expect(output['README.md']).not.toContain('GitHub Configuration');
  });
});
