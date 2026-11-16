/**
 * Constrains a number between a minimum and maximum value.
 * @param value The number to clamp.
 * @param min The minimum value.
 * @param max The maximum value.
 * @returns The clamped number.
 */
export function clamp<T extends number>(value: T, min: T, max: T): T {
  return Math.min(Math.max(value, min), max);
}
