import { MergifyRule } from 'projen/lib/github';
import { synthSnapshot } from 'projen/lib/util/synth';
import * as yaml from 'yaml';
import { CodeQl } from '../../../src/components/github/codeql';
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

  it('documents trusted authors for a sole maintainer', () => {
    const project = createProject();

    configureMergify(project);

    const readme: string = synthSnapshot(project)['README.md'];
    expect(readme).toContain('with 1 required approval.');
    expect(readme).toContain('should list them in `trustedAuthors`');
    expect(readme).toContain('**Dismiss stale pull request approvals');
    expect(readme).toContain(
      '**Require approval for all external contributors**',
    );
  });

  it('merges pull requests from trusted authors without an approval', () => {
    const project = createProject({
      autoMerge: true,
      trustedAuthors: ['alice', 'bob'],
    });

    const output = synthSnapshot(project);
    const mergify = yaml.parse(output['.mergify.yml']);
    const readme: string = output['README.md'];

    expect(mergify.queue_rules[0].queue_conditions).toContainEqual({
      or: ['#approved-reviews-by>=1', 'author=alice', 'author=bob'],
    });
    expect(mergify.queue_rules[0].queue_conditions).not.toContain(
      '#approved-reviews-by>=1',
    );
    expect(readme).toContain(
      'Once a pull request is approved, or is opened by `alice` or `bob`, and its checks pass',
    );
    expect(readme).toContain('with 0 required approvals, because Mergify');
    expect(readme).not.toContain('should list them in `trustedAuthors`');
  });

  it('requires the configured approvals from untrusted authors', () => {
    const project = createProject({
      autoMerge: true,
      autoMergeOptions: { approvedReviews: 2 },
      trustedAuthors: ['alice'],
    });

    const mergify = yaml.parse(synthSnapshot(project)['.mergify.yml']);

    expect(mergify.queue_rules[0].queue_conditions).toContainEqual({
      or: ['#approved-reviews-by>=2', 'author=alice'],
    });
  });

  it('warns when no approvals are required', () => {
    const project = createProject({
      autoMerge: true,
      autoMergeOptions: { approvedReviews: 0 },
    });

    const readme: string = synthSnapshot(project)['README.md'];

    expect(readme).toContain("Once a pull request's checks pass");
    expect(readme).toContain('with 0 required approvals.');
    expect(readme).toContain('**Warning:** no approvals are required');
  });

  it('does nothing when the project has no mergify', () => {
    const project = createProject({ github: false });

    configureMergify(project);

    const output = synthSnapshot(project);
    expect(output['.mergify.yml']).toBeUndefined();
    expect(output['README.md']).not.toContain('GitHub Configuration');
  });

  describe('build jobs added after configuration', () => {
    const addLintJob = (project: JsiiProject) =>
      project.buildWorkflow?.addPostBuildJob('lint', {
        permissions: {},
        runsOn: ['ubuntu-latest'],
        steps: [{ run: 'echo lint' }],
      });

    it('approves upgrades only once every build job passes', () => {
      const project = createProject();
      configureMergify(project);

      addLintJob(project);

      const rule = findRule(
        synthSnapshot(project),
        'Automatic approval for projen upgrade pull requests',
      );
      expect(rule.conditions).toStrictEqual([
        'author=endor-projen[bot]',
        'status-success=build',
        'status-success=package-js',
        'status-success=lint',
      ]);
    });

    it('lists them in the readme', () => {
      const project = createProject();
      configureMergify(project);

      addLintJob(project);

      expect(synthSnapshot(project)['README.md']).toContain(
        'the checks that `.mergify.yml` waits for: `build`, `package-js`, `lint`.',
      );
    });

    it('keeps a readme section the project replaced', () => {
      const project = createProject();
      configureMergify(project);
      project.readme.addSection('GitHub Configuration', 'Our own setup.');

      addLintJob(project);

      expect(synthSnapshot(project)['README.md']).toContain(
        '## GitHub Configuration\n\nOur own setup.',
      );
    });

    it('keeps a readme section the project removed out', () => {
      const project = createProject();
      configureMergify(project);
      project.readme.removeSection('GitHub Configuration');

      addLintJob(project);

      expect(synthSnapshot(project)['README.md']).not.toContain(
        'GitHub Configuration',
      );
    });
  });

  it('waits for CodeQL added after configuration', () => {
    const project = createProject({ autoMerge: true, codeql: false });

    new CodeQl(project.github!, { languages: ['actions'] });

    const output = synthSnapshot(project);
    const queue = yaml.parse(output['.mergify.yml']).queue_rules[0];
    expect(queue.queue_conditions).toContain(
      `status-success=${CodeQl.CHECK_NAME}`,
    );
    expect(output['README.md']).toContain('### Code scanning');
  });
});
