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
- `npm run build:prod` - Build for production (minified)
- `npm run test` - Run tests in watch mode
- `npm run test:run` - Run tests once
- `npm run test:coverage` - Run tests with coverage
- `npm run lint` - Run linting
- `npm run format` - Format code
- `npm run type-check` - Run TypeScript type checking
- `npm run demo` - Start demo application

### Adding New Components

1. Create a new component in `src/components/ComponentName/`
2. Create the following files:
   - `ComponentName.tsx` - Main component
   - `ComponentName.test.tsx` - Tests
   - `index.ts` - Export file
3. Add types to `src/types/index.ts`
4. Export the component in `src/index.ts`
5. Add tests and documentation

### Component Structure

```tsx
// ComponentName.tsx
import type { ComponentNameProps } from '../../types';
import { cn } from '../../utils/classNames';

export function ComponentName({
  children,
  className,
  ...props
}: ComponentNameProps) {
  return (
    <div className={cn('base-classes', className)} {...props}>
      {children}
    </div>
  );
}
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
