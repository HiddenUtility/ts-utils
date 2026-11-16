import { useState, useCallback } from 'react';

/**
 * A custom React hook to toggle a boolean state.
 * @param initialState The initial boolean value.
 * @returns An array containing the current value and a toggle function.
 */
export function useToggle(initialState: boolean = false): [boolean, () => void] {
  const [value, setValue] = useState(initialState);

  const toggle = useCallback(() => {
    setValue((prev) => !prev);
  }, []);

  return [value, toggle];
}
