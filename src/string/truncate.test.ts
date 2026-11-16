import { expect, test } from 'vitest';
import { truncate } from './truncate';

test('truncate shortens string and adds ellipsis', () => {
  expect(truncate('hello world', 8)).toBe('hello...');
  expect(truncate('hello', 10)).toBe('hello');
});
