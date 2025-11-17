# Contributing to Clear UI

Thank you for your interest in contributing to Clear UI! This document provides guidelines and information for contributors.

## Getting Started

### Prerequisites

- Node.js 18+
- npm 8+
- Git

### Setup

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/your-username/ui-library.git
   cd ui-library
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## Development

### Available Scripts

- `npm run dev` - Start development server with watch mode
- `npm run build` - Build the library
- `npm run test` - Run tests in watch mode
- `npm run test:run` - Run tests once
- `npm run lint` - Run linting
- `npm run format` - Format code
- `npm run type-check` - Run TypeScript type checking
- `npm run storybook` - Start component storybook/playground
- `npm run clean` - Remove build artifacts

### Adding New Components

1. Create a new component folder in `src/components/ComponentName/`
2. Create the following files:
   - `ComponentName.tsx` - Main component
   - `ComponentName.types.ts` - TypeScript types and interfaces
   - `ComponentName.test.tsx` - Tests
   - `index.ts` - Barrel export file
3. Export the component from `src/components/index.ts`
4. Add tests and documentation
5. Add a story in `demo-app/src/components/stories/` for the storybook

### Component Structure

```tsx
// ComponentName.types.ts
import type { ReactNode, HTMLAttributes } from 'react';

export interface ComponentNameProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

// ComponentName.tsx
import { clsx } from 'clsx';
import type { ComponentNameProps } from './ComponentName.types';

export function ComponentName({
  children,
  variant = 'primary',
  size = 'md',
  className,
  ...props
}: ComponentNameProps) {
  return (
    <div 
      className={clsx('base-classes', `variant-${variant}`, `size-${size}`, className)} 
      {...props}
    >
      {children}
    </div>
  );
}

// index.ts
export { ComponentName } from './ComponentName';
export type { ComponentNameProps } from './ComponentName.types';
```

### Testing

- Write unit tests for all components
- Use React Testing Library
- Test accessibility features
- Test different variants and states

### Code Style

- Use TypeScript for all code
- Follow the existing code style
- Use functional components
- Prefer named exports
- Add JSDoc comments for complex functions

## Pull Request Process

1. Ensure your code follows the project's style guidelines
2. Run all tests and ensure they pass
3. Update documentation if needed
4. Add a descriptive commit message
5. Create a pull request with a clear description

### Commit Message Format

```
type(scope): description

[optional body]

[optional footer]
```

Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes
- `refactor`: Code refactoring
- `test`: Test changes
- `chore`: Build or tool changes

## Issues

### Reporting Bugs

When reporting bugs, please include:

- Clear description of the issue
- Steps to reproduce
- Expected behavior
- Actual behavior
- Browser/OS information
- Code examples if applicable

### Feature Requests

When requesting features, please include:

- Clear description of the feature
- Use cases
- Mockups or examples if applicable
- Priority level

## Code of Conduct

- Be respectful and inclusive
- Focus on the code, not the person
- Help others learn and grow
- Be open to feedback and suggestions

## License

By contributing to Clear UI, you agree that your contributions will be licensed under the MIT License.
