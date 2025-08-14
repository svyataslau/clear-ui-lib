import type React from 'react';
import type { TypographyProps } from '../../types';
import { clsx } from 'clsx';

const variantClasses = {
  h1: 'text-4xl font-bold',
  h2: 'text-3xl font-bold',
  h3: 'text-2xl font-semibold',
  h4: 'text-xl font-semibold',
  h5: 'text-lg font-medium',
  h6: 'text-base font-medium',
  subtitle: 'text-lg text-gray-600',
  body: 'text-base',
  caption: 'text-sm text-gray-500',
};

const colorClasses = {
  primary: 'text-gray-900',
  secondary: 'text-gray-600',
  accent: 'text-accent-600',
  gray: 'text-gray-500',
};

const weightClasses = {
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
};

const variantElements = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle: 'p',
  body: 'p',
  caption: 'span',
} as const;

export function Typography({
  children,
  variant = 'body',
  color = 'primary',
  weight,
  className,
  ...props
}: TypographyProps) {
  const Element = variantElements[variant] as keyof React.JSX.IntrinsicElements;

  return (
    <Element
      className={clsx(
        variantClasses[variant],
        colorClasses[color],
        weight && weightClasses[weight],
        className
      )}
      {...(props as any)}
    >
      {children}
    </Element>
  );
}
