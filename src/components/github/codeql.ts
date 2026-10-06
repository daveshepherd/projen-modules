import { Component, github } from 'projen';
import { JobPermission } from 'projen/lib/github/workflows-model';

export interface CodeQlOptions {
  /**
   * Branches whose pushes, and the pull requests targeting them, are scanned
   *
   * @default ['main']
   */
  readonly branches?: Array<string>;
  /**
   * CodeQL languages to analyse, all of which must not need a build
   *
   * @see https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning#changing-the-languages-that-are-analyzed
   */
  readonly languages: Array<string>;
}

/**
 * CodeQL code scanning, as a GitHub advanced setup workflow
 */
export class CodeQl extends Component {
  /**
   * Name of the check run that reports the code scanning results on pull requests
   */
  static readonly CHECK_NAME = 'CodeQL';

  constructor(gitHub: github.GitHub, options: CodeQlOptions) {
    super(gitHub.project);

    const branches = options.branches ?? ['main'];
    const workflow = gitHub.addWorkflow('codeql');
    workflow.on({
      push: { branches },
      pullRequest: { branches },
      schedule: [{ cron: '44 12 * * 1' }],
    });
    workflow.addJobs({
      analyze: {
        name: 'Analyze (${{ matrix.language }})',
        runsOn: ['ubuntu-latest'],
        permissions: {
          actions: JobPermission.READ,
          contents: JobPermission.READ,
          packages: JobPermission.READ,
          securityEvents: JobPermission.WRITE,
        },
        strategy: {
          failFast: false,
          matrix: {
            domain: {
              language: options.languages,
            },
          },
        },
        steps: [
          github.WorkflowSteps.checkout(),
          {
            name: 'Initialize CodeQL',
            uses: 'github/codeql-action/init@v4',
            with: {
              'languages': '${{ matrix.language }}',
              'build-mode': 'none',
            },
          },
          {
            name: 'Perform CodeQL Analysis',
            uses: 'github/codeql-action/analyze@v4',
            with: {
              category: '/language:${{ matrix.language }}',
            },
          },
        ],
      },
    });
  }
}
