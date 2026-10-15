import { Project, ReleasableCommits } from 'projen';
import { synthSnapshot } from 'projen/lib/util/synth';
import {
  CdkTypeScriptApp,
  CdkTypeScriptAppOptions,
} from '../../../src/projects/cdk-ts';
import { NpmPackage } from '../../../src/projects/npm';
import { PythonPackage } from '../../../src/projects/python';

function createProject(options: Partial<CdkTypeScriptAppOptions> = {}) {
  return new CdkTypeScriptApp({
    cdkVersion: '2.1.0',
    codeOwners: ['test'],
    name: 'test-cdk',
    ...options,
  });
}

function contributingSection(readme: string): string | undefined {
  return readme.match(/## Contributing\n\n([\s\S]*?)(?=\n\n## |$)/)?.[1];
}

function synthContributing(project: Project) {
  return contributingSection(synthSnapshot(project)['README.md']);
}

describe('Contributing section', () => {
  it('describes the default pull request title types and merge queue', () => {
    const section = synthContributing(createProject());

    expect(section).toBe(`Pull request titles must follow [Conventional Commits](https://www.conventionalcommits.org), with one of the types \`feat\`, \`fix\` or \`chore\`, such as \`feat: describe the change\`. The **Validate PR title** check fails until the title does.

Once a pull request is approved and its checks pass, the [Mergify](https://mergify.com) merge queue squash merges it, with its title as the commit message. Draft pull requests and those labelled \`do-not-merge\` are not merged.`);
  });

  it('describes how the type decides the release', () => {
    const section = synthContributing(createProject({ release: true }));

    expect(section).toBe(`Pull request titles must follow [Conventional Commits](https://www.conventionalcommits.org), with one of the types \`feat\`, \`fix\` or \`chore\`, such as \`feat: describe the change\`. The **Validate PR title** check fails until the title does.

Once a pull request is approved and its checks pass, the [Mergify](https://mergify.com) merge queue squash merges it, with its title as the commit message. Draft pull requests and those labelled \`do-not-merge\` are not merged.

The type decides the next release: \`feat\` releases a minor version and \`fix\` a patch version, while a breaking change, marked by \`!\` after the type (such as \`feat!: ...\`) or a \`BREAKING CHANGE:\` footer, releases a major version. Other types still release a patch version. While the version is below 1.0.0, a breaking change releases a minor version and \`feat\` a patch version.`);
  });

  it('comes after usage sections and before the GitHub configuration', () => {
    const readme = synthSnapshot(createProject())['README.md'];
    const headings = readme.match(/^## .*/gm);

    expect(headings).toStrictEqual([
      '## Getting Started',
      '## CDK',
      '## Contributing',
      '## GitHub Configuration',
    ]);
  });

  it('lists the trusted authors whose pull requests need no approval', () => {
    const section = synthContributing(
      createProject({ trustedAuthors: ['maintainer'] }),
    );

    expect(section).toContain(
      'Once a pull request is approved, or is opened by `maintainer`, and its checks pass, the [Mergify](https://mergify.com) merge queue squash merges it',
    );
  });

  it('lists custom pull request title types', () => {
    const section = synthContributing(
      createProject({
        githubOptions: {
          pullRequestLintOptions: {
            semanticTitleOptions: { types: ['feat', 'fix', 'docs', 'chore'] },
          },
        },
      }),
    );

    expect(section).toContain(
      'with one of the types `feat`, `fix`, `docs` or `chore`, such as `feat: describe the change`.',
    );
  });

  it('only describes the release of the types that are allowed', () => {
    const section = synthContributing(
      createProject({
        githubOptions: {
          pullRequestLintOptions: {
            semanticTitleOptions: { types: ['fix'] },
          },
        },
        release: true,
      }),
    );

    expect(section).toContain(
      'The type decides the next release: `fix` releases a patch version, while a breaking change',
    );
    expect(section).not.toContain('Other types');
  });

  it('describes a required scope', () => {
    const section = synthContributing(
      createProject({
        githubOptions: {
          pullRequestLintOptions: {
            semanticTitleOptions: { requireScope: true },
          },
        },
      }),
    );

    expect(section).toContain(
      'with one of the types `feat`, `fix` or `chore` and a scope, such as `feat(scope): describe the change`.',
    );
  });

  it('describes the allowed scopes', () => {
    const section = synthContributing(
      createProject({
        githubOptions: {
          pullRequestLintOptions: {
            semanticTitleOptions: { scopes: ['api', 'ui'] },
          },
        },
      }),
    );

    expect(section).toContain(
      'with one of the types `feat`, `fix` or `chore` and, optionally, a scope from `api` or `ui`, such as `feat(api): describe the change`.',
    );
  });

  it('defers to releasableCommits for other types', () => {
    const section = synthContributing(
      createProject({
        release: true,
        releasableCommits: ReleasableCommits.featuresAndFixes(),
      }),
    );

    expect(section).toContain(
      'Other types only release a patch version if `releasableCommits` counts them.',
    );
  });

  it('describes only the merge queue without the pull request title check', () => {
    const section = synthContributing(
      createProject({ githubOptions: { pullRequestLint: false } }),
    );

    expect(section).toBe(
      'Once a pull request is approved and its checks pass, the [Mergify](https://mergify.com) merge queue squash merges it, with its title as the commit message. Draft pull requests and those labelled `do-not-merge` are not merged.',
    );
  });

  it('describes the release without the merge queue', () => {
    const section = synthContributing(
      createProject({ autoMerge: false, release: true }),
    );

    expect(section).toContain(
      'Once a pull request is squash merged with its title as the commit message, its type decides the next release:',
    );
    expect(section).not.toContain('Mergify');
  });

  it('is omitted without the pull request title check or merge queue', () => {
    const readme = synthSnapshot(
      createProject({ autoMerge: false, githubOptions: { pullRequestLint: false } }),
    )['README.md'];

    expect(readme).not.toContain('## Contributing');
  });

  it('describes only the merge queue when GitHub workflows are disabled', () => {
    const section = synthContributing(
      new NpmPackage({
        codeOwners: ['test'],
        defaultReleaseBranch: 'main',
        name: 'test-npm',
      }),
    );

    expect(section).toBe(
      'Once a pull request is approved and its checks pass, the [Mergify](https://mergify.com) merge queue squash merges it, with its title as the commit message. Draft pull requests and those labelled `do-not-merge` are not merged.',
    );
  });

  it('is omitted from npm packages without the merge queue', () => {
    const readme = synthSnapshot(
      new NpmPackage({
        autoMerge: false,
        codeOwners: ['test'],
        defaultReleaseBranch: 'main',
        name: 'test-npm',
      }),
    )['README.md'];

    expect(readme).not.toContain('## Contributing');
  });

  it('describes python packages, which projen does not release', () => {
    const section = synthContributing(
      new PythonPackage({
        authorEmail: 'test@example.com',
        authorName: 'test',
        codeOwners: ['test'],
        moduleName: 'test',
        name: 'test-python',
        version: '0.1.0',
      }),
    );

    expect(section).toBe(`Pull request titles must follow [Conventional Commits](https://www.conventionalcommits.org), with one of the types \`feat\`, \`fix\` or \`chore\`, such as \`feat: describe the change\`. The **Validate PR title** check fails until the title does.

Once a pull request is approved and its checks pass, the [Mergify](https://mergify.com) merge queue squash merges it, with its title as the commit message. Draft pull requests and those labelled \`do-not-merge\` are not merged.`);
  });
});
