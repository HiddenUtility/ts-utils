/**
 * Returns a new array containing only the unique elements from the input array.
 * @param array The input array.
 * @returns A new array with unique elements.
 */
export function unique<T>(array: T[]): T[] {
  return [...new Set(array)];
}
