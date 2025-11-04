# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CdkTypeScriptApp <a name="CdkTypeScriptApp" id="projen-modules.CdkTypeScriptApp"></a>

A CDK application in TypeScript.

#### Initializers <a name="Initializers" id="projen-modules.CdkTypeScriptApp.Initializer"></a>

```typescript
import { CdkTypeScriptApp } from 'projen-modules'

new CdkTypeScriptApp(options: CdkTypeScriptAppOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen-modules.CdkTypeScriptApp.Initializer.parameter.options">options</a></code> | <code><a href="#projen-modules.CdkTypeScriptAppOptions">CdkTypeScriptAppOptions</a></code> | *No description.* |

---

##### `options`<sup>Required</sup> <a name="options" id="projen-modules.CdkTypeScriptApp.Initializer.parameter.options"></a>

- *Type:* <a href="#projen-modules.CdkTypeScriptAppOptions">CdkTypeScriptAppOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen-modules.CdkTypeScriptApp.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#projen-modules.CdkTypeScriptApp.addExcludeFromCleanup">addExcludeFromCleanup</a></code> | Exclude the matching files from pre-synth cleanup. |
| <code><a href="#projen-modules.CdkTypeScriptApp.addGitIgnore">addGitIgnore</a></code> | Adds a .gitignore pattern. |
| <code><a href="#projen-modules.CdkTypeScriptApp.addPackageIgnore">addPackageIgnore</a></code> | Adds patterns to be ignored by npm. |
| <code><a href="#projen-modules.CdkTypeScriptApp.addTask">addTask</a></code> | Adds a new task to this project. |
| <code><a href="#projen-modules.CdkTypeScriptApp.addTip">addTip</a></code> | Prints a "tip" message during synthesis. |
| <code><a href="#projen-modules.CdkTypeScriptApp.annotateGenerated">annotateGenerated</a></code> | Marks the provided file(s) as being generated. |
| <code><a href="#projen-modules.CdkTypeScriptApp.postSynthesize">postSynthesize</a></code> | Called after all components are synthesized. |
| <code><a href="#projen-modules.CdkTypeScriptApp.preSynthesize">preSynthesize</a></code> | Called before all components are synthesized. |
| <code><a href="#projen-modules.CdkTypeScriptApp.removeTask">removeTask</a></code> | Removes a task from a project. |
| <code><a href="#projen-modules.CdkTypeScriptApp.runTaskCommand">runTaskCommand</a></code> | Returns the shell command to execute in order to run a task. |
| <code><a href="#projen-modules.CdkTypeScriptApp.synth">synth</a></code> | Synthesize all project files into `outdir`. |
| <code><a href="#projen-modules.CdkTypeScriptApp.tryFindFile">tryFindFile</a></code> | Finds a file at the specified relative path within this project and all its subprojects. |
| <code><a href="#projen-modules.CdkTypeScriptApp.tryFindJsonFile">tryFindJsonFile</a></code> | Finds a json file by name. |
| <code><a href="#projen-modules.CdkTypeScriptApp.tryFindObjectFile">tryFindObjectFile</a></code> | Finds an object file (like JsonFile, YamlFile, etc.) by name. |
| <code><a href="#projen-modules.CdkTypeScriptApp.tryRemoveFile">tryRemoveFile</a></code> | Finds a file at the specified relative path within this project and removes it. |
| <code><a href="#projen-modules.CdkTypeScriptApp.addBins">addBins</a></code> | *No description.* |
| <code><a href="#projen-modules.CdkTypeScriptApp.addBundledDeps">addBundledDeps</a></code> | Defines bundled dependencies. |
| <code><a href="#projen-modules.CdkTypeScriptApp.addCompileCommand">addCompileCommand</a></code> | DEPRECATED. |
| <code><a href="#projen-modules.CdkTypeScriptApp.addDeps">addDeps</a></code> | Defines normal dependencies. |
| <code><a href="#projen-modules.CdkTypeScriptApp.addDevDeps">addDevDeps</a></code> | Defines development/test dependencies. |
| <code><a href="#projen-modules.CdkTypeScriptApp.addFields">addFields</a></code> | Directly set fields in `package.json`. |
| <code><a href="#projen-modules.CdkTypeScriptApp.addKeywords">addKeywords</a></code> | Adds keywords to package.json (deduplicated). |
| <code><a href="#projen-modules.CdkTypeScriptApp.addPeerDeps">addPeerDeps</a></code> | Defines peer dependencies. |
| <code><a href="#projen-modules.CdkTypeScriptApp.addScripts">addScripts</a></code> | Replaces the contents of multiple npm package.json scripts. |
| <code><a href="#projen-modules.CdkTypeScriptApp.addTestCommand">addTestCommand</a></code> | DEPRECATED. |
| <code><a href="#projen-modules.CdkTypeScriptApp.hasScript">hasScript</a></code> | Indicates if a script by the name name is defined. |
| <code><a href="#projen-modules.CdkTypeScriptApp.removeScript">removeScript</a></code> | Removes the npm script (always successful). |
| <code><a href="#projen-modules.CdkTypeScriptApp.renderWorkflowSetup">renderWorkflowSetup</a></code> | Returns the set of workflow steps which should be executed to bootstrap a workflow. |
| <code><a href="#projen-modules.CdkTypeScriptApp.setScript">setScript</a></code> | Replaces the contents of an npm package.json script. |
| <code><a href="#projen-modules.CdkTypeScriptApp.addCdkDependency">addCdkDependency</a></code> | Adds an AWS CDK module dependencies. |

---

##### `toString` <a name="toString" id="projen-modules.CdkTypeScriptApp.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addExcludeFromCleanup` <a name="addExcludeFromCleanup" id="projen-modules.CdkTypeScriptApp.addExcludeFromCleanup"></a>

```typescript
public addExcludeFromCleanup(globs: ...string[]): void
```

Exclude the matching files from pre-synth cleanup.

Can be used when, for example, some
source files include the projen marker and we don't want them to be erased during synth.

###### `globs`<sup>Required</sup> <a name="globs" id="projen-modules.CdkTypeScriptApp.addExcludeFromCleanup.parameter.globs"></a>

- *Type:* ...string[]

The glob patterns to match.

---

##### `addGitIgnore` <a name="addGitIgnore" id="projen-modules.CdkTypeScriptApp.addGitIgnore"></a>

```typescript
public addGitIgnore(pattern: string): void
```

Adds a .gitignore pattern.

###### `pattern`<sup>Required</sup> <a name="pattern" id="projen-modules.CdkTypeScriptApp.addGitIgnore.parameter.pattern"></a>

- *Type:* string

The glob pattern to ignore.

---

##### `addPackageIgnore` <a name="addPackageIgnore" id="projen-modules.CdkTypeScriptApp.addPackageIgnore"></a>

```typescript
public addPackageIgnore(pattern: string): void
```

Adds patterns to be ignored by npm.

###### `pattern`<sup>Required</sup> <a name="pattern" id="projen-modules.CdkTypeScriptApp.addPackageIgnore.parameter.pattern"></a>

- *Type:* string

The pattern to ignore.

---

##### `addTask` <a name="addTask" id="projen-modules.CdkTypeScriptApp.addTask"></a>

```typescript
public addTask(name: string, props?: TaskOptions): Task
```

Adds a new task to this project.

This will fail if the project already has
a task with this name.

###### `name`<sup>Required</sup> <a name="name" id="projen-modules.CdkTypeScriptApp.addTask.parameter.name"></a>

- *Type:* string

The task name to add.

---

###### `props`<sup>Optional</sup> <a name="props" id="projen-modules.CdkTypeScriptApp.addTask.parameter.props"></a>

- *Type:* projen.TaskOptions

Task properties.

---

##### ~~`addTip`~~ <a name="addTip" id="projen-modules.CdkTypeScriptApp.addTip"></a>

```typescript
public addTip(message: string): void
```

Prints a "tip" message during synthesis.

###### `message`<sup>Required</sup> <a name="message" id="projen-modules.CdkTypeScriptApp.addTip.parameter.message"></a>

- *Type:* string

The message.

---

##### `annotateGenerated` <a name="annotateGenerated" id="projen-modules.CdkTypeScriptApp.annotateGenerated"></a>

```typescript
public annotateGenerated(glob: string): void
```

Marks the provided file(s) as being generated.

This is achieved using the
github-linguist attributes. Generated files do not count against the
repository statistics and language breakdown.

> [https://github.com/github/linguist/blob/master/docs/overrides.md](https://github.com/github/linguist/blob/master/docs/overrides.md)

###### `glob`<sup>Required</sup> <a name="glob" id="projen-modules.CdkTypeScriptApp.annotateGenerated.parameter.glob"></a>

- *Type:* string

the glob pattern to match (could be a file path).

---

##### `postSynthesize` <a name="postSynthesize" id="projen-modules.CdkTypeScriptApp.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after all components are synthesized.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="projen-modules.CdkTypeScriptApp.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before all components are synthesized.

##### `removeTask` <a name="removeTask" id="projen-modules.CdkTypeScriptApp.removeTask"></a>

```typescript
public removeTask(name: string): Task
```

Removes a task from a project.

###### `name`<sup>Required</sup> <a name="name" id="projen-modules.CdkTypeScriptApp.removeTask.parameter.name"></a>

- *Type:* string

The name of the task to remove.

---

##### `runTaskCommand` <a name="runTaskCommand" id="projen-modules.CdkTypeScriptApp.runTaskCommand"></a>

```typescript
public runTaskCommand(task: Task): string
```

Returns the shell command to execute in order to run a task.

This will
typically be `npx projen TASK`.

###### `task`<sup>Required</sup> <a name="task" id="projen-modules.CdkTypeScriptApp.runTaskCommand.parameter.task"></a>

- *Type:* projen.Task

The task for which the command is required.

---

##### `synth` <a name="synth" id="projen-modules.CdkTypeScriptApp.synth"></a>

```typescript
public synth(): void
```

Synthesize all project files into `outdir`.

1. Call "this.preSynthesize()"
2. Delete all generated files
3. Synthesize all subprojects
4. Synthesize all components of this project
5. Call "postSynthesize()" for all components of this project
6. Call "this.postSynthesize()"

##### `tryFindFile` <a name="tryFindFile" id="projen-modules.CdkTypeScriptApp.tryFindFile"></a>

```typescript
public tryFindFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and all its subprojects.

###### `filePath`<sup>Required</sup> <a name="filePath" id="projen-modules.CdkTypeScriptApp.tryFindFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be resolved
from the root of _this_ project.

---

##### ~~`tryFindJsonFile`~~ <a name="tryFindJsonFile" id="projen-modules.CdkTypeScriptApp.tryFindJsonFile"></a>

```typescript
public tryFindJsonFile(filePath: string): JsonFile
```

Finds a json file by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="projen-modules.CdkTypeScriptApp.tryFindJsonFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryFindObjectFile` <a name="tryFindObjectFile" id="projen-modules.CdkTypeScriptApp.tryFindObjectFile"></a>

```typescript
public tryFindObjectFile(filePath: string): ObjectFile
```

Finds an object file (like JsonFile, YamlFile, etc.) by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="projen-modules.CdkTypeScriptApp.tryFindObjectFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryRemoveFile` <a name="tryRemoveFile" id="projen-modules.CdkTypeScriptApp.tryRemoveFile"></a>

```typescript
public tryRemoveFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and removes it.

###### `filePath`<sup>Required</sup> <a name="filePath" id="projen-modules.CdkTypeScriptApp.tryRemoveFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be
resolved from the root of _this_ project.

---

##### `addBins` <a name="addBins" id="projen-modules.CdkTypeScriptApp.addBins"></a>

```typescript
public addBins(bins: {[ key: string ]: string}): void
```

###### `bins`<sup>Required</sup> <a name="bins" id="projen-modules.CdkTypeScriptApp.addBins.parameter.bins"></a>

- *Type:* {[ key: string ]: string}

---

##### `addBundledDeps` <a name="addBundledDeps" id="projen-modules.CdkTypeScriptApp.addBundledDeps"></a>

```typescript
public addBundledDeps(deps: ...string[]): void
```

Defines bundled dependencies.

Bundled dependencies will be added as normal dependencies as well as to the
`bundledDependencies` section of your `package.json`.

###### `deps`<sup>Required</sup> <a name="deps" id="projen-modules.CdkTypeScriptApp.addBundledDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### ~~`addCompileCommand`~~ <a name="addCompileCommand" id="projen-modules.CdkTypeScriptApp.addCompileCommand"></a>

```typescript
public addCompileCommand(commands: ...string[]): void
```

DEPRECATED.

###### `commands`<sup>Required</sup> <a name="commands" id="projen-modules.CdkTypeScriptApp.addCompileCommand.parameter.commands"></a>

- *Type:* ...string[]

---

##### `addDeps` <a name="addDeps" id="projen-modules.CdkTypeScriptApp.addDeps"></a>

```typescript
public addDeps(deps: ...string[]): void
```

Defines normal dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="projen-modules.CdkTypeScriptApp.addDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addDevDeps` <a name="addDevDeps" id="projen-modules.CdkTypeScriptApp.addDevDeps"></a>

```typescript
public addDevDeps(deps: ...string[]): void
```

Defines development/test dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="projen-modules.CdkTypeScriptApp.addDevDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addFields` <a name="addFields" id="projen-modules.CdkTypeScriptApp.addFields"></a>

```typescript
public addFields(fields: {[ key: string ]: any}): void
```

Directly set fields in `package.json`.

###### `fields`<sup>Required</sup> <a name="fields" id="projen-modules.CdkTypeScriptApp.addFields.parameter.fields"></a>

- *Type:* {[ key: string ]: any}

The fields to set.

---

##### `addKeywords` <a name="addKeywords" id="projen-modules.CdkTypeScriptApp.addKeywords"></a>

```typescript
public addKeywords(keywords: ...string[]): void
```

Adds keywords to package.json (deduplicated).

###### `keywords`<sup>Required</sup> <a name="keywords" id="projen-modules.CdkTypeScriptApp.addKeywords.parameter.keywords"></a>

- *Type:* ...string[]

The keywords to add.

---

##### `addPeerDeps` <a name="addPeerDeps" id="projen-modules.CdkTypeScriptApp.addPeerDeps"></a>

```typescript
public addPeerDeps(deps: ...string[]): void
```

Defines peer dependencies.

When adding peer dependencies, a devDependency will also be added on the
pinned version of the declared peer. This will ensure that you are testing
your code against the minimum version required from your consumers.

###### `deps`<sup>Required</sup> <a name="deps" id="projen-modules.CdkTypeScriptApp.addPeerDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addScripts` <a name="addScripts" id="projen-modules.CdkTypeScriptApp.addScripts"></a>

```typescript
public addScripts(scripts: {[ key: string ]: string}): void
```

Replaces the contents of multiple npm package.json scripts.

###### `scripts`<sup>Required</sup> <a name="scripts" id="projen-modules.CdkTypeScriptApp.addScripts.parameter.scripts"></a>

- *Type:* {[ key: string ]: string}

The scripts to set.

---

##### ~~`addTestCommand`~~ <a name="addTestCommand" id="projen-modules.CdkTypeScriptApp.addTestCommand"></a>

```typescript
public addTestCommand(commands: ...string[]): void
```

DEPRECATED.

###### `commands`<sup>Required</sup> <a name="commands" id="projen-modules.CdkTypeScriptApp.addTestCommand.parameter.commands"></a>

- *Type:* ...string[]

---

##### ~~`hasScript`~~ <a name="hasScript" id="projen-modules.CdkTypeScriptApp.hasScript"></a>

```typescript
public hasScript(name: string): boolean
```

Indicates if a script by the name name is defined.

###### `name`<sup>Required</sup> <a name="name" id="projen-modules.CdkTypeScriptApp.hasScript.parameter.name"></a>

- *Type:* string

The name of the script.

---

##### `removeScript` <a name="removeScript" id="projen-modules.CdkTypeScriptApp.removeScript"></a>

```typescript
public removeScript(name: string): void
```

Removes the npm script (always successful).

###### `name`<sup>Required</sup> <a name="name" id="projen-modules.CdkTypeScriptApp.removeScript.parameter.name"></a>

- *Type:* string

The name of the script.

---

##### `renderWorkflowSetup` <a name="renderWorkflowSetup" id="projen-modules.CdkTypeScriptApp.renderWorkflowSetup"></a>

```typescript
public renderWorkflowSetup(options?: RenderWorkflowSetupOptions): JobStep[]
```

Returns the set of workflow steps which should be executed to bootstrap a workflow.

###### `options`<sup>Optional</sup> <a name="options" id="projen-modules.CdkTypeScriptApp.renderWorkflowSetup.parameter.options"></a>

- *Type:* projen.javascript.RenderWorkflowSetupOptions

Options.

---

##### `setScript` <a name="setScript" id="projen-modules.CdkTypeScriptApp.setScript"></a>

```typescript
public setScript(name: string, command: string): void
```

Replaces the contents of an npm package.json script.

###### `name`<sup>Required</sup> <a name="name" id="projen-modules.CdkTypeScriptApp.setScript.parameter.name"></a>

- *Type:* string

The script name.

---

###### `command`<sup>Required</sup> <a name="command" id="projen-modules.CdkTypeScriptApp.setScript.parameter.command"></a>

- *Type:* string

The command to execute.

---

##### `addCdkDependency` <a name="addCdkDependency" id="projen-modules.CdkTypeScriptApp.addCdkDependency"></a>

```typescript
public addCdkDependency(modules: ...string[]): void
```

Adds an AWS CDK module dependencies.

###### `modules`<sup>Required</sup> <a name="modules" id="projen-modules.CdkTypeScriptApp.addCdkDependency.parameter.modules"></a>

- *Type:* ...string[]

The list of modules to depend on.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen-modules.CdkTypeScriptApp.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#projen-modules.CdkTypeScriptApp.isProject">isProject</a></code> | Test whether the given construct is a project. |
| <code><a href="#projen-modules.CdkTypeScriptApp.of">of</a></code> | Find the closest ancestor project for given construct. |

---

##### `isConstruct` <a name="isConstruct" id="projen-modules.CdkTypeScriptApp.isConstruct"></a>

```typescript
import { CdkTypeScriptApp } from 'projen-modules'

CdkTypeScriptApp.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="projen-modules.CdkTypeScriptApp.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isProject` <a name="isProject" id="projen-modules.CdkTypeScriptApp.isProject"></a>

```typescript
import { CdkTypeScriptApp } from 'projen-modules'

CdkTypeScriptApp.isProject(x: any)
```

Test whether the given construct is a project.

###### `x`<sup>Required</sup> <a name="x" id="projen-modules.CdkTypeScriptApp.isProject.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="projen-modules.CdkTypeScriptApp.of"></a>

```typescript
import { CdkTypeScriptApp } from 'projen-modules'

CdkTypeScriptApp.of(construct: IConstruct)
```

Find the closest ancestor project for given construct.

When given a project, this it the project itself.

###### `construct`<sup>Required</sup> <a name="construct" id="projen-modules.CdkTypeScriptApp.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen-modules.CdkTypeScriptApp.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#projen-modules.CdkTypeScriptApp.property.buildTask">buildTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen-modules.CdkTypeScriptApp.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#projen-modules.CdkTypeScriptApp.property.compileTask">compileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen-modules.CdkTypeScriptApp.property.components">components</a></code> | <code>projen.Component[]</code> | Returns all the components within this project. |
| <code><a href="#projen-modules.CdkTypeScriptApp.property.deps">deps</a></code> | <code>projen.Dependencies</code> | Project dependencies. |
| <code><a href="#projen-modules.CdkTypeScriptApp.property.ejected">ejected</a></code> | <code>boolean</code> | Whether or not the project is being ejected. |
| <code><a href="#projen-modules.CdkTypeScriptApp.property.files">files</a></code> | <code>projen.FileBase[]</code> | All files in this project. |
| <code><a href="#projen-modules.CdkTypeScriptApp.property.gitattributes">gitattributes</a></code> | <code>projen.GitAttributesFile</code> | The .gitattributes file for this repository. |
| <code><a href="#projen-modules.CdkTypeScriptApp.property.gitignore">gitignore</a></code> | <code>projen.IgnoreFile</code> | .gitignore. |
| <code><a href="#projen-modules.CdkTypeScriptApp.property.logger">logger</a></code> | <code>projen.Logger</code> | Logging utilities. |
| <code><a href="#projen-modules.CdkTypeScriptApp.property.name">name</a></code> | <code>string</code> | Project name. |
| <code><a href="#projen-modules.CdkTypeScriptApp.property.outdir">outdir</a></code> | <code>string</code> | Absolute output directory of this project. |
| <code><a href="#projen-modules.CdkTypeScriptApp.property.packageTask">packageTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen-modules.CdkTypeScriptApp.property.postCompileTask">postCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen-modules.CdkTypeScriptApp.property.preCompileTask">preCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen-modules.CdkTypeScriptApp.property.projectBuild">projectBuild</a></code> | <code>projen.ProjectBuild</code> | Manages the build process of the project. |
| <code><a href="#projen-modules.CdkTypeScriptApp.property.projenCommand">projenCommand</a></code> | <code>string</code> | The command to use in order to run the projen CLI. |
| <code><a href="#projen-modules.CdkTypeScriptApp.property.root">root</a></code> | <code>projen.Project</code> | The root project. |
| <code><a href="#projen-modules.CdkTypeScriptApp.property.subprojects">subprojects</a></code> | <code>projen.Project[]</code> | Returns all the subprojects within this project. |
| <code><a href="#projen-modules.CdkTypeScriptApp.property.tasks">tasks</a></code> | <code>projen.Tasks</code> | Project tasks. |
| <code><a href="#projen-modules.CdkTypeScriptApp.property.testTask">testTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen-modules.CdkTypeScriptApp.property.defaultTask">defaultTask</a></code> | <code>projen.Task</code> | This is the "default" task, the one that executes "projen". |
| <code><a href="#projen-modules.CdkTypeScriptApp.property.initProject">initProject</a></code> | <code>projen.InitProject</code> | The options used when this project is bootstrapped via `projen new`. |
| <code><a href="#projen-modules.CdkTypeScriptApp.property.parent">parent</a></code> | <code>projen.Project</code> | A parent project. |
| <code><a href="#projen-modules.CdkTypeScriptApp.property.projectType">projectType</a></code> | <code>projen.ProjectType</code> | *No description.* |
| <code><a href="#projen-modules.CdkTypeScriptApp.property.autoApprove">autoApprove</a></code> | <code>projen.github.AutoApprove</code> | Auto approve set up for this project. |
| <code><a href="#projen-modules.CdkTypeScriptApp.property.devContainer">devContainer</a></code> | <code>projen.vscode.DevContainer</code> | Access for .devcontainer.json (used for GitHub Codespaces). |
| <code><a href="#projen-modules.CdkTypeScriptApp.property.github">github</a></code> | <code>projen.github.GitHub</code> | Access all github components. |
| <code><a href="#projen-modules.CdkTypeScriptApp.property.gitpod">gitpod</a></code> | <code>projen.Gitpod</code> | Access for Gitpod. |
| <code><a href="#projen-modules.CdkTypeScriptApp.property.vscode">vscode</a></code> | <code>projen.vscode.VsCode</code> | Access all VSCode components. |
| <code><a href="#projen-modules.CdkTypeScriptApp.property.allowLibraryDependencies">allowLibraryDependencies</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#projen-modules.CdkTypeScriptApp.property.artifactsDirectory">artifactsDirectory</a></code> | <code>string</code> | The build output directory. |
| <code><a href="#projen-modules.CdkTypeScriptApp.property.artifactsJavascriptDirectory">artifactsJavascriptDirectory</a></code> | <code>string</code> | The location of the npm tarball after build (`${artifactsDirectory}/js`). |
| <code><a href="#projen-modules.CdkTypeScriptApp.property.bundler">bundler</a></code> | <code>projen.javascript.Bundler</code> | *No description.* |
| <code><a href="#projen-modules.CdkTypeScriptApp.property.entrypoint">entrypoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen-modules.CdkTypeScriptApp.property.manifest">manifest</a></code> | <code>any</code> | *No description.* |
| <code><a href="#projen-modules.CdkTypeScriptApp.property.npmrc">npmrc</a></code> | <code>projen.javascript.NpmConfig</code> | The .npmrc file. |
| <code><a href="#projen-modules.CdkTypeScriptApp.property.package">package</a></code> | <code>projen.javascript.NodePackage</code> | API for managing the node package. |
| <code><a href="#projen-modules.CdkTypeScriptApp.property.packageManager">packageManager</a></code> | <code>projen.javascript.NodePackageManager</code> | The package manager to use. |
| <code><a href="#projen-modules.CdkTypeScriptApp.property.runScriptCommand">runScriptCommand</a></code> | <code>string</code> | The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager). |
| <code><a href="#projen-modules.CdkTypeScriptApp.property.autoMerge">autoMerge</a></code> | <code>projen.github.AutoMerge</code> | Component that sets up mergify for merging approved pull requests. |
| <code><a href="#projen-modules.CdkTypeScriptApp.property.biome">biome</a></code> | <code>projen.javascript.Biome</code> | *No description.* |
| <code><a href="#projen-modules.CdkTypeScriptApp.property.buildWorkflow">buildWorkflow</a></code> | <code>projen.build.BuildWorkflow</code> | The PR build GitHub workflow. |
| <code><a href="#projen-modules.CdkTypeScriptApp.property.buildWorkflowJobId">buildWorkflowJobId</a></code> | <code>string</code> | The job ID of the build workflow. |
| <code><a href="#projen-modules.CdkTypeScriptApp.property.jest">jest</a></code> | <code>projen.javascript.Jest</code> | The Jest configuration (if enabled). |
| <code><a href="#projen-modules.CdkTypeScriptApp.property.maxNodeVersion">maxNodeVersion</a></code> | <code>string</code> | Maximum node version supported by this package. |
| <code><a href="#projen-modules.CdkTypeScriptApp.property.minNodeVersion">minNodeVersion</a></code> | <code>string</code> | The minimum node version required by this package to function. |
| <code><a href="#projen-modules.CdkTypeScriptApp.property.npmignore">npmignore</a></code> | <code>projen.IgnoreFile</code> | The .npmignore file. |
| <code><a href="#projen-modules.CdkTypeScriptApp.property.prettier">prettier</a></code> | <code>projen.javascript.Prettier</code> | *No description.* |
| <code><a href="#projen-modules.CdkTypeScriptApp.property.publisher">publisher</a></code> | <code>projen.release.Publisher</code> | Package publisher. |
| <code><a href="#projen-modules.CdkTypeScriptApp.property.release">release</a></code> | <code>projen.release.Release</code> | Release management. |
| <code><a href="#projen-modules.CdkTypeScriptApp.property.upgradeWorkflow">upgradeWorkflow</a></code> | <code>projen.javascript.UpgradeDependencies</code> | The upgrade workflow. |
| <code><a href="#projen-modules.CdkTypeScriptApp.property.docsDirectory">docsDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen-modules.CdkTypeScriptApp.property.libdir">libdir</a></code> | <code>string</code> | The directory in which compiled .js files reside. |
| <code><a href="#projen-modules.CdkTypeScriptApp.property.srcdir">srcdir</a></code> | <code>string</code> | The directory in which the .ts sources reside. |
| <code><a href="#projen-modules.CdkTypeScriptApp.property.testdir">testdir</a></code> | <code>string</code> | The directory in which tests reside. |
| <code><a href="#projen-modules.CdkTypeScriptApp.property.tsconfigDev">tsconfigDev</a></code> | <code>projen.javascript.TypescriptConfig</code> | A typescript configuration file which covers all files (sources, tests, projen). |
| <code><a href="#projen-modules.CdkTypeScriptApp.property.watchTask">watchTask</a></code> | <code>projen.Task</code> | The "watch" task. |
| <code><a href="#projen-modules.CdkTypeScriptApp.property.docgen">docgen</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#projen-modules.CdkTypeScriptApp.property.eslint">eslint</a></code> | <code>projen.javascript.Eslint</code> | *No description.* |
| <code><a href="#projen-modules.CdkTypeScriptApp.property.tsconfig">tsconfig</a></code> | <code>projen.javascript.TypescriptConfig</code> | *No description.* |
| <code><a href="#projen-modules.CdkTypeScriptApp.property.tsconfigEslint">tsconfigEslint</a></code> | <code>projen.javascript.TypescriptConfig</code> | *No description.* |
| <code><a href="#projen-modules.CdkTypeScriptApp.property.appEntrypoint">appEntrypoint</a></code> | <code>string</code> | The CDK app entrypoint. |
| <code><a href="#projen-modules.CdkTypeScriptApp.property.cdkConfig">cdkConfig</a></code> | <code>projen.awscdk.CdkConfig</code> | cdk.json configuration. |
| <code><a href="#projen-modules.CdkTypeScriptApp.property.cdkDeps">cdkDeps</a></code> | <code>projen.awscdk.AwsCdkDeps</code> | *No description.* |
| <code><a href="#projen-modules.CdkTypeScriptApp.property.cdkTasks">cdkTasks</a></code> | <code>projen.awscdk.CdkTasks</code> | Common CDK tasks. |
| <code><a href="#projen-modules.CdkTypeScriptApp.property.cdkVersion">cdkVersion</a></code> | <code>string</code> | The CDK version this app is using. |
| <code><a href="#projen-modules.CdkTypeScriptApp.property.readme">readme</a></code> | <code><a href="#projen-modules.Readme">Readme</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="projen-modules.CdkTypeScriptApp.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `buildTask`<sup>Required</sup> <a name="buildTask" id="projen-modules.CdkTypeScriptApp.property.buildTask"></a>

```typescript
public readonly buildTask: Task;
```

- *Type:* projen.Task

---

##### `commitGenerated`<sup>Required</sup> <a name="commitGenerated" id="projen-modules.CdkTypeScriptApp.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean

Whether to commit the managed files by default.

---

##### `compileTask`<sup>Required</sup> <a name="compileTask" id="projen-modules.CdkTypeScriptApp.property.compileTask"></a>

```typescript
public readonly compileTask: Task;
```

- *Type:* projen.Task

---

##### `components`<sup>Required</sup> <a name="components" id="projen-modules.CdkTypeScriptApp.property.components"></a>

```typescript
public readonly components: Component[];
```

- *Type:* projen.Component[]

Returns all the components within this project.

---

##### `deps`<sup>Required</sup> <a name="deps" id="projen-modules.CdkTypeScriptApp.property.deps"></a>

```typescript
public readonly deps: Dependencies;
```

- *Type:* projen.Dependencies

Project dependencies.

---

##### `ejected`<sup>Required</sup> <a name="ejected" id="projen-modules.CdkTypeScriptApp.property.ejected"></a>

```typescript
public readonly ejected: boolean;
```

- *Type:* boolean

Whether or not the project is being ejected.

---

##### `files`<sup>Required</sup> <a name="files" id="projen-modules.CdkTypeScriptApp.property.files"></a>

```typescript
public readonly files: FileBase[];
```

- *Type:* projen.FileBase[]

All files in this project.

---

##### `gitattributes`<sup>Required</sup> <a name="gitattributes" id="projen-modules.CdkTypeScriptApp.property.gitattributes"></a>

```typescript
public readonly gitattributes: GitAttributesFile;
```

- *Type:* projen.GitAttributesFile

The .gitattributes file for this repository.

---

##### `gitignore`<sup>Required</sup> <a name="gitignore" id="projen-modules.CdkTypeScriptApp.property.gitignore"></a>

```typescript
public readonly gitignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

.gitignore.

---

##### `logger`<sup>Required</sup> <a name="logger" id="projen-modules.CdkTypeScriptApp.property.logger"></a>

```typescript
public readonly logger: Logger;
```

- *Type:* projen.Logger

Logging utilities.

---

##### `name`<sup>Required</sup> <a name="name" id="projen-modules.CdkTypeScriptApp.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Project name.

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="projen-modules.CdkTypeScriptApp.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

Absolute output directory of this project.

---

##### `packageTask`<sup>Required</sup> <a name="packageTask" id="projen-modules.CdkTypeScriptApp.property.packageTask"></a>

```typescript
public readonly packageTask: Task;
```

- *Type:* projen.Task

---

##### `postCompileTask`<sup>Required</sup> <a name="postCompileTask" id="projen-modules.CdkTypeScriptApp.property.postCompileTask"></a>

```typescript
public readonly postCompileTask: Task;
```

- *Type:* projen.Task

---

##### `preCompileTask`<sup>Required</sup> <a name="preCompileTask" id="projen-modules.CdkTypeScriptApp.property.preCompileTask"></a>

```typescript
public readonly preCompileTask: Task;
```

- *Type:* projen.Task

---

##### `projectBuild`<sup>Required</sup> <a name="projectBuild" id="projen-modules.CdkTypeScriptApp.property.projectBuild"></a>

```typescript
public readonly projectBuild: ProjectBuild;
```

- *Type:* projen.ProjectBuild

Manages the build process of the project.

---

##### `projenCommand`<sup>Required</sup> <a name="projenCommand" id="projen-modules.CdkTypeScriptApp.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string

The command to use in order to run the projen CLI.

---

##### `root`<sup>Required</sup> <a name="root" id="projen-modules.CdkTypeScriptApp.property.root"></a>

```typescript
public readonly root: Project;
```

- *Type:* projen.Project

The root project.

---

##### `subprojects`<sup>Required</sup> <a name="subprojects" id="projen-modules.CdkTypeScriptApp.property.subprojects"></a>

```typescript
public readonly subprojects: Project[];
```

- *Type:* projen.Project[]

Returns all the subprojects within this project.

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="projen-modules.CdkTypeScriptApp.property.tasks"></a>

```typescript
public readonly tasks: Tasks;
```

- *Type:* projen.Tasks

Project tasks.

---

##### `testTask`<sup>Required</sup> <a name="testTask" id="projen-modules.CdkTypeScriptApp.property.testTask"></a>

```typescript
public readonly testTask: Task;
```

- *Type:* projen.Task

---

##### `defaultTask`<sup>Optional</sup> <a name="defaultTask" id="projen-modules.CdkTypeScriptApp.property.defaultTask"></a>

```typescript
public readonly defaultTask: Task;
```

- *Type:* projen.Task

This is the "default" task, the one that executes "projen".

Undefined if
the project is being ejected.

---

##### `initProject`<sup>Optional</sup> <a name="initProject" id="projen-modules.CdkTypeScriptApp.property.initProject"></a>

```typescript
public readonly initProject: InitProject;
```

- *Type:* projen.InitProject

The options used when this project is bootstrapped via `projen new`.

It
includes the original set of options passed to the CLI and also the JSII
FQN of the project type.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="projen-modules.CdkTypeScriptApp.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

A parent project.

If undefined, this is the root project.

---

##### `projectType`<sup>Required</sup> <a name="projectType" id="projen-modules.CdkTypeScriptApp.property.projectType"></a>

```typescript
public readonly projectType: ProjectType;
```

- *Type:* projen.ProjectType

---

##### `autoApprove`<sup>Optional</sup> <a name="autoApprove" id="projen-modules.CdkTypeScriptApp.property.autoApprove"></a>

```typescript
public readonly autoApprove: AutoApprove;
```

- *Type:* projen.github.AutoApprove

Auto approve set up for this project.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="projen-modules.CdkTypeScriptApp.property.devContainer"></a>

```typescript
public readonly devContainer: DevContainer;
```

- *Type:* projen.vscode.DevContainer

Access for .devcontainer.json (used for GitHub Codespaces).

This will be `undefined` if devContainer boolean is false

---

##### `github`<sup>Optional</sup> <a name="github" id="projen-modules.CdkTypeScriptApp.property.github"></a>

```typescript
public readonly github: GitHub;
```

- *Type:* projen.github.GitHub

Access all github components.

This will be `undefined` for subprojects.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="projen-modules.CdkTypeScriptApp.property.gitpod"></a>

```typescript
public readonly gitpod: Gitpod;
```

- *Type:* projen.Gitpod

Access for Gitpod.

This will be `undefined` if gitpod boolean is false

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="projen-modules.CdkTypeScriptApp.property.vscode"></a>

```typescript
public readonly vscode: VsCode;
```

- *Type:* projen.vscode.VsCode

Access all VSCode components.

This will be `undefined` for subprojects.

---

##### ~~`allowLibraryDependencies`~~<sup>Required</sup> <a name="allowLibraryDependencies" id="projen-modules.CdkTypeScriptApp.property.allowLibraryDependencies"></a>

- *Deprecated:* use `package.allowLibraryDependencies`

```typescript
public readonly allowLibraryDependencies: boolean;
```

- *Type:* boolean

---

##### `artifactsDirectory`<sup>Required</sup> <a name="artifactsDirectory" id="projen-modules.CdkTypeScriptApp.property.artifactsDirectory"></a>

```typescript
public readonly artifactsDirectory: string;
```

- *Type:* string

The build output directory.

An npm tarball will be created under the `js`
subdirectory. For example, if this is set to `dist` (the default), the npm
tarball will be placed under `dist/js/boom-boom-1.2.3.tg`.

---

##### `artifactsJavascriptDirectory`<sup>Required</sup> <a name="artifactsJavascriptDirectory" id="projen-modules.CdkTypeScriptApp.property.artifactsJavascriptDirectory"></a>

```typescript
public readonly artifactsJavascriptDirectory: string;
```

- *Type:* string

The location of the npm tarball after build (`${artifactsDirectory}/js`).

---

##### `bundler`<sup>Required</sup> <a name="bundler" id="projen-modules.CdkTypeScriptApp.property.bundler"></a>

```typescript
public readonly bundler: Bundler;
```

- *Type:* projen.javascript.Bundler

---

##### ~~`entrypoint`~~<sup>Required</sup> <a name="entrypoint" id="projen-modules.CdkTypeScriptApp.property.entrypoint"></a>

- *Deprecated:* use `package.entrypoint`

```typescript
public readonly entrypoint: string;
```

- *Type:* string

---

##### ~~`manifest`~~<sup>Required</sup> <a name="manifest" id="projen-modules.CdkTypeScriptApp.property.manifest"></a>

- *Deprecated:* use `package.addField(x, y)`

```typescript
public readonly manifest: any;
```

- *Type:* any

---

##### `npmrc`<sup>Required</sup> <a name="npmrc" id="projen-modules.CdkTypeScriptApp.property.npmrc"></a>

```typescript
public readonly npmrc: NpmConfig;
```

- *Type:* projen.javascript.NpmConfig

The .npmrc file.

---

##### `package`<sup>Required</sup> <a name="package" id="projen-modules.CdkTypeScriptApp.property.package"></a>

```typescript
public readonly package: NodePackage;
```

- *Type:* projen.javascript.NodePackage

API for managing the node package.

---

##### ~~`packageManager`~~<sup>Required</sup> <a name="packageManager" id="projen-modules.CdkTypeScriptApp.property.packageManager"></a>

- *Deprecated:* use `package.packageManager`

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* projen.javascript.NodePackageManager

The package manager to use.

---

##### `runScriptCommand`<sup>Required</sup> <a name="runScriptCommand" id="projen-modules.CdkTypeScriptApp.property.runScriptCommand"></a>

```typescript
public readonly runScriptCommand: string;
```

- *Type:* string

The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager).

---

##### `autoMerge`<sup>Optional</sup> <a name="autoMerge" id="projen-modules.CdkTypeScriptApp.property.autoMerge"></a>

```typescript
public readonly autoMerge: AutoMerge;
```

- *Type:* projen.github.AutoMerge

Component that sets up mergify for merging approved pull requests.

---

##### `biome`<sup>Optional</sup> <a name="biome" id="projen-modules.CdkTypeScriptApp.property.biome"></a>

```typescript
public readonly biome: Biome;
```

- *Type:* projen.javascript.Biome

---

##### `buildWorkflow`<sup>Optional</sup> <a name="buildWorkflow" id="projen-modules.CdkTypeScriptApp.property.buildWorkflow"></a>

```typescript
public readonly buildWorkflow: BuildWorkflow;
```

- *Type:* projen.build.BuildWorkflow

The PR build GitHub workflow.

`undefined` if `buildWorkflow` is disabled.

---

##### `buildWorkflowJobId`<sup>Optional</sup> <a name="buildWorkflowJobId" id="projen-modules.CdkTypeScriptApp.property.buildWorkflowJobId"></a>

```typescript
public readonly buildWorkflowJobId: string;
```

- *Type:* string

The job ID of the build workflow.

---

##### `jest`<sup>Optional</sup> <a name="jest" id="projen-modules.CdkTypeScriptApp.property.jest"></a>

```typescript
public readonly jest: Jest;
```

- *Type:* projen.javascript.Jest

The Jest configuration (if enabled).

---

##### `maxNodeVersion`<sup>Optional</sup> <a name="maxNodeVersion" id="projen-modules.CdkTypeScriptApp.property.maxNodeVersion"></a>

```typescript
public readonly maxNodeVersion: string;
```

- *Type:* string

Maximum node version supported by this package.

The value indicates the package is incompatible with newer versions.

---

##### `minNodeVersion`<sup>Optional</sup> <a name="minNodeVersion" id="projen-modules.CdkTypeScriptApp.property.minNodeVersion"></a>

```typescript
public readonly minNodeVersion: string;
```

- *Type:* string

The minimum node version required by this package to function.

This value indicates the package is incompatible with older versions.

---

##### `npmignore`<sup>Optional</sup> <a name="npmignore" id="projen-modules.CdkTypeScriptApp.property.npmignore"></a>

```typescript
public readonly npmignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

The .npmignore file.

---

##### `prettier`<sup>Optional</sup> <a name="prettier" id="projen-modules.CdkTypeScriptApp.property.prettier"></a>

```typescript
public readonly prettier: Prettier;
```

- *Type:* projen.javascript.Prettier

---

##### ~~`publisher`~~<sup>Optional</sup> <a name="publisher" id="projen-modules.CdkTypeScriptApp.property.publisher"></a>

- *Deprecated:* use `release.publisher`.

```typescript
public readonly publisher: Publisher;
```

- *Type:* projen.release.Publisher

Package publisher.

This will be `undefined` if the project does not have a
release workflow.

---

##### `release`<sup>Optional</sup> <a name="release" id="projen-modules.CdkTypeScriptApp.property.release"></a>

```typescript
public readonly release: Release;
```

- *Type:* projen.release.Release

Release management.

---

##### `upgradeWorkflow`<sup>Optional</sup> <a name="upgradeWorkflow" id="projen-modules.CdkTypeScriptApp.property.upgradeWorkflow"></a>

```typescript
public readonly upgradeWorkflow: UpgradeDependencies;
```

- *Type:* projen.javascript.UpgradeDependencies

The upgrade workflow.

---

##### `docsDirectory`<sup>Required</sup> <a name="docsDirectory" id="projen-modules.CdkTypeScriptApp.property.docsDirectory"></a>

```typescript
public readonly docsDirectory: string;
```

- *Type:* string

---

##### `libdir`<sup>Required</sup> <a name="libdir" id="projen-modules.CdkTypeScriptApp.property.libdir"></a>

```typescript
public readonly libdir: string;
```

- *Type:* string

The directory in which compiled .js files reside.

---

##### `srcdir`<sup>Required</sup> <a name="srcdir" id="projen-modules.CdkTypeScriptApp.property.srcdir"></a>

```typescript
public readonly srcdir: string;
```

- *Type:* string

The directory in which the .ts sources reside.

---

##### `testdir`<sup>Required</sup> <a name="testdir" id="projen-modules.CdkTypeScriptApp.property.testdir"></a>

```typescript
public readonly testdir: string;
```

- *Type:* string

The directory in which tests reside.

---

##### `tsconfigDev`<sup>Required</sup> <a name="tsconfigDev" id="projen-modules.CdkTypeScriptApp.property.tsconfigDev"></a>

```typescript
public readonly tsconfigDev: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

A typescript configuration file which covers all files (sources, tests, projen).

---

##### `watchTask`<sup>Required</sup> <a name="watchTask" id="projen-modules.CdkTypeScriptApp.property.watchTask"></a>

```typescript
public readonly watchTask: Task;
```

- *Type:* projen.Task

The "watch" task.

---

##### `docgen`<sup>Optional</sup> <a name="docgen" id="projen-modules.CdkTypeScriptApp.property.docgen"></a>

```typescript
public readonly docgen: boolean;
```

- *Type:* boolean

---

##### `eslint`<sup>Optional</sup> <a name="eslint" id="projen-modules.CdkTypeScriptApp.property.eslint"></a>

```typescript
public readonly eslint: Eslint;
```

- *Type:* projen.javascript.Eslint

---

##### `tsconfig`<sup>Optional</sup> <a name="tsconfig" id="projen-modules.CdkTypeScriptApp.property.tsconfig"></a>

```typescript
public readonly tsconfig: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

---

##### `tsconfigEslint`<sup>Optional</sup> <a name="tsconfigEslint" id="projen-modules.CdkTypeScriptApp.property.tsconfigEslint"></a>

```typescript
public readonly tsconfigEslint: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

---

##### `appEntrypoint`<sup>Required</sup> <a name="appEntrypoint" id="projen-modules.CdkTypeScriptApp.property.appEntrypoint"></a>

```typescript
public readonly appEntrypoint: string;
```

- *Type:* string

The CDK app entrypoint.

---

##### `cdkConfig`<sup>Required</sup> <a name="cdkConfig" id="projen-modules.CdkTypeScriptApp.property.cdkConfig"></a>

```typescript
public readonly cdkConfig: CdkConfig;
```

- *Type:* projen.awscdk.CdkConfig

cdk.json configuration.

---

##### `cdkDeps`<sup>Required</sup> <a name="cdkDeps" id="projen-modules.CdkTypeScriptApp.property.cdkDeps"></a>

```typescript
public readonly cdkDeps: AwsCdkDeps;
```

- *Type:* projen.awscdk.AwsCdkDeps

---

##### `cdkTasks`<sup>Required</sup> <a name="cdkTasks" id="projen-modules.CdkTypeScriptApp.property.cdkTasks"></a>

```typescript
public readonly cdkTasks: CdkTasks;
```

- *Type:* projen.awscdk.CdkTasks

Common CDK tasks.

---

##### `cdkVersion`<sup>Required</sup> <a name="cdkVersion" id="projen-modules.CdkTypeScriptApp.property.cdkVersion"></a>

```typescript
public readonly cdkVersion: string;
```

- *Type:* string

The CDK version this app is using.

---

##### `readme`<sup>Required</sup> <a name="readme" id="projen-modules.CdkTypeScriptApp.property.readme"></a>

```typescript
public readonly readme: Readme;
```

- *Type:* <a href="#projen-modules.Readme">Readme</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen-modules.CdkTypeScriptApp.property.DEFAULT_TASK">DEFAULT_TASK</a></code> | <code>string</code> | The name of the default task (the task executed when `projen` is run without arguments). |
| <code><a href="#projen-modules.CdkTypeScriptApp.property.DEFAULT_TS_JEST_TRANFORM_PATTERN">DEFAULT_TS_JEST_TRANFORM_PATTERN</a></code> | <code>string</code> | *No description.* |

---

##### `DEFAULT_TASK`<sup>Required</sup> <a name="DEFAULT_TASK" id="projen-modules.CdkTypeScriptApp.property.DEFAULT_TASK"></a>

```typescript
public readonly DEFAULT_TASK: string;
```

- *Type:* string

The name of the default task (the task executed when `projen` is run without arguments).

Normally
this task should synthesize the project files.

---

##### `DEFAULT_TS_JEST_TRANFORM_PATTERN`<sup>Required</sup> <a name="DEFAULT_TS_JEST_TRANFORM_PATTERN" id="projen-modules.CdkTypeScriptApp.property.DEFAULT_TS_JEST_TRANFORM_PATTERN"></a>

```typescript
public readonly DEFAULT_TS_JEST_TRANFORM_PATTERN: string;
```

- *Type:* string

---

### JsiiProject <a name="JsiiProject" id="projen-modules.JsiiProject"></a>

A JSII project in TypeScript.

#### Initializers <a name="Initializers" id="projen-modules.JsiiProject.Initializer"></a>

```typescript
import { JsiiProject } from 'projen-modules'

new JsiiProject(options: JsiiProjectOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen-modules.JsiiProject.Initializer.parameter.options">options</a></code> | <code><a href="#projen-modules.JsiiProjectOptions">JsiiProjectOptions</a></code> | *No description.* |

---

##### `options`<sup>Required</sup> <a name="options" id="projen-modules.JsiiProject.Initializer.parameter.options"></a>

- *Type:* <a href="#projen-modules.JsiiProjectOptions">JsiiProjectOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen-modules.JsiiProject.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#projen-modules.JsiiProject.addExcludeFromCleanup">addExcludeFromCleanup</a></code> | Exclude the matching files from pre-synth cleanup. |
| <code><a href="#projen-modules.JsiiProject.addGitIgnore">addGitIgnore</a></code> | Adds a .gitignore pattern. |
| <code><a href="#projen-modules.JsiiProject.addPackageIgnore">addPackageIgnore</a></code> | Adds patterns to be ignored by npm. |
| <code><a href="#projen-modules.JsiiProject.addTask">addTask</a></code> | Adds a new task to this project. |
| <code><a href="#projen-modules.JsiiProject.addTip">addTip</a></code> | Prints a "tip" message during synthesis. |
| <code><a href="#projen-modules.JsiiProject.annotateGenerated">annotateGenerated</a></code> | Marks the provided file(s) as being generated. |
| <code><a href="#projen-modules.JsiiProject.postSynthesize">postSynthesize</a></code> | Called after all components are synthesized. |
| <code><a href="#projen-modules.JsiiProject.preSynthesize">preSynthesize</a></code> | Called before all components are synthesized. |
| <code><a href="#projen-modules.JsiiProject.removeTask">removeTask</a></code> | Removes a task from a project. |
| <code><a href="#projen-modules.JsiiProject.runTaskCommand">runTaskCommand</a></code> | Returns the shell command to execute in order to run a task. |
| <code><a href="#projen-modules.JsiiProject.synth">synth</a></code> | Synthesize all project files into `outdir`. |
| <code><a href="#projen-modules.JsiiProject.tryFindFile">tryFindFile</a></code> | Finds a file at the specified relative path within this project and all its subprojects. |
| <code><a href="#projen-modules.JsiiProject.tryFindJsonFile">tryFindJsonFile</a></code> | Finds a json file by name. |
| <code><a href="#projen-modules.JsiiProject.tryFindObjectFile">tryFindObjectFile</a></code> | Finds an object file (like JsonFile, YamlFile, etc.) by name. |
| <code><a href="#projen-modules.JsiiProject.tryRemoveFile">tryRemoveFile</a></code> | Finds a file at the specified relative path within this project and removes it. |
| <code><a href="#projen-modules.JsiiProject.addBins">addBins</a></code> | *No description.* |
| <code><a href="#projen-modules.JsiiProject.addBundledDeps">addBundledDeps</a></code> | Defines bundled dependencies. |
| <code><a href="#projen-modules.JsiiProject.addCompileCommand">addCompileCommand</a></code> | DEPRECATED. |
| <code><a href="#projen-modules.JsiiProject.addDeps">addDeps</a></code> | Defines normal dependencies. |
| <code><a href="#projen-modules.JsiiProject.addDevDeps">addDevDeps</a></code> | Defines development/test dependencies. |
| <code><a href="#projen-modules.JsiiProject.addFields">addFields</a></code> | Directly set fields in `package.json`. |
| <code><a href="#projen-modules.JsiiProject.addKeywords">addKeywords</a></code> | Adds keywords to package.json (deduplicated). |
| <code><a href="#projen-modules.JsiiProject.addPeerDeps">addPeerDeps</a></code> | Defines peer dependencies. |
| <code><a href="#projen-modules.JsiiProject.addScripts">addScripts</a></code> | Replaces the contents of multiple npm package.json scripts. |
| <code><a href="#projen-modules.JsiiProject.addTestCommand">addTestCommand</a></code> | DEPRECATED. |
| <code><a href="#projen-modules.JsiiProject.hasScript">hasScript</a></code> | Indicates if a script by the name name is defined. |
| <code><a href="#projen-modules.JsiiProject.removeScript">removeScript</a></code> | Removes the npm script (always successful). |
| <code><a href="#projen-modules.JsiiProject.renderWorkflowSetup">renderWorkflowSetup</a></code> | Returns the set of workflow steps which should be executed to bootstrap a workflow. |
| <code><a href="#projen-modules.JsiiProject.setScript">setScript</a></code> | Replaces the contents of an npm package.json script. |

---

##### `toString` <a name="toString" id="projen-modules.JsiiProject.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addExcludeFromCleanup` <a name="addExcludeFromCleanup" id="projen-modules.JsiiProject.addExcludeFromCleanup"></a>

```typescript
public addExcludeFromCleanup(globs: ...string[]): void
```

Exclude the matching files from pre-synth cleanup.

Can be used when, for example, some
source files include the projen marker and we don't want them to be erased during synth.

###### `globs`<sup>Required</sup> <a name="globs" id="projen-modules.JsiiProject.addExcludeFromCleanup.parameter.globs"></a>

- *Type:* ...string[]

The glob patterns to match.

---

##### `addGitIgnore` <a name="addGitIgnore" id="projen-modules.JsiiProject.addGitIgnore"></a>

```typescript
public addGitIgnore(pattern: string): void
```

Adds a .gitignore pattern.

###### `pattern`<sup>Required</sup> <a name="pattern" id="projen-modules.JsiiProject.addGitIgnore.parameter.pattern"></a>

- *Type:* string

The glob pattern to ignore.

---

##### `addPackageIgnore` <a name="addPackageIgnore" id="projen-modules.JsiiProject.addPackageIgnore"></a>

```typescript
public addPackageIgnore(pattern: string): void
```

Adds patterns to be ignored by npm.

###### `pattern`<sup>Required</sup> <a name="pattern" id="projen-modules.JsiiProject.addPackageIgnore.parameter.pattern"></a>

- *Type:* string

The pattern to ignore.

---

##### `addTask` <a name="addTask" id="projen-modules.JsiiProject.addTask"></a>

```typescript
public addTask(name: string, props?: TaskOptions): Task
```

Adds a new task to this project.

This will fail if the project already has
a task with this name.

###### `name`<sup>Required</sup> <a name="name" id="projen-modules.JsiiProject.addTask.parameter.name"></a>

- *Type:* string

The task name to add.

---

###### `props`<sup>Optional</sup> <a name="props" id="projen-modules.JsiiProject.addTask.parameter.props"></a>

- *Type:* projen.TaskOptions

Task properties.

---

##### ~~`addTip`~~ <a name="addTip" id="projen-modules.JsiiProject.addTip"></a>

```typescript
public addTip(message: string): void
```

Prints a "tip" message during synthesis.

###### `message`<sup>Required</sup> <a name="message" id="projen-modules.JsiiProject.addTip.parameter.message"></a>

- *Type:* string

The message.

---

##### `annotateGenerated` <a name="annotateGenerated" id="projen-modules.JsiiProject.annotateGenerated"></a>

```typescript
public annotateGenerated(glob: string): void
```

Marks the provided file(s) as being generated.

This is achieved using the
github-linguist attributes. Generated files do not count against the
repository statistics and language breakdown.

> [https://github.com/github/linguist/blob/master/docs/overrides.md](https://github.com/github/linguist/blob/master/docs/overrides.md)

###### `glob`<sup>Required</sup> <a name="glob" id="projen-modules.JsiiProject.annotateGenerated.parameter.glob"></a>

- *Type:* string

the glob pattern to match (could be a file path).

---

##### `postSynthesize` <a name="postSynthesize" id="projen-modules.JsiiProject.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after all components are synthesized.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="projen-modules.JsiiProject.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before all components are synthesized.

##### `removeTask` <a name="removeTask" id="projen-modules.JsiiProject.removeTask"></a>

```typescript
public removeTask(name: string): Task
```

Removes a task from a project.

###### `name`<sup>Required</sup> <a name="name" id="projen-modules.JsiiProject.removeTask.parameter.name"></a>

- *Type:* string

The name of the task to remove.

---

##### `runTaskCommand` <a name="runTaskCommand" id="projen-modules.JsiiProject.runTaskCommand"></a>

```typescript
public runTaskCommand(task: Task): string
```

Returns the shell command to execute in order to run a task.

This will
typically be `npx projen TASK`.

###### `task`<sup>Required</sup> <a name="task" id="projen-modules.JsiiProject.runTaskCommand.parameter.task"></a>

- *Type:* projen.Task

The task for which the command is required.

---

##### `synth` <a name="synth" id="projen-modules.JsiiProject.synth"></a>

```typescript
public synth(): void
```

Synthesize all project files into `outdir`.

1. Call "this.preSynthesize()"
2. Delete all generated files
3. Synthesize all subprojects
4. Synthesize all components of this project
5. Call "postSynthesize()" for all components of this project
6. Call "this.postSynthesize()"

##### `tryFindFile` <a name="tryFindFile" id="projen-modules.JsiiProject.tryFindFile"></a>

```typescript
public tryFindFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and all its subprojects.

###### `filePath`<sup>Required</sup> <a name="filePath" id="projen-modules.JsiiProject.tryFindFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be resolved
from the root of _this_ project.

---

##### ~~`tryFindJsonFile`~~ <a name="tryFindJsonFile" id="projen-modules.JsiiProject.tryFindJsonFile"></a>

```typescript
public tryFindJsonFile(filePath: string): JsonFile
```

Finds a json file by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="projen-modules.JsiiProject.tryFindJsonFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryFindObjectFile` <a name="tryFindObjectFile" id="projen-modules.JsiiProject.tryFindObjectFile"></a>

```typescript
public tryFindObjectFile(filePath: string): ObjectFile
```

Finds an object file (like JsonFile, YamlFile, etc.) by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="projen-modules.JsiiProject.tryFindObjectFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryRemoveFile` <a name="tryRemoveFile" id="projen-modules.JsiiProject.tryRemoveFile"></a>

```typescript
public tryRemoveFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and removes it.

###### `filePath`<sup>Required</sup> <a name="filePath" id="projen-modules.JsiiProject.tryRemoveFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be
resolved from the root of _this_ project.

---

##### `addBins` <a name="addBins" id="projen-modules.JsiiProject.addBins"></a>

```typescript
public addBins(bins: {[ key: string ]: string}): void
```

###### `bins`<sup>Required</sup> <a name="bins" id="projen-modules.JsiiProject.addBins.parameter.bins"></a>

- *Type:* {[ key: string ]: string}

---

##### `addBundledDeps` <a name="addBundledDeps" id="projen-modules.JsiiProject.addBundledDeps"></a>

```typescript
public addBundledDeps(deps: ...string[]): void
```

Defines bundled dependencies.

Bundled dependencies will be added as normal dependencies as well as to the
`bundledDependencies` section of your `package.json`.

###### `deps`<sup>Required</sup> <a name="deps" id="projen-modules.JsiiProject.addBundledDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### ~~`addCompileCommand`~~ <a name="addCompileCommand" id="projen-modules.JsiiProject.addCompileCommand"></a>

```typescript
public addCompileCommand(commands: ...string[]): void
```

DEPRECATED.

###### `commands`<sup>Required</sup> <a name="commands" id="projen-modules.JsiiProject.addCompileCommand.parameter.commands"></a>

- *Type:* ...string[]

---

##### `addDeps` <a name="addDeps" id="projen-modules.JsiiProject.addDeps"></a>

```typescript
public addDeps(deps: ...string[]): void
```

Defines normal dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="projen-modules.JsiiProject.addDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addDevDeps` <a name="addDevDeps" id="projen-modules.JsiiProject.addDevDeps"></a>

```typescript
public addDevDeps(deps: ...string[]): void
```

Defines development/test dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="projen-modules.JsiiProject.addDevDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addFields` <a name="addFields" id="projen-modules.JsiiProject.addFields"></a>

```typescript
public addFields(fields: {[ key: string ]: any}): void
```

Directly set fields in `package.json`.

###### `fields`<sup>Required</sup> <a name="fields" id="projen-modules.JsiiProject.addFields.parameter.fields"></a>

- *Type:* {[ key: string ]: any}

The fields to set.

---

##### `addKeywords` <a name="addKeywords" id="projen-modules.JsiiProject.addKeywords"></a>

```typescript
public addKeywords(keywords: ...string[]): void
```

Adds keywords to package.json (deduplicated).

###### `keywords`<sup>Required</sup> <a name="keywords" id="projen-modules.JsiiProject.addKeywords.parameter.keywords"></a>

- *Type:* ...string[]

The keywords to add.

---

##### `addPeerDeps` <a name="addPeerDeps" id="projen-modules.JsiiProject.addPeerDeps"></a>

```typescript
public addPeerDeps(deps: ...string[]): void
```

Defines peer dependencies.

When adding peer dependencies, a devDependency will also be added on the
pinned version of the declared peer. This will ensure that you are testing
your code against the minimum version required from your consumers.

###### `deps`<sup>Required</sup> <a name="deps" id="projen-modules.JsiiProject.addPeerDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addScripts` <a name="addScripts" id="projen-modules.JsiiProject.addScripts"></a>

```typescript
public addScripts(scripts: {[ key: string ]: string}): void
```

Replaces the contents of multiple npm package.json scripts.

###### `scripts`<sup>Required</sup> <a name="scripts" id="projen-modules.JsiiProject.addScripts.parameter.scripts"></a>

- *Type:* {[ key: string ]: string}

The scripts to set.

---

##### ~~`addTestCommand`~~ <a name="addTestCommand" id="projen-modules.JsiiProject.addTestCommand"></a>

```typescript
public addTestCommand(commands: ...string[]): void
```

DEPRECATED.

###### `commands`<sup>Required</sup> <a name="commands" id="projen-modules.JsiiProject.addTestCommand.parameter.commands"></a>

- *Type:* ...string[]

---

##### ~~`hasScript`~~ <a name="hasScript" id="projen-modules.JsiiProject.hasScript"></a>

```typescript
public hasScript(name: string): boolean
```

Indicates if a script by the name name is defined.

###### `name`<sup>Required</sup> <a name="name" id="projen-modules.JsiiProject.hasScript.parameter.name"></a>

- *Type:* string

The name of the script.

---

##### `removeScript` <a name="removeScript" id="projen-modules.JsiiProject.removeScript"></a>

```typescript
public removeScript(name: string): void
```

Removes the npm script (always successful).

###### `name`<sup>Required</sup> <a name="name" id="projen-modules.JsiiProject.removeScript.parameter.name"></a>

- *Type:* string

The name of the script.

---

##### `renderWorkflowSetup` <a name="renderWorkflowSetup" id="projen-modules.JsiiProject.renderWorkflowSetup"></a>

```typescript
public renderWorkflowSetup(options?: RenderWorkflowSetupOptions): JobStep[]
```

Returns the set of workflow steps which should be executed to bootstrap a workflow.

###### `options`<sup>Optional</sup> <a name="options" id="projen-modules.JsiiProject.renderWorkflowSetup.parameter.options"></a>

- *Type:* projen.javascript.RenderWorkflowSetupOptions

Options.

---

##### `setScript` <a name="setScript" id="projen-modules.JsiiProject.setScript"></a>

```typescript
public setScript(name: string, command: string): void
```

Replaces the contents of an npm package.json script.

###### `name`<sup>Required</sup> <a name="name" id="projen-modules.JsiiProject.setScript.parameter.name"></a>

- *Type:* string

The script name.

---

###### `command`<sup>Required</sup> <a name="command" id="projen-modules.JsiiProject.setScript.parameter.command"></a>

- *Type:* string

The command to execute.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen-modules.JsiiProject.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#projen-modules.JsiiProject.isProject">isProject</a></code> | Test whether the given construct is a project. |
| <code><a href="#projen-modules.JsiiProject.of">of</a></code> | Find the closest ancestor project for given construct. |

---

##### `isConstruct` <a name="isConstruct" id="projen-modules.JsiiProject.isConstruct"></a>

```typescript
import { JsiiProject } from 'projen-modules'

JsiiProject.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="projen-modules.JsiiProject.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isProject` <a name="isProject" id="projen-modules.JsiiProject.isProject"></a>

```typescript
import { JsiiProject } from 'projen-modules'

JsiiProject.isProject(x: any)
```

Test whether the given construct is a project.

###### `x`<sup>Required</sup> <a name="x" id="projen-modules.JsiiProject.isProject.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="projen-modules.JsiiProject.of"></a>

```typescript
import { JsiiProject } from 'projen-modules'

JsiiProject.of(construct: IConstruct)
```

Find the closest ancestor project for given construct.

When given a project, this it the project itself.

###### `construct`<sup>Required</sup> <a name="construct" id="projen-modules.JsiiProject.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen-modules.JsiiProject.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#projen-modules.JsiiProject.property.buildTask">buildTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen-modules.JsiiProject.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#projen-modules.JsiiProject.property.compileTask">compileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen-modules.JsiiProject.property.components">components</a></code> | <code>projen.Component[]</code> | Returns all the components within this project. |
| <code><a href="#projen-modules.JsiiProject.property.deps">deps</a></code> | <code>projen.Dependencies</code> | Project dependencies. |
| <code><a href="#projen-modules.JsiiProject.property.ejected">ejected</a></code> | <code>boolean</code> | Whether or not the project is being ejected. |
| <code><a href="#projen-modules.JsiiProject.property.files">files</a></code> | <code>projen.FileBase[]</code> | All files in this project. |
| <code><a href="#projen-modules.JsiiProject.property.gitattributes">gitattributes</a></code> | <code>projen.GitAttributesFile</code> | The .gitattributes file for this repository. |
| <code><a href="#projen-modules.JsiiProject.property.gitignore">gitignore</a></code> | <code>projen.IgnoreFile</code> | .gitignore. |
| <code><a href="#projen-modules.JsiiProject.property.logger">logger</a></code> | <code>projen.Logger</code> | Logging utilities. |
| <code><a href="#projen-modules.JsiiProject.property.name">name</a></code> | <code>string</code> | Project name. |
| <code><a href="#projen-modules.JsiiProject.property.outdir">outdir</a></code> | <code>string</code> | Absolute output directory of this project. |
| <code><a href="#projen-modules.JsiiProject.property.packageTask">packageTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen-modules.JsiiProject.property.postCompileTask">postCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen-modules.JsiiProject.property.preCompileTask">preCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen-modules.JsiiProject.property.projectBuild">projectBuild</a></code> | <code>projen.ProjectBuild</code> | Manages the build process of the project. |
| <code><a href="#projen-modules.JsiiProject.property.projenCommand">projenCommand</a></code> | <code>string</code> | The command to use in order to run the projen CLI. |
| <code><a href="#projen-modules.JsiiProject.property.root">root</a></code> | <code>projen.Project</code> | The root project. |
| <code><a href="#projen-modules.JsiiProject.property.subprojects">subprojects</a></code> | <code>projen.Project[]</code> | Returns all the subprojects within this project. |
| <code><a href="#projen-modules.JsiiProject.property.tasks">tasks</a></code> | <code>projen.Tasks</code> | Project tasks. |
| <code><a href="#projen-modules.JsiiProject.property.testTask">testTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen-modules.JsiiProject.property.defaultTask">defaultTask</a></code> | <code>projen.Task</code> | This is the "default" task, the one that executes "projen". |
| <code><a href="#projen-modules.JsiiProject.property.initProject">initProject</a></code> | <code>projen.InitProject</code> | The options used when this project is bootstrapped via `projen new`. |
| <code><a href="#projen-modules.JsiiProject.property.parent">parent</a></code> | <code>projen.Project</code> | A parent project. |
| <code><a href="#projen-modules.JsiiProject.property.projectType">projectType</a></code> | <code>projen.ProjectType</code> | *No description.* |
| <code><a href="#projen-modules.JsiiProject.property.autoApprove">autoApprove</a></code> | <code>projen.github.AutoApprove</code> | Auto approve set up for this project. |
| <code><a href="#projen-modules.JsiiProject.property.devContainer">devContainer</a></code> | <code>projen.vscode.DevContainer</code> | Access for .devcontainer.json (used for GitHub Codespaces). |
| <code><a href="#projen-modules.JsiiProject.property.github">github</a></code> | <code>projen.github.GitHub</code> | Access all github components. |
| <code><a href="#projen-modules.JsiiProject.property.gitpod">gitpod</a></code> | <code>projen.Gitpod</code> | Access for Gitpod. |
| <code><a href="#projen-modules.JsiiProject.property.vscode">vscode</a></code> | <code>projen.vscode.VsCode</code> | Access all VSCode components. |
| <code><a href="#projen-modules.JsiiProject.property.allowLibraryDependencies">allowLibraryDependencies</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#projen-modules.JsiiProject.property.artifactsDirectory">artifactsDirectory</a></code> | <code>string</code> | The build output directory. |
| <code><a href="#projen-modules.JsiiProject.property.artifactsJavascriptDirectory">artifactsJavascriptDirectory</a></code> | <code>string</code> | The location of the npm tarball after build (`${artifactsDirectory}/js`). |
| <code><a href="#projen-modules.JsiiProject.property.bundler">bundler</a></code> | <code>projen.javascript.Bundler</code> | *No description.* |
| <code><a href="#projen-modules.JsiiProject.property.entrypoint">entrypoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen-modules.JsiiProject.property.manifest">manifest</a></code> | <code>any</code> | *No description.* |
| <code><a href="#projen-modules.JsiiProject.property.npmrc">npmrc</a></code> | <code>projen.javascript.NpmConfig</code> | The .npmrc file. |
| <code><a href="#projen-modules.JsiiProject.property.package">package</a></code> | <code>projen.javascript.NodePackage</code> | API for managing the node package. |
| <code><a href="#projen-modules.JsiiProject.property.packageManager">packageManager</a></code> | <code>projen.javascript.NodePackageManager</code> | The package manager to use. |
| <code><a href="#projen-modules.JsiiProject.property.runScriptCommand">runScriptCommand</a></code> | <code>string</code> | The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager). |
| <code><a href="#projen-modules.JsiiProject.property.autoMerge">autoMerge</a></code> | <code>projen.github.AutoMerge</code> | Component that sets up mergify for merging approved pull requests. |
| <code><a href="#projen-modules.JsiiProject.property.biome">biome</a></code> | <code>projen.javascript.Biome</code> | *No description.* |
| <code><a href="#projen-modules.JsiiProject.property.buildWorkflow">buildWorkflow</a></code> | <code>projen.build.BuildWorkflow</code> | The PR build GitHub workflow. |
| <code><a href="#projen-modules.JsiiProject.property.buildWorkflowJobId">buildWorkflowJobId</a></code> | <code>string</code> | The job ID of the build workflow. |
| <code><a href="#projen-modules.JsiiProject.property.jest">jest</a></code> | <code>projen.javascript.Jest</code> | The Jest configuration (if enabled). |
| <code><a href="#projen-modules.JsiiProject.property.maxNodeVersion">maxNodeVersion</a></code> | <code>string</code> | Maximum node version supported by this package. |
| <code><a href="#projen-modules.JsiiProject.property.minNodeVersion">minNodeVersion</a></code> | <code>string</code> | The minimum node version required by this package to function. |
| <code><a href="#projen-modules.JsiiProject.property.npmignore">npmignore</a></code> | <code>projen.IgnoreFile</code> | The .npmignore file. |
| <code><a href="#projen-modules.JsiiProject.property.prettier">prettier</a></code> | <code>projen.javascript.Prettier</code> | *No description.* |
| <code><a href="#projen-modules.JsiiProject.property.publisher">publisher</a></code> | <code>projen.release.Publisher</code> | Package publisher. |
| <code><a href="#projen-modules.JsiiProject.property.release">release</a></code> | <code>projen.release.Release</code> | Release management. |
| <code><a href="#projen-modules.JsiiProject.property.upgradeWorkflow">upgradeWorkflow</a></code> | <code>projen.javascript.UpgradeDependencies</code> | The upgrade workflow. |
| <code><a href="#projen-modules.JsiiProject.property.docsDirectory">docsDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen-modules.JsiiProject.property.libdir">libdir</a></code> | <code>string</code> | The directory in which compiled .js files reside. |
| <code><a href="#projen-modules.JsiiProject.property.srcdir">srcdir</a></code> | <code>string</code> | The directory in which the .ts sources reside. |
| <code><a href="#projen-modules.JsiiProject.property.testdir">testdir</a></code> | <code>string</code> | The directory in which tests reside. |
| <code><a href="#projen-modules.JsiiProject.property.tsconfigDev">tsconfigDev</a></code> | <code>projen.javascript.TypescriptConfig</code> | A typescript configuration file which covers all files (sources, tests, projen). |
| <code><a href="#projen-modules.JsiiProject.property.watchTask">watchTask</a></code> | <code>projen.Task</code> | The "watch" task. |
| <code><a href="#projen-modules.JsiiProject.property.docgen">docgen</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#projen-modules.JsiiProject.property.eslint">eslint</a></code> | <code>projen.javascript.Eslint</code> | *No description.* |
| <code><a href="#projen-modules.JsiiProject.property.tsconfig">tsconfig</a></code> | <code>projen.javascript.TypescriptConfig</code> | *No description.* |
| <code><a href="#projen-modules.JsiiProject.property.tsconfigEslint">tsconfigEslint</a></code> | <code>projen.javascript.TypescriptConfig</code> | *No description.* |
| <code><a href="#projen-modules.JsiiProject.property.readme">readme</a></code> | <code><a href="#projen-modules.Readme">Readme</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="projen-modules.JsiiProject.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `buildTask`<sup>Required</sup> <a name="buildTask" id="projen-modules.JsiiProject.property.buildTask"></a>

```typescript
public readonly buildTask: Task;
```

- *Type:* projen.Task

---

##### `commitGenerated`<sup>Required</sup> <a name="commitGenerated" id="projen-modules.JsiiProject.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean

Whether to commit the managed files by default.

---

##### `compileTask`<sup>Required</sup> <a name="compileTask" id="projen-modules.JsiiProject.property.compileTask"></a>

```typescript
public readonly compileTask: Task;
```

- *Type:* projen.Task

---

##### `components`<sup>Required</sup> <a name="components" id="projen-modules.JsiiProject.property.components"></a>

```typescript
public readonly components: Component[];
```

- *Type:* projen.Component[]

Returns all the components within this project.

---

##### `deps`<sup>Required</sup> <a name="deps" id="projen-modules.JsiiProject.property.deps"></a>

```typescript
public readonly deps: Dependencies;
```

- *Type:* projen.Dependencies

Project dependencies.

---

##### `ejected`<sup>Required</sup> <a name="ejected" id="projen-modules.JsiiProject.property.ejected"></a>

```typescript
public readonly ejected: boolean;
```

- *Type:* boolean

Whether or not the project is being ejected.

---

##### `files`<sup>Required</sup> <a name="files" id="projen-modules.JsiiProject.property.files"></a>

```typescript
public readonly files: FileBase[];
```

- *Type:* projen.FileBase[]

All files in this project.

---

##### `gitattributes`<sup>Required</sup> <a name="gitattributes" id="projen-modules.JsiiProject.property.gitattributes"></a>

```typescript
public readonly gitattributes: GitAttributesFile;
```

- *Type:* projen.GitAttributesFile

The .gitattributes file for this repository.

---

##### `gitignore`<sup>Required</sup> <a name="gitignore" id="projen-modules.JsiiProject.property.gitignore"></a>

```typescript
public readonly gitignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

.gitignore.

---

##### `logger`<sup>Required</sup> <a name="logger" id="projen-modules.JsiiProject.property.logger"></a>

```typescript
public readonly logger: Logger;
```

- *Type:* projen.Logger

Logging utilities.

---

##### `name`<sup>Required</sup> <a name="name" id="projen-modules.JsiiProject.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Project name.

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="projen-modules.JsiiProject.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

Absolute output directory of this project.

---

##### `packageTask`<sup>Required</sup> <a name="packageTask" id="projen-modules.JsiiProject.property.packageTask"></a>

```typescript
public readonly packageTask: Task;
```

- *Type:* projen.Task

---

##### `postCompileTask`<sup>Required</sup> <a name="postCompileTask" id="projen-modules.JsiiProject.property.postCompileTask"></a>

```typescript
public readonly postCompileTask: Task;
```

- *Type:* projen.Task

---

##### `preCompileTask`<sup>Required</sup> <a name="preCompileTask" id="projen-modules.JsiiProject.property.preCompileTask"></a>

```typescript
public readonly preCompileTask: Task;
```

- *Type:* projen.Task

---

##### `projectBuild`<sup>Required</sup> <a name="projectBuild" id="projen-modules.JsiiProject.property.projectBuild"></a>

```typescript
public readonly projectBuild: ProjectBuild;
```

- *Type:* projen.ProjectBuild

Manages the build process of the project.

---

##### `projenCommand`<sup>Required</sup> <a name="projenCommand" id="projen-modules.JsiiProject.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string

The command to use in order to run the projen CLI.

---

##### `root`<sup>Required</sup> <a name="root" id="projen-modules.JsiiProject.property.root"></a>

```typescript
public readonly root: Project;
```

- *Type:* projen.Project

The root project.

---

##### `subprojects`<sup>Required</sup> <a name="subprojects" id="projen-modules.JsiiProject.property.subprojects"></a>

```typescript
public readonly subprojects: Project[];
```

- *Type:* projen.Project[]

Returns all the subprojects within this project.

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="projen-modules.JsiiProject.property.tasks"></a>

```typescript
public readonly tasks: Tasks;
```

- *Type:* projen.Tasks

Project tasks.

---

##### `testTask`<sup>Required</sup> <a name="testTask" id="projen-modules.JsiiProject.property.testTask"></a>

```typescript
public readonly testTask: Task;
```

- *Type:* projen.Task

---

##### `defaultTask`<sup>Optional</sup> <a name="defaultTask" id="projen-modules.JsiiProject.property.defaultTask"></a>

```typescript
public readonly defaultTask: Task;
```

- *Type:* projen.Task

This is the "default" task, the one that executes "projen".

Undefined if
the project is being ejected.

---

##### `initProject`<sup>Optional</sup> <a name="initProject" id="projen-modules.JsiiProject.property.initProject"></a>

```typescript
public readonly initProject: InitProject;
```

- *Type:* projen.InitProject

The options used when this project is bootstrapped via `projen new`.

It
includes the original set of options passed to the CLI and also the JSII
FQN of the project type.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="projen-modules.JsiiProject.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

A parent project.

If undefined, this is the root project.

---

##### `projectType`<sup>Required</sup> <a name="projectType" id="projen-modules.JsiiProject.property.projectType"></a>

```typescript
public readonly projectType: ProjectType;
```

- *Type:* projen.ProjectType

---

##### `autoApprove`<sup>Optional</sup> <a name="autoApprove" id="projen-modules.JsiiProject.property.autoApprove"></a>

```typescript
public readonly autoApprove: AutoApprove;
```

- *Type:* projen.github.AutoApprove

Auto approve set up for this project.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="projen-modules.JsiiProject.property.devContainer"></a>

```typescript
public readonly devContainer: DevContainer;
```

- *Type:* projen.vscode.DevContainer

Access for .devcontainer.json (used for GitHub Codespaces).

This will be `undefined` if devContainer boolean is false

---

##### `github`<sup>Optional</sup> <a name="github" id="projen-modules.JsiiProject.property.github"></a>

```typescript
public readonly github: GitHub;
```

- *Type:* projen.github.GitHub

Access all github components.

This will be `undefined` for subprojects.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="projen-modules.JsiiProject.property.gitpod"></a>

```typescript
public readonly gitpod: Gitpod;
```

- *Type:* projen.Gitpod

Access for Gitpod.

This will be `undefined` if gitpod boolean is false

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="projen-modules.JsiiProject.property.vscode"></a>

```typescript
public readonly vscode: VsCode;
```

- *Type:* projen.vscode.VsCode

Access all VSCode components.

This will be `undefined` for subprojects.

---

##### ~~`allowLibraryDependencies`~~<sup>Required</sup> <a name="allowLibraryDependencies" id="projen-modules.JsiiProject.property.allowLibraryDependencies"></a>

- *Deprecated:* use `package.allowLibraryDependencies`

```typescript
public readonly allowLibraryDependencies: boolean;
```

- *Type:* boolean

---

##### `artifactsDirectory`<sup>Required</sup> <a name="artifactsDirectory" id="projen-modules.JsiiProject.property.artifactsDirectory"></a>

```typescript
public readonly artifactsDirectory: string;
```

- *Type:* string

The build output directory.

An npm tarball will be created under the `js`
subdirectory. For example, if this is set to `dist` (the default), the npm
tarball will be placed under `dist/js/boom-boom-1.2.3.tg`.

---

##### `artifactsJavascriptDirectory`<sup>Required</sup> <a name="artifactsJavascriptDirectory" id="projen-modules.JsiiProject.property.artifactsJavascriptDirectory"></a>

```typescript
public readonly artifactsJavascriptDirectory: string;
```

- *Type:* string

The location of the npm tarball after build (`${artifactsDirectory}/js`).

---

##### `bundler`<sup>Required</sup> <a name="bundler" id="projen-modules.JsiiProject.property.bundler"></a>

```typescript
public readonly bundler: Bundler;
```

- *Type:* projen.javascript.Bundler

---

##### ~~`entrypoint`~~<sup>Required</sup> <a name="entrypoint" id="projen-modules.JsiiProject.property.entrypoint"></a>

- *Deprecated:* use `package.entrypoint`

```typescript
public readonly entrypoint: string;
```

- *Type:* string

---

##### ~~`manifest`~~<sup>Required</sup> <a name="manifest" id="projen-modules.JsiiProject.property.manifest"></a>

- *Deprecated:* use `package.addField(x, y)`

```typescript
public readonly manifest: any;
```

- *Type:* any

---

##### `npmrc`<sup>Required</sup> <a name="npmrc" id="projen-modules.JsiiProject.property.npmrc"></a>

```typescript
public readonly npmrc: NpmConfig;
```

- *Type:* projen.javascript.NpmConfig

The .npmrc file.

---

##### `package`<sup>Required</sup> <a name="package" id="projen-modules.JsiiProject.property.package"></a>

```typescript
public readonly package: NodePackage;
```

- *Type:* projen.javascript.NodePackage

API for managing the node package.

---

##### ~~`packageManager`~~<sup>Required</sup> <a name="packageManager" id="projen-modules.JsiiProject.property.packageManager"></a>

- *Deprecated:* use `package.packageManager`

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* projen.javascript.NodePackageManager

The package manager to use.

---

##### `runScriptCommand`<sup>Required</sup> <a name="runScriptCommand" id="projen-modules.JsiiProject.property.runScriptCommand"></a>

```typescript
public readonly runScriptCommand: string;
```

- *Type:* string

The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager).

---

##### `autoMerge`<sup>Optional</sup> <a name="autoMerge" id="projen-modules.JsiiProject.property.autoMerge"></a>

```typescript
public readonly autoMerge: AutoMerge;
```

- *Type:* projen.github.AutoMerge

Component that sets up mergify for merging approved pull requests.

---

##### `biome`<sup>Optional</sup> <a name="biome" id="projen-modules.JsiiProject.property.biome"></a>

```typescript
public readonly biome: Biome;
```

- *Type:* projen.javascript.Biome

---

##### `buildWorkflow`<sup>Optional</sup> <a name="buildWorkflow" id="projen-modules.JsiiProject.property.buildWorkflow"></a>

```typescript
public readonly buildWorkflow: BuildWorkflow;
```

- *Type:* projen.build.BuildWorkflow

The PR build GitHub workflow.

`undefined` if `buildWorkflow` is disabled.

---

##### `buildWorkflowJobId`<sup>Optional</sup> <a name="buildWorkflowJobId" id="projen-modules.JsiiProject.property.buildWorkflowJobId"></a>

```typescript
public readonly buildWorkflowJobId: string;
```

- *Type:* string

The job ID of the build workflow.

---

##### `jest`<sup>Optional</sup> <a name="jest" id="projen-modules.JsiiProject.property.jest"></a>

```typescript
public readonly jest: Jest;
```

- *Type:* projen.javascript.Jest

The Jest configuration (if enabled).

---

##### `maxNodeVersion`<sup>Optional</sup> <a name="maxNodeVersion" id="projen-modules.JsiiProject.property.maxNodeVersion"></a>

```typescript
public readonly maxNodeVersion: string;
```

- *Type:* string

Maximum node version supported by this package.

The value indicates the package is incompatible with newer versions.

---

##### `minNodeVersion`<sup>Optional</sup> <a name="minNodeVersion" id="projen-modules.JsiiProject.property.minNodeVersion"></a>

```typescript
public readonly minNodeVersion: string;
```

- *Type:* string

The minimum node version required by this package to function.

This value indicates the package is incompatible with older versions.

---

##### `npmignore`<sup>Optional</sup> <a name="npmignore" id="projen-modules.JsiiProject.property.npmignore"></a>

```typescript
public readonly npmignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

The .npmignore file.

---

##### `prettier`<sup>Optional</sup> <a name="prettier" id="projen-modules.JsiiProject.property.prettier"></a>

```typescript
public readonly prettier: Prettier;
```

- *Type:* projen.javascript.Prettier

---

##### ~~`publisher`~~<sup>Optional</sup> <a name="publisher" id="projen-modules.JsiiProject.property.publisher"></a>

- *Deprecated:* use `release.publisher`.

```typescript
public readonly publisher: Publisher;
```

- *Type:* projen.release.Publisher

Package publisher.

This will be `undefined` if the project does not have a
release workflow.

---

##### `release`<sup>Optional</sup> <a name="release" id="projen-modules.JsiiProject.property.release"></a>

```typescript
public readonly release: Release;
```

- *Type:* projen.release.Release

Release management.

---

##### `upgradeWorkflow`<sup>Optional</sup> <a name="upgradeWorkflow" id="projen-modules.JsiiProject.property.upgradeWorkflow"></a>

```typescript
public readonly upgradeWorkflow: UpgradeDependencies;
```

- *Type:* projen.javascript.UpgradeDependencies

The upgrade workflow.

---

##### `docsDirectory`<sup>Required</sup> <a name="docsDirectory" id="projen-modules.JsiiProject.property.docsDirectory"></a>

```typescript
public readonly docsDirectory: string;
```

- *Type:* string

---

##### `libdir`<sup>Required</sup> <a name="libdir" id="projen-modules.JsiiProject.property.libdir"></a>

```typescript
public readonly libdir: string;
```

- *Type:* string

The directory in which compiled .js files reside.

---

##### `srcdir`<sup>Required</sup> <a name="srcdir" id="projen-modules.JsiiProject.property.srcdir"></a>

```typescript
public readonly srcdir: string;
```

- *Type:* string

The directory in which the .ts sources reside.

---

##### `testdir`<sup>Required</sup> <a name="testdir" id="projen-modules.JsiiProject.property.testdir"></a>

```typescript
public readonly testdir: string;
```

- *Type:* string

The directory in which tests reside.

---

##### `tsconfigDev`<sup>Required</sup> <a name="tsconfigDev" id="projen-modules.JsiiProject.property.tsconfigDev"></a>

```typescript
public readonly tsconfigDev: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

A typescript configuration file which covers all files (sources, tests, projen).

---

##### `watchTask`<sup>Required</sup> <a name="watchTask" id="projen-modules.JsiiProject.property.watchTask"></a>

```typescript
public readonly watchTask: Task;
```

- *Type:* projen.Task

The "watch" task.

---

##### `docgen`<sup>Optional</sup> <a name="docgen" id="projen-modules.JsiiProject.property.docgen"></a>

```typescript
public readonly docgen: boolean;
```

- *Type:* boolean

---

##### `eslint`<sup>Optional</sup> <a name="eslint" id="projen-modules.JsiiProject.property.eslint"></a>

```typescript
public readonly eslint: Eslint;
```

- *Type:* projen.javascript.Eslint

---

##### `tsconfig`<sup>Optional</sup> <a name="tsconfig" id="projen-modules.JsiiProject.property.tsconfig"></a>

```typescript
public readonly tsconfig: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

---

##### `tsconfigEslint`<sup>Optional</sup> <a name="tsconfigEslint" id="projen-modules.JsiiProject.property.tsconfigEslint"></a>

```typescript
public readonly tsconfigEslint: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

---

##### `readme`<sup>Required</sup> <a name="readme" id="projen-modules.JsiiProject.property.readme"></a>

```typescript
public readonly readme: Readme;
```

- *Type:* <a href="#projen-modules.Readme">Readme</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen-modules.JsiiProject.property.DEFAULT_TASK">DEFAULT_TASK</a></code> | <code>string</code> | The name of the default task (the task executed when `projen` is run without arguments). |
| <code><a href="#projen-modules.JsiiProject.property.DEFAULT_TS_JEST_TRANFORM_PATTERN">DEFAULT_TS_JEST_TRANFORM_PATTERN</a></code> | <code>string</code> | *No description.* |

---

##### `DEFAULT_TASK`<sup>Required</sup> <a name="DEFAULT_TASK" id="projen-modules.JsiiProject.property.DEFAULT_TASK"></a>

```typescript
public readonly DEFAULT_TASK: string;
```

- *Type:* string

The name of the default task (the task executed when `projen` is run without arguments).

Normally
this task should synthesize the project files.

---

##### `DEFAULT_TS_JEST_TRANFORM_PATTERN`<sup>Required</sup> <a name="DEFAULT_TS_JEST_TRANFORM_PATTERN" id="projen-modules.JsiiProject.property.DEFAULT_TS_JEST_TRANFORM_PATTERN"></a>

```typescript
public readonly DEFAULT_TS_JEST_TRANFORM_PATTERN: string;
```

- *Type:* string

---

### NpmPackage <a name="NpmPackage" id="projen-modules.NpmPackage"></a>

A NPM/node package in TypeScript.

#### Initializers <a name="Initializers" id="projen-modules.NpmPackage.Initializer"></a>

```typescript
import { NpmPackage } from 'projen-modules'

new NpmPackage(options: NpmPackageOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen-modules.NpmPackage.Initializer.parameter.options">options</a></code> | <code><a href="#projen-modules.NpmPackageOptions">NpmPackageOptions</a></code> | *No description.* |

---

##### `options`<sup>Required</sup> <a name="options" id="projen-modules.NpmPackage.Initializer.parameter.options"></a>

- *Type:* <a href="#projen-modules.NpmPackageOptions">NpmPackageOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen-modules.NpmPackage.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#projen-modules.NpmPackage.addExcludeFromCleanup">addExcludeFromCleanup</a></code> | Exclude the matching files from pre-synth cleanup. |
| <code><a href="#projen-modules.NpmPackage.addGitIgnore">addGitIgnore</a></code> | Adds a .gitignore pattern. |
| <code><a href="#projen-modules.NpmPackage.addPackageIgnore">addPackageIgnore</a></code> | Adds patterns to be ignored by npm. |
| <code><a href="#projen-modules.NpmPackage.addTask">addTask</a></code> | Adds a new task to this project. |
| <code><a href="#projen-modules.NpmPackage.addTip">addTip</a></code> | Prints a "tip" message during synthesis. |
| <code><a href="#projen-modules.NpmPackage.annotateGenerated">annotateGenerated</a></code> | Marks the provided file(s) as being generated. |
| <code><a href="#projen-modules.NpmPackage.postSynthesize">postSynthesize</a></code> | Called after all components are synthesized. |
| <code><a href="#projen-modules.NpmPackage.preSynthesize">preSynthesize</a></code> | Called before all components are synthesized. |
| <code><a href="#projen-modules.NpmPackage.removeTask">removeTask</a></code> | Removes a task from a project. |
| <code><a href="#projen-modules.NpmPackage.runTaskCommand">runTaskCommand</a></code> | Returns the shell command to execute in order to run a task. |
| <code><a href="#projen-modules.NpmPackage.synth">synth</a></code> | Synthesize all project files into `outdir`. |
| <code><a href="#projen-modules.NpmPackage.tryFindFile">tryFindFile</a></code> | Finds a file at the specified relative path within this project and all its subprojects. |
| <code><a href="#projen-modules.NpmPackage.tryFindJsonFile">tryFindJsonFile</a></code> | Finds a json file by name. |
| <code><a href="#projen-modules.NpmPackage.tryFindObjectFile">tryFindObjectFile</a></code> | Finds an object file (like JsonFile, YamlFile, etc.) by name. |
| <code><a href="#projen-modules.NpmPackage.tryRemoveFile">tryRemoveFile</a></code> | Finds a file at the specified relative path within this project and removes it. |
| <code><a href="#projen-modules.NpmPackage.addBins">addBins</a></code> | *No description.* |
| <code><a href="#projen-modules.NpmPackage.addBundledDeps">addBundledDeps</a></code> | Defines bundled dependencies. |
| <code><a href="#projen-modules.NpmPackage.addCompileCommand">addCompileCommand</a></code> | DEPRECATED. |
| <code><a href="#projen-modules.NpmPackage.addDeps">addDeps</a></code> | Defines normal dependencies. |
| <code><a href="#projen-modules.NpmPackage.addDevDeps">addDevDeps</a></code> | Defines development/test dependencies. |
| <code><a href="#projen-modules.NpmPackage.addFields">addFields</a></code> | Directly set fields in `package.json`. |
| <code><a href="#projen-modules.NpmPackage.addKeywords">addKeywords</a></code> | Adds keywords to package.json (deduplicated). |
| <code><a href="#projen-modules.NpmPackage.addPeerDeps">addPeerDeps</a></code> | Defines peer dependencies. |
| <code><a href="#projen-modules.NpmPackage.addScripts">addScripts</a></code> | Replaces the contents of multiple npm package.json scripts. |
| <code><a href="#projen-modules.NpmPackage.addTestCommand">addTestCommand</a></code> | DEPRECATED. |
| <code><a href="#projen-modules.NpmPackage.hasScript">hasScript</a></code> | Indicates if a script by the name name is defined. |
| <code><a href="#projen-modules.NpmPackage.removeScript">removeScript</a></code> | Removes the npm script (always successful). |
| <code><a href="#projen-modules.NpmPackage.renderWorkflowSetup">renderWorkflowSetup</a></code> | Returns the set of workflow steps which should be executed to bootstrap a workflow. |
| <code><a href="#projen-modules.NpmPackage.setScript">setScript</a></code> | Replaces the contents of an npm package.json script. |

---

##### `toString` <a name="toString" id="projen-modules.NpmPackage.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addExcludeFromCleanup` <a name="addExcludeFromCleanup" id="projen-modules.NpmPackage.addExcludeFromCleanup"></a>

```typescript
public addExcludeFromCleanup(globs: ...string[]): void
```

Exclude the matching files from pre-synth cleanup.

Can be used when, for example, some
source files include the projen marker and we don't want them to be erased during synth.

###### `globs`<sup>Required</sup> <a name="globs" id="projen-modules.NpmPackage.addExcludeFromCleanup.parameter.globs"></a>

- *Type:* ...string[]

The glob patterns to match.

---

##### `addGitIgnore` <a name="addGitIgnore" id="projen-modules.NpmPackage.addGitIgnore"></a>

```typescript
public addGitIgnore(pattern: string): void
```

Adds a .gitignore pattern.

###### `pattern`<sup>Required</sup> <a name="pattern" id="projen-modules.NpmPackage.addGitIgnore.parameter.pattern"></a>

- *Type:* string

The glob pattern to ignore.

---

##### `addPackageIgnore` <a name="addPackageIgnore" id="projen-modules.NpmPackage.addPackageIgnore"></a>

```typescript
public addPackageIgnore(pattern: string): void
```

Adds patterns to be ignored by npm.

###### `pattern`<sup>Required</sup> <a name="pattern" id="projen-modules.NpmPackage.addPackageIgnore.parameter.pattern"></a>

- *Type:* string

The pattern to ignore.

---

##### `addTask` <a name="addTask" id="projen-modules.NpmPackage.addTask"></a>

```typescript
public addTask(name: string, props?: TaskOptions): Task
```

Adds a new task to this project.

This will fail if the project already has
a task with this name.

###### `name`<sup>Required</sup> <a name="name" id="projen-modules.NpmPackage.addTask.parameter.name"></a>

- *Type:* string

The task name to add.

---

###### `props`<sup>Optional</sup> <a name="props" id="projen-modules.NpmPackage.addTask.parameter.props"></a>

- *Type:* projen.TaskOptions

Task properties.

---

##### ~~`addTip`~~ <a name="addTip" id="projen-modules.NpmPackage.addTip"></a>

```typescript
public addTip(message: string): void
```

Prints a "tip" message during synthesis.

###### `message`<sup>Required</sup> <a name="message" id="projen-modules.NpmPackage.addTip.parameter.message"></a>

- *Type:* string

The message.

---

##### `annotateGenerated` <a name="annotateGenerated" id="projen-modules.NpmPackage.annotateGenerated"></a>

```typescript
public annotateGenerated(glob: string): void
```

Marks the provided file(s) as being generated.

This is achieved using the
github-linguist attributes. Generated files do not count against the
repository statistics and language breakdown.

> [https://github.com/github/linguist/blob/master/docs/overrides.md](https://github.com/github/linguist/blob/master/docs/overrides.md)

###### `glob`<sup>Required</sup> <a name="glob" id="projen-modules.NpmPackage.annotateGenerated.parameter.glob"></a>

- *Type:* string

the glob pattern to match (could be a file path).

---

##### `postSynthesize` <a name="postSynthesize" id="projen-modules.NpmPackage.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after all components are synthesized.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="projen-modules.NpmPackage.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before all components are synthesized.

##### `removeTask` <a name="removeTask" id="projen-modules.NpmPackage.removeTask"></a>

```typescript
public removeTask(name: string): Task
```

Removes a task from a project.

###### `name`<sup>Required</sup> <a name="name" id="projen-modules.NpmPackage.removeTask.parameter.name"></a>

- *Type:* string

The name of the task to remove.

---

##### `runTaskCommand` <a name="runTaskCommand" id="projen-modules.NpmPackage.runTaskCommand"></a>

```typescript
public runTaskCommand(task: Task): string
```

Returns the shell command to execute in order to run a task.

This will
typically be `npx projen TASK`.

###### `task`<sup>Required</sup> <a name="task" id="projen-modules.NpmPackage.runTaskCommand.parameter.task"></a>

- *Type:* projen.Task

The task for which the command is required.

---

##### `synth` <a name="synth" id="projen-modules.NpmPackage.synth"></a>

```typescript
public synth(): void
```

Synthesize all project files into `outdir`.

1. Call "this.preSynthesize()"
2. Delete all generated files
3. Synthesize all subprojects
4. Synthesize all components of this project
5. Call "postSynthesize()" for all components of this project
6. Call "this.postSynthesize()"

##### `tryFindFile` <a name="tryFindFile" id="projen-modules.NpmPackage.tryFindFile"></a>

```typescript
public tryFindFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and all its subprojects.

###### `filePath`<sup>Required</sup> <a name="filePath" id="projen-modules.NpmPackage.tryFindFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be resolved
from the root of _this_ project.

---

##### ~~`tryFindJsonFile`~~ <a name="tryFindJsonFile" id="projen-modules.NpmPackage.tryFindJsonFile"></a>

```typescript
public tryFindJsonFile(filePath: string): JsonFile
```

Finds a json file by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="projen-modules.NpmPackage.tryFindJsonFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryFindObjectFile` <a name="tryFindObjectFile" id="projen-modules.NpmPackage.tryFindObjectFile"></a>

```typescript
public tryFindObjectFile(filePath: string): ObjectFile
```

Finds an object file (like JsonFile, YamlFile, etc.) by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="projen-modules.NpmPackage.tryFindObjectFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryRemoveFile` <a name="tryRemoveFile" id="projen-modules.NpmPackage.tryRemoveFile"></a>

```typescript
public tryRemoveFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and removes it.

###### `filePath`<sup>Required</sup> <a name="filePath" id="projen-modules.NpmPackage.tryRemoveFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be
resolved from the root of _this_ project.

---

##### `addBins` <a name="addBins" id="projen-modules.NpmPackage.addBins"></a>

```typescript
public addBins(bins: {[ key: string ]: string}): void
```

###### `bins`<sup>Required</sup> <a name="bins" id="projen-modules.NpmPackage.addBins.parameter.bins"></a>

- *Type:* {[ key: string ]: string}

---

##### `addBundledDeps` <a name="addBundledDeps" id="projen-modules.NpmPackage.addBundledDeps"></a>

```typescript
public addBundledDeps(deps: ...string[]): void
```

Defines bundled dependencies.

Bundled dependencies will be added as normal dependencies as well as to the
`bundledDependencies` section of your `package.json`.

###### `deps`<sup>Required</sup> <a name="deps" id="projen-modules.NpmPackage.addBundledDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### ~~`addCompileCommand`~~ <a name="addCompileCommand" id="projen-modules.NpmPackage.addCompileCommand"></a>

```typescript
public addCompileCommand(commands: ...string[]): void
```

DEPRECATED.

###### `commands`<sup>Required</sup> <a name="commands" id="projen-modules.NpmPackage.addCompileCommand.parameter.commands"></a>

- *Type:* ...string[]

---

##### `addDeps` <a name="addDeps" id="projen-modules.NpmPackage.addDeps"></a>

```typescript
public addDeps(deps: ...string[]): void
```

Defines normal dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="projen-modules.NpmPackage.addDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addDevDeps` <a name="addDevDeps" id="projen-modules.NpmPackage.addDevDeps"></a>

```typescript
public addDevDeps(deps: ...string[]): void
```

Defines development/test dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="projen-modules.NpmPackage.addDevDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addFields` <a name="addFields" id="projen-modules.NpmPackage.addFields"></a>

```typescript
public addFields(fields: {[ key: string ]: any}): void
```

Directly set fields in `package.json`.

###### `fields`<sup>Required</sup> <a name="fields" id="projen-modules.NpmPackage.addFields.parameter.fields"></a>

- *Type:* {[ key: string ]: any}

The fields to set.

---

##### `addKeywords` <a name="addKeywords" id="projen-modules.NpmPackage.addKeywords"></a>

```typescript
public addKeywords(keywords: ...string[]): void
```

Adds keywords to package.json (deduplicated).

###### `keywords`<sup>Required</sup> <a name="keywords" id="projen-modules.NpmPackage.addKeywords.parameter.keywords"></a>

- *Type:* ...string[]

The keywords to add.

---

##### `addPeerDeps` <a name="addPeerDeps" id="projen-modules.NpmPackage.addPeerDeps"></a>

```typescript
public addPeerDeps(deps: ...string[]): void
```

Defines peer dependencies.

When adding peer dependencies, a devDependency will also be added on the
pinned version of the declared peer. This will ensure that you are testing
your code against the minimum version required from your consumers.

###### `deps`<sup>Required</sup> <a name="deps" id="projen-modules.NpmPackage.addPeerDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addScripts` <a name="addScripts" id="projen-modules.NpmPackage.addScripts"></a>

```typescript
public addScripts(scripts: {[ key: string ]: string}): void
```

Replaces the contents of multiple npm package.json scripts.

###### `scripts`<sup>Required</sup> <a name="scripts" id="projen-modules.NpmPackage.addScripts.parameter.scripts"></a>

- *Type:* {[ key: string ]: string}

The scripts to set.

---

##### ~~`addTestCommand`~~ <a name="addTestCommand" id="projen-modules.NpmPackage.addTestCommand"></a>

```typescript
public addTestCommand(commands: ...string[]): void
```

DEPRECATED.

###### `commands`<sup>Required</sup> <a name="commands" id="projen-modules.NpmPackage.addTestCommand.parameter.commands"></a>

- *Type:* ...string[]

---

##### ~~`hasScript`~~ <a name="hasScript" id="projen-modules.NpmPackage.hasScript"></a>

```typescript
public hasScript(name: string): boolean
```

Indicates if a script by the name name is defined.

###### `name`<sup>Required</sup> <a name="name" id="projen-modules.NpmPackage.hasScript.parameter.name"></a>

- *Type:* string

The name of the script.

---

##### `removeScript` <a name="removeScript" id="projen-modules.NpmPackage.removeScript"></a>

```typescript
public removeScript(name: string): void
```

Removes the npm script (always successful).

###### `name`<sup>Required</sup> <a name="name" id="projen-modules.NpmPackage.removeScript.parameter.name"></a>

- *Type:* string

The name of the script.

---

##### `renderWorkflowSetup` <a name="renderWorkflowSetup" id="projen-modules.NpmPackage.renderWorkflowSetup"></a>

```typescript
public renderWorkflowSetup(options?: RenderWorkflowSetupOptions): JobStep[]
```

Returns the set of workflow steps which should be executed to bootstrap a workflow.

###### `options`<sup>Optional</sup> <a name="options" id="projen-modules.NpmPackage.renderWorkflowSetup.parameter.options"></a>

- *Type:* projen.javascript.RenderWorkflowSetupOptions

Options.

---

##### `setScript` <a name="setScript" id="projen-modules.NpmPackage.setScript"></a>

```typescript
public setScript(name: string, command: string): void
```

Replaces the contents of an npm package.json script.

###### `name`<sup>Required</sup> <a name="name" id="projen-modules.NpmPackage.setScript.parameter.name"></a>

- *Type:* string

The script name.

---

###### `command`<sup>Required</sup> <a name="command" id="projen-modules.NpmPackage.setScript.parameter.command"></a>

- *Type:* string

The command to execute.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen-modules.NpmPackage.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#projen-modules.NpmPackage.isProject">isProject</a></code> | Test whether the given construct is a project. |
| <code><a href="#projen-modules.NpmPackage.of">of</a></code> | Find the closest ancestor project for given construct. |

---

##### `isConstruct` <a name="isConstruct" id="projen-modules.NpmPackage.isConstruct"></a>

```typescript
import { NpmPackage } from 'projen-modules'

NpmPackage.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="projen-modules.NpmPackage.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isProject` <a name="isProject" id="projen-modules.NpmPackage.isProject"></a>

```typescript
import { NpmPackage } from 'projen-modules'

NpmPackage.isProject(x: any)
```

Test whether the given construct is a project.

###### `x`<sup>Required</sup> <a name="x" id="projen-modules.NpmPackage.isProject.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="projen-modules.NpmPackage.of"></a>

```typescript
import { NpmPackage } from 'projen-modules'

NpmPackage.of(construct: IConstruct)
```

Find the closest ancestor project for given construct.

When given a project, this it the project itself.

###### `construct`<sup>Required</sup> <a name="construct" id="projen-modules.NpmPackage.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen-modules.NpmPackage.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#projen-modules.NpmPackage.property.buildTask">buildTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen-modules.NpmPackage.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#projen-modules.NpmPackage.property.compileTask">compileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen-modules.NpmPackage.property.components">components</a></code> | <code>projen.Component[]</code> | Returns all the components within this project. |
| <code><a href="#projen-modules.NpmPackage.property.deps">deps</a></code> | <code>projen.Dependencies</code> | Project dependencies. |
| <code><a href="#projen-modules.NpmPackage.property.ejected">ejected</a></code> | <code>boolean</code> | Whether or not the project is being ejected. |
| <code><a href="#projen-modules.NpmPackage.property.files">files</a></code> | <code>projen.FileBase[]</code> | All files in this project. |
| <code><a href="#projen-modules.NpmPackage.property.gitattributes">gitattributes</a></code> | <code>projen.GitAttributesFile</code> | The .gitattributes file for this repository. |
| <code><a href="#projen-modules.NpmPackage.property.gitignore">gitignore</a></code> | <code>projen.IgnoreFile</code> | .gitignore. |
| <code><a href="#projen-modules.NpmPackage.property.logger">logger</a></code> | <code>projen.Logger</code> | Logging utilities. |
| <code><a href="#projen-modules.NpmPackage.property.name">name</a></code> | <code>string</code> | Project name. |
| <code><a href="#projen-modules.NpmPackage.property.outdir">outdir</a></code> | <code>string</code> | Absolute output directory of this project. |
| <code><a href="#projen-modules.NpmPackage.property.packageTask">packageTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen-modules.NpmPackage.property.postCompileTask">postCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen-modules.NpmPackage.property.preCompileTask">preCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen-modules.NpmPackage.property.projectBuild">projectBuild</a></code> | <code>projen.ProjectBuild</code> | Manages the build process of the project. |
| <code><a href="#projen-modules.NpmPackage.property.projenCommand">projenCommand</a></code> | <code>string</code> | The command to use in order to run the projen CLI. |
| <code><a href="#projen-modules.NpmPackage.property.root">root</a></code> | <code>projen.Project</code> | The root project. |
| <code><a href="#projen-modules.NpmPackage.property.subprojects">subprojects</a></code> | <code>projen.Project[]</code> | Returns all the subprojects within this project. |
| <code><a href="#projen-modules.NpmPackage.property.tasks">tasks</a></code> | <code>projen.Tasks</code> | Project tasks. |
| <code><a href="#projen-modules.NpmPackage.property.testTask">testTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen-modules.NpmPackage.property.defaultTask">defaultTask</a></code> | <code>projen.Task</code> | This is the "default" task, the one that executes "projen". |
| <code><a href="#projen-modules.NpmPackage.property.initProject">initProject</a></code> | <code>projen.InitProject</code> | The options used when this project is bootstrapped via `projen new`. |
| <code><a href="#projen-modules.NpmPackage.property.parent">parent</a></code> | <code>projen.Project</code> | A parent project. |
| <code><a href="#projen-modules.NpmPackage.property.projectType">projectType</a></code> | <code>projen.ProjectType</code> | *No description.* |
| <code><a href="#projen-modules.NpmPackage.property.autoApprove">autoApprove</a></code> | <code>projen.github.AutoApprove</code> | Auto approve set up for this project. |
| <code><a href="#projen-modules.NpmPackage.property.devContainer">devContainer</a></code> | <code>projen.vscode.DevContainer</code> | Access for .devcontainer.json (used for GitHub Codespaces). |
| <code><a href="#projen-modules.NpmPackage.property.github">github</a></code> | <code>projen.github.GitHub</code> | Access all github components. |
| <code><a href="#projen-modules.NpmPackage.property.gitpod">gitpod</a></code> | <code>projen.Gitpod</code> | Access for Gitpod. |
| <code><a href="#projen-modules.NpmPackage.property.vscode">vscode</a></code> | <code>projen.vscode.VsCode</code> | Access all VSCode components. |
| <code><a href="#projen-modules.NpmPackage.property.allowLibraryDependencies">allowLibraryDependencies</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#projen-modules.NpmPackage.property.artifactsDirectory">artifactsDirectory</a></code> | <code>string</code> | The build output directory. |
| <code><a href="#projen-modules.NpmPackage.property.artifactsJavascriptDirectory">artifactsJavascriptDirectory</a></code> | <code>string</code> | The location of the npm tarball after build (`${artifactsDirectory}/js`). |
| <code><a href="#projen-modules.NpmPackage.property.bundler">bundler</a></code> | <code>projen.javascript.Bundler</code> | *No description.* |
| <code><a href="#projen-modules.NpmPackage.property.entrypoint">entrypoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen-modules.NpmPackage.property.manifest">manifest</a></code> | <code>any</code> | *No description.* |
| <code><a href="#projen-modules.NpmPackage.property.npmrc">npmrc</a></code> | <code>projen.javascript.NpmConfig</code> | The .npmrc file. |
| <code><a href="#projen-modules.NpmPackage.property.package">package</a></code> | <code>projen.javascript.NodePackage</code> | API for managing the node package. |
| <code><a href="#projen-modules.NpmPackage.property.packageManager">packageManager</a></code> | <code>projen.javascript.NodePackageManager</code> | The package manager to use. |
| <code><a href="#projen-modules.NpmPackage.property.runScriptCommand">runScriptCommand</a></code> | <code>string</code> | The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager). |
| <code><a href="#projen-modules.NpmPackage.property.autoMerge">autoMerge</a></code> | <code>projen.github.AutoMerge</code> | Component that sets up mergify for merging approved pull requests. |
| <code><a href="#projen-modules.NpmPackage.property.biome">biome</a></code> | <code>projen.javascript.Biome</code> | *No description.* |
| <code><a href="#projen-modules.NpmPackage.property.buildWorkflow">buildWorkflow</a></code> | <code>projen.build.BuildWorkflow</code> | The PR build GitHub workflow. |
| <code><a href="#projen-modules.NpmPackage.property.buildWorkflowJobId">buildWorkflowJobId</a></code> | <code>string</code> | The job ID of the build workflow. |
| <code><a href="#projen-modules.NpmPackage.property.jest">jest</a></code> | <code>projen.javascript.Jest</code> | The Jest configuration (if enabled). |
| <code><a href="#projen-modules.NpmPackage.property.maxNodeVersion">maxNodeVersion</a></code> | <code>string</code> | Maximum node version supported by this package. |
| <code><a href="#projen-modules.NpmPackage.property.minNodeVersion">minNodeVersion</a></code> | <code>string</code> | The minimum node version required by this package to function. |
| <code><a href="#projen-modules.NpmPackage.property.npmignore">npmignore</a></code> | <code>projen.IgnoreFile</code> | The .npmignore file. |
| <code><a href="#projen-modules.NpmPackage.property.prettier">prettier</a></code> | <code>projen.javascript.Prettier</code> | *No description.* |
| <code><a href="#projen-modules.NpmPackage.property.publisher">publisher</a></code> | <code>projen.release.Publisher</code> | Package publisher. |
| <code><a href="#projen-modules.NpmPackage.property.release">release</a></code> | <code>projen.release.Release</code> | Release management. |
| <code><a href="#projen-modules.NpmPackage.property.upgradeWorkflow">upgradeWorkflow</a></code> | <code>projen.javascript.UpgradeDependencies</code> | The upgrade workflow. |
| <code><a href="#projen-modules.NpmPackage.property.docsDirectory">docsDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen-modules.NpmPackage.property.libdir">libdir</a></code> | <code>string</code> | The directory in which compiled .js files reside. |
| <code><a href="#projen-modules.NpmPackage.property.srcdir">srcdir</a></code> | <code>string</code> | The directory in which the .ts sources reside. |
| <code><a href="#projen-modules.NpmPackage.property.testdir">testdir</a></code> | <code>string</code> | The directory in which tests reside. |
| <code><a href="#projen-modules.NpmPackage.property.tsconfigDev">tsconfigDev</a></code> | <code>projen.javascript.TypescriptConfig</code> | A typescript configuration file which covers all files (sources, tests, projen). |
| <code><a href="#projen-modules.NpmPackage.property.watchTask">watchTask</a></code> | <code>projen.Task</code> | The "watch" task. |
| <code><a href="#projen-modules.NpmPackage.property.docgen">docgen</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#projen-modules.NpmPackage.property.eslint">eslint</a></code> | <code>projen.javascript.Eslint</code> | *No description.* |
| <code><a href="#projen-modules.NpmPackage.property.tsconfig">tsconfig</a></code> | <code>projen.javascript.TypescriptConfig</code> | *No description.* |
| <code><a href="#projen-modules.NpmPackage.property.tsconfigEslint">tsconfigEslint</a></code> | <code>projen.javascript.TypescriptConfig</code> | *No description.* |
| <code><a href="#projen-modules.NpmPackage.property.readme">readme</a></code> | <code><a href="#projen-modules.Readme">Readme</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="projen-modules.NpmPackage.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `buildTask`<sup>Required</sup> <a name="buildTask" id="projen-modules.NpmPackage.property.buildTask"></a>

```typescript
public readonly buildTask: Task;
```

- *Type:* projen.Task

---

##### `commitGenerated`<sup>Required</sup> <a name="commitGenerated" id="projen-modules.NpmPackage.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean

Whether to commit the managed files by default.

---

##### `compileTask`<sup>Required</sup> <a name="compileTask" id="projen-modules.NpmPackage.property.compileTask"></a>

```typescript
public readonly compileTask: Task;
```

- *Type:* projen.Task

---

##### `components`<sup>Required</sup> <a name="components" id="projen-modules.NpmPackage.property.components"></a>

```typescript
public readonly components: Component[];
```

- *Type:* projen.Component[]

Returns all the components within this project.

---

##### `deps`<sup>Required</sup> <a name="deps" id="projen-modules.NpmPackage.property.deps"></a>

```typescript
public readonly deps: Dependencies;
```

- *Type:* projen.Dependencies

Project dependencies.

---

##### `ejected`<sup>Required</sup> <a name="ejected" id="projen-modules.NpmPackage.property.ejected"></a>

```typescript
public readonly ejected: boolean;
```

- *Type:* boolean

Whether or not the project is being ejected.

---

##### `files`<sup>Required</sup> <a name="files" id="projen-modules.NpmPackage.property.files"></a>

```typescript
public readonly files: FileBase[];
```

- *Type:* projen.FileBase[]

All files in this project.

---

##### `gitattributes`<sup>Required</sup> <a name="gitattributes" id="projen-modules.NpmPackage.property.gitattributes"></a>

```typescript
public readonly gitattributes: GitAttributesFile;
```

- *Type:* projen.GitAttributesFile

The .gitattributes file for this repository.

---

##### `gitignore`<sup>Required</sup> <a name="gitignore" id="projen-modules.NpmPackage.property.gitignore"></a>

```typescript
public readonly gitignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

.gitignore.

---

##### `logger`<sup>Required</sup> <a name="logger" id="projen-modules.NpmPackage.property.logger"></a>

```typescript
public readonly logger: Logger;
```

- *Type:* projen.Logger

Logging utilities.

---

##### `name`<sup>Required</sup> <a name="name" id="projen-modules.NpmPackage.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Project name.

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="projen-modules.NpmPackage.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

Absolute output directory of this project.

---

##### `packageTask`<sup>Required</sup> <a name="packageTask" id="projen-modules.NpmPackage.property.packageTask"></a>

```typescript
public readonly packageTask: Task;
```

- *Type:* projen.Task

---

##### `postCompileTask`<sup>Required</sup> <a name="postCompileTask" id="projen-modules.NpmPackage.property.postCompileTask"></a>

```typescript
public readonly postCompileTask: Task;
```

- *Type:* projen.Task

---

##### `preCompileTask`<sup>Required</sup> <a name="preCompileTask" id="projen-modules.NpmPackage.property.preCompileTask"></a>

```typescript
public readonly preCompileTask: Task;
```

- *Type:* projen.Task

---

##### `projectBuild`<sup>Required</sup> <a name="projectBuild" id="projen-modules.NpmPackage.property.projectBuild"></a>

```typescript
public readonly projectBuild: ProjectBuild;
```

- *Type:* projen.ProjectBuild

Manages the build process of the project.

---

##### `projenCommand`<sup>Required</sup> <a name="projenCommand" id="projen-modules.NpmPackage.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string

The command to use in order to run the projen CLI.

---

##### `root`<sup>Required</sup> <a name="root" id="projen-modules.NpmPackage.property.root"></a>

```typescript
public readonly root: Project;
```

- *Type:* projen.Project

The root project.

---

##### `subprojects`<sup>Required</sup> <a name="subprojects" id="projen-modules.NpmPackage.property.subprojects"></a>

```typescript
public readonly subprojects: Project[];
```

- *Type:* projen.Project[]

Returns all the subprojects within this project.

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="projen-modules.NpmPackage.property.tasks"></a>

```typescript
public readonly tasks: Tasks;
```

- *Type:* projen.Tasks

Project tasks.

---

##### `testTask`<sup>Required</sup> <a name="testTask" id="projen-modules.NpmPackage.property.testTask"></a>

```typescript
public readonly testTask: Task;
```

- *Type:* projen.Task

---

##### `defaultTask`<sup>Optional</sup> <a name="defaultTask" id="projen-modules.NpmPackage.property.defaultTask"></a>

```typescript
public readonly defaultTask: Task;
```

- *Type:* projen.Task

This is the "default" task, the one that executes "projen".

Undefined if
the project is being ejected.

---

##### `initProject`<sup>Optional</sup> <a name="initProject" id="projen-modules.NpmPackage.property.initProject"></a>

```typescript
public readonly initProject: InitProject;
```

- *Type:* projen.InitProject

The options used when this project is bootstrapped via `projen new`.

It
includes the original set of options passed to the CLI and also the JSII
FQN of the project type.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="projen-modules.NpmPackage.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

A parent project.

If undefined, this is the root project.

---

##### `projectType`<sup>Required</sup> <a name="projectType" id="projen-modules.NpmPackage.property.projectType"></a>

```typescript
public readonly projectType: ProjectType;
```

- *Type:* projen.ProjectType

---

##### `autoApprove`<sup>Optional</sup> <a name="autoApprove" id="projen-modules.NpmPackage.property.autoApprove"></a>

```typescript
public readonly autoApprove: AutoApprove;
```

- *Type:* projen.github.AutoApprove

Auto approve set up for this project.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="projen-modules.NpmPackage.property.devContainer"></a>

```typescript
public readonly devContainer: DevContainer;
```

- *Type:* projen.vscode.DevContainer

Access for .devcontainer.json (used for GitHub Codespaces).

This will be `undefined` if devContainer boolean is false

---

##### `github`<sup>Optional</sup> <a name="github" id="projen-modules.NpmPackage.property.github"></a>

```typescript
public readonly github: GitHub;
```

- *Type:* projen.github.GitHub

Access all github components.

This will be `undefined` for subprojects.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="projen-modules.NpmPackage.property.gitpod"></a>

```typescript
public readonly gitpod: Gitpod;
```

- *Type:* projen.Gitpod

Access for Gitpod.

This will be `undefined` if gitpod boolean is false

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="projen-modules.NpmPackage.property.vscode"></a>

```typescript
public readonly vscode: VsCode;
```

- *Type:* projen.vscode.VsCode

Access all VSCode components.

This will be `undefined` for subprojects.

---

##### ~~`allowLibraryDependencies`~~<sup>Required</sup> <a name="allowLibraryDependencies" id="projen-modules.NpmPackage.property.allowLibraryDependencies"></a>

- *Deprecated:* use `package.allowLibraryDependencies`

```typescript
public readonly allowLibraryDependencies: boolean;
```

- *Type:* boolean

---

##### `artifactsDirectory`<sup>Required</sup> <a name="artifactsDirectory" id="projen-modules.NpmPackage.property.artifactsDirectory"></a>

```typescript
public readonly artifactsDirectory: string;
```

- *Type:* string

The build output directory.

An npm tarball will be created under the `js`
subdirectory. For example, if this is set to `dist` (the default), the npm
tarball will be placed under `dist/js/boom-boom-1.2.3.tg`.

---

##### `artifactsJavascriptDirectory`<sup>Required</sup> <a name="artifactsJavascriptDirectory" id="projen-modules.NpmPackage.property.artifactsJavascriptDirectory"></a>

```typescript
public readonly artifactsJavascriptDirectory: string;
```

- *Type:* string

The location of the npm tarball after build (`${artifactsDirectory}/js`).

---

##### `bundler`<sup>Required</sup> <a name="bundler" id="projen-modules.NpmPackage.property.bundler"></a>

```typescript
public readonly bundler: Bundler;
```

- *Type:* projen.javascript.Bundler

---

##### ~~`entrypoint`~~<sup>Required</sup> <a name="entrypoint" id="projen-modules.NpmPackage.property.entrypoint"></a>

- *Deprecated:* use `package.entrypoint`

```typescript
public readonly entrypoint: string;
```

- *Type:* string

---

##### ~~`manifest`~~<sup>Required</sup> <a name="manifest" id="projen-modules.NpmPackage.property.manifest"></a>

- *Deprecated:* use `package.addField(x, y)`

```typescript
public readonly manifest: any;
```

- *Type:* any

---

##### `npmrc`<sup>Required</sup> <a name="npmrc" id="projen-modules.NpmPackage.property.npmrc"></a>

```typescript
public readonly npmrc: NpmConfig;
```

- *Type:* projen.javascript.NpmConfig

The .npmrc file.

---

##### `package`<sup>Required</sup> <a name="package" id="projen-modules.NpmPackage.property.package"></a>

```typescript
public readonly package: NodePackage;
```

- *Type:* projen.javascript.NodePackage

API for managing the node package.

---

##### ~~`packageManager`~~<sup>Required</sup> <a name="packageManager" id="projen-modules.NpmPackage.property.packageManager"></a>

- *Deprecated:* use `package.packageManager`

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* projen.javascript.NodePackageManager

The package manager to use.

---

##### `runScriptCommand`<sup>Required</sup> <a name="runScriptCommand" id="projen-modules.NpmPackage.property.runScriptCommand"></a>

```typescript
public readonly runScriptCommand: string;
```

- *Type:* string

The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager).

---

##### `autoMerge`<sup>Optional</sup> <a name="autoMerge" id="projen-modules.NpmPackage.property.autoMerge"></a>

```typescript
public readonly autoMerge: AutoMerge;
```

- *Type:* projen.github.AutoMerge

Component that sets up mergify for merging approved pull requests.

---

##### `biome`<sup>Optional</sup> <a name="biome" id="projen-modules.NpmPackage.property.biome"></a>

```typescript
public readonly biome: Biome;
```

- *Type:* projen.javascript.Biome

---

##### `buildWorkflow`<sup>Optional</sup> <a name="buildWorkflow" id="projen-modules.NpmPackage.property.buildWorkflow"></a>

```typescript
public readonly buildWorkflow: BuildWorkflow;
```

- *Type:* projen.build.BuildWorkflow

The PR build GitHub workflow.

`undefined` if `buildWorkflow` is disabled.

---

##### `buildWorkflowJobId`<sup>Optional</sup> <a name="buildWorkflowJobId" id="projen-modules.NpmPackage.property.buildWorkflowJobId"></a>

```typescript
public readonly buildWorkflowJobId: string;
```

- *Type:* string

The job ID of the build workflow.

---

##### `jest`<sup>Optional</sup> <a name="jest" id="projen-modules.NpmPackage.property.jest"></a>

```typescript
public readonly jest: Jest;
```

- *Type:* projen.javascript.Jest

The Jest configuration (if enabled).

---

##### `maxNodeVersion`<sup>Optional</sup> <a name="maxNodeVersion" id="projen-modules.NpmPackage.property.maxNodeVersion"></a>

```typescript
public readonly maxNodeVersion: string;
```

- *Type:* string

Maximum node version supported by this package.

The value indicates the package is incompatible with newer versions.

---

##### `minNodeVersion`<sup>Optional</sup> <a name="minNodeVersion" id="projen-modules.NpmPackage.property.minNodeVersion"></a>

```typescript
public readonly minNodeVersion: string;
```

- *Type:* string

The minimum node version required by this package to function.

This value indicates the package is incompatible with older versions.

---

##### `npmignore`<sup>Optional</sup> <a name="npmignore" id="projen-modules.NpmPackage.property.npmignore"></a>

```typescript
public readonly npmignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

The .npmignore file.

---

##### `prettier`<sup>Optional</sup> <a name="prettier" id="projen-modules.NpmPackage.property.prettier"></a>

```typescript
public readonly prettier: Prettier;
```

- *Type:* projen.javascript.Prettier

---

##### ~~`publisher`~~<sup>Optional</sup> <a name="publisher" id="projen-modules.NpmPackage.property.publisher"></a>

- *Deprecated:* use `release.publisher`.

```typescript
public readonly publisher: Publisher;
```

- *Type:* projen.release.Publisher

Package publisher.

This will be `undefined` if the project does not have a
release workflow.

---

##### `release`<sup>Optional</sup> <a name="release" id="projen-modules.NpmPackage.property.release"></a>

```typescript
public readonly release: Release;
```

- *Type:* projen.release.Release

Release management.

---

##### `upgradeWorkflow`<sup>Optional</sup> <a name="upgradeWorkflow" id="projen-modules.NpmPackage.property.upgradeWorkflow"></a>

```typescript
public readonly upgradeWorkflow: UpgradeDependencies;
```

- *Type:* projen.javascript.UpgradeDependencies

The upgrade workflow.

---

##### `docsDirectory`<sup>Required</sup> <a name="docsDirectory" id="projen-modules.NpmPackage.property.docsDirectory"></a>

```typescript
public readonly docsDirectory: string;
```

- *Type:* string

---

##### `libdir`<sup>Required</sup> <a name="libdir" id="projen-modules.NpmPackage.property.libdir"></a>

```typescript
public readonly libdir: string;
```

- *Type:* string

The directory in which compiled .js files reside.

---

##### `srcdir`<sup>Required</sup> <a name="srcdir" id="projen-modules.NpmPackage.property.srcdir"></a>

```typescript
public readonly srcdir: string;
```

- *Type:* string

The directory in which the .ts sources reside.

---

##### `testdir`<sup>Required</sup> <a name="testdir" id="projen-modules.NpmPackage.property.testdir"></a>

```typescript
public readonly testdir: string;
```

- *Type:* string

The directory in which tests reside.

---

##### `tsconfigDev`<sup>Required</sup> <a name="tsconfigDev" id="projen-modules.NpmPackage.property.tsconfigDev"></a>

```typescript
public readonly tsconfigDev: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

A typescript configuration file which covers all files (sources, tests, projen).

---

##### `watchTask`<sup>Required</sup> <a name="watchTask" id="projen-modules.NpmPackage.property.watchTask"></a>

```typescript
public readonly watchTask: Task;
```

- *Type:* projen.Task

The "watch" task.

---

##### `docgen`<sup>Optional</sup> <a name="docgen" id="projen-modules.NpmPackage.property.docgen"></a>

```typescript
public readonly docgen: boolean;
```

- *Type:* boolean

---

##### `eslint`<sup>Optional</sup> <a name="eslint" id="projen-modules.NpmPackage.property.eslint"></a>

```typescript
public readonly eslint: Eslint;
```

- *Type:* projen.javascript.Eslint

---

##### `tsconfig`<sup>Optional</sup> <a name="tsconfig" id="projen-modules.NpmPackage.property.tsconfig"></a>

```typescript
public readonly tsconfig: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

---

##### `tsconfigEslint`<sup>Optional</sup> <a name="tsconfigEslint" id="projen-modules.NpmPackage.property.tsconfigEslint"></a>

```typescript
public readonly tsconfigEslint: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

---

##### `readme`<sup>Required</sup> <a name="readme" id="projen-modules.NpmPackage.property.readme"></a>

```typescript
public readonly readme: Readme;
```

- *Type:* <a href="#projen-modules.Readme">Readme</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen-modules.NpmPackage.property.DEFAULT_TASK">DEFAULT_TASK</a></code> | <code>string</code> | The name of the default task (the task executed when `projen` is run without arguments). |
| <code><a href="#projen-modules.NpmPackage.property.DEFAULT_TS_JEST_TRANFORM_PATTERN">DEFAULT_TS_JEST_TRANFORM_PATTERN</a></code> | <code>string</code> | *No description.* |

---

##### `DEFAULT_TASK`<sup>Required</sup> <a name="DEFAULT_TASK" id="projen-modules.NpmPackage.property.DEFAULT_TASK"></a>

```typescript
public readonly DEFAULT_TASK: string;
```

- *Type:* string

The name of the default task (the task executed when `projen` is run without arguments).

Normally
this task should synthesize the project files.

---

##### `DEFAULT_TS_JEST_TRANFORM_PATTERN`<sup>Required</sup> <a name="DEFAULT_TS_JEST_TRANFORM_PATTERN" id="projen-modules.NpmPackage.property.DEFAULT_TS_JEST_TRANFORM_PATTERN"></a>

```typescript
public readonly DEFAULT_TS_JEST_TRANFORM_PATTERN: string;
```

- *Type:* string

---

### PythonPackage <a name="PythonPackage" id="projen-modules.PythonPackage"></a>

A Python package.

#### Initializers <a name="Initializers" id="projen-modules.PythonPackage.Initializer"></a>

```typescript
import { PythonPackage } from 'projen-modules'

new PythonPackage(options: PythonPackageOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen-modules.PythonPackage.Initializer.parameter.options">options</a></code> | <code><a href="#projen-modules.PythonPackageOptions">PythonPackageOptions</a></code> | *No description.* |

---

##### `options`<sup>Required</sup> <a name="options" id="projen-modules.PythonPackage.Initializer.parameter.options"></a>

- *Type:* <a href="#projen-modules.PythonPackageOptions">PythonPackageOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen-modules.PythonPackage.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#projen-modules.PythonPackage.addExcludeFromCleanup">addExcludeFromCleanup</a></code> | Exclude the matching files from pre-synth cleanup. |
| <code><a href="#projen-modules.PythonPackage.addGitIgnore">addGitIgnore</a></code> | Adds a .gitignore pattern. |
| <code><a href="#projen-modules.PythonPackage.addPackageIgnore">addPackageIgnore</a></code> | Exclude these files from the bundled package. |
| <code><a href="#projen-modules.PythonPackage.addTask">addTask</a></code> | Adds a new task to this project. |
| <code><a href="#projen-modules.PythonPackage.addTip">addTip</a></code> | Prints a "tip" message during synthesis. |
| <code><a href="#projen-modules.PythonPackage.annotateGenerated">annotateGenerated</a></code> | Marks the provided file(s) as being generated. |
| <code><a href="#projen-modules.PythonPackage.postSynthesize">postSynthesize</a></code> | Called after all components are synthesized. |
| <code><a href="#projen-modules.PythonPackage.preSynthesize">preSynthesize</a></code> | Called before all components are synthesized. |
| <code><a href="#projen-modules.PythonPackage.removeTask">removeTask</a></code> | Removes a task from a project. |
| <code><a href="#projen-modules.PythonPackage.runTaskCommand">runTaskCommand</a></code> | Returns the shell command to execute in order to run a task. |
| <code><a href="#projen-modules.PythonPackage.synth">synth</a></code> | Synthesize all project files into `outdir`. |
| <code><a href="#projen-modules.PythonPackage.tryFindFile">tryFindFile</a></code> | Finds a file at the specified relative path within this project and all its subprojects. |
| <code><a href="#projen-modules.PythonPackage.tryFindJsonFile">tryFindJsonFile</a></code> | Finds a json file by name. |
| <code><a href="#projen-modules.PythonPackage.tryFindObjectFile">tryFindObjectFile</a></code> | Finds an object file (like JsonFile, YamlFile, etc.) by name. |
| <code><a href="#projen-modules.PythonPackage.tryRemoveFile">tryRemoveFile</a></code> | Finds a file at the specified relative path within this project and removes it. |
| <code><a href="#projen-modules.PythonPackage.addDependency">addDependency</a></code> | Adds a runtime dependency. |
| <code><a href="#projen-modules.PythonPackage.addDevDependency">addDevDependency</a></code> | Adds a dev dependency. |

---

##### `toString` <a name="toString" id="projen-modules.PythonPackage.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addExcludeFromCleanup` <a name="addExcludeFromCleanup" id="projen-modules.PythonPackage.addExcludeFromCleanup"></a>

```typescript
public addExcludeFromCleanup(globs: ...string[]): void
```

Exclude the matching files from pre-synth cleanup.

Can be used when, for example, some
source files include the projen marker and we don't want them to be erased during synth.

###### `globs`<sup>Required</sup> <a name="globs" id="projen-modules.PythonPackage.addExcludeFromCleanup.parameter.globs"></a>

- *Type:* ...string[]

The glob patterns to match.

---

##### `addGitIgnore` <a name="addGitIgnore" id="projen-modules.PythonPackage.addGitIgnore"></a>

```typescript
public addGitIgnore(pattern: string): void
```

Adds a .gitignore pattern.

###### `pattern`<sup>Required</sup> <a name="pattern" id="projen-modules.PythonPackage.addGitIgnore.parameter.pattern"></a>

- *Type:* string

The glob pattern to ignore.

---

##### `addPackageIgnore` <a name="addPackageIgnore" id="projen-modules.PythonPackage.addPackageIgnore"></a>

```typescript
public addPackageIgnore(_pattern: string): void
```

Exclude these files from the bundled package.

Implemented by project types based on the
packaging mechanism. For example, `NodeProject` delegates this to `.npmignore`.

###### `_pattern`<sup>Required</sup> <a name="_pattern" id="projen-modules.PythonPackage.addPackageIgnore.parameter._pattern"></a>

- *Type:* string

The glob pattern to exclude.

---

##### `addTask` <a name="addTask" id="projen-modules.PythonPackage.addTask"></a>

```typescript
public addTask(name: string, props?: TaskOptions): Task
```

Adds a new task to this project.

This will fail if the project already has
a task with this name.

###### `name`<sup>Required</sup> <a name="name" id="projen-modules.PythonPackage.addTask.parameter.name"></a>

- *Type:* string

The task name to add.

---

###### `props`<sup>Optional</sup> <a name="props" id="projen-modules.PythonPackage.addTask.parameter.props"></a>

- *Type:* projen.TaskOptions

Task properties.

---

##### ~~`addTip`~~ <a name="addTip" id="projen-modules.PythonPackage.addTip"></a>

```typescript
public addTip(message: string): void
```

Prints a "tip" message during synthesis.

###### `message`<sup>Required</sup> <a name="message" id="projen-modules.PythonPackage.addTip.parameter.message"></a>

- *Type:* string

The message.

---

##### `annotateGenerated` <a name="annotateGenerated" id="projen-modules.PythonPackage.annotateGenerated"></a>

```typescript
public annotateGenerated(glob: string): void
```

Marks the provided file(s) as being generated.

This is achieved using the
github-linguist attributes. Generated files do not count against the
repository statistics and language breakdown.

> [https://github.com/github/linguist/blob/master/docs/overrides.md](https://github.com/github/linguist/blob/master/docs/overrides.md)

###### `glob`<sup>Required</sup> <a name="glob" id="projen-modules.PythonPackage.annotateGenerated.parameter.glob"></a>

- *Type:* string

the glob pattern to match (could be a file path).

---

##### `postSynthesize` <a name="postSynthesize" id="projen-modules.PythonPackage.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after all components are synthesized.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="projen-modules.PythonPackage.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before all components are synthesized.

##### `removeTask` <a name="removeTask" id="projen-modules.PythonPackage.removeTask"></a>

```typescript
public removeTask(name: string): Task
```

Removes a task from a project.

###### `name`<sup>Required</sup> <a name="name" id="projen-modules.PythonPackage.removeTask.parameter.name"></a>

- *Type:* string

The name of the task to remove.

---

##### `runTaskCommand` <a name="runTaskCommand" id="projen-modules.PythonPackage.runTaskCommand"></a>

```typescript
public runTaskCommand(task: Task): string
```

Returns the shell command to execute in order to run a task.

By default, this is `npx projen@<version> <task>`

###### `task`<sup>Required</sup> <a name="task" id="projen-modules.PythonPackage.runTaskCommand.parameter.task"></a>

- *Type:* projen.Task

The task for which the command is required.

---

##### `synth` <a name="synth" id="projen-modules.PythonPackage.synth"></a>

```typescript
public synth(): void
```

Synthesize all project files into `outdir`.

1. Call "this.preSynthesize()"
2. Delete all generated files
3. Synthesize all subprojects
4. Synthesize all components of this project
5. Call "postSynthesize()" for all components of this project
6. Call "this.postSynthesize()"

##### `tryFindFile` <a name="tryFindFile" id="projen-modules.PythonPackage.tryFindFile"></a>

```typescript
public tryFindFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and all its subprojects.

###### `filePath`<sup>Required</sup> <a name="filePath" id="projen-modules.PythonPackage.tryFindFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be resolved
from the root of _this_ project.

---

##### ~~`tryFindJsonFile`~~ <a name="tryFindJsonFile" id="projen-modules.PythonPackage.tryFindJsonFile"></a>

```typescript
public tryFindJsonFile(filePath: string): JsonFile
```

Finds a json file by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="projen-modules.PythonPackage.tryFindJsonFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryFindObjectFile` <a name="tryFindObjectFile" id="projen-modules.PythonPackage.tryFindObjectFile"></a>

```typescript
public tryFindObjectFile(filePath: string): ObjectFile
```

Finds an object file (like JsonFile, YamlFile, etc.) by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="projen-modules.PythonPackage.tryFindObjectFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryRemoveFile` <a name="tryRemoveFile" id="projen-modules.PythonPackage.tryRemoveFile"></a>

```typescript
public tryRemoveFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and removes it.

###### `filePath`<sup>Required</sup> <a name="filePath" id="projen-modules.PythonPackage.tryRemoveFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be
resolved from the root of _this_ project.

---

##### `addDependency` <a name="addDependency" id="projen-modules.PythonPackage.addDependency"></a>

```typescript
public addDependency(spec: string): void
```

Adds a runtime dependency.

###### `spec`<sup>Required</sup> <a name="spec" id="projen-modules.PythonPackage.addDependency.parameter.spec"></a>

- *Type:* string

Format `<module>@<semver>`.

---

##### `addDevDependency` <a name="addDevDependency" id="projen-modules.PythonPackage.addDevDependency"></a>

```typescript
public addDevDependency(spec: string): void
```

Adds a dev dependency.

###### `spec`<sup>Required</sup> <a name="spec" id="projen-modules.PythonPackage.addDevDependency.parameter.spec"></a>

- *Type:* string

Format `<module>@<semver>`.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen-modules.PythonPackage.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#projen-modules.PythonPackage.isProject">isProject</a></code> | Test whether the given construct is a project. |
| <code><a href="#projen-modules.PythonPackage.of">of</a></code> | Find the closest ancestor project for given construct. |

---

##### `isConstruct` <a name="isConstruct" id="projen-modules.PythonPackage.isConstruct"></a>

```typescript
import { PythonPackage } from 'projen-modules'

PythonPackage.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="projen-modules.PythonPackage.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isProject` <a name="isProject" id="projen-modules.PythonPackage.isProject"></a>

```typescript
import { PythonPackage } from 'projen-modules'

PythonPackage.isProject(x: any)
```

Test whether the given construct is a project.

###### `x`<sup>Required</sup> <a name="x" id="projen-modules.PythonPackage.isProject.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="projen-modules.PythonPackage.of"></a>

```typescript
import { PythonPackage } from 'projen-modules'

PythonPackage.of(construct: IConstruct)
```

Find the closest ancestor project for given construct.

When given a project, this it the project itself.

###### `construct`<sup>Required</sup> <a name="construct" id="projen-modules.PythonPackage.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen-modules.PythonPackage.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#projen-modules.PythonPackage.property.buildTask">buildTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen-modules.PythonPackage.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#projen-modules.PythonPackage.property.compileTask">compileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen-modules.PythonPackage.property.components">components</a></code> | <code>projen.Component[]</code> | Returns all the components within this project. |
| <code><a href="#projen-modules.PythonPackage.property.deps">deps</a></code> | <code>projen.Dependencies</code> | Project dependencies. |
| <code><a href="#projen-modules.PythonPackage.property.ejected">ejected</a></code> | <code>boolean</code> | Whether or not the project is being ejected. |
| <code><a href="#projen-modules.PythonPackage.property.files">files</a></code> | <code>projen.FileBase[]</code> | All files in this project. |
| <code><a href="#projen-modules.PythonPackage.property.gitattributes">gitattributes</a></code> | <code>projen.GitAttributesFile</code> | The .gitattributes file for this repository. |
| <code><a href="#projen-modules.PythonPackage.property.gitignore">gitignore</a></code> | <code>projen.IgnoreFile</code> | .gitignore. |
| <code><a href="#projen-modules.PythonPackage.property.logger">logger</a></code> | <code>projen.Logger</code> | Logging utilities. |
| <code><a href="#projen-modules.PythonPackage.property.name">name</a></code> | <code>string</code> | Project name. |
| <code><a href="#projen-modules.PythonPackage.property.outdir">outdir</a></code> | <code>string</code> | Absolute output directory of this project. |
| <code><a href="#projen-modules.PythonPackage.property.packageTask">packageTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen-modules.PythonPackage.property.postCompileTask">postCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen-modules.PythonPackage.property.preCompileTask">preCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen-modules.PythonPackage.property.projectBuild">projectBuild</a></code> | <code>projen.ProjectBuild</code> | Manages the build process of the project. |
| <code><a href="#projen-modules.PythonPackage.property.projenCommand">projenCommand</a></code> | <code>string</code> | The command to use in order to run the projen CLI. |
| <code><a href="#projen-modules.PythonPackage.property.root">root</a></code> | <code>projen.Project</code> | The root project. |
| <code><a href="#projen-modules.PythonPackage.property.subprojects">subprojects</a></code> | <code>projen.Project[]</code> | Returns all the subprojects within this project. |
| <code><a href="#projen-modules.PythonPackage.property.tasks">tasks</a></code> | <code>projen.Tasks</code> | Project tasks. |
| <code><a href="#projen-modules.PythonPackage.property.testTask">testTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen-modules.PythonPackage.property.defaultTask">defaultTask</a></code> | <code>projen.Task</code> | This is the "default" task, the one that executes "projen". |
| <code><a href="#projen-modules.PythonPackage.property.initProject">initProject</a></code> | <code>projen.InitProject</code> | The options used when this project is bootstrapped via `projen new`. |
| <code><a href="#projen-modules.PythonPackage.property.parent">parent</a></code> | <code>projen.Project</code> | A parent project. |
| <code><a href="#projen-modules.PythonPackage.property.projectType">projectType</a></code> | <code>projen.ProjectType</code> | *No description.* |
| <code><a href="#projen-modules.PythonPackage.property.autoApprove">autoApprove</a></code> | <code>projen.github.AutoApprove</code> | Auto approve set up for this project. |
| <code><a href="#projen-modules.PythonPackage.property.devContainer">devContainer</a></code> | <code>projen.vscode.DevContainer</code> | Access for .devcontainer.json (used for GitHub Codespaces). |
| <code><a href="#projen-modules.PythonPackage.property.github">github</a></code> | <code>projen.github.GitHub</code> | Access all github components. |
| <code><a href="#projen-modules.PythonPackage.property.gitpod">gitpod</a></code> | <code>projen.Gitpod</code> | Access for Gitpod. |
| <code><a href="#projen-modules.PythonPackage.property.vscode">vscode</a></code> | <code>projen.vscode.VsCode</code> | Access all VSCode components. |
| <code><a href="#projen-modules.PythonPackage.property.depsManager">depsManager</a></code> | <code>projen.python.IPythonDeps</code> | API for managing dependencies. |
| <code><a href="#projen-modules.PythonPackage.property.envManager">envManager</a></code> | <code>projen.python.IPythonEnv</code> | API for mangaging the Python runtime environment. |
| <code><a href="#projen-modules.PythonPackage.property.moduleName">moduleName</a></code> | <code>string</code> | Python module name (the project name, with any hyphens or periods replaced with underscores). |
| <code><a href="#projen-modules.PythonPackage.property.sampleTestdir">sampleTestdir</a></code> | <code>string</code> | Directory where sample tests are located. |
| <code><a href="#projen-modules.PythonPackage.property.version">version</a></code> | <code>string</code> | Version of the package for distribution (should follow semver). |
| <code><a href="#projen-modules.PythonPackage.property.packagingManager">packagingManager</a></code> | <code>projen.python.IPythonPackaging</code> | API for managing packaging the project as a library. |
| <code><a href="#projen-modules.PythonPackage.property.pytest">pytest</a></code> | <code>projen.python.Pytest</code> | Pytest component. |
| <code><a href="#projen-modules.PythonPackage.property.readme">readme</a></code> | <code><a href="#projen-modules.Readme">Readme</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="projen-modules.PythonPackage.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `buildTask`<sup>Required</sup> <a name="buildTask" id="projen-modules.PythonPackage.property.buildTask"></a>

```typescript
public readonly buildTask: Task;
```

- *Type:* projen.Task

---

##### `commitGenerated`<sup>Required</sup> <a name="commitGenerated" id="projen-modules.PythonPackage.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean

Whether to commit the managed files by default.

---

##### `compileTask`<sup>Required</sup> <a name="compileTask" id="projen-modules.PythonPackage.property.compileTask"></a>

```typescript
public readonly compileTask: Task;
```

- *Type:* projen.Task

---

##### `components`<sup>Required</sup> <a name="components" id="projen-modules.PythonPackage.property.components"></a>

```typescript
public readonly components: Component[];
```

- *Type:* projen.Component[]

Returns all the components within this project.

---

##### `deps`<sup>Required</sup> <a name="deps" id="projen-modules.PythonPackage.property.deps"></a>

```typescript
public readonly deps: Dependencies;
```

- *Type:* projen.Dependencies

Project dependencies.

---

##### `ejected`<sup>Required</sup> <a name="ejected" id="projen-modules.PythonPackage.property.ejected"></a>

```typescript
public readonly ejected: boolean;
```

- *Type:* boolean

Whether or not the project is being ejected.

---

##### `files`<sup>Required</sup> <a name="files" id="projen-modules.PythonPackage.property.files"></a>

```typescript
public readonly files: FileBase[];
```

- *Type:* projen.FileBase[]

All files in this project.

---

##### `gitattributes`<sup>Required</sup> <a name="gitattributes" id="projen-modules.PythonPackage.property.gitattributes"></a>

```typescript
public readonly gitattributes: GitAttributesFile;
```

- *Type:* projen.GitAttributesFile

The .gitattributes file for this repository.

---

##### `gitignore`<sup>Required</sup> <a name="gitignore" id="projen-modules.PythonPackage.property.gitignore"></a>

```typescript
public readonly gitignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

.gitignore.

---

##### `logger`<sup>Required</sup> <a name="logger" id="projen-modules.PythonPackage.property.logger"></a>

```typescript
public readonly logger: Logger;
```

- *Type:* projen.Logger

Logging utilities.

---

##### `name`<sup>Required</sup> <a name="name" id="projen-modules.PythonPackage.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Project name.

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="projen-modules.PythonPackage.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

Absolute output directory of this project.

---

##### `packageTask`<sup>Required</sup> <a name="packageTask" id="projen-modules.PythonPackage.property.packageTask"></a>

```typescript
public readonly packageTask: Task;
```

- *Type:* projen.Task

---

##### `postCompileTask`<sup>Required</sup> <a name="postCompileTask" id="projen-modules.PythonPackage.property.postCompileTask"></a>

```typescript
public readonly postCompileTask: Task;
```

- *Type:* projen.Task

---

##### `preCompileTask`<sup>Required</sup> <a name="preCompileTask" id="projen-modules.PythonPackage.property.preCompileTask"></a>

```typescript
public readonly preCompileTask: Task;
```

- *Type:* projen.Task

---

##### `projectBuild`<sup>Required</sup> <a name="projectBuild" id="projen-modules.PythonPackage.property.projectBuild"></a>

```typescript
public readonly projectBuild: ProjectBuild;
```

- *Type:* projen.ProjectBuild

Manages the build process of the project.

---

##### `projenCommand`<sup>Required</sup> <a name="projenCommand" id="projen-modules.PythonPackage.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string

The command to use in order to run the projen CLI.

---

##### `root`<sup>Required</sup> <a name="root" id="projen-modules.PythonPackage.property.root"></a>

```typescript
public readonly root: Project;
```

- *Type:* projen.Project

The root project.

---

##### `subprojects`<sup>Required</sup> <a name="subprojects" id="projen-modules.PythonPackage.property.subprojects"></a>

```typescript
public readonly subprojects: Project[];
```

- *Type:* projen.Project[]

Returns all the subprojects within this project.

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="projen-modules.PythonPackage.property.tasks"></a>

```typescript
public readonly tasks: Tasks;
```

- *Type:* projen.Tasks

Project tasks.

---

##### `testTask`<sup>Required</sup> <a name="testTask" id="projen-modules.PythonPackage.property.testTask"></a>

```typescript
public readonly testTask: Task;
```

- *Type:* projen.Task

---

##### `defaultTask`<sup>Optional</sup> <a name="defaultTask" id="projen-modules.PythonPackage.property.defaultTask"></a>

```typescript
public readonly defaultTask: Task;
```

- *Type:* projen.Task

This is the "default" task, the one that executes "projen".

Undefined if
the project is being ejected.

---

##### `initProject`<sup>Optional</sup> <a name="initProject" id="projen-modules.PythonPackage.property.initProject"></a>

```typescript
public readonly initProject: InitProject;
```

- *Type:* projen.InitProject

The options used when this project is bootstrapped via `projen new`.

It
includes the original set of options passed to the CLI and also the JSII
FQN of the project type.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="projen-modules.PythonPackage.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

A parent project.

If undefined, this is the root project.

---

##### `projectType`<sup>Required</sup> <a name="projectType" id="projen-modules.PythonPackage.property.projectType"></a>

```typescript
public readonly projectType: ProjectType;
```

- *Type:* projen.ProjectType

---

##### `autoApprove`<sup>Optional</sup> <a name="autoApprove" id="projen-modules.PythonPackage.property.autoApprove"></a>

```typescript
public readonly autoApprove: AutoApprove;
```

- *Type:* projen.github.AutoApprove

Auto approve set up for this project.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="projen-modules.PythonPackage.property.devContainer"></a>

```typescript
public readonly devContainer: DevContainer;
```

- *Type:* projen.vscode.DevContainer

Access for .devcontainer.json (used for GitHub Codespaces).

This will be `undefined` if devContainer boolean is false

---

##### `github`<sup>Optional</sup> <a name="github" id="projen-modules.PythonPackage.property.github"></a>

```typescript
public readonly github: GitHub;
```

- *Type:* projen.github.GitHub

Access all github components.

This will be `undefined` for subprojects.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="projen-modules.PythonPackage.property.gitpod"></a>

```typescript
public readonly gitpod: Gitpod;
```

- *Type:* projen.Gitpod

Access for Gitpod.

This will be `undefined` if gitpod boolean is false

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="projen-modules.PythonPackage.property.vscode"></a>

```typescript
public readonly vscode: VsCode;
```

- *Type:* projen.vscode.VsCode

Access all VSCode components.

This will be `undefined` for subprojects.

---

##### `depsManager`<sup>Required</sup> <a name="depsManager" id="projen-modules.PythonPackage.property.depsManager"></a>

```typescript
public readonly depsManager: IPythonDeps;
```

- *Type:* projen.python.IPythonDeps

API for managing dependencies.

---

##### `envManager`<sup>Required</sup> <a name="envManager" id="projen-modules.PythonPackage.property.envManager"></a>

```typescript
public readonly envManager: IPythonEnv;
```

- *Type:* projen.python.IPythonEnv

API for mangaging the Python runtime environment.

---

##### `moduleName`<sup>Required</sup> <a name="moduleName" id="projen-modules.PythonPackage.property.moduleName"></a>

```typescript
public readonly moduleName: string;
```

- *Type:* string

Python module name (the project name, with any hyphens or periods replaced with underscores).

---

##### `sampleTestdir`<sup>Required</sup> <a name="sampleTestdir" id="projen-modules.PythonPackage.property.sampleTestdir"></a>

```typescript
public readonly sampleTestdir: string;
```

- *Type:* string
- *Default:* "tests"

Directory where sample tests are located.

---

##### `version`<sup>Required</sup> <a name="version" id="projen-modules.PythonPackage.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Version of the package for distribution (should follow semver).

---

##### `packagingManager`<sup>Optional</sup> <a name="packagingManager" id="projen-modules.PythonPackage.property.packagingManager"></a>

```typescript
public readonly packagingManager: IPythonPackaging;
```

- *Type:* projen.python.IPythonPackaging

API for managing packaging the project as a library.

Only applies when the `projectType` is LIB.

---

##### `pytest`<sup>Optional</sup> <a name="pytest" id="projen-modules.PythonPackage.property.pytest"></a>

```typescript
public readonly pytest: Pytest;
```

- *Type:* projen.python.Pytest

Pytest component.

---

##### `readme`<sup>Required</sup> <a name="readme" id="projen-modules.PythonPackage.property.readme"></a>

```typescript
public readonly readme: Readme;
```

- *Type:* <a href="#projen-modules.Readme">Readme</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen-modules.PythonPackage.property.DEFAULT_TASK">DEFAULT_TASK</a></code> | <code>string</code> | The name of the default task (the task executed when `projen` is run without arguments). |

---

##### `DEFAULT_TASK`<sup>Required</sup> <a name="DEFAULT_TASK" id="projen-modules.PythonPackage.property.DEFAULT_TASK"></a>

```typescript
public readonly DEFAULT_TASK: string;
```

- *Type:* string

The name of the default task (the task executed when `projen` is run without arguments).

Normally
this task should synthesize the project files.

---

### Readme <a name="Readme" id="projen-modules.Readme"></a>

#### Initializers <a name="Initializers" id="projen-modules.Readme.Initializer"></a>

```typescript
import { Readme } from 'projen-modules'

new Readme(project: Project, options?: ReadmeOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen-modules.Readme.Initializer.parameter.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#projen-modules.Readme.Initializer.parameter.options">options</a></code> | <code><a href="#projen-modules.ReadmeOptions">ReadmeOptions</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="projen-modules.Readme.Initializer.parameter.project"></a>

- *Type:* projen.Project

---

##### `options`<sup>Optional</sup> <a name="options" id="projen-modules.Readme.Initializer.parameter.options"></a>

- *Type:* <a href="#projen-modules.ReadmeOptions">ReadmeOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen-modules.Readme.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#projen-modules.Readme.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#projen-modules.Readme.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#projen-modules.Readme.synthesize">synthesize</a></code> | Writes the file to the project's output directory. |
| <code><a href="#projen-modules.Readme.addSection">addSection</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="projen-modules.Readme.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="projen-modules.Readme.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="projen-modules.Readme.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="projen-modules.Readme.synthesize"></a>

```typescript
public synthesize(): void
```

Writes the file to the project's output directory.

##### `addSection` <a name="addSection" id="projen-modules.Readme.addSection"></a>

```typescript
public addSection(title: string, body: string): void
```

###### `title`<sup>Required</sup> <a name="title" id="projen-modules.Readme.addSection.parameter.title"></a>

- *Type:* string

---

###### `body`<sup>Required</sup> <a name="body" id="projen-modules.Readme.addSection.parameter.body"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen-modules.Readme.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#projen-modules.Readme.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="projen-modules.Readme.isConstruct"></a>

```typescript
import { Readme } from 'projen-modules'

Readme.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="projen-modules.Readme.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="projen-modules.Readme.isComponent"></a>

```typescript
import { Readme } from 'projen-modules'

Readme.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="projen-modules.Readme.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen-modules.Readme.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#projen-modules.Readme.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#projen-modules.Readme.property.absolutePath">absolutePath</a></code> | <code>string</code> | The absolute path of this file. |
| <code><a href="#projen-modules.Readme.property.path">path</a></code> | <code>string</code> | The file path, relative to the project's outdir. |
| <code><a href="#projen-modules.Readme.property.changed">changed</a></code> | <code>boolean</code> | Indicates if the file has been changed during synthesis. |
| <code><a href="#projen-modules.Readme.property.marker">marker</a></code> | <code>string</code> | The projen marker, used to identify files as projen-generated. |
| <code><a href="#projen-modules.Readme.property.executable">executable</a></code> | <code>boolean</code> | Indicates if the file should be marked as executable. |
| <code><a href="#projen-modules.Readme.property.readonly">readonly</a></code> | <code>boolean</code> | Indicates if the file should be read-only or read-write. |
| <code><a href="#projen-modules.Readme.property.sections">sections</a></code> | <code><a href="#projen-modules.Section">Section</a>[]</code> | *No description.* |
| <code><a href="#projen-modules.Readme.property.description">description</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="projen-modules.Readme.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="projen-modules.Readme.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---

##### `absolutePath`<sup>Required</sup> <a name="absolutePath" id="projen-modules.Readme.property.absolutePath"></a>

```typescript
public readonly absolutePath: string;
```

- *Type:* string

The absolute path of this file.

---

##### `path`<sup>Required</sup> <a name="path" id="projen-modules.Readme.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

The file path, relative to the project's outdir.

---

##### `changed`<sup>Optional</sup> <a name="changed" id="projen-modules.Readme.property.changed"></a>

```typescript
public readonly changed: boolean;
```

- *Type:* boolean

Indicates if the file has been changed during synthesis.

This property is
only available in `postSynthesize()` hooks. If this is `undefined`, the
file has not been synthesized yet.

---

##### `marker`<sup>Optional</sup> <a name="marker" id="projen-modules.Readme.property.marker"></a>

```typescript
public readonly marker: string;
```

- *Type:* string

The projen marker, used to identify files as projen-generated.

Value is undefined if the project is being ejected.

---

##### `executable`<sup>Required</sup> <a name="executable" id="projen-modules.Readme.property.executable"></a>

```typescript
public readonly executable: boolean;
```

- *Type:* boolean

Indicates if the file should be marked as executable.

---

##### `readonly`<sup>Required</sup> <a name="readonly" id="projen-modules.Readme.property.readonly"></a>

```typescript
public readonly readonly: boolean;
```

- *Type:* boolean

Indicates if the file should be read-only or read-write.

---

##### `sections`<sup>Required</sup> <a name="sections" id="projen-modules.Readme.property.sections"></a>

```typescript
public readonly sections: Section[];
```

- *Type:* <a href="#projen-modules.Section">Section</a>[]

---

##### `description`<sup>Optional</sup> <a name="description" id="projen-modules.Readme.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---


## Structs <a name="Structs" id="Structs"></a>

### CdkTypeScriptAppOptions <a name="CdkTypeScriptAppOptions" id="projen-modules.CdkTypeScriptAppOptions"></a>

CdkTypeScriptAppOptions.

#### Initializer <a name="Initializer" id="projen-modules.CdkTypeScriptAppOptions.Initializer"></a>

```typescript
import { CdkTypeScriptAppOptions } from 'projen-modules'

const cdkTypeScriptAppOptions: CdkTypeScriptAppOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.cdkVersion">cdkVersion</a></code> | <code>string</code> | Minimum version of the AWS CDK to depend on. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.codeOwners">codeOwners</a></code> | <code>string[]</code> | List of teams used to generate the CODEOWNERS file. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.name">name</a></code> | <code>string</code> | This is the name of your project. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.allowLibraryDependencies">allowLibraryDependencies</a></code> | <code>boolean</code> | Allow the project to include `peerDependencies` and `bundledDependencies`. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.app">app</a></code> | <code>string</code> | The command line to execute in order to synthesize the CDK application (language specific). |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.appEntrypoint">appEntrypoint</a></code> | <code>string</code> | The CDK app's entrypoint (relative to the source directory, which is "src" by default). |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.artifactsDirectory">artifactsDirectory</a></code> | <code>string</code> | A directory which will contain build artifacts. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.authorEmail">authorEmail</a></code> | <code>string</code> | Author's e-mail. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.authorName">authorName</a></code> | <code>string</code> | Author's name. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.authorOrganization">authorOrganization</a></code> | <code>boolean</code> | Is the author an organization. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.authorUrl">authorUrl</a></code> | <code>string</code> | Author's URL / Website. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.autoApproveOptions">autoApproveOptions</a></code> | <code>projen.github.AutoApproveOptions</code> | Enable and configure the 'auto approve' workflow. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.autoApproveUpgrades">autoApproveUpgrades</a></code> | <code>boolean</code> | Automatically approve deps upgrade PRs, allowing them to be merged by mergify (if configued). |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.autoDetectBin">autoDetectBin</a></code> | <code>boolean</code> | Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.autoMerge">autoMerge</a></code> | <code>boolean</code> | Enable automatic merging on GitHub. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.autoMergeOptions">autoMergeOptions</a></code> | <code>projen.github.AutoMergeOptions</code> | Configure options for automatic merging on GitHub. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.bin">bin</a></code> | <code>{[ key: string ]: string}</code> | Binary programs vended with your module. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.biome">biome</a></code> | <code>boolean</code> | Setup Biome. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.biomeOptions">biomeOptions</a></code> | <code>projen.javascript.BiomeOptions</code> | Biome options. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.bugsEmail">bugsEmail</a></code> | <code>string</code> | The email address to which issues should be reported. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.bugsUrl">bugsUrl</a></code> | <code>string</code> | The url to your project's issue tracker. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.buildCommand">buildCommand</a></code> | <code>string</code> | A command to execute before synthesis. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.buildWorkflow">buildWorkflow</a></code> | <code>boolean</code> | Define a GitHub workflow for building PRs. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.buildWorkflowOptions">buildWorkflowOptions</a></code> | <code>projen.javascript.BuildWorkflowOptions</code> | Options for PR build workflow. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.buildWorkflowTriggers">buildWorkflowTriggers</a></code> | <code>projen.github.workflows.Triggers</code> | Build workflow triggers. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.bumpPackage">bumpPackage</a></code> | <code>string</code> | The `commit-and-tag-version` compatible package used to bump the package version, as a dependency string. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.bundledDeps">bundledDeps</a></code> | <code>string[]</code> | List of dependencies to bundle into this module. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.bundlerOptions">bundlerOptions</a></code> | <code>projen.javascript.BundlerOptions</code> | Options for `Bundler`. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.bunVersion">bunVersion</a></code> | <code>string</code> | The version of Bun to use if using Bun as a package manager. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.cdkAssert">cdkAssert</a></code> | <code>boolean</code> | Warning: NodeJS only. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.cdkAssertions">cdkAssertions</a></code> | <code>boolean</code> | Install the assertions library? |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.cdkCliVersion">cdkCliVersion</a></code> | <code>string</code> | Version range of the AWS CDK CLI to depend on. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.cdkDependencies">cdkDependencies</a></code> | <code>string[]</code> | Which AWS CDKv1 modules this project requires. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.cdkDependenciesAsDeps">cdkDependenciesAsDeps</a></code> | <code>boolean</code> | If this is enabled (default), all modules declared in `cdkDependencies` will be also added as normal `dependencies` (as well as `peerDependencies`). |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.cdkout">cdkout</a></code> | <code>string</code> | cdk.out directory. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.cdkTestDependencies">cdkTestDependencies</a></code> | <code>string[]</code> | AWS CDK modules required for testing. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.cdkVersionPinning">cdkVersionPinning</a></code> | <code>boolean</code> | Use pinned version instead of caret version for CDK. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.checkLicenses">checkLicenses</a></code> | <code>projen.javascript.LicenseCheckerOptions</code> | Configure which licenses should be deemed acceptable for use by dependencies. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.clobber">clobber</a></code> | <code>boolean</code> | Add a `clobber` task which resets the repo to origin. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.codeArtifactOptions">codeArtifactOptions</a></code> | <code>projen.javascript.CodeArtifactOptions</code> | Options for npm packages using AWS CodeArtifact. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.codeCov">codeCov</a></code> | <code>boolean</code> | Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v5 By default, OIDC auth is used. Alternatively a token can be provided via `codeCovTokenSecret`. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.codeCovTokenSecret">codeCovTokenSecret</a></code> | <code>string</code> | Define the secret name for a specified https://codecov.io/ token. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.constructsVersion">constructsVersion</a></code> | <code>string</code> | Minimum version of the `constructs` library to depend on. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.context">context</a></code> | <code>{[ key: string ]: any}</code> | Additional context to include in `cdk.json`. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.copyrightOwner">copyrightOwner</a></code> | <code>string</code> | License copyright owner. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.copyrightPeriod">copyrightPeriod</a></code> | <code>string</code> | The copyright years to put in the LICENSE file. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.defaultReleaseBranch">defaultReleaseBranch</a></code> | <code>string</code> | The name of the main release branch. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.dependabot">dependabot</a></code> | <code>boolean</code> | Use dependabot to handle dependency upgrades. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.dependabotOptions">dependabotOptions</a></code> | <code>projen.github.DependabotOptions</code> | Options for dependabot. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.deps">deps</a></code> | <code>string[]</code> | Runtime dependencies of this module. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.depsUpgrade">depsUpgrade</a></code> | <code>boolean</code> | Use tasks and github workflows to handle dependency upgrades. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.depsUpgradeOptions">depsUpgradeOptions</a></code> | <code>projen.javascript.UpgradeDependenciesOptions</code> | Options for `UpgradeDependencies`. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.description">description</a></code> | <code>string</code> | The description is just a string that helps people understand the purpose of the package. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.devContainer">devContainer</a></code> | <code>boolean</code> | Add a VSCode development environment (used for GitHub Codespaces). |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.devDeps">devDeps</a></code> | <code>string[]</code> | Build dependencies for this module. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.disableTsconfig">disableTsconfig</a></code> | <code>boolean</code> | Do not generate a `tsconfig.json` file (used by jsii projects since tsconfig.json is generated by the jsii compiler). |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.disableTsconfigDev">disableTsconfigDev</a></code> | <code>boolean</code> | Do not generate a `tsconfig.dev.json` file. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.docgen">docgen</a></code> | <code>boolean</code> | Docgen by Typedoc. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.docsDirectory">docsDirectory</a></code> | <code>string</code> | Docs directory. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.edgeLambdaAutoDiscover">edgeLambdaAutoDiscover</a></code> | <code>boolean</code> | Automatically adds an `cloudfront.experimental.EdgeFunction` for each `.edge-lambda.ts` handler in your source tree. If this is disabled, you can manually add an `awscdk.AutoDiscover` component to your project. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.entrypoint">entrypoint</a></code> | <code>string</code> | Module entrypoint (`main` in `package.json`). Set to an empty string to not include `main` in your package.json. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.entrypointTypes">entrypointTypes</a></code> | <code>string</code> | The .d.ts file that includes the type declarations for this module. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.eslint">eslint</a></code> | <code>boolean</code> | Setup eslint. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.eslintOptions">eslintOptions</a></code> | <code>projen.javascript.EslintOptions</code> | Eslint options. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.experimentalIntegRunner">experimentalIntegRunner</a></code> | <code>boolean</code> | Enable experimental support for the AWS CDK integ-runner. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.featureFlags">featureFlags</a></code> | <code>projen.awscdk.ICdkFeatureFlags</code> | Feature flags that should be enabled in `cdk.json`. Make sure to double-check any changes to feature flags in `cdk.json` before deploying. Unexpected changes may cause breaking changes in your CDK app. You can overwrite any feature flag by passing it into the context field. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.github">github</a></code> | <code>boolean</code> | Enable GitHub integration. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.githubOptions">githubOptions</a></code> | <code>projen.github.GitHubOptions</code> | Options for GitHub integration. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.gitignore">gitignore</a></code> | <code>string[]</code> | Additional entries to .gitignore. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.gitIgnoreOptions">gitIgnoreOptions</a></code> | <code>projen.IgnoreFileOptions</code> | Configuration options for .gitignore file. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.gitOptions">gitOptions</a></code> | <code>projen.GitOptions</code> | Configuration options for git. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.gitpod">gitpod</a></code> | <code>boolean</code> | Add a Gitpod development environment. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.homepage">homepage</a></code> | <code>string</code> | Package's Homepage / Website. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.integrationTestAutoDiscover">integrationTestAutoDiscover</a></code> | <code>boolean</code> | Automatically discovers and creates integration tests for each `.integ.ts` file in under your test directory. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.jest">jest</a></code> | <code>boolean</code> | Setup jest unit tests. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.jestOptions">jestOptions</a></code> | <code>projen.javascript.JestOptions</code> | Jest options. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.jsiiReleaseVersion">jsiiReleaseVersion</a></code> | <code>string</code> | Version requirement of `publib` which is used to publish modules to npm. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.keywords">keywords</a></code> | <code>string[]</code> | Keywords to include in `package.json`. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.lambdaAutoDiscover">lambdaAutoDiscover</a></code> | <code>boolean</code> | Automatically adds an `awscdk.LambdaFunction` for each `.lambda.ts` handler in your source tree. If this is disabled, you can manually add an `awscdk.AutoDiscover` component to your project. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.lambdaExtensionAutoDiscover">lambdaExtensionAutoDiscover</a></code> | <code>boolean</code> | Automatically adds an `awscdk.LambdaExtension` for each `.lambda-extension.ts` entrypoint in your source tree. If this is disabled, you can manually add an `awscdk.AutoDiscover` component to your project. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.lambdaOptions">lambdaOptions</a></code> | <code>projen.awscdk.LambdaFunctionCommonOptions</code> | Common options for all AWS Lambda functions. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.libdir">libdir</a></code> | <code>string</code> | Typescript  artifacts output directory. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.license">license</a></code> | <code>string</code> | License's SPDX identifier. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.licensed">licensed</a></code> | <code>boolean</code> | Indicates if a license should be added. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.logging">logging</a></code> | <code>projen.LoggerOptions</code> | Configure logging options such as verbosity. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.majorVersion">majorVersion</a></code> | <code>number</code> | Major version to release from the default branch. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.maxNodeVersion">maxNodeVersion</a></code> | <code>string</code> | The maximum node version supported by this package. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.mergify">mergify</a></code> | <code>boolean</code> | Whether mergify should be enabled on this repository or not. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.mergifyOptions">mergifyOptions</a></code> | <code>projen.github.MergifyOptions</code> | Options for mergify. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.minMajorVersion">minMajorVersion</a></code> | <code>number</code> | Minimal Major version to release. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.minNodeVersion">minNodeVersion</a></code> | <code>string</code> | The minimum node version required by this package to function. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.mutableBuild">mutableBuild</a></code> | <code>boolean</code> | Automatically update files modified during builds to pull-request branches. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.nextVersionCommand">nextVersionCommand</a></code> | <code>string</code> | A shell command to control the next version to release. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.npmAccess">npmAccess</a></code> | <code>projen.javascript.NpmAccess</code> | Access level of the npm package. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.npmDistTag">npmDistTag</a></code> | <code>string</code> | The npmDistTag to use when publishing from the default branch. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.npmignore">npmignore</a></code> | <code>string[]</code> | Additional entries to .npmignore. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.npmignoreEnabled">npmignoreEnabled</a></code> | <code>boolean</code> | Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.npmIgnoreOptions">npmIgnoreOptions</a></code> | <code>projen.IgnoreFileOptions</code> | Configuration options for .npmignore file. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.npmProvenance">npmProvenance</a></code> | <code>boolean</code> | Should provenance statements be generated when the package is published. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.npmRegistry">npmRegistry</a></code> | <code>string</code> | The host name of the npm registry to publish to. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.npmRegistryUrl">npmRegistryUrl</a></code> | <code>string</code> | The base URL of the npm package registry. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.npmTokenSecret">npmTokenSecret</a></code> | <code>string</code> | GitHub secret which contains the NPM token to use when publishing packages. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.npmTrustedPublishing">npmTrustedPublishing</a></code> | <code>boolean</code> | Use trusted publishing for publishing to npmjs.com Needs to be pre-configured on npm.js to work. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.outdir">outdir</a></code> | <code>string</code> | The root directory of the project. Relative to this directory, all files are synthesized. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.package">package</a></code> | <code>boolean</code> | Defines a `package` task that will produce an npm tarball under the artifacts directory (e.g. `dist`). |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.packageManager">packageManager</a></code> | <code>projen.javascript.NodePackageManager</code> | The Node Package Manager used to execute scripts. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.packageName">packageName</a></code> | <code>string</code> | The "name" in package.json. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.parent">parent</a></code> | <code>projen.Project</code> | The parent project, if this project is part of a bigger project. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.peerDependencyOptions">peerDependencyOptions</a></code> | <code>projen.javascript.PeerDependencyOptions</code> | Options for `peerDeps`. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.peerDeps">peerDeps</a></code> | <code>string[]</code> | Peer dependencies for this module. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.pnpmVersion">pnpmVersion</a></code> | <code>string</code> | The version of PNPM to use if using PNPM as a package manager. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.postBuildSteps">postBuildSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | Steps to execute after build as part of the release workflow. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.prerelease">prerelease</a></code> | <code>string</code> | Bump versions from the default branch as pre-releases (e.g. "beta", "alpha", "pre"). |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.prettier">prettier</a></code> | <code>boolean</code> | Setup prettier. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.prettierOptions">prettierOptions</a></code> | <code>projen.javascript.PrettierOptions</code> | Prettier options. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.projectType">projectType</a></code> | <code>projen.ProjectType</code> | Which type of project this is (library/app). |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.projenCommand">projenCommand</a></code> | <code>string</code> | The shell command to use in order to run the projen CLI. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.projenCredentials">projenCredentials</a></code> | <code>projen.github.GithubCredentials</code> | Choose a method of providing GitHub API access for projen workflows. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.projenDevDependency">projenDevDependency</a></code> | <code>boolean</code> | Indicates of "projen" should be installed as a devDependency. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.projenrcJs">projenrcJs</a></code> | <code>boolean</code> | Generate (once) .projenrc.js (in JavaScript). Set to `false` in order to disable .projenrc.js generation. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.projenrcJson">projenrcJson</a></code> | <code>boolean</code> | Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.projenrcJsonOptions">projenrcJsonOptions</a></code> | <code>projen.ProjenrcJsonOptions</code> | Options for .projenrc.json. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.projenrcJsOptions">projenrcJsOptions</a></code> | <code>projen.javascript.ProjenrcOptions</code> | Options for .projenrc.js. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.projenrcTs">projenrcTs</a></code> | <code>boolean</code> | Use TypeScript for your projenrc file (`.projenrc.ts`). |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.projenrcTsOptions">projenrcTsOptions</a></code> | <code>projen.typescript.ProjenrcOptions</code> | Options for .projenrc.ts. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.projenTokenSecret">projenTokenSecret</a></code> | <code>string</code> | The name of a secret which includes a GitHub Personal Access Token to be used by projen workflows. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.projenVersion">projenVersion</a></code> | <code>string</code> | Version of projen to install. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.publishDryRun">publishDryRun</a></code> | <code>boolean</code> | Instead of actually publishing to package managers, just print the publishing command. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.publishTasks">publishTasks</a></code> | <code>boolean</code> | Define publishing tasks that can be executed manually as well as workflows. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.pullRequestTemplate">pullRequestTemplate</a></code> | <code>boolean</code> | Include a GitHub pull request template. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.pullRequestTemplateContents">pullRequestTemplateContents</a></code> | <code>string[]</code> | The contents of the pull request template. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.readme">readme</a></code> | <code><a href="#projen-modules.ReadmeOptions">ReadmeOptions</a></code> | Configuration of the README.md file. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.releasableCommits">releasableCommits</a></code> | <code>projen.ReleasableCommits</code> | Find commits that should be considered releasable Used to decide if a release is required. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.release">release</a></code> | <code>boolean</code> | Add release management to this project. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.releaseBranches">releaseBranches</a></code> | <code>{[ key: string ]: projen.release.BranchOptions}</code> | Defines additional release branches. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.releaseEnvironment">releaseEnvironment</a></code> | <code>string</code> | The GitHub Actions environment used for the release. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.releaseEveryCommit">releaseEveryCommit</a></code> | <code>boolean</code> | Automatically release new versions every commit to one of branches in `releaseBranches`. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.releaseFailureIssue">releaseFailureIssue</a></code> | <code>boolean</code> | Create a github issue on every failed publishing task. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.releaseFailureIssueLabel">releaseFailureIssueLabel</a></code> | <code>string</code> | The label to apply to issues indicating publish failures. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.releaseSchedule">releaseSchedule</a></code> | <code>string</code> | CRON schedule to trigger new releases. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.releaseTagPrefix">releaseTagPrefix</a></code> | <code>string</code> | Automatically add the given prefix to release tags. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.releaseToNpm">releaseToNpm</a></code> | <code>boolean</code> | Automatically release to npm when new versions are introduced. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.releaseTrigger">releaseTrigger</a></code> | <code>projen.release.ReleaseTrigger</code> | The release trigger to use. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.releaseWorkflow">releaseWorkflow</a></code> | <code>boolean</code> | DEPRECATED: renamed to `release`. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.releaseWorkflowEnv">releaseWorkflowEnv</a></code> | <code>{[ key: string ]: string}</code> | Build environment variables for release workflows. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.releaseWorkflowName">releaseWorkflowName</a></code> | <code>string</code> | The name of the default release workflow. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.releaseWorkflowSetupSteps">releaseWorkflowSetupSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | A set of workflow steps to execute in order to setup the workflow container. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.renovatebot">renovatebot</a></code> | <code>boolean</code> | Use renovatebot to handle dependency upgrades. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.renovatebotOptions">renovatebotOptions</a></code> | <code>projen.RenovatebotOptions</code> | Options for renovatebot. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.repository">repository</a></code> | <code>string</code> | The repository is the location where the actual code for your package lives. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.repositoryDirectory">repositoryDirectory</a></code> | <code>string</code> | If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.requireApproval">requireApproval</a></code> | <code>projen.awscdk.ApprovalLevel</code> | To protect you against unintended changes that affect your security posture, the AWS CDK Toolkit prompts you to approve security-related changes before deploying them. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.sampleCode">sampleCode</a></code> | <code>boolean</code> | Generate one-time sample in `src/` and `test/` if there are no files there. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.scopedPackagesOptions">scopedPackagesOptions</a></code> | <code>projen.javascript.ScopedPackagesOptions[]</code> | Options for privately hosted scoped packages. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.scripts">scripts</a></code> | <code>{[ key: string ]: string}</code> | npm scripts to include. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.srcdir">srcdir</a></code> | <code>string</code> | Typescript sources directory. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.stability">stability</a></code> | <code>string</code> | Package's Stability. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.stale">stale</a></code> | <code>boolean</code> | Auto-close of stale issues and pull request. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.staleOptions">staleOptions</a></code> | <code>projen.github.StaleOptions</code> | Auto-close stale issues and pull requests. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.testdir">testdir</a></code> | <code>string</code> | Jest tests directory. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.tsconfig">tsconfig</a></code> | <code>projen.javascript.TypescriptConfigOptions</code> | Custom TSConfig. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.tsconfigDev">tsconfigDev</a></code> | <code>projen.javascript.TypescriptConfigOptions</code> | Custom tsconfig options for the development tsconfig.json file (used for testing). |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.tsconfigDevFile">tsconfigDevFile</a></code> | <code>string</code> | The name of the development tsconfig.json file. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.tsJestOptions">tsJestOptions</a></code> | <code>projen.typescript.TsJestOptions</code> | Options for ts-jest. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.typescriptVersion">typescriptVersion</a></code> | <code>string</code> | TypeScript version to use. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.versionrcOptions">versionrcOptions</a></code> | <code>{[ key: string ]: any}</code> | Custom configuration used when creating changelog with commit-and-tag-version package. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.vscode">vscode</a></code> | <code>boolean</code> | Enable VSCode integration. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.watchExcludes">watchExcludes</a></code> | <code>string[]</code> | Glob patterns to exclude from `cdk watch`. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.watchIncludes">watchIncludes</a></code> | <code>string[]</code> | Glob patterns to include in `cdk watch`. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.workflowBootstrapSteps">workflowBootstrapSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | Workflow steps to use in order to bootstrap this repo. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.workflowContainerImage">workflowContainerImage</a></code> | <code>string</code> | Container image to use for GitHub workflows. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.workflowGitIdentity">workflowGitIdentity</a></code> | <code>projen.github.GitIdentity</code> | The git identity to use in workflows. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.workflowNodeVersion">workflowNodeVersion</a></code> | <code>string</code> | The node version used in GitHub Actions workflows. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.workflowPackageCache">workflowPackageCache</a></code> | <code>boolean</code> | Enable Node.js package cache in GitHub workflows. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.workflowRunsOn">workflowRunsOn</a></code> | <code>string[]</code> | Github Runner selection labels. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.workflowRunsOnGroup">workflowRunsOnGroup</a></code> | <code>projen.GroupRunnerOptions</code> | Github Runner Group selection options. |
| <code><a href="#projen-modules.CdkTypeScriptAppOptions.property.yarnBerryOptions">yarnBerryOptions</a></code> | <code>projen.javascript.YarnBerryOptions</code> | Options for Yarn Berry. |

---

##### `cdkVersion`<sup>Required</sup> <a name="cdkVersion" id="projen-modules.CdkTypeScriptAppOptions.property.cdkVersion"></a>

```typescript
public readonly cdkVersion: string;
```

- *Type:* string
- *Default:* "2.1.0"

Minimum version of the AWS CDK to depend on.

---

##### `codeOwners`<sup>Required</sup> <a name="codeOwners" id="projen-modules.CdkTypeScriptAppOptions.property.codeOwners"></a>

```typescript
public readonly codeOwners: string[];
```

- *Type:* string[]

List of teams used to generate the CODEOWNERS file.

---

##### `name`<sup>Required</sup> <a name="name" id="projen-modules.CdkTypeScriptAppOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* $BASEDIR

This is the name of your project.

---

##### `allowLibraryDependencies`<sup>Optional</sup> <a name="allowLibraryDependencies" id="projen-modules.CdkTypeScriptAppOptions.property.allowLibraryDependencies"></a>

```typescript
public readonly allowLibraryDependencies: boolean;
```

- *Type:* boolean
- *Default:* true

Allow the project to include `peerDependencies` and `bundledDependencies`.

This is normally only allowed for libraries. For apps, there's no meaning
for specifying these.

---

##### `app`<sup>Optional</sup> <a name="app" id="projen-modules.CdkTypeScriptAppOptions.property.app"></a>

```typescript
public readonly app: string;
```

- *Type:* string

The command line to execute in order to synthesize the CDK application (language specific).

---

##### `appEntrypoint`<sup>Optional</sup> <a name="appEntrypoint" id="projen-modules.CdkTypeScriptAppOptions.property.appEntrypoint"></a>

```typescript
public readonly appEntrypoint: string;
```

- *Type:* string
- *Default:* "main.ts"

The CDK app's entrypoint (relative to the source directory, which is "src" by default).

---

##### `artifactsDirectory`<sup>Optional</sup> <a name="artifactsDirectory" id="projen-modules.CdkTypeScriptAppOptions.property.artifactsDirectory"></a>

```typescript
public readonly artifactsDirectory: string;
```

- *Type:* string
- *Default:* "dist"

A directory which will contain build artifacts.

---

##### `authorEmail`<sup>Optional</sup> <a name="authorEmail" id="projen-modules.CdkTypeScriptAppOptions.property.authorEmail"></a>

```typescript
public readonly authorEmail: string;
```

- *Type:* string

Author's e-mail.

---

##### `authorName`<sup>Optional</sup> <a name="authorName" id="projen-modules.CdkTypeScriptAppOptions.property.authorName"></a>

```typescript
public readonly authorName: string;
```

- *Type:* string

Author's name.

---

##### `authorOrganization`<sup>Optional</sup> <a name="authorOrganization" id="projen-modules.CdkTypeScriptAppOptions.property.authorOrganization"></a>

```typescript
public readonly authorOrganization: boolean;
```

- *Type:* boolean

Is the author an organization.

---

##### `authorUrl`<sup>Optional</sup> <a name="authorUrl" id="projen-modules.CdkTypeScriptAppOptions.property.authorUrl"></a>

```typescript
public readonly authorUrl: string;
```

- *Type:* string

Author's URL / Website.

---

##### `autoApproveOptions`<sup>Optional</sup> <a name="autoApproveOptions" id="projen-modules.CdkTypeScriptAppOptions.property.autoApproveOptions"></a>

```typescript
public readonly autoApproveOptions: AutoApproveOptions;
```

- *Type:* projen.github.AutoApproveOptions
- *Default:* auto approve is disabled

Enable and configure the 'auto approve' workflow.

---

##### `autoApproveUpgrades`<sup>Optional</sup> <a name="autoApproveUpgrades" id="projen-modules.CdkTypeScriptAppOptions.property.autoApproveUpgrades"></a>

```typescript
public readonly autoApproveUpgrades: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically approve deps upgrade PRs, allowing them to be merged by mergify (if configued).

Throw if set to true but `autoApproveOptions` are not defined.

---

##### `autoDetectBin`<sup>Optional</sup> <a name="autoDetectBin" id="projen-modules.CdkTypeScriptAppOptions.property.autoDetectBin"></a>

```typescript
public readonly autoDetectBin: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section.

---

##### `autoMerge`<sup>Optional</sup> <a name="autoMerge" id="projen-modules.CdkTypeScriptAppOptions.property.autoMerge"></a>

```typescript
public readonly autoMerge: boolean;
```

- *Type:* boolean
- *Default:* true

Enable automatic merging on GitHub.

Has no effect if `github.mergify`
is set to false.

---

##### `autoMergeOptions`<sup>Optional</sup> <a name="autoMergeOptions" id="projen-modules.CdkTypeScriptAppOptions.property.autoMergeOptions"></a>

```typescript
public readonly autoMergeOptions: AutoMergeOptions;
```

- *Type:* projen.github.AutoMergeOptions
- *Default:* see defaults in `AutoMergeOptions`

Configure options for automatic merging on GitHub.

Has no effect if
`github.mergify` or `autoMerge` is set to false.

---

##### `bin`<sup>Optional</sup> <a name="bin" id="projen-modules.CdkTypeScriptAppOptions.property.bin"></a>

```typescript
public readonly bin: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Binary programs vended with your module.

You can use this option to add/customize how binaries are represented in
your `package.json`, but unless `autoDetectBin` is `false`, every
executable file under `bin` will automatically be added to this section.

---

##### `biome`<sup>Optional</sup> <a name="biome" id="projen-modules.CdkTypeScriptAppOptions.property.biome"></a>

```typescript
public readonly biome: boolean;
```

- *Type:* boolean
- *Default:* false

Setup Biome.

---

##### `biomeOptions`<sup>Optional</sup> <a name="biomeOptions" id="projen-modules.CdkTypeScriptAppOptions.property.biomeOptions"></a>

```typescript
public readonly biomeOptions: BiomeOptions;
```

- *Type:* projen.javascript.BiomeOptions
- *Default:* default options

Biome options.

---

##### `bugsEmail`<sup>Optional</sup> <a name="bugsEmail" id="projen-modules.CdkTypeScriptAppOptions.property.bugsEmail"></a>

```typescript
public readonly bugsEmail: string;
```

- *Type:* string

The email address to which issues should be reported.

---

##### `bugsUrl`<sup>Optional</sup> <a name="bugsUrl" id="projen-modules.CdkTypeScriptAppOptions.property.bugsUrl"></a>

```typescript
public readonly bugsUrl: string;
```

- *Type:* string

The url to your project's issue tracker.

---

##### `buildCommand`<sup>Optional</sup> <a name="buildCommand" id="projen-modules.CdkTypeScriptAppOptions.property.buildCommand"></a>

```typescript
public readonly buildCommand: string;
```

- *Type:* string
- *Default:* no build command

A command to execute before synthesis.

This command will be called when
running `cdk synth` or when `cdk watch` identifies a change in your source
code before redeployment.

---

##### `buildWorkflow`<sup>Optional</sup> <a name="buildWorkflow" id="projen-modules.CdkTypeScriptAppOptions.property.buildWorkflow"></a>

```typescript
public readonly buildWorkflow: boolean;
```

- *Type:* boolean
- *Default:* true if not a subproject

Define a GitHub workflow for building PRs.

---

##### `buildWorkflowOptions`<sup>Optional</sup> <a name="buildWorkflowOptions" id="projen-modules.CdkTypeScriptAppOptions.property.buildWorkflowOptions"></a>

```typescript
public readonly buildWorkflowOptions: BuildWorkflowOptions;
```

- *Type:* projen.javascript.BuildWorkflowOptions

Options for PR build workflow.

---

##### ~~`buildWorkflowTriggers`~~<sup>Optional</sup> <a name="buildWorkflowTriggers" id="projen-modules.CdkTypeScriptAppOptions.property.buildWorkflowTriggers"></a>

- *Deprecated:* - Use `buildWorkflowOptions.workflowTriggers`

```typescript
public readonly buildWorkflowTriggers: Triggers;
```

- *Type:* projen.github.workflows.Triggers
- *Default:* "{ pullRequest: {}, workflowDispatch: {} }"

Build workflow triggers.

---

##### `bumpPackage`<sup>Optional</sup> <a name="bumpPackage" id="projen-modules.CdkTypeScriptAppOptions.property.bumpPackage"></a>

```typescript
public readonly bumpPackage: string;
```

- *Type:* string
- *Default:* A recent version of "commit-and-tag-version"

The `commit-and-tag-version` compatible package used to bump the package version, as a dependency string.

This can be any compatible package version, including the deprecated `standard-version@9`.

---

##### `bundledDeps`<sup>Optional</sup> <a name="bundledDeps" id="projen-modules.CdkTypeScriptAppOptions.property.bundledDeps"></a>

```typescript
public readonly bundledDeps: string[];
```

- *Type:* string[]

List of dependencies to bundle into this module.

These modules will be
added both to the `dependencies` section and `bundledDependencies` section of
your `package.json`.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `yarn add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and
this will be what you `package.json` will eventually include.

---

##### `bundlerOptions`<sup>Optional</sup> <a name="bundlerOptions" id="projen-modules.CdkTypeScriptAppOptions.property.bundlerOptions"></a>

```typescript
public readonly bundlerOptions: BundlerOptions;
```

- *Type:* projen.javascript.BundlerOptions

Options for `Bundler`.

---

##### `bunVersion`<sup>Optional</sup> <a name="bunVersion" id="projen-modules.CdkTypeScriptAppOptions.property.bunVersion"></a>

```typescript
public readonly bunVersion: string;
```

- *Type:* string
- *Default:* "latest"

The version of Bun to use if using Bun as a package manager.

---

##### ~~`cdkAssert`~~<sup>Optional</sup> <a name="cdkAssert" id="projen-modules.CdkTypeScriptAppOptions.property.cdkAssert"></a>

- *Deprecated:* The

```typescript
public readonly cdkAssert: boolean;
```

- *Type:* boolean
- *Default:* will be included by default for AWS CDK >= 1.0.0 < 2.0.0

Warning: NodeJS only.

Install the

---

##### `cdkAssertions`<sup>Optional</sup> <a name="cdkAssertions" id="projen-modules.CdkTypeScriptAppOptions.property.cdkAssertions"></a>

```typescript
public readonly cdkAssertions: boolean;
```

- *Type:* boolean
- *Default:* will be included by default for AWS CDK >= 1.111.0 < 2.0.0

Install the assertions library?

Only needed for CDK 1.x. If using CDK 2.x then
assertions is already included in 'aws-cdk-lib'

---

##### `cdkCliVersion`<sup>Optional</sup> <a name="cdkCliVersion" id="projen-modules.CdkTypeScriptAppOptions.property.cdkCliVersion"></a>

```typescript
public readonly cdkCliVersion: string;
```

- *Type:* string
- *Default:* "^2"

Version range of the AWS CDK CLI to depend on.

Can be either a specific version, or an NPM version range.

By default, the latest 2.x version will be installed; you can use this
option to restrict it to a specific version or version range.

---

##### ~~`cdkDependencies`~~<sup>Optional</sup> <a name="cdkDependencies" id="projen-modules.CdkTypeScriptAppOptions.property.cdkDependencies"></a>

- *Deprecated:* For CDK 2.x use "deps" instead. (or "peerDeps" if you're building a library)

```typescript
public readonly cdkDependencies: string[];
```

- *Type:* string[]

Which AWS CDKv1 modules this project requires.

---

##### ~~`cdkDependenciesAsDeps`~~<sup>Optional</sup> <a name="cdkDependenciesAsDeps" id="projen-modules.CdkTypeScriptAppOptions.property.cdkDependenciesAsDeps"></a>

- *Deprecated:* Not supported in CDK v2.

```typescript
public readonly cdkDependenciesAsDeps: boolean;
```

- *Type:* boolean
- *Default:* true

If this is enabled (default), all modules declared in `cdkDependencies` will be also added as normal `dependencies` (as well as `peerDependencies`).

This is to ensure that downstream consumers actually have your CDK dependencies installed
when using npm < 7 or yarn, where peer dependencies are not automatically installed.
If this is disabled, `cdkDependencies` will be added to `devDependencies` to ensure
they are present during development.

Note: this setting only applies to construct library projects

---

##### `cdkout`<sup>Optional</sup> <a name="cdkout" id="projen-modules.CdkTypeScriptAppOptions.property.cdkout"></a>

```typescript
public readonly cdkout: string;
```

- *Type:* string
- *Default:* "cdk.out"

cdk.out directory.

---

##### ~~`cdkTestDependencies`~~<sup>Optional</sup> <a name="cdkTestDependencies" id="projen-modules.CdkTypeScriptAppOptions.property.cdkTestDependencies"></a>

- *Deprecated:* For CDK 2.x use 'devDeps' (in node.js projects) or 'testDeps' (in java projects) instead

```typescript
public readonly cdkTestDependencies: string[];
```

- *Type:* string[]

AWS CDK modules required for testing.

---

##### `cdkVersionPinning`<sup>Optional</sup> <a name="cdkVersionPinning" id="projen-modules.CdkTypeScriptAppOptions.property.cdkVersionPinning"></a>

```typescript
public readonly cdkVersionPinning: boolean;
```

- *Type:* boolean

Use pinned version instead of caret version for CDK.

You can use this to prevent mixed versions for your CDK dependencies and to prevent auto-updates.
If you use experimental features this will let you define the moment you include breaking changes.

---

##### `checkLicenses`<sup>Optional</sup> <a name="checkLicenses" id="projen-modules.CdkTypeScriptAppOptions.property.checkLicenses"></a>

```typescript
public readonly checkLicenses: LicenseCheckerOptions;
```

- *Type:* projen.javascript.LicenseCheckerOptions
- *Default:* no license checks are run during the build and all licenses will be accepted

Configure which licenses should be deemed acceptable for use by dependencies.

This setting will cause the build to fail, if any prohibited or not allowed licenses ares encountered.

---

##### `clobber`<sup>Optional</sup> <a name="clobber" id="projen-modules.CdkTypeScriptAppOptions.property.clobber"></a>

```typescript
public readonly clobber: boolean;
```

- *Type:* boolean
- *Default:* true, but false for subprojects

Add a `clobber` task which resets the repo to origin.

---

##### `codeArtifactOptions`<sup>Optional</sup> <a name="codeArtifactOptions" id="projen-modules.CdkTypeScriptAppOptions.property.codeArtifactOptions"></a>

```typescript
public readonly codeArtifactOptions: CodeArtifactOptions;
```

- *Type:* projen.javascript.CodeArtifactOptions
- *Default:* undefined

Options for npm packages using AWS CodeArtifact.

This is required if publishing packages to, or installing scoped packages from AWS CodeArtifact

---

##### `codeCov`<sup>Optional</sup> <a name="codeCov" id="projen-modules.CdkTypeScriptAppOptions.property.codeCov"></a>

```typescript
public readonly codeCov: boolean;
```

- *Type:* boolean
- *Default:* false

Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v5 By default, OIDC auth is used. Alternatively a token can be provided via `codeCovTokenSecret`.

---

##### `codeCovTokenSecret`<sup>Optional</sup> <a name="codeCovTokenSecret" id="projen-modules.CdkTypeScriptAppOptions.property.codeCovTokenSecret"></a>

```typescript
public readonly codeCovTokenSecret: string;
```

- *Type:* string
- *Default:* OIDC auth is used

Define the secret name for a specified https://codecov.io/ token.

---

##### `commitGenerated`<sup>Optional</sup> <a name="commitGenerated" id="projen-modules.CdkTypeScriptAppOptions.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean
- *Default:* true

Whether to commit the managed files by default.

---

##### `constructsVersion`<sup>Optional</sup> <a name="constructsVersion" id="projen-modules.CdkTypeScriptAppOptions.property.constructsVersion"></a>

```typescript
public readonly constructsVersion: string;
```

- *Type:* string
- *Default:* for CDK 1.x the default is "3.2.27", for CDK 2.x the default is "10.0.5".

Minimum version of the `constructs` library to depend on.

---

##### `context`<sup>Optional</sup> <a name="context" id="projen-modules.CdkTypeScriptAppOptions.property.context"></a>

```typescript
public readonly context: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}
- *Default:* no additional context

Additional context to include in `cdk.json`.

---

##### `copyrightOwner`<sup>Optional</sup> <a name="copyrightOwner" id="projen-modules.CdkTypeScriptAppOptions.property.copyrightOwner"></a>

```typescript
public readonly copyrightOwner: string;
```

- *Type:* string
- *Default:* defaults to the value of authorName or "" if `authorName` is undefined.

License copyright owner.

---

##### `copyrightPeriod`<sup>Optional</sup> <a name="copyrightPeriod" id="projen-modules.CdkTypeScriptAppOptions.property.copyrightPeriod"></a>

```typescript
public readonly copyrightPeriod: string;
```

- *Type:* string
- *Default:* current year

The copyright years to put in the LICENSE file.

---

##### `defaultReleaseBranch`<sup>Optional</sup> <a name="defaultReleaseBranch" id="projen-modules.CdkTypeScriptAppOptions.property.defaultReleaseBranch"></a>

```typescript
public readonly defaultReleaseBranch: string;
```

- *Type:* string
- *Default:* "main"

The name of the main release branch.

---

##### `dependabot`<sup>Optional</sup> <a name="dependabot" id="projen-modules.CdkTypeScriptAppOptions.property.dependabot"></a>

```typescript
public readonly dependabot: boolean;
```

- *Type:* boolean
- *Default:* false

Use dependabot to handle dependency upgrades.

Cannot be used in conjunction with `depsUpgrade`.

---

##### `dependabotOptions`<sup>Optional</sup> <a name="dependabotOptions" id="projen-modules.CdkTypeScriptAppOptions.property.dependabotOptions"></a>

```typescript
public readonly dependabotOptions: DependabotOptions;
```

- *Type:* projen.github.DependabotOptions
- *Default:* default options

Options for dependabot.

---

##### `deps`<sup>Optional</sup> <a name="deps" id="projen-modules.CdkTypeScriptAppOptions.property.deps"></a>

```typescript
public readonly deps: string[];
```

- *Type:* string[]
- *Default:* []

Runtime dependencies of this module.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `yarn add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and
this will be what you `package.json` will eventually include.

---

##### `depsUpgrade`<sup>Optional</sup> <a name="depsUpgrade" id="projen-modules.CdkTypeScriptAppOptions.property.depsUpgrade"></a>

```typescript
public readonly depsUpgrade: boolean;
```

- *Type:* boolean
- *Default:* true

Use tasks and github workflows to handle dependency upgrades.

Cannot be used in conjunction with `dependabot`.

---

##### `depsUpgradeOptions`<sup>Optional</sup> <a name="depsUpgradeOptions" id="projen-modules.CdkTypeScriptAppOptions.property.depsUpgradeOptions"></a>

```typescript
public readonly depsUpgradeOptions: UpgradeDependenciesOptions;
```

- *Type:* projen.javascript.UpgradeDependenciesOptions
- *Default:* default options

Options for `UpgradeDependencies`.

---

##### `description`<sup>Optional</sup> <a name="description" id="projen-modules.CdkTypeScriptAppOptions.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description is just a string that helps people understand the purpose of the package.

It can be used when searching for packages in a package manager as well.
See https://classic.yarnpkg.com/en/docs/package-json/#toc-description

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="projen-modules.CdkTypeScriptAppOptions.property.devContainer"></a>

```typescript
public readonly devContainer: boolean;
```

- *Type:* boolean
- *Default:* false

Add a VSCode development environment (used for GitHub Codespaces).

---

##### `devDeps`<sup>Optional</sup> <a name="devDeps" id="projen-modules.CdkTypeScriptAppOptions.property.devDeps"></a>

```typescript
public readonly devDeps: string[];
```

- *Type:* string[]
- *Default:* []

Build dependencies for this module.

These dependencies will only be
available in your build environment but will not be fetched when this
module is consumed.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `yarn add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and
this will be what you `package.json` will eventually include.

---

##### `disableTsconfig`<sup>Optional</sup> <a name="disableTsconfig" id="projen-modules.CdkTypeScriptAppOptions.property.disableTsconfig"></a>

```typescript
public readonly disableTsconfig: boolean;
```

- *Type:* boolean
- *Default:* false

Do not generate a `tsconfig.json` file (used by jsii projects since tsconfig.json is generated by the jsii compiler).

---

##### `disableTsconfigDev`<sup>Optional</sup> <a name="disableTsconfigDev" id="projen-modules.CdkTypeScriptAppOptions.property.disableTsconfigDev"></a>

```typescript
public readonly disableTsconfigDev: boolean;
```

- *Type:* boolean
- *Default:* false

Do not generate a `tsconfig.dev.json` file.

---

##### `docgen`<sup>Optional</sup> <a name="docgen" id="projen-modules.CdkTypeScriptAppOptions.property.docgen"></a>

```typescript
public readonly docgen: boolean;
```

- *Type:* boolean
- *Default:* false

Docgen by Typedoc.

---

##### `docsDirectory`<sup>Optional</sup> <a name="docsDirectory" id="projen-modules.CdkTypeScriptAppOptions.property.docsDirectory"></a>

```typescript
public readonly docsDirectory: string;
```

- *Type:* string
- *Default:* "docs"

Docs directory.

---

##### `edgeLambdaAutoDiscover`<sup>Optional</sup> <a name="edgeLambdaAutoDiscover" id="projen-modules.CdkTypeScriptAppOptions.property.edgeLambdaAutoDiscover"></a>

```typescript
public readonly edgeLambdaAutoDiscover: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically adds an `cloudfront.experimental.EdgeFunction` for each `.edge-lambda.ts` handler in your source tree. If this is disabled, you can manually add an `awscdk.AutoDiscover` component to your project.

---

##### `entrypoint`<sup>Optional</sup> <a name="entrypoint" id="projen-modules.CdkTypeScriptAppOptions.property.entrypoint"></a>

```typescript
public readonly entrypoint: string;
```

- *Type:* string
- *Default:* "lib/index.js"

Module entrypoint (`main` in `package.json`). Set to an empty string to not include `main` in your package.json.

---

##### `entrypointTypes`<sup>Optional</sup> <a name="entrypointTypes" id="projen-modules.CdkTypeScriptAppOptions.property.entrypointTypes"></a>

```typescript
public readonly entrypointTypes: string;
```

- *Type:* string
- *Default:* .d.ts file derived from the project's entrypoint (usually lib/index.d.ts)

The .d.ts file that includes the type declarations for this module.

---

##### `eslint`<sup>Optional</sup> <a name="eslint" id="projen-modules.CdkTypeScriptAppOptions.property.eslint"></a>

```typescript
public readonly eslint: boolean;
```

- *Type:* boolean
- *Default:* true, unless biome is enabled

Setup eslint.

---

##### `eslintOptions`<sup>Optional</sup> <a name="eslintOptions" id="projen-modules.CdkTypeScriptAppOptions.property.eslintOptions"></a>

```typescript
public readonly eslintOptions: EslintOptions;
```

- *Type:* projen.javascript.EslintOptions
- *Default:* opinionated default options

Eslint options.

---

##### `experimentalIntegRunner`<sup>Optional</sup> <a name="experimentalIntegRunner" id="projen-modules.CdkTypeScriptAppOptions.property.experimentalIntegRunner"></a>

```typescript
public readonly experimentalIntegRunner: boolean;
```

- *Type:* boolean
- *Default:* false

Enable experimental support for the AWS CDK integ-runner.

---

##### `featureFlags`<sup>Optional</sup> <a name="featureFlags" id="projen-modules.CdkTypeScriptAppOptions.property.featureFlags"></a>

```typescript
public readonly featureFlags: ICdkFeatureFlags;
```

- *Type:* projen.awscdk.ICdkFeatureFlags
- *Default:* no feature flags are enabled by default

Feature flags that should be enabled in `cdk.json`. Make sure to double-check any changes to feature flags in `cdk.json` before deploying. Unexpected changes may cause breaking changes in your CDK app. You can overwrite any feature flag by passing it into the context field.

---

##### `github`<sup>Optional</sup> <a name="github" id="projen-modules.CdkTypeScriptAppOptions.property.github"></a>

```typescript
public readonly github: boolean;
```

- *Type:* boolean
- *Default:* true

Enable GitHub integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `githubOptions`<sup>Optional</sup> <a name="githubOptions" id="projen-modules.CdkTypeScriptAppOptions.property.githubOptions"></a>

```typescript
public readonly githubOptions: GitHubOptions;
```

- *Type:* projen.github.GitHubOptions
- *Default:* see GitHubOptions

Options for GitHub integration.

---

##### `gitignore`<sup>Optional</sup> <a name="gitignore" id="projen-modules.CdkTypeScriptAppOptions.property.gitignore"></a>

```typescript
public readonly gitignore: string[];
```

- *Type:* string[]

Additional entries to .gitignore.

---

##### `gitIgnoreOptions`<sup>Optional</sup> <a name="gitIgnoreOptions" id="projen-modules.CdkTypeScriptAppOptions.property.gitIgnoreOptions"></a>

```typescript
public readonly gitIgnoreOptions: IgnoreFileOptions;
```

- *Type:* projen.IgnoreFileOptions

Configuration options for .gitignore file.

---

##### `gitOptions`<sup>Optional</sup> <a name="gitOptions" id="projen-modules.CdkTypeScriptAppOptions.property.gitOptions"></a>

```typescript
public readonly gitOptions: GitOptions;
```

- *Type:* projen.GitOptions

Configuration options for git.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="projen-modules.CdkTypeScriptAppOptions.property.gitpod"></a>

```typescript
public readonly gitpod: boolean;
```

- *Type:* boolean
- *Default:* false

Add a Gitpod development environment.

---

##### `homepage`<sup>Optional</sup> <a name="homepage" id="projen-modules.CdkTypeScriptAppOptions.property.homepage"></a>

```typescript
public readonly homepage: string;
```

- *Type:* string

Package's Homepage / Website.

---

##### `integrationTestAutoDiscover`<sup>Optional</sup> <a name="integrationTestAutoDiscover" id="projen-modules.CdkTypeScriptAppOptions.property.integrationTestAutoDiscover"></a>

```typescript
public readonly integrationTestAutoDiscover: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically discovers and creates integration tests for each `.integ.ts` file in under your test directory.

---

##### `jest`<sup>Optional</sup> <a name="jest" id="projen-modules.CdkTypeScriptAppOptions.property.jest"></a>

```typescript
public readonly jest: boolean;
```

- *Type:* boolean
- *Default:* true

Setup jest unit tests.

---

##### `jestOptions`<sup>Optional</sup> <a name="jestOptions" id="projen-modules.CdkTypeScriptAppOptions.property.jestOptions"></a>

```typescript
public readonly jestOptions: JestOptions;
```

- *Type:* projen.javascript.JestOptions
- *Default:* default options

Jest options.

---

##### `jsiiReleaseVersion`<sup>Optional</sup> <a name="jsiiReleaseVersion" id="projen-modules.CdkTypeScriptAppOptions.property.jsiiReleaseVersion"></a>

```typescript
public readonly jsiiReleaseVersion: string;
```

- *Type:* string
- *Default:* "latest"

Version requirement of `publib` which is used to publish modules to npm.

---

##### `keywords`<sup>Optional</sup> <a name="keywords" id="projen-modules.CdkTypeScriptAppOptions.property.keywords"></a>

```typescript
public readonly keywords: string[];
```

- *Type:* string[]

Keywords to include in `package.json`.

---

##### `lambdaAutoDiscover`<sup>Optional</sup> <a name="lambdaAutoDiscover" id="projen-modules.CdkTypeScriptAppOptions.property.lambdaAutoDiscover"></a>

```typescript
public readonly lambdaAutoDiscover: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically adds an `awscdk.LambdaFunction` for each `.lambda.ts` handler in your source tree. If this is disabled, you can manually add an `awscdk.AutoDiscover` component to your project.

---

##### `lambdaExtensionAutoDiscover`<sup>Optional</sup> <a name="lambdaExtensionAutoDiscover" id="projen-modules.CdkTypeScriptAppOptions.property.lambdaExtensionAutoDiscover"></a>

```typescript
public readonly lambdaExtensionAutoDiscover: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically adds an `awscdk.LambdaExtension` for each `.lambda-extension.ts` entrypoint in your source tree. If this is disabled, you can manually add an `awscdk.AutoDiscover` component to your project.

---

##### `lambdaOptions`<sup>Optional</sup> <a name="lambdaOptions" id="projen-modules.CdkTypeScriptAppOptions.property.lambdaOptions"></a>

```typescript
public readonly lambdaOptions: LambdaFunctionCommonOptions;
```

- *Type:* projen.awscdk.LambdaFunctionCommonOptions
- *Default:* default options

Common options for all AWS Lambda functions.

---

##### `libdir`<sup>Optional</sup> <a name="libdir" id="projen-modules.CdkTypeScriptAppOptions.property.libdir"></a>

```typescript
public readonly libdir: string;
```

- *Type:* string
- *Default:* "lib"

Typescript  artifacts output directory.

---

##### `license`<sup>Optional</sup> <a name="license" id="projen-modules.CdkTypeScriptAppOptions.property.license"></a>

```typescript
public readonly license: string;
```

- *Type:* string
- *Default:* "Apache-2.0"

License's SPDX identifier.

See https://github.com/projen/projen/tree/main/license-text for a list of supported licenses.
Use the `licensed` option if you want to no license to be specified.

---

##### `licensed`<sup>Optional</sup> <a name="licensed" id="projen-modules.CdkTypeScriptAppOptions.property.licensed"></a>

```typescript
public readonly licensed: boolean;
```

- *Type:* boolean
- *Default:* true

Indicates if a license should be added.

---

##### `logging`<sup>Optional</sup> <a name="logging" id="projen-modules.CdkTypeScriptAppOptions.property.logging"></a>

```typescript
public readonly logging: LoggerOptions;
```

- *Type:* projen.LoggerOptions
- *Default:* {}

Configure logging options such as verbosity.

---

##### `majorVersion`<sup>Optional</sup> <a name="majorVersion" id="projen-modules.CdkTypeScriptAppOptions.property.majorVersion"></a>

```typescript
public readonly majorVersion: number;
```

- *Type:* number
- *Default:* Major version is not enforced.

Major version to release from the default branch.

If this is specified, we bump the latest version of this major version line.
If not specified, we bump the global latest version.

---

##### `maxNodeVersion`<sup>Optional</sup> <a name="maxNodeVersion" id="projen-modules.CdkTypeScriptAppOptions.property.maxNodeVersion"></a>

```typescript
public readonly maxNodeVersion: string;
```

- *Type:* string
- *Default:* no maximum version is enforced

The maximum node version supported by this package.

Most projects should not use this option.
The value indicates that the package is incompatible with any newer versions of node.
This requirement is enforced via the engines field.

You will normally not need to set this option.
Consider this option only if your package is known to not function with newer versions of node.

---

##### ~~`mergify`~~<sup>Optional</sup> <a name="mergify" id="projen-modules.CdkTypeScriptAppOptions.property.mergify"></a>

- *Deprecated:* use `githubOptions.mergify` instead

```typescript
public readonly mergify: boolean;
```

- *Type:* boolean
- *Default:* true

Whether mergify should be enabled on this repository or not.

---

##### ~~`mergifyOptions`~~<sup>Optional</sup> <a name="mergifyOptions" id="projen-modules.CdkTypeScriptAppOptions.property.mergifyOptions"></a>

- *Deprecated:* use `githubOptions.mergifyOptions` instead

```typescript
public readonly mergifyOptions: MergifyOptions;
```

- *Type:* projen.github.MergifyOptions
- *Default:* default options

Options for mergify.

---

##### `minMajorVersion`<sup>Optional</sup> <a name="minMajorVersion" id="projen-modules.CdkTypeScriptAppOptions.property.minMajorVersion"></a>

```typescript
public readonly minMajorVersion: number;
```

- *Type:* number
- *Default:* No minimum version is being enforced

Minimal Major version to release.

This can be useful to set to 1, as breaking changes before the 1.x major
release are not incrementing the major version number.

Can not be set together with `majorVersion`.

---

##### `minNodeVersion`<sup>Optional</sup> <a name="minNodeVersion" id="projen-modules.CdkTypeScriptAppOptions.property.minNodeVersion"></a>

```typescript
public readonly minNodeVersion: string;
```

- *Type:* string
- *Default:* no minimum version is enforced

The minimum node version required by this package to function.

Most projects should not use this option.
The value indicates that the package is incompatible with any older versions of node.
This requirement is enforced via the engines field.

You will normally not need to set this option, even if your package is incompatible with EOL versions of node.
Consider this option only if your package depends on a specific feature, that is not available in other LTS versions.
Setting this option has very high impact on the consumers of your package,
as package managers will actively prevent usage with node versions you have marked as incompatible.

To change the node version of your CI/CD workflows, use `workflowNodeVersion`.

---

##### ~~`mutableBuild`~~<sup>Optional</sup> <a name="mutableBuild" id="projen-modules.CdkTypeScriptAppOptions.property.mutableBuild"></a>

- *Deprecated:* - Use `buildWorkflowOptions.mutableBuild`

```typescript
public readonly mutableBuild: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically update files modified during builds to pull-request branches.

This means
that any files synthesized by projen or e.g. test snapshots will always be up-to-date
before a PR is merged.

Implies that PR builds do not have anti-tamper checks.

---

##### `nextVersionCommand`<sup>Optional</sup> <a name="nextVersionCommand" id="projen-modules.CdkTypeScriptAppOptions.property.nextVersionCommand"></a>

```typescript
public readonly nextVersionCommand: string;
```

- *Type:* string
- *Default:* The next version will be determined based on the commit history and project settings.

A shell command to control the next version to release.

If present, this shell command will be run before the bump is executed, and
it determines what version to release. It will be executed in the following
environment:

- Working directory: the project directory.
- `$VERSION`: the current version. Looks like `1.2.3`.
- `$LATEST_TAG`: the most recent tag. Looks like `prefix-v1.2.3`, or may be unset.
- `$SUGGESTED_BUMP`: the suggested bump action based on commits. One of `major|minor|patch|none`.

The command should print one of the following to `stdout`:

- Nothing: the next version number will be determined based on commit history.
- `x.y.z`: the next version number will be `x.y.z`.
- `major|minor|patch`: the next version number will be the current version number
  with the indicated component bumped.

This setting cannot be specified together with `minMajorVersion`; the invoked
script can be used to achieve the effects of `minMajorVersion`.

---

##### `npmAccess`<sup>Optional</sup> <a name="npmAccess" id="projen-modules.CdkTypeScriptAppOptions.property.npmAccess"></a>

```typescript
public readonly npmAccess: NpmAccess;
```

- *Type:* projen.javascript.NpmAccess
- *Default:* for scoped packages (e.g. `foo@bar`), the default is `NpmAccess.RESTRICTED`, for non-scoped packages, the default is `NpmAccess.PUBLIC`.

Access level of the npm package.

---

##### `npmDistTag`<sup>Optional</sup> <a name="npmDistTag" id="projen-modules.CdkTypeScriptAppOptions.property.npmDistTag"></a>

```typescript
public readonly npmDistTag: string;
```

- *Type:* string
- *Default:* "latest"

The npmDistTag to use when publishing from the default branch.

To set the npm dist-tag for release branches, set the `npmDistTag` property
for each branch.

---

##### ~~`npmignore`~~<sup>Optional</sup> <a name="npmignore" id="projen-modules.CdkTypeScriptAppOptions.property.npmignore"></a>

- *Deprecated:* - use `project.addPackageIgnore`

```typescript
public readonly npmignore: string[];
```

- *Type:* string[]

Additional entries to .npmignore.

---

##### `npmignoreEnabled`<sup>Optional</sup> <a name="npmignoreEnabled" id="projen-modules.CdkTypeScriptAppOptions.property.npmignoreEnabled"></a>

```typescript
public readonly npmignoreEnabled: boolean;
```

- *Type:* boolean
- *Default:* true

Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs.

---

##### `npmIgnoreOptions`<sup>Optional</sup> <a name="npmIgnoreOptions" id="projen-modules.CdkTypeScriptAppOptions.property.npmIgnoreOptions"></a>

```typescript
public readonly npmIgnoreOptions: IgnoreFileOptions;
```

- *Type:* projen.IgnoreFileOptions

Configuration options for .npmignore file.

---

##### `npmProvenance`<sup>Optional</sup> <a name="npmProvenance" id="projen-modules.CdkTypeScriptAppOptions.property.npmProvenance"></a>

```typescript
public readonly npmProvenance: boolean;
```

- *Type:* boolean
- *Default:* true for public packages, false otherwise

Should provenance statements be generated when the package is published.

A supported package manager is required to publish a package with npm provenance statements and
you will need to use a supported CI/CD provider.

Note that the projen `Release` and `Publisher` components are using `publib` to publish packages,
which is using npm internally and supports provenance statements independently of the package manager used.

---

##### ~~`npmRegistry`~~<sup>Optional</sup> <a name="npmRegistry" id="projen-modules.CdkTypeScriptAppOptions.property.npmRegistry"></a>

- *Deprecated:* use `npmRegistryUrl` instead

```typescript
public readonly npmRegistry: string;
```

- *Type:* string

The host name of the npm registry to publish to.

Cannot be set together with `npmRegistryUrl`.

---

##### `npmRegistryUrl`<sup>Optional</sup> <a name="npmRegistryUrl" id="projen-modules.CdkTypeScriptAppOptions.property.npmRegistryUrl"></a>

```typescript
public readonly npmRegistryUrl: string;
```

- *Type:* string
- *Default:* "https://registry.npmjs.org"

The base URL of the npm package registry.

Must be a URL (e.g. start with "https://" or "http://")

---

##### `npmTokenSecret`<sup>Optional</sup> <a name="npmTokenSecret" id="projen-modules.CdkTypeScriptAppOptions.property.npmTokenSecret"></a>

```typescript
public readonly npmTokenSecret: string;
```

- *Type:* string
- *Default:* "NPM_TOKEN"

GitHub secret which contains the NPM token to use when publishing packages.

---

##### `npmTrustedPublishing`<sup>Optional</sup> <a name="npmTrustedPublishing" id="projen-modules.CdkTypeScriptAppOptions.property.npmTrustedPublishing"></a>

```typescript
public readonly npmTrustedPublishing: boolean;
```

- *Type:* boolean
- *Default:* false

Use trusted publishing for publishing to npmjs.com Needs to be pre-configured on npm.js to work.

---

##### `outdir`<sup>Optional</sup> <a name="outdir" id="projen-modules.CdkTypeScriptAppOptions.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string
- *Default:* "."

The root directory of the project. Relative to this directory, all files are synthesized.

If this project has a parent, this directory is relative to the parent
directory and it cannot be the same as the parent or any of it's other
subprojects.

---

##### `package`<sup>Optional</sup> <a name="package" id="projen-modules.CdkTypeScriptAppOptions.property.package"></a>

```typescript
public readonly package: boolean;
```

- *Type:* boolean
- *Default:* true

Defines a `package` task that will produce an npm tarball under the artifacts directory (e.g. `dist`).

---

##### `packageManager`<sup>Optional</sup> <a name="packageManager" id="projen-modules.CdkTypeScriptAppOptions.property.packageManager"></a>

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* projen.javascript.NodePackageManager
- *Default:* NodePackageManager.YARN_CLASSIC

The Node Package Manager used to execute scripts.

---

##### `packageName`<sup>Optional</sup> <a name="packageName" id="projen-modules.CdkTypeScriptAppOptions.property.packageName"></a>

```typescript
public readonly packageName: string;
```

- *Type:* string
- *Default:* defaults to project name

The "name" in package.json.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="projen-modules.CdkTypeScriptAppOptions.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

The parent project, if this project is part of a bigger project.

---

##### `peerDependencyOptions`<sup>Optional</sup> <a name="peerDependencyOptions" id="projen-modules.CdkTypeScriptAppOptions.property.peerDependencyOptions"></a>

```typescript
public readonly peerDependencyOptions: PeerDependencyOptions;
```

- *Type:* projen.javascript.PeerDependencyOptions

Options for `peerDeps`.

---

##### `peerDeps`<sup>Optional</sup> <a name="peerDeps" id="projen-modules.CdkTypeScriptAppOptions.property.peerDeps"></a>

```typescript
public readonly peerDeps: string[];
```

- *Type:* string[]
- *Default:* []

Peer dependencies for this module.

Dependencies listed here are required to
be installed (and satisfied) by the _consumer_ of this library. Using peer
dependencies allows you to ensure that only a single module of a certain
library exists in the `node_modules` tree of your consumers.

Note that prior to npm@7, peer dependencies are _not_ automatically
installed, which means that adding peer dependencies to a library will be a
breaking change for your customers.

Unless `peerDependencyOptions.pinnedDevDependency` is disabled (it is
enabled by default), projen will automatically add a dev dependency with a
pinned version for each peer dependency. This will ensure that you build &
test your module against the lowest peer version required.

---

##### `pnpmVersion`<sup>Optional</sup> <a name="pnpmVersion" id="projen-modules.CdkTypeScriptAppOptions.property.pnpmVersion"></a>

```typescript
public readonly pnpmVersion: string;
```

- *Type:* string
- *Default:* "9"

The version of PNPM to use if using PNPM as a package manager.

---

##### `postBuildSteps`<sup>Optional</sup> <a name="postBuildSteps" id="projen-modules.CdkTypeScriptAppOptions.property.postBuildSteps"></a>

```typescript
public readonly postBuildSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]
- *Default:* []

Steps to execute after build as part of the release workflow.

---

##### `prerelease`<sup>Optional</sup> <a name="prerelease" id="projen-modules.CdkTypeScriptAppOptions.property.prerelease"></a>

```typescript
public readonly prerelease: string;
```

- *Type:* string
- *Default:* normal semantic versions

Bump versions from the default branch as pre-releases (e.g. "beta", "alpha", "pre").

---

##### `prettier`<sup>Optional</sup> <a name="prettier" id="projen-modules.CdkTypeScriptAppOptions.property.prettier"></a>

```typescript
public readonly prettier: boolean;
```

- *Type:* boolean
- *Default:* false

Setup prettier.

---

##### `prettierOptions`<sup>Optional</sup> <a name="prettierOptions" id="projen-modules.CdkTypeScriptAppOptions.property.prettierOptions"></a>

```typescript
public readonly prettierOptions: PrettierOptions;
```

- *Type:* projen.javascript.PrettierOptions
- *Default:* default options

Prettier options.

---

##### ~~`projectType`~~<sup>Optional</sup> <a name="projectType" id="projen-modules.CdkTypeScriptAppOptions.property.projectType"></a>

- *Deprecated:* no longer supported at the base project level

```typescript
public readonly projectType: ProjectType;
```

- *Type:* projen.ProjectType
- *Default:* ProjectType.UNKNOWN

Which type of project this is (library/app).

---

##### `projenCommand`<sup>Optional</sup> <a name="projenCommand" id="projen-modules.CdkTypeScriptAppOptions.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string
- *Default:* "npx projen"

The shell command to use in order to run the projen CLI.

Can be used to customize in special environments.

---

##### `projenCredentials`<sup>Optional</sup> <a name="projenCredentials" id="projen-modules.CdkTypeScriptAppOptions.property.projenCredentials"></a>

```typescript
public readonly projenCredentials: GithubCredentials;
```

- *Type:* projen.github.GithubCredentials
- *Default:* use a personal access token named PROJEN_GITHUB_TOKEN

Choose a method of providing GitHub API access for projen workflows.

---

##### `projenDevDependency`<sup>Optional</sup> <a name="projenDevDependency" id="projen-modules.CdkTypeScriptAppOptions.property.projenDevDependency"></a>

```typescript
public readonly projenDevDependency: boolean;
```

- *Type:* boolean
- *Default:* true if not a subproject

Indicates of "projen" should be installed as a devDependency.

---

##### `projenrcJs`<sup>Optional</sup> <a name="projenrcJs" id="projen-modules.CdkTypeScriptAppOptions.property.projenrcJs"></a>

```typescript
public readonly projenrcJs: boolean;
```

- *Type:* boolean
- *Default:* true if projenrcJson is false

Generate (once) .projenrc.js (in JavaScript). Set to `false` in order to disable .projenrc.js generation.

---

##### `projenrcJson`<sup>Optional</sup> <a name="projenrcJson" id="projen-modules.CdkTypeScriptAppOptions.property.projenrcJson"></a>

```typescript
public readonly projenrcJson: boolean;
```

- *Type:* boolean
- *Default:* false

Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation.

---

##### `projenrcJsonOptions`<sup>Optional</sup> <a name="projenrcJsonOptions" id="projen-modules.CdkTypeScriptAppOptions.property.projenrcJsonOptions"></a>

```typescript
public readonly projenrcJsonOptions: ProjenrcJsonOptions;
```

- *Type:* projen.ProjenrcJsonOptions
- *Default:* default options

Options for .projenrc.json.

---

##### `projenrcJsOptions`<sup>Optional</sup> <a name="projenrcJsOptions" id="projen-modules.CdkTypeScriptAppOptions.property.projenrcJsOptions"></a>

```typescript
public readonly projenrcJsOptions: ProjenrcOptions;
```

- *Type:* projen.javascript.ProjenrcOptions
- *Default:* default options

Options for .projenrc.js.

---

##### `projenrcTs`<sup>Optional</sup> <a name="projenrcTs" id="projen-modules.CdkTypeScriptAppOptions.property.projenrcTs"></a>

```typescript
public readonly projenrcTs: boolean;
```

- *Type:* boolean
- *Default:* false

Use TypeScript for your projenrc file (`.projenrc.ts`).

---

##### `projenrcTsOptions`<sup>Optional</sup> <a name="projenrcTsOptions" id="projen-modules.CdkTypeScriptAppOptions.property.projenrcTsOptions"></a>

```typescript
public readonly projenrcTsOptions: ProjenrcOptions;
```

- *Type:* projen.typescript.ProjenrcOptions

Options for .projenrc.ts.

---

##### ~~`projenTokenSecret`~~<sup>Optional</sup> <a name="projenTokenSecret" id="projen-modules.CdkTypeScriptAppOptions.property.projenTokenSecret"></a>

- *Deprecated:* use `projenCredentials`

```typescript
public readonly projenTokenSecret: string;
```

- *Type:* string
- *Default:* "PROJEN_GITHUB_TOKEN"

The name of a secret which includes a GitHub Personal Access Token to be used by projen workflows.

This token needs to have the `repo`, `workflows`
and `packages` scope.

---

##### `projenVersion`<sup>Optional</sup> <a name="projenVersion" id="projen-modules.CdkTypeScriptAppOptions.property.projenVersion"></a>

```typescript
public readonly projenVersion: string;
```

- *Type:* string
- *Default:* Defaults to the latest version.

Version of projen to install.

---

##### `publishDryRun`<sup>Optional</sup> <a name="publishDryRun" id="projen-modules.CdkTypeScriptAppOptions.property.publishDryRun"></a>

```typescript
public readonly publishDryRun: boolean;
```

- *Type:* boolean
- *Default:* false

Instead of actually publishing to package managers, just print the publishing command.

---

##### `publishTasks`<sup>Optional</sup> <a name="publishTasks" id="projen-modules.CdkTypeScriptAppOptions.property.publishTasks"></a>

```typescript
public readonly publishTasks: boolean;
```

- *Type:* boolean
- *Default:* false

Define publishing tasks that can be executed manually as well as workflows.

Normally, publishing only happens within automated workflows. Enable this
in order to create a publishing task for each publishing activity.

---

##### `pullRequestTemplate`<sup>Optional</sup> <a name="pullRequestTemplate" id="projen-modules.CdkTypeScriptAppOptions.property.pullRequestTemplate"></a>

```typescript
public readonly pullRequestTemplate: boolean;
```

- *Type:* boolean
- *Default:* true

Include a GitHub pull request template.

---

##### `pullRequestTemplateContents`<sup>Optional</sup> <a name="pullRequestTemplateContents" id="projen-modules.CdkTypeScriptAppOptions.property.pullRequestTemplateContents"></a>

```typescript
public readonly pullRequestTemplateContents: string[];
```

- *Type:* string[]
- *Default:* default content

The contents of the pull request template.

---

##### `readme`<sup>Optional</sup> <a name="readme" id="projen-modules.CdkTypeScriptAppOptions.property.readme"></a>

```typescript
public readonly readme: ReadmeOptions;
```

- *Type:* <a href="#projen-modules.ReadmeOptions">ReadmeOptions</a>

Configuration of the README.md file.

---

##### `releasableCommits`<sup>Optional</sup> <a name="releasableCommits" id="projen-modules.CdkTypeScriptAppOptions.property.releasableCommits"></a>

```typescript
public readonly releasableCommits: ReleasableCommits;
```

- *Type:* projen.ReleasableCommits
- *Default:* ReleasableCommits.everyCommit()

Find commits that should be considered releasable Used to decide if a release is required.

---

##### `release`<sup>Optional</sup> <a name="release" id="projen-modules.CdkTypeScriptAppOptions.property.release"></a>

```typescript
public readonly release: boolean;
```

- *Type:* boolean
- *Default:* true (false for subprojects)

Add release management to this project.

---

##### `releaseBranches`<sup>Optional</sup> <a name="releaseBranches" id="projen-modules.CdkTypeScriptAppOptions.property.releaseBranches"></a>

```typescript
public readonly releaseBranches: {[ key: string ]: BranchOptions};
```

- *Type:* {[ key: string ]: projen.release.BranchOptions}
- *Default:* no additional branches are used for release. you can use `addBranch()` to add additional branches.

Defines additional release branches.

A workflow will be created for each
release branch which will publish releases from commits in this branch.
Each release branch _must_ be assigned a major version number which is used
to enforce that versions published from that branch always use that major
version. If multiple branches are used, the `majorVersion` field must also
be provided for the default branch.

---

##### `releaseEnvironment`<sup>Optional</sup> <a name="releaseEnvironment" id="projen-modules.CdkTypeScriptAppOptions.property.releaseEnvironment"></a>

```typescript
public readonly releaseEnvironment: string;
```

- *Type:* string
- *Default:* no environment used, unless set at the artifact level

The GitHub Actions environment used for the release.

This can be used to add an explicit approval step to the release
or limit who can initiate a release through environment protection rules.

When multiple artifacts are released, the environment can be overwritten
on a per artifact basis.

---

##### ~~`releaseEveryCommit`~~<sup>Optional</sup> <a name="releaseEveryCommit" id="projen-modules.CdkTypeScriptAppOptions.property.releaseEveryCommit"></a>

- *Deprecated:* Use `releaseTrigger: ReleaseTrigger.continuous()` instead

```typescript
public readonly releaseEveryCommit: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically release new versions every commit to one of branches in `releaseBranches`.

---

##### `releaseFailureIssue`<sup>Optional</sup> <a name="releaseFailureIssue" id="projen-modules.CdkTypeScriptAppOptions.property.releaseFailureIssue"></a>

```typescript
public readonly releaseFailureIssue: boolean;
```

- *Type:* boolean
- *Default:* false

Create a github issue on every failed publishing task.

---

##### `releaseFailureIssueLabel`<sup>Optional</sup> <a name="releaseFailureIssueLabel" id="projen-modules.CdkTypeScriptAppOptions.property.releaseFailureIssueLabel"></a>

```typescript
public readonly releaseFailureIssueLabel: string;
```

- *Type:* string
- *Default:* "failed-release"

The label to apply to issues indicating publish failures.

Only applies if `releaseFailureIssue` is true.

---

##### ~~`releaseSchedule`~~<sup>Optional</sup> <a name="releaseSchedule" id="projen-modules.CdkTypeScriptAppOptions.property.releaseSchedule"></a>

- *Deprecated:* Use `releaseTrigger: ReleaseTrigger.scheduled()` instead

```typescript
public readonly releaseSchedule: string;
```

- *Type:* string
- *Default:* no scheduled releases

CRON schedule to trigger new releases.

---

##### `releaseTagPrefix`<sup>Optional</sup> <a name="releaseTagPrefix" id="projen-modules.CdkTypeScriptAppOptions.property.releaseTagPrefix"></a>

```typescript
public readonly releaseTagPrefix: string;
```

- *Type:* string
- *Default:* "v"

Automatically add the given prefix to release tags.

Useful if you are releasing on multiple branches with overlapping version numbers.
Note: this prefix is used to detect the latest tagged version
when bumping, so if you change this on a project with an existing version
history, you may need to manually tag your latest release
with the new prefix.

---

##### `releaseToNpm`<sup>Optional</sup> <a name="releaseToNpm" id="projen-modules.CdkTypeScriptAppOptions.property.releaseToNpm"></a>

```typescript
public readonly releaseToNpm: boolean;
```

- *Type:* boolean
- *Default:* false

Automatically release to npm when new versions are introduced.

---

##### `releaseTrigger`<sup>Optional</sup> <a name="releaseTrigger" id="projen-modules.CdkTypeScriptAppOptions.property.releaseTrigger"></a>

```typescript
public readonly releaseTrigger: ReleaseTrigger;
```

- *Type:* projen.release.ReleaseTrigger
- *Default:* Continuous releases (`ReleaseTrigger.continuous()`)

The release trigger to use.

---

##### ~~`releaseWorkflow`~~<sup>Optional</sup> <a name="releaseWorkflow" id="projen-modules.CdkTypeScriptAppOptions.property.releaseWorkflow"></a>

- *Deprecated:* see `release`.

```typescript
public readonly releaseWorkflow: boolean;
```

- *Type:* boolean
- *Default:* true if not a subproject

DEPRECATED: renamed to `release`.

---

##### `releaseWorkflowEnv`<sup>Optional</sup> <a name="releaseWorkflowEnv" id="projen-modules.CdkTypeScriptAppOptions.property.releaseWorkflowEnv"></a>

```typescript
public readonly releaseWorkflowEnv: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* {}

Build environment variables for release workflows.

---

##### `releaseWorkflowName`<sup>Optional</sup> <a name="releaseWorkflowName" id="projen-modules.CdkTypeScriptAppOptions.property.releaseWorkflowName"></a>

```typescript
public readonly releaseWorkflowName: string;
```

- *Type:* string
- *Default:* "release"

The name of the default release workflow.

---

##### `releaseWorkflowSetupSteps`<sup>Optional</sup> <a name="releaseWorkflowSetupSteps" id="projen-modules.CdkTypeScriptAppOptions.property.releaseWorkflowSetupSteps"></a>

```typescript
public readonly releaseWorkflowSetupSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]

A set of workflow steps to execute in order to setup the workflow container.

---

##### `renovatebot`<sup>Optional</sup> <a name="renovatebot" id="projen-modules.CdkTypeScriptAppOptions.property.renovatebot"></a>

```typescript
public readonly renovatebot: boolean;
```

- *Type:* boolean
- *Default:* false

Use renovatebot to handle dependency upgrades.

---

##### `renovatebotOptions`<sup>Optional</sup> <a name="renovatebotOptions" id="projen-modules.CdkTypeScriptAppOptions.property.renovatebotOptions"></a>

```typescript
public readonly renovatebotOptions: RenovatebotOptions;
```

- *Type:* projen.RenovatebotOptions
- *Default:* default options

Options for renovatebot.

---

##### `repository`<sup>Optional</sup> <a name="repository" id="projen-modules.CdkTypeScriptAppOptions.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

The repository is the location where the actual code for your package lives.

See https://classic.yarnpkg.com/en/docs/package-json/#toc-repository

---

##### `repositoryDirectory`<sup>Optional</sup> <a name="repositoryDirectory" id="projen-modules.CdkTypeScriptAppOptions.property.repositoryDirectory"></a>

```typescript
public readonly repositoryDirectory: string;
```

- *Type:* string

If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives.

---

##### `requireApproval`<sup>Optional</sup> <a name="requireApproval" id="projen-modules.CdkTypeScriptAppOptions.property.requireApproval"></a>

```typescript
public readonly requireApproval: ApprovalLevel;
```

- *Type:* projen.awscdk.ApprovalLevel
- *Default:* ApprovalLevel.BROADENING

To protect you against unintended changes that affect your security posture, the AWS CDK Toolkit prompts you to approve security-related changes before deploying them.

---

##### `sampleCode`<sup>Optional</sup> <a name="sampleCode" id="projen-modules.CdkTypeScriptAppOptions.property.sampleCode"></a>

```typescript
public readonly sampleCode: boolean;
```

- *Type:* boolean
- *Default:* true

Generate one-time sample in `src/` and `test/` if there are no files there.

---

##### `scopedPackagesOptions`<sup>Optional</sup> <a name="scopedPackagesOptions" id="projen-modules.CdkTypeScriptAppOptions.property.scopedPackagesOptions"></a>

```typescript
public readonly scopedPackagesOptions: ScopedPackagesOptions[];
```

- *Type:* projen.javascript.ScopedPackagesOptions[]
- *Default:* fetch all scoped packages from the public npm registry

Options for privately hosted scoped packages.

---

##### ~~`scripts`~~<sup>Optional</sup> <a name="scripts" id="projen-modules.CdkTypeScriptAppOptions.property.scripts"></a>

- *Deprecated:* use `project.addTask()` or `package.setScript()`

```typescript
public readonly scripts: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* {}

npm scripts to include.

If a script has the same name as a standard script,
the standard script will be overwritten.
Also adds the script as a task.

---

##### `srcdir`<sup>Optional</sup> <a name="srcdir" id="projen-modules.CdkTypeScriptAppOptions.property.srcdir"></a>

```typescript
public readonly srcdir: string;
```

- *Type:* string
- *Default:* "src"

Typescript sources directory.

---

##### `stability`<sup>Optional</sup> <a name="stability" id="projen-modules.CdkTypeScriptAppOptions.property.stability"></a>

```typescript
public readonly stability: string;
```

- *Type:* string

Package's Stability.

---

##### `stale`<sup>Optional</sup> <a name="stale" id="projen-modules.CdkTypeScriptAppOptions.property.stale"></a>

```typescript
public readonly stale: boolean;
```

- *Type:* boolean
- *Default:* false

Auto-close of stale issues and pull request.

See `staleOptions` for options.

---

##### `staleOptions`<sup>Optional</sup> <a name="staleOptions" id="projen-modules.CdkTypeScriptAppOptions.property.staleOptions"></a>

```typescript
public readonly staleOptions: StaleOptions;
```

- *Type:* projen.github.StaleOptions
- *Default:* see defaults in `StaleOptions`

Auto-close stale issues and pull requests.

To disable set `stale` to `false`.

---

##### `testdir`<sup>Optional</sup> <a name="testdir" id="projen-modules.CdkTypeScriptAppOptions.property.testdir"></a>

```typescript
public readonly testdir: string;
```

- *Type:* string
- *Default:* "test"

Jest tests directory.

Tests files should be named `xxx.test.ts`.
If this directory is under `srcdir` (e.g. `src/test`, `src/__tests__`),
then tests are going to be compiled into `lib/` and executed as javascript.
If the test directory is outside of `src`, then we configure jest to
compile the code in-memory.

---

##### `tsconfig`<sup>Optional</sup> <a name="tsconfig" id="projen-modules.CdkTypeScriptAppOptions.property.tsconfig"></a>

```typescript
public readonly tsconfig: TypescriptConfigOptions;
```

- *Type:* projen.javascript.TypescriptConfigOptions
- *Default:* default options

Custom TSConfig.

---

##### `tsconfigDev`<sup>Optional</sup> <a name="tsconfigDev" id="projen-modules.CdkTypeScriptAppOptions.property.tsconfigDev"></a>

```typescript
public readonly tsconfigDev: TypescriptConfigOptions;
```

- *Type:* projen.javascript.TypescriptConfigOptions
- *Default:* use the production tsconfig options

Custom tsconfig options for the development tsconfig.json file (used for testing).

---

##### `tsconfigDevFile`<sup>Optional</sup> <a name="tsconfigDevFile" id="projen-modules.CdkTypeScriptAppOptions.property.tsconfigDevFile"></a>

```typescript
public readonly tsconfigDevFile: string;
```

- *Type:* string
- *Default:* "tsconfig.dev.json"

The name of the development tsconfig.json file.

---

##### `tsJestOptions`<sup>Optional</sup> <a name="tsJestOptions" id="projen-modules.CdkTypeScriptAppOptions.property.tsJestOptions"></a>

```typescript
public readonly tsJestOptions: TsJestOptions;
```

- *Type:* projen.typescript.TsJestOptions

Options for ts-jest.

---

##### `typescriptVersion`<sup>Optional</sup> <a name="typescriptVersion" id="projen-modules.CdkTypeScriptAppOptions.property.typescriptVersion"></a>

```typescript
public readonly typescriptVersion: string;
```

- *Type:* string
- *Default:* "latest"

TypeScript version to use.

NOTE: Typescript is not semantically versioned and should remain on the
same minor, so we recommend using a `~` dependency (e.g. `~1.2.3`).

---

##### `versionrcOptions`<sup>Optional</sup> <a name="versionrcOptions" id="projen-modules.CdkTypeScriptAppOptions.property.versionrcOptions"></a>

```typescript
public readonly versionrcOptions: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}
- *Default:* standard configuration applicable for GitHub repositories

Custom configuration used when creating changelog with commit-and-tag-version package.

Given values either append to default configuration or overwrite values in it.

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="projen-modules.CdkTypeScriptAppOptions.property.vscode"></a>

```typescript
public readonly vscode: boolean;
```

- *Type:* boolean
- *Default:* true

Enable VSCode integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `watchExcludes`<sup>Optional</sup> <a name="watchExcludes" id="projen-modules.CdkTypeScriptAppOptions.property.watchExcludes"></a>

```typescript
public readonly watchExcludes: string[];
```

- *Type:* string[]
- *Default:* []

Glob patterns to exclude from `cdk watch`.

---

##### `watchIncludes`<sup>Optional</sup> <a name="watchIncludes" id="projen-modules.CdkTypeScriptAppOptions.property.watchIncludes"></a>

```typescript
public readonly watchIncludes: string[];
```

- *Type:* string[]
- *Default:* []

Glob patterns to include in `cdk watch`.

---

##### `workflowBootstrapSteps`<sup>Optional</sup> <a name="workflowBootstrapSteps" id="projen-modules.CdkTypeScriptAppOptions.property.workflowBootstrapSteps"></a>

```typescript
public readonly workflowBootstrapSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]
- *Default:* "yarn install --frozen-lockfile && yarn projen"

Workflow steps to use in order to bootstrap this repo.

---

##### `workflowContainerImage`<sup>Optional</sup> <a name="workflowContainerImage" id="projen-modules.CdkTypeScriptAppOptions.property.workflowContainerImage"></a>

```typescript
public readonly workflowContainerImage: string;
```

- *Type:* string
- *Default:* default image

Container image to use for GitHub workflows.

---

##### `workflowGitIdentity`<sup>Optional</sup> <a name="workflowGitIdentity" id="projen-modules.CdkTypeScriptAppOptions.property.workflowGitIdentity"></a>

```typescript
public readonly workflowGitIdentity: GitIdentity;
```

- *Type:* projen.github.GitIdentity
- *Default:* default GitHub Actions user

The git identity to use in workflows.

---

##### `workflowNodeVersion`<sup>Optional</sup> <a name="workflowNodeVersion" id="projen-modules.CdkTypeScriptAppOptions.property.workflowNodeVersion"></a>

```typescript
public readonly workflowNodeVersion: string;
```

- *Type:* string
- *Default:* `minNodeVersion` if set, otherwise `lts/*`.

The node version used in GitHub Actions workflows.

Always use this option if your GitHub Actions workflows require a specific to run.

---

##### `workflowPackageCache`<sup>Optional</sup> <a name="workflowPackageCache" id="projen-modules.CdkTypeScriptAppOptions.property.workflowPackageCache"></a>

```typescript
public readonly workflowPackageCache: boolean;
```

- *Type:* boolean
- *Default:* false

Enable Node.js package cache in GitHub workflows.

---

##### `workflowRunsOn`<sup>Optional</sup> <a name="workflowRunsOn" id="projen-modules.CdkTypeScriptAppOptions.property.workflowRunsOn"></a>

```typescript
public readonly workflowRunsOn: string[];
```

- *Type:* string[]
- *Default:* ["ubuntu-latest"]

Github Runner selection labels.

---

##### `workflowRunsOnGroup`<sup>Optional</sup> <a name="workflowRunsOnGroup" id="projen-modules.CdkTypeScriptAppOptions.property.workflowRunsOnGroup"></a>

```typescript
public readonly workflowRunsOnGroup: GroupRunnerOptions;
```

- *Type:* projen.GroupRunnerOptions

Github Runner Group selection options.

---

##### `yarnBerryOptions`<sup>Optional</sup> <a name="yarnBerryOptions" id="projen-modules.CdkTypeScriptAppOptions.property.yarnBerryOptions"></a>

```typescript
public readonly yarnBerryOptions: YarnBerryOptions;
```

- *Type:* projen.javascript.YarnBerryOptions
- *Default:* Yarn Berry v4 with all default options

Options for Yarn Berry.

---

### JsiiProjectOptions <a name="JsiiProjectOptions" id="projen-modules.JsiiProjectOptions"></a>

JsiiProjectOptions.

#### Initializer <a name="Initializer" id="projen-modules.JsiiProjectOptions.Initializer"></a>

```typescript
import { JsiiProjectOptions } from 'projen-modules'

const jsiiProjectOptions: JsiiProjectOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen-modules.JsiiProjectOptions.property.author">author</a></code> | <code>string</code> | The name of the library author. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.authorAddress">authorAddress</a></code> | <code>string</code> | Email or URL of the library author. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.codeOwners">codeOwners</a></code> | <code>string[]</code> | List of teams used to generate the CODEOWNERS file. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.name">name</a></code> | <code>string</code> | This is the name of your project. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.repositoryUrl">repositoryUrl</a></code> | <code>string</code> | Git repository URL. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.allowLibraryDependencies">allowLibraryDependencies</a></code> | <code>boolean</code> | Allow the project to include `peerDependencies` and `bundledDependencies`. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.artifactsDirectory">artifactsDirectory</a></code> | <code>string</code> | A directory which will contain build artifacts. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.authorEmail">authorEmail</a></code> | <code>string</code> | Author's e-mail. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.authorName">authorName</a></code> | <code>string</code> | Author's name. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.authorOrganization">authorOrganization</a></code> | <code>boolean</code> | Is the author an organization. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.authorUrl">authorUrl</a></code> | <code>string</code> | Author's URL / Website. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.autoApproveOptions">autoApproveOptions</a></code> | <code>projen.github.AutoApproveOptions</code> | Enable and configure the 'auto approve' workflow. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.autoApproveUpgrades">autoApproveUpgrades</a></code> | <code>boolean</code> | Automatically approve deps upgrade PRs, allowing them to be merged by mergify (if configued). |
| <code><a href="#projen-modules.JsiiProjectOptions.property.autoDetectBin">autoDetectBin</a></code> | <code>boolean</code> | Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.autoMerge">autoMerge</a></code> | <code>boolean</code> | Enable automatic merging on GitHub. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.autoMergeOptions">autoMergeOptions</a></code> | <code>projen.github.AutoMergeOptions</code> | Configure options for automatic merging on GitHub. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.bin">bin</a></code> | <code>{[ key: string ]: string}</code> | Binary programs vended with your module. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.biome">biome</a></code> | <code>boolean</code> | Setup Biome. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.biomeOptions">biomeOptions</a></code> | <code>projen.javascript.BiomeOptions</code> | Biome options. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.bugsEmail">bugsEmail</a></code> | <code>string</code> | The email address to which issues should be reported. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.bugsUrl">bugsUrl</a></code> | <code>string</code> | The url to your project's issue tracker. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.buildWorkflow">buildWorkflow</a></code> | <code>boolean</code> | Define a GitHub workflow for building PRs. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.buildWorkflowOptions">buildWorkflowOptions</a></code> | <code>projen.javascript.BuildWorkflowOptions</code> | Options for PR build workflow. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.buildWorkflowTriggers">buildWorkflowTriggers</a></code> | <code>projen.github.workflows.Triggers</code> | Build workflow triggers. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.bumpPackage">bumpPackage</a></code> | <code>string</code> | The `commit-and-tag-version` compatible package used to bump the package version, as a dependency string. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.bundledDeps">bundledDeps</a></code> | <code>string[]</code> | List of dependencies to bundle into this module. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.bundlerOptions">bundlerOptions</a></code> | <code>projen.javascript.BundlerOptions</code> | Options for `Bundler`. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.bunVersion">bunVersion</a></code> | <code>string</code> | The version of Bun to use if using Bun as a package manager. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.checkLicenses">checkLicenses</a></code> | <code>projen.javascript.LicenseCheckerOptions</code> | Configure which licenses should be deemed acceptable for use by dependencies. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.clobber">clobber</a></code> | <code>boolean</code> | Add a `clobber` task which resets the repo to origin. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.codeArtifactOptions">codeArtifactOptions</a></code> | <code>projen.javascript.CodeArtifactOptions</code> | Options for npm packages using AWS CodeArtifact. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.codeCov">codeCov</a></code> | <code>boolean</code> | Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v5 By default, OIDC auth is used. Alternatively a token can be provided via `codeCovTokenSecret`. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.codeCovTokenSecret">codeCovTokenSecret</a></code> | <code>string</code> | Define the secret name for a specified https://codecov.io/ token. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.compat">compat</a></code> | <code>boolean</code> | Automatically run API compatibility test against the latest version published to npm after compilation. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.compatIgnore">compatIgnore</a></code> | <code>string</code> | Name of the ignore file for API compatibility tests. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.compressAssembly">compressAssembly</a></code> | <code>boolean</code> | Emit a compressed version of the assembly. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.copyrightOwner">copyrightOwner</a></code> | <code>string</code> | License copyright owner. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.copyrightPeriod">copyrightPeriod</a></code> | <code>string</code> | The copyright years to put in the LICENSE file. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.defaultReleaseBranch">defaultReleaseBranch</a></code> | <code>string</code> | The name of the main release branch. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.dependabot">dependabot</a></code> | <code>boolean</code> | Use dependabot to handle dependency upgrades. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.dependabotOptions">dependabotOptions</a></code> | <code>projen.github.DependabotOptions</code> | Options for dependabot. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.deps">deps</a></code> | <code>string[]</code> | Runtime dependencies of this module. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.depsUpgrade">depsUpgrade</a></code> | <code>boolean</code> | Use tasks and github workflows to handle dependency upgrades. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.depsUpgradeOptions">depsUpgradeOptions</a></code> | <code>projen.javascript.UpgradeDependenciesOptions</code> | Options for `UpgradeDependencies`. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.description">description</a></code> | <code>string</code> | The description is just a string that helps people understand the purpose of the package. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.devContainer">devContainer</a></code> | <code>boolean</code> | Add a VSCode development environment (used for GitHub Codespaces). |
| <code><a href="#projen-modules.JsiiProjectOptions.property.devDeps">devDeps</a></code> | <code>string[]</code> | Build dependencies for this module. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.disableTsconfig">disableTsconfig</a></code> | <code>boolean</code> | Do not generate a `tsconfig.json` file (used by jsii projects since tsconfig.json is generated by the jsii compiler). |
| <code><a href="#projen-modules.JsiiProjectOptions.property.disableTsconfigDev">disableTsconfigDev</a></code> | <code>boolean</code> | Do not generate a `tsconfig.dev.json` file. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.docgen">docgen</a></code> | <code>boolean</code> | Docgen by Typedoc. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.docgenFilePath">docgenFilePath</a></code> | <code>string</code> | File path for generated docs. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.docsDirectory">docsDirectory</a></code> | <code>string</code> | Docs directory. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.dotnet">dotnet</a></code> | <code>projen.cdk.JsiiDotNetTarget</code> | *No description.* |
| <code><a href="#projen-modules.JsiiProjectOptions.property.entrypoint">entrypoint</a></code> | <code>string</code> | Module entrypoint (`main` in `package.json`). Set to an empty string to not include `main` in your package.json. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.entrypointTypes">entrypointTypes</a></code> | <code>string</code> | The .d.ts file that includes the type declarations for this module. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.eslint">eslint</a></code> | <code>boolean</code> | Setup eslint. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.eslintOptions">eslintOptions</a></code> | <code>projen.javascript.EslintOptions</code> | Eslint options. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.excludeTypescript">excludeTypescript</a></code> | <code>string[]</code> | Accepts a list of glob patterns. Files matching any of those patterns will be excluded from the TypeScript compiler input. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.github">github</a></code> | <code>boolean</code> | Enable GitHub integration. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.githubOptions">githubOptions</a></code> | <code>projen.github.GitHubOptions</code> | Options for GitHub integration. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.gitignore">gitignore</a></code> | <code>string[]</code> | Additional entries to .gitignore. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.gitIgnoreOptions">gitIgnoreOptions</a></code> | <code>projen.IgnoreFileOptions</code> | Configuration options for .gitignore file. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.gitOptions">gitOptions</a></code> | <code>projen.GitOptions</code> | Configuration options for git. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.gitpod">gitpod</a></code> | <code>boolean</code> | Add a Gitpod development environment. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.homepage">homepage</a></code> | <code>string</code> | Package's Homepage / Website. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.jest">jest</a></code> | <code>boolean</code> | Setup jest unit tests. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.jestOptions">jestOptions</a></code> | <code>projen.javascript.JestOptions</code> | Jest options. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.jsiiReleaseVersion">jsiiReleaseVersion</a></code> | <code>string</code> | Version requirement of `publib` which is used to publish modules to npm. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.jsiiVersion">jsiiVersion</a></code> | <code>string</code> | Version of the jsii compiler to use. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.keywords">keywords</a></code> | <code>string[]</code> | Keywords to include in `package.json`. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.libdir">libdir</a></code> | <code>string</code> | Typescript  artifacts output directory. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.license">license</a></code> | <code>string</code> | License's SPDX identifier. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.licensed">licensed</a></code> | <code>boolean</code> | Indicates if a license should be added. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.logging">logging</a></code> | <code>projen.LoggerOptions</code> | Configure logging options such as verbosity. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.majorVersion">majorVersion</a></code> | <code>number</code> | Major version to release from the default branch. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.maxNodeVersion">maxNodeVersion</a></code> | <code>string</code> | The maximum node version supported by this package. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.mergify">mergify</a></code> | <code>boolean</code> | Whether mergify should be enabled on this repository or not. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.mergifyOptions">mergifyOptions</a></code> | <code>projen.github.MergifyOptions</code> | Options for mergify. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.minMajorVersion">minMajorVersion</a></code> | <code>number</code> | Minimal Major version to release. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.minNodeVersion">minNodeVersion</a></code> | <code>string</code> | The minimum node version required by this package to function. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.mutableBuild">mutableBuild</a></code> | <code>boolean</code> | Automatically update files modified during builds to pull-request branches. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.nextVersionCommand">nextVersionCommand</a></code> | <code>string</code> | A shell command to control the next version to release. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.npmAccess">npmAccess</a></code> | <code>projen.javascript.NpmAccess</code> | Access level of the npm package. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.npmDistTag">npmDistTag</a></code> | <code>string</code> | The npmDistTag to use when publishing from the default branch. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.npmignore">npmignore</a></code> | <code>string[]</code> | Additional entries to .npmignore. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.npmignoreEnabled">npmignoreEnabled</a></code> | <code>boolean</code> | Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.npmIgnoreOptions">npmIgnoreOptions</a></code> | <code>projen.IgnoreFileOptions</code> | Configuration options for .npmignore file. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.npmProvenance">npmProvenance</a></code> | <code>boolean</code> | Should provenance statements be generated when the package is published. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.npmRegistry">npmRegistry</a></code> | <code>string</code> | The host name of the npm registry to publish to. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.npmRegistryUrl">npmRegistryUrl</a></code> | <code>string</code> | The base URL of the npm package registry. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.npmTokenSecret">npmTokenSecret</a></code> | <code>string</code> | GitHub secret which contains the NPM token to use when publishing packages. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.npmTrustedPublishing">npmTrustedPublishing</a></code> | <code>boolean</code> | Use trusted publishing for publishing to npmjs.com Needs to be pre-configured on npm.js to work. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.outdir">outdir</a></code> | <code>string</code> | The root directory of the project. Relative to this directory, all files are synthesized. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.package">package</a></code> | <code>boolean</code> | Defines a `package` task that will produce an npm tarball under the artifacts directory (e.g. `dist`). |
| <code><a href="#projen-modules.JsiiProjectOptions.property.packageManager">packageManager</a></code> | <code>projen.javascript.NodePackageManager</code> | The Node Package Manager used to execute scripts. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.packageName">packageName</a></code> | <code>string</code> | The "name" in package.json. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.parent">parent</a></code> | <code>projen.Project</code> | The parent project, if this project is part of a bigger project. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.peerDependencyOptions">peerDependencyOptions</a></code> | <code>projen.javascript.PeerDependencyOptions</code> | Options for `peerDeps`. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.peerDeps">peerDeps</a></code> | <code>string[]</code> | Peer dependencies for this module. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.pnpmVersion">pnpmVersion</a></code> | <code>string</code> | The version of PNPM to use if using PNPM as a package manager. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.postBuildSteps">postBuildSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | Steps to execute after build as part of the release workflow. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.prerelease">prerelease</a></code> | <code>string</code> | Bump versions from the default branch as pre-releases (e.g. "beta", "alpha", "pre"). |
| <code><a href="#projen-modules.JsiiProjectOptions.property.prettier">prettier</a></code> | <code>boolean</code> | Setup prettier. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.prettierOptions">prettierOptions</a></code> | <code>projen.javascript.PrettierOptions</code> | Prettier options. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.projectType">projectType</a></code> | <code>projen.ProjectType</code> | Which type of project this is (library/app). |
| <code><a href="#projen-modules.JsiiProjectOptions.property.projenCommand">projenCommand</a></code> | <code>string</code> | The shell command to use in order to run the projen CLI. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.projenCredentials">projenCredentials</a></code> | <code>projen.github.GithubCredentials</code> | Choose a method of providing GitHub API access for projen workflows. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.projenDevDependency">projenDevDependency</a></code> | <code>boolean</code> | Indicates of "projen" should be installed as a devDependency. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.projenrcJs">projenrcJs</a></code> | <code>boolean</code> | Generate (once) .projenrc.js (in JavaScript). Set to `false` in order to disable .projenrc.js generation. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.projenrcJson">projenrcJson</a></code> | <code>boolean</code> | Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.projenrcJsonOptions">projenrcJsonOptions</a></code> | <code>projen.ProjenrcJsonOptions</code> | Options for .projenrc.json. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.projenrcJsOptions">projenrcJsOptions</a></code> | <code>projen.javascript.ProjenrcOptions</code> | Options for .projenrc.js. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.projenrcTs">projenrcTs</a></code> | <code>boolean</code> | Use TypeScript for your projenrc file (`.projenrc.ts`). |
| <code><a href="#projen-modules.JsiiProjectOptions.property.projenrcTsOptions">projenrcTsOptions</a></code> | <code>projen.typescript.ProjenrcOptions</code> | Options for .projenrc.ts. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.projenTokenSecret">projenTokenSecret</a></code> | <code>string</code> | The name of a secret which includes a GitHub Personal Access Token to be used by projen workflows. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.projenVersion">projenVersion</a></code> | <code>string</code> | Version of projen to install. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.publishDryRun">publishDryRun</a></code> | <code>boolean</code> | Instead of actually publishing to package managers, just print the publishing command. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.publishTasks">publishTasks</a></code> | <code>boolean</code> | Define publishing tasks that can be executed manually as well as workflows. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.publishToGo">publishToGo</a></code> | <code>projen.cdk.JsiiGoTarget</code> | Publish Go bindings to a git repository. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.publishToMaven">publishToMaven</a></code> | <code>projen.cdk.JsiiJavaTarget</code> | Publish to maven. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.publishToNuget">publishToNuget</a></code> | <code>projen.cdk.JsiiDotNetTarget</code> | Publish to NuGet. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.publishToPypi">publishToPypi</a></code> | <code>projen.cdk.JsiiPythonTarget</code> | Publish to pypi. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.pullRequestTemplate">pullRequestTemplate</a></code> | <code>boolean</code> | Include a GitHub pull request template. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.pullRequestTemplateContents">pullRequestTemplateContents</a></code> | <code>string[]</code> | The contents of the pull request template. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.python">python</a></code> | <code>projen.cdk.JsiiPythonTarget</code> | *No description.* |
| <code><a href="#projen-modules.JsiiProjectOptions.property.readme">readme</a></code> | <code><a href="#projen-modules.ReadmeOptions">ReadmeOptions</a></code> | Configuration of the README.md file. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.releasableCommits">releasableCommits</a></code> | <code>projen.ReleasableCommits</code> | Find commits that should be considered releasable Used to decide if a release is required. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.release">release</a></code> | <code>boolean</code> | Add release management to this project. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.releaseBranches">releaseBranches</a></code> | <code>{[ key: string ]: projen.release.BranchOptions}</code> | Defines additional release branches. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.releaseEnvironment">releaseEnvironment</a></code> | <code>string</code> | The GitHub Actions environment used for the release. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.releaseEveryCommit">releaseEveryCommit</a></code> | <code>boolean</code> | Automatically release new versions every commit to one of branches in `releaseBranches`. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.releaseFailureIssue">releaseFailureIssue</a></code> | <code>boolean</code> | Create a github issue on every failed publishing task. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.releaseFailureIssueLabel">releaseFailureIssueLabel</a></code> | <code>string</code> | The label to apply to issues indicating publish failures. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.releaseSchedule">releaseSchedule</a></code> | <code>string</code> | CRON schedule to trigger new releases. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.releaseTagPrefix">releaseTagPrefix</a></code> | <code>string</code> | Automatically add the given prefix to release tags. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.releaseToNpm">releaseToNpm</a></code> | <code>boolean</code> | Automatically release to npm when new versions are introduced. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.releaseTrigger">releaseTrigger</a></code> | <code>projen.release.ReleaseTrigger</code> | The release trigger to use. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.releaseWorkflow">releaseWorkflow</a></code> | <code>boolean</code> | DEPRECATED: renamed to `release`. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.releaseWorkflowEnv">releaseWorkflowEnv</a></code> | <code>{[ key: string ]: string}</code> | Build environment variables for release workflows. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.releaseWorkflowName">releaseWorkflowName</a></code> | <code>string</code> | The name of the default release workflow. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.releaseWorkflowSetupSteps">releaseWorkflowSetupSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | A set of workflow steps to execute in order to setup the workflow container. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.renovatebot">renovatebot</a></code> | <code>boolean</code> | Use renovatebot to handle dependency upgrades. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.renovatebotOptions">renovatebotOptions</a></code> | <code>projen.RenovatebotOptions</code> | Options for renovatebot. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.repository">repository</a></code> | <code>string</code> | The repository is the location where the actual code for your package lives. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.repositoryDirectory">repositoryDirectory</a></code> | <code>string</code> | If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.rootdir">rootdir</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen-modules.JsiiProjectOptions.property.sampleCode">sampleCode</a></code> | <code>boolean</code> | Generate one-time sample in `src/` and `test/` if there are no files there. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.scopedPackagesOptions">scopedPackagesOptions</a></code> | <code>projen.javascript.ScopedPackagesOptions[]</code> | Options for privately hosted scoped packages. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.scripts">scripts</a></code> | <code>{[ key: string ]: string}</code> | npm scripts to include. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.srcdir">srcdir</a></code> | <code>string</code> | Typescript sources directory. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.stability">stability</a></code> | <code>string</code> | Package's Stability. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.stale">stale</a></code> | <code>boolean</code> | Auto-close of stale issues and pull request. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.staleOptions">staleOptions</a></code> | <code>projen.github.StaleOptions</code> | Auto-close stale issues and pull requests. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.testdir">testdir</a></code> | <code>string</code> | Jest tests directory. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.tsconfig">tsconfig</a></code> | <code>projen.javascript.TypescriptConfigOptions</code> | Custom TSConfig. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.tsconfigDev">tsconfigDev</a></code> | <code>projen.javascript.TypescriptConfigOptions</code> | Custom tsconfig options for the development tsconfig.json file (used for testing). |
| <code><a href="#projen-modules.JsiiProjectOptions.property.tsconfigDevFile">tsconfigDevFile</a></code> | <code>string</code> | The name of the development tsconfig.json file. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.tsJestOptions">tsJestOptions</a></code> | <code>projen.typescript.TsJestOptions</code> | Options for ts-jest. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.typescriptVersion">typescriptVersion</a></code> | <code>string</code> | TypeScript version to use. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.versionrcOptions">versionrcOptions</a></code> | <code>{[ key: string ]: any}</code> | Custom configuration used when creating changelog with commit-and-tag-version package. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.vscode">vscode</a></code> | <code>boolean</code> | Enable VSCode integration. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.workflowBootstrapSteps">workflowBootstrapSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | Workflow steps to use in order to bootstrap this repo. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.workflowContainerImage">workflowContainerImage</a></code> | <code>string</code> | Container image to use for GitHub workflows. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.workflowGitIdentity">workflowGitIdentity</a></code> | <code>projen.github.GitIdentity</code> | The git identity to use in workflows. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.workflowNodeVersion">workflowNodeVersion</a></code> | <code>string</code> | The node version used in GitHub Actions workflows. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.workflowPackageCache">workflowPackageCache</a></code> | <code>boolean</code> | Enable Node.js package cache in GitHub workflows. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.workflowRunsOn">workflowRunsOn</a></code> | <code>string[]</code> | Github Runner selection labels. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.workflowRunsOnGroup">workflowRunsOnGroup</a></code> | <code>projen.GroupRunnerOptions</code> | Github Runner Group selection options. |
| <code><a href="#projen-modules.JsiiProjectOptions.property.yarnBerryOptions">yarnBerryOptions</a></code> | <code>projen.javascript.YarnBerryOptions</code> | Options for Yarn Berry. |

---

##### `author`<sup>Required</sup> <a name="author" id="projen-modules.JsiiProjectOptions.property.author"></a>

```typescript
public readonly author: string;
```

- *Type:* string
- *Default:* $GIT_USER_NAME

The name of the library author.

---

##### `authorAddress`<sup>Required</sup> <a name="authorAddress" id="projen-modules.JsiiProjectOptions.property.authorAddress"></a>

```typescript
public readonly authorAddress: string;
```

- *Type:* string
- *Default:* $GIT_USER_EMAIL

Email or URL of the library author.

---

##### `codeOwners`<sup>Required</sup> <a name="codeOwners" id="projen-modules.JsiiProjectOptions.property.codeOwners"></a>

```typescript
public readonly codeOwners: string[];
```

- *Type:* string[]

List of teams used to generate the CODEOWNERS file.

---

##### `name`<sup>Required</sup> <a name="name" id="projen-modules.JsiiProjectOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* $BASEDIR

This is the name of your project.

---

##### `repositoryUrl`<sup>Required</sup> <a name="repositoryUrl" id="projen-modules.JsiiProjectOptions.property.repositoryUrl"></a>

```typescript
public readonly repositoryUrl: string;
```

- *Type:* string
- *Default:* $GIT_REMOTE

Git repository URL.

---

##### `allowLibraryDependencies`<sup>Optional</sup> <a name="allowLibraryDependencies" id="projen-modules.JsiiProjectOptions.property.allowLibraryDependencies"></a>

```typescript
public readonly allowLibraryDependencies: boolean;
```

- *Type:* boolean
- *Default:* true

Allow the project to include `peerDependencies` and `bundledDependencies`.

This is normally only allowed for libraries. For apps, there's no meaning
for specifying these.

---

##### `artifactsDirectory`<sup>Optional</sup> <a name="artifactsDirectory" id="projen-modules.JsiiProjectOptions.property.artifactsDirectory"></a>

```typescript
public readonly artifactsDirectory: string;
```

- *Type:* string
- *Default:* "dist"

A directory which will contain build artifacts.

---

##### `authorEmail`<sup>Optional</sup> <a name="authorEmail" id="projen-modules.JsiiProjectOptions.property.authorEmail"></a>

```typescript
public readonly authorEmail: string;
```

- *Type:* string

Author's e-mail.

---

##### `authorName`<sup>Optional</sup> <a name="authorName" id="projen-modules.JsiiProjectOptions.property.authorName"></a>

```typescript
public readonly authorName: string;
```

- *Type:* string

Author's name.

---

##### `authorOrganization`<sup>Optional</sup> <a name="authorOrganization" id="projen-modules.JsiiProjectOptions.property.authorOrganization"></a>

```typescript
public readonly authorOrganization: boolean;
```

- *Type:* boolean

Is the author an organization.

---

##### `authorUrl`<sup>Optional</sup> <a name="authorUrl" id="projen-modules.JsiiProjectOptions.property.authorUrl"></a>

```typescript
public readonly authorUrl: string;
```

- *Type:* string

Author's URL / Website.

---

##### `autoApproveOptions`<sup>Optional</sup> <a name="autoApproveOptions" id="projen-modules.JsiiProjectOptions.property.autoApproveOptions"></a>

```typescript
public readonly autoApproveOptions: AutoApproveOptions;
```

- *Type:* projen.github.AutoApproveOptions
- *Default:* auto approve is disabled

Enable and configure the 'auto approve' workflow.

---

##### `autoApproveUpgrades`<sup>Optional</sup> <a name="autoApproveUpgrades" id="projen-modules.JsiiProjectOptions.property.autoApproveUpgrades"></a>

```typescript
public readonly autoApproveUpgrades: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically approve deps upgrade PRs, allowing them to be merged by mergify (if configued).

Throw if set to true but `autoApproveOptions` are not defined.

---

##### `autoDetectBin`<sup>Optional</sup> <a name="autoDetectBin" id="projen-modules.JsiiProjectOptions.property.autoDetectBin"></a>

```typescript
public readonly autoDetectBin: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section.

---

##### `autoMerge`<sup>Optional</sup> <a name="autoMerge" id="projen-modules.JsiiProjectOptions.property.autoMerge"></a>

```typescript
public readonly autoMerge: boolean;
```

- *Type:* boolean
- *Default:* true

Enable automatic merging on GitHub.

Has no effect if `github.mergify`
is set to false.

---

##### `autoMergeOptions`<sup>Optional</sup> <a name="autoMergeOptions" id="projen-modules.JsiiProjectOptions.property.autoMergeOptions"></a>

```typescript
public readonly autoMergeOptions: AutoMergeOptions;
```

- *Type:* projen.github.AutoMergeOptions
- *Default:* see defaults in `AutoMergeOptions`

Configure options for automatic merging on GitHub.

Has no effect if
`github.mergify` or `autoMerge` is set to false.

---

##### `bin`<sup>Optional</sup> <a name="bin" id="projen-modules.JsiiProjectOptions.property.bin"></a>

```typescript
public readonly bin: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Binary programs vended with your module.

You can use this option to add/customize how binaries are represented in
your `package.json`, but unless `autoDetectBin` is `false`, every
executable file under `bin` will automatically be added to this section.

---

##### `biome`<sup>Optional</sup> <a name="biome" id="projen-modules.JsiiProjectOptions.property.biome"></a>

```typescript
public readonly biome: boolean;
```

- *Type:* boolean
- *Default:* false

Setup Biome.

---

##### `biomeOptions`<sup>Optional</sup> <a name="biomeOptions" id="projen-modules.JsiiProjectOptions.property.biomeOptions"></a>

```typescript
public readonly biomeOptions: BiomeOptions;
```

- *Type:* projen.javascript.BiomeOptions
- *Default:* default options

Biome options.

---

##### `bugsEmail`<sup>Optional</sup> <a name="bugsEmail" id="projen-modules.JsiiProjectOptions.property.bugsEmail"></a>

```typescript
public readonly bugsEmail: string;
```

- *Type:* string

The email address to which issues should be reported.

---

##### `bugsUrl`<sup>Optional</sup> <a name="bugsUrl" id="projen-modules.JsiiProjectOptions.property.bugsUrl"></a>

```typescript
public readonly bugsUrl: string;
```

- *Type:* string

The url to your project's issue tracker.

---

##### `buildWorkflow`<sup>Optional</sup> <a name="buildWorkflow" id="projen-modules.JsiiProjectOptions.property.buildWorkflow"></a>

```typescript
public readonly buildWorkflow: boolean;
```

- *Type:* boolean
- *Default:* true if not a subproject

Define a GitHub workflow for building PRs.

---

##### `buildWorkflowOptions`<sup>Optional</sup> <a name="buildWorkflowOptions" id="projen-modules.JsiiProjectOptions.property.buildWorkflowOptions"></a>

```typescript
public readonly buildWorkflowOptions: BuildWorkflowOptions;
```

- *Type:* projen.javascript.BuildWorkflowOptions

Options for PR build workflow.

---

##### ~~`buildWorkflowTriggers`~~<sup>Optional</sup> <a name="buildWorkflowTriggers" id="projen-modules.JsiiProjectOptions.property.buildWorkflowTriggers"></a>

- *Deprecated:* - Use `buildWorkflowOptions.workflowTriggers`

```typescript
public readonly buildWorkflowTriggers: Triggers;
```

- *Type:* projen.github.workflows.Triggers
- *Default:* "{ pullRequest: {}, workflowDispatch: {} }"

Build workflow triggers.

---

##### `bumpPackage`<sup>Optional</sup> <a name="bumpPackage" id="projen-modules.JsiiProjectOptions.property.bumpPackage"></a>

```typescript
public readonly bumpPackage: string;
```

- *Type:* string
- *Default:* A recent version of "commit-and-tag-version"

The `commit-and-tag-version` compatible package used to bump the package version, as a dependency string.

This can be any compatible package version, including the deprecated `standard-version@9`.

---

##### `bundledDeps`<sup>Optional</sup> <a name="bundledDeps" id="projen-modules.JsiiProjectOptions.property.bundledDeps"></a>

```typescript
public readonly bundledDeps: string[];
```

- *Type:* string[]

List of dependencies to bundle into this module.

These modules will be
added both to the `dependencies` section and `bundledDependencies` section of
your `package.json`.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `yarn add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and
this will be what you `package.json` will eventually include.

---

##### `bundlerOptions`<sup>Optional</sup> <a name="bundlerOptions" id="projen-modules.JsiiProjectOptions.property.bundlerOptions"></a>

```typescript
public readonly bundlerOptions: BundlerOptions;
```

- *Type:* projen.javascript.BundlerOptions

Options for `Bundler`.

---

##### `bunVersion`<sup>Optional</sup> <a name="bunVersion" id="projen-modules.JsiiProjectOptions.property.bunVersion"></a>

```typescript
public readonly bunVersion: string;
```

- *Type:* string
- *Default:* "latest"

The version of Bun to use if using Bun as a package manager.

---

##### `checkLicenses`<sup>Optional</sup> <a name="checkLicenses" id="projen-modules.JsiiProjectOptions.property.checkLicenses"></a>

```typescript
public readonly checkLicenses: LicenseCheckerOptions;
```

- *Type:* projen.javascript.LicenseCheckerOptions
- *Default:* no license checks are run during the build and all licenses will be accepted

Configure which licenses should be deemed acceptable for use by dependencies.

This setting will cause the build to fail, if any prohibited or not allowed licenses ares encountered.

---

##### `clobber`<sup>Optional</sup> <a name="clobber" id="projen-modules.JsiiProjectOptions.property.clobber"></a>

```typescript
public readonly clobber: boolean;
```

- *Type:* boolean
- *Default:* true, but false for subprojects

Add a `clobber` task which resets the repo to origin.

---

##### `codeArtifactOptions`<sup>Optional</sup> <a name="codeArtifactOptions" id="projen-modules.JsiiProjectOptions.property.codeArtifactOptions"></a>

```typescript
public readonly codeArtifactOptions: CodeArtifactOptions;
```

- *Type:* projen.javascript.CodeArtifactOptions
- *Default:* undefined

Options for npm packages using AWS CodeArtifact.

This is required if publishing packages to, or installing scoped packages from AWS CodeArtifact

---

##### `codeCov`<sup>Optional</sup> <a name="codeCov" id="projen-modules.JsiiProjectOptions.property.codeCov"></a>

```typescript
public readonly codeCov: boolean;
```

- *Type:* boolean
- *Default:* false

Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v5 By default, OIDC auth is used. Alternatively a token can be provided via `codeCovTokenSecret`.

---

##### `codeCovTokenSecret`<sup>Optional</sup> <a name="codeCovTokenSecret" id="projen-modules.JsiiProjectOptions.property.codeCovTokenSecret"></a>

```typescript
public readonly codeCovTokenSecret: string;
```

- *Type:* string
- *Default:* OIDC auth is used

Define the secret name for a specified https://codecov.io/ token.

---

##### `commitGenerated`<sup>Optional</sup> <a name="commitGenerated" id="projen-modules.JsiiProjectOptions.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean
- *Default:* true

Whether to commit the managed files by default.

---

##### `compat`<sup>Optional</sup> <a name="compat" id="projen-modules.JsiiProjectOptions.property.compat"></a>

```typescript
public readonly compat: boolean;
```

- *Type:* boolean
- *Default:* false

Automatically run API compatibility test against the latest version published to npm after compilation.

You can manually run compatibility tests using `yarn compat` if this feature is disabled.
- You can ignore compatibility failures by adding lines to a ".compatignore" file.

---

##### `compatIgnore`<sup>Optional</sup> <a name="compatIgnore" id="projen-modules.JsiiProjectOptions.property.compatIgnore"></a>

```typescript
public readonly compatIgnore: string;
```

- *Type:* string
- *Default:* ".compatignore"

Name of the ignore file for API compatibility tests.

---

##### `compressAssembly`<sup>Optional</sup> <a name="compressAssembly" id="projen-modules.JsiiProjectOptions.property.compressAssembly"></a>

```typescript
public readonly compressAssembly: boolean;
```

- *Type:* boolean
- *Default:* false

Emit a compressed version of the assembly.

---

##### `copyrightOwner`<sup>Optional</sup> <a name="copyrightOwner" id="projen-modules.JsiiProjectOptions.property.copyrightOwner"></a>

```typescript
public readonly copyrightOwner: string;
```

- *Type:* string
- *Default:* defaults to the value of authorName or "" if `authorName` is undefined.

License copyright owner.

---

##### `copyrightPeriod`<sup>Optional</sup> <a name="copyrightPeriod" id="projen-modules.JsiiProjectOptions.property.copyrightPeriod"></a>

```typescript
public readonly copyrightPeriod: string;
```

- *Type:* string
- *Default:* current year

The copyright years to put in the LICENSE file.

---

##### `defaultReleaseBranch`<sup>Optional</sup> <a name="defaultReleaseBranch" id="projen-modules.JsiiProjectOptions.property.defaultReleaseBranch"></a>

```typescript
public readonly defaultReleaseBranch: string;
```

- *Type:* string
- *Default:* "main"

The name of the main release branch.

---

##### `dependabot`<sup>Optional</sup> <a name="dependabot" id="projen-modules.JsiiProjectOptions.property.dependabot"></a>

```typescript
public readonly dependabot: boolean;
```

- *Type:* boolean
- *Default:* false

Use dependabot to handle dependency upgrades.

Cannot be used in conjunction with `depsUpgrade`.

---

##### `dependabotOptions`<sup>Optional</sup> <a name="dependabotOptions" id="projen-modules.JsiiProjectOptions.property.dependabotOptions"></a>

```typescript
public readonly dependabotOptions: DependabotOptions;
```

- *Type:* projen.github.DependabotOptions
- *Default:* default options

Options for dependabot.

---

##### `deps`<sup>Optional</sup> <a name="deps" id="projen-modules.JsiiProjectOptions.property.deps"></a>

```typescript
public readonly deps: string[];
```

- *Type:* string[]
- *Default:* []

Runtime dependencies of this module.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `yarn add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and
this will be what you `package.json` will eventually include.

---

##### `depsUpgrade`<sup>Optional</sup> <a name="depsUpgrade" id="projen-modules.JsiiProjectOptions.property.depsUpgrade"></a>

```typescript
public readonly depsUpgrade: boolean;
```

- *Type:* boolean
- *Default:* true

Use tasks and github workflows to handle dependency upgrades.

Cannot be used in conjunction with `dependabot`.

---

##### `depsUpgradeOptions`<sup>Optional</sup> <a name="depsUpgradeOptions" id="projen-modules.JsiiProjectOptions.property.depsUpgradeOptions"></a>

```typescript
public readonly depsUpgradeOptions: UpgradeDependenciesOptions;
```

- *Type:* projen.javascript.UpgradeDependenciesOptions
- *Default:* default options

Options for `UpgradeDependencies`.

---

##### `description`<sup>Optional</sup> <a name="description" id="projen-modules.JsiiProjectOptions.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description is just a string that helps people understand the purpose of the package.

It can be used when searching for packages in a package manager as well.
See https://classic.yarnpkg.com/en/docs/package-json/#toc-description

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="projen-modules.JsiiProjectOptions.property.devContainer"></a>

```typescript
public readonly devContainer: boolean;
```

- *Type:* boolean
- *Default:* false

Add a VSCode development environment (used for GitHub Codespaces).

---

##### `devDeps`<sup>Optional</sup> <a name="devDeps" id="projen-modules.JsiiProjectOptions.property.devDeps"></a>

```typescript
public readonly devDeps: string[];
```

- *Type:* string[]
- *Default:* []

Build dependencies for this module.

These dependencies will only be
available in your build environment but will not be fetched when this
module is consumed.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `yarn add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and
this will be what you `package.json` will eventually include.

---

##### `disableTsconfig`<sup>Optional</sup> <a name="disableTsconfig" id="projen-modules.JsiiProjectOptions.property.disableTsconfig"></a>

```typescript
public readonly disableTsconfig: boolean;
```

- *Type:* boolean
- *Default:* false

Do not generate a `tsconfig.json` file (used by jsii projects since tsconfig.json is generated by the jsii compiler).

---

##### `disableTsconfigDev`<sup>Optional</sup> <a name="disableTsconfigDev" id="projen-modules.JsiiProjectOptions.property.disableTsconfigDev"></a>

```typescript
public readonly disableTsconfigDev: boolean;
```

- *Type:* boolean
- *Default:* false

Do not generate a `tsconfig.dev.json` file.

---

##### `docgen`<sup>Optional</sup> <a name="docgen" id="projen-modules.JsiiProjectOptions.property.docgen"></a>

```typescript
public readonly docgen: boolean;
```

- *Type:* boolean
- *Default:* false

Docgen by Typedoc.

---

##### `docgenFilePath`<sup>Optional</sup> <a name="docgenFilePath" id="projen-modules.JsiiProjectOptions.property.docgenFilePath"></a>

```typescript
public readonly docgenFilePath: string;
```

- *Type:* string
- *Default:* "API.md"

File path for generated docs.

---

##### `docsDirectory`<sup>Optional</sup> <a name="docsDirectory" id="projen-modules.JsiiProjectOptions.property.docsDirectory"></a>

```typescript
public readonly docsDirectory: string;
```

- *Type:* string
- *Default:* "docs"

Docs directory.

---

##### ~~`dotnet`~~<sup>Optional</sup> <a name="dotnet" id="projen-modules.JsiiProjectOptions.property.dotnet"></a>

- *Deprecated:* use `publishToNuget`

```typescript
public readonly dotnet: JsiiDotNetTarget;
```

- *Type:* projen.cdk.JsiiDotNetTarget

---

##### `entrypoint`<sup>Optional</sup> <a name="entrypoint" id="projen-modules.JsiiProjectOptions.property.entrypoint"></a>

```typescript
public readonly entrypoint: string;
```

- *Type:* string
- *Default:* "lib/index.js"

Module entrypoint (`main` in `package.json`). Set to an empty string to not include `main` in your package.json.

---

##### `entrypointTypes`<sup>Optional</sup> <a name="entrypointTypes" id="projen-modules.JsiiProjectOptions.property.entrypointTypes"></a>

```typescript
public readonly entrypointTypes: string;
```

- *Type:* string
- *Default:* .d.ts file derived from the project's entrypoint (usually lib/index.d.ts)

The .d.ts file that includes the type declarations for this module.

---

##### `eslint`<sup>Optional</sup> <a name="eslint" id="projen-modules.JsiiProjectOptions.property.eslint"></a>

```typescript
public readonly eslint: boolean;
```

- *Type:* boolean
- *Default:* true, unless biome is enabled

Setup eslint.

---

##### `eslintOptions`<sup>Optional</sup> <a name="eslintOptions" id="projen-modules.JsiiProjectOptions.property.eslintOptions"></a>

```typescript
public readonly eslintOptions: EslintOptions;
```

- *Type:* projen.javascript.EslintOptions
- *Default:* opinionated default options

Eslint options.

---

##### `excludeTypescript`<sup>Optional</sup> <a name="excludeTypescript" id="projen-modules.JsiiProjectOptions.property.excludeTypescript"></a>

```typescript
public readonly excludeTypescript: string[];
```

- *Type:* string[]

Accepts a list of glob patterns. Files matching any of those patterns will be excluded from the TypeScript compiler input.

By default, jsii will include all *.ts files (except .d.ts files) in the TypeScript compiler input.
This can be problematic for example when the package's build or test procedure generates .ts files
that cannot be compiled with jsii's compiler settings.

---

##### `github`<sup>Optional</sup> <a name="github" id="projen-modules.JsiiProjectOptions.property.github"></a>

```typescript
public readonly github: boolean;
```

- *Type:* boolean
- *Default:* true

Enable GitHub integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `githubOptions`<sup>Optional</sup> <a name="githubOptions" id="projen-modules.JsiiProjectOptions.property.githubOptions"></a>

```typescript
public readonly githubOptions: GitHubOptions;
```

- *Type:* projen.github.GitHubOptions
- *Default:* see GitHubOptions

Options for GitHub integration.

---

##### `gitignore`<sup>Optional</sup> <a name="gitignore" id="projen-modules.JsiiProjectOptions.property.gitignore"></a>

```typescript
public readonly gitignore: string[];
```

- *Type:* string[]

Additional entries to .gitignore.

---

##### `gitIgnoreOptions`<sup>Optional</sup> <a name="gitIgnoreOptions" id="projen-modules.JsiiProjectOptions.property.gitIgnoreOptions"></a>

```typescript
public readonly gitIgnoreOptions: IgnoreFileOptions;
```

- *Type:* projen.IgnoreFileOptions

Configuration options for .gitignore file.

---

##### `gitOptions`<sup>Optional</sup> <a name="gitOptions" id="projen-modules.JsiiProjectOptions.property.gitOptions"></a>

```typescript
public readonly gitOptions: GitOptions;
```

- *Type:* projen.GitOptions

Configuration options for git.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="projen-modules.JsiiProjectOptions.property.gitpod"></a>

```typescript
public readonly gitpod: boolean;
```

- *Type:* boolean
- *Default:* false

Add a Gitpod development environment.

---

##### `homepage`<sup>Optional</sup> <a name="homepage" id="projen-modules.JsiiProjectOptions.property.homepage"></a>

```typescript
public readonly homepage: string;
```

- *Type:* string

Package's Homepage / Website.

---

##### `jest`<sup>Optional</sup> <a name="jest" id="projen-modules.JsiiProjectOptions.property.jest"></a>

```typescript
public readonly jest: boolean;
```

- *Type:* boolean
- *Default:* true

Setup jest unit tests.

---

##### `jestOptions`<sup>Optional</sup> <a name="jestOptions" id="projen-modules.JsiiProjectOptions.property.jestOptions"></a>

```typescript
public readonly jestOptions: JestOptions;
```

- *Type:* projen.javascript.JestOptions
- *Default:* default options

Jest options.

---

##### `jsiiReleaseVersion`<sup>Optional</sup> <a name="jsiiReleaseVersion" id="projen-modules.JsiiProjectOptions.property.jsiiReleaseVersion"></a>

```typescript
public readonly jsiiReleaseVersion: string;
```

- *Type:* string
- *Default:* "latest"

Version requirement of `publib` which is used to publish modules to npm.

---

##### `jsiiVersion`<sup>Optional</sup> <a name="jsiiVersion" id="projen-modules.JsiiProjectOptions.property.jsiiVersion"></a>

```typescript
public readonly jsiiVersion: string;
```

- *Type:* string
- *Default:* "~5.8.0"

Version of the jsii compiler to use.

Set to "*" if you want to manually manage the version of jsii in your
project by managing updates to `package.json` on your own.

NOTE: The jsii compiler releases since 5.0.0 are not semantically versioned
and should remain on the same minor, so we recommend using a `~` dependency
(e.g. `~5.0.0`).

---

##### `keywords`<sup>Optional</sup> <a name="keywords" id="projen-modules.JsiiProjectOptions.property.keywords"></a>

```typescript
public readonly keywords: string[];
```

- *Type:* string[]

Keywords to include in `package.json`.

---

##### `libdir`<sup>Optional</sup> <a name="libdir" id="projen-modules.JsiiProjectOptions.property.libdir"></a>

```typescript
public readonly libdir: string;
```

- *Type:* string
- *Default:* "lib"

Typescript  artifacts output directory.

---

##### `license`<sup>Optional</sup> <a name="license" id="projen-modules.JsiiProjectOptions.property.license"></a>

```typescript
public readonly license: string;
```

- *Type:* string
- *Default:* "Apache-2.0"

License's SPDX identifier.

See https://github.com/projen/projen/tree/main/license-text for a list of supported licenses.
Use the `licensed` option if you want to no license to be specified.

---

##### `licensed`<sup>Optional</sup> <a name="licensed" id="projen-modules.JsiiProjectOptions.property.licensed"></a>

```typescript
public readonly licensed: boolean;
```

- *Type:* boolean
- *Default:* true

Indicates if a license should be added.

---

##### `logging`<sup>Optional</sup> <a name="logging" id="projen-modules.JsiiProjectOptions.property.logging"></a>

```typescript
public readonly logging: LoggerOptions;
```

- *Type:* projen.LoggerOptions
- *Default:* {}

Configure logging options such as verbosity.

---

##### `majorVersion`<sup>Optional</sup> <a name="majorVersion" id="projen-modules.JsiiProjectOptions.property.majorVersion"></a>

```typescript
public readonly majorVersion: number;
```

- *Type:* number
- *Default:* Major version is not enforced.

Major version to release from the default branch.

If this is specified, we bump the latest version of this major version line.
If not specified, we bump the global latest version.

---

##### `maxNodeVersion`<sup>Optional</sup> <a name="maxNodeVersion" id="projen-modules.JsiiProjectOptions.property.maxNodeVersion"></a>

```typescript
public readonly maxNodeVersion: string;
```

- *Type:* string
- *Default:* no maximum version is enforced

The maximum node version supported by this package.

Most projects should not use this option.
The value indicates that the package is incompatible with any newer versions of node.
This requirement is enforced via the engines field.

You will normally not need to set this option.
Consider this option only if your package is known to not function with newer versions of node.

---

##### ~~`mergify`~~<sup>Optional</sup> <a name="mergify" id="projen-modules.JsiiProjectOptions.property.mergify"></a>

- *Deprecated:* use `githubOptions.mergify` instead

```typescript
public readonly mergify: boolean;
```

- *Type:* boolean
- *Default:* true

Whether mergify should be enabled on this repository or not.

---

##### ~~`mergifyOptions`~~<sup>Optional</sup> <a name="mergifyOptions" id="projen-modules.JsiiProjectOptions.property.mergifyOptions"></a>

- *Deprecated:* use `githubOptions.mergifyOptions` instead

```typescript
public readonly mergifyOptions: MergifyOptions;
```

- *Type:* projen.github.MergifyOptions
- *Default:* default options

Options for mergify.

---

##### `minMajorVersion`<sup>Optional</sup> <a name="minMajorVersion" id="projen-modules.JsiiProjectOptions.property.minMajorVersion"></a>

```typescript
public readonly minMajorVersion: number;
```

- *Type:* number
- *Default:* No minimum version is being enforced

Minimal Major version to release.

This can be useful to set to 1, as breaking changes before the 1.x major
release are not incrementing the major version number.

Can not be set together with `majorVersion`.

---

##### `minNodeVersion`<sup>Optional</sup> <a name="minNodeVersion" id="projen-modules.JsiiProjectOptions.property.minNodeVersion"></a>

```typescript
public readonly minNodeVersion: string;
```

- *Type:* string
- *Default:* no minimum version is enforced

The minimum node version required by this package to function.

Most projects should not use this option.
The value indicates that the package is incompatible with any older versions of node.
This requirement is enforced via the engines field.

You will normally not need to set this option, even if your package is incompatible with EOL versions of node.
Consider this option only if your package depends on a specific feature, that is not available in other LTS versions.
Setting this option has very high impact on the consumers of your package,
as package managers will actively prevent usage with node versions you have marked as incompatible.

To change the node version of your CI/CD workflows, use `workflowNodeVersion`.

---

##### ~~`mutableBuild`~~<sup>Optional</sup> <a name="mutableBuild" id="projen-modules.JsiiProjectOptions.property.mutableBuild"></a>

- *Deprecated:* - Use `buildWorkflowOptions.mutableBuild`

```typescript
public readonly mutableBuild: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically update files modified during builds to pull-request branches.

This means
that any files synthesized by projen or e.g. test snapshots will always be up-to-date
before a PR is merged.

Implies that PR builds do not have anti-tamper checks.

---

##### `nextVersionCommand`<sup>Optional</sup> <a name="nextVersionCommand" id="projen-modules.JsiiProjectOptions.property.nextVersionCommand"></a>

```typescript
public readonly nextVersionCommand: string;
```

- *Type:* string
- *Default:* The next version will be determined based on the commit history and project settings.

A shell command to control the next version to release.

If present, this shell command will be run before the bump is executed, and
it determines what version to release. It will be executed in the following
environment:

- Working directory: the project directory.
- `$VERSION`: the current version. Looks like `1.2.3`.
- `$LATEST_TAG`: the most recent tag. Looks like `prefix-v1.2.3`, or may be unset.
- `$SUGGESTED_BUMP`: the suggested bump action based on commits. One of `major|minor|patch|none`.

The command should print one of the following to `stdout`:

- Nothing: the next version number will be determined based on commit history.
- `x.y.z`: the next version number will be `x.y.z`.
- `major|minor|patch`: the next version number will be the current version number
  with the indicated component bumped.

This setting cannot be specified together with `minMajorVersion`; the invoked
script can be used to achieve the effects of `minMajorVersion`.

---

##### `npmAccess`<sup>Optional</sup> <a name="npmAccess" id="projen-modules.JsiiProjectOptions.property.npmAccess"></a>

```typescript
public readonly npmAccess: NpmAccess;
```

- *Type:* projen.javascript.NpmAccess
- *Default:* for scoped packages (e.g. `foo@bar`), the default is `NpmAccess.RESTRICTED`, for non-scoped packages, the default is `NpmAccess.PUBLIC`.

Access level of the npm package.

---

##### `npmDistTag`<sup>Optional</sup> <a name="npmDistTag" id="projen-modules.JsiiProjectOptions.property.npmDistTag"></a>

```typescript
public readonly npmDistTag: string;
```

- *Type:* string
- *Default:* "latest"

The npmDistTag to use when publishing from the default branch.

To set the npm dist-tag for release branches, set the `npmDistTag` property
for each branch.

---

##### ~~`npmignore`~~<sup>Optional</sup> <a name="npmignore" id="projen-modules.JsiiProjectOptions.property.npmignore"></a>

- *Deprecated:* - use `project.addPackageIgnore`

```typescript
public readonly npmignore: string[];
```

- *Type:* string[]

Additional entries to .npmignore.

---

##### `npmignoreEnabled`<sup>Optional</sup> <a name="npmignoreEnabled" id="projen-modules.JsiiProjectOptions.property.npmignoreEnabled"></a>

```typescript
public readonly npmignoreEnabled: boolean;
```

- *Type:* boolean
- *Default:* true

Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs.

---

##### `npmIgnoreOptions`<sup>Optional</sup> <a name="npmIgnoreOptions" id="projen-modules.JsiiProjectOptions.property.npmIgnoreOptions"></a>

```typescript
public readonly npmIgnoreOptions: IgnoreFileOptions;
```

- *Type:* projen.IgnoreFileOptions

Configuration options for .npmignore file.

---

##### `npmProvenance`<sup>Optional</sup> <a name="npmProvenance" id="projen-modules.JsiiProjectOptions.property.npmProvenance"></a>

```typescript
public readonly npmProvenance: boolean;
```

- *Type:* boolean
- *Default:* true for public packages, false otherwise

Should provenance statements be generated when the package is published.

A supported package manager is required to publish a package with npm provenance statements and
you will need to use a supported CI/CD provider.

Note that the projen `Release` and `Publisher` components are using `publib` to publish packages,
which is using npm internally and supports provenance statements independently of the package manager used.

---

##### ~~`npmRegistry`~~<sup>Optional</sup> <a name="npmRegistry" id="projen-modules.JsiiProjectOptions.property.npmRegistry"></a>

- *Deprecated:* use `npmRegistryUrl` instead

```typescript
public readonly npmRegistry: string;
```

- *Type:* string

The host name of the npm registry to publish to.

Cannot be set together with `npmRegistryUrl`.

---

##### `npmRegistryUrl`<sup>Optional</sup> <a name="npmRegistryUrl" id="projen-modules.JsiiProjectOptions.property.npmRegistryUrl"></a>

```typescript
public readonly npmRegistryUrl: string;
```

- *Type:* string
- *Default:* "https://registry.npmjs.org"

The base URL of the npm package registry.

Must be a URL (e.g. start with "https://" or "http://")

---

##### `npmTokenSecret`<sup>Optional</sup> <a name="npmTokenSecret" id="projen-modules.JsiiProjectOptions.property.npmTokenSecret"></a>

```typescript
public readonly npmTokenSecret: string;
```

- *Type:* string
- *Default:* "NPM_TOKEN"

GitHub secret which contains the NPM token to use when publishing packages.

---

##### `npmTrustedPublishing`<sup>Optional</sup> <a name="npmTrustedPublishing" id="projen-modules.JsiiProjectOptions.property.npmTrustedPublishing"></a>

```typescript
public readonly npmTrustedPublishing: boolean;
```

- *Type:* boolean
- *Default:* false

Use trusted publishing for publishing to npmjs.com Needs to be pre-configured on npm.js to work.

---

##### `outdir`<sup>Optional</sup> <a name="outdir" id="projen-modules.JsiiProjectOptions.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string
- *Default:* "."

The root directory of the project. Relative to this directory, all files are synthesized.

If this project has a parent, this directory is relative to the parent
directory and it cannot be the same as the parent or any of it's other
subprojects.

---

##### `package`<sup>Optional</sup> <a name="package" id="projen-modules.JsiiProjectOptions.property.package"></a>

```typescript
public readonly package: boolean;
```

- *Type:* boolean
- *Default:* true

Defines a `package` task that will produce an npm tarball under the artifacts directory (e.g. `dist`).

---

##### `packageManager`<sup>Optional</sup> <a name="packageManager" id="projen-modules.JsiiProjectOptions.property.packageManager"></a>

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* projen.javascript.NodePackageManager
- *Default:* NodePackageManager.YARN_CLASSIC

The Node Package Manager used to execute scripts.

---

##### `packageName`<sup>Optional</sup> <a name="packageName" id="projen-modules.JsiiProjectOptions.property.packageName"></a>

```typescript
public readonly packageName: string;
```

- *Type:* string
- *Default:* defaults to project name

The "name" in package.json.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="projen-modules.JsiiProjectOptions.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

The parent project, if this project is part of a bigger project.

---

##### `peerDependencyOptions`<sup>Optional</sup> <a name="peerDependencyOptions" id="projen-modules.JsiiProjectOptions.property.peerDependencyOptions"></a>

```typescript
public readonly peerDependencyOptions: PeerDependencyOptions;
```

- *Type:* projen.javascript.PeerDependencyOptions

Options for `peerDeps`.

---

##### `peerDeps`<sup>Optional</sup> <a name="peerDeps" id="projen-modules.JsiiProjectOptions.property.peerDeps"></a>

```typescript
public readonly peerDeps: string[];
```

- *Type:* string[]
- *Default:* []

Peer dependencies for this module.

Dependencies listed here are required to
be installed (and satisfied) by the _consumer_ of this library. Using peer
dependencies allows you to ensure that only a single module of a certain
library exists in the `node_modules` tree of your consumers.

Note that prior to npm@7, peer dependencies are _not_ automatically
installed, which means that adding peer dependencies to a library will be a
breaking change for your customers.

Unless `peerDependencyOptions.pinnedDevDependency` is disabled (it is
enabled by default), projen will automatically add a dev dependency with a
pinned version for each peer dependency. This will ensure that you build &
test your module against the lowest peer version required.

---

##### `pnpmVersion`<sup>Optional</sup> <a name="pnpmVersion" id="projen-modules.JsiiProjectOptions.property.pnpmVersion"></a>

```typescript
public readonly pnpmVersion: string;
```

- *Type:* string
- *Default:* "9"

The version of PNPM to use if using PNPM as a package manager.

---

##### `postBuildSteps`<sup>Optional</sup> <a name="postBuildSteps" id="projen-modules.JsiiProjectOptions.property.postBuildSteps"></a>

```typescript
public readonly postBuildSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]
- *Default:* []

Steps to execute after build as part of the release workflow.

---

##### `prerelease`<sup>Optional</sup> <a name="prerelease" id="projen-modules.JsiiProjectOptions.property.prerelease"></a>

```typescript
public readonly prerelease: string;
```

- *Type:* string
- *Default:* normal semantic versions

Bump versions from the default branch as pre-releases (e.g. "beta", "alpha", "pre").

---

##### `prettier`<sup>Optional</sup> <a name="prettier" id="projen-modules.JsiiProjectOptions.property.prettier"></a>

```typescript
public readonly prettier: boolean;
```

- *Type:* boolean
- *Default:* false

Setup prettier.

---

##### `prettierOptions`<sup>Optional</sup> <a name="prettierOptions" id="projen-modules.JsiiProjectOptions.property.prettierOptions"></a>

```typescript
public readonly prettierOptions: PrettierOptions;
```

- *Type:* projen.javascript.PrettierOptions
- *Default:* default options

Prettier options.

---

##### ~~`projectType`~~<sup>Optional</sup> <a name="projectType" id="projen-modules.JsiiProjectOptions.property.projectType"></a>

- *Deprecated:* no longer supported at the base project level

```typescript
public readonly projectType: ProjectType;
```

- *Type:* projen.ProjectType
- *Default:* ProjectType.UNKNOWN

Which type of project this is (library/app).

---

##### `projenCommand`<sup>Optional</sup> <a name="projenCommand" id="projen-modules.JsiiProjectOptions.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string
- *Default:* "npx projen"

The shell command to use in order to run the projen CLI.

Can be used to customize in special environments.

---

##### `projenCredentials`<sup>Optional</sup> <a name="projenCredentials" id="projen-modules.JsiiProjectOptions.property.projenCredentials"></a>

```typescript
public readonly projenCredentials: GithubCredentials;
```

- *Type:* projen.github.GithubCredentials
- *Default:* use a personal access token named PROJEN_GITHUB_TOKEN

Choose a method of providing GitHub API access for projen workflows.

---

##### `projenDevDependency`<sup>Optional</sup> <a name="projenDevDependency" id="projen-modules.JsiiProjectOptions.property.projenDevDependency"></a>

```typescript
public readonly projenDevDependency: boolean;
```

- *Type:* boolean
- *Default:* true if not a subproject

Indicates of "projen" should be installed as a devDependency.

---

##### `projenrcJs`<sup>Optional</sup> <a name="projenrcJs" id="projen-modules.JsiiProjectOptions.property.projenrcJs"></a>

```typescript
public readonly projenrcJs: boolean;
```

- *Type:* boolean
- *Default:* true if projenrcJson is false

Generate (once) .projenrc.js (in JavaScript). Set to `false` in order to disable .projenrc.js generation.

---

##### `projenrcJson`<sup>Optional</sup> <a name="projenrcJson" id="projen-modules.JsiiProjectOptions.property.projenrcJson"></a>

```typescript
public readonly projenrcJson: boolean;
```

- *Type:* boolean
- *Default:* false

Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation.

---

##### `projenrcJsonOptions`<sup>Optional</sup> <a name="projenrcJsonOptions" id="projen-modules.JsiiProjectOptions.property.projenrcJsonOptions"></a>

```typescript
public readonly projenrcJsonOptions: ProjenrcJsonOptions;
```

- *Type:* projen.ProjenrcJsonOptions
- *Default:* default options

Options for .projenrc.json.

---

##### `projenrcJsOptions`<sup>Optional</sup> <a name="projenrcJsOptions" id="projen-modules.JsiiProjectOptions.property.projenrcJsOptions"></a>

```typescript
public readonly projenrcJsOptions: ProjenrcOptions;
```

- *Type:* projen.javascript.ProjenrcOptions
- *Default:* default options

Options for .projenrc.js.

---

##### `projenrcTs`<sup>Optional</sup> <a name="projenrcTs" id="projen-modules.JsiiProjectOptions.property.projenrcTs"></a>

```typescript
public readonly projenrcTs: boolean;
```

- *Type:* boolean
- *Default:* false

Use TypeScript for your projenrc file (`.projenrc.ts`).

---

##### `projenrcTsOptions`<sup>Optional</sup> <a name="projenrcTsOptions" id="projen-modules.JsiiProjectOptions.property.projenrcTsOptions"></a>

```typescript
public readonly projenrcTsOptions: ProjenrcOptions;
```

- *Type:* projen.typescript.ProjenrcOptions

Options for .projenrc.ts.

---

##### ~~`projenTokenSecret`~~<sup>Optional</sup> <a name="projenTokenSecret" id="projen-modules.JsiiProjectOptions.property.projenTokenSecret"></a>

- *Deprecated:* use `projenCredentials`

```typescript
public readonly projenTokenSecret: string;
```

- *Type:* string
- *Default:* "PROJEN_GITHUB_TOKEN"

The name of a secret which includes a GitHub Personal Access Token to be used by projen workflows.

This token needs to have the `repo`, `workflows`
and `packages` scope.

---

##### `projenVersion`<sup>Optional</sup> <a name="projenVersion" id="projen-modules.JsiiProjectOptions.property.projenVersion"></a>

```typescript
public readonly projenVersion: string;
```

- *Type:* string
- *Default:* Defaults to the latest version.

Version of projen to install.

---

##### `publishDryRun`<sup>Optional</sup> <a name="publishDryRun" id="projen-modules.JsiiProjectOptions.property.publishDryRun"></a>

```typescript
public readonly publishDryRun: boolean;
```

- *Type:* boolean
- *Default:* false

Instead of actually publishing to package managers, just print the publishing command.

---

##### `publishTasks`<sup>Optional</sup> <a name="publishTasks" id="projen-modules.JsiiProjectOptions.property.publishTasks"></a>

```typescript
public readonly publishTasks: boolean;
```

- *Type:* boolean
- *Default:* false

Define publishing tasks that can be executed manually as well as workflows.

Normally, publishing only happens within automated workflows. Enable this
in order to create a publishing task for each publishing activity.

---

##### `publishToGo`<sup>Optional</sup> <a name="publishToGo" id="projen-modules.JsiiProjectOptions.property.publishToGo"></a>

```typescript
public readonly publishToGo: JsiiGoTarget;
```

- *Type:* projen.cdk.JsiiGoTarget
- *Default:* no publishing

Publish Go bindings to a git repository.

---

##### `publishToMaven`<sup>Optional</sup> <a name="publishToMaven" id="projen-modules.JsiiProjectOptions.property.publishToMaven"></a>

```typescript
public readonly publishToMaven: JsiiJavaTarget;
```

- *Type:* projen.cdk.JsiiJavaTarget
- *Default:* no publishing

Publish to maven.

---

##### `publishToNuget`<sup>Optional</sup> <a name="publishToNuget" id="projen-modules.JsiiProjectOptions.property.publishToNuget"></a>

```typescript
public readonly publishToNuget: JsiiDotNetTarget;
```

- *Type:* projen.cdk.JsiiDotNetTarget
- *Default:* no publishing

Publish to NuGet.

---

##### `publishToPypi`<sup>Optional</sup> <a name="publishToPypi" id="projen-modules.JsiiProjectOptions.property.publishToPypi"></a>

```typescript
public readonly publishToPypi: JsiiPythonTarget;
```

- *Type:* projen.cdk.JsiiPythonTarget
- *Default:* no publishing

Publish to pypi.

---

##### `pullRequestTemplate`<sup>Optional</sup> <a name="pullRequestTemplate" id="projen-modules.JsiiProjectOptions.property.pullRequestTemplate"></a>

```typescript
public readonly pullRequestTemplate: boolean;
```

- *Type:* boolean
- *Default:* true

Include a GitHub pull request template.

---

##### `pullRequestTemplateContents`<sup>Optional</sup> <a name="pullRequestTemplateContents" id="projen-modules.JsiiProjectOptions.property.pullRequestTemplateContents"></a>

```typescript
public readonly pullRequestTemplateContents: string[];
```

- *Type:* string[]
- *Default:* default content

The contents of the pull request template.

---

##### ~~`python`~~<sup>Optional</sup> <a name="python" id="projen-modules.JsiiProjectOptions.property.python"></a>

- *Deprecated:* use `publishToPyPi`

```typescript
public readonly python: JsiiPythonTarget;
```

- *Type:* projen.cdk.JsiiPythonTarget

---

##### `readme`<sup>Optional</sup> <a name="readme" id="projen-modules.JsiiProjectOptions.property.readme"></a>

```typescript
public readonly readme: ReadmeOptions;
```

- *Type:* <a href="#projen-modules.ReadmeOptions">ReadmeOptions</a>

Configuration of the README.md file.

---

##### `releasableCommits`<sup>Optional</sup> <a name="releasableCommits" id="projen-modules.JsiiProjectOptions.property.releasableCommits"></a>

```typescript
public readonly releasableCommits: ReleasableCommits;
```

- *Type:* projen.ReleasableCommits
- *Default:* ReleasableCommits.everyCommit()

Find commits that should be considered releasable Used to decide if a release is required.

---

##### `release`<sup>Optional</sup> <a name="release" id="projen-modules.JsiiProjectOptions.property.release"></a>

```typescript
public readonly release: boolean;
```

- *Type:* boolean
- *Default:* true (false for subprojects)

Add release management to this project.

---

##### `releaseBranches`<sup>Optional</sup> <a name="releaseBranches" id="projen-modules.JsiiProjectOptions.property.releaseBranches"></a>

```typescript
public readonly releaseBranches: {[ key: string ]: BranchOptions};
```

- *Type:* {[ key: string ]: projen.release.BranchOptions}
- *Default:* no additional branches are used for release. you can use `addBranch()` to add additional branches.

Defines additional release branches.

A workflow will be created for each
release branch which will publish releases from commits in this branch.
Each release branch _must_ be assigned a major version number which is used
to enforce that versions published from that branch always use that major
version. If multiple branches are used, the `majorVersion` field must also
be provided for the default branch.

---

##### `releaseEnvironment`<sup>Optional</sup> <a name="releaseEnvironment" id="projen-modules.JsiiProjectOptions.property.releaseEnvironment"></a>

```typescript
public readonly releaseEnvironment: string;
```

- *Type:* string
- *Default:* no environment used, unless set at the artifact level

The GitHub Actions environment used for the release.

This can be used to add an explicit approval step to the release
or limit who can initiate a release through environment protection rules.

When multiple artifacts are released, the environment can be overwritten
on a per artifact basis.

---

##### ~~`releaseEveryCommit`~~<sup>Optional</sup> <a name="releaseEveryCommit" id="projen-modules.JsiiProjectOptions.property.releaseEveryCommit"></a>

- *Deprecated:* Use `releaseTrigger: ReleaseTrigger.continuous()` instead

```typescript
public readonly releaseEveryCommit: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically release new versions every commit to one of branches in `releaseBranches`.

---

##### `releaseFailureIssue`<sup>Optional</sup> <a name="releaseFailureIssue" id="projen-modules.JsiiProjectOptions.property.releaseFailureIssue"></a>

```typescript
public readonly releaseFailureIssue: boolean;
```

- *Type:* boolean
- *Default:* false

Create a github issue on every failed publishing task.

---

##### `releaseFailureIssueLabel`<sup>Optional</sup> <a name="releaseFailureIssueLabel" id="projen-modules.JsiiProjectOptions.property.releaseFailureIssueLabel"></a>

```typescript
public readonly releaseFailureIssueLabel: string;
```

- *Type:* string
- *Default:* "failed-release"

The label to apply to issues indicating publish failures.

Only applies if `releaseFailureIssue` is true.

---

##### ~~`releaseSchedule`~~<sup>Optional</sup> <a name="releaseSchedule" id="projen-modules.JsiiProjectOptions.property.releaseSchedule"></a>

- *Deprecated:* Use `releaseTrigger: ReleaseTrigger.scheduled()` instead

```typescript
public readonly releaseSchedule: string;
```

- *Type:* string
- *Default:* no scheduled releases

CRON schedule to trigger new releases.

---

##### `releaseTagPrefix`<sup>Optional</sup> <a name="releaseTagPrefix" id="projen-modules.JsiiProjectOptions.property.releaseTagPrefix"></a>

```typescript
public readonly releaseTagPrefix: string;
```

- *Type:* string
- *Default:* "v"

Automatically add the given prefix to release tags.

Useful if you are releasing on multiple branches with overlapping version numbers.
Note: this prefix is used to detect the latest tagged version
when bumping, so if you change this on a project with an existing version
history, you may need to manually tag your latest release
with the new prefix.

---

##### `releaseToNpm`<sup>Optional</sup> <a name="releaseToNpm" id="projen-modules.JsiiProjectOptions.property.releaseToNpm"></a>

```typescript
public readonly releaseToNpm: boolean;
```

- *Type:* boolean
- *Default:* false

Automatically release to npm when new versions are introduced.

---

##### `releaseTrigger`<sup>Optional</sup> <a name="releaseTrigger" id="projen-modules.JsiiProjectOptions.property.releaseTrigger"></a>

```typescript
public readonly releaseTrigger: ReleaseTrigger;
```

- *Type:* projen.release.ReleaseTrigger
- *Default:* Continuous releases (`ReleaseTrigger.continuous()`)

The release trigger to use.

---

##### ~~`releaseWorkflow`~~<sup>Optional</sup> <a name="releaseWorkflow" id="projen-modules.JsiiProjectOptions.property.releaseWorkflow"></a>

- *Deprecated:* see `release`.

```typescript
public readonly releaseWorkflow: boolean;
```

- *Type:* boolean
- *Default:* true if not a subproject

DEPRECATED: renamed to `release`.

---

##### `releaseWorkflowEnv`<sup>Optional</sup> <a name="releaseWorkflowEnv" id="projen-modules.JsiiProjectOptions.property.releaseWorkflowEnv"></a>

```typescript
public readonly releaseWorkflowEnv: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* {}

Build environment variables for release workflows.

---

##### `releaseWorkflowName`<sup>Optional</sup> <a name="releaseWorkflowName" id="projen-modules.JsiiProjectOptions.property.releaseWorkflowName"></a>

```typescript
public readonly releaseWorkflowName: string;
```

- *Type:* string
- *Default:* "release"

The name of the default release workflow.

---

##### `releaseWorkflowSetupSteps`<sup>Optional</sup> <a name="releaseWorkflowSetupSteps" id="projen-modules.JsiiProjectOptions.property.releaseWorkflowSetupSteps"></a>

```typescript
public readonly releaseWorkflowSetupSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]

A set of workflow steps to execute in order to setup the workflow container.

---

##### `renovatebot`<sup>Optional</sup> <a name="renovatebot" id="projen-modules.JsiiProjectOptions.property.renovatebot"></a>

```typescript
public readonly renovatebot: boolean;
```

- *Type:* boolean
- *Default:* false

Use renovatebot to handle dependency upgrades.

---

##### `renovatebotOptions`<sup>Optional</sup> <a name="renovatebotOptions" id="projen-modules.JsiiProjectOptions.property.renovatebotOptions"></a>

```typescript
public readonly renovatebotOptions: RenovatebotOptions;
```

- *Type:* projen.RenovatebotOptions
- *Default:* default options

Options for renovatebot.

---

##### `repository`<sup>Optional</sup> <a name="repository" id="projen-modules.JsiiProjectOptions.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

The repository is the location where the actual code for your package lives.

See https://classic.yarnpkg.com/en/docs/package-json/#toc-repository

---

##### `repositoryDirectory`<sup>Optional</sup> <a name="repositoryDirectory" id="projen-modules.JsiiProjectOptions.property.repositoryDirectory"></a>

```typescript
public readonly repositoryDirectory: string;
```

- *Type:* string

If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives.

---

##### `rootdir`<sup>Optional</sup> <a name="rootdir" id="projen-modules.JsiiProjectOptions.property.rootdir"></a>

```typescript
public readonly rootdir: string;
```

- *Type:* string
- *Default:* "."

---

##### `sampleCode`<sup>Optional</sup> <a name="sampleCode" id="projen-modules.JsiiProjectOptions.property.sampleCode"></a>

```typescript
public readonly sampleCode: boolean;
```

- *Type:* boolean
- *Default:* true

Generate one-time sample in `src/` and `test/` if there are no files there.

---

##### `scopedPackagesOptions`<sup>Optional</sup> <a name="scopedPackagesOptions" id="projen-modules.JsiiProjectOptions.property.scopedPackagesOptions"></a>

```typescript
public readonly scopedPackagesOptions: ScopedPackagesOptions[];
```

- *Type:* projen.javascript.ScopedPackagesOptions[]
- *Default:* fetch all scoped packages from the public npm registry

Options for privately hosted scoped packages.

---

##### ~~`scripts`~~<sup>Optional</sup> <a name="scripts" id="projen-modules.JsiiProjectOptions.property.scripts"></a>

- *Deprecated:* use `project.addTask()` or `package.setScript()`

```typescript
public readonly scripts: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* {}

npm scripts to include.

If a script has the same name as a standard script,
the standard script will be overwritten.
Also adds the script as a task.

---

##### `srcdir`<sup>Optional</sup> <a name="srcdir" id="projen-modules.JsiiProjectOptions.property.srcdir"></a>

```typescript
public readonly srcdir: string;
```

- *Type:* string
- *Default:* "src"

Typescript sources directory.

---

##### `stability`<sup>Optional</sup> <a name="stability" id="projen-modules.JsiiProjectOptions.property.stability"></a>

```typescript
public readonly stability: string;
```

- *Type:* string

Package's Stability.

---

##### `stale`<sup>Optional</sup> <a name="stale" id="projen-modules.JsiiProjectOptions.property.stale"></a>

```typescript
public readonly stale: boolean;
```

- *Type:* boolean
- *Default:* false

Auto-close of stale issues and pull request.

See `staleOptions` for options.

---

##### `staleOptions`<sup>Optional</sup> <a name="staleOptions" id="projen-modules.JsiiProjectOptions.property.staleOptions"></a>

```typescript
public readonly staleOptions: StaleOptions;
```

- *Type:* projen.github.StaleOptions
- *Default:* see defaults in `StaleOptions`

Auto-close stale issues and pull requests.

To disable set `stale` to `false`.

---

##### `testdir`<sup>Optional</sup> <a name="testdir" id="projen-modules.JsiiProjectOptions.property.testdir"></a>

```typescript
public readonly testdir: string;
```

- *Type:* string
- *Default:* "test"

Jest tests directory.

Tests files should be named `xxx.test.ts`.
If this directory is under `srcdir` (e.g. `src/test`, `src/__tests__`),
then tests are going to be compiled into `lib/` and executed as javascript.
If the test directory is outside of `src`, then we configure jest to
compile the code in-memory.

---

##### `tsconfig`<sup>Optional</sup> <a name="tsconfig" id="projen-modules.JsiiProjectOptions.property.tsconfig"></a>

```typescript
public readonly tsconfig: TypescriptConfigOptions;
```

- *Type:* projen.javascript.TypescriptConfigOptions
- *Default:* default options

Custom TSConfig.

---

##### `tsconfigDev`<sup>Optional</sup> <a name="tsconfigDev" id="projen-modules.JsiiProjectOptions.property.tsconfigDev"></a>

```typescript
public readonly tsconfigDev: TypescriptConfigOptions;
```

- *Type:* projen.javascript.TypescriptConfigOptions
- *Default:* use the production tsconfig options

Custom tsconfig options for the development tsconfig.json file (used for testing).

---

##### `tsconfigDevFile`<sup>Optional</sup> <a name="tsconfigDevFile" id="projen-modules.JsiiProjectOptions.property.tsconfigDevFile"></a>

```typescript
public readonly tsconfigDevFile: string;
```

- *Type:* string
- *Default:* "tsconfig.dev.json"

The name of the development tsconfig.json file.

---

##### `tsJestOptions`<sup>Optional</sup> <a name="tsJestOptions" id="projen-modules.JsiiProjectOptions.property.tsJestOptions"></a>

```typescript
public readonly tsJestOptions: TsJestOptions;
```

- *Type:* projen.typescript.TsJestOptions

Options for ts-jest.

---

##### `typescriptVersion`<sup>Optional</sup> <a name="typescriptVersion" id="projen-modules.JsiiProjectOptions.property.typescriptVersion"></a>

```typescript
public readonly typescriptVersion: string;
```

- *Type:* string
- *Default:* "latest"

TypeScript version to use.

NOTE: Typescript is not semantically versioned and should remain on the
same minor, so we recommend using a `~` dependency (e.g. `~1.2.3`).

---

##### `versionrcOptions`<sup>Optional</sup> <a name="versionrcOptions" id="projen-modules.JsiiProjectOptions.property.versionrcOptions"></a>

```typescript
public readonly versionrcOptions: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}
- *Default:* standard configuration applicable for GitHub repositories

Custom configuration used when creating changelog with commit-and-tag-version package.

Given values either append to default configuration or overwrite values in it.

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="projen-modules.JsiiProjectOptions.property.vscode"></a>

```typescript
public readonly vscode: boolean;
```

- *Type:* boolean
- *Default:* true

Enable VSCode integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `workflowBootstrapSteps`<sup>Optional</sup> <a name="workflowBootstrapSteps" id="projen-modules.JsiiProjectOptions.property.workflowBootstrapSteps"></a>

```typescript
public readonly workflowBootstrapSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]
- *Default:* "yarn install --frozen-lockfile && yarn projen"

Workflow steps to use in order to bootstrap this repo.

---

##### `workflowContainerImage`<sup>Optional</sup> <a name="workflowContainerImage" id="projen-modules.JsiiProjectOptions.property.workflowContainerImage"></a>

```typescript
public readonly workflowContainerImage: string;
```

- *Type:* string
- *Default:* default image

Container image to use for GitHub workflows.

---

##### `workflowGitIdentity`<sup>Optional</sup> <a name="workflowGitIdentity" id="projen-modules.JsiiProjectOptions.property.workflowGitIdentity"></a>

```typescript
public readonly workflowGitIdentity: GitIdentity;
```

- *Type:* projen.github.GitIdentity
- *Default:* default GitHub Actions user

The git identity to use in workflows.

---

##### `workflowNodeVersion`<sup>Optional</sup> <a name="workflowNodeVersion" id="projen-modules.JsiiProjectOptions.property.workflowNodeVersion"></a>

```typescript
public readonly workflowNodeVersion: string;
```

- *Type:* string
- *Default:* `minNodeVersion` if set, otherwise `lts/*`.

The node version used in GitHub Actions workflows.

Always use this option if your GitHub Actions workflows require a specific to run.

---

##### `workflowPackageCache`<sup>Optional</sup> <a name="workflowPackageCache" id="projen-modules.JsiiProjectOptions.property.workflowPackageCache"></a>

```typescript
public readonly workflowPackageCache: boolean;
```

- *Type:* boolean
- *Default:* false

Enable Node.js package cache in GitHub workflows.

---

##### `workflowRunsOn`<sup>Optional</sup> <a name="workflowRunsOn" id="projen-modules.JsiiProjectOptions.property.workflowRunsOn"></a>

```typescript
public readonly workflowRunsOn: string[];
```

- *Type:* string[]
- *Default:* ["ubuntu-latest"]

Github Runner selection labels.

---

##### `workflowRunsOnGroup`<sup>Optional</sup> <a name="workflowRunsOnGroup" id="projen-modules.JsiiProjectOptions.property.workflowRunsOnGroup"></a>

```typescript
public readonly workflowRunsOnGroup: GroupRunnerOptions;
```

- *Type:* projen.GroupRunnerOptions

Github Runner Group selection options.

---

##### `yarnBerryOptions`<sup>Optional</sup> <a name="yarnBerryOptions" id="projen-modules.JsiiProjectOptions.property.yarnBerryOptions"></a>

```typescript
public readonly yarnBerryOptions: YarnBerryOptions;
```

- *Type:* projen.javascript.YarnBerryOptions
- *Default:* Yarn Berry v4 with all default options

Options for Yarn Berry.

---

### NpmPackageOptions <a name="NpmPackageOptions" id="projen-modules.NpmPackageOptions"></a>

NpmPackageOptions.

#### Initializer <a name="Initializer" id="projen-modules.NpmPackageOptions.Initializer"></a>

```typescript
import { NpmPackageOptions } from 'projen-modules'

const npmPackageOptions: NpmPackageOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen-modules.NpmPackageOptions.property.codeOwners">codeOwners</a></code> | <code>string[]</code> | List of teams used to generate the CODEOWNERS file. |
| <code><a href="#projen-modules.NpmPackageOptions.property.name">name</a></code> | <code>string</code> | This is the name of your project. |
| <code><a href="#projen-modules.NpmPackageOptions.property.allowLibraryDependencies">allowLibraryDependencies</a></code> | <code>boolean</code> | Allow the project to include `peerDependencies` and `bundledDependencies`. |
| <code><a href="#projen-modules.NpmPackageOptions.property.artifactsDirectory">artifactsDirectory</a></code> | <code>string</code> | A directory which will contain build artifacts. |
| <code><a href="#projen-modules.NpmPackageOptions.property.authorEmail">authorEmail</a></code> | <code>string</code> | Author's e-mail. |
| <code><a href="#projen-modules.NpmPackageOptions.property.authorName">authorName</a></code> | <code>string</code> | Author's name. |
| <code><a href="#projen-modules.NpmPackageOptions.property.authorOrganization">authorOrganization</a></code> | <code>boolean</code> | Is the author an organization. |
| <code><a href="#projen-modules.NpmPackageOptions.property.authorUrl">authorUrl</a></code> | <code>string</code> | Author's URL / Website. |
| <code><a href="#projen-modules.NpmPackageOptions.property.autoApproveOptions">autoApproveOptions</a></code> | <code>projen.github.AutoApproveOptions</code> | Enable and configure the 'auto approve' workflow. |
| <code><a href="#projen-modules.NpmPackageOptions.property.autoApproveUpgrades">autoApproveUpgrades</a></code> | <code>boolean</code> | Automatically approve deps upgrade PRs, allowing them to be merged by mergify (if configued). |
| <code><a href="#projen-modules.NpmPackageOptions.property.autoDetectBin">autoDetectBin</a></code> | <code>boolean</code> | Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section. |
| <code><a href="#projen-modules.NpmPackageOptions.property.autoMerge">autoMerge</a></code> | <code>boolean</code> | Enable automatic merging on GitHub. |
| <code><a href="#projen-modules.NpmPackageOptions.property.autoMergeOptions">autoMergeOptions</a></code> | <code>projen.github.AutoMergeOptions</code> | Configure options for automatic merging on GitHub. |
| <code><a href="#projen-modules.NpmPackageOptions.property.bin">bin</a></code> | <code>{[ key: string ]: string}</code> | Binary programs vended with your module. |
| <code><a href="#projen-modules.NpmPackageOptions.property.biome">biome</a></code> | <code>boolean</code> | Setup Biome. |
| <code><a href="#projen-modules.NpmPackageOptions.property.biomeOptions">biomeOptions</a></code> | <code>projen.javascript.BiomeOptions</code> | Biome options. |
| <code><a href="#projen-modules.NpmPackageOptions.property.bugsEmail">bugsEmail</a></code> | <code>string</code> | The email address to which issues should be reported. |
| <code><a href="#projen-modules.NpmPackageOptions.property.bugsUrl">bugsUrl</a></code> | <code>string</code> | The url to your project's issue tracker. |
| <code><a href="#projen-modules.NpmPackageOptions.property.buildWorkflow">buildWorkflow</a></code> | <code>boolean</code> | Define a GitHub workflow for building PRs. |
| <code><a href="#projen-modules.NpmPackageOptions.property.buildWorkflowOptions">buildWorkflowOptions</a></code> | <code>projen.javascript.BuildWorkflowOptions</code> | Options for PR build workflow. |
| <code><a href="#projen-modules.NpmPackageOptions.property.buildWorkflowTriggers">buildWorkflowTriggers</a></code> | <code>projen.github.workflows.Triggers</code> | Build workflow triggers. |
| <code><a href="#projen-modules.NpmPackageOptions.property.bumpPackage">bumpPackage</a></code> | <code>string</code> | The `commit-and-tag-version` compatible package used to bump the package version, as a dependency string. |
| <code><a href="#projen-modules.NpmPackageOptions.property.bundledDeps">bundledDeps</a></code> | <code>string[]</code> | List of dependencies to bundle into this module. |
| <code><a href="#projen-modules.NpmPackageOptions.property.bundlerOptions">bundlerOptions</a></code> | <code>projen.javascript.BundlerOptions</code> | Options for `Bundler`. |
| <code><a href="#projen-modules.NpmPackageOptions.property.bunVersion">bunVersion</a></code> | <code>string</code> | The version of Bun to use if using Bun as a package manager. |
| <code><a href="#projen-modules.NpmPackageOptions.property.checkLicenses">checkLicenses</a></code> | <code>projen.javascript.LicenseCheckerOptions</code> | Configure which licenses should be deemed acceptable for use by dependencies. |
| <code><a href="#projen-modules.NpmPackageOptions.property.clobber">clobber</a></code> | <code>boolean</code> | Add a `clobber` task which resets the repo to origin. |
| <code><a href="#projen-modules.NpmPackageOptions.property.codeArtifactOptions">codeArtifactOptions</a></code> | <code>projen.javascript.CodeArtifactOptions</code> | Options for npm packages using AWS CodeArtifact. |
| <code><a href="#projen-modules.NpmPackageOptions.property.codeCov">codeCov</a></code> | <code>boolean</code> | Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v5 By default, OIDC auth is used. Alternatively a token can be provided via `codeCovTokenSecret`. |
| <code><a href="#projen-modules.NpmPackageOptions.property.codeCovTokenSecret">codeCovTokenSecret</a></code> | <code>string</code> | Define the secret name for a specified https://codecov.io/ token. |
| <code><a href="#projen-modules.NpmPackageOptions.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#projen-modules.NpmPackageOptions.property.copyrightOwner">copyrightOwner</a></code> | <code>string</code> | License copyright owner. |
| <code><a href="#projen-modules.NpmPackageOptions.property.copyrightPeriod">copyrightPeriod</a></code> | <code>string</code> | The copyright years to put in the LICENSE file. |
| <code><a href="#projen-modules.NpmPackageOptions.property.defaultReleaseBranch">defaultReleaseBranch</a></code> | <code>string</code> | The name of the main release branch. |
| <code><a href="#projen-modules.NpmPackageOptions.property.dependabot">dependabot</a></code> | <code>boolean</code> | Use dependabot to handle dependency upgrades. |
| <code><a href="#projen-modules.NpmPackageOptions.property.dependabotOptions">dependabotOptions</a></code> | <code>projen.github.DependabotOptions</code> | Options for dependabot. |
| <code><a href="#projen-modules.NpmPackageOptions.property.deps">deps</a></code> | <code>string[]</code> | Runtime dependencies of this module. |
| <code><a href="#projen-modules.NpmPackageOptions.property.depsUpgrade">depsUpgrade</a></code> | <code>boolean</code> | Use tasks and github workflows to handle dependency upgrades. |
| <code><a href="#projen-modules.NpmPackageOptions.property.depsUpgradeOptions">depsUpgradeOptions</a></code> | <code>projen.javascript.UpgradeDependenciesOptions</code> | Options for `UpgradeDependencies`. |
| <code><a href="#projen-modules.NpmPackageOptions.property.description">description</a></code> | <code>string</code> | The description is just a string that helps people understand the purpose of the package. |
| <code><a href="#projen-modules.NpmPackageOptions.property.devContainer">devContainer</a></code> | <code>boolean</code> | Add a VSCode development environment (used for GitHub Codespaces). |
| <code><a href="#projen-modules.NpmPackageOptions.property.devDeps">devDeps</a></code> | <code>string[]</code> | Build dependencies for this module. |
| <code><a href="#projen-modules.NpmPackageOptions.property.disableTsconfig">disableTsconfig</a></code> | <code>boolean</code> | Do not generate a `tsconfig.json` file (used by jsii projects since tsconfig.json is generated by the jsii compiler). |
| <code><a href="#projen-modules.NpmPackageOptions.property.disableTsconfigDev">disableTsconfigDev</a></code> | <code>boolean</code> | Do not generate a `tsconfig.dev.json` file. |
| <code><a href="#projen-modules.NpmPackageOptions.property.docgen">docgen</a></code> | <code>boolean</code> | Docgen by Typedoc. |
| <code><a href="#projen-modules.NpmPackageOptions.property.docsDirectory">docsDirectory</a></code> | <code>string</code> | Docs directory. |
| <code><a href="#projen-modules.NpmPackageOptions.property.entrypoint">entrypoint</a></code> | <code>string</code> | Module entrypoint (`main` in `package.json`). Set to an empty string to not include `main` in your package.json. |
| <code><a href="#projen-modules.NpmPackageOptions.property.entrypointTypes">entrypointTypes</a></code> | <code>string</code> | The .d.ts file that includes the type declarations for this module. |
| <code><a href="#projen-modules.NpmPackageOptions.property.eslint">eslint</a></code> | <code>boolean</code> | Setup eslint. |
| <code><a href="#projen-modules.NpmPackageOptions.property.eslintOptions">eslintOptions</a></code> | <code>projen.javascript.EslintOptions</code> | Eslint options. |
| <code><a href="#projen-modules.NpmPackageOptions.property.github">github</a></code> | <code>boolean</code> | Enable GitHub integration. |
| <code><a href="#projen-modules.NpmPackageOptions.property.githubOptions">githubOptions</a></code> | <code>projen.github.GitHubOptions</code> | Options for GitHub integration. |
| <code><a href="#projen-modules.NpmPackageOptions.property.gitignore">gitignore</a></code> | <code>string[]</code> | Additional entries to .gitignore. |
| <code><a href="#projen-modules.NpmPackageOptions.property.gitIgnoreOptions">gitIgnoreOptions</a></code> | <code>projen.IgnoreFileOptions</code> | Configuration options for .gitignore file. |
| <code><a href="#projen-modules.NpmPackageOptions.property.gitOptions">gitOptions</a></code> | <code>projen.GitOptions</code> | Configuration options for git. |
| <code><a href="#projen-modules.NpmPackageOptions.property.gitpod">gitpod</a></code> | <code>boolean</code> | Add a Gitpod development environment. |
| <code><a href="#projen-modules.NpmPackageOptions.property.homepage">homepage</a></code> | <code>string</code> | Package's Homepage / Website. |
| <code><a href="#projen-modules.NpmPackageOptions.property.jest">jest</a></code> | <code>boolean</code> | Setup jest unit tests. |
| <code><a href="#projen-modules.NpmPackageOptions.property.jestOptions">jestOptions</a></code> | <code>projen.javascript.JestOptions</code> | Jest options. |
| <code><a href="#projen-modules.NpmPackageOptions.property.jsiiReleaseVersion">jsiiReleaseVersion</a></code> | <code>string</code> | Version requirement of `publib` which is used to publish modules to npm. |
| <code><a href="#projen-modules.NpmPackageOptions.property.keywords">keywords</a></code> | <code>string[]</code> | Keywords to include in `package.json`. |
| <code><a href="#projen-modules.NpmPackageOptions.property.libdir">libdir</a></code> | <code>string</code> | Typescript  artifacts output directory. |
| <code><a href="#projen-modules.NpmPackageOptions.property.license">license</a></code> | <code>string</code> | License's SPDX identifier. |
| <code><a href="#projen-modules.NpmPackageOptions.property.licensed">licensed</a></code> | <code>boolean</code> | Indicates if a license should be added. |
| <code><a href="#projen-modules.NpmPackageOptions.property.logging">logging</a></code> | <code>projen.LoggerOptions</code> | Configure logging options such as verbosity. |
| <code><a href="#projen-modules.NpmPackageOptions.property.majorVersion">majorVersion</a></code> | <code>number</code> | Major version to release from the default branch. |
| <code><a href="#projen-modules.NpmPackageOptions.property.maxNodeVersion">maxNodeVersion</a></code> | <code>string</code> | The maximum node version supported by this package. |
| <code><a href="#projen-modules.NpmPackageOptions.property.mergify">mergify</a></code> | <code>boolean</code> | Whether mergify should be enabled on this repository or not. |
| <code><a href="#projen-modules.NpmPackageOptions.property.mergifyOptions">mergifyOptions</a></code> | <code>projen.github.MergifyOptions</code> | Options for mergify. |
| <code><a href="#projen-modules.NpmPackageOptions.property.minMajorVersion">minMajorVersion</a></code> | <code>number</code> | Minimal Major version to release. |
| <code><a href="#projen-modules.NpmPackageOptions.property.minNodeVersion">minNodeVersion</a></code> | <code>string</code> | The minimum node version required by this package to function. |
| <code><a href="#projen-modules.NpmPackageOptions.property.mutableBuild">mutableBuild</a></code> | <code>boolean</code> | Automatically update files modified during builds to pull-request branches. |
| <code><a href="#projen-modules.NpmPackageOptions.property.nextVersionCommand">nextVersionCommand</a></code> | <code>string</code> | A shell command to control the next version to release. |
| <code><a href="#projen-modules.NpmPackageOptions.property.npmAccess">npmAccess</a></code> | <code>projen.javascript.NpmAccess</code> | Access level of the npm package. |
| <code><a href="#projen-modules.NpmPackageOptions.property.npmDistTag">npmDistTag</a></code> | <code>string</code> | The npmDistTag to use when publishing from the default branch. |
| <code><a href="#projen-modules.NpmPackageOptions.property.npmignore">npmignore</a></code> | <code>string[]</code> | Additional entries to .npmignore. |
| <code><a href="#projen-modules.NpmPackageOptions.property.npmignoreEnabled">npmignoreEnabled</a></code> | <code>boolean</code> | Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs. |
| <code><a href="#projen-modules.NpmPackageOptions.property.npmIgnoreOptions">npmIgnoreOptions</a></code> | <code>projen.IgnoreFileOptions</code> | Configuration options for .npmignore file. |
| <code><a href="#projen-modules.NpmPackageOptions.property.npmProvenance">npmProvenance</a></code> | <code>boolean</code> | Should provenance statements be generated when the package is published. |
| <code><a href="#projen-modules.NpmPackageOptions.property.npmRegistry">npmRegistry</a></code> | <code>string</code> | The host name of the npm registry to publish to. |
| <code><a href="#projen-modules.NpmPackageOptions.property.npmRegistryUrl">npmRegistryUrl</a></code> | <code>string</code> | The base URL of the npm package registry. |
| <code><a href="#projen-modules.NpmPackageOptions.property.npmTokenSecret">npmTokenSecret</a></code> | <code>string</code> | GitHub secret which contains the NPM token to use when publishing packages. |
| <code><a href="#projen-modules.NpmPackageOptions.property.npmTrustedPublishing">npmTrustedPublishing</a></code> | <code>boolean</code> | Use trusted publishing for publishing to npmjs.com Needs to be pre-configured on npm.js to work. |
| <code><a href="#projen-modules.NpmPackageOptions.property.outdir">outdir</a></code> | <code>string</code> | The root directory of the project. Relative to this directory, all files are synthesized. |
| <code><a href="#projen-modules.NpmPackageOptions.property.package">package</a></code> | <code>boolean</code> | Defines a `package` task that will produce an npm tarball under the artifacts directory (e.g. `dist`). |
| <code><a href="#projen-modules.NpmPackageOptions.property.packageManager">packageManager</a></code> | <code>projen.javascript.NodePackageManager</code> | The Node Package Manager used to execute scripts. |
| <code><a href="#projen-modules.NpmPackageOptions.property.packageName">packageName</a></code> | <code>string</code> | The "name" in package.json. |
| <code><a href="#projen-modules.NpmPackageOptions.property.parent">parent</a></code> | <code>projen.Project</code> | The parent project, if this project is part of a bigger project. |
| <code><a href="#projen-modules.NpmPackageOptions.property.peerDependencyOptions">peerDependencyOptions</a></code> | <code>projen.javascript.PeerDependencyOptions</code> | Options for `peerDeps`. |
| <code><a href="#projen-modules.NpmPackageOptions.property.peerDeps">peerDeps</a></code> | <code>string[]</code> | Peer dependencies for this module. |
| <code><a href="#projen-modules.NpmPackageOptions.property.pnpmVersion">pnpmVersion</a></code> | <code>string</code> | The version of PNPM to use if using PNPM as a package manager. |
| <code><a href="#projen-modules.NpmPackageOptions.property.postBuildSteps">postBuildSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | Steps to execute after build as part of the release workflow. |
| <code><a href="#projen-modules.NpmPackageOptions.property.prerelease">prerelease</a></code> | <code>string</code> | Bump versions from the default branch as pre-releases (e.g. "beta", "alpha", "pre"). |
| <code><a href="#projen-modules.NpmPackageOptions.property.prettier">prettier</a></code> | <code>boolean</code> | Setup prettier. |
| <code><a href="#projen-modules.NpmPackageOptions.property.prettierOptions">prettierOptions</a></code> | <code>projen.javascript.PrettierOptions</code> | Prettier options. |
| <code><a href="#projen-modules.NpmPackageOptions.property.projectType">projectType</a></code> | <code>projen.ProjectType</code> | Which type of project this is (library/app). |
| <code><a href="#projen-modules.NpmPackageOptions.property.projenCommand">projenCommand</a></code> | <code>string</code> | The shell command to use in order to run the projen CLI. |
| <code><a href="#projen-modules.NpmPackageOptions.property.projenCredentials">projenCredentials</a></code> | <code>projen.github.GithubCredentials</code> | Choose a method of providing GitHub API access for projen workflows. |
| <code><a href="#projen-modules.NpmPackageOptions.property.projenDevDependency">projenDevDependency</a></code> | <code>boolean</code> | Indicates of "projen" should be installed as a devDependency. |
| <code><a href="#projen-modules.NpmPackageOptions.property.projenrcJs">projenrcJs</a></code> | <code>boolean</code> | Generate (once) .projenrc.js (in JavaScript). Set to `false` in order to disable .projenrc.js generation. |
| <code><a href="#projen-modules.NpmPackageOptions.property.projenrcJson">projenrcJson</a></code> | <code>boolean</code> | Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation. |
| <code><a href="#projen-modules.NpmPackageOptions.property.projenrcJsonOptions">projenrcJsonOptions</a></code> | <code>projen.ProjenrcJsonOptions</code> | Options for .projenrc.json. |
| <code><a href="#projen-modules.NpmPackageOptions.property.projenrcJsOptions">projenrcJsOptions</a></code> | <code>projen.javascript.ProjenrcOptions</code> | Options for .projenrc.js. |
| <code><a href="#projen-modules.NpmPackageOptions.property.projenrcTs">projenrcTs</a></code> | <code>boolean</code> | Use TypeScript for your projenrc file (`.projenrc.ts`). |
| <code><a href="#projen-modules.NpmPackageOptions.property.projenrcTsOptions">projenrcTsOptions</a></code> | <code>projen.typescript.ProjenrcOptions</code> | Options for .projenrc.ts. |
| <code><a href="#projen-modules.NpmPackageOptions.property.projenTokenSecret">projenTokenSecret</a></code> | <code>string</code> | The name of a secret which includes a GitHub Personal Access Token to be used by projen workflows. |
| <code><a href="#projen-modules.NpmPackageOptions.property.projenVersion">projenVersion</a></code> | <code>string</code> | Version of projen to install. |
| <code><a href="#projen-modules.NpmPackageOptions.property.publishDryRun">publishDryRun</a></code> | <code>boolean</code> | Instead of actually publishing to package managers, just print the publishing command. |
| <code><a href="#projen-modules.NpmPackageOptions.property.publishTasks">publishTasks</a></code> | <code>boolean</code> | Define publishing tasks that can be executed manually as well as workflows. |
| <code><a href="#projen-modules.NpmPackageOptions.property.pullRequestTemplate">pullRequestTemplate</a></code> | <code>boolean</code> | Include a GitHub pull request template. |
| <code><a href="#projen-modules.NpmPackageOptions.property.pullRequestTemplateContents">pullRequestTemplateContents</a></code> | <code>string[]</code> | The contents of the pull request template. |
| <code><a href="#projen-modules.NpmPackageOptions.property.readme">readme</a></code> | <code><a href="#projen-modules.ReadmeOptions">ReadmeOptions</a></code> | Configuration of the README.md file. |
| <code><a href="#projen-modules.NpmPackageOptions.property.releasableCommits">releasableCommits</a></code> | <code>projen.ReleasableCommits</code> | Find commits that should be considered releasable Used to decide if a release is required. |
| <code><a href="#projen-modules.NpmPackageOptions.property.release">release</a></code> | <code>boolean</code> | Add release management to this project. |
| <code><a href="#projen-modules.NpmPackageOptions.property.releaseBranches">releaseBranches</a></code> | <code>{[ key: string ]: projen.release.BranchOptions}</code> | Defines additional release branches. |
| <code><a href="#projen-modules.NpmPackageOptions.property.releaseEnvironment">releaseEnvironment</a></code> | <code>string</code> | The GitHub Actions environment used for the release. |
| <code><a href="#projen-modules.NpmPackageOptions.property.releaseEveryCommit">releaseEveryCommit</a></code> | <code>boolean</code> | Automatically release new versions every commit to one of branches in `releaseBranches`. |
| <code><a href="#projen-modules.NpmPackageOptions.property.releaseFailureIssue">releaseFailureIssue</a></code> | <code>boolean</code> | Create a github issue on every failed publishing task. |
| <code><a href="#projen-modules.NpmPackageOptions.property.releaseFailureIssueLabel">releaseFailureIssueLabel</a></code> | <code>string</code> | The label to apply to issues indicating publish failures. |
| <code><a href="#projen-modules.NpmPackageOptions.property.releaseSchedule">releaseSchedule</a></code> | <code>string</code> | CRON schedule to trigger new releases. |
| <code><a href="#projen-modules.NpmPackageOptions.property.releaseTagPrefix">releaseTagPrefix</a></code> | <code>string</code> | Automatically add the given prefix to release tags. |
| <code><a href="#projen-modules.NpmPackageOptions.property.releaseToNpm">releaseToNpm</a></code> | <code>boolean</code> | Automatically release to npm when new versions are introduced. |
| <code><a href="#projen-modules.NpmPackageOptions.property.releaseTrigger">releaseTrigger</a></code> | <code>projen.release.ReleaseTrigger</code> | The release trigger to use. |
| <code><a href="#projen-modules.NpmPackageOptions.property.releaseWorkflow">releaseWorkflow</a></code> | <code>boolean</code> | DEPRECATED: renamed to `release`. |
| <code><a href="#projen-modules.NpmPackageOptions.property.releaseWorkflowEnv">releaseWorkflowEnv</a></code> | <code>{[ key: string ]: string}</code> | Build environment variables for release workflows. |
| <code><a href="#projen-modules.NpmPackageOptions.property.releaseWorkflowName">releaseWorkflowName</a></code> | <code>string</code> | The name of the default release workflow. |
| <code><a href="#projen-modules.NpmPackageOptions.property.releaseWorkflowSetupSteps">releaseWorkflowSetupSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | A set of workflow steps to execute in order to setup the workflow container. |
| <code><a href="#projen-modules.NpmPackageOptions.property.renovatebot">renovatebot</a></code> | <code>boolean</code> | Use renovatebot to handle dependency upgrades. |
| <code><a href="#projen-modules.NpmPackageOptions.property.renovatebotOptions">renovatebotOptions</a></code> | <code>projen.RenovatebotOptions</code> | Options for renovatebot. |
| <code><a href="#projen-modules.NpmPackageOptions.property.repository">repository</a></code> | <code>string</code> | The repository is the location where the actual code for your package lives. |
| <code><a href="#projen-modules.NpmPackageOptions.property.repositoryDirectory">repositoryDirectory</a></code> | <code>string</code> | If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives. |
| <code><a href="#projen-modules.NpmPackageOptions.property.sampleCode">sampleCode</a></code> | <code>boolean</code> | Generate one-time sample in `src/` and `test/` if there are no files there. |
| <code><a href="#projen-modules.NpmPackageOptions.property.scopedPackagesOptions">scopedPackagesOptions</a></code> | <code>projen.javascript.ScopedPackagesOptions[]</code> | Options for privately hosted scoped packages. |
| <code><a href="#projen-modules.NpmPackageOptions.property.scripts">scripts</a></code> | <code>{[ key: string ]: string}</code> | npm scripts to include. |
| <code><a href="#projen-modules.NpmPackageOptions.property.srcdir">srcdir</a></code> | <code>string</code> | Typescript sources directory. |
| <code><a href="#projen-modules.NpmPackageOptions.property.stability">stability</a></code> | <code>string</code> | Package's Stability. |
| <code><a href="#projen-modules.NpmPackageOptions.property.stale">stale</a></code> | <code>boolean</code> | Auto-close of stale issues and pull request. |
| <code><a href="#projen-modules.NpmPackageOptions.property.staleOptions">staleOptions</a></code> | <code>projen.github.StaleOptions</code> | Auto-close stale issues and pull requests. |
| <code><a href="#projen-modules.NpmPackageOptions.property.testdir">testdir</a></code> | <code>string</code> | Jest tests directory. |
| <code><a href="#projen-modules.NpmPackageOptions.property.tsconfig">tsconfig</a></code> | <code>projen.javascript.TypescriptConfigOptions</code> | Custom TSConfig. |
| <code><a href="#projen-modules.NpmPackageOptions.property.tsconfigDev">tsconfigDev</a></code> | <code>projen.javascript.TypescriptConfigOptions</code> | Custom tsconfig options for the development tsconfig.json file (used for testing). |
| <code><a href="#projen-modules.NpmPackageOptions.property.tsconfigDevFile">tsconfigDevFile</a></code> | <code>string</code> | The name of the development tsconfig.json file. |
| <code><a href="#projen-modules.NpmPackageOptions.property.tsJestOptions">tsJestOptions</a></code> | <code>projen.typescript.TsJestOptions</code> | Options for ts-jest. |
| <code><a href="#projen-modules.NpmPackageOptions.property.typescriptVersion">typescriptVersion</a></code> | <code>string</code> | TypeScript version to use. |
| <code><a href="#projen-modules.NpmPackageOptions.property.versionrcOptions">versionrcOptions</a></code> | <code>{[ key: string ]: any}</code> | Custom configuration used when creating changelog with commit-and-tag-version package. |
| <code><a href="#projen-modules.NpmPackageOptions.property.vscode">vscode</a></code> | <code>boolean</code> | Enable VSCode integration. |
| <code><a href="#projen-modules.NpmPackageOptions.property.workflowBootstrapSteps">workflowBootstrapSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | Workflow steps to use in order to bootstrap this repo. |
| <code><a href="#projen-modules.NpmPackageOptions.property.workflowContainerImage">workflowContainerImage</a></code> | <code>string</code> | Container image to use for GitHub workflows. |
| <code><a href="#projen-modules.NpmPackageOptions.property.workflowGitIdentity">workflowGitIdentity</a></code> | <code>projen.github.GitIdentity</code> | The git identity to use in workflows. |
| <code><a href="#projen-modules.NpmPackageOptions.property.workflowNodeVersion">workflowNodeVersion</a></code> | <code>string</code> | The node version used in GitHub Actions workflows. |
| <code><a href="#projen-modules.NpmPackageOptions.property.workflowPackageCache">workflowPackageCache</a></code> | <code>boolean</code> | Enable Node.js package cache in GitHub workflows. |
| <code><a href="#projen-modules.NpmPackageOptions.property.workflowRunsOn">workflowRunsOn</a></code> | <code>string[]</code> | Github Runner selection labels. |
| <code><a href="#projen-modules.NpmPackageOptions.property.workflowRunsOnGroup">workflowRunsOnGroup</a></code> | <code>projen.GroupRunnerOptions</code> | Github Runner Group selection options. |
| <code><a href="#projen-modules.NpmPackageOptions.property.yarnBerryOptions">yarnBerryOptions</a></code> | <code>projen.javascript.YarnBerryOptions</code> | Options for Yarn Berry. |

---

##### `codeOwners`<sup>Required</sup> <a name="codeOwners" id="projen-modules.NpmPackageOptions.property.codeOwners"></a>

```typescript
public readonly codeOwners: string[];
```

- *Type:* string[]

List of teams used to generate the CODEOWNERS file.

---

##### `name`<sup>Required</sup> <a name="name" id="projen-modules.NpmPackageOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* $BASEDIR

This is the name of your project.

---

##### `allowLibraryDependencies`<sup>Optional</sup> <a name="allowLibraryDependencies" id="projen-modules.NpmPackageOptions.property.allowLibraryDependencies"></a>

```typescript
public readonly allowLibraryDependencies: boolean;
```

- *Type:* boolean
- *Default:* true

Allow the project to include `peerDependencies` and `bundledDependencies`.

This is normally only allowed for libraries. For apps, there's no meaning
for specifying these.

---

##### `artifactsDirectory`<sup>Optional</sup> <a name="artifactsDirectory" id="projen-modules.NpmPackageOptions.property.artifactsDirectory"></a>

```typescript
public readonly artifactsDirectory: string;
```

- *Type:* string
- *Default:* "dist"

A directory which will contain build artifacts.

---

##### `authorEmail`<sup>Optional</sup> <a name="authorEmail" id="projen-modules.NpmPackageOptions.property.authorEmail"></a>

```typescript
public readonly authorEmail: string;
```

- *Type:* string

Author's e-mail.

---

##### `authorName`<sup>Optional</sup> <a name="authorName" id="projen-modules.NpmPackageOptions.property.authorName"></a>

```typescript
public readonly authorName: string;
```

- *Type:* string

Author's name.

---

##### `authorOrganization`<sup>Optional</sup> <a name="authorOrganization" id="projen-modules.NpmPackageOptions.property.authorOrganization"></a>

```typescript
public readonly authorOrganization: boolean;
```

- *Type:* boolean

Is the author an organization.

---

##### `authorUrl`<sup>Optional</sup> <a name="authorUrl" id="projen-modules.NpmPackageOptions.property.authorUrl"></a>

```typescript
public readonly authorUrl: string;
```

- *Type:* string

Author's URL / Website.

---

##### `autoApproveOptions`<sup>Optional</sup> <a name="autoApproveOptions" id="projen-modules.NpmPackageOptions.property.autoApproveOptions"></a>

```typescript
public readonly autoApproveOptions: AutoApproveOptions;
```

- *Type:* projen.github.AutoApproveOptions
- *Default:* auto approve is disabled

Enable and configure the 'auto approve' workflow.

---

##### `autoApproveUpgrades`<sup>Optional</sup> <a name="autoApproveUpgrades" id="projen-modules.NpmPackageOptions.property.autoApproveUpgrades"></a>

```typescript
public readonly autoApproveUpgrades: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically approve deps upgrade PRs, allowing them to be merged by mergify (if configued).

Throw if set to true but `autoApproveOptions` are not defined.

---

##### `autoDetectBin`<sup>Optional</sup> <a name="autoDetectBin" id="projen-modules.NpmPackageOptions.property.autoDetectBin"></a>

```typescript
public readonly autoDetectBin: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section.

---

##### `autoMerge`<sup>Optional</sup> <a name="autoMerge" id="projen-modules.NpmPackageOptions.property.autoMerge"></a>

```typescript
public readonly autoMerge: boolean;
```

- *Type:* boolean
- *Default:* true

Enable automatic merging on GitHub.

Has no effect if `github.mergify`
is set to false.

---

##### `autoMergeOptions`<sup>Optional</sup> <a name="autoMergeOptions" id="projen-modules.NpmPackageOptions.property.autoMergeOptions"></a>

```typescript
public readonly autoMergeOptions: AutoMergeOptions;
```

- *Type:* projen.github.AutoMergeOptions
- *Default:* see defaults in `AutoMergeOptions`

Configure options for automatic merging on GitHub.

Has no effect if
`github.mergify` or `autoMerge` is set to false.

---

##### `bin`<sup>Optional</sup> <a name="bin" id="projen-modules.NpmPackageOptions.property.bin"></a>

```typescript
public readonly bin: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Binary programs vended with your module.

You can use this option to add/customize how binaries are represented in
your `package.json`, but unless `autoDetectBin` is `false`, every
executable file under `bin` will automatically be added to this section.

---

##### `biome`<sup>Optional</sup> <a name="biome" id="projen-modules.NpmPackageOptions.property.biome"></a>

```typescript
public readonly biome: boolean;
```

- *Type:* boolean
- *Default:* false

Setup Biome.

---

##### `biomeOptions`<sup>Optional</sup> <a name="biomeOptions" id="projen-modules.NpmPackageOptions.property.biomeOptions"></a>

```typescript
public readonly biomeOptions: BiomeOptions;
```

- *Type:* projen.javascript.BiomeOptions
- *Default:* default options

Biome options.

---

##### `bugsEmail`<sup>Optional</sup> <a name="bugsEmail" id="projen-modules.NpmPackageOptions.property.bugsEmail"></a>

```typescript
public readonly bugsEmail: string;
```

- *Type:* string

The email address to which issues should be reported.

---

##### `bugsUrl`<sup>Optional</sup> <a name="bugsUrl" id="projen-modules.NpmPackageOptions.property.bugsUrl"></a>

```typescript
public readonly bugsUrl: string;
```

- *Type:* string

The url to your project's issue tracker.

---

##### `buildWorkflow`<sup>Optional</sup> <a name="buildWorkflow" id="projen-modules.NpmPackageOptions.property.buildWorkflow"></a>

```typescript
public readonly buildWorkflow: boolean;
```

- *Type:* boolean
- *Default:* true if not a subproject

Define a GitHub workflow for building PRs.

---

##### `buildWorkflowOptions`<sup>Optional</sup> <a name="buildWorkflowOptions" id="projen-modules.NpmPackageOptions.property.buildWorkflowOptions"></a>

```typescript
public readonly buildWorkflowOptions: BuildWorkflowOptions;
```

- *Type:* projen.javascript.BuildWorkflowOptions

Options for PR build workflow.

---

##### ~~`buildWorkflowTriggers`~~<sup>Optional</sup> <a name="buildWorkflowTriggers" id="projen-modules.NpmPackageOptions.property.buildWorkflowTriggers"></a>

- *Deprecated:* - Use `buildWorkflowOptions.workflowTriggers`

```typescript
public readonly buildWorkflowTriggers: Triggers;
```

- *Type:* projen.github.workflows.Triggers
- *Default:* "{ pullRequest: {}, workflowDispatch: {} }"

Build workflow triggers.

---

##### `bumpPackage`<sup>Optional</sup> <a name="bumpPackage" id="projen-modules.NpmPackageOptions.property.bumpPackage"></a>

```typescript
public readonly bumpPackage: string;
```

- *Type:* string
- *Default:* A recent version of "commit-and-tag-version"

The `commit-and-tag-version` compatible package used to bump the package version, as a dependency string.

This can be any compatible package version, including the deprecated `standard-version@9`.

---

##### `bundledDeps`<sup>Optional</sup> <a name="bundledDeps" id="projen-modules.NpmPackageOptions.property.bundledDeps"></a>

```typescript
public readonly bundledDeps: string[];
```

- *Type:* string[]

List of dependencies to bundle into this module.

These modules will be
added both to the `dependencies` section and `bundledDependencies` section of
your `package.json`.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `yarn add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and
this will be what you `package.json` will eventually include.

---

##### `bundlerOptions`<sup>Optional</sup> <a name="bundlerOptions" id="projen-modules.NpmPackageOptions.property.bundlerOptions"></a>

```typescript
public readonly bundlerOptions: BundlerOptions;
```

- *Type:* projen.javascript.BundlerOptions

Options for `Bundler`.

---

##### `bunVersion`<sup>Optional</sup> <a name="bunVersion" id="projen-modules.NpmPackageOptions.property.bunVersion"></a>

```typescript
public readonly bunVersion: string;
```

- *Type:* string
- *Default:* "latest"

The version of Bun to use if using Bun as a package manager.

---

##### `checkLicenses`<sup>Optional</sup> <a name="checkLicenses" id="projen-modules.NpmPackageOptions.property.checkLicenses"></a>

```typescript
public readonly checkLicenses: LicenseCheckerOptions;
```

- *Type:* projen.javascript.LicenseCheckerOptions
- *Default:* no license checks are run during the build and all licenses will be accepted

Configure which licenses should be deemed acceptable for use by dependencies.

This setting will cause the build to fail, if any prohibited or not allowed licenses ares encountered.

---

##### `clobber`<sup>Optional</sup> <a name="clobber" id="projen-modules.NpmPackageOptions.property.clobber"></a>

```typescript
public readonly clobber: boolean;
```

- *Type:* boolean
- *Default:* true, but false for subprojects

Add a `clobber` task which resets the repo to origin.

---

##### `codeArtifactOptions`<sup>Optional</sup> <a name="codeArtifactOptions" id="projen-modules.NpmPackageOptions.property.codeArtifactOptions"></a>

```typescript
public readonly codeArtifactOptions: CodeArtifactOptions;
```

- *Type:* projen.javascript.CodeArtifactOptions
- *Default:* undefined

Options for npm packages using AWS CodeArtifact.

This is required if publishing packages to, or installing scoped packages from AWS CodeArtifact

---

##### `codeCov`<sup>Optional</sup> <a name="codeCov" id="projen-modules.NpmPackageOptions.property.codeCov"></a>

```typescript
public readonly codeCov: boolean;
```

- *Type:* boolean
- *Default:* false

Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v5 By default, OIDC auth is used. Alternatively a token can be provided via `codeCovTokenSecret`.

---

##### `codeCovTokenSecret`<sup>Optional</sup> <a name="codeCovTokenSecret" id="projen-modules.NpmPackageOptions.property.codeCovTokenSecret"></a>

```typescript
public readonly codeCovTokenSecret: string;
```

- *Type:* string
- *Default:* OIDC auth is used

Define the secret name for a specified https://codecov.io/ token.

---

##### `commitGenerated`<sup>Optional</sup> <a name="commitGenerated" id="projen-modules.NpmPackageOptions.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean
- *Default:* true

Whether to commit the managed files by default.

---

##### `copyrightOwner`<sup>Optional</sup> <a name="copyrightOwner" id="projen-modules.NpmPackageOptions.property.copyrightOwner"></a>

```typescript
public readonly copyrightOwner: string;
```

- *Type:* string
- *Default:* defaults to the value of authorName or "" if `authorName` is undefined.

License copyright owner.

---

##### `copyrightPeriod`<sup>Optional</sup> <a name="copyrightPeriod" id="projen-modules.NpmPackageOptions.property.copyrightPeriod"></a>

```typescript
public readonly copyrightPeriod: string;
```

- *Type:* string
- *Default:* current year

The copyright years to put in the LICENSE file.

---

##### `defaultReleaseBranch`<sup>Optional</sup> <a name="defaultReleaseBranch" id="projen-modules.NpmPackageOptions.property.defaultReleaseBranch"></a>

```typescript
public readonly defaultReleaseBranch: string;
```

- *Type:* string
- *Default:* "main"

The name of the main release branch.

---

##### `dependabot`<sup>Optional</sup> <a name="dependabot" id="projen-modules.NpmPackageOptions.property.dependabot"></a>

```typescript
public readonly dependabot: boolean;
```

- *Type:* boolean
- *Default:* false

Use dependabot to handle dependency upgrades.

Cannot be used in conjunction with `depsUpgrade`.

---

##### `dependabotOptions`<sup>Optional</sup> <a name="dependabotOptions" id="projen-modules.NpmPackageOptions.property.dependabotOptions"></a>

```typescript
public readonly dependabotOptions: DependabotOptions;
```

- *Type:* projen.github.DependabotOptions
- *Default:* default options

Options for dependabot.

---

##### `deps`<sup>Optional</sup> <a name="deps" id="projen-modules.NpmPackageOptions.property.deps"></a>

```typescript
public readonly deps: string[];
```

- *Type:* string[]
- *Default:* []

Runtime dependencies of this module.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `yarn add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and
this will be what you `package.json` will eventually include.

---

##### `depsUpgrade`<sup>Optional</sup> <a name="depsUpgrade" id="projen-modules.NpmPackageOptions.property.depsUpgrade"></a>

```typescript
public readonly depsUpgrade: boolean;
```

- *Type:* boolean
- *Default:* true

Use tasks and github workflows to handle dependency upgrades.

Cannot be used in conjunction with `dependabot`.

---

##### `depsUpgradeOptions`<sup>Optional</sup> <a name="depsUpgradeOptions" id="projen-modules.NpmPackageOptions.property.depsUpgradeOptions"></a>

```typescript
public readonly depsUpgradeOptions: UpgradeDependenciesOptions;
```

- *Type:* projen.javascript.UpgradeDependenciesOptions
- *Default:* default options

Options for `UpgradeDependencies`.

---

##### `description`<sup>Optional</sup> <a name="description" id="projen-modules.NpmPackageOptions.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description is just a string that helps people understand the purpose of the package.

It can be used when searching for packages in a package manager as well.
See https://classic.yarnpkg.com/en/docs/package-json/#toc-description

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="projen-modules.NpmPackageOptions.property.devContainer"></a>

```typescript
public readonly devContainer: boolean;
```

- *Type:* boolean
- *Default:* false

Add a VSCode development environment (used for GitHub Codespaces).

---

##### `devDeps`<sup>Optional</sup> <a name="devDeps" id="projen-modules.NpmPackageOptions.property.devDeps"></a>

```typescript
public readonly devDeps: string[];
```

- *Type:* string[]
- *Default:* []

Build dependencies for this module.

These dependencies will only be
available in your build environment but will not be fetched when this
module is consumed.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `yarn add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and
this will be what you `package.json` will eventually include.

---

##### `disableTsconfig`<sup>Optional</sup> <a name="disableTsconfig" id="projen-modules.NpmPackageOptions.property.disableTsconfig"></a>

```typescript
public readonly disableTsconfig: boolean;
```

- *Type:* boolean
- *Default:* false

Do not generate a `tsconfig.json` file (used by jsii projects since tsconfig.json is generated by the jsii compiler).

---

##### `disableTsconfigDev`<sup>Optional</sup> <a name="disableTsconfigDev" id="projen-modules.NpmPackageOptions.property.disableTsconfigDev"></a>

```typescript
public readonly disableTsconfigDev: boolean;
```

- *Type:* boolean
- *Default:* false

Do not generate a `tsconfig.dev.json` file.

---

##### `docgen`<sup>Optional</sup> <a name="docgen" id="projen-modules.NpmPackageOptions.property.docgen"></a>

```typescript
public readonly docgen: boolean;
```

- *Type:* boolean
- *Default:* false

Docgen by Typedoc.

---

##### `docsDirectory`<sup>Optional</sup> <a name="docsDirectory" id="projen-modules.NpmPackageOptions.property.docsDirectory"></a>

```typescript
public readonly docsDirectory: string;
```

- *Type:* string
- *Default:* "docs"

Docs directory.

---

##### `entrypoint`<sup>Optional</sup> <a name="entrypoint" id="projen-modules.NpmPackageOptions.property.entrypoint"></a>

```typescript
public readonly entrypoint: string;
```

- *Type:* string
- *Default:* "lib/index.js"

Module entrypoint (`main` in `package.json`). Set to an empty string to not include `main` in your package.json.

---

##### `entrypointTypes`<sup>Optional</sup> <a name="entrypointTypes" id="projen-modules.NpmPackageOptions.property.entrypointTypes"></a>

```typescript
public readonly entrypointTypes: string;
```

- *Type:* string
- *Default:* .d.ts file derived from the project's entrypoint (usually lib/index.d.ts)

The .d.ts file that includes the type declarations for this module.

---

##### `eslint`<sup>Optional</sup> <a name="eslint" id="projen-modules.NpmPackageOptions.property.eslint"></a>

```typescript
public readonly eslint: boolean;
```

- *Type:* boolean
- *Default:* true, unless biome is enabled

Setup eslint.

---

##### `eslintOptions`<sup>Optional</sup> <a name="eslintOptions" id="projen-modules.NpmPackageOptions.property.eslintOptions"></a>

```typescript
public readonly eslintOptions: EslintOptions;
```

- *Type:* projen.javascript.EslintOptions
- *Default:* opinionated default options

Eslint options.

---

##### `github`<sup>Optional</sup> <a name="github" id="projen-modules.NpmPackageOptions.property.github"></a>

```typescript
public readonly github: boolean;
```

- *Type:* boolean
- *Default:* true

Enable GitHub integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `githubOptions`<sup>Optional</sup> <a name="githubOptions" id="projen-modules.NpmPackageOptions.property.githubOptions"></a>

```typescript
public readonly githubOptions: GitHubOptions;
```

- *Type:* projen.github.GitHubOptions
- *Default:* see GitHubOptions

Options for GitHub integration.

---

##### `gitignore`<sup>Optional</sup> <a name="gitignore" id="projen-modules.NpmPackageOptions.property.gitignore"></a>

```typescript
public readonly gitignore: string[];
```

- *Type:* string[]

Additional entries to .gitignore.

---

##### `gitIgnoreOptions`<sup>Optional</sup> <a name="gitIgnoreOptions" id="projen-modules.NpmPackageOptions.property.gitIgnoreOptions"></a>

```typescript
public readonly gitIgnoreOptions: IgnoreFileOptions;
```

- *Type:* projen.IgnoreFileOptions

Configuration options for .gitignore file.

---

##### `gitOptions`<sup>Optional</sup> <a name="gitOptions" id="projen-modules.NpmPackageOptions.property.gitOptions"></a>

```typescript
public readonly gitOptions: GitOptions;
```

- *Type:* projen.GitOptions

Configuration options for git.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="projen-modules.NpmPackageOptions.property.gitpod"></a>

```typescript
public readonly gitpod: boolean;
```

- *Type:* boolean
- *Default:* false

Add a Gitpod development environment.

---

##### `homepage`<sup>Optional</sup> <a name="homepage" id="projen-modules.NpmPackageOptions.property.homepage"></a>

```typescript
public readonly homepage: string;
```

- *Type:* string

Package's Homepage / Website.

---

##### `jest`<sup>Optional</sup> <a name="jest" id="projen-modules.NpmPackageOptions.property.jest"></a>

```typescript
public readonly jest: boolean;
```

- *Type:* boolean
- *Default:* true

Setup jest unit tests.

---

##### `jestOptions`<sup>Optional</sup> <a name="jestOptions" id="projen-modules.NpmPackageOptions.property.jestOptions"></a>

```typescript
public readonly jestOptions: JestOptions;
```

- *Type:* projen.javascript.JestOptions
- *Default:* default options

Jest options.

---

##### `jsiiReleaseVersion`<sup>Optional</sup> <a name="jsiiReleaseVersion" id="projen-modules.NpmPackageOptions.property.jsiiReleaseVersion"></a>

```typescript
public readonly jsiiReleaseVersion: string;
```

- *Type:* string
- *Default:* "latest"

Version requirement of `publib` which is used to publish modules to npm.

---

##### `keywords`<sup>Optional</sup> <a name="keywords" id="projen-modules.NpmPackageOptions.property.keywords"></a>

```typescript
public readonly keywords: string[];
```

- *Type:* string[]

Keywords to include in `package.json`.

---

##### `libdir`<sup>Optional</sup> <a name="libdir" id="projen-modules.NpmPackageOptions.property.libdir"></a>

```typescript
public readonly libdir: string;
```

- *Type:* string
- *Default:* "lib"

Typescript  artifacts output directory.

---

##### `license`<sup>Optional</sup> <a name="license" id="projen-modules.NpmPackageOptions.property.license"></a>

```typescript
public readonly license: string;
```

- *Type:* string
- *Default:* "Apache-2.0"

License's SPDX identifier.

See https://github.com/projen/projen/tree/main/license-text for a list of supported licenses.
Use the `licensed` option if you want to no license to be specified.

---

##### `licensed`<sup>Optional</sup> <a name="licensed" id="projen-modules.NpmPackageOptions.property.licensed"></a>

```typescript
public readonly licensed: boolean;
```

- *Type:* boolean
- *Default:* true

Indicates if a license should be added.

---

##### `logging`<sup>Optional</sup> <a name="logging" id="projen-modules.NpmPackageOptions.property.logging"></a>

```typescript
public readonly logging: LoggerOptions;
```

- *Type:* projen.LoggerOptions
- *Default:* {}

Configure logging options such as verbosity.

---

##### `majorVersion`<sup>Optional</sup> <a name="majorVersion" id="projen-modules.NpmPackageOptions.property.majorVersion"></a>

```typescript
public readonly majorVersion: number;
```

- *Type:* number
- *Default:* Major version is not enforced.

Major version to release from the default branch.

If this is specified, we bump the latest version of this major version line.
If not specified, we bump the global latest version.

---

##### `maxNodeVersion`<sup>Optional</sup> <a name="maxNodeVersion" id="projen-modules.NpmPackageOptions.property.maxNodeVersion"></a>

```typescript
public readonly maxNodeVersion: string;
```

- *Type:* string
- *Default:* no maximum version is enforced

The maximum node version supported by this package.

Most projects should not use this option.
The value indicates that the package is incompatible with any newer versions of node.
This requirement is enforced via the engines field.

You will normally not need to set this option.
Consider this option only if your package is known to not function with newer versions of node.

---

##### ~~`mergify`~~<sup>Optional</sup> <a name="mergify" id="projen-modules.NpmPackageOptions.property.mergify"></a>

- *Deprecated:* use `githubOptions.mergify` instead

```typescript
public readonly mergify: boolean;
```

- *Type:* boolean
- *Default:* true

Whether mergify should be enabled on this repository or not.

---

##### ~~`mergifyOptions`~~<sup>Optional</sup> <a name="mergifyOptions" id="projen-modules.NpmPackageOptions.property.mergifyOptions"></a>

- *Deprecated:* use `githubOptions.mergifyOptions` instead

```typescript
public readonly mergifyOptions: MergifyOptions;
```

- *Type:* projen.github.MergifyOptions
- *Default:* default options

Options for mergify.

---

##### `minMajorVersion`<sup>Optional</sup> <a name="minMajorVersion" id="projen-modules.NpmPackageOptions.property.minMajorVersion"></a>

```typescript
public readonly minMajorVersion: number;
```

- *Type:* number
- *Default:* No minimum version is being enforced

Minimal Major version to release.

This can be useful to set to 1, as breaking changes before the 1.x major
release are not incrementing the major version number.

Can not be set together with `majorVersion`.

---

##### `minNodeVersion`<sup>Optional</sup> <a name="minNodeVersion" id="projen-modules.NpmPackageOptions.property.minNodeVersion"></a>

```typescript
public readonly minNodeVersion: string;
```

- *Type:* string
- *Default:* no minimum version is enforced

The minimum node version required by this package to function.

Most projects should not use this option.
The value indicates that the package is incompatible with any older versions of node.
This requirement is enforced via the engines field.

You will normally not need to set this option, even if your package is incompatible with EOL versions of node.
Consider this option only if your package depends on a specific feature, that is not available in other LTS versions.
Setting this option has very high impact on the consumers of your package,
as package managers will actively prevent usage with node versions you have marked as incompatible.

To change the node version of your CI/CD workflows, use `workflowNodeVersion`.

---

##### ~~`mutableBuild`~~<sup>Optional</sup> <a name="mutableBuild" id="projen-modules.NpmPackageOptions.property.mutableBuild"></a>

- *Deprecated:* - Use `buildWorkflowOptions.mutableBuild`

```typescript
public readonly mutableBuild: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically update files modified during builds to pull-request branches.

This means
that any files synthesized by projen or e.g. test snapshots will always be up-to-date
before a PR is merged.

Implies that PR builds do not have anti-tamper checks.

---

##### `nextVersionCommand`<sup>Optional</sup> <a name="nextVersionCommand" id="projen-modules.NpmPackageOptions.property.nextVersionCommand"></a>

```typescript
public readonly nextVersionCommand: string;
```

- *Type:* string
- *Default:* The next version will be determined based on the commit history and project settings.

A shell command to control the next version to release.

If present, this shell command will be run before the bump is executed, and
it determines what version to release. It will be executed in the following
environment:

- Working directory: the project directory.
- `$VERSION`: the current version. Looks like `1.2.3`.
- `$LATEST_TAG`: the most recent tag. Looks like `prefix-v1.2.3`, or may be unset.
- `$SUGGESTED_BUMP`: the suggested bump action based on commits. One of `major|minor|patch|none`.

The command should print one of the following to `stdout`:

- Nothing: the next version number will be determined based on commit history.
- `x.y.z`: the next version number will be `x.y.z`.
- `major|minor|patch`: the next version number will be the current version number
  with the indicated component bumped.

This setting cannot be specified together with `minMajorVersion`; the invoked
script can be used to achieve the effects of `minMajorVersion`.

---

##### `npmAccess`<sup>Optional</sup> <a name="npmAccess" id="projen-modules.NpmPackageOptions.property.npmAccess"></a>

```typescript
public readonly npmAccess: NpmAccess;
```

- *Type:* projen.javascript.NpmAccess
- *Default:* for scoped packages (e.g. `foo@bar`), the default is `NpmAccess.RESTRICTED`, for non-scoped packages, the default is `NpmAccess.PUBLIC`.

Access level of the npm package.

---

##### `npmDistTag`<sup>Optional</sup> <a name="npmDistTag" id="projen-modules.NpmPackageOptions.property.npmDistTag"></a>

```typescript
public readonly npmDistTag: string;
```

- *Type:* string
- *Default:* "latest"

The npmDistTag to use when publishing from the default branch.

To set the npm dist-tag for release branches, set the `npmDistTag` property
for each branch.

---

##### ~~`npmignore`~~<sup>Optional</sup> <a name="npmignore" id="projen-modules.NpmPackageOptions.property.npmignore"></a>

- *Deprecated:* - use `project.addPackageIgnore`

```typescript
public readonly npmignore: string[];
```

- *Type:* string[]

Additional entries to .npmignore.

---

##### `npmignoreEnabled`<sup>Optional</sup> <a name="npmignoreEnabled" id="projen-modules.NpmPackageOptions.property.npmignoreEnabled"></a>

```typescript
public readonly npmignoreEnabled: boolean;
```

- *Type:* boolean
- *Default:* true

Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs.

---

##### `npmIgnoreOptions`<sup>Optional</sup> <a name="npmIgnoreOptions" id="projen-modules.NpmPackageOptions.property.npmIgnoreOptions"></a>

```typescript
public readonly npmIgnoreOptions: IgnoreFileOptions;
```

- *Type:* projen.IgnoreFileOptions

Configuration options for .npmignore file.

---

##### `npmProvenance`<sup>Optional</sup> <a name="npmProvenance" id="projen-modules.NpmPackageOptions.property.npmProvenance"></a>

```typescript
public readonly npmProvenance: boolean;
```

- *Type:* boolean
- *Default:* true for public packages, false otherwise

Should provenance statements be generated when the package is published.

A supported package manager is required to publish a package with npm provenance statements and
you will need to use a supported CI/CD provider.

Note that the projen `Release` and `Publisher` components are using `publib` to publish packages,
which is using npm internally and supports provenance statements independently of the package manager used.

---

##### ~~`npmRegistry`~~<sup>Optional</sup> <a name="npmRegistry" id="projen-modules.NpmPackageOptions.property.npmRegistry"></a>

- *Deprecated:* use `npmRegistryUrl` instead

```typescript
public readonly npmRegistry: string;
```

- *Type:* string

The host name of the npm registry to publish to.

Cannot be set together with `npmRegistryUrl`.

---

##### `npmRegistryUrl`<sup>Optional</sup> <a name="npmRegistryUrl" id="projen-modules.NpmPackageOptions.property.npmRegistryUrl"></a>

```typescript
public readonly npmRegistryUrl: string;
```

- *Type:* string
- *Default:* "https://registry.npmjs.org"

The base URL of the npm package registry.

Must be a URL (e.g. start with "https://" or "http://")

---

##### `npmTokenSecret`<sup>Optional</sup> <a name="npmTokenSecret" id="projen-modules.NpmPackageOptions.property.npmTokenSecret"></a>

```typescript
public readonly npmTokenSecret: string;
```

- *Type:* string
- *Default:* "NPM_TOKEN"

GitHub secret which contains the NPM token to use when publishing packages.

---

##### `npmTrustedPublishing`<sup>Optional</sup> <a name="npmTrustedPublishing" id="projen-modules.NpmPackageOptions.property.npmTrustedPublishing"></a>

```typescript
public readonly npmTrustedPublishing: boolean;
```

- *Type:* boolean
- *Default:* false

Use trusted publishing for publishing to npmjs.com Needs to be pre-configured on npm.js to work.

---

##### `outdir`<sup>Optional</sup> <a name="outdir" id="projen-modules.NpmPackageOptions.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string
- *Default:* "."

The root directory of the project. Relative to this directory, all files are synthesized.

If this project has a parent, this directory is relative to the parent
directory and it cannot be the same as the parent or any of it's other
subprojects.

---

##### `package`<sup>Optional</sup> <a name="package" id="projen-modules.NpmPackageOptions.property.package"></a>

```typescript
public readonly package: boolean;
```

- *Type:* boolean
- *Default:* true

Defines a `package` task that will produce an npm tarball under the artifacts directory (e.g. `dist`).

---

##### `packageManager`<sup>Optional</sup> <a name="packageManager" id="projen-modules.NpmPackageOptions.property.packageManager"></a>

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* projen.javascript.NodePackageManager
- *Default:* NodePackageManager.YARN_CLASSIC

The Node Package Manager used to execute scripts.

---

##### `packageName`<sup>Optional</sup> <a name="packageName" id="projen-modules.NpmPackageOptions.property.packageName"></a>

```typescript
public readonly packageName: string;
```

- *Type:* string
- *Default:* defaults to project name

The "name" in package.json.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="projen-modules.NpmPackageOptions.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

The parent project, if this project is part of a bigger project.

---

##### `peerDependencyOptions`<sup>Optional</sup> <a name="peerDependencyOptions" id="projen-modules.NpmPackageOptions.property.peerDependencyOptions"></a>

```typescript
public readonly peerDependencyOptions: PeerDependencyOptions;
```

- *Type:* projen.javascript.PeerDependencyOptions

Options for `peerDeps`.

---

##### `peerDeps`<sup>Optional</sup> <a name="peerDeps" id="projen-modules.NpmPackageOptions.property.peerDeps"></a>

```typescript
public readonly peerDeps: string[];
```

- *Type:* string[]
- *Default:* []

Peer dependencies for this module.

Dependencies listed here are required to
be installed (and satisfied) by the _consumer_ of this library. Using peer
dependencies allows you to ensure that only a single module of a certain
library exists in the `node_modules` tree of your consumers.

Note that prior to npm@7, peer dependencies are _not_ automatically
installed, which means that adding peer dependencies to a library will be a
breaking change for your customers.

Unless `peerDependencyOptions.pinnedDevDependency` is disabled (it is
enabled by default), projen will automatically add a dev dependency with a
pinned version for each peer dependency. This will ensure that you build &
test your module against the lowest peer version required.

---

##### `pnpmVersion`<sup>Optional</sup> <a name="pnpmVersion" id="projen-modules.NpmPackageOptions.property.pnpmVersion"></a>

```typescript
public readonly pnpmVersion: string;
```

- *Type:* string
- *Default:* "9"

The version of PNPM to use if using PNPM as a package manager.

---

##### `postBuildSteps`<sup>Optional</sup> <a name="postBuildSteps" id="projen-modules.NpmPackageOptions.property.postBuildSteps"></a>

```typescript
public readonly postBuildSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]
- *Default:* []

Steps to execute after build as part of the release workflow.

---

##### `prerelease`<sup>Optional</sup> <a name="prerelease" id="projen-modules.NpmPackageOptions.property.prerelease"></a>

```typescript
public readonly prerelease: string;
```

- *Type:* string
- *Default:* normal semantic versions

Bump versions from the default branch as pre-releases (e.g. "beta", "alpha", "pre").

---

##### `prettier`<sup>Optional</sup> <a name="prettier" id="projen-modules.NpmPackageOptions.property.prettier"></a>

```typescript
public readonly prettier: boolean;
```

- *Type:* boolean
- *Default:* false

Setup prettier.

---

##### `prettierOptions`<sup>Optional</sup> <a name="prettierOptions" id="projen-modules.NpmPackageOptions.property.prettierOptions"></a>

```typescript
public readonly prettierOptions: PrettierOptions;
```

- *Type:* projen.javascript.PrettierOptions
- *Default:* default options

Prettier options.

---

##### ~~`projectType`~~<sup>Optional</sup> <a name="projectType" id="projen-modules.NpmPackageOptions.property.projectType"></a>

- *Deprecated:* no longer supported at the base project level

```typescript
public readonly projectType: ProjectType;
```

- *Type:* projen.ProjectType
- *Default:* ProjectType.UNKNOWN

Which type of project this is (library/app).

---

##### `projenCommand`<sup>Optional</sup> <a name="projenCommand" id="projen-modules.NpmPackageOptions.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string
- *Default:* "npx projen"

The shell command to use in order to run the projen CLI.

Can be used to customize in special environments.

---

##### `projenCredentials`<sup>Optional</sup> <a name="projenCredentials" id="projen-modules.NpmPackageOptions.property.projenCredentials"></a>

```typescript
public readonly projenCredentials: GithubCredentials;
```

- *Type:* projen.github.GithubCredentials
- *Default:* use a personal access token named PROJEN_GITHUB_TOKEN

Choose a method of providing GitHub API access for projen workflows.

---

##### `projenDevDependency`<sup>Optional</sup> <a name="projenDevDependency" id="projen-modules.NpmPackageOptions.property.projenDevDependency"></a>

```typescript
public readonly projenDevDependency: boolean;
```

- *Type:* boolean
- *Default:* true if not a subproject

Indicates of "projen" should be installed as a devDependency.

---

##### `projenrcJs`<sup>Optional</sup> <a name="projenrcJs" id="projen-modules.NpmPackageOptions.property.projenrcJs"></a>

```typescript
public readonly projenrcJs: boolean;
```

- *Type:* boolean
- *Default:* true if projenrcJson is false

Generate (once) .projenrc.js (in JavaScript). Set to `false` in order to disable .projenrc.js generation.

---

##### `projenrcJson`<sup>Optional</sup> <a name="projenrcJson" id="projen-modules.NpmPackageOptions.property.projenrcJson"></a>

```typescript
public readonly projenrcJson: boolean;
```

- *Type:* boolean
- *Default:* false

Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation.

---

##### `projenrcJsonOptions`<sup>Optional</sup> <a name="projenrcJsonOptions" id="projen-modules.NpmPackageOptions.property.projenrcJsonOptions"></a>

```typescript
public readonly projenrcJsonOptions: ProjenrcJsonOptions;
```

- *Type:* projen.ProjenrcJsonOptions
- *Default:* default options

Options for .projenrc.json.

---

##### `projenrcJsOptions`<sup>Optional</sup> <a name="projenrcJsOptions" id="projen-modules.NpmPackageOptions.property.projenrcJsOptions"></a>

```typescript
public readonly projenrcJsOptions: ProjenrcOptions;
```

- *Type:* projen.javascript.ProjenrcOptions
- *Default:* default options

Options for .projenrc.js.

---

##### `projenrcTs`<sup>Optional</sup> <a name="projenrcTs" id="projen-modules.NpmPackageOptions.property.projenrcTs"></a>

```typescript
public readonly projenrcTs: boolean;
```

- *Type:* boolean
- *Default:* false

Use TypeScript for your projenrc file (`.projenrc.ts`).

---

##### `projenrcTsOptions`<sup>Optional</sup> <a name="projenrcTsOptions" id="projen-modules.NpmPackageOptions.property.projenrcTsOptions"></a>

```typescript
public readonly projenrcTsOptions: ProjenrcOptions;
```

- *Type:* projen.typescript.ProjenrcOptions

Options for .projenrc.ts.

---

##### ~~`projenTokenSecret`~~<sup>Optional</sup> <a name="projenTokenSecret" id="projen-modules.NpmPackageOptions.property.projenTokenSecret"></a>

- *Deprecated:* use `projenCredentials`

```typescript
public readonly projenTokenSecret: string;
```

- *Type:* string
- *Default:* "PROJEN_GITHUB_TOKEN"

The name of a secret which includes a GitHub Personal Access Token to be used by projen workflows.

This token needs to have the `repo`, `workflows`
and `packages` scope.

---

##### `projenVersion`<sup>Optional</sup> <a name="projenVersion" id="projen-modules.NpmPackageOptions.property.projenVersion"></a>

```typescript
public readonly projenVersion: string;
```

- *Type:* string
- *Default:* Defaults to the latest version.

Version of projen to install.

---

##### `publishDryRun`<sup>Optional</sup> <a name="publishDryRun" id="projen-modules.NpmPackageOptions.property.publishDryRun"></a>

```typescript
public readonly publishDryRun: boolean;
```

- *Type:* boolean
- *Default:* false

Instead of actually publishing to package managers, just print the publishing command.

---

##### `publishTasks`<sup>Optional</sup> <a name="publishTasks" id="projen-modules.NpmPackageOptions.property.publishTasks"></a>

```typescript
public readonly publishTasks: boolean;
```

- *Type:* boolean
- *Default:* false

Define publishing tasks that can be executed manually as well as workflows.

Normally, publishing only happens within automated workflows. Enable this
in order to create a publishing task for each publishing activity.

---

##### `pullRequestTemplate`<sup>Optional</sup> <a name="pullRequestTemplate" id="projen-modules.NpmPackageOptions.property.pullRequestTemplate"></a>

```typescript
public readonly pullRequestTemplate: boolean;
```

- *Type:* boolean
- *Default:* true

Include a GitHub pull request template.

---

##### `pullRequestTemplateContents`<sup>Optional</sup> <a name="pullRequestTemplateContents" id="projen-modules.NpmPackageOptions.property.pullRequestTemplateContents"></a>

```typescript
public readonly pullRequestTemplateContents: string[];
```

- *Type:* string[]
- *Default:* default content

The contents of the pull request template.

---

##### `readme`<sup>Optional</sup> <a name="readme" id="projen-modules.NpmPackageOptions.property.readme"></a>

```typescript
public readonly readme: ReadmeOptions;
```

- *Type:* <a href="#projen-modules.ReadmeOptions">ReadmeOptions</a>

Configuration of the README.md file.

---

##### `releasableCommits`<sup>Optional</sup> <a name="releasableCommits" id="projen-modules.NpmPackageOptions.property.releasableCommits"></a>

```typescript
public readonly releasableCommits: ReleasableCommits;
```

- *Type:* projen.ReleasableCommits
- *Default:* ReleasableCommits.everyCommit()

Find commits that should be considered releasable Used to decide if a release is required.

---

##### `release`<sup>Optional</sup> <a name="release" id="projen-modules.NpmPackageOptions.property.release"></a>

```typescript
public readonly release: boolean;
```

- *Type:* boolean
- *Default:* true (false for subprojects)

Add release management to this project.

---

##### `releaseBranches`<sup>Optional</sup> <a name="releaseBranches" id="projen-modules.NpmPackageOptions.property.releaseBranches"></a>

```typescript
public readonly releaseBranches: {[ key: string ]: BranchOptions};
```

- *Type:* {[ key: string ]: projen.release.BranchOptions}
- *Default:* no additional branches are used for release. you can use `addBranch()` to add additional branches.

Defines additional release branches.

A workflow will be created for each
release branch which will publish releases from commits in this branch.
Each release branch _must_ be assigned a major version number which is used
to enforce that versions published from that branch always use that major
version. If multiple branches are used, the `majorVersion` field must also
be provided for the default branch.

---

##### `releaseEnvironment`<sup>Optional</sup> <a name="releaseEnvironment" id="projen-modules.NpmPackageOptions.property.releaseEnvironment"></a>

```typescript
public readonly releaseEnvironment: string;
```

- *Type:* string
- *Default:* no environment used, unless set at the artifact level

The GitHub Actions environment used for the release.

This can be used to add an explicit approval step to the release
or limit who can initiate a release through environment protection rules.

When multiple artifacts are released, the environment can be overwritten
on a per artifact basis.

---

##### ~~`releaseEveryCommit`~~<sup>Optional</sup> <a name="releaseEveryCommit" id="projen-modules.NpmPackageOptions.property.releaseEveryCommit"></a>

- *Deprecated:* Use `releaseTrigger: ReleaseTrigger.continuous()` instead

```typescript
public readonly releaseEveryCommit: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically release new versions every commit to one of branches in `releaseBranches`.

---

##### `releaseFailureIssue`<sup>Optional</sup> <a name="releaseFailureIssue" id="projen-modules.NpmPackageOptions.property.releaseFailureIssue"></a>

```typescript
public readonly releaseFailureIssue: boolean;
```

- *Type:* boolean
- *Default:* false

Create a github issue on every failed publishing task.

---

##### `releaseFailureIssueLabel`<sup>Optional</sup> <a name="releaseFailureIssueLabel" id="projen-modules.NpmPackageOptions.property.releaseFailureIssueLabel"></a>

```typescript
public readonly releaseFailureIssueLabel: string;
```

- *Type:* string
- *Default:* "failed-release"

The label to apply to issues indicating publish failures.

Only applies if `releaseFailureIssue` is true.

---

##### ~~`releaseSchedule`~~<sup>Optional</sup> <a name="releaseSchedule" id="projen-modules.NpmPackageOptions.property.releaseSchedule"></a>

- *Deprecated:* Use `releaseTrigger: ReleaseTrigger.scheduled()` instead

```typescript
public readonly releaseSchedule: string;
```

- *Type:* string
- *Default:* no scheduled releases

CRON schedule to trigger new releases.

---

##### `releaseTagPrefix`<sup>Optional</sup> <a name="releaseTagPrefix" id="projen-modules.NpmPackageOptions.property.releaseTagPrefix"></a>

```typescript
public readonly releaseTagPrefix: string;
```

- *Type:* string
- *Default:* "v"

Automatically add the given prefix to release tags.

Useful if you are releasing on multiple branches with overlapping version numbers.
Note: this prefix is used to detect the latest tagged version
when bumping, so if you change this on a project with an existing version
history, you may need to manually tag your latest release
with the new prefix.

---

##### `releaseToNpm`<sup>Optional</sup> <a name="releaseToNpm" id="projen-modules.NpmPackageOptions.property.releaseToNpm"></a>

```typescript
public readonly releaseToNpm: boolean;
```

- *Type:* boolean
- *Default:* false

Automatically release to npm when new versions are introduced.

---

##### `releaseTrigger`<sup>Optional</sup> <a name="releaseTrigger" id="projen-modules.NpmPackageOptions.property.releaseTrigger"></a>

```typescript
public readonly releaseTrigger: ReleaseTrigger;
```

- *Type:* projen.release.ReleaseTrigger
- *Default:* Continuous releases (`ReleaseTrigger.continuous()`)

The release trigger to use.

---

##### ~~`releaseWorkflow`~~<sup>Optional</sup> <a name="releaseWorkflow" id="projen-modules.NpmPackageOptions.property.releaseWorkflow"></a>

- *Deprecated:* see `release`.

```typescript
public readonly releaseWorkflow: boolean;
```

- *Type:* boolean
- *Default:* true if not a subproject

DEPRECATED: renamed to `release`.

---

##### `releaseWorkflowEnv`<sup>Optional</sup> <a name="releaseWorkflowEnv" id="projen-modules.NpmPackageOptions.property.releaseWorkflowEnv"></a>

```typescript
public readonly releaseWorkflowEnv: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* {}

Build environment variables for release workflows.

---

##### `releaseWorkflowName`<sup>Optional</sup> <a name="releaseWorkflowName" id="projen-modules.NpmPackageOptions.property.releaseWorkflowName"></a>

```typescript
public readonly releaseWorkflowName: string;
```

- *Type:* string
- *Default:* "release"

The name of the default release workflow.

---

##### `releaseWorkflowSetupSteps`<sup>Optional</sup> <a name="releaseWorkflowSetupSteps" id="projen-modules.NpmPackageOptions.property.releaseWorkflowSetupSteps"></a>

```typescript
public readonly releaseWorkflowSetupSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]

A set of workflow steps to execute in order to setup the workflow container.

---

##### `renovatebot`<sup>Optional</sup> <a name="renovatebot" id="projen-modules.NpmPackageOptions.property.renovatebot"></a>

```typescript
public readonly renovatebot: boolean;
```

- *Type:* boolean
- *Default:* false

Use renovatebot to handle dependency upgrades.

---

##### `renovatebotOptions`<sup>Optional</sup> <a name="renovatebotOptions" id="projen-modules.NpmPackageOptions.property.renovatebotOptions"></a>

```typescript
public readonly renovatebotOptions: RenovatebotOptions;
```

- *Type:* projen.RenovatebotOptions
- *Default:* default options

Options for renovatebot.

---

##### `repository`<sup>Optional</sup> <a name="repository" id="projen-modules.NpmPackageOptions.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

The repository is the location where the actual code for your package lives.

See https://classic.yarnpkg.com/en/docs/package-json/#toc-repository

---

##### `repositoryDirectory`<sup>Optional</sup> <a name="repositoryDirectory" id="projen-modules.NpmPackageOptions.property.repositoryDirectory"></a>

```typescript
public readonly repositoryDirectory: string;
```

- *Type:* string

If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives.

---

##### `sampleCode`<sup>Optional</sup> <a name="sampleCode" id="projen-modules.NpmPackageOptions.property.sampleCode"></a>

```typescript
public readonly sampleCode: boolean;
```

- *Type:* boolean
- *Default:* true

Generate one-time sample in `src/` and `test/` if there are no files there.

---

##### `scopedPackagesOptions`<sup>Optional</sup> <a name="scopedPackagesOptions" id="projen-modules.NpmPackageOptions.property.scopedPackagesOptions"></a>

```typescript
public readonly scopedPackagesOptions: ScopedPackagesOptions[];
```

- *Type:* projen.javascript.ScopedPackagesOptions[]
- *Default:* fetch all scoped packages from the public npm registry

Options for privately hosted scoped packages.

---

##### ~~`scripts`~~<sup>Optional</sup> <a name="scripts" id="projen-modules.NpmPackageOptions.property.scripts"></a>

- *Deprecated:* use `project.addTask()` or `package.setScript()`

```typescript
public readonly scripts: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* {}

npm scripts to include.

If a script has the same name as a standard script,
the standard script will be overwritten.
Also adds the script as a task.

---

##### `srcdir`<sup>Optional</sup> <a name="srcdir" id="projen-modules.NpmPackageOptions.property.srcdir"></a>

```typescript
public readonly srcdir: string;
```

- *Type:* string
- *Default:* "src"

Typescript sources directory.

---

##### `stability`<sup>Optional</sup> <a name="stability" id="projen-modules.NpmPackageOptions.property.stability"></a>

```typescript
public readonly stability: string;
```

- *Type:* string

Package's Stability.

---

##### `stale`<sup>Optional</sup> <a name="stale" id="projen-modules.NpmPackageOptions.property.stale"></a>

```typescript
public readonly stale: boolean;
```

- *Type:* boolean
- *Default:* false

Auto-close of stale issues and pull request.

See `staleOptions` for options.

---

##### `staleOptions`<sup>Optional</sup> <a name="staleOptions" id="projen-modules.NpmPackageOptions.property.staleOptions"></a>

```typescript
public readonly staleOptions: StaleOptions;
```

- *Type:* projen.github.StaleOptions
- *Default:* see defaults in `StaleOptions`

Auto-close stale issues and pull requests.

To disable set `stale` to `false`.

---

##### `testdir`<sup>Optional</sup> <a name="testdir" id="projen-modules.NpmPackageOptions.property.testdir"></a>

```typescript
public readonly testdir: string;
```

- *Type:* string
- *Default:* "test"

Jest tests directory.

Tests files should be named `xxx.test.ts`.
If this directory is under `srcdir` (e.g. `src/test`, `src/__tests__`),
then tests are going to be compiled into `lib/` and executed as javascript.
If the test directory is outside of `src`, then we configure jest to
compile the code in-memory.

---

##### `tsconfig`<sup>Optional</sup> <a name="tsconfig" id="projen-modules.NpmPackageOptions.property.tsconfig"></a>

```typescript
public readonly tsconfig: TypescriptConfigOptions;
```

- *Type:* projen.javascript.TypescriptConfigOptions
- *Default:* default options

Custom TSConfig.

---

##### `tsconfigDev`<sup>Optional</sup> <a name="tsconfigDev" id="projen-modules.NpmPackageOptions.property.tsconfigDev"></a>

```typescript
public readonly tsconfigDev: TypescriptConfigOptions;
```

- *Type:* projen.javascript.TypescriptConfigOptions
- *Default:* use the production tsconfig options

Custom tsconfig options for the development tsconfig.json file (used for testing).

---

##### `tsconfigDevFile`<sup>Optional</sup> <a name="tsconfigDevFile" id="projen-modules.NpmPackageOptions.property.tsconfigDevFile"></a>

```typescript
public readonly tsconfigDevFile: string;
```

- *Type:* string
- *Default:* "tsconfig.dev.json"

The name of the development tsconfig.json file.

---

##### `tsJestOptions`<sup>Optional</sup> <a name="tsJestOptions" id="projen-modules.NpmPackageOptions.property.tsJestOptions"></a>

```typescript
public readonly tsJestOptions: TsJestOptions;
```

- *Type:* projen.typescript.TsJestOptions

Options for ts-jest.

---

##### `typescriptVersion`<sup>Optional</sup> <a name="typescriptVersion" id="projen-modules.NpmPackageOptions.property.typescriptVersion"></a>

```typescript
public readonly typescriptVersion: string;
```

- *Type:* string
- *Default:* "latest"

TypeScript version to use.

NOTE: Typescript is not semantically versioned and should remain on the
same minor, so we recommend using a `~` dependency (e.g. `~1.2.3`).

---

##### `versionrcOptions`<sup>Optional</sup> <a name="versionrcOptions" id="projen-modules.NpmPackageOptions.property.versionrcOptions"></a>

```typescript
public readonly versionrcOptions: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}
- *Default:* standard configuration applicable for GitHub repositories

Custom configuration used when creating changelog with commit-and-tag-version package.

Given values either append to default configuration or overwrite values in it.

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="projen-modules.NpmPackageOptions.property.vscode"></a>

```typescript
public readonly vscode: boolean;
```

- *Type:* boolean
- *Default:* true

Enable VSCode integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `workflowBootstrapSteps`<sup>Optional</sup> <a name="workflowBootstrapSteps" id="projen-modules.NpmPackageOptions.property.workflowBootstrapSteps"></a>

```typescript
public readonly workflowBootstrapSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]
- *Default:* "yarn install --frozen-lockfile && yarn projen"

Workflow steps to use in order to bootstrap this repo.

---

##### `workflowContainerImage`<sup>Optional</sup> <a name="workflowContainerImage" id="projen-modules.NpmPackageOptions.property.workflowContainerImage"></a>

```typescript
public readonly workflowContainerImage: string;
```

- *Type:* string
- *Default:* default image

Container image to use for GitHub workflows.

---

##### `workflowGitIdentity`<sup>Optional</sup> <a name="workflowGitIdentity" id="projen-modules.NpmPackageOptions.property.workflowGitIdentity"></a>

```typescript
public readonly workflowGitIdentity: GitIdentity;
```

- *Type:* projen.github.GitIdentity
- *Default:* default GitHub Actions user

The git identity to use in workflows.

---

##### `workflowNodeVersion`<sup>Optional</sup> <a name="workflowNodeVersion" id="projen-modules.NpmPackageOptions.property.workflowNodeVersion"></a>

```typescript
public readonly workflowNodeVersion: string;
```

- *Type:* string
- *Default:* `minNodeVersion` if set, otherwise `lts/*`.

The node version used in GitHub Actions workflows.

Always use this option if your GitHub Actions workflows require a specific to run.

---

##### `workflowPackageCache`<sup>Optional</sup> <a name="workflowPackageCache" id="projen-modules.NpmPackageOptions.property.workflowPackageCache"></a>

```typescript
public readonly workflowPackageCache: boolean;
```

- *Type:* boolean
- *Default:* false

Enable Node.js package cache in GitHub workflows.

---

##### `workflowRunsOn`<sup>Optional</sup> <a name="workflowRunsOn" id="projen-modules.NpmPackageOptions.property.workflowRunsOn"></a>

```typescript
public readonly workflowRunsOn: string[];
```

- *Type:* string[]
- *Default:* ["ubuntu-latest"]

Github Runner selection labels.

---

##### `workflowRunsOnGroup`<sup>Optional</sup> <a name="workflowRunsOnGroup" id="projen-modules.NpmPackageOptions.property.workflowRunsOnGroup"></a>

```typescript
public readonly workflowRunsOnGroup: GroupRunnerOptions;
```

- *Type:* projen.GroupRunnerOptions

Github Runner Group selection options.

---

##### `yarnBerryOptions`<sup>Optional</sup> <a name="yarnBerryOptions" id="projen-modules.NpmPackageOptions.property.yarnBerryOptions"></a>

```typescript
public readonly yarnBerryOptions: YarnBerryOptions;
```

- *Type:* projen.javascript.YarnBerryOptions
- *Default:* Yarn Berry v4 with all default options

Options for Yarn Berry.

---

### PythonPackageOptions <a name="PythonPackageOptions" id="projen-modules.PythonPackageOptions"></a>

PythonPackageOptions.

#### Initializer <a name="Initializer" id="projen-modules.PythonPackageOptions.Initializer"></a>

```typescript
import { PythonPackageOptions } from 'projen-modules'

const pythonPackageOptions: PythonPackageOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen-modules.PythonPackageOptions.property.authorEmail">authorEmail</a></code> | <code>string</code> | Author's e-mail. |
| <code><a href="#projen-modules.PythonPackageOptions.property.authorName">authorName</a></code> | <code>string</code> | Author's name. |
| <code><a href="#projen-modules.PythonPackageOptions.property.codeOwners">codeOwners</a></code> | <code>string[]</code> | List of teams used to generate the CODEOWNERS file. |
| <code><a href="#projen-modules.PythonPackageOptions.property.moduleName">moduleName</a></code> | <code>string</code> | Name of the python package as used in imports and filenames. |
| <code><a href="#projen-modules.PythonPackageOptions.property.name">name</a></code> | <code>string</code> | This is the name of your project. |
| <code><a href="#projen-modules.PythonPackageOptions.property.version">version</a></code> | <code>string</code> | Version of the package. |
| <code><a href="#projen-modules.PythonPackageOptions.property.autoApproveOptions">autoApproveOptions</a></code> | <code>projen.github.AutoApproveOptions</code> | Enable and configure the 'auto approve' workflow. |
| <code><a href="#projen-modules.PythonPackageOptions.property.autoMerge">autoMerge</a></code> | <code>boolean</code> | Enable automatic merging on GitHub. |
| <code><a href="#projen-modules.PythonPackageOptions.property.autoMergeOptions">autoMergeOptions</a></code> | <code>projen.github.AutoMergeOptions</code> | Configure options for automatic merging on GitHub. |
| <code><a href="#projen-modules.PythonPackageOptions.property.classifiers">classifiers</a></code> | <code>string[]</code> | A list of PyPI trove classifiers that describe the project. |
| <code><a href="#projen-modules.PythonPackageOptions.property.clobber">clobber</a></code> | <code>boolean</code> | Add a `clobber` task which resets the repo to origin. |
| <code><a href="#projen-modules.PythonPackageOptions.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#projen-modules.PythonPackageOptions.property.deps">deps</a></code> | <code>string[]</code> | List of runtime dependencies for this project. Dependencies use the format: `<module>@<semver>`. |
| <code><a href="#projen-modules.PythonPackageOptions.property.description">description</a></code> | <code>string</code> | A short description of the package. |
| <code><a href="#projen-modules.PythonPackageOptions.property.devContainer">devContainer</a></code> | <code>boolean</code> | Add a VSCode development environment (used for GitHub Codespaces). |
| <code><a href="#projen-modules.PythonPackageOptions.property.devDeps">devDeps</a></code> | <code>string[]</code> | List of dev dependencies for this project. Dependencies use the format: `<module>@<semver>`. |
| <code><a href="#projen-modules.PythonPackageOptions.property.github">github</a></code> | <code>boolean</code> | Enable GitHub integration. |
| <code><a href="#projen-modules.PythonPackageOptions.property.githubOptions">githubOptions</a></code> | <code>projen.github.GitHubOptions</code> | Options for GitHub integration. |
| <code><a href="#projen-modules.PythonPackageOptions.property.gitIgnoreOptions">gitIgnoreOptions</a></code> | <code>projen.IgnoreFileOptions</code> | Configuration options for .gitignore file. |
| <code><a href="#projen-modules.PythonPackageOptions.property.gitOptions">gitOptions</a></code> | <code>projen.GitOptions</code> | Configuration options for git. |
| <code><a href="#projen-modules.PythonPackageOptions.property.gitpod">gitpod</a></code> | <code>boolean</code> | Add a Gitpod development environment. |
| <code><a href="#projen-modules.PythonPackageOptions.property.homepage">homepage</a></code> | <code>string</code> | A URL to the website of the project. |
| <code><a href="#projen-modules.PythonPackageOptions.property.license">license</a></code> | <code>string</code> | License of this package as an SPDX identifier. |
| <code><a href="#projen-modules.PythonPackageOptions.property.logging">logging</a></code> | <code>projen.LoggerOptions</code> | Configure logging options such as verbosity. |
| <code><a href="#projen-modules.PythonPackageOptions.property.mergify">mergify</a></code> | <code>boolean</code> | Whether mergify should be enabled on this repository or not. |
| <code><a href="#projen-modules.PythonPackageOptions.property.mergifyOptions">mergifyOptions</a></code> | <code>projen.github.MergifyOptions</code> | Options for mergify. |
| <code><a href="#projen-modules.PythonPackageOptions.property.outdir">outdir</a></code> | <code>string</code> | The root directory of the project. Relative to this directory, all files are synthesized. |
| <code><a href="#projen-modules.PythonPackageOptions.property.packageName">packageName</a></code> | <code>string</code> | Package name. |
| <code><a href="#projen-modules.PythonPackageOptions.property.parent">parent</a></code> | <code>projen.Project</code> | The parent project, if this project is part of a bigger project. |
| <code><a href="#projen-modules.PythonPackageOptions.property.pip">pip</a></code> | <code>boolean</code> | Use pip with a requirements.txt file to track project dependencies. |
| <code><a href="#projen-modules.PythonPackageOptions.property.poetry">poetry</a></code> | <code>boolean</code> | Use poetry to manage your project dependencies, virtual environment, and (optional) packaging/publishing. |
| <code><a href="#projen-modules.PythonPackageOptions.property.poetryOptions">poetryOptions</a></code> | <code>projen.python.PoetryPyprojectOptionsWithoutDeps</code> | Additional options to set for poetry if using poetry. |
| <code><a href="#projen-modules.PythonPackageOptions.property.projectType">projectType</a></code> | <code>projen.ProjectType</code> | Which type of project this is (library/app). |
| <code><a href="#projen-modules.PythonPackageOptions.property.projenCommand">projenCommand</a></code> | <code>string</code> | The shell command to use in order to run the projen CLI. |
| <code><a href="#projen-modules.PythonPackageOptions.property.projenCredentials">projenCredentials</a></code> | <code>projen.github.GithubCredentials</code> | Choose a method of providing GitHub API access for projen workflows. |
| <code><a href="#projen-modules.PythonPackageOptions.property.projenrcJs">projenrcJs</a></code> | <code>boolean</code> | Use projenrc in javascript. |
| <code><a href="#projen-modules.PythonPackageOptions.property.projenrcJson">projenrcJson</a></code> | <code>boolean</code> | Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation. |
| <code><a href="#projen-modules.PythonPackageOptions.property.projenrcJsonOptions">projenrcJsonOptions</a></code> | <code>projen.ProjenrcJsonOptions</code> | Options for .projenrc.json. |
| <code><a href="#projen-modules.PythonPackageOptions.property.projenrcJsOptions">projenrcJsOptions</a></code> | <code>projen.javascript.ProjenrcOptions</code> | Options related to projenrc in JavaScript. |
| <code><a href="#projen-modules.PythonPackageOptions.property.projenrcPython">projenrcPython</a></code> | <code>boolean</code> | Use projenrc in Python. |
| <code><a href="#projen-modules.PythonPackageOptions.property.projenrcPythonOptions">projenrcPythonOptions</a></code> | <code>projen.python.ProjenrcOptions</code> | Options related to projenrc in python. |
| <code><a href="#projen-modules.PythonPackageOptions.property.projenrcTs">projenrcTs</a></code> | <code>boolean</code> | Use projenrc in TypeScript. |
| <code><a href="#projen-modules.PythonPackageOptions.property.projenrcTsOptions">projenrcTsOptions</a></code> | <code>projen.typescript.ProjenrcTsOptions</code> | Options related to projenrc in TypeScript. |
| <code><a href="#projen-modules.PythonPackageOptions.property.projenTokenSecret">projenTokenSecret</a></code> | <code>string</code> | The name of a secret which includes a GitHub Personal Access Token to be used by projen workflows. |
| <code><a href="#projen-modules.PythonPackageOptions.property.pullRequestTemplate">pullRequestTemplate</a></code> | <code>boolean</code> | Include a GitHub pull request template. |
| <code><a href="#projen-modules.PythonPackageOptions.property.pullRequestTemplateContents">pullRequestTemplateContents</a></code> | <code>string[]</code> | The contents of the pull request template. |
| <code><a href="#projen-modules.PythonPackageOptions.property.pytest">pytest</a></code> | <code>boolean</code> | Include pytest tests. |
| <code><a href="#projen-modules.PythonPackageOptions.property.pytestOptions">pytestOptions</a></code> | <code>projen.python.PytestOptions</code> | pytest options. |
| <code><a href="#projen-modules.PythonPackageOptions.property.pythonExec">pythonExec</a></code> | <code>string</code> | Path to the python executable to use. |
| <code><a href="#projen-modules.PythonPackageOptions.property.readme">readme</a></code> | <code><a href="#projen-modules.ReadmeOptions">ReadmeOptions</a></code> | Configuration of the README.md file. |
| <code><a href="#projen-modules.PythonPackageOptions.property.renovatebot">renovatebot</a></code> | <code>boolean</code> | Use renovatebot to handle dependency upgrades. |
| <code><a href="#projen-modules.PythonPackageOptions.property.renovatebotOptions">renovatebotOptions</a></code> | <code>projen.RenovatebotOptions</code> | Options for renovatebot. |
| <code><a href="#projen-modules.PythonPackageOptions.property.sample">sample</a></code> | <code>boolean</code> | Include sample code and test if the relevant directories don't exist. |
| <code><a href="#projen-modules.PythonPackageOptions.property.sampleTestdir">sampleTestdir</a></code> | <code>string</code> | Location of sample tests. |
| <code><a href="#projen-modules.PythonPackageOptions.property.setupConfig">setupConfig</a></code> | <code>{[ key: string ]: any}</code> | Additional fields to pass in the setup() function if using setuptools. |
| <code><a href="#projen-modules.PythonPackageOptions.property.setuptools">setuptools</a></code> | <code>boolean</code> | Use setuptools with a setup.py script for packaging and publishing. |
| <code><a href="#projen-modules.PythonPackageOptions.property.stale">stale</a></code> | <code>boolean</code> | Auto-close of stale issues and pull request. |
| <code><a href="#projen-modules.PythonPackageOptions.property.staleOptions">staleOptions</a></code> | <code>projen.github.StaleOptions</code> | Auto-close stale issues and pull requests. |
| <code><a href="#projen-modules.PythonPackageOptions.property.venv">venv</a></code> | <code>boolean</code> | Use venv to manage a virtual environment for installing dependencies inside. |
| <code><a href="#projen-modules.PythonPackageOptions.property.venvOptions">venvOptions</a></code> | <code>projen.python.VenvOptions</code> | Venv options. |
| <code><a href="#projen-modules.PythonPackageOptions.property.vscode">vscode</a></code> | <code>boolean</code> | Enable VSCode integration. |

---

##### `authorEmail`<sup>Required</sup> <a name="authorEmail" id="projen-modules.PythonPackageOptions.property.authorEmail"></a>

```typescript
public readonly authorEmail: string;
```

- *Type:* string
- *Default:* $GIT_USER_EMAIL

Author's e-mail.

---

##### `authorName`<sup>Required</sup> <a name="authorName" id="projen-modules.PythonPackageOptions.property.authorName"></a>

```typescript
public readonly authorName: string;
```

- *Type:* string
- *Default:* $GIT_USER_NAME

Author's name.

---

##### `codeOwners`<sup>Required</sup> <a name="codeOwners" id="projen-modules.PythonPackageOptions.property.codeOwners"></a>

```typescript
public readonly codeOwners: string[];
```

- *Type:* string[]

List of teams used to generate the CODEOWNERS file.

---

##### `moduleName`<sup>Required</sup> <a name="moduleName" id="projen-modules.PythonPackageOptions.property.moduleName"></a>

```typescript
public readonly moduleName: string;
```

- *Type:* string
- *Default:* $PYTHON_MODULE_NAME

Name of the python package as used in imports and filenames.

Must only consist of alphanumeric characters and underscores.

---

##### `name`<sup>Required</sup> <a name="name" id="projen-modules.PythonPackageOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* $BASEDIR

This is the name of your project.

---

##### `version`<sup>Required</sup> <a name="version" id="projen-modules.PythonPackageOptions.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string
- *Default:* "0.1.0"

Version of the package.

---

##### `autoApproveOptions`<sup>Optional</sup> <a name="autoApproveOptions" id="projen-modules.PythonPackageOptions.property.autoApproveOptions"></a>

```typescript
public readonly autoApproveOptions: AutoApproveOptions;
```

- *Type:* projen.github.AutoApproveOptions
- *Default:* auto approve is disabled

Enable and configure the 'auto approve' workflow.

---

##### `autoMerge`<sup>Optional</sup> <a name="autoMerge" id="projen-modules.PythonPackageOptions.property.autoMerge"></a>

```typescript
public readonly autoMerge: boolean;
```

- *Type:* boolean
- *Default:* true

Enable automatic merging on GitHub.

Has no effect if `github.mergify`
is set to false.

---

##### `autoMergeOptions`<sup>Optional</sup> <a name="autoMergeOptions" id="projen-modules.PythonPackageOptions.property.autoMergeOptions"></a>

```typescript
public readonly autoMergeOptions: AutoMergeOptions;
```

- *Type:* projen.github.AutoMergeOptions
- *Default:* see defaults in `AutoMergeOptions`

Configure options for automatic merging on GitHub.

Has no effect if
`github.mergify` or `autoMerge` is set to false.

---

##### `classifiers`<sup>Optional</sup> <a name="classifiers" id="projen-modules.PythonPackageOptions.property.classifiers"></a>

```typescript
public readonly classifiers: string[];
```

- *Type:* string[]

A list of PyPI trove classifiers that describe the project.

---

##### `clobber`<sup>Optional</sup> <a name="clobber" id="projen-modules.PythonPackageOptions.property.clobber"></a>

```typescript
public readonly clobber: boolean;
```

- *Type:* boolean
- *Default:* true, but false for subprojects

Add a `clobber` task which resets the repo to origin.

---

##### `commitGenerated`<sup>Optional</sup> <a name="commitGenerated" id="projen-modules.PythonPackageOptions.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean
- *Default:* true

Whether to commit the managed files by default.

---

##### `deps`<sup>Optional</sup> <a name="deps" id="projen-modules.PythonPackageOptions.property.deps"></a>

```typescript
public readonly deps: string[];
```

- *Type:* string[]
- *Default:* []

List of runtime dependencies for this project. Dependencies use the format: `<module>@<semver>`.

Additional dependencies can be added via `project.addDependency()`.

---

##### `description`<sup>Optional</sup> <a name="description" id="projen-modules.PythonPackageOptions.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A short description of the package.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="projen-modules.PythonPackageOptions.property.devContainer"></a>

```typescript
public readonly devContainer: boolean;
```

- *Type:* boolean
- *Default:* false

Add a VSCode development environment (used for GitHub Codespaces).

---

##### `devDeps`<sup>Optional</sup> <a name="devDeps" id="projen-modules.PythonPackageOptions.property.devDeps"></a>

```typescript
public readonly devDeps: string[];
```

- *Type:* string[]
- *Default:* []

List of dev dependencies for this project. Dependencies use the format: `<module>@<semver>`.

Additional dependencies can be added via `project.addDevDependency()`.

---

##### `github`<sup>Optional</sup> <a name="github" id="projen-modules.PythonPackageOptions.property.github"></a>

```typescript
public readonly github: boolean;
```

- *Type:* boolean
- *Default:* true

Enable GitHub integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `githubOptions`<sup>Optional</sup> <a name="githubOptions" id="projen-modules.PythonPackageOptions.property.githubOptions"></a>

```typescript
public readonly githubOptions: GitHubOptions;
```

- *Type:* projen.github.GitHubOptions
- *Default:* see GitHubOptions

Options for GitHub integration.

---

##### `gitIgnoreOptions`<sup>Optional</sup> <a name="gitIgnoreOptions" id="projen-modules.PythonPackageOptions.property.gitIgnoreOptions"></a>

```typescript
public readonly gitIgnoreOptions: IgnoreFileOptions;
```

- *Type:* projen.IgnoreFileOptions

Configuration options for .gitignore file.

---

##### `gitOptions`<sup>Optional</sup> <a name="gitOptions" id="projen-modules.PythonPackageOptions.property.gitOptions"></a>

```typescript
public readonly gitOptions: GitOptions;
```

- *Type:* projen.GitOptions

Configuration options for git.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="projen-modules.PythonPackageOptions.property.gitpod"></a>

```typescript
public readonly gitpod: boolean;
```

- *Type:* boolean
- *Default:* false

Add a Gitpod development environment.

---

##### `homepage`<sup>Optional</sup> <a name="homepage" id="projen-modules.PythonPackageOptions.property.homepage"></a>

```typescript
public readonly homepage: string;
```

- *Type:* string

A URL to the website of the project.

---

##### `license`<sup>Optional</sup> <a name="license" id="projen-modules.PythonPackageOptions.property.license"></a>

```typescript
public readonly license: string;
```

- *Type:* string

License of this package as an SPDX identifier.

---

##### `logging`<sup>Optional</sup> <a name="logging" id="projen-modules.PythonPackageOptions.property.logging"></a>

```typescript
public readonly logging: LoggerOptions;
```

- *Type:* projen.LoggerOptions
- *Default:* {}

Configure logging options such as verbosity.

---

##### ~~`mergify`~~<sup>Optional</sup> <a name="mergify" id="projen-modules.PythonPackageOptions.property.mergify"></a>

- *Deprecated:* use `githubOptions.mergify` instead

```typescript
public readonly mergify: boolean;
```

- *Type:* boolean
- *Default:* true

Whether mergify should be enabled on this repository or not.

---

##### ~~`mergifyOptions`~~<sup>Optional</sup> <a name="mergifyOptions" id="projen-modules.PythonPackageOptions.property.mergifyOptions"></a>

- *Deprecated:* use `githubOptions.mergifyOptions` instead

```typescript
public readonly mergifyOptions: MergifyOptions;
```

- *Type:* projen.github.MergifyOptions
- *Default:* default options

Options for mergify.

---

##### `outdir`<sup>Optional</sup> <a name="outdir" id="projen-modules.PythonPackageOptions.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string
- *Default:* "."

The root directory of the project. Relative to this directory, all files are synthesized.

If this project has a parent, this directory is relative to the parent
directory and it cannot be the same as the parent or any of it's other
subprojects.

---

##### `packageName`<sup>Optional</sup> <a name="packageName" id="projen-modules.PythonPackageOptions.property.packageName"></a>

```typescript
public readonly packageName: string;
```

- *Type:* string

Package name.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="projen-modules.PythonPackageOptions.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

The parent project, if this project is part of a bigger project.

---

##### `pip`<sup>Optional</sup> <a name="pip" id="projen-modules.PythonPackageOptions.property.pip"></a>

```typescript
public readonly pip: boolean;
```

- *Type:* boolean
- *Default:* true, unless poetry is true, then false

Use pip with a requirements.txt file to track project dependencies.

---

##### `poetry`<sup>Optional</sup> <a name="poetry" id="projen-modules.PythonPackageOptions.property.poetry"></a>

```typescript
public readonly poetry: boolean;
```

- *Type:* boolean
- *Default:* false

Use poetry to manage your project dependencies, virtual environment, and (optional) packaging/publishing.

This feature is incompatible with pip, setuptools, or venv.
If you set this option to `true`, then pip, setuptools, and venv must be set to `false`.

---

##### `poetryOptions`<sup>Optional</sup> <a name="poetryOptions" id="projen-modules.PythonPackageOptions.property.poetryOptions"></a>

```typescript
public readonly poetryOptions: PoetryPyprojectOptionsWithoutDeps;
```

- *Type:* projen.python.PoetryPyprojectOptionsWithoutDeps

Additional options to set for poetry if using poetry.

---

##### ~~`projectType`~~<sup>Optional</sup> <a name="projectType" id="projen-modules.PythonPackageOptions.property.projectType"></a>

- *Deprecated:* no longer supported at the base project level

```typescript
public readonly projectType: ProjectType;
```

- *Type:* projen.ProjectType
- *Default:* ProjectType.UNKNOWN

Which type of project this is (library/app).

---

##### `projenCommand`<sup>Optional</sup> <a name="projenCommand" id="projen-modules.PythonPackageOptions.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string
- *Default:* "npx projen"

The shell command to use in order to run the projen CLI.

Can be used to customize in special environments.

---

##### `projenCredentials`<sup>Optional</sup> <a name="projenCredentials" id="projen-modules.PythonPackageOptions.property.projenCredentials"></a>

```typescript
public readonly projenCredentials: GithubCredentials;
```

- *Type:* projen.github.GithubCredentials
- *Default:* use a personal access token named PROJEN_GITHUB_TOKEN

Choose a method of providing GitHub API access for projen workflows.

---

##### `projenrcJs`<sup>Optional</sup> <a name="projenrcJs" id="projen-modules.PythonPackageOptions.property.projenrcJs"></a>

```typescript
public readonly projenrcJs: boolean;
```

- *Type:* boolean
- *Default:* false

Use projenrc in javascript.

This will install `projen` as a JavaScript dependency and add a `synth`
task which will run `.projenrc.js`.

---

##### `projenrcJson`<sup>Optional</sup> <a name="projenrcJson" id="projen-modules.PythonPackageOptions.property.projenrcJson"></a>

```typescript
public readonly projenrcJson: boolean;
```

- *Type:* boolean
- *Default:* false

Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation.

---

##### `projenrcJsonOptions`<sup>Optional</sup> <a name="projenrcJsonOptions" id="projen-modules.PythonPackageOptions.property.projenrcJsonOptions"></a>

```typescript
public readonly projenrcJsonOptions: ProjenrcJsonOptions;
```

- *Type:* projen.ProjenrcJsonOptions
- *Default:* default options

Options for .projenrc.json.

---

##### `projenrcJsOptions`<sup>Optional</sup> <a name="projenrcJsOptions" id="projen-modules.PythonPackageOptions.property.projenrcJsOptions"></a>

```typescript
public readonly projenrcJsOptions: ProjenrcOptions;
```

- *Type:* projen.javascript.ProjenrcOptions
- *Default:* default options

Options related to projenrc in JavaScript.

---

##### `projenrcPython`<sup>Optional</sup> <a name="projenrcPython" id="projen-modules.PythonPackageOptions.property.projenrcPython"></a>

```typescript
public readonly projenrcPython: boolean;
```

- *Type:* boolean
- *Default:* true

Use projenrc in Python.

This will install `projen` as a Python dependency and add a `synth`
task which will run `.projenrc.py`.

---

##### `projenrcPythonOptions`<sup>Optional</sup> <a name="projenrcPythonOptions" id="projen-modules.PythonPackageOptions.property.projenrcPythonOptions"></a>

```typescript
public readonly projenrcPythonOptions: ProjenrcOptions;
```

- *Type:* projen.python.ProjenrcOptions
- *Default:* default options

Options related to projenrc in python.

---

##### `projenrcTs`<sup>Optional</sup> <a name="projenrcTs" id="projen-modules.PythonPackageOptions.property.projenrcTs"></a>

```typescript
public readonly projenrcTs: boolean;
```

- *Type:* boolean
- *Default:* false

Use projenrc in TypeScript.

This will create a tsconfig file (default: `tsconfig.projen.json`)
and use `ts-node` in the default task to parse the project source files.

---

##### `projenrcTsOptions`<sup>Optional</sup> <a name="projenrcTsOptions" id="projen-modules.PythonPackageOptions.property.projenrcTsOptions"></a>

```typescript
public readonly projenrcTsOptions: ProjenrcTsOptions;
```

- *Type:* projen.typescript.ProjenrcTsOptions
- *Default:* default options

Options related to projenrc in TypeScript.

---

##### ~~`projenTokenSecret`~~<sup>Optional</sup> <a name="projenTokenSecret" id="projen-modules.PythonPackageOptions.property.projenTokenSecret"></a>

- *Deprecated:* use `projenCredentials`

```typescript
public readonly projenTokenSecret: string;
```

- *Type:* string
- *Default:* "PROJEN_GITHUB_TOKEN"

The name of a secret which includes a GitHub Personal Access Token to be used by projen workflows.

This token needs to have the `repo`, `workflows`
and `packages` scope.

---

##### `pullRequestTemplate`<sup>Optional</sup> <a name="pullRequestTemplate" id="projen-modules.PythonPackageOptions.property.pullRequestTemplate"></a>

```typescript
public readonly pullRequestTemplate: boolean;
```

- *Type:* boolean
- *Default:* true

Include a GitHub pull request template.

---

##### `pullRequestTemplateContents`<sup>Optional</sup> <a name="pullRequestTemplateContents" id="projen-modules.PythonPackageOptions.property.pullRequestTemplateContents"></a>

```typescript
public readonly pullRequestTemplateContents: string[];
```

- *Type:* string[]
- *Default:* default content

The contents of the pull request template.

---

##### `pytest`<sup>Optional</sup> <a name="pytest" id="projen-modules.PythonPackageOptions.property.pytest"></a>

```typescript
public readonly pytest: boolean;
```

- *Type:* boolean
- *Default:* true

Include pytest tests.

---

##### `pytestOptions`<sup>Optional</sup> <a name="pytestOptions" id="projen-modules.PythonPackageOptions.property.pytestOptions"></a>

```typescript
public readonly pytestOptions: PytestOptions;
```

- *Type:* projen.python.PytestOptions
- *Default:* defaults

pytest options.

---

##### `pythonExec`<sup>Optional</sup> <a name="pythonExec" id="projen-modules.PythonPackageOptions.property.pythonExec"></a>

```typescript
public readonly pythonExec: string;
```

- *Type:* string
- *Default:* "python"

Path to the python executable to use.

---

##### `readme`<sup>Optional</sup> <a name="readme" id="projen-modules.PythonPackageOptions.property.readme"></a>

```typescript
public readonly readme: ReadmeOptions;
```

- *Type:* <a href="#projen-modules.ReadmeOptions">ReadmeOptions</a>

Configuration of the README.md file.

---

##### `renovatebot`<sup>Optional</sup> <a name="renovatebot" id="projen-modules.PythonPackageOptions.property.renovatebot"></a>

```typescript
public readonly renovatebot: boolean;
```

- *Type:* boolean
- *Default:* false

Use renovatebot to handle dependency upgrades.

---

##### `renovatebotOptions`<sup>Optional</sup> <a name="renovatebotOptions" id="projen-modules.PythonPackageOptions.property.renovatebotOptions"></a>

```typescript
public readonly renovatebotOptions: RenovatebotOptions;
```

- *Type:* projen.RenovatebotOptions
- *Default:* default options

Options for renovatebot.

---

##### `sample`<sup>Optional</sup> <a name="sample" id="projen-modules.PythonPackageOptions.property.sample"></a>

```typescript
public readonly sample: boolean;
```

- *Type:* boolean
- *Default:* true

Include sample code and test if the relevant directories don't exist.

---

##### `sampleTestdir`<sup>Optional</sup> <a name="sampleTestdir" id="projen-modules.PythonPackageOptions.property.sampleTestdir"></a>

```typescript
public readonly sampleTestdir: string;
```

- *Type:* string
- *Default:* "tests"

Location of sample tests.

Typically the same directory where project tests will be located.

---

##### `setupConfig`<sup>Optional</sup> <a name="setupConfig" id="projen-modules.PythonPackageOptions.property.setupConfig"></a>

```typescript
public readonly setupConfig: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

Additional fields to pass in the setup() function if using setuptools.

---

##### `setuptools`<sup>Optional</sup> <a name="setuptools" id="projen-modules.PythonPackageOptions.property.setuptools"></a>

```typescript
public readonly setuptools: boolean;
```

- *Type:* boolean
- *Default:* true, unless poetry is true, then false

Use setuptools with a setup.py script for packaging and publishing.

---

##### `stale`<sup>Optional</sup> <a name="stale" id="projen-modules.PythonPackageOptions.property.stale"></a>

```typescript
public readonly stale: boolean;
```

- *Type:* boolean
- *Default:* false

Auto-close of stale issues and pull request.

See `staleOptions` for options.

---

##### `staleOptions`<sup>Optional</sup> <a name="staleOptions" id="projen-modules.PythonPackageOptions.property.staleOptions"></a>

```typescript
public readonly staleOptions: StaleOptions;
```

- *Type:* projen.github.StaleOptions
- *Default:* see defaults in `StaleOptions`

Auto-close stale issues and pull requests.

To disable set `stale` to `false`.

---

##### `venv`<sup>Optional</sup> <a name="venv" id="projen-modules.PythonPackageOptions.property.venv"></a>

```typescript
public readonly venv: boolean;
```

- *Type:* boolean
- *Default:* true, unless poetry is true, then false

Use venv to manage a virtual environment for installing dependencies inside.

---

##### `venvOptions`<sup>Optional</sup> <a name="venvOptions" id="projen-modules.PythonPackageOptions.property.venvOptions"></a>

```typescript
public readonly venvOptions: VenvOptions;
```

- *Type:* projen.python.VenvOptions
- *Default:* defaults

Venv options.

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="projen-modules.PythonPackageOptions.property.vscode"></a>

```typescript
public readonly vscode: boolean;
```

- *Type:* boolean
- *Default:* true

Enable VSCode integration.

Enabled by default for root projects. Disabled for non-root projects.

---

### ReadmeOptions <a name="ReadmeOptions" id="projen-modules.ReadmeOptions"></a>

#### Initializer <a name="Initializer" id="projen-modules.ReadmeOptions.Initializer"></a>

```typescript
import { ReadmeOptions } from 'projen-modules'

const readmeOptions: ReadmeOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen-modules.ReadmeOptions.property.description">description</a></code> | <code>string</code> | The description of the project. |

---

##### `description`<sup>Optional</sup> <a name="description" id="projen-modules.ReadmeOptions.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the project.

---

## Classes <a name="Classes" id="Classes"></a>

### Section <a name="Section" id="projen-modules.Section"></a>

#### Initializers <a name="Initializers" id="projen-modules.Section.Initializer"></a>

```typescript
import { Section } from 'projen-modules'

new Section(options: ISectionOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen-modules.Section.Initializer.parameter.options">options</a></code> | <code><a href="#projen-modules.ISectionOptions">ISectionOptions</a></code> | *No description.* |

---

##### `options`<sup>Required</sup> <a name="options" id="projen-modules.Section.Initializer.parameter.options"></a>

- *Type:* <a href="#projen-modules.ISectionOptions">ISectionOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen-modules.Section.synth">synth</a></code> | *No description.* |

---

##### `synth` <a name="synth" id="projen-modules.Section.synth"></a>

```typescript
public synth(): string
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen-modules.Section.property.options">options</a></code> | <code><a href="#projen-modules.ISectionOptions">ISectionOptions</a></code> | *No description.* |

---

##### `options`<sup>Required</sup> <a name="options" id="projen-modules.Section.property.options"></a>

```typescript
public readonly options: ISectionOptions;
```

- *Type:* <a href="#projen-modules.ISectionOptions">ISectionOptions</a>

---


## Protocols <a name="Protocols" id="Protocols"></a>

### ISectionOptions <a name="ISectionOptions" id="projen-modules.ISectionOptions"></a>

- *Implemented By:* <a href="#projen-modules.ISectionOptions">ISectionOptions</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen-modules.ISectionOptions.property.body">body</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen-modules.ISectionOptions.property.title">title</a></code> | <code>string</code> | *No description.* |

---

##### `body`<sup>Required</sup> <a name="body" id="projen-modules.ISectionOptions.property.body"></a>

```typescript
public readonly body: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="projen-modules.ISectionOptions.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

