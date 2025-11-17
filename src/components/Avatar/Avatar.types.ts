import type { ReactNode, HTMLAttributes } from 'react';

export type Size = 'sm' | 'md' | 'lg' | 'xl';

export interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  src?: string;
  alt?: string;
  size?: Size;
  fallback?: string;
  className?: string;
}

