/**
 * Splits an array into chunks of a specified size.
 * @param array The input array.
 * @param size The size of each chunk.
 * @returns An array of chunks.
 * @throws Error if size is less than 1.
 */
export function chunk<T>(array: T[], size: number): T[][] {
  if (size < 1) {
    throw new Error('Chunk size must be at least 1');
  }
  const chunks: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
}
