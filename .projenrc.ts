import { CollectionKind, PrimitiveType } from '@jsii/spec';
import { ProjenStruct, Struct } from '@mrgrain/jsii-struct-builder';
import { github, JsonFile, JsonPatch } from 'projen';
import { NodePackageManager } from 'projen/lib/javascript';
import { JsiiProject } from './src/projects/jsii';

const project = new JsiiProject({
  author: 'Dave Shepherd',
  authorAddress: 'dave.shepherd@endor.me.uk',
  codeOwners: ['daveshepherd'],
  defaultReleaseBranch: 'main',
  description: 'A collection of projen modules',
  devDeps: ['@mrgrain/jsii-struct-builder', 'constructs', 'yaml'],
  gitignore: ['.npmrc', '.vscode'],
  githubOptions: {
    projenCredentials: github.GithubCredentials.fromApp({}),
  },
  jestOptions: {
    jestVersion: '^30',
  },
  jsiiVersion: '~6.0.0',
  minNodeVersion: '22.0.0',
  name: 'projen-modules',
  packageManager: NodePackageManager.YARN_CLASSIC,
  peerDeps: ['constructs', 'projen@0.* >=0.104.0'],
  projenrcTs: true,
  npmTrustedPublishing: true,
  publishToPypi: {
    distName: 'projen_modules',
    module: 'projen_modules',
    trustedPublishing: true,
  },
  readme: {
    description:
      'A collection of custom projen modules, that can be used to bootstrap and maintain consistent project configuration, tooling, dependencies, and builds.',
  },
  repositoryUrl: 'https://github.com/daveshepherd/projen-modules.git',
  // matches the compiler bundled with jsii 6.0; ts-jest 29 does not support TypeScript 7
  typescriptVersion: '~6.0.0',
  workflowNodeVersion: '22.x',
});
// projen's eslint component adds this unversioned, so the major must be set after construction
project.addDevDeps('eslint-import-resolver-typescript@^4');
// npm trusted publishing needs npm >= 11.5.1, which Node 22 does not ship, so only the npm
// publish job runs on the latest LTS; builds and tests stay on the minimum Node version
project.github
  ?.tryFindWorkflow('release')
  ?.file?.patch(JsonPatch.replace('/jobs/release_npm/steps/0/with/node-version', 'lts/*'));

// projen's built-in auditDeps cannot allowlist advisories, so audit-ci is used instead
project.addDevDeps('audit-ci@^7');
new JsonFile(project, 'audit-ci.json', {
  obj: {
    '$schema': 'https://github.com/IBM/audit-ci/raw/main/docs/schema.json',
    'high': true,
    'report-type': 'summary',
    'allowlist': [
      // braces <=3.0.3 (CVE-2026-93687), via jsii-docgen > fast-glob > micromatch.
      // Build-time only and no patched release exists. Accepted 2026-10-05; review by 2027-01-05.
      'GHSA-vfj7-8cjw-p6xm',
    ],
  },
});
const auditTask = project.addTask('audit', {
  description: 'Fail on high or critical advisories not in the audit-ci.json allowlist',
  exec: 'audit-ci --config audit-ci.json',
});
project.preCompileTask.spawn(auditTask);
project.readme?.addSection(
  'Creating a New Project',
  `
\`\`\`
npx projen new {project} --from projen-modules
\`\`\`

Some projects may have required fields that need to be specified as part of this command, review any errors for details what needs to be specified.

### Project Types

| Project type                                   | Description                |
| ---------------------------------------------- | -------------------------- |
| [cdk-typescript-app](API.md#cdktypescriptapp-) | A typescript CDK app |
| [npm-package](API.md#npmpackage-)              | A typescript npm package   |
| [python-package](API.md#pythonpackage-)        | A python package           |
| [jsii-package](API.md#jsiiproject-)            | A typescript JSII package  |`,
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
  name: 'CdkTypeScriptAppOptions',
  filePath: 'src/projects/cdk-ts/cdk-typescript-app-options.ts',
})
  .mixin(Struct.fromFqn('projen.awscdk.AwsCdkTypeScriptAppOptions'))
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
