import { useState, useRef, useEffect } from 'react';
import { useTheme } from '../../hooks/useTheme';
import type { ThemeName } from '../../types';

const themes: { name: ThemeName; label: string }[] = [
    { name: 'dark',     label: 'Dark' },
    { name: 'light',    label: 'Light' },
    { name: 'midnight', label: 'Midnight' },
    { name: 'terminal', label: 'Terminal' },
    { name: 'leaf',     label: 'Leaf' },
];

function ThemeSelector() {
    const { theme, setTheme } = useTheme();
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    useEffect(() => {
        function handleEscape(e: KeyboardEvent) {
            if (e.key === 'Escape') setOpen(false);
        }

        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, []);

    const currentLabel = themes.find(t => t.name === theme)?.label ?? 'Dark';

    return (
        <div className="theme-selector" ref={ref}>
            <button
                className="theme-selector__trigger"
                onClick={() => setOpen(!open)}
                aria-expanded={open}
                aria-haspopup="listbox"
            >
                <span className={`theme-selector__swatch theme-selector__swatch--${theme}`} />
                {currentLabel}
            </button>

            <div
                className={`theme-selector__dropdown ${open ? 'theme-selector__dropdown--open' : ''}`}
                role="listbox"
                aria-label="Select theme"
            >
                {themes.map(t => (
                    <button
                        key={t.name}
                        className={`theme-selector__option ${theme === t.name ? 'theme-selector__option--active' : ''}`}
                        role="option"
                        aria-selected={theme === t.name}
                        onClick={() => {
                            setTheme(t.name);
                            setOpen(false);
                        }}
                    >
                        <span className={`theme-selector__swatch theme-selector__swatch--${t.name}`} />
                        {t.label}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default ThemeSelector;
