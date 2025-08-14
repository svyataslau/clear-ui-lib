import type { CardProps } from '../../types';
import { clsx } from 'clsx';

const variantClasses = {
  default: 'bg-neumorphism-background shadow-neumorphism-card',
  outlined: 'bg-neumorphism-background shadow-neumorphism-inset',
};

const paddingClasses = {
  sm: 'p-3',
  md: 'p-4',
  lg: 'p-6',
  xl: 'p-8',
  circle: 'p-4',
  'circle-lg': 'p-4',
  'circle-xl': 'p-4',
};

export function Card({
  children,
  variant = 'default',
  padding = 'md',
  rounded = false,
  className,
  ...props
}: CardProps) {
  return (
    <div
      className={clsx(
        'transition-all duration-200',
        rounded ? 'rounded-full' : 'rounded-2xl',
        variantClasses[variant],
        paddingClasses[padding],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
