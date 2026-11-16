/**
 * Removes a class from an element.
 * @param element The element to remove the class from.
 * @param className The class name to remove.
 */
export function removeClass(element: HTMLElement, className: string): void {
  element.classList.remove(className);
}
