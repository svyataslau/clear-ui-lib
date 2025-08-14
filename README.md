# Clear UI Library

A modern React UI library with neumorphic design, built with TypeScript and Tailwind CSS. Fully compatible with React 18 and 19.

[![npm version](https://badge.fury.io/js/%40clear%2Fui.svg)](https://badge.fury.io/js/%40clear%2Fui)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18%20%7C%2019-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5%2B-blue.svg)](https://www.typescriptlang.org/)

## Features

- 🎨 **Neumorphic Design System** - Beautiful soft UI with depth and shadows
- 📱 **React 18 & 19 Compatible** - Full support for latest React versions
- 🎯 **TypeScript First** - Complete type safety with full IntelliSense support
- 🎨 **Tailwind CSS Integration** - Seamless integration with Tailwind utilities
- 📦 **Tree-shakable** - Only import what you use, smaller bundle sizes
- 🔧 **Customizable Themes** - Easy theme customization with CSS variables
- ⚡ **Performance Optimized** - Minimal runtime overhead
- 🎨 **Modern Design** - Clean, accessible, and responsive components

## Installation

```bash
npm install @clear/ui
# or
yarn add @clear/ui
# or
pnpm add @clear/ui
```

### Requirements

- React 18 or 19
- TypeScript 5+ (recommended)
- Tailwind CSS 3+ (for styling)
- Node.js 18+

## Usage

### Quick Start

```tsx
import { Button, Card, Input, Typography } from '@clear/ui';
import '@clear/ui/dist/index.css'; // Import neumorphic styles

function App() {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <Typography variant="h1" className="mb-6">Welcome to Clear UI</Typography>
      <Card className="max-w-md">
        <Typography variant="h3" className="mb-4">Login Form</Typography>
        <div className="space-y-4">
          <Input placeholder="Enter your email" type="email" />
          <Input placeholder="Enter your password" type="password" />
          <Button variant="primary" className="w-full">Sign In</Button>
        </div>
      </Card>
    </div>
  );
}
```

### Setup Tailwind CSS

Add the library's CSS to your Tailwind configuration:

```js
// tailwind.config.js
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
        'neumorphism': '6px 6px 12px #d1d9e6, -6px -6px 12px #ffffff',
        'neumorphism-card': '6px 6px 4px #d1d9e6, -6px -6px 4px #ffffff',
        'neumorphism-input': 'inset 6px 6px 4px #d1d9e6, inset -6px -6px 4px #ffffff',
        'neumorphism-concave': 'inset 6px 6px 4px #d1d9e6, inset -6px -6px 4px #ffffff',
      }
    }
  },
  plugins: []
}
```

## Components

### Button

```tsx
import { Button } from '@clear/ui';

// Variants
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

// With HTML attributes
<Button 
  variant="primary"
  onClick={(e) => console.log(e)}
  onFocus={(e) => console.log('focused')}
  aria-label="Submit form"
  data-testid="submit-btn"
>
  Submit
</Button>
```

### Input

```tsx
import { Input } from '@clear/ui';

// Basic input
<Input placeholder="Enter text..." />

// Types
<Input type="email" placeholder="Email" />
<Input type="password" placeholder="Password" />
<Input type="search" placeholder="Search..." />

// Neumorphic styling
<Input neumorphic placeholder="Neumorphic input" />
<Input neumorphic rounded placeholder="Rounded neumorphic" />

// Sizes
<Input size="sm" placeholder="Small" />
<Input size="lg" placeholder="Large" />

// States
<Input error placeholder="Error state" />
<Input disabled placeholder="Disabled" />

// With HTML attributes
<Input 
  placeholder="Search"
  onFocus={(e) => console.log('focused')}
  onBlur={(e) => console.log('blurred')}
  maxLength={100}
  aria-label="Search input"
/>
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

// With content
<Card className="max-w-md">
  <Typography variant="h3">Card Title</Typography>
  <Typography variant="body">Card content goes here...</Typography>
</Card>
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

### Modal

```tsx
import { Modal } from '@clear/ui';

const [isOpen, setIsOpen] = useState(false);

<Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="My Modal">
  <p>Modal content goes here</p>
  <Button onClick={() => setIsOpen(false)}>Close</Button>
</Modal>
```

### All Available Components

- `Avatar` - User avatars with fallback support
- `Button` - Interactive buttons with multiple variants
- `Card` - Container components with neumorphic styling
- `CirclePlate` - Circular plate components
- `Input` - Form input fields
- `Modal` - Modal dialogs
- `Navbar` - Navigation bars
- `Switch` - Toggle switches
- `Textarea` - Multi-line text inputs
- `Typography` - Text components with various styles

## Theme Provider

```tsx
import { ThemeProvider, useTheme } from '@clear/ui';

function App() {
  return (
    <ThemeProvider>
      <YourApp />
    </ThemeProvider>
  );
}

// Custom theme
function AppWithCustomTheme() {
  return (
    <ThemeProvider initialTheme={{ accentColor: '#3b82f6' }}>
      <YourApp />
    </ThemeProvider>
  );
}
```

## TypeScript Support

The library is fully typed and supports React 18 and 19. All components extend their respective HTML element interfaces, providing full IntelliSense support for standard HTML attributes.

```tsx
import type { ButtonProps, InputProps, CardProps } from '@clear/ui';

// Full type safety
const buttonProps: ButtonProps = {
  variant: 'primary',
  size: 'md',
  onClick: (e) => console.log(e),
  // All HTML button attributes are available
  onFocus: (e) => console.log('focused'),
  onBlur: (e) => console.log('blurred'),
  ariaLabel: 'Submit button',
};
```

### Theme Provider

```tsx
import { ThemeProvider, useTheme } from '@clear/ui';

function App() {
  return (
    <ThemeProvider>
      <YourApp />
    </ThemeProvider>
  );
}
```

## Browser Support

- Chrome >= 88
- Firefox >= 85
- Safari >= 14
- Edge >= 88

## Performance

The library is optimized for performance:

- **Tree-shaking**: Only import what you use
- **Minimal runtime**: No heavy dependencies
- **Optimized builds**: Production builds are minified and optimized
- **TypeScript**: Compile-time optimizations

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

## License

MIT License - see the [LICENSE](LICENSE) file for details.

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build library
npm run build

# Run tests
npm test

# Run demo app
npm run demo
```

## License

MIT
