# @clear/ui Styles

The `@clear/ui` library includes a complete set of styles for neumorphic design.

## Style Import

```tsx
import '@clear/ui/styles';
```

## Available Styles

### Tailwind CSS Directives
- `@tailwind base`
- `@tailwind components` 
- `@tailwind utilities`

### Font Family
By default, `'Courier New', Courier, monospace` is used for all elements.

### Neumorphic Background Colors

```css
.bg-neumorphism-background  /* rgb(236 240 243) */
.bg-neumorphism-classic     /* #f0f0f3 */
```

### Neumorphic Shadow Styles

```css
.shadow-neumorphism         /* Main shadow */
.shadow-neumorphism-inset   /* Inset shadow */
.shadow-neumorphism-pressed /* Pressed shadow */
.shadow-neumorphism-card    /* Card shadow */
.shadow-neumorphism-input   /* Input shadow */
.shadow-neumorphism-convex  /* Convex shadow */
.shadow-neumorphism-concave /* Concave shadow */
```

### Custom Component Styles

#### Input Styles
```css
.input {
  max-width: 200px;
  min-height: 40px;
  padding: 10px;
  font-family: 'Courier New', Courier, monospace;
  outline: none;
  background: rgb(236 240 243);
  box-shadow: 6px 6px 4px #d1d9e6, -6px -6px 4px #ffffff;
  border: none;
  border-radius: 10px;
  transition: all 0.5s;
}
```

#### Card Styles
```css
.card {
  width: 190px;
  height: 254px;
  border-radius: 30px;
  background: #e0e0e0;
  box-shadow: 6px 6px 5px #bebebe, -6px -6px 5px #ffffff;
}
```

#### Switch Component Styles
Complete set of styles for the Switch component including:
- `.switch-container`
- `.toggle-checkbox`
- `.switch`
- `.toggle`
- `.led`
- `:checked` and `:hover` states

#### Gradient Button Styles
```css
.cssbuttons-io {
  /* Gradient button with animation */
}
```

## Usage in Project

### 1. Installation
```bash
npm install @clear/ui
```

### 2. Import Styles in Main File
```tsx
// App.tsx or main.tsx
import '@clear/ui/styles';
import { Input, Button, Card } from '@clear/ui';

function App() {
  return (
    <div className="bg-neumorphism-background min-h-screen p-8">
      <Card className="shadow-neumorphism-card">
        <Input className="shadow-neumorphism-input" />
        <Button className="cssbuttons-io">Click me</Button>
      </Card>
    </div>
  );
}
```

### 3. Tailwind CSS Configuration (if needed)

If you want to use only styles without Tailwind, make sure PostCSS is configured:

```js
// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

## Customization

All styles can be overridden in your project:

```css
/* Your custom styles */
.bg-neumorphism-background {
  background: #your-custom-color;
}

.shadow-neumorphism {
  box-shadow: your-custom-shadow;
}
```

## Compatibility

- ✅ React 16+
- ✅ TypeScript
- ✅ Tailwind CSS 3.x
- ✅ PostCSS
- ✅ Vite
- ✅ Webpack
- ✅ Create React App
