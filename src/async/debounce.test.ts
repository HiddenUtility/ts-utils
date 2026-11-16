import { expect, test, vi } from 'vitest';
import { debounce } from './debounce';

test('debounce delays function execution', () => {
  vi.useFakeTimers();
  const callback = vi.fn();
  const debounced = debounce(callback, 100);

  debounced();
  debounced();
  debounced();

  expect(callback).not.toHaveBeenCalled();

  vi.advanceTimersByTime(100);

  expect(callback).toHaveBeenCalledTimes(1);
  vi.useRealTimers();
});
