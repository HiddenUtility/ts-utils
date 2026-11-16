/**
 * Capitalizes the first letter of a string.
 * @param str The input string.
 * @returns The capitalized string.
 */
export function capitalize(str: string): string {
  if (str.length === 0) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}
