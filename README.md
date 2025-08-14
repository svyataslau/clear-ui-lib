# Clear UI Library

A modern React UI library with neumorphic design, built with TypeScript and Tailwind CSS.

## 🚀 Installation

```bash
npm install @clear/ui
```

## 📦 Import

```tsx
import { 
  Button, 
  Input, 
  Card, 
  Switch, 
  ThemeProvider,
  useTheme 
} from '@clear/ui';
```

## 🎨 Core Components

### Button

```tsx
import { Button } from '@clear/ui';

// Main variants
<Button variant="primary">Primary Button</Button>
<Button variant="ghost">Ghost Button</Button>
<Button variant="concave">Concave Button</Button>
<Button variant="gradient">Gradient Button</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
<Button size="xl">Extra Large</Button>

// States
<Button disabled>Disabled</Button>
<Button onClick={() => console.log('clicked')}>Clickable</Button>
```

### Input

```tsx
import { Input } from '@clear/ui';

// Regular input
<Input placeholder="Enter text..." />

// Neumorphic input
<Input neumorphic placeholder="Neumorphic input" />

// Rounded neumorphic input
<Input neumorphic rounded placeholder="Rounded neumorphic" />

// Sizes
<Input size="sm" placeholder="Small" />
<Input size="lg" placeholder="Large" />

// States
<Input error placeholder="Error state" />
<Input disabled placeholder="Disabled" />

// Types
<Input type="email" placeholder="Email" />
<Input type="password" placeholder="Password" />
<Input type="search" placeholder="Search..." />
```

### Card

```tsx
import { Card } from '@clear/ui';

// Variants
<Card variant="default">Default Card</Card>
<Card variant="outlined">Outlined Card</Card>

// Padding sizes
<Card padding="sm">Small padding</Card>
<Card padding="lg">Large padding</Card>

// Rounded cards
<Card rounded>Rounded Card</Card>
```

### Switch

```tsx
import { Switch } from '@clear/ui';

// Controlled
const [checked, setChecked] = useState(false);
<Switch checked={checked} onChange={setChecked} />

// Uncontrolled
<Switch />

// Disabled state
<Switch disabled />
<Switch checked disabled />
```

### CirclePlate

```tsx
import { CirclePlate } from '@clear/ui';

// Sizes
<CirclePlate size="sm">+</CirclePlate>
<CirclePlate size="lg">★</CirclePlate>

// Variants
<CirclePlate variant="primary">P</CirclePlate>
<CirclePlate variant="concave">C</CirclePlate>
```

### Typography

```tsx
import { Typography } from '@clear/ui';

// Headings
<Typography variant="h1">Heading 1</Typography>
<Typography variant="h3">Heading 3</Typography>

// Text
<Typography variant="body">Body text</Typography>
<Typography variant="caption">Caption text</Typography>

// Colors
<Typography color="primary">Primary text</Typography>
<Typography color="accent">Accent text</Typography>

// Weights
<Typography weight="normal">Normal</Typography>
<Typography weight="bold">Bold</Typography>
```

### Modal

```tsx
import { Modal } from '@clear/ui';

const [isOpen, setIsOpen] = useState(false);

<Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="My Modal">
  <p>Modal content goes here</p>
</Modal>
```

### Navbar

```tsx
import { Navbar } from '@clear/ui';

const links = [
  { label: 'Home', href: '/', active: true },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' }
];

<Navbar 
  logo={<img src="/logo.png" alt="Logo" />}
  links={links}
  actions={<Button>Login</Button>}
/>
```

### Textarea

```tsx
import { Textarea } from '@clear/ui';

<Textarea placeholder="Enter your message..." />
<Textarea rows={5} placeholder="Multi-line text" />
<Textarea error placeholder="Error state" />
```

## 🎨 Color Customization

### ThemeProvider

The library supports accent color customization through `ThemeProvider`:

```tsx
import { ThemeProvider } from '@clear/ui';

function App() {
  return (
    <ThemeProvider initialTheme={{ accentColor: '#3b82f6' }}>
      <YourApp />
    </ThemeProvider>
  );
}
```

### Dynamic Color Changes

```tsx
import { useTheme } from '@clear/ui';

function ColorPicker() {
  const { theme, setTheme } = useTheme();

  const changeColor = (color: string) => {
    setTheme({
      accentColor: color,
      accentColorLight: color + '40', // 25% opacity
      accentColorDark: color + '80',  // 50% opacity
    });
  };

  return (
    <div>
      <input 
        type="color" 
        value={theme.accentColor}
        onChange={(e) => changeColor(e.target.value)}
      />
      <p>Current color: {theme.accentColor}</p>
    </div>
  );
}
```

### Preset Colors

```tsx
const presetColors = {
  purple: '#a855f7',
  blue: '#3b82f6',
  green: '#10b981',
  amber: '#f59e0b',
  red: '#ef4444',
  violet: '#8b5cf6'
};

// Usage
<ThemeProvider initialTheme={{ accentColor: presetColors.blue }}>
  <App />
</ThemeProvider>
```

### Theme Structure

```tsx
interface ThemeConfig {
  accentColor: string;      // Main accent color
  accentColorLight: string; // Light variant (for hover effects)
  accentColorDark: string;  // Dark variant (for active states)
}
```

## 🎯 Complete Application Example

