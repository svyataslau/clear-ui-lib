import { forwardRef } from 'react';
import type { InputProps } from '../../types';
import styled from 'styled-components';

const StyledInput = styled.input<{
  $size: string;
  $rounded: boolean;
  $neumorphic: boolean;
  $error: boolean;
}>`
  width: 100%;
  background: rgb(236 240 243);
  color: #374151;
  transition: all 0.2s;
  outline: none;
  box-shadow: ${props => props.$error 
    ? 'inset 6px 6px 4px #ffebee, inset -6px -6px 4px #ffffff'
    : 'inset 8px 8px 16px #d1d9e6, inset -8px -8px 16px #ffffff'};
  border: none;
  border-radius: ${props => props.$rounded ? '9999px' : '0.75rem'};
  
  ${props => {
    switch (props.$size) {
      case 'sm': return 'padding: 0.375rem 0.75rem; font-size: 0.875rem;';
      case 'md': return 'padding: 0.5rem 1rem; font-size: 1rem;';
      case 'lg': return 'padding: 0.75rem 1.5rem; font-size: 1.125rem;';
      case 'xl': return 'padding: 1rem 2rem; font-size: 1.25rem;';
      default: return 'padding: 0.5rem 1rem; font-size: 1rem;';
    }
  }}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &::placeholder {
    color: #6b7280;
  }

  ${props => props.$neumorphic && `
    max-width: 200px;
    min-height: 40px;
    padding: 10px;
    box-shadow: 6px 6px 4px #d1d9e6, -6px -6px 4px #ffffff;
    border-radius: 10px;

    &:focus {
      box-shadow: inset 6px 6px 4px #d1d9e6, inset -6px -6px 4px #ffffff;
    }
  `}
`;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({
    type = 'text',
    placeholder,
    value,
    onChange,
    disabled = false,
    error = false,
    size = 'md',
    rounded = false,
    neumorphic = false,
    className,
    ...props
  }, ref) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (onChange) {
        // Pass event directly - React Hook Form will handle it
        (onChange as any)(e);
      }
    };

    return (
      <StyledInput
        ref={ref}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        disabled={disabled}
        $size={size}
        $rounded={rounded}
        $neumorphic={neumorphic}
        $error={error}
        className={className}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';
