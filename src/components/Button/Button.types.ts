import type { ReactNode, ButtonHTMLAttributes } from 'react';

export type Size = 'sm' | 'md' | 'lg' | 'xl';

export type Variant = 'primary' | 'ghost' | 'concave' | 'gradient';

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> {
  children?: ReactNode;
  variant?: Variant;
  size?: Size;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  'aria-label'?: string;
  'aria-describedby'?: string;
}

