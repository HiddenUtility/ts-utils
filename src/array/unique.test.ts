import { expect, test } from 'vitest';
import { unique } from './unique';

test('unique returns only unique elements', () => {
  expect(unique([1, 2, 2, 3, 1])).toEqual([1, 2, 3]);
  expect(unique(['a', 'b', 'a'])).toEqual(['a', 'b']);
});
