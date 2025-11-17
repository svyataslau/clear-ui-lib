import type { ReactNode, HTMLAttributes } from 'react';

export interface NavbarProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
  logo?: ReactNode;
  links?: Array<{
    label: string;
    href: string;
    active?: boolean;
  }>;
  actions?: ReactNode;
  className?: string;
}

