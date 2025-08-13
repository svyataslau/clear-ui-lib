import React from 'react'
import { InputProps } from '../../types'
import { cn } from '../../utils/classNames'

const sizeClasses = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
  xl: 'px-8 py-4 text-xl',
  circle: 'px-4 py-2 text-base',
  'circle-lg': 'px-4 py-2 text-base',
  'circle-xl': 'px-4 py-2 text-base',
}

export function Input({
  type = 'text',
  placeholder,
  value,
  onChange,
  disabled = false,
  error = false,
  size = 'md',
  className,
  ...props
}: InputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value)
  }

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      disabled={disabled}
      className={cn(
        'w-full rounded-xl bg-neumorphism-background text-gray-700 placeholder-gray-500 transition-all duration-200 focus:outline-none shadow-neumorphism-input disabled:opacity-50 disabled:cursor-not-allowed',
        sizeClasses[size],
        error && 'shadow-neumorphism-pressed',
        className
      )}
      {...props}
    />
  )
}
