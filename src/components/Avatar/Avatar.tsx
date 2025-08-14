import React from 'react';
import type { AvatarProps } from '../../types';
import { cn } from '../../utils/classNames';

const sizeClasses = {
  sm: 'w-8 h-8 text-sm',
  md: 'w-10 h-10 text-base',
  lg: 'w-12 h-12 text-lg',
  xl: 'w-16 h-16 text-xl',
  circle: 'w-16 h-16 text-xl',
  'circle-lg': 'w-20 h-20 text-2xl',
  'circle-xl': 'w-24 h-24 text-3xl',
};

export function Avatar({
  src,
  alt,
  size = 'md',
  fallback,
  className,
  ...props
}: AvatarProps) {
  const [imageError, setImageError] = React.useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((word) => word.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const fallbackText = fallback ? getInitials(fallback) : '?';

  return (
    <div
      className={cn(
        'inline-flex items-center justify-center rounded-full bg-neumorphism-background text-gray-600 font-medium overflow-hidden shadow-neumorphism',
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {src && !imageError ? (
        <img
          src={src}
          alt={alt}
          onError={handleImageError}
          className="w-full h-full object-cover"
        />
      ) : (
        <span className="flex items-center justify-center w-full h-full">
          {fallbackText}
        </span>
      )}
    </div>
  );
}
