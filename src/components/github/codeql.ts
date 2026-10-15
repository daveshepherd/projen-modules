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
  /**
   * Glob patterns of paths that are not scanned, such as generated code
   *
   * @default []
   * @see https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning#specifying-directories-to-scan
   */
  readonly pathsIgnore?: Array<string>;
}

/**
 * CodeQL code scanning, as a GitHub advanced setup workflow
 */
export class CodeQl extends Component {
  /**
   * Name of the check run that reports the code scanning results on pull requests
   */
  static readonly CHECK_NAME = 'CodeQL';

  /**
   * Glob of the integ-runner snapshot directories, whose assets are generated
   * bundles of dependencies
   */
  static readonly INTEG_SNAPSHOT_PATHS = '**/*.snapshot/**';

  private readonly _pathsIgnore: Array<string>;
  private readonly initInputs: { [key: string]: string };

  constructor(gitHub: github.GitHub, options: CodeQlOptions) {
    super(gitHub.project);

    this._pathsIgnore = [...(options.pathsIgnore ?? [])];
    this.initInputs = {
      'languages': '${{ matrix.language }}',
      'build-mode': 'none',
    };

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
            with: this.initInputs,
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

  /**
   * Glob patterns of paths that are not scanned
   */
  get pathsIgnore(): Array<string> {
    return [...this._pathsIgnore];
  }

  /**
   * Stops CodeQL scanning paths matching the glob patterns
   */
  addPathsIgnore(...patterns: Array<string>) {
    this._pathsIgnore.push(...patterns);
  }

  preSynthesize() {
    if (this._pathsIgnore.length) {
      // JSON strings are valid YAML double-quoted scalars, so globs need no further escaping
      this.initInputs.config = [
        'paths-ignore:',
        ...this._pathsIgnore.map((pattern) => `  - ${JSON.stringify(pattern)}`),
      ].join('\n');
    }
  }
}
