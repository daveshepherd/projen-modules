import { CollectionKind, PrimitiveType } from '@jsii/spec';
import { ProjenStruct, Struct } from '@mrgrain/jsii-struct-builder';
import { github } from 'projen';
import { JsiiProject } from './src/projects/jsii';

const project = new JsiiProject({
  author: 'Dave Shepherd',
  authorAddress: 'dave.shepherd@endor.me.uk',
  codeOwners: ['sabre'],
  defaultReleaseBranch: 'main',
  description: 'A collection of projen modules',
  devDeps: ['@mrgrain/jsii-struct-builder', 'constructs', 'projen'],
  gitignore: ['.npmrc', '.vscode'],
  githubOptions: {
    projenCredentials: github.GithubCredentials.fromApp({}),
  },
  autoMerge: true,
  name: 'projen-modules',
  peerDeps: ['constructs', 'projen'],
  projenrcTs: true,
  publishToPypi: {
    distName: 'projen_modules',
    module: 'projen_modules',
  },
  readme: {
    description:
      'A collection of custom projen modules, that can be used to bootstrap and maintain consistent project configuration, tooling, dependencies, and builds.',
  },
  repositoryUrl: 'https://github.com/daveshepherd/projen-modules.git',
});
project.readme?.addSection(
  'Creating a New Project',
  `
\`\`\`
npx projen new {project} --from projen-modules
\`\`\`

Some projects may have required fields that need to be specified as part of this command, review any errors for details what needs to be specified.

### Project Types

| Project type                            | Description               |
| --------------------------------------- | ------------------------- |
| [npm-package](API.md#npmpackage-)       | A typescript npm package  |
| [python-package](API.md#pythonpackage-) | A python package          |
| [jsii-package](API.md#jsiiproject-)     | A typescript JSII package |`,
);
project.readme?.addSection(
  'Project Structure',
  `All source is located in \`src\` and is grouped by:
* \`components\` - these are common building blocks that can be used by projects to implement specific project functionality.
* \`projects\` - these are projects that can be built from this project (see #something)
* \`utils\` - these are helper functions that are often reused

\`test\` contains tests, and mirrors the \`src\` directory structure. Within here there are \`__snapshots__\` which contain snapshots of project tests (see #section).`,
);
new ProjenStruct(project, {
  name: 'JsiiProjectOptions',
  filePath: 'src/projects/jsii/jsii-project-options.ts',
})
  .mixin(Struct.fromFqn('projen.cdk.JsiiProjectOptions'))
  .update('defaultReleaseBranch', { optional: true })
  .replace('readme', {
    docs: {
      summary: 'Configuration of the README.md file',
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
      summary: 'Configuration of the README.md file',
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
      summary: 'Configuration of the README.md file',
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
