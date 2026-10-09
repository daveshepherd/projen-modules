import { Project } from 'projen';
import { NodePackageManager, NodeProject } from 'projen/lib/javascript';

const YARN_PACKAGE_MANAGERS = [
  NodePackageManager.YARN,
  NodePackageManager.YARN_CLASSIC,
  NodePackageManager.YARN2,
  NodePackageManager.YARN_BERRY,
];

function installCommand(project: Project): string {
  if (!(project instanceof NodeProject)) {
    // projen's install task installs the dependencies of non-node projects, such as python
    return 'npx projen install';
  }
  const packageManager = project.package.packageManager;
  return YARN_PACKAGE_MANAGERS.includes(packageManager)
    ? 'yarn install'
    : `${packageManager} install`;
}

/**
 * Commands that install a fresh checkout's dependencies and build it
 */
export function gettingStartedCommands(project: Project): string {
  return ['```sh', installCommand(project), 'npx projen build', '```'].join(
    '\n',
  );
}
