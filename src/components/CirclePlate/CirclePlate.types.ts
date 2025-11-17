import type { ReactNode, HTMLAttributes } from 'react';

export type Size = 'sm' | 'md' | 'lg' | 'xl';

export interface CirclePlateProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  variant?: 'primary' | 'concave';
  size?: Size;
  className?: string;
}

