import { IConstruct } from 'constructs';
import { TextFile } from 'projen';
import { NodeProject } from 'projen/lib/javascript';

export class CodeOwners {
  constructor(project: IConstruct, codeOwners: Array<string>) {
    if (project instanceof NodeProject) {
      project.npmignore?.addPatterns('CODEOWNERS');
    }

    new TextFile(project, 'CODEOWNERS', {
      lines: codeOwners.map((owner) => `* ${owner}`),
    });
  }
}
