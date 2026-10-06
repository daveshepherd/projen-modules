# projen-modules

A collection of custom projen modules, that can be used to bootstrap and maintain consistent project configuration, tooling, dependencies, and builds.

## Getting Started

```sh
yarn install
npx projen build
```

This will:
* Install the dependencies
* Apply any projen changes
* Run tests
* Package project locally

Any files changed by projen should be committed to git.

Running the tests like this will update any snapshot files, this should be reviewed and committed to git.

## Testing

Types of testing:
* Snapshot - projen project outputs are stored as a snapshot in the corresponding `__snapshots__` directory. When the project changes then it is expected that these snapshots change too and should be reviewed committed alongside the project.
* Unit tests - these assert on specific functionality of the project and should be written for any new functionality added.


## GitHub Configuration

All pull requests are merged by the [Mergify](https://mergify.com) merge queue, configured in `.mergify.yml`. Once a pull request's checks pass, Mergify queues it, brings it up to date with the default branch, waits for the checks again and squash merges it. Draft pull requests and those labelled `do-not-merge` are not merged.

The repository must be configured as below so that nothing can be merged without going through the queue.

### Mergify

Install the [Mergify GitHub App](https://github.com/apps/mergify) and give it access to this repository.

### Pull request settings

In **Settings → General → Pull Requests**:
* Allow squash merging only (untick merge commits and rebase merging), matching the queue's merge method.
* Untick **Allow auto-merge**, because GitHub's own auto-merge merges outside the queue.
* Tick **Automatically delete head branches**.

### Code scanning

CodeQL runs from `.github/workflows/codeql.yml`, which is managed by projen. In **Settings → Advanced Security**, leave CodeQL **Default setup** off, because it cannot run alongside this workflow. Under **Protection rules**, keep the **Check run failure threshold** at **High or higher** for security alerts and **Errors** for other alerts, as this decides whether the `CodeQL` check fails. Private repositories also need GitHub Code Security enabled there for code scanning results to be uploaded.

### Branch ruleset

In **Settings → Rules → Rulesets**, create a branch ruleset with enforcement **Active** that targets the default branch, and set:
* **Bypass list**: the **Mergify** app only, in **Exempt** mode. Do not add admins or other roles, as anyone on this list can merge without the queue.
* **Restrict updates**: only bypass actors can update the branch, so pull requests cannot be merged from the GitHub UI or CLI and commits cannot be pushed directly.
* **Restrict deletions** and **Block force pushes**.
* **Require a pull request before merging**, with 0 required approvals.
* **Require status checks to pass**, listing the checks that `.mergify.yml` waits for: `build`, `package-js`, `package-python`. Leave **Require branches to be up to date before merging** unticked, as the queue already updates and retests each pull request.
* **Require code scanning results**, with the tool **CodeQL**, security alerts set to **High or higher** and alerts set to **Errors**. Mergify is exempt from this rule, so `.mergify.yml` also waits for the `CodeQL` check instead.

Do not enable GitHub's own **Require merge queue** rule, as it competes with Mergify.

If the queue is unavailable and a change has to be merged, add yourself to the bypass list temporarily and remove yourself afterwards.

## Creating a New Project


```
npx projen new {project} --from projen-modules
```

Some projects may have required fields that need to be specified as part of this command, review any errors for details what needs to be specified.

### Project Types

| Project type                                   | Description                |
| ---------------------------------------------- | -------------------------- |
| [cdk-typescript-app](API.md#cdktypescriptapp-) | A typescript CDK app |
| [npm-package](API.md#npmpackage-)              | A typescript npm package   |
| [python-package](API.md#pythonpackage-)        | A python package           |
| [jsii-package](API.md#jsiiproject-)            | A typescript JSII package  |

## Project Structure

All source is located in `src` and is grouped by:
* `components` - these are common building blocks that can be used by projects to implement specific project functionality.
* `projects` - these are projects that can be built from this project (see #something)
* `utils` - these are helper functions that are often reused

`test` contains tests, and mirrors the `src` directory structure. Within here there are `__snapshots__` which contain snapshots of project tests (see #section).