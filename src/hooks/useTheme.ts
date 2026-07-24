import { startTransition, useCallback, useEffect, useRef, useState } from 'react';

export type Theme = 'dark' | 'light';

const storageKey = 'northdev-theme';

function getInitialTheme(): Theme {
  const stored = localStorage.getItem(storageKey) as Theme | null;
  if (stored === 'dark' || stored === 'light') return stored;
  return 'dark';
}

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle('dark', theme === 'dark');
  document.documentElement.style.colorScheme = theme;
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#05070c' : '#edf3fa');
  localStorage.setItem(storageKey, theme);
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const themeRef = useRef(theme);
  const transitionTimerRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    applyTheme(theme);
    themeRef.current = theme;
  }, [theme]);

  useEffect(() => () => window.clearTimeout(transitionTimerRef.current), []);

  const toggleTheme = useCallback(() => {
    const nextTheme: Theme = themeRef.current === 'dark' ? 'light' : 'dark';
    themeRef.current = nextTheme;

    document.documentElement.classList.add('theme-changing');
    applyTheme(nextTheme);

    window.clearTimeout(transitionTimerRef.current);
    transitionTimerRef.current = window.setTimeout(() => {
      document.documentElement.classList.remove('theme-changing');
    }, 900);

    startTransition(() => setTheme(nextTheme));
  }, []);

  return {
    theme,
    toggleTheme,
  };
}
