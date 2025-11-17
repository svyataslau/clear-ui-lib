# @clear/ui Storybook

A modern, interactive storybook for the @clear/ui component library, built with React, TypeScript, Vite, and Tailwind CSS.

## Features

- **Storybook-like Interface**: Browse components in an organized, interactive way
- **Component Examples**: See all variants, sizes, and states of each component
- **Interactive Demos**: Test component functionality in real-time
- **Responsive Design**: Works on desktop and mobile devices
- **Modern Tech Stack**: Built with React 18, TypeScript, Vite, and Tailwind CSS

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:3000`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run linting
- `npm run format` - Format code

## Project Structure

```
storybook/
├── src/
│   ├── components/
│   │   ├── stories/          # Component story files
│   │   ├── ComponentStories.tsx
│   │   └── Sidebar.tsx
│   ├── styles/
│   │   └── index.css         # Local Tailwind config (storybook-specific)
│   ├── App.tsx               # Main application
│   └── main.tsx              # Entry point (imports ../src/styles/index.css)
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## Architecture

Storybook uses styles directly from the library source (`../src/styles/index.css`) - **единый источник истины**.
This means any changes to component styles are immediately visible in Storybook without rebuilding.

## Components Available

- **Button** - Various variants, sizes, and states
- **Input** - Text inputs with different types and states
- **Card** - Container components with different styles
- **Avatar** - User profile images with fallbacks
- **Typography** - Text components with different styles
- **Modal** - Dialog components with different sizes
- **Navbar** - Navigation components
- **Switch** - Toggle switches
- **Textarea** - Multi-line text inputs

## Customization

The demo app uses the same Tailwind configuration as the main library, ensuring consistency. You can customize the appearance by modifying:

- `src/styles/index.css` - Global styles and custom CSS
- `tailwind.config.js` - Tailwind configuration
- Individual story files in `src/components/stories/`

## Contributing

When adding new components to the library, don't forget to:

1. Add the component to the sidebar in `src/components/Sidebar.tsx`
2. Create a story file in `src/components/stories/`
3. Import and add the story to `src/components/ComponentStories.tsx`
