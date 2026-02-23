import { createContext, useState, useEffect, type ReactNode } from 'react';
import type { ThemeName } from '../types';

interface ThemeContextValue {
    theme: ThemeName;
    setTheme: (theme: ThemeName) => void;
}

const STORAGE_KEY = 'portfolio-theme';
const DEFAULT_THEME: ThemeName = 'dark';

export const ThemeContext = createContext<ThemeContextValue>({
    theme: DEFAULT_THEME,
    setTheme: () => {},
});

function getStoredTheme(): ThemeName {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && ['dark', 'light', 'midnight', 'terminal', 'paper'].includes(stored)) {
        return stored as ThemeName;
    }
    return DEFAULT_THEME;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setThemeState] = useState<ThemeName>(getStoredTheme);

    const setTheme = (newTheme: ThemeName) => {
        setThemeState(newTheme);
        localStorage.setItem(STORAGE_KEY, newTheme);
    };

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}
