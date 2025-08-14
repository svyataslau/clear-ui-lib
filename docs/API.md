# API Documentation

## Components

### Button

```tsx
import { Button } from '@clear/ui';

interface ButtonProps {
  variant?: 'primary' | 'ghost' | 'concave' | 'gradient';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  disabled?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  children: ReactNode;
  className?: string;
}
```

**Props:**
- `variant` - Button style (default: `'primary'`)
- `size` - Button size (default: `'md'`)
- `disabled` - Disabled state
- `onClick` - Click handler
- `type` - HTML button type
- `children` - Button content
- `className` - Additional CSS classes

### Input

```tsx
import { Input } from '@clear/ui';

interface InputProps {
  type?: 'text' | 'password' | 'email' | 'search';
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  error?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  rounded?: boolean;
  neumorphic?: boolean;
  className?: string;
}
```

**Props:**
- `type` - HTML input type (default: `'text'`)
- `placeholder` - Placeholder text
- `value` - Value (for controlled component)
- `onChange` - Change handler
- `disabled` - Disabled state
- `error` - Error state
- `size` - Size (default: `'md'`)
- `rounded` - Rounded corners (50% border-radius)
- `neumorphic` - Apply neumorphic styles
- `className` - Additional CSS classes

### Card

```tsx
import { Card } from '@clear/ui';

interface CardProps {
  variant?: 'default' | 'outlined';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  rounded?: boolean;
  children: ReactNode;
  className?: string;
}
```

**Props:**
- `variant` - Card variant (default: `'default'`)
- `padding` - Padding size (default: `'md'`)
- `rounded` - Rounded corners (50% border-radius)
- `children` - Card content
- `className` - Additional CSS classes

### Switch

```tsx
import { Switch } from '@clear/ui';

interface SwitchProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  className?: string;
}
```

**Props:**
- `checked` - Checked state (for controlled component)
- `onChange` - State change handler
- `disabled` - Disabled state
- `className` - Additional CSS classes

### CirclePlate

```tsx
import { CirclePlate } from '@clear/ui';

interface CirclePlateProps {
  variant?: 'primary' | 'concave';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  children: ReactNode;
  className?: string;
}
```

**Props:**
- `variant` - Variant (default: `'primary'`)
- `size` - Size (default: `'md'`)
- `children` - Content
- `className` - Additional CSS classes

### Typography

```tsx
import { Typography } from '@clear/ui';

interface TypographyProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle' | 'body' | 'caption';
  color?: 'primary' | 'secondary' | 'accent' | 'gray';
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  children: ReactNode;
  className?: string;
}
```

**Props:**
- `variant` - Text type (default: `'body'`)
- `color` - Text color (default: `'primary'`)
- `weight` - Font weight
- `children` - Text content
- `className` - Additional CSS classes

### Modal

```tsx
import { Modal } from '@clear/ui';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  children: ReactNode;
  className?: string;
}
```

**Props:**
- `isOpen` - Whether modal is open
- `onClose` - Close handler
- `title` - Modal title
- `size` - Size (default: `'md'`)
- `children` - Modal content
- `className` - Additional CSS classes

### Navbar

```tsx
import { Navbar } from '@clear/ui';

interface NavbarProps {
  logo?: ReactNode;
  links?: Array<{
    label: string;
    href: string;
    active?: boolean;
  }>;
  actions?: ReactNode;
  className?: string;
}
```

**Props:**
- `logo` - Logo element
- `links` - Navigation links array
- `actions` - Action elements (buttons, etc.)
- `className` - Additional CSS classes

### Textarea

```tsx
import { Textarea } from '@clear/ui';

interface TextareaProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  error?: boolean;
  rows?: number;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}
```

**Props:**
- `placeholder` - Placeholder text
- `value` - Value (for controlled component)
- `onChange` - Change handler
- `disabled` - Disabled state
- `error` - Error state
- `rows` - Number of rows
- `size` - Size (default: `'md'`)
- `className` - Additional CSS classes

## Theme System

### ThemeProvider

