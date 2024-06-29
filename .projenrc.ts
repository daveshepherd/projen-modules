import { cdk } from 'projen';
const project = new cdk.JsiiProject({
  author: 'Dave Shepherd',
  authorAddress: 'dave.shepherd@endor.me.uk',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.4.0',
  name: 'projen-jsii',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/dave.shepherd/projen-jsii.git',

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();