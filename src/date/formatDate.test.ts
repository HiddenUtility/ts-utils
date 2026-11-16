import { expect, test } from 'vitest';
import { formatDate } from './formatDate';

test('formatDate formats correctly with default locale', () => {
  const date = new Date(2023, 0, 1); // Jan 1, 2023
  // Note: Exact format depends on environment/Node version, but usually MM/DD/YYYY
  expect(formatDate(date)).toMatch(/1\/1\/2023/);
});

test('formatDate respects locale and options', () => {
  const date = new Date(2023, 0, 1);
  const options: Intl.DateTimeFormatOptions = { month: 'long', year: 'numeric' };
  expect(formatDate(date, options, 'en-US')).toBe('January 2023');
  expect(formatDate(date, options, 'fr-FR')).toBe('janvier 2023');
});
