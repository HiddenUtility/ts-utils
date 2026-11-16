/**
 * Truncates a string to a specified length and adds an ellipsis if it exceeds that length.
 * @param str The input string.
 * @param length The maximum length of the truncated string (including ellipsis).
 * @returns The truncated string.
 */
export function truncate(str: string, length: number): string {
  if (str.length <= length) return str;
  return str.slice(0, length - 3) + '...';
}
