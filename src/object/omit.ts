/**
 * Creates an object composed of the properties of the source object that are not omitted.
 * @param obj The source object.
 * @param keys An array of keys to omit.
 * @returns A new object without the omitted properties.
 */
export function omit<T extends object, K extends keyof T>(obj: T, keys: K[]): Omit<T, K> {
  const result = { ...obj };
  for (const key of keys) {
    delete (result as any)[key];
  }
  return result as Omit<T, K>;
}
