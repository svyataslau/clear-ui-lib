import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import React, { forwardRef, Children, isValidElement, cloneElement, useEffect, useState, createContext, useContext } from 'react';

function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}

const sizeClasses$4 = {
    sm: 'w-8 h-8 text-sm',
    md: 'w-10 h-10 text-base',
    lg: 'w-12 h-12 text-lg',
    xl: 'w-16 h-16 text-xl',
    circle: 'w-16 h-16 text-xl',
    'circle-lg': 'w-20 h-20 text-2xl',
    'circle-xl': 'w-24 h-24 text-3xl',
};
function Avatar({ src, alt, size = 'md', fallback, className, ...props }) {
    const [imageError, setImageError] = React.useState(false);
    const handleImageError = () => {
        setImageError(true);
    };
    const getInitials = (name) => {
        return name
            .split(' ')
            .map((word) => word.charAt(0))
            .join('')
            .toUpperCase()
            .slice(0, 2);
    };
    const fallbackText = fallback ? getInitials(fallback) : '?';
    return (jsx("div", { className: clsx('inline-flex items-center justify-center rounded-full bg-neumorphism-background text-gray-600 font-medium overflow-hidden shadow-neumorphism', sizeClasses$4[size], className), ...props, children: src && !imageError ? (jsx("img", { src: src, alt: alt, onError: handleImageError, className: "w-full h-full object-cover" })) : (jsx("span", { className: "flex items-center justify-center w-full h-full", children: fallbackText })) }));
}

const sizeClasses$3 = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
    xl: 'px-8 py-4 text-xl',
};
const variantClasses$3 = {
    primary: 'bg-neumorphism-background text-gray-700 shadow-neumorphism-card hover-accent-gradient hover:text-white',
    ghost: 'bg-transparent text-gray-600 hover-accent-gradient hover:text-white',
    concave: 'bg-neumorphism-classic text-gray-700 shadow-neumorphism-concave hover-accent-gradient hover:text-white hover:accent-shadow-inset',
    gradient: 'cssbuttons-io',
};
function Button({ children, variant = 'primary', size = 'md', disabled = false, onClick, type = 'button', className, ...props }) {
    const isGradient = variant === 'gradient';
    const commonProps = {
        type,
        disabled,
        onClick,
        'aria-disabled': disabled,
        ...props,
    };
    if (isGradient) {
        return (jsx("button", { ...commonProps, className: clsx(variantClasses$3[variant], disabled && 'opacity-50 cursor-not-allowed', 'focus:outline-none focus:ring-2 focus:ring-offset-2', className), style: {
                '--tw-ring-color': 'var(--accent-color)',
            }, children: jsx("span", { children: children }) }));
    }
    return (jsx("button", { ...commonProps, className: clsx('inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200', 'focus:outline-none focus:ring-2 focus:ring-offset-2', 'disabled:opacity-50 disabled:cursor-not-allowed', sizeClasses$3[size], disabled ? 'opacity-50 cursor-not-allowed' : variantClasses$3[variant], className), style: {
            '--tw-ring-color': 'var(--accent-color)',
        }, children: children }));
}

const variantClasses$2 = {
    default: 'bg-neumorphism-background shadow-neumorphism-card',
    outlined: 'bg-neumorphism-background shadow-neumorphism-inset',
};
const paddingClasses = {
    sm: 'p-3',
    md: 'p-4',
    lg: 'p-6',
    xl: 'p-8',
    circle: 'p-4',
    'circle-lg': 'p-4',
    'circle-xl': 'p-4',
};
function Card({ children, variant = 'default', padding = 'md', rounded = false, className, ...props }) {
    return (jsx("div", { className: clsx('transition-all duration-200', rounded ? 'rounded-full' : 'rounded-2xl', variantClasses$2[variant], paddingClasses[padding], className), ...props, children: children }));
}

