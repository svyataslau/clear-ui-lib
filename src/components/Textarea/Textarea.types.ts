import type { ReactNode, TextareaHTMLAttributes } from 'react';

export type Size = 'sm' | 'md' | 'lg' | 'xl';

export interface TextareaProps
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange' | 'size'> {
  children?: ReactNode;
  onChange?: ((value: string) => void) | ((event: React.ChangeEvent<HTMLTextAreaElement>) => void);
  error?: boolean;
  size?: Size;
  className?: string;
}

