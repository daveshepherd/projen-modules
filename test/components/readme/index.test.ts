import { Project, ProjectOptions } from 'projen';
import { NodePackageManager, NodeProject } from 'projen/lib/javascript';
import { synthSnapshot } from 'projen/lib/util/synth';
import { Readme, ReadmeOrder } from '../../../src/components/readme';
import { gettingStartedCommands } from '../../../src/components/readme/getting-started';

class TestProject extends Project {
  constructor(options: Omit<ProjectOptions, 'name'> = {}) {
    super({
      name: 'my-project',
      ...options,
    });
  }
}

describe('README generation', () => {
  it('has a README with just has project title if nothing else is specified', () => {
    // GIVEN
    const project = new TestProject();

    // WHEN
    new Readme(project);

    // THEN
    const output = synthSnapshot(project)['README.md'];
    expect(output).toEqual('# my-project\n\n');
  });

  it('has a README has a description when specified', () => {
    // GIVEN
    const project = new TestProject();

    // WHEN
    new Readme(project, { description: 'This is a test project.' });

    // THEN
    const output = synthSnapshot(project)['README.md'];
    expect(output).toEqual(
      `# my-project

This is a test project.

`,
    );
  });
});

describe('README sections', () => {
  const headings = (project: Project) =>
    (synthSnapshot(project)['README.md'] as string)
      .split('\n')
      .filter((line) => line.startsWith('## '));

  it('keeps sections without an order in the order they were added', () => {
    const project = new TestProject();
    const readme = new Readme(project);

    readme.addSection('First', 'one');
    readme.addSection('Second', 'two');

    expect(headings(project)).toEqual(['## First', '## Second']);
  });

  it('orders sections by order, then the order they were added', () => {
    const project = new TestProject();
    const readme = new Readme(project);

    readme.addSection('Reference', 'r', { order: ReadmeOrder.REFERENCE });
    readme.addSection('Downstream', 'd');
    readme.addSection('Usage', 'u', { order: ReadmeOrder.USAGE });
    readme.addSection('Getting Started', 'g', {
      order: ReadmeOrder.INTRODUCTION,
    });
    readme.addSection('More Usage', 'm', { order: ReadmeOrder.USAGE });

    expect(headings(project)).toEqual([
      '## Getting Started',
      '## Usage',
      '## More Usage',
      '## Downstream',
      '## Reference',
    ]);
  });

  it('replaces a section with the same title in its place', () => {
    const project = new TestProject();
    const readme = new Readme(project);
    readme.addSection('First', 'one', { order: ReadmeOrder.INTRODUCTION });
    readme.addSection('Second', 'two');

    readme.addSection('First', 'replaced');

    const output: string = synthSnapshot(project)['README.md'];
    expect(output.match(/^## .*/gm)).toEqual(['## First', '## Second']);
    expect(output).toContain('## First\n\nreplaced');
    expect(output).not.toContain('one');
  });

  it('moves a replaced section when given an order', () => {
    const project = new TestProject();
    const readme = new Readme(project);
    readme.addSection('First', 'one');
    readme.addSection('Second', 'two');

    readme.addSection('First', 'one', { order: ReadmeOrder.REFERENCE });

    expect(headings(project)).toEqual(['## Second', '## First']);
  });

  it('removes a section', () => {
    const project = new TestProject();
    const readme = new Readme(project);
    readme.addSection('First', 'one');
    readme.addSection('Second', 'two');

    expect(readme.removeSection('First')).toBe(true);
    expect(readme.removeSection('Missing')).toBe(false);

    expect(headings(project)).toEqual(['## Second']);
  });

  it('finds a section by title', () => {
    const project = new TestProject();
    const readme = new Readme(project);
    readme.addSection('First', 'one');

    expect(readme.tryFindSection('First')?.options.body).toBe('one');
    expect(readme.tryFindSection('Missing')).toBeUndefined();
  });

  it('is found on its project', () => {
    const project = new TestProject();
    expect(Readme.of(project)).toBeUndefined();

    const readme = new Readme(project);

    expect(Readme.of(project)).toBe(readme);
  });
});

describe('getting started', () => {
  it('installs with the package manager of a node project', () => {
    const project = new NodeProject({
      defaultReleaseBranch: 'main',
      name: 'my-project',
      packageManager: NodePackageManager.PNPM,
    });

    expect(gettingStartedCommands(project)).toBe(
      '```sh\npnpm install\nnpx projen build\n```',
    );
  });

  it('installs with projen for other projects', () => {
    expect(gettingStartedCommands(new TestProject())).toBe(
      '```sh\nnpx projen install\nnpx projen build\n```',
    );
  });
});
