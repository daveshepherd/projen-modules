import { synthSnapshot } from 'projen/lib/util/synth';
import { CodeQL } from '../../../src/components/github/codeql';
import { TestProject } from '../../utils/test-project';

describe('CodeQL', () => {
  it('should generate codeql.yml file', () => {
    // GIVEN
    const project = new TestProject();
    // WHEN
    new CodeQL(project);
    const snapshot = synthSnapshot(project);
    // THEN
    expect(snapshot['.github/workflows/codeql.yml']).toBeDefined();
    expect(snapshot['.github/workflows/codeql.yml']).toMatchSnapshot();
  });

  it('should contain the correct content in codeql.yml', () => {
    // GIVEN
    const project = new TestProject();
    // WHEN
    new CodeQL(project);
    const snapshot = synthSnapshot(project);
    // THEN
    const content = snapshot['.github/workflows/codeql.yml'];
    expect(content).toContain('name: CodeQL Advanced');
    expect(content).toContain('on:');
    expect(content).toContain('jobs:');
  });
});
