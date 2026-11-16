import { expect, test } from 'vitest';
import { capitalize } from './capitalize';

test('capitalize capitalizes the first letter', () => {
  expect(capitalize('hello')).toBe('Hello');
  expect(capitalize('')).toBe('');
});