const sizeClasses$2 = {
    sm: 'w-16 h-16',
    md: 'w-20 h-20',
    lg: 'w-24 h-24',
    xl: 'w-32 h-32',
};
const variantClasses$1 = {
    primary: 'bg-neumorphism-background shadow-neumorphism-card transition-all duration-200',
    concave: 'bg-neumorphism-classic shadow-neumorphism-concave transition-all duration-200',
};
function CirclePlate({ children, variant = 'primary', size = 'md', className, ...props }) {
    return (jsx("div", { className: clsx('inline-flex items-center justify-center font-medium rounded-full transition-all duration-200', sizeClasses$2[size], variantClasses$1[variant], className), ...props, children: children }));
}

const FormField = forwardRef(({ label, error, required = false, className, children, htmlFor }, ref) => {
    // Generate id if not provided
    const fieldId = htmlFor || `field-${Math.random().toString(36).substr(2, 9)}`;
    // Clone children and add id to the first input/textarea element
    const enhancedChildren = Children.map(children, (child) => {
        if (isValidElement(child)) {
            // Check if this is an input or textarea
            const childType = child.type;
            const isInputOrTextarea = childType === 'input' ||
                childType === 'textarea' ||
                (typeof childType === 'function' &&
                    ('displayName' in childType &&
                        (childType.displayName === 'Input' || childType.displayName === 'Textarea')));
            if (isInputOrTextarea) {
                return cloneElement(child, {
                    id: fieldId,
                    ...child.props,
                });
            }
        }
        return child;
    });
    return (jsxs("div", { ref: ref, className: clsx('space-y-2', className), children: [label && (jsxs("label", { htmlFor: fieldId, className: "block text-sm font-medium text-gray-700", children: [label, required && jsx("span", { className: "text-red-500 ml-1", children: "*" })] })), enhancedChildren, error && (jsx("p", { className: "text-sm text-red-600", children: error }))] }));
});
FormField.displayName = 'FormField';

const Input = forwardRef(({ type = 'text', placeholder, value, onChange, disabled = false, error = false, size = 'md', rounded = false, neumorphic = false, className, ...props }, ref) => {
    const handleChange = (e) => {
        if (onChange) {
            // React Hook Form compatibility: try to call with the event
            // The onChange prop can accept either a value or an event
            const firstParam = e;
            onChange(firstParam);
        }
    };
    const inputClasses = clsx('input-base', {
        'input-size-sm': size === 'sm',
        'input-size-md': size === 'md',
        'input-size-lg': size === 'lg',
        'input-size-xl': size === 'xl',
        'input-rounded': rounded,
        'input-default': !rounded,
        'input-shadow-error': error,
        'input-shadow-default': !error,
        'input-disabled': disabled,
        'input-neumorphic': neumorphic,
    }, className);
    return (jsx("input", { ref: ref, type: type, placeholder: placeholder, value: value, onChange: handleChange, disabled: disabled, "aria-invalid": error, "aria-disabled": disabled, className: inputClasses, ...props }));
});
Input.displayName = 'Input';

