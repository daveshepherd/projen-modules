import { Project, ProjectOptions } from 'projen';
import { synthSnapshot } from 'projen/lib/util/synth';
import { Readme } from '../../src/components/readme';

export class TestProject extends Project {
  constructor(options: Omit<ProjectOptions, 'name'> = {}) {
    super({
      name: 'my-project',
      ...options,
    });
  }
}

test('empty file', () => {
  const project = new TestProject();
  new Readme(project, {});

  const output = synthSnapshot(project)['README.md'];
  expect(output).toEqual('# my-project');
});

test('initialized with some lines', () => {
  const project = new TestProject();
  new Readme(project, {
    lines: ['line1', 'line2'],
  });

  const output = synthSnapshot(project)['README.md'];
  expect(output).toEqual(['# my-project', 'line1', 'line2'].join('\n'));
});

test('addLine() can add lines later to empty readme', () => {
  const project = new TestProject();
  const readme = new Readme(project, {});

  readme.addLines('hey there');
  readme.addLines('you too');

  const output = synthSnapshot(project)['README.md'];
  expect(output).toEqual(
    ['# my-project', 'hey there', 'you too'].join('\n'),
  );
});

test('addLine() can add lines later', () => {
  const project = new TestProject();
  const readme = new Readme(project, {
    lines: ['line1', 'line2'],
  });

  readme.addLines('hey there');
  readme.addLines('you too');

  const output = synthSnapshot(project)['README.md'];
  expect(output).toEqual(
    ['# my-project', 'line1', 'line2', 'hey there', 'you too'].join('\n'),
  );
});
