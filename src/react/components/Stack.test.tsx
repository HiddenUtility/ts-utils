import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Stack } from './Stack';

describe('Stack', () => {
  it('renders children', () => {
    const { getByText } = render(
      <Stack>
        <span data-testid="item1">Item 1</span>
        <span data-testid="item2">Item 2</span>
      </Stack>
    );
    expect(getByText('Item 1')).toBeDefined();
    expect(getByText('Item 2')).toBeDefined();
  });
});
