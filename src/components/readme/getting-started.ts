import { Project } from 'projen';
import { NodePackageManager, NodeProject } from 'projen/lib/javascript';
import { PythonProject } from 'projen/lib/python';

const YARN_PACKAGE_MANAGERS = [
  NodePackageManager.YARN,
  NodePackageManager.YARN_CLASSIC,
  NodePackageManager.YARN2,
  NodePackageManager.YARN_BERRY,
];

/**
 * Options for the "Getting Started" README section
 */
export interface GettingStartedOptions {
  /**
   * The Node.js version the project is built with, such as a node project's
   * `workflowNodeVersion`, which is only visible to the project itself.
   *
   * @default - the project's `minNodeVersion`
   */
  readonly nodeVersion?: string;

  /**
   * Prerequisites specific to the project type, listed after the tools
   *
   * @default - none
   */
  readonly prerequisites?: string[];
}

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

function nodePrerequisite(nodeVersion?: string): string {
  // versions such as `lts/*` have no major to show
  const major = /\d+/.exec(nodeVersion ?? '')?.[0];
  return major ? `Node.js ${major}` : 'a current Node.js LTS release';
}

function packageManagerPrerequisite(project: NodeProject): string {
  const { packageManager, pnpmVersion, yarnVersion } = project.package;
  switch (packageManager) {
    case NodePackageManager.YARN:
    case NodePackageManager.YARN_CLASSIC:
      return 'Yarn 1 (classic)';
    case NodePackageManager.YARN2:
    case NodePackageManager.YARN_BERRY:
      return yarnVersion ? `Yarn ${yarnVersion} (Berry)` : 'Yarn (Berry)';
    case NodePackageManager.PNPM:
      return pnpmVersion ? `pnpm ${pnpmVersion}` : 'pnpm';
    case NodePackageManager.BUN:
      return 'Bun';
    default:
      return 'npm';
  }
}

function prerequisites(
  project: Project,
  options: GettingStartedOptions,
): string[] {
  if (!(project instanceof NodeProject)) {
    // non-node projects, such as python, still need Node.js to run projen
    return [
      ...(project instanceof PythonProject ? ['Python 3'] : []),
      `${nodePrerequisite(options.nodeVersion)}, to run projen`,
      ...(options.prerequisites ?? []),
    ];
  }
  return [
    nodePrerequisite(options.nodeVersion ?? project.minNodeVersion),
    packageManagerPrerequisite(project),
    ...(options.prerequisites ?? []),
  ];
}

/**
 * The prerequisites and commands to install a fresh checkout's dependencies
 * and build it
 */
export function gettingStartedSection(
  project: Project,
  options: GettingStartedOptions = {},
): string {
  return [
    'Prerequisites:',
    ...prerequisites(project, options).map((prerequisite) => `* ${prerequisite}`),
    '',
    '```sh',
    installCommand(project),
    'npx projen build',
    '```',
  ].join('\n');
}
