import { MergifyRule } from 'projen/lib/github';
import { synthSnapshot } from 'projen/lib/util/synth';
import * as yaml from 'yaml';
import { configureMergify } from '../../../src/components/github/mergify';
import { JsiiProject } from '../../../src/projects/jsii';

function createProject() {
  return new JsiiProject({
    author: 'Test Person',
    authorAddress: 'test@example.com',
    autoMerge: false,
    codeOwners: ['test-team'],
    defaultReleaseBranch: 'main',
    name: 'test',
    repositoryUrl: 'https://github.com/example/example.git',
  });
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
});