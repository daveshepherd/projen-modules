import { Section } from '../../../../src/components/readme/elements/section';

test('basic section', () => {
  // GIVEN
  const section = new Section({
    title: 'section header',
    body: 'section body',
  });

  // WHEN
  const output = section.synth();

  // THEN
  expect(output).toEqual(`## section header

section body`);
});
