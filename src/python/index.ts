import { PythonProject, PythonProjectOptions } from 'projen/lib/python';
import { mergeOptions } from '../utils/merge-options';

export interface PythonPackageOptions extends PythonProjectOptions {}

function getOptions(options: PythonPackageOptions) {
  const { name } = options;

  const defaults = {
    name,
    autoMerge: false,
    githubOptions: {
      workflows: false,
    },
    projenrcTs: true,
    readme: {
      filename: 'README.md',
      contents: `# ${name}

Example README
    `,
    },
  } satisfies Partial<PythonPackageOptions>;

  return mergeOptions(defaults, options);
}

export class PythonPackage extends PythonProject {
  constructor(options: PythonPackageOptions) {
    const mergedOptions = getOptions(options);

    super({
      ...mergedOptions,
    });
  }
}
