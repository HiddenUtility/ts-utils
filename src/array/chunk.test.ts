import { expect, test } from 'vitest';
import { chunk } from './chunk';

test('chunk splits array into correct sizes', () => {
  expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
});

test('chunk throws error for invalid size', () => {
  expect(() => chunk([1, 2], 0)).toThrow('Chunk size must be at least 1');
});
