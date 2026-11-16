import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Input } from './Input';

describe('Input', () => {
  it('renders correctly', () => {
    const { getByPlaceholderText } = render(<Input placeholder="Search..." />);
    expect(getByPlaceholderText('Search...')).toBeDefined();
  });
});
