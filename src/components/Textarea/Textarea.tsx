import type React from 'react';
import type { TextareaProps } from '../../types';
import { cn } from '../../utils/classNames';

const sizeClasses = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
  xl: 'px-8 py-4 text-xl',
  circle: 'px-4 py-2 text-base',
  'circle-lg': 'px-4 py-2 text-base',
  'circle-xl': 'px-4 py-2 text-base',
};

export function Textarea({
  placeholder,
  value,
  onChange,
  disabled = false,
  error = false,
  rows = 4,
  size = 'md',
  className,
  ...props
}: TextareaProps) {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <textarea
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      disabled={disabled}
      rows={rows}
      className={cn(
        'w-full rounded-xl bg-neumorphism-background text-gray-700 placeholder-gray-500 transition-all duration-200 focus:outline-none shadow-neumorphism-input disabled:opacity-50 disabled:cursor-not-allowed',
        sizeClasses[size],
        error && 'shadow-[inset_6px_6px_4px_#ffebee,inset_-6px_-6px_4px_#ffffff]',
        className
      )}
      {...props}
    />
  );
}
