/**
 * Checks if a given date is today.
 * @param date The date to check.
 * @returns True if the date is today, false otherwise.
 */
export function isToday(date: Date): boolean {
  const today = new Date();
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
}
