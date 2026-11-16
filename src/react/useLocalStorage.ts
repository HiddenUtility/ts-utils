import { useState, useEffect } from 'react';

/**
 * A custom React hook that synchronizes a state value with localStorage.
 * @param key The key under which the value is stored in localStorage.
 * @param initialValue The initial value if no value is found in localStorage.
 * @returns An array containing the current value and a function to update it.
 */
export function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T) => void] {
  // Get initial value from localStorage or use initialValue
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn(, error);
      return initialValue;
    }
  });

  // Update localStorage whenever the storedValue changes
  const setValue = (value: T) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.warn(, error);
    }
  };

  return [storedValue, setValue];
}
