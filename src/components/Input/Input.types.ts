import type { ReactNode, InputHTMLAttributes } from 'react';

export type Size = 'sm' | 'md' | 'lg' | 'xl';

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'size'> {
  children?: ReactNode;
  onChange?: ((value: string) => void) | ((event: React.ChangeEvent<HTMLInputElement>) => void);
  error?: boolean;
  size?: Size;
  rounded?: boolean;
  neumorphic?: boolean;
  className?: string;
}

