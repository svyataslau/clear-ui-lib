import type { ButtonProps } from '../../types';
import { clsx } from 'clsx';

const sizeClasses = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
  xl: 'px-8 py-4 text-xl',
};

const variantClasses = {
  primary: 'bg-neumorphism-background text-gray-700 shadow-neumorphism-card hover:bg-gradient-to-r hover:from-purple-400 hover:to-purple-600 hover:text-white transition-all duration-200',
  ghost: 'bg-transparent text-gray-600 hover:bg-gradient-to-r hover:from-purple-400 hover:to-purple-600 hover:text-white transition-all duration-200',
  concave: 'bg-neumorphism-classic text-gray-700 shadow-neumorphism-concave hover:bg-gradient-to-r hover:from-purple-400 hover:to-purple-600 hover:text-white hover:shadow-[inset_-6px_-6px_4px_#d8b4fe,inset_6px_6px_4px_#ffffff] transition-all duration-200',
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

  if (isGradient) {
    return (
      <button
        type={type}
        disabled={disabled}
        onClick={onClick}
        className={clsx(
          variantClasses[variant],
          disabled && 'opacity-50 cursor-not-allowed',
          className
        )}
        {...props}
      >
        <span>{children}</span>
      </button>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={clsx(
        'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed',
        sizeClasses[size],
        disabled ? 'opacity-50 cursor-not-allowed' : variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
