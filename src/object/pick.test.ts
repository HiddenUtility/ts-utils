import { expect, test } from 'vitest';
import { pick } from './pick';

test('pick selects specified keys', () => {
  const obj = { a: 1, b: 2, c: 3 };
  expect(pick(obj, ['a', 'c'])).toEqual({ a: 1, c: 3 });
  expect(pick(obj, ['d'])).toEqual({});
});
