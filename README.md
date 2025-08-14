# Clear UI Library

A modern React UI library with neumorphic design, built with TypeScript and Tailwind CSS.

## Features

- 🎨 Neumorphic design system
- 📱 React Native & Web compatible
- 🎯 TypeScript support with full type safety
- 🎨 Tailwind CSS integration
- 📦 Tree-shakable components
- 🔧 Customizable themes

## Installation

```bash
npm install @clear/ui
# or
yarn add @clear/ui
```

## Usage

### Import Components

```tsx
import { Button, Card, Input, Typography } from '@clear/ui';
import '@clear/ui/dist/index.css'; // Import styles

function App() {
  return (
    <div>
      <Typography variant="h1">Hello World</Typography>
      <Card>
        <Input placeholder="Enter your name" />
        <Button variant="primary">Submit</Button>
      </Card>
    </div>
  );
}
```

### Import Styles

The library includes neumorphic styles that need to be imported:

```tsx
// Import the main CSS file
import '@clear/ui/dist/index.css';
```

### Available Components

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

### Component Props

All components support standard HTML attributes in addition to their specific props:

```tsx
<Button 
  variant="primary" 
  size="lg"
  onClick={(e) => console.log(e)}
  disabled={false}
  className="custom-class"
  // All standard button HTML attributes are supported
  onFocus={(e) => console.log('focused')}
  onBlur={(e) => console.log('blurred')}
>
  Click me
</Button>
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

## TypeScript Support

The library is fully typed and supports React 18 and 19. All components extend their respective HTML element interfaces, providing full IntelliSense support for standard HTML attributes.

## Browser Support

- Chrome >= 88
- Firefox >= 85
- Safari >= 14
- Edge >= 88

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
