import React, { InputHTMLAttributes } from 'react';

/**
 * Props for the Input component.
 */
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * A placeholder for the input.
   */
  placeholder?: string;
  /**
   * A custom style object.
   */
  style?: React.CSSProperties;
}

/**
 * A reusable Input component.
 * 
 * @param props The props for the Input component.
 * @returns An input element.
 */
export const Input: React.FC<InputProps> = ({
  placeholder = '',
  style,
  ...rest
}) => {
  return (
    <input
      placeholder={placeholder}
      style={{
        padding: '8px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        ...style,
      }}
      {...rest}
    />
  );
};
