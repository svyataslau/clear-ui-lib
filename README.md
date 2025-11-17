# @clear/ui — Neumorphic React UI Kit

A modern, accessible React component library featuring neumorphic design with zero-runtime CSS. Built with TypeScript, tested with Vitest, and optimized for tree-shaking.

## Features

- 🎨 **Neumorphic Design** - Soft, elegant shadows and depth effects
- ⚡ **Zero-Runtime CSS** - All styles compile to static CSS, no runtime overhead
- 🧩 **TypeScript First** - Fully typed API with excellent IntelliSense support
- 📱 **Responsive** - Mobile-friendly and adaptive layouts
- ♿ **Accessible** - ARIA compliant with keyboard navigation support
- 🧪 **Well Tested** - Comprehensive test coverage with 98+ tests
- 🌳 **Tree-Shakeable** - Import only what you need
- 📦 **Tiny Bundle** - Optimized build with minimal footprint

## Installation

```bash
npm install @clear/ui
```

Or with yarn/pnpm:

```bash
yarn add @clear/ui
pnpm add @clear/ui
```

### Component Storybook

To explore all components interactively, run the local storybook:

```bash
npm run storybook
```

This will start the component playground at `http://localhost:3000`.

**Architecture Note:** Storybook imports styles directly from `src/styles/index.css` (not from `dist/`), providing a single source of truth and instant hot-reload for style changes.

![Demo screenshot](assets/demo.png)

## Quick Start

### 1. Import Styles

Import the CSS file once in your app's entry point:

```tsx
// main.tsx or App.tsx
import '@clear/ui/styles';
```

**Note:** Styles are extracted to a single CSS file for optimal performance. This approach ensures zero runtime overhead and better caching.

### 2. Use Components

```tsx
import { Button, Input, Card, Switch } from '@clear/ui';

function App() {
  return (
    <div className="bg-neumorphism-background min-h-screen p-8">
      <Card className="p-6 max-w-md">
        <h2 className="text-2xl font-bold mb-4">Welcome</h2>
        <Input placeholder="Enter your name..." className="mb-4" />
        <Button variant="primary" size="lg">
          Get Started
        </Button>
      </Card>
    </div>
  );
}
```

### 3. With TypeScript

All components are fully typed:

```tsx
import type { ButtonProps, InputProps } from '@clear/ui';

// TypeScript will provide full autocompletion and type checking
const MyButton: React.FC<ButtonProps> = (props) => {
  return <Button {...props} />;
};
```

## Components

### Button

```tsx
import { Button } from '@clear/ui';

// Sizes
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
<Button size="xl">Extra Large</Button>

// Variants
<Button variant="primary">Primary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="concave">Concave</Button>
<Button variant="gradient">Gradient</Button>
```

### Input

```tsx
import { Input } from '@clear/ui';

// Sizes
<Input size="sm" placeholder="Small input" />
<Input size="md" placeholder="Medium input" />
<Input size="lg" placeholder="Large input" />
<Input size="xl" placeholder="Extra large input" />

// Styles
<Input rounded placeholder="Rounded input" />
<Input neumorphic placeholder="Neumorphic input" />
<Input error placeholder="Error input" />
```

### Switch

```tsx
import { Switch } from '@clear/ui';

function MyComponent() {
  const [checked, setChecked] = useState(false);

  return (
    <Switch 
      checked={checked} 
      onChange={setChecked}
      disabled={false}
    />
  );
}
```

### Card

```tsx
import { Card } from '@clear/ui';

// Variants
<Card variant="default">Default card</Card>
<Card variant="outlined">Outlined card</Card>

// Padding sizes
<Card padding="sm">Small padding</Card>
<Card padding="md">Medium padding</Card>
<Card padding="lg">Large padding</Card>
<Card padding="xl">Extra large padding</Card>

// Rounded corners
<Card rounded>Rounded card</Card>
```

### Modal

```tsx
import { Modal } from '@clear/ui';

function MyComponent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Modal 
      isOpen={isOpen} 
      onClose={() => setIsOpen(false)}
      title="Modal Title"
      size="md"
    >
      <p>Modal content goes here</p>
    </Modal>
  );
}
```

### Navbar

```tsx
import { Navbar } from '@clear/ui';

const links = [
  { href: '/', label: 'Home', active: true },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

function MyNavbar() {
  return (
    <Navbar
      logo={<h1>Logo</h1>}
      links={links}
      actions={<Button>Login</Button>}
    />
  );
}
```

### Typography

```tsx
import { Typography } from '@clear/ui';

<Typography variant="h1">Heading 1</Typography>
<Typography variant="h2">Heading 2</Typography>
<Typography variant="body">Body text</Typography>
<Typography variant="caption">Caption text</Typography>

// Colors
<Typography color="primary">Primary text</Typography>
<Typography color="secondary">Secondary text</Typography>
<Typography color="accent">Accent text</Typography>

// Weight
<Typography weight="normal">Normal weight</Typography>
<Typography weight="medium">Medium weight</Typography>
<Typography weight="bold">Bold weight</Typography>
```

### Avatar

```tsx
import { Avatar } from '@clear/ui';

// With image
<Avatar src="/path/to/image.jpg" alt="User avatar" />

// With fallback text
<Avatar fallback="John Doe" />

// Sizes
<Avatar size="sm" fallback="JD" />
<Avatar size="md" fallback="JD" />
<Avatar size="lg" fallback="JD" />
<Avatar size="xl" fallback="JD" />
```

### CirclePlate

```tsx
import { CirclePlate } from '@clear/ui';

// Variants
<CirclePlate variant="primary">Primary</CirclePlate>
<CirclePlate variant="concave">Concave</CirclePlate>

// Sizes
<CirclePlate size="sm">Small</CirclePlate>
<CirclePlate size="md">Medium</CirclePlate>
<CirclePlate size="lg">Large</CirclePlate>
<CirclePlate size="xl">Extra Large</CirclePlate>
```

### Textarea

```tsx
import { Textarea } from '@clear/ui';

<Textarea 
  placeholder="Enter your message..."
  rows={4}
  size="md"
  error={false}
/>
```

### FormField

```tsx
import { FormField, Input } from '@clear/ui';

<FormField 
  label="Email" 
  error="Please enter a valid email"
  required
>
  <Input type="email" placeholder="Enter your email" />
</FormField>
```

## Zero-Runtime CSS

The library uses a zero-runtime approach to styles:

- All styles are compiled into CSS files
- No runtime overhead from styled-components
- Better performance
- Smaller bundle size

### Manual CSS Import (Optional)

If you need to import CSS manually (for example, for customization), you can use:

```tsx
import '@clear/ui/styles';
```

## Development

### Installing Dependencies

```bash
npm install
```

### Running the Component Storybook

```bash
npm run storybook
```

### Building the Library

```bash
npm run build
```

### Running in Development Mode (watch mode)

```bash
npm run dev
```

### Tests

```bash
npm test
```

### Type Checking

```bash
npm run type-check
```

### Linting and Formatting

```bash
npm run lint
npm run format
```

## Publishing to npm

This library is ready for npm publishing:

```bash
# Build the library
npm run build

# Publish to npm (requires npm account)
npm publish
```

### Package Contents

The published package includes:
- `dist/` - Compiled JavaScript (CJS + ESM) and type declarations
- `dist/styles.css` - Compiled CSS styles
- `README.md` - Documentation
- `LICENSE` - MIT license

### Using in Other Projects

Once published, install in any React project:

```bash
npm install @clear/ui
```

Then use as shown in the Quick Start section above.

## Contributing

We welcome contributions! Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

## License

MIT © Clear UI Team
