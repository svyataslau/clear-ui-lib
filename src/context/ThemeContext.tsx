import React, { createContext, useContext, ReactNode } from 'react';

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
    setThemeState(prev => ({ ...prev, ...newTheme }));
  }, []);

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
