import React from 'react'
import { CardProps } from '../../types'
import { cn } from '../../utils/classNames'

const variantClasses = {
  default: 'bg-neumorphism-background shadow-neumorphism-card',
  elevated: 'bg-neumorphism-background shadow-neumorphism',
  outlined: 'bg-neumorphism-background shadow-neumorphism-inset',
}

const paddingClasses = {
  sm: 'p-3',
  md: 'p-4',
  lg: 'p-6',
  xl: 'p-8',
  circle: 'p-4',
  'circle-lg': 'p-4',
  'circle-xl': 'p-4',
}

export function Card({
  children,
  variant = 'default',
  padding = 'md',
  className,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl transition-all duration-200',
        variantClasses[variant],
        paddingClasses[padding],
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
