import { expect, test } from 'vitest';
import { omit } from './omit';

test('omit removes specified keys', () => {
  const obj = { a: 1, b: 2, c: 3 };
  expect(omit(obj, ['b'])).toEqual({ a: 1, c: 3 });
  expect(omit(obj, ['d'])).toEqual({ a: 1, b: 2, c: 3 });
});
