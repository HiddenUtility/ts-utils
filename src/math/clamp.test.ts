import { expect, test } from 'vitest';
import { clamp } from './clamp';

test('clamp constrains value within bounds', () => {
  expect(clamp(5, 0, 10)).toBe(5);
  expect(clamp(-5, 0, 10)).toBe(0);
  expect(clamp(15, 0, 10)).toBe(10);
});

test('clamp works with floats', () => {
  expect(clamp(5.5, 0, 10)).toBe(5.5);
  expect(clamp(10.5, 0, 10)).toBe(10);
});
