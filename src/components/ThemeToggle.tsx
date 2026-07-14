import { Moon, Sun } from 'lucide-react';
import type { Theme } from '../hooks/useTheme';

type ThemeToggleProps = {
  theme: Theme;
  onToggle: () => void;
};

export function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      className="icon-button"
      onClick={onToggle}
      aria-label={isDark ? 'Ativar tema claro' : 'Ativar tema escuro'}
      title={isDark ? 'Tema claro' : 'Tema escuro'}
    >
      <Sun aria-hidden="true" className={`absolute size-4 transition-all ${isDark ? 'scale-100 rotate-0' : 'scale-0 rotate-90'}`} />
      <Moon aria-hidden="true" className={`absolute size-4 transition-all ${isDark ? 'scale-0 -rotate-90' : 'scale-100 rotate-0'}`} />
    </button>
  );
}
