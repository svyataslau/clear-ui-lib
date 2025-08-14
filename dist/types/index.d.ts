import type { ReactNode, ButtonHTMLAttributes, InputHTMLAttributes, TextareaHTMLAttributes, HTMLAttributes } from 'react';
export interface BaseComponentProps {
    className?: string;
    children?: ReactNode;
}
export type Size = 'sm' | 'md' | 'lg' | 'xl';
export type Variant = 'primary' | 'ghost' | 'concave' | 'gradient';
export type Color = 'primary' | 'secondary' | 'accent' | 'gray';
export interface ThemeConfig {
    accentColor: string;
    accentColorLight: string;
    accentColorDark: string;
}
export interface ButtonProps extends BaseComponentProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> {
    variant?: Variant;
    size?: Size;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
export interface InputProps extends BaseComponentProps, Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'size'> {
    onChange?: (value: string) => void;
    error?: boolean;
    size?: Size;
    rounded?: boolean;
    neumorphic?: boolean;
}
export interface TextareaProps extends BaseComponentProps, Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange' | 'size'> {
    onChange?: (value: string) => void;
    error?: boolean;
    size?: Size;
}
export interface CardProps extends BaseComponentProps, HTMLAttributes<HTMLDivElement> {
    variant?: 'default' | 'outlined';
    padding?: Size;
    rounded?: boolean;
}
export interface AvatarProps extends BaseComponentProps, HTMLAttributes<HTMLDivElement> {
    src?: string;
    alt?: string;
    size?: Size;
    fallback?: string;
}
export interface TypographyProps extends BaseComponentProps, HTMLAttributes<HTMLElement> {
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle' | 'body' | 'caption';
    color?: Color;
    weight?: 'normal' | 'medium' | 'semibold' | 'bold';
}
export interface ModalProps extends BaseComponentProps, HTMLAttributes<HTMLDivElement> {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    size?: 'sm' | 'md' | 'lg' | 'xl';
}
export interface NavbarProps extends BaseComponentProps, HTMLAttributes<HTMLElement> {
    logo?: ReactNode;
    links?: Array<{
        label: string;
        href: string;
        active?: boolean;
    }>;
    actions?: ReactNode;
}
export interface SwitchProps extends BaseComponentProps, Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    disabled?: boolean;
}
export interface CirclePlateProps extends BaseComponentProps, HTMLAttributes<HTMLDivElement> {
    variant?: 'primary' | 'concave';
    size?: Size;
}
export interface FormFieldProps {
    label?: string;
    error?: string;
    required?: boolean;
    className?: string;
    children: ReactNode;
    htmlFor?: string;
}
//# sourceMappingURL=index.d.ts.map