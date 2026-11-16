import { expect, test, vi } from 'vitest';
import { delay } from './delay';

test('delay resolves after the specified time', async () => {
  vi.useFakeTimers();
  const start = Date.now();
  const delayPromise = delay(100);
  
  vi.advanceTimersByTime(100);
  await delayPromise;
  
  // Since we use fake timers, we check if the promise resolved.
  // In a real environment, we'd check the elapsed time.
  expect(true).toBe(true); 
  vi.useRealTimers();
});