const sizeClasses$1 = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl',
};
function Modal({ children, isOpen, onClose, title, size = 'md', className, ...props }) {
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };
        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);
    if (!isOpen)
        return null;
    return (jsxs("div", { className: "fixed inset-0 z-50 flex items-center justify-center", role: "dialog", "aria-modal": "true", "aria-labelledby": title ? 'modal-title' : undefined, children: [jsx("div", { className: "absolute inset-0 bg-black bg-opacity-50 transition-opacity", onClick: onClose, "aria-hidden": "true" }), jsxs("div", { className: clsx('relative bg-neumorphism-background rounded-2xl w-full mx-4 max-h-[90vh] overflow-y-auto', sizeClasses$1[size], className), ...props, children: [title && (jsxs("div", { className: "flex items-center justify-between p-6 border-b border-gray-200", children: [jsx("h2", { id: "modal-title", className: "text-xl font-semibold text-gray-900", children: title }), jsx("button", { type: "button", onClick: onClose, className: "p-1 text-gray-400 hover:text-gray-600 transition-colors focus:outline-none focus:ring-2 modal-close-btn", style: {
                                    '--tw-ring-color': 'var(--accent-color)',
                                }, "aria-label": "Close modal", children: jsxs("svg", { className: "w-6 h-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", role: "img", "aria-label": "Close icon", children: [jsx("title", { children: "Close" }), jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" })] }) })] })), jsx("div", { className: "p-6", children: children })] })] }));
}

function Navbar({ logo, links = [], actions, className, ...props }) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    return (jsxs("nav", { className: clsx('bg-neumorphism-background shadow-neumorphism-card sticky top-0 z-40', className), ...props, children: [jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: jsxs("div", { className: "flex justify-between items-center h-16", children: [jsx("div", { className: "flex-shrink-0", children: logo }), jsx("div", { className: "hidden md:block", children: jsx("div", { className: "ml-10 flex items-baseline space-x-4", children: links.map((link) => (jsx("a", { href: link.href, className: clsx('px-3 py-2 rounded-md text-sm font-medium transition-all duration-200', link.active
                                        ? 'nav-link-active'
                                        : 'nav-link-inactive'), children: link.label }, link.href))) }) }), jsx("div", { className: "hidden md:block", children: jsx("div", { className: "ml-4 flex items-center space-x-4", children: actions }) }), jsx("div", { className: "md:hidden", children: jsxs("button", { type: "button", onClick: () => setIsMobileMenuOpen(!isMobileMenuOpen), className: "inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent-500", children: [jsx("span", { className: "sr-only", children: "Open main menu" }), isMobileMenuOpen ? (jsxs("svg", { className: "block h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", role: "img", "aria-label": "Close menu icon", children: [jsx("title", { children: "Close menu" }), jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" })] })) : (jsxs("svg", { className: "block h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", role: "img", "aria-label": "Open menu icon", children: [jsx("title", { children: "Open menu" }), jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M4 6h16M4 12h16M4 18h16" })] }))] }) })] }) }), isMobileMenuOpen && (jsx("div", { className: "md:hidden", children: jsxs("div", { className: "px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-neumorphism-background border-t border-gray-200", children: [links.map((link) => (jsx("a", { href: link.href, className: clsx('block px-3 py-2 rounded-md text-base font-medium transition-all duration-200', link.active
                                ? 'nav-link-active'
                                : 'nav-link-inactive'), onClick: () => setIsMobileMenuOpen(false), children: link.label }, link.href))), actions && (jsx("div", { className: "pt-4 pb-3 border-t border-gray-200", children: jsx("div", { className: "flex items-center space-x-4", children: actions }) }))] }) }))] }));
}

function NeumorphicProvider({ children }) {
    return (jsx(Fragment, { children: children }));
}

const Switch = forwardRef(({ checked = false, onChange, disabled = false, className = '', id, 'aria-label': ariaLabel, ...props }, ref) => {
    const handleChange = (e) => {
        onChange?.(e.target.checked);
    };
    const inputId = id || `switch-${Math.random().toString(36).substr(2, 9)}`;
    return (jsxs("div", { className: clsx('switch-container', className), role: "switch", "aria-checked": checked, tabIndex: 0, ...props, children: [jsx("input", { ref: ref, id: inputId, type: "checkbox", className: "toggle-checkbox", checked: checked, onChange: handleChange, disabled: disabled, "aria-label": ariaLabel, "aria-checked": checked }), jsx("label", { htmlFor: inputId, className: "switch", children: jsx("div", { className: clsx('toggle', checked && 'toggle-checked'), children: jsx("div", { className: clsx('led', checked && 'led-checked', disabled && 'led-disabled') }) }) })] }));
});
Switch.displayName = 'Switch';

const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
    xl: 'px-8 py-4 text-xl',
    circle: 'px-4 py-2 text-base',
    'circle-lg': 'px-4 py-2 text-base',
    'circle-xl': 'px-4 py-2 text-base',
};
const Textarea = forwardRef(({ placeholder, value, onChange, disabled = false, error = false, rows = 4, size = 'md', className, ...props }, ref) => {
    const handleChange = (e) => {
        if (onChange) {
            // React Hook Form compatibility: try to call with the event
            // The onChange prop can accept either a value or an event
            const firstParam = e;
            onChange(firstParam);
        }
    };
    return (jsx("textarea", { ref: ref, placeholder: placeholder, value: value, onChange: handleChange, disabled: disabled, rows: rows, "aria-invalid": error, "aria-disabled": disabled, className: clsx('w-full rounded-xl bg-neumorphism-background text-gray-700 placeholder-gray-500 transition-all duration-200 focus:outline-none shadow-neumorphism-input disabled:opacity-50 disabled:cursor-not-allowed', sizeClasses[size], error && 'textarea-shadow-error', className), ...props }));
});
Textarea.displayName = 'Textarea';

const variantClasses = {
    h1: 'text-4xl font-bold',
    h2: 'text-3xl font-bold',
    h3: 'text-2xl font-semibold',
    h4: 'text-xl font-semibold',
    h5: 'text-lg font-medium',
    h6: 'text-base font-medium',
    subtitle: 'text-lg text-gray-600',
    body: 'text-base',
    caption: 'text-sm text-gray-500',
};
const colorClasses = {
    primary: 'text-gray-900',
    secondary: 'text-gray-600',
    accent: 'text-accent-600',
    gray: 'text-gray-500',
};
const weightClasses = {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
};
const variantElements = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    subtitle: 'p',
    body: 'p',
    caption: 'span',
};
function Typography({ children, variant = 'body', color = 'primary', weight, className, ...props }) {
    const Element = variantElements[variant];
    const combinedClassName = clsx(variantClasses[variant], colorClasses[color], weight && weightClasses[weight], className);
    return React.createElement(Element, { className: combinedClassName, ...props }, children);
}

const defaultTheme = {
    accentColor: '#a855f7', // purple-500
    accentColorLight: '#d8b4fe', // purple-300
    accentColorDark: '#7c3aed', // purple-700
};
const ThemeContext = createContext(undefined);
function ThemeProvider({ children, initialTheme = {} }) {
    const [theme, setThemeState] = React.useState({
        ...defaultTheme,
        ...initialTheme,
    });
    const setTheme = React.useCallback((newTheme) => {
        setThemeState((prev) => ({ ...prev, ...newTheme }));
    }, []);
    // Initialize CSS variables on mount and sync theme to CSS variables
    React.useEffect(() => {
        const root = document.documentElement;
        root.style.setProperty('--accent-color', theme.accentColor);
        root.style.setProperty('--accent-color-light', theme.accentColorLight);
        root.style.setProperty('--accent-color-dark', theme.accentColorDark);
        console.log('🎨 Theme CSS variables updated:', {
            '--accent-color': theme.accentColor,
            '--accent-color-light': theme.accentColorLight,
            '--accent-color-dark': theme.accentColorDark,
        });
        // Force re-render by updating a data attribute
        root.setAttribute('data-theme-accent', theme.accentColor);
    }, [theme]);
    return (jsx(ThemeContext.Provider, { value: { theme, setTheme }, children: children }));
}
function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}

// Function to get component examples
function getButtonExample() {
    return React.createElement('div', { className: 'p-8 space-y-8' }, React.createElement('div', null, React.createElement('h2', { className: 'text-2xl font-bold mb-4' }, 'Button Variants'), React.createElement('div', { className: 'flex flex-wrap gap-4' }, React.createElement('button', {
        type: 'button',
        className: 'px-4 py-2 bg-accent-500 text-white rounded-lg hover:bg-accent-600',
    }, 'Primary'), React.createElement('button', {
        type: 'button',
        className: 'px-4 py-2 bg-gray-100 text-gray-900 rounded-lg hover:bg-gray-200',
    }, 'Secondary'), React.createElement('button', {
        type: 'button',
        className: 'px-4 py-2 border border-gray-300 bg-white text-gray-700 rounded-lg hover:bg-gray-50',
    }, 'Outline'), React.createElement('button', {
        type: 'button',
        className: 'px-4 py-2 bg-transparent text-gray-700 rounded-lg hover:bg-gray-100',
    }, 'Ghost'))));
}
// Component documentation registry
const componentDocs = [
    {
        name: 'Button',
        description: 'A versatile button component with multiple variants, sizes, and states for user interactions.',
        examples: getButtonExample(),
        props: [
            {
                name: 'variant',
                type: "'primary' | 'ghost' | 'concave' | 'gradient'",
                required: false,
                defaultValue: "'primary'",
                description: 'The visual style variant of the button',
            },
            {
                name: 'size',
                type: "'sm' | 'md' | 'lg' | 'xl'",
                required: false,
                defaultValue: "'md'",
                description: 'The size of the button',
            },
            {
                name: 'disabled',
                type: 'boolean',
                required: false,
                defaultValue: 'false',
                description: 'Whether the button is disabled',
            },
            {
                name: 'onClick',
                type: '() => void',
                required: false,
                description: 'Callback function when button is clicked',
            },
            {
                name: 'type',
                type: "'button' | 'submit' | 'reset'",
                required: false,
                defaultValue: "'button'",
                description: 'The HTML button type',
            },
            {
                name: 'children',
                type: 'ReactNode',
                required: true,
                description: 'The content to display inside the button',
            },
        ],
    },
    {
        name: 'Input',
        description: 'A flexible input component supporting various types, sizes, and states with built-in error handling.',
        examples: React.createElement('div', { className: 'p-8 space-y-4 max-w-md' }, React.createElement('input', {
            type: 'text',
            placeholder: 'Enter your name',
            className: 'w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500',
        }), React.createElement('input', {
            type: 'email',
            placeholder: 'Enter your email',
            className: 'w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500',
        }), React.createElement('input', {
            type: 'password',
            placeholder: 'Enter your password',
            className: 'w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500',
        })),
        props: [
            {
                name: 'type',
                type: "'text' | 'password' | 'email' | 'search'",
                required: false,
                defaultValue: "'text'",
                description: 'The HTML input type',
            },
            {
                name: 'placeholder',
                type: 'string',
                required: false,
                description: 'Placeholder text for the input',
            },
            {
                name: 'value',
                type: 'string',
                required: false,
                description: 'The current value of the input',
            },
            {
                name: 'onChange',
                type: '(value: string) => void',
                required: false,
                description: 'Callback function when input value changes',
            },
            {
                name: 'disabled',
                type: 'boolean',
                required: false,
                defaultValue: 'false',
                description: 'Whether the input is disabled',
            },
            {
                name: 'error',
                type: 'boolean',
                required: false,
                defaultValue: 'false',
                description: 'Whether to show error styling',
            },
            {
                name: 'size',
                type: "'sm' | 'md' | 'lg' | 'xl'",
                required: false,
                defaultValue: "'md'",
                description: 'The size of the input',
            },
        ],
    },
    {
        name: 'Textarea',
        description: 'A multi-line text input component with configurable rows, sizes, and error states.',
        examples: React.createElement('div', { className: 'p-8 space-y-4 max-w-md' }, React.createElement('textarea', {
            placeholder: 'Write your message here...',
            rows: 4,
            className: 'w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 resize-vertical',
        })),
        props: [
            {
                name: 'placeholder',
                type: 'string',
                required: false,
                description: 'Placeholder text for the textarea',
            },
            {
                name: 'value',
                type: 'string',
                required: false,
                description: 'The current value of the textarea',
            },
            {
                name: 'onChange',
                type: '(value: string) => void',
                required: false,
                description: 'Callback function when textarea value changes',
            },
            {
                name: 'disabled',
                type: 'boolean',
                required: false,
                defaultValue: 'false',
                description: 'Whether the textarea is disabled',
            },
            {
                name: 'error',
                type: 'boolean',
                required: false,
                defaultValue: 'false',
                description: 'Whether to show error styling',
            },
            {
                name: 'rows',
                type: 'number',
                required: false,
                defaultValue: '4',
                description: 'Number of visible text lines',
            },
            {
                name: 'size',
                type: "'sm' | 'md' | 'lg' | 'xl'",
                required: false,
                defaultValue: "'md'",
                description: 'The size of the textarea',
            },
        ],
    },
    {
        name: 'Card',
        description: 'A container component for content with different styling variants and padding options.',
        examples: React.createElement('div', { className: 'p-8 space-y-4' }, React.createElement('div', { className: 'bg-white border border-gray-200 rounded-xl p-4' }, React.createElement('h3', { className: 'text-lg font-semibold mb-2' }, 'Card Title'), React.createElement('p', { className: 'text-gray-600' }, 'This is a card with content.')), React.createElement('div', { className: 'bg-white shadow-soft rounded-xl p-4' }, React.createElement('h3', { className: 'text-lg font-semibold mb-2' }, 'Elevated Card'), React.createElement('p', { className: 'text-gray-600' }, 'This card has a shadow.'))),
        props: [
            {
                name: 'variant',
                type: "'default' | 'elevated' | 'outlined'",
                required: false,
                defaultValue: "'default'",
                description: 'The visual style variant of the card',
            },
            {
                name: 'padding',
                type: "'sm' | 'md' | 'lg' | 'xl'",
                required: false,
                defaultValue: "'md'",
                description: 'The padding size inside the card',
            },
            {
                name: 'children',
                type: 'ReactNode',
                required: true,
                description: 'The content to display inside the card',
            },
        ],
    },
    {
        name: 'Avatar',
        description: 'A circular image component with fallback support for user profiles and avatars.',
        examples: React.createElement('div', { className: 'p-8 space-y-4' }, React.createElement('div', { className: 'flex items-center space-x-4' }, React.createElement('div', {
            className: 'w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center',
        }, React.createElement('span', { className: 'text-gray-600 font-medium' }, 'JD')), React.createElement('div', {
            className: 'w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center',
        }, React.createElement('span', { className: 'text-gray-600 font-medium' }, 'JS')), React.createElement('div', {
            className: 'w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center',
        }, React.createElement('span', { className: 'text-gray-600 font-medium' }, 'MJ')))),
        props: [
            {
                name: 'src',
                type: 'string',
                required: false,
                description: 'URL of the avatar image',
            },
            {
                name: 'alt',
                type: 'string',
                required: false,
                description: 'Alt text for the avatar image',
            },
            {
                name: 'size',
                type: "'sm' | 'md' | 'lg' | 'xl'",
                required: false,
                defaultValue: "'md'",
                description: 'The size of the avatar',
            },
            {
                name: 'fallback',
                type: 'string',
                required: false,
                description: 'Text to display when image fails to load (usually initials)',
            },
        ],
    },
    {
        name: 'Typography',
        description: 'A comprehensive text component with various styles, colors, and weights for consistent typography.',
        examples: React.createElement('div', { className: 'p-8 space-y-4' }, React.createElement('h1', { className: 'text-4xl font-bold text-gray-900' }, 'Heading 1'), React.createElement('h2', { className: 'text-3xl font-bold text-gray-900' }, 'Heading 2'), React.createElement('h3', { className: 'text-2xl font-semibold text-gray-900' }, 'Heading 3'), React.createElement('p', { className: 'text-lg text-gray-600' }, 'Subtitle text'), React.createElement('p', { className: 'text-base text-gray-900' }, 'Body text'), React.createElement('span', { className: 'text-sm text-gray-500' }, 'Caption text')),
        props: [
            {
                name: 'variant',
                type: "'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle' | 'body' | 'caption'",
                required: false,
                defaultValue: "'body'",
                description: 'The typography variant to use',
            },
            {
                name: 'color',
                type: "'primary' | 'secondary' | 'accent' | 'gray'",
                required: false,
                defaultValue: "'primary'",
                description: 'The color of the text',
            },
            {
                name: 'weight',
                type: "'normal' | 'medium' | 'semibold' | 'bold'",
                required: false,
                description: 'The font weight of the text',
            },
            {
                name: 'children',
                type: 'ReactNode',
                required: true,
                description: 'The text content to display',
            },
        ],
    },
    {
        name: 'Modal',
        description: 'A modal dialog component with backdrop, keyboard support, and multiple sizes for overlays.',
        examples: React.createElement('div', { className: 'p-8 space-y-4' }, React.createElement('div', {
            className: 'bg-white border border-gray-200 rounded-xl p-6 max-w-md',
        }, React.createElement('h3', { className: 'text-xl font-semibold mb-4' }, 'Modal Example'), React.createElement('p', { className: 'text-gray-600 mb-4' }, 'This is an example of a modal dialog.'), React.createElement('div', { className: 'flex justify-end space-x-3' }, React.createElement('button', {
            type: 'button',
            className: 'px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50',
        }, 'Cancel'), React.createElement('button', {
            type: 'button',
            className: 'px-4 py-2 bg-accent-500 text-white rounded-lg hover:bg-accent-600',
        }, 'Confirm')))),
        props: [
            {
                name: 'isOpen',
                type: 'boolean',
                required: true,
                description: 'Whether the modal is currently open',
            },
            {
                name: 'onClose',
                type: '() => void',
                required: true,
                description: 'Callback function to close the modal',
            },
            {
                name: 'title',
                type: 'string',
                required: false,
                description: 'The title displayed in the modal header',
            },
            {
                name: 'size',
                type: "'sm' | 'md' | 'lg' | 'xl'",
                required: false,
                defaultValue: "'md'",
                description: 'The size of the modal',
            },
            {
                name: 'children',
                type: 'ReactNode',
                required: true,
                description: 'The content to display inside the modal',
            },
        ],
    },
    {
        name: 'Navbar',
        description: 'A responsive navigation bar component with mobile menu, logo, navigation links, and actions.',
        examples: React.createElement('div', { className: 'p-8 space-y-4' }, React.createElement('nav', { className: 'bg-white border-b border-gray-200 px-4 py-3' }, React.createElement('div', { className: 'flex items-center justify-between' }, React.createElement('div', { className: 'flex items-center' }, React.createElement('span', { className: 'text-xl font-bold' }, 'Logo')), React.createElement('div', { className: 'hidden md:flex space-x-4' }, React.createElement('a', { href: '#', className: 'text-gray-600 hover:text-gray-900' }, 'Home'), React.createElement('a', { href: '#', className: 'text-gray-600 hover:text-gray-900' }, 'About'), React.createElement('a', { href: '#', className: 'text-gray-600 hover:text-gray-900' }, 'Contact')), React.createElement('button', { type: 'button', className: 'md:hidden' }, '☰')))),
        props: [
            {
                name: 'logo',
                type: 'ReactNode',
                required: false,
                description: 'The logo or brand element to display',
            },
            {
                name: 'links',
                type: 'Array<{ label: string; href: string; active?: boolean }>',
                required: false,
                defaultValue: '[]',
                description: 'Array of navigation links to display',
            },
            {
                name: 'actions',
                type: 'ReactNode',
                required: false,
                description: 'Action elements to display on the right side (buttons, avatars, etc.)',
            },
        ],
    },
    {
        name: 'Switch',
        description: 'A toggle switch component with neumorphic design, supporting controlled and uncontrolled states.',
        examples: React.createElement('div', { className: 'p-8 space-y-6' }, React.createElement('div', { className: 'flex items-center space-x-8' }, React.createElement('div', { className: 'text-center' }, React.createElement('div', {
            className: 'relative w-[150px] h-[60px] bg-[rgb(236_240_243)] rounded-[50px] shadow-[inset_8px_8px_16px_#d1d9e6,inset_-8px_-8px_16px_#ffffff]',
        }, React.createElement('input', {
            type: 'checkbox',
            className: 'hidden',
            defaultChecked: false,
        }), React.createElement('label', { className: 'absolute top-1/2 left-0 w-full h-full -translate-y-1/2 rounded-[50px] overflow-hidden cursor-pointer' }, React.createElement('div', {
            className: 'absolute w-[80px] h-[50px] rounded-[50px] top-[5px] left-[5px] bg-gradient-to-br from-[#d2d2d2] to-[#ffffff] shadow-[-4px_-4px_8px_#ffffff,4px_4px_8px_#c8c8c8] transition-all duration-300 ease-in-out flex items-center justify-start pl-[10px]',
        }, React.createElement('div', { className: 'w-[10px] h-[10px] rounded-full bg-gray-500 shadow-[0_0_10px_2px_rgba(0,0,0,0.2)] transition-all duration-300 ease-in-out' })))), React.createElement('span', { className: 'block mt-2 text-sm text-gray-600' }, 'OFF')), React.createElement('div', { className: 'text-center' }, React.createElement('div', {
            className: 'relative w-[150px] h-[60px] bg-[rgb(236_240_243)] rounded-[50px] shadow-[inset_8px_8px_16px_#d1d9e6,inset_-8px_-8px_16px_#ffffff]',
        }, React.createElement('input', {
            type: 'checkbox',
            className: 'hidden',
            defaultChecked: true,
        }), React.createElement('label', { className: 'absolute top-1/2 left-0 w-full h-full -translate-y-1/2 rounded-[50px] overflow-hidden cursor-pointer' }, React.createElement('div', {
            className: 'absolute w-[80px] h-[50px] rounded-[50px] top-[5px] left-[65px] bg-gradient-to-tl from-[#ffffff] to-[#d2d2d2] shadow-[-4px_-4px_8px_#ffffff,4px_4px_8px_#c8c8c8] transition-all duration-300 ease-in-out flex items-center justify-start pl-[10px]',
        }, React.createElement('div', { className: 'w-[10px] h-[10px] rounded-full bg-[#ffff00] shadow-[0_0_15px_4px_#ffff00] transition-all duration-300 ease-in-out' })))), React.createElement('span', { className: 'block mt-2 text-sm text-gray-600' }, 'ON')))),
        props: [
            {
                name: 'checked',
                type: 'boolean',
                required: false,
                defaultValue: 'false',
                description: 'Whether the switch is in the ON position',
            },
            {
                name: 'onChange',
                type: '(checked: boolean) => void',
                required: false,
                description: 'Callback function when switch state changes',
            },
            {
                name: 'disabled',
                type: 'boolean',
                required: false,
                defaultValue: 'false',
                description: 'Whether the switch is disabled',
            },
        ],
    },
];
// Function to add new components to the registry
function registerComponent(componentDoc) {
    componentDocs.push(componentDoc);
}
// Function to get all components
function getAllComponents() {
    return componentDocs;
}
// Function to get a specific component by name
function getComponent(name) {
    return componentDocs.find((comp) => comp.name.toLowerCase() === name.toLowerCase());
}

function DocGenerator({ components, title = '@clear/ui Documentation', description = 'Complete component library documentation', }) {
    return (jsxs("div", { className: "min-h-screen bg-gray-50", children: [jsx("div", { className: "bg-white border-b border-gray-200 sticky top-0 z-50", children: jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: jsxs("div", { className: "py-6", children: [jsx(Typography, { variant: "h1", className: "text-3xl font-bold text-gray-900", children: title }), jsx(Typography, { variant: "subtitle", color: "secondary", className: "mt-2", children: description })] }) }) }), jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8", children: jsx("div", { className: "space-y-12", children: components.map((component) => (jsxs("section", { id: component.name.toLowerCase(), children: [jsxs("div", { className: "mb-8", children: [jsx(Typography, { variant: "h2", className: "text-2xl font-bold text-gray-900 mb-2", children: component.name }), jsx(Typography, { variant: "body", color: "secondary", children: component.description })] }), jsxs(Card, { variant: "default", padding: "lg", className: "mb-8", children: [jsx(Typography, { variant: "h4", className: "mb-4", children: "Examples" }), component.examples] }), component.props && component.props.length > 0 && (jsxs(Card, { variant: "outlined", padding: "lg", children: [jsx(Typography, { variant: "h4", className: "mb-4", children: "Props" }), jsx("div", { className: "overflow-x-auto", children: jsxs("table", { className: "min-w-full divide-y divide-gray-200", children: [jsx("thead", { className: "bg-gray-50", children: jsxs("tr", { children: [jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Prop" }), jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Type" }), jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Required" }), jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Default" }), jsx("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Description" })] }) }), jsx("tbody", { className: "bg-white divide-y divide-gray-200", children: component.props.map((prop) => (jsxs("tr", { children: [jsx("td", { className: "px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900", children: prop.name }), jsx("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-mono", children: prop.type }), jsx("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: prop.required ? (jsx("span", { className: "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800", children: "Required" })) : (jsx("span", { className: "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800", children: "Optional" })) }), jsx("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-mono", children: prop.defaultValue || '-' }), jsx("td", { className: "px-6 py-4 text-sm text-gray-500", children: prop.description })] }, prop.name))) })] }) })] }))] }, component.name))) }) })] }));
}

export { Avatar, Button, Card, CirclePlate, DocGenerator, FormField, Input, Modal, Navbar, NeumorphicProvider, Switch, Textarea, ThemeProvider, Typography, componentDocs, defaultTheme, getAllComponents, getComponent, registerComponent, useTheme };
//# sourceMappingURL=index.esm.js.map
