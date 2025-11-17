import { clsx } from 'clsx';
import type { ButtonProps } from './Button.types';

const sizeClasses = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
  xl: 'px-8 py-4 text-xl',
};

const variantClasses = {
  primary:
    'bg-neumorphism-background text-gray-700 shadow-neumorphism-card hover-accent-gradient hover:text-white',
  ghost:
    'bg-transparent text-gray-600 hover-accent-gradient hover:text-white',
  concave:
    'bg-neumorphism-classic text-gray-700 shadow-neumorphism-concave hover-accent-gradient hover:text-white hover:accent-shadow-inset',
  gradient: 'cssbuttons-io',
};

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
  const isGradient = variant === 'gradient';

  const commonProps = {
    type,
    disabled,
    onClick,
    'aria-disabled': disabled,
    ...props,
  };

  if (isGradient) {
    return (
      <button
        {...commonProps}
        className={clsx(
          variantClasses[variant],
          disabled && 'opacity-50 cursor-not-allowed',
          'focus:outline-none focus:ring-2 focus:ring-offset-2',
          className
        )}
        style={{
          '--tw-ring-color': 'var(--accent-color)',
        } as React.CSSProperties}
      >
        <span>{children}</span>
      </button>
    );
  }

  return (
    <button
      {...commonProps}
      className={clsx(
        'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200',
        'focus:outline-none focus:ring-2 focus:ring-offset-2',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        sizeClasses[size],
        disabled ? 'opacity-50 cursor-not-allowed' : variantClasses[variant],
        className
      )}
      style={{
        '--tw-ring-color': 'var(--accent-color)',
      } as React.CSSProperties}
    >
      {children}
    </button>
  );
}
