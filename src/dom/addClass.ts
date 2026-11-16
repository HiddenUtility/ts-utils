/**
 * Adds a class to an element.
 * @param element The element to add the class to.
 * @param className The class name to add.
 */
export function addClass(element: HTMLElement, className: string): void {
  element.classList.add(className);
}
