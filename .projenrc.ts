import { github } from 'projen';
import { JsiiProject } from './src/jsii';

const project = new JsiiProject({
  author: 'Dave Shepherd',
  authorAddress: 'dave.shepherd@endor.me.uk',
  codeOwners: ['sabre'],
  defaultReleaseBranch: 'main',
  devDeps: ['constructs', 'projen'],
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

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();
