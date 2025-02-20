import { MergifyRule } from 'projen/lib/github';
import { synthSnapshot } from 'projen/lib/util/synth';
import * as yaml from 'yaml';
import { JsiiProject } from '../../../src/projects/jsii';

describe('JSII Package', () => {
  it('synthesizes', () => {
    const project = new JsiiProject({
      author: 'Test',
      authorAddress: 'test@example.com',
      codeOwners: ['test'],
      defaultReleaseBranch: 'main',
      name: 'test-jsii',
      repositoryUrl: 'test.com',
    });

    const output = synthSnapshot(project);

    expect(output.CODEOWNERS).toBeDefined();
    expect(output).toMatchSnapshot();
  });

  it('has readme with project details', () => {
    const project = new JsiiProject({
      author: 'Test',
      authorAddress: 'test@example.com',
      codeOwners: ['test'],
      defaultReleaseBranch: 'main',
      name: 'test-jsii',
      repositoryUrl: 'test.com',
    });

    const output = synthSnapshot(project);

    expect(output['README.md']).toContain(`# test-jsii

`);
  });

  it('has readme with a project description', () => {
    const project = new JsiiProject({
      author: 'Test',
      authorAddress: 'test@example.com',
      codeOwners: ['test'],
      defaultReleaseBranch: 'main',
      name: 'test-jsii',
      readme: {
        description: 'A test project description.',
      },
      repositoryUrl: 'test.com',
    });

    const output = synthSnapshot(project);

    expect(output['README.md']).toContain(`# test-jsii

A test project description.

`);
  });

  it('has a mergify configuration by default', () => {
    const project = new JsiiProject({
      author: 'Test',
      authorAddress: 'test@example.com',
      codeOwners: ['test'],
      defaultReleaseBranch: 'main',
      name: 'test-jsii',
      readme: {
        description: 'A test project description.',
      },
      repositoryUrl: 'test.com',
    });

    const output = synthSnapshot(project);

    expect(output['.mergify.yml']).toBeDefined();
    const mergifyConfiguration = yaml.parse(output['.mergify.yml']);
    const autoApproveUpgradeRule: MergifyRule =
      mergifyConfiguration.pull_request_rules.find(
        (rule: MergifyRule) =>
          rule.name === 'Automatic approval for projen upgrade pull requests',
      );
    expect(autoApproveUpgradeRule).toBeDefined();
    expect(autoApproveUpgradeRule.conditions).toStrictEqual([
      'author=endor-projen[bot]',
      'status-success=build',
      'status-success=package-js',
    ]);

    //   - name: Automatic approval for projen upgrade pull requests
    //     conditions:
    //       - author=endor-projen[bot]
    //       - status-success=build
    //       - status-success=package-js
    //     actions:
    //       review:
    //         type: APPROVE
    //         message: Automatically approving projen upgrade
    // `);
  });

  it('does not have a mergify configuration when autoMerge set to false', () => {
    const project = new JsiiProject({
      author: 'Test',
      authorAddress: 'test@example.com',
      autoMerge: false,
      codeOwners: ['test'],
      defaultReleaseBranch: 'main',
      name: 'test-jsii',
      readme: {
        description: 'A test project description.',
      },
      repositoryUrl: 'test.com',
    });

    const output = synthSnapshot(project);

    expect(output['.mergify.yml']).not.toBeDefined();
  });
});
