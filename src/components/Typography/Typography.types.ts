import type { ReactNode, HTMLAttributes } from 'react';

export type Color = 'primary' | 'secondary' | 'accent' | 'gray';

export interface TypographyProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
  variant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'subtitle'
    | 'body'
    | 'caption';
  color?: Color;
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  className?: string;
}