```tsx
import { ThemeProvider } from '@clear/ui';

interface ThemeProviderProps {
  children: ReactNode;
  initialTheme?: Partial<ThemeConfig>;
}
```

**Props:**
- `children` - Child components
- `initialTheme` - Initial theme configuration

### useTheme Hook

```tsx
import { useTheme } from '@clear/ui';

function MyComponent() {
  const { theme, setTheme } = useTheme();
  
  return (
    <div>
      <p>Current accent color: {theme.accentColor}</p>
      <button onClick={() => setTheme({ accentColor: '#3b82f6' })}>
        Change to Blue
      </button>
    </div>
  );
}
```

**Returns:**
- `theme` - Current theme configuration
- `setTheme` - Function to update theme

### ThemeConfig Interface

```tsx
interface ThemeConfig {
  accentColor: string;      // Main accent color
  accentColorLight: string; // Light variant (for hover effects)
  accentColorDark: string;  // Dark variant (for active states)
}
```

## Utility Functions

### cn (classNames)

```tsx
import { cn } from '@clear/ui';

// Utility for combining CSS classes
const className = cn(
  'base-class',
  condition && 'conditional-class',
  'another-class'
);
```

## TypeScript Types

### Common Types

```tsx
type Size = 'sm' | 'md' | 'lg' | 'xl';
type Variant = 'primary' | 'ghost' | 'concave' | 'gradient';
type Color = 'primary' | 'secondary' | 'accent' | 'gray';

interface BaseComponentProps {
  className?: string;
  [key: string]: any;
}
```

### Component Props Types

```tsx
import type {
  ButtonProps,
  InputProps,
  CardProps,
  SwitchProps,
  CirclePlateProps,
  TypographyProps,
  ModalProps,
  NavbarProps,
  TextareaProps,
  ThemeConfig
} from '@clear/ui';
```

## CSS Classes

### Neumorphism Shadows

```css
/* External shadows */
.shadow-neumorphism
.shadow-neumorphism-card
.shadow-neumorphism-convex

/* Internal shadows */
.shadow-neumorphism-inset
.shadow-neumorphism-input
.shadow-neumorphism-concave
```

### Background Colors

```css
.bg-neumorphism-background  /* Main background */
.bg-neumorphism-classic     /* Classic background */
```

### Accent Colors

```css
.text-accent-500           /* Main accent color */
.bg-accent-500
.border-accent-500

.hover:bg-accent-600       /* Hover states */
.hover:text-accent-600
```

## Examples

### Controlled Input

```tsx
import { Input } from '@clear/ui';

function ControlledInput() {
  const [value, setValue] = useState('');
  
  return (
    <Input
      value={value}
      onChange={setValue}
      placeholder="Enter text"
      neumorphic
    />
  );
}
```

### Controlled Switch

```tsx
import { Switch } from '@clear/ui';

function ControlledSwitch() {
  const [checked, setChecked] = useState(false);
  
  return (
    <Switch
      checked={checked}
      onChange={setChecked}
    />
  );
}
```

### Theme Customization

```tsx
import { ThemeProvider, useTheme } from '@clear/ui';

function App() {
  return (
    <ThemeProvider initialTheme={{ accentColor: '#3b82f6' }}>
      <MyApp />
    </ThemeProvider>
  );
}

function ColorPicker() {
  const { theme, setTheme } = useTheme();
  
  const colors = ['#a855f7', '#3b82f6', '#10b981', '#f59e0b'];
  
  return (
    <div>
      {colors.map(color => (
        <button
          key={color}
          onClick={() => setTheme({ accentColor: color })}
          style={{ backgroundColor: color }}
          className="w-8 h-8 rounded"
        />
      ))}
    </div>
  );
}
```

### Error Handling

```tsx
import { Input } from '@clear/ui';

function FormWithValidation() {
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);
  
  const handleChange = (newValue: string) => {
    setValue(newValue);
    setError(newValue.length < 3);
  };
  
  return (
    <Input
      value={value}
      onChange={handleChange}
      error={error}
      placeholder="Minimum 3 characters"
    />
  );
}
```
