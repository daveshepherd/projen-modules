import { CollectionKind, PrimitiveType } from '@jsii/spec';
import { ProjenStruct, Struct } from '@mrgrain/jsii-struct-builder';
import { github, JsonFile, JsonPatch } from 'projen';
import { NodePackageManager } from 'projen/lib/javascript';
import { ReadmeOrder } from './src/components/readme';
import { JsiiProject } from './src/projects/jsii';

const project = new JsiiProject({
  author: 'Dave Shepherd',
  authorAddress: 'dave.shepherd@endor.me.uk',
  codeOwners: ['daveshepherd'],
  defaultReleaseBranch: 'main',
  description: 'A collection of projen modules',
  devDeps: ['@jsii/spec', '@mrgrain/jsii-struct-builder', 'constructs', 'yaml'],
  gitignore: ['.npmrc', '.vscode'],
  githubOptions: {
    projenCredentials: github.GithubCredentials.fromApp({}),
  },
  jestOptions: {
    jestVersion: '^30',
    // projen requires the ESM-only dax package, which Jest only loads with this flag (on Node.js >= 24.9)
    experimentalVmModules: true,
  },
  jsiiVersion: '~6.0.0',
  minNodeVersion: '22.0.0',
  name: 'projen-modules',
  packageManager: NodePackageManager.PNPM,
  pnpmOptions: {
    workspaceYamlOptions: {
      // jest-haste-map's optional file watcher; jest runs without its native build
      allowBuilds: { '@parcel/watcher': false },
      // install only versions published at least a day ago, in CI and locally
      minimumReleaseAge: 1440,
      // jest 30 still depends on vulnerable glob and minimatch majors, so force the patched releases
      // (glob GHSA-3g3m-2fjr-6pw4, minimatch GHSA-g3hv-75wg-m249); remove once jest depends on them
      overrides: {
        'glob@>=9.0.0 <14.0.2': '^14.0.6',
        'minimatch@>=7.0.0 <11.0.1': '^11.0.9',
      },
    },
  },
  // projen's default pnpm 10 reads settings that pnpm 12 ignores; match the version maintainers run
  pnpmVersion: '12.21.0',
  peerDeps: ['constructs', 'projen@0.* >=0.105.2'],
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
  // single maintainer, who cannot approve their own pull requests
  trustedAuthors: ['daveshepherd'],
  // matches the compiler bundled with jsii 6.0; ts-jest 29 does not support TypeScript 7
  typescriptVersion: '~6.0.0',
  // Jest needs Node.js >= 24.9 to load projen's ESM-only dependencies (see jestOptions)
  workflowNodeVersion: '24.x',
});
// projen renders an empty "pnpm" field for package resolutions, which pnpm >= 11 no longer reads
project.package.file.addDeletionOverride('pnpm');
// repository tooling config, not needed by consumers of the package
project.addPackageIgnore('/pnpm-workspace.yaml');
project.addPackageIgnore('/audit-ci.json');
// projen's eslint component adds this unversioned, so the major must be set after construction
project.addDevDeps('eslint-import-resolver-typescript@^4');
// npm trusted publishing needs npm >= 11.5.1, which not every Node.js release ships, so only the npm
// publish job runs on the latest LTS
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
      // picomatch <=4.0.7 ReDoS, via eslint, jest and micromatch. Dev-only, matching
      // repository-controlled globs, and no patched release exists. Accepted 2026-11-17; review by 2027-02-17.
      'GHSA-fc5q-39xc-vjpf',
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
project.readme?.addSection(
  'Known Issues',
  `\`cdk-typescript-app\` defaults to Jest 30, which hoists \`@sinonjs/fake-timers\` 15 whose bundled types conflict with the \`@types/sinon\` used by \`aws-sdk-client-mock\`. Projects using \`aws-sdk-client-mock\` can set \`compilerOptions.skipLibCheck\` on the test tsconfig:

\`\`\`ts
project.tryFindObjectFile('test/tsconfig.json')?.addOverride('compilerOptions.skipLibCheck', true);
\`\`\``,
  { order: ReadmeOrder.REFERENCE },
);
new ProjenStruct(project, {
  name: 'CdkTypeScriptAppOptions',
  filePath: 'src/projects/cdk-ts/cdk-typescript-app-options.ts',
})
  .mixin(Struct.fromFqn('projen.awscdk.AwsCdkTypeScriptAppOptions'))
  .add({
    docs: {
      default: '[]',
      summary:
        'Authors whose pull requests the merge queue merges without an approval, such as the single maintainer of a repository, who cannot approve their own pull requests.',
    },
    name: 'trustedAuthors',
    optional: true,
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
      summary:
        'Scan the code with CodeQL on pull requests, pushes to the default branch and weekly.',
    },
    name: 'codeql',
    optional: true,
    type: {
      primitive: PrimitiveType.Boolean,
    },
  })
  .add({
    docs: {
      default: '- the integ-runner snapshot directories, `[CodeQl.INTEG_SNAPSHOT_PATHS]`',
      summary:
        'Glob patterns of paths CodeQL does not scan, such as generated code. Setting this replaces the default.',
    },
    name: 'codeqlPathsIgnore',
    optional: true,
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
      default: '[]',
      summary:
        'Environments to deploy to from the release workflow, one job each, chained in array order.',
    },
    name: 'deployments',
    optional: true,
    type: {
      collection: {
        kind: CollectionKind.Array,
        elementtype: { fqn: 'projen-modules.DeploymentEnvironment' },
      },
    },
  })
  .update('defaultReleaseBranch', { optional: true })
  .update('projenCredentials', {
    docs: {
      default:
        '- authenticate as a GitHub App using the PROJEN_APP_ID and PROJEN_APP_PRIVATE_KEY secrets',
    },
  })
  .update('typecheckTests', { docs: { default: 'true' } })
  .update('workflowNodeVersion', {
    docs: {
      default:
        '- the Node.js version of the Lambda runtime (`lambdaOptions.runtime`), such as `26.x`, unless `minNodeVersion` is set',
    },
  })
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
      default: '2.205.6',
      summary:
        'Version of `@aws-cdk/integ-runner` to pin when `experimentalIntegRunner` is enabled.',
    },
    name: 'integRunnerVersion',
    optional: true,
    type: {
      primitive: PrimitiveType.String,
    },
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
  .add({
    docs: {
      default: '[]',
      summary:
        'Authors whose pull requests the merge queue merges without an approval, such as the single maintainer of a repository, who cannot approve their own pull requests.',
    },
    name: 'trustedAuthors',
    optional: true,
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
      summary:
        'Scan the code with CodeQL on pull requests, pushes to the default branch and weekly.',
    },
    name: 'codeql',
    optional: true,
    type: {
      primitive: PrimitiveType.Boolean,
    },
  })
  .update('defaultReleaseBranch', { optional: true })
  .update('projenCredentials', {
    docs: {
      default:
        '- authenticate as a GitHub App using the PROJEN_APP_ID and PROJEN_APP_PRIVATE_KEY secrets',
    },
  })
  .update('typecheckTests', { docs: { default: 'true' } })
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
  .add({
    docs: {
      default: '[]',
      summary:
        'Authors whose pull requests the merge queue merges without an approval, such as the single maintainer of a repository, who cannot approve their own pull requests.',
    },
    name: 'trustedAuthors',
    optional: true,
    type: {
      collection: {
        kind: CollectionKind.Array,
        elementtype: {
          primitive: PrimitiveType.String,
        },
      },
    },
  })
  .update('defaultReleaseBranch', { optional: true })
  .update('typecheckTests', { docs: { default: 'true' } })
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
  .add({
    docs: {
      default: '[]',
      summary:
        'Authors whose pull requests the merge queue merges without an approval, such as the single maintainer of a repository, who cannot approve their own pull requests.',
    },
    name: 'trustedAuthors',
    optional: true,
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
      summary:
        'Scan the code with CodeQL on pull requests, pushes to the default branch and weekly.',
    },
    name: 'codeql',
    optional: true,
    type: {
      primitive: PrimitiveType.Boolean,
    },
  })
  .update('projenCredentials', {
    docs: {
      default:
        '- authenticate as a GitHub App using the PROJEN_APP_ID and PROJEN_APP_PRIVATE_KEY secrets',
    },
  })
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
