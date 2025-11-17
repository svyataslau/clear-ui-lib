// Component exports
export * from './components';

// Context and theme exports
export { ThemeProvider, useTheme, defaultTheme } from './context/ThemeContext';
export type { ThemeConfig } from './context/ThemeContext';

// Documentation exports (for advanced usage)
export type { ComponentDoc } from './docs';
export {
  componentDocs,
  DocGenerator,
  getAllComponents,
  getComponent,
  registerComponent,
} from './docs';

// Common types re-export for convenience
export type { BaseComponentProps, Size, Variant, Color } from './types';

// Styles - automatically imported when using the library
import './styles/index.css';

// Re-export styles for manual import
export * from './styles';


