import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { useDebounce } from './useDebounce';

describe('useDebounce', () => {
  it('should debounce the value', async () => {
    vi.useFakeTimers();
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      {
        initialProps: { value: 0, delay: 500 },
      }
    );

    expect(result.current).toBe(0);

    // Change value
    act(() => {
      rerender({ value: 1, delay: 500 });
    });

    // Should still be 0 because timer hasn't finished
    expect(result.current).toBe(0);

    // Fast-forward time
    act(() => {
      vi.advanceTimersByTime(500);
    });

    expect(result.current).toBe(1);

    vi.useRealTimers();
  });
});
