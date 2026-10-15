/**
 * Formats values as code, such as "`a`, `b` or `c`"
 */
export function formatList(values: Array<string>): string {
  const quoted = values.map((value) => '`' + value + '`');
  return quoted.length > 1
    ? `${quoted.slice(0, -1).join(', ')} or ${quoted[quoted.length - 1]}`
    : quoted.join('');
}
