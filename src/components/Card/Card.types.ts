import type { ReactNode, HTMLAttributes } from 'react';

export type Size = 'sm' | 'md' | 'lg' | 'xl';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  variant?: 'default' | 'outlined';
  padding?: Size;
  rounded?: boolean;
  className?: string;
}

