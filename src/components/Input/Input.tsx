import { forwardRef } from 'react';
import { clsx } from 'clsx';
import type { InputProps } from './Input.types';

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
        // React Hook Form compatibility: try to call with the event
        // The onChange prop can accept either a value or an event
        const firstParam = e as unknown;
        (onChange as (param: unknown) => void)(firstParam);
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
        aria-invalid={error}
        aria-disabled={disabled}
        className={inputClasses}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';