```tsx
import React, { useState } from 'react';
import { 
  ThemeProvider, 
  Button, 
  Input, 
  Card, 
  Switch, 
  Typography,
  useTheme 
} from '@clear/ui';

function App() {
  return (
    <ThemeProvider initialTheme={{ accentColor: '#a855f7' }}>
      <MyApp />
    </ThemeProvider>
  );
}

function MyApp() {
  const [inputValue, setInputValue] = useState('');
  const [switchChecked, setSwitchChecked] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <div className="p-8 space-y-6">
      {/* Header */}
      <Typography variant="h1" color="primary">
        My Application
      </Typography>

      {/* Form Card */}
      <Card padding="lg">
        <Typography variant="h3" className="mb-4">
          User Settings
        </Typography>
        
        <div className="space-y-4">
          {/* Neumorphic input */}
          <Input
            neumorphic
            placeholder="Enter your name"
            value={inputValue}
            onChange={setInputValue}
          />
          
          {/* Switch */}
          <div className="flex items-center gap-2">
            <Switch 
              checked={switchChecked} 
              onChange={setSwitchChecked} 
            />
            <Typography>Enable notifications</Typography>
          </div>
          
          {/* Buttons */}
          <div className="flex gap-2">
            <Button variant="primary">Save</Button>
            <Button variant="ghost">Cancel</Button>
          </div>
        </div>
      </Card>

      {/* Theme Customization */}
      <Card padding="lg">
        <Typography variant="h3" className="mb-4">
          Theme Customization
        </Typography>
        
        <div className="flex gap-2">
          {['#a855f7', '#3b82f6', '#10b981', '#f59e0b'].map(color => (
            <button
              key={color}
              onClick={() => setTheme({ accentColor: color })}
              className="w-8 h-8 rounded border-2 border-gray-300"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </Card>
    </div>
  );
}

export default App;
```

## 🔧 Tailwind CSS Setup

Make sure your `tailwind.config.js` includes the library paths:

```js
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@clear/ui/dist/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7c3aed',
          800: '#6b21a8',
          900: '#581c87',
        }
      },
      boxShadow: {
        'neumorphism': '6px 6px 4px #d1d9e6, -6px -6px 4px #ffffff',
        'neumorphism-inset': 'inset 6px 6px 4px #d1d9e6, inset -6px -6px 4px #ffffff',
        'neumorphism-card': '6px 6px 4px #d1d9e6, -6px -6px 4px #ffffff',
        'neumorphism-input': 'inset 6px 6px 4px #d1d9e6, inset -6px -6px 4px #ffffff',
        'neumorphism-convex': '6px 6px 4px #d1d9e6, -6px -6px 4px #ffffff',
        'neumorphism-concave': 'inset 6px 6px 4px #d1d9e6, inset -6px -6px 4px #ffffff',
      }
    }
  }
}
```

## 📚 TypeScript Types

```tsx
import type { 
  ButtonProps, 
  InputProps, 
  CardProps, 
  SwitchProps,
  ThemeConfig 
} from '@clear/ui';

// Using types
const buttonProps: ButtonProps = {
  variant: 'primary',
  size: 'md',
  onClick: () => console.log('clicked')
};
```

## 🎨 Design Features

### Neumorphism
- All components use neumorphic design
- Soft shadows create depth effects
- Support for convex and concave states

### Accent Colors
- Unified accent color system
- Automatic application to hover effects
- Support for light and dark variants

### Responsiveness
- All components are responsive
- Support for various screen sizes
- Mobile-optimized

## 📦 Package Size

**Good news!** The demo app is NOT included in the npm package. Only the compiled library code is published:

- **Total package size**: ~540KB
- **Includes only**: Compiled components, types, and utilities
- **Excludes**: Demo app, tests, development files, documentation

The `package.json` specifies `"files": ["dist"]`, ensuring only the essential library files are published to npm.

## 🚀 Usage for Consumers

### Quick Installation

```bash
# Install only the library (demo app not included)
npm install @clear/ui
```

### Basic Import

```tsx
// Import components
import { Button, Input, ThemeProvider } from '@clear/ui';

// Use immediately
<ThemeProvider initialTheme={{ accentColor: '#3b82f6' }}>
  <Button variant="primary">Click me</Button>
</ThemeProvider>
```

### Tree Shaking Support

```tsx
// Import only what you need - unused components won't be bundled
import { Button } from '@clear/ui';        // Only Button component
import { Input, Card } from '@clear/ui';   // Only Input and Card
import { ThemeProvider } from '@clear/ui'; // Only theme system
```

### Minimal Setup

```tsx
import React from 'react';
import { ThemeProvider, Button, Input } from '@clear/ui';

function App() {
  return (
    <ThemeProvider>
      <div className="p-4">
        <Input placeholder="Enter text..." />
        <Button variant="primary">Submit</Button>
      </div>
    </ThemeProvider>
  );
}
```

### What You Get

✅ **540KB package** - Optimized for production  
✅ **Tree-shaking** - Import only what you use  
✅ **TypeScript support** - Full type definitions  
✅ **No demo app** - Clean, minimal installation  
✅ **Ready to use** - No additional setup required

## 🚀 Demo Application

Run the demo application to view all components:

```bash
npm run demo
```

The demo includes:
- Interactive examples of all components
- Custom color settings
- Various variants and states

## 📄 License

MIT License

## 🤝 Contributing

We welcome contributions to the library! Please create issues and pull requests.

## 📞 Support

If you have questions or issues, create an issue in the repository.
