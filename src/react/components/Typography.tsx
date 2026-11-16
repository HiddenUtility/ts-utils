import React, { ReactNode } from 'react';

/**
 * Typography variants.
 */
export type TypographyVariant = 'h1' | 'h2' | 'h3' | 'p' | 'span';

/**
 * Props for the Typography component.
 */
export interface TypographyProps {
  /**
   * The variant of the typography.
   */
  variant?: TypographyVariant;
  /**
   * The children to be rendered.
   */
  children?: ReactNode;
  /**
   * Additional HTML attributes.
   */
  [key: string]: any;
}

/**
 * A component for consistent text styling.
 * 
 * @param props The props for the Typography component.
 * @returns A text element.
 */
export const Typography: React.FC<TypographyProps> = ({
  variant = 'p',
  children,
  ...rest
}) => {
  const Tag = variant as any;
  return <Tag {...rest}>{children}</Tag>;
};
