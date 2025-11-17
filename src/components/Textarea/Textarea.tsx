import { forwardRef } from 'react';
import { clsx } from 'clsx';
import type { TextareaProps } from './Textarea.types';

const sizeClasses = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
  xl: 'px-8 py-4 text-xl',
  circle: 'px-4 py-2 text-base',
  'circle-lg': 'px-4 py-2 text-base',
  'circle-xl': 'px-4 py-2 text-base',
};

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({
    placeholder,
    value,
    onChange,
    disabled = false,
    error = false,
    rows = 4,
    size = 'md',
    className,
    ...props
  }, ref) => {
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      if (onChange) {
        // React Hook Form compatibility: try to call with the event
        // The onChange prop can accept either a value or an event
        const firstParam = e as unknown;
        (onChange as (param: unknown) => void)(firstParam);
      }
    };

    return (
      <textarea
        ref={ref}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        disabled={disabled}
        rows={rows}
        aria-invalid={error}
        aria-disabled={disabled}
        className={clsx(
          'w-full rounded-xl bg-neumorphism-background text-gray-700 placeholder-gray-500 transition-all duration-200 focus:outline-none shadow-neumorphism-input disabled:opacity-50 disabled:cursor-not-allowed',
          sizeClasses[size],
          error && 'textarea-shadow-error',
          className
        )}
        {...props}
      />
    );
  }
);

Textarea.displayName = 'Textarea';
