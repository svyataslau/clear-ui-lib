import React, { createContext, useContext, type ReactNode } from 'react';

export interface ThemeConfig {
  accentColor: string;
  accentColorLight: string;
  accentColorDark: string;
}

const defaultTheme: ThemeConfig = {
  accentColor: '#a855f7', // purple-500
  accentColorLight: '#d8b4fe', // purple-300
  accentColorDark: '#7c3aed', // purple-700
};

interface ThemeContextType {
  theme: ThemeConfig;
  setTheme: (theme: Partial<ThemeConfig>) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
  initialTheme?: Partial<ThemeConfig>;
}

export function ThemeProvider({ children, initialTheme = {} }: ThemeProviderProps) {
  const [theme, setThemeState] = React.useState<ThemeConfig>({
    ...defaultTheme,
    ...initialTheme,
  });

  const setTheme = React.useCallback((newTheme: Partial<ThemeConfig>) => {
    setThemeState((prev) => ({ ...prev, ...newTheme }));
  }, []);

  // Initialize CSS variables on mount and sync theme to CSS variables
  React.useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--accent-color', theme.accentColor);
    root.style.setProperty('--accent-color-light', theme.accentColorLight);
    root.style.setProperty('--accent-color-dark', theme.accentColorDark);
    
    console.log('🎨 Theme CSS variables updated:', {
      '--accent-color': theme.accentColor,
      '--accent-color-light': theme.accentColorLight,
      '--accent-color-dark': theme.accentColorDark,
    });

    // Force re-render by updating a data attribute
    root.setAttribute('data-theme-accent', theme.accentColor);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

export { defaultTheme };
