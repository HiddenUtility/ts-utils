import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Typography } from './Typography';

describe('Typography', () => {
  it('renders as the specified tag', () => {
    const { getByRole } = render(<Typography variant="h1">Heading</Typography>);
    expect(getByRole('heading', { level: 1 })).toBeDefined();
  });
});
