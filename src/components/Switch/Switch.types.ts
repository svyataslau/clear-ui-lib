import type { ReactNode, HTMLAttributes } from 'react';

export interface SwitchProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  children?: ReactNode;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  className?: string;
  'aria-label'?: string;
  'aria-labelledby'?: string;
}

