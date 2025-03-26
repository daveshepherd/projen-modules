import { Component, Project, YamlFile } from 'projen';

export class CodeQL extends Component {
  private yamlFile?: YamlFile;

  constructor(project: Project) {
    super(project);
    this.createYamlFile();
  }

  private createYamlFile() {
    if (this.yamlFile == null) {
      this.yamlFile = new YamlFile(
        this.project,
        '.github/workflows/codeql.yml',
        {
          obj: {
            name: 'CodeQL Advanced',
            on: {
              push: {
                branches: ['main'],
              },
              pull_request: {
                branches: ['main'],
              },
              schedule: [{ cron: '44 12 * * 1' }],
            },
            jobs: {
              analyze: {
                'name': 'Analyze (${{ matrix.language }})',
                'runs-on':
                  "${{ (matrix.language == 'swift' && 'macos-latest') || 'ubuntu-latest' }}",
                'permissions': {
                  'security-events': 'write',
                  'packages': 'read',
                  'actions': 'read',
                  'contents': 'read',
                },
                'strategy': {
                  'fail-fast': false,
                  'matrix': {
                    include: [
                      {
                        'language': 'javascript-typescript',
                        'build-mode': 'none',
                      },
                      { 'language': 'actions', 'build-mode': 'none' },
                    ],
                  },
                },
                'steps': [
                  { name: 'Checkout repository', uses: 'actions/checkout@v4' },
                  {
                    name: 'Initialize CodeQL',
                    uses: 'github/codeql-action/init@v3',
                    with: {
                      'languages': '${{ matrix.language }}',
                      'build-mode': '${{ matrix.build-mode }}',
                    },
                  },
                  {
                    name: 'Perform CodeQL Analysis',
                    uses: 'github/codeql-action/analyze@v3',
                    with: {
                      category: '/language:${{matrix.language}}',
                    },
                  },
                ],
              },
            },
          },
          committed: true,
        },
      );
    }
  }
}
