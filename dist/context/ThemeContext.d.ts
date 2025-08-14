import { ReactNode } from 'react';
export interface ThemeConfig {
    accentColor: string;
    accentColorLight: string;
    accentColorDark: string;
}
declare const defaultTheme: ThemeConfig;
interface ThemeContextType {
    theme: ThemeConfig;
    setTheme: (theme: Partial<ThemeConfig>) => void;
}
interface ThemeProviderProps {
    children: ReactNode;
    initialTheme?: Partial<ThemeConfig>;
}
export declare function ThemeProvider({ children, initialTheme }: ThemeProviderProps): import("react/jsx-runtime").JSX.Element;
export declare function useTheme(): ThemeContextType;
export { defaultTheme };
//# sourceMappingURL=ThemeContext.d.ts.map