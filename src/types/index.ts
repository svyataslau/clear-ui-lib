import { ReactNode } from 'react'

export interface BaseComponentProps {
  className?: string
  children?: ReactNode
}

export type Size = 'sm' | 'md' | 'lg' | 'xl' | 'circle' | 'circle-lg' | 'circle-xl'

export type Variant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'convex' | 'concave'

export type Color = 'primary' | 'secondary' | 'accent' | 'gray'

export interface ButtonProps extends BaseComponentProps {
  variant?: Variant
  size?: Size
  disabled?: boolean
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
}

export interface InputProps extends BaseComponentProps {
  type?: 'text' | 'password' | 'email' | 'search'
  placeholder?: string
  value?: string
  onChange?: (value: string) => void
  disabled?: boolean
  error?: boolean
  size?: Size
}

export interface TextareaProps extends BaseComponentProps {
  placeholder?: string
  value?: string
  onChange?: (value: string) => void
  disabled?: boolean
  error?: boolean
  rows?: number
  size?: Size
}

export interface CardProps extends BaseComponentProps {
  variant?: 'default' | 'elevated' | 'outlined'
  padding?: Size
}

export interface AvatarProps extends BaseComponentProps {
  src?: string
  alt?: string
  size?: Size
  fallback?: string
}

export interface TypographyProps extends BaseComponentProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle' | 'body' | 'caption'
  color?: Color
  weight?: 'normal' | 'medium' | 'semibold' | 'bold'
}

export interface ModalProps extends BaseComponentProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

export interface NavbarProps extends BaseComponentProps {
  logo?: ReactNode
  links?: Array<{
    label: string
    href: string
    active?: boolean
  }>
  actions?: ReactNode
}
