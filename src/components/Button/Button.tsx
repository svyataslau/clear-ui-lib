import React from 'react'
import { ButtonProps } from '../../types'
import { cn } from '../../utils/classNames'

const sizeClasses = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
  xl: 'px-8 py-4 text-xl',
  circle: 'w-20 h-20 text-2xl',
  'circle-lg': 'w-24 h-24 text-3xl',
  'circle-xl': 'w-32 h-32 text-4xl',
}

const variantClasses = {
  primary: 'bg-neumorphism-background text-gray-700 shadow-neumorphism hover:shadow-neumorphism-pressed active:shadow-neumorphism-inset transition-all duration-200',
  secondary: 'bg-neumorphism-background text-gray-600 shadow-neumorphism hover:shadow-neumorphism-pressed active:shadow-neumorphism-inset transition-all duration-200',
  outline: 'bg-neumorphism-background text-gray-600 shadow-neumorphism hover:shadow-neumorphism-pressed active:shadow-neumorphism-inset transition-all duration-200',
  ghost: 'bg-transparent text-gray-600 hover:bg-neumorphism-background hover:shadow-neumorphism transition-all duration-200',
  convex: 'bg-neumorphism-classic text-gray-700 shadow-neumorphism-convex hover:shadow-neumorphism-pressed active:shadow-neumorphism-inset transition-all duration-200',
  concave: 'bg-neumorphism-classic text-gray-700 shadow-neumorphism-concave hover:shadow-neumorphism-pressed active:shadow-neumorphism-inset transition-all duration-200',
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  onClick,
  type = 'button',
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={cn(
        'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed',
        sizeClasses[size],
        variantClasses[variant],
        (size === 'circle' || size === 'circle-lg' || size === 'circle-xl') && 'rounded-full aspect-square',
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
