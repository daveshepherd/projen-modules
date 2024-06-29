import { cdk } from 'projen';
const project = new cdk.JsiiProject({
  author: 'Dave Shepherd',
  authorAddress: 'dave.shepherd@endor.me.uk',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.4.0',
  name: 'projen-jsii',
  publishToPypi: {
    distName: 'projen_jsii',
    module: 'projen_jsii',
  },
  projenrcTs: true,
  repositoryUrl: 'https://github.com/daveshepherd/projen-jsii.git',

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();
