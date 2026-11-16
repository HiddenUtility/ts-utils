import React, { ReactNode } from 'react';

/**
 * Props for the Box component.
 * Extends standard HTML div attributes and adds common style props.
 */
export interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The children to be rendered within the Box.
   */
  children?: ReactNode;
  /**
   * A custom style object.
   */
  style?: React.CSSProperties;
}

/**
 * A highly customizable layout component that acts as a generic container.
 * It is similar to components found in libraries like Chakra UI or MUI.
 * 
 * @param props The props for the Box component.
 * @returns A div element with the provided props.
 */
export const Box: React.FC<BoxProps> = ({ children, style, ...rest }) => {
  return (
    <div style={style} {...rest}>
      {children}
    </div>
  );
};
