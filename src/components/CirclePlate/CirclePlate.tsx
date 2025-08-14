import type { CirclePlateProps } from '../../types';
import { cn } from '../../utils/classNames';

const sizeClasses = {
  sm: 'w-16 h-16',
  md: 'w-20 h-20',
  lg: 'w-24 h-24',
  xl: 'w-32 h-32',
};

const variantClasses = {
  primary:
    'bg-neumorphism-background shadow-neumorphism-card transition-all duration-200',
  concave:
    'bg-neumorphism-classic shadow-neumorphism-concave transition-all duration-200',
};

export function CirclePlate({
  children,
  variant = 'primary',
  size = 'md',
  className,
  ...props
}: CirclePlateProps) {
  return (
    <div
      className={cn(
        'inline-flex items-center justify-center font-medium rounded-full transition-all duration-200',
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
