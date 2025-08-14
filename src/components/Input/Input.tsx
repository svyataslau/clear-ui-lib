import { forwardRef } from 'react';
import type { InputProps } from '../../types';
import { clsx } from 'clsx';

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

    const inputClasses = clsx(
      'input-base',
      {
        'input-size-sm': size === 'sm',
        'input-size-md': size === 'md',
        'input-size-lg': size === 'lg',
        'input-size-xl': size === 'xl',
        'input-rounded': rounded,
        'input-default': !rounded,
        'input-shadow-error': error,
        'input-shadow-default': !error,
        'input-disabled': disabled,
        'input-neumorphic': neumorphic,
      },
      className
    );

    return (
      <input
        ref={ref}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        disabled={disabled}
        className={inputClasses}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';
