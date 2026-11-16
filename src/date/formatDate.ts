/**
 * Formats a date using the Intl.DateTimeFormat API.
 * @param date The date to format.
 * @param options Formatting options.
 * @param locale The locale to use (defaults to 'en-US').
 * @returns The formatted date string.
 */
export function formatDate(
  date: Date,
  options?: Intl.DateTimeFormatOptions,
  locale: string = 'en-US'
): string {
  return new Intl.DateTimeFormat(locale, options).format(date);
}
