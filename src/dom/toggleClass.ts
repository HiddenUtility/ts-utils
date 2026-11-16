/**
 * Toggles a class on an element.
 * @param element The element to toggle the class on.
 * @param className The class name to toggle.
 * @returns True if the class was added, false if it was removed.
 */
export function toggleClass(element: HTMLElement, className: string): boolean {
  return element.classList.toggle(className);
}
