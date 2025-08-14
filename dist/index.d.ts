import * as react from 'react';
import react__default, { ReactNode, ButtonHTMLAttributes, InputHTMLAttributes, TextareaHTMLAttributes, HTMLAttributes } from 'react';
import * as react_jsx_runtime from 'react/jsx-runtime';

interface BaseComponentProps {
    className?: string;
    children?: ReactNode;
}
type Size = 'sm' | 'md' | 'lg' | 'xl';
type Variant = 'primary' | 'ghost' | 'concave' | 'gradient';
type Color = 'primary' | 'secondary' | 'accent' | 'gray';
interface ThemeConfig$1 {
    accentColor: string;
    accentColorLight: string;
    accentColorDark: string;
}
interface ButtonProps extends BaseComponentProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> {
    variant?: Variant;
    size?: Size;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
interface InputProps extends BaseComponentProps, Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'size'> {
    onChange?: (value: string) => void | ((event: React.ChangeEvent<HTMLInputElement>) => void);
    error?: boolean;
    size?: Size;
    rounded?: boolean;
    neumorphic?: boolean;
}
interface TextareaProps extends BaseComponentProps, Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange' | 'size'> {
    onChange?: (value: string) => void | ((event: React.ChangeEvent<HTMLTextAreaElement>) => void);
    error?: boolean;
    size?: Size;
}
interface CardProps extends BaseComponentProps, HTMLAttributes<HTMLDivElement> {
    variant?: 'default' | 'outlined';
    padding?: Size;
    rounded?: boolean;
}
interface AvatarProps extends BaseComponentProps, HTMLAttributes<HTMLDivElement> {
    src?: string;
    alt?: string;
    size?: Size;
    fallback?: string;
}
interface TypographyProps extends BaseComponentProps, HTMLAttributes<HTMLElement> {
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle' | 'body' | 'caption';
    color?: Color;
    weight?: 'normal' | 'medium' | 'semibold' | 'bold';
}
interface ModalProps extends BaseComponentProps, HTMLAttributes<HTMLDivElement> {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    size?: 'sm' | 'md' | 'lg' | 'xl';
}
interface NavbarProps extends BaseComponentProps, HTMLAttributes<HTMLElement> {
    logo?: ReactNode;
    links?: Array<{
        label: string;
        href: string;
        active?: boolean;
    }>;
    actions?: ReactNode;
}
interface SwitchProps extends BaseComponentProps, Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    disabled?: boolean;
}
interface CirclePlateProps extends BaseComponentProps, HTMLAttributes<HTMLDivElement> {
    variant?: 'primary' | 'concave';
    size?: Size;
}
interface FormFieldProps$1 {
    label?: string;
    error?: string;
    required?: boolean;
    className?: string;
    children: ReactNode;
    htmlFor?: string;
}

declare function Avatar({ src, alt, size, fallback, className, ...props }: AvatarProps): react_jsx_runtime.JSX.Element;

declare function Button({ children, variant, size, disabled, onClick, type, className, ...props }: ButtonProps): react_jsx_runtime.JSX.Element;

declare function Card({ children, variant, padding, rounded, className, ...props }: CardProps): react_jsx_runtime.JSX.Element;

declare const Input: react.ForwardRefExoticComponent<InputProps & react.RefAttributes<HTMLInputElement>>;

declare function Modal({ children, isOpen, onClose, title, size, className, ...props }: ModalProps): react_jsx_runtime.JSX.Element | null;

declare function Navbar({ logo, links, actions, className, ...props }: NavbarProps): react_jsx_runtime.JSX.Element;

declare const Switch: react.ForwardRefExoticComponent<SwitchProps & react.RefAttributes<HTMLInputElement>>;

declare function CirclePlate({ children, variant, size, className, ...props }: CirclePlateProps): react_jsx_runtime.JSX.Element;

declare const Textarea: react.ForwardRefExoticComponent<TextareaProps & react.RefAttributes<HTMLTextAreaElement>>;

declare function Typography({ children, variant, color, weight, className, ...props }: TypographyProps): react_jsx_runtime.JSX.Element;

interface FormFieldProps {
    label?: string;
    error?: string;
    required?: boolean;
    className?: string;
    children: ReactNode;
    htmlFor?: string;
}
declare const FormField: react.ForwardRefExoticComponent<FormFieldProps & react.RefAttributes<HTMLDivElement>>;

interface NeumorphicProviderProps {
    children: react__default.ReactNode;
}
declare function NeumorphicProvider({ children }: NeumorphicProviderProps): react_jsx_runtime.JSX.Element;

interface ComponentDoc$1 {
    name: string;
    description: string;
    examples: react__default.ReactNode;
    props?: Array<{
        name: string;
        type: string;
        required: boolean;
        defaultValue?: string;
        description: string;
    }>;
}
declare const componentDocs: ComponentDoc$1[];
declare function registerComponent(componentDoc: ComponentDoc$1): void;
declare function getAllComponents(): ComponentDoc$1[];
declare function getComponent(name: string): ComponentDoc$1 | undefined;

interface ComponentDoc {
    name: string;
    description: string;
    examples: react__default.ReactNode;
    props?: Array<{
        name: string;
        type: string;
        required: boolean;
        defaultValue?: string;
        description: string;
    }>;
}
interface DocGeneratorProps {
    components: ComponentDoc[];
    title?: string;
    description?: string;
}
declare function DocGenerator({ components, title, description, }: DocGeneratorProps): react_jsx_runtime.JSX.Element;

declare function cn(...classes: (string | undefined | null | false)[]): string;

interface ThemeConfig {
    accentColor: string;
    accentColorLight: string;
    accentColorDark: string;
}
declare const defaultTheme: ThemeConfig;
interface ThemeContextType {
    theme: ThemeConfig;
    setTheme: (theme: Partial<ThemeConfig>) => void;
}
interface ThemeProviderProps {
    children: ReactNode;
    initialTheme?: Partial<ThemeConfig>;
}
declare function ThemeProvider({ children, initialTheme }: ThemeProviderProps): react_jsx_runtime.JSX.Element;
declare function useTheme(): ThemeContextType;

export { Avatar, AvatarProps, BaseComponentProps, Button, ButtonProps, Card, CardProps, CirclePlate, CirclePlateProps, Color, ComponentDoc$1 as ComponentDoc, DocGenerator, FormField, FormFieldProps$1 as FormFieldProps, Input, InputProps, Modal, ModalProps, Navbar, NavbarProps, NeumorphicProvider, Size, Switch, SwitchProps, Textarea, TextareaProps, ThemeConfig$1 as ThemeConfig, ThemeProvider, Typography, TypographyProps, Variant, cn, componentDocs, defaultTheme, getAllComponents, getComponent, registerComponent, useTheme };
