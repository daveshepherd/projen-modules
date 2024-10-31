import { CollectionKind, PrimitiveType } from '@jsii/spec';
import { ProjenStruct, Struct } from '@mrgrain/jsii-struct-builder';
import { github } from 'projen';
import { JsiiProject } from './src/projects/jsii';

const project = new JsiiProject({
  author: 'Dave Shepherd',
  authorAddress: 'dave.shepherd@endor.me.uk',
  codeOwners: ['sabre'],
  defaultReleaseBranch: 'main',
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
  repositoryUrl: 'https://github.com/daveshepherd/projen-modules.git',
});
project.readme?.addSection(
  'Creating a New Project',
  `
\`\`\`
npx projen new NpmPackage --from projen-project
\`\`\`
`,
);
new ProjenStruct(project, {
  name: 'JsiiProjectOptions',
  filePath: 'src/projects/jsii/jsii-project-options.ts',
})
  .mixin(Struct.fromFqn('projen.cdk.JsiiProjectOptions'))
  .update('defaultReleaseBranch', { optional: true })
  .omit('readme')
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
  .omit('readme')
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
  .omit('readme')
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
