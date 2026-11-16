import { expect, test, describe, beforeEach } from 'vitest';
import { addClass } from './addClass';
import { removeClass } from './removeClass';
import { toggleClass } from './toggleClass';

describe('DOM utilities', () => {
  let element: HTMLElement;

  beforeEach(() => {
    element = document.createElement('div');
  });

  describe('addClass', () => {
    test('adds a class to an element', () => {
      addClass(element, 'test-class');
      expect(element.classList.contains('test-class')).toBe(true);
    });
  });

  describe('removeClass', () => {
    test('removes a class from an element', () => {
      element.classList.add('test-class');
      removeClass(element, 'test-class');
      expect(element.classList.contains('test-class')).toBe(false);
    });
  });

  describe('toggleClass', () => {
    test('toggles a class on an element', () => {
      expect(toggleClass(element, 'test-class')).toBe(true);
      expect(element.classList.contains('test-class')).toBe(true);

      expect(toggleClass(element, 'test-class')).toBe(false);
      expect(element.classList.contains('test-class')).toBe(false);
    });
  });
});
