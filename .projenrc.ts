import { CollectionKind, PrimitiveType } from '@jsii/spec';
import { ProjenStruct, Struct } from '@mrgrain/jsii-struct-builder';
import { github } from 'projen';
import { JsiiProject } from './src/projects/jsii';

const project = new JsiiProject({
  author: 'Dave Shepherd',
  authorAddress: 'dave.shepherd@endor.me.uk',
  codeOwners: ['sabre'],
  devDeps: ['@mrgrain/jsii-struct-builder', 'constructs', 'projen'],
  gitignore: ['.npmrc', '.vscode'],
  githubOptions: {
    projenCredentials: github.GithubCredentials.fromApp({}),
  },
  jsiiVersion: '~5.4.0',
  name: 'projen-modules',
  peerDeps: ['constructs', 'projen'],
  projenrcTs: true,
  publishToPypi: {
    distName: 'projen_modules',
    module: 'projen_modules',
  },
  readme: {
    lines: [
      `
## Creating a new project

To list available project types:

\`\`\`
npx projen new --from projen-modules
\`\`\`

\`\`\`
npx projen new npm-package --from projen-project
\`\`\`

1. Create git repo in github

1. Add to circleci
   1. Select "Projects"
   1. In the list of projects click "Set Up Project" against your repo
   1. Select the config.yml file from the main branch

## Contributing

\`\`\`
yarn install
npx projen build
\`\`\`
`,
    ],
  },
  repositoryUrl: 'https://github.com/daveshepherd/projen-modules.git',

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
new ProjenStruct(project, {
  name: 'JsiiProjectOptions',
  filePath: 'src/projects/jsii/jsii-project-options.ts',
})
  .mixin(Struct.fromFqn('projen.cdk.JsiiProjectOptions'))
  .update('defaultReleaseBranch', { optional: true })
  .replace('readme', {
    docs: {
      summary: 'Readme configuration',
    },
    name: 'readme',
    optional: true,
    type: { fqn: 'projen-modules.ReadmeOptions' },
  })
  .add({
    docs: {
      summary: 'List of teams used to generate the CODEOWNERS file',
    },
    name: 'codeOwners',
    type: {
      collection: {
        kind: CollectionKind.Array,
        elementtype: {
          primitive: PrimitiveType.String,
        },
      },
    },
  });
new ProjenStruct(project, {
  name: 'NpmPackageOptions',
  filePath: 'src/projects/npm/npm-package-options.ts',
})
  .mixin(Struct.fromFqn('projen.typescript.TypeScriptProjectOptions'))
  .update('defaultReleaseBranch', { optional: true })
  .replace('readme', {
    docs: {
      summary: 'Readme configuration',
    },
    name: 'readme',
    optional: true,
    type: { fqn: 'projen-modules.ReadmeOptions' },
  })
  .add({
    docs: {
      summary: 'List of teams used to generate the CODEOWNERS file',
    },
    name: 'codeOwners',
    type: {
      collection: {
        kind: CollectionKind.Array,
        elementtype: {
          primitive: PrimitiveType.String,
        },
      },
    },
  });
new ProjenStruct(project, {
  name: 'PythonPackageOptions',
  filePath: 'src/projects/python/python-package-options.ts',
})
  .mixin(Struct.fromFqn('projen.python.PythonProjectOptions'))
  .replace('readme', {
    docs: {
      summary: 'Readme configuration',
    },
    name: 'readme',
    optional: true,
    type: { fqn: 'projen-modules.ReadmeOptions' },
  })
  .add({
    docs: {
      summary: 'List of teams used to generate the CODEOWNERS file',
    },
    name: 'codeOwners',
    type: {
      collection: {
        kind: CollectionKind.Array,
        elementtype: {
          primitive: PrimitiveType.String,
        },
      },
    },
  })
  .add({
    docs: {
      default: 'true',
      summary: 'Include a GitHub pull request template.',
    },
    name: 'pullRequestTemplate',
    optional: true,
    type: {
      primitive: PrimitiveType.Boolean,
    },
  })
  .add({
    docs: {
      default: 'default content',
      summary: 'The contents of the pull request template.',
    },
    name: 'pullRequestTemplateContents',
    optional: true,
    type: {
      collection: {
        kind: CollectionKind.Array,
        elementtype: {
          primitive: PrimitiveType.String,
        },
      },
    },
  });
project.synth();
