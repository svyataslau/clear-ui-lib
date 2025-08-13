# @clear/ui

A Neumorphism UI component library for social networks built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 **Neumorphism Design** - Soft, modern interface with subtle shadows and depth effects
- 📱 **Responsive** - Mobile-first design that works on all screen sizes
- 🎯 **TypeScript** - Full type safety with comprehensive interfaces
- ⚡ **Lightweight** - Optimized bundle size with tree-shaking support
- 🎛️ **Configurable** - Extensive prop options for customization
- 🧩 **Modular** - Import only what you need

## Installation

```bash
npm install @clear/ui
```

## Design System

@clear/ui uses **Neumorphism** design principles featuring:
- **Soft Shadows** - Subtle depth effects with light and dark shadows
- **Rounded Corners** - Smooth, modern rounded edges
- **Depth Perception** - Elements appear to float above or sink into the surface
- **Minimal Color Palette** - Focus on grays and subtle accent colors
- **Interactive States** - Pressed and hover effects that enhance depth

## Quick Start

```tsx
import { Button, Card, Navbar } from '@clear/ui'

function App() {
  return (
    <div className="bg-neumorphism-background min-h-screen">
      <Navbar
        logo={<span>MyApp</span>}
        links={[
          { label: 'Home', href: '/', active: true },
          { label: 'Profile', href: '/profile' }
        ]}
      />
      
      <Card variant="elevated" padding="lg">
        <h2>Welcome!</h2>
        <Button variant="primary">Get Started</Button>
      </Card>
    </div>
  )
}
```

## Components

### Button
```tsx
<Button variant="primary" size="md">Click me</Button>
```

### Input
```tsx
<Input type="text" placeholder="Enter your name" />
```

### Textarea
```tsx
<Textarea placeholder="Write your message..." rows={4} />
```

### Card
```tsx
<Card variant="elevated" padding="lg">Content</Card>
```

### Avatar
```tsx
<Avatar src="avatar.jpg" fallback="JD" size="md" />
```

### Typography
```tsx
<Typography variant="h1" color="primary">Heading</Typography>
```

### Modal
```tsx
<Modal isOpen={isOpen} onClose={onClose} title="Title">Content</Modal>
```

### Navbar
```tsx
<Navbar logo={<Logo />} links={links} actions={<Actions />} />
```

## Examples

See the `examples/` folder for comprehensive usage examples of each component.

## Documentation

The library includes a comprehensive automatic documentation system that generates a complete documentation page with all components, examples, and API reference. The documentation is built into the library and updates automatically when new components are added.

### 🎯 Key Features

- **Automatic Component Registration** - New components automatically appear in documentation
- **Interactive Navigation** - Sidebar with quick navigation to all components
- **Live Examples** - All component examples are displayed directly in the documentation
- **Complete API Reference** - Props tables with types, descriptions, and default values
- **Responsive Design** - Works perfectly on all devices
- **Search & Filter** - Easy to find specific components and props

### 📖 Using the Documentation

#### Basic Usage
```tsx
import { EnhancedDocumentationPage } from '@clear/ui/docs'

function App() {
  return <EnhancedDocumentationPage />
}
```

#### Integration with Existing App
```tsx
import React, { useState } from 'react'
import { EnhancedDocumentationPage } from '@clear/ui/docs'

function MyApp() {
  const [showDocs, setShowDocs] = useState(false)

  return (
    <div>
      <header className="bg-white border-b px-4 py-3">
        <button onClick={() => setShowDocs(!showDocs)}>
          {showDocs ? 'Hide Docs' : 'Show Docs'}
        </button>
      </header>
      
      {showDocs ? (
        <EnhancedDocumentationPage />
      ) : (
        <div>Your app content</div>
      )}
    </div>
  )
}
```

### ➕ Adding New Components to Documentation

When you create a new component, simply register it in the documentation system:

#### Step 1: Create Component Example
```tsx
// examples/NewComponentExample.tsx
import React from 'react'
import { NewComponent } from '../src'

export function NewComponentExample() {
  return (
    <div className="space-y-4">
      <NewComponent variant="primary">Primary Variant</NewComponent>
      <NewComponent variant="secondary">Secondary Variant</NewComponent>
    </div>
  )
}
```

#### Step 2: Register in Documentation
```tsx
import { registerComponent } from '@clear/ui'
import { NewComponentExample } from './examples/NewComponentExample'

const newComponentDoc = {
  name: 'NewComponent',
  description: 'A versatile component for user interactions with multiple variants and states.',
  examples: <NewComponentExample />,
  props: [
    {
      name: 'variant',
      type: "'primary' | 'secondary' | 'outline'",
      required: false,
      defaultValue: "'primary'",
      description: 'The visual style variant of the component'
    },
    {
      name: 'children',
      type: 'ReactNode',
      required: true,
      description: 'The content to display inside the component'
    },
    {
      name: 'onClick',
      type: '() => void',
      required: false,
      description: 'Callback function when component is clicked'
    }
  ]
}

registerComponent(newComponentDoc)
```

#### Step 3: Export from Library
```tsx
// src/index.ts
export { NewComponent } from './components/NewComponent'
export type { NewComponentProps } from './types'
```

### 📊 Documentation Structure

The documentation system includes:

- **Overview Section** - Library introduction and statistics
- **Component Navigation** - Sidebar with all available components
- **Component Pages** - Individual pages for each component featuring:
  - Component description
  - Interactive examples
  - Complete props table
  - Type definitions
  - Default values
  - Required/Optional status

### 🎨 Documentation Components

The system uses these internal components:

- `DocGenerator` - Main documentation generator
- `ComponentRegistry` - Automatic component registration system
- `EnhancedDocumentationPage` - Full-featured documentation page
- `DocumentationPage` - Simple documentation page

### 🔧 Advanced Usage

#### Custom Documentation Page
```tsx
import { DocGenerator, getAllComponents } from '@clear/ui'

function CustomDocs() {
  const components = getAllComponents()
  
  return (
    <DocGenerator 
      components={components}
      title="My Custom Documentation"
      description="Custom documentation for my project"
    />
  )
}
```

#### Get Specific Component Info
```tsx
import { getComponent } from '@clear/ui'

const buttonInfo = getComponent('Button')
console.log(buttonInfo?.props) // Array of button props
```

The component will automatically appear in the documentation page with examples, props table, and descriptions! The documentation system is designed to be maintainable and scalable as your component library grows.

## Development

```bash
npm install
npm run build
npm run dev
```

## License

MIT
