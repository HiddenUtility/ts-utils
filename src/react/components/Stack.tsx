import React, { ReactNode } from 'react';

/**
 * Stack direction.
 */
export type StackDirection = 'row' | 'column';

/**
 * Props for the Stack component.
 */
export interface StackProps {
  /**
   * The direction of the stack.
   */
  direction?: StackDirection;
  /**
   * The spacing between items.
   */
  spacing?: number;
  /**
   * The children to be arranged in the stack.
   */
  children?: ReactNode;
  /**
   * Additional props to pass to the container div.
   */
  [key: string]: any;
}

/**
 * A layout component for arranging children in a row or column with spacing.
 * 
 * @param props The props for the Stack component.
 * @returns A div element acting as a stack container.
 */
export const Stack: React.FC<StackProps> = ({
  direction = 'column',
  spacing = 0,
  children,
  ...rest
}) => {
  const style: React.CSSProperties = {
    display: 'flex',
    flexDirection: direction,
    gap: `${spacing}px`,
    ...rest,
  };

  return <div style={style}>{children}</div>;
};
