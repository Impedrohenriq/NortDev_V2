import { Moon, Sun } from 'lucide-react';
import type { Theme } from '../hooks/useTheme';
import { useLanguage } from '../i18n/LanguageContext';

type ThemeToggleProps = {
  theme: Theme;
  onToggle: () => void;
};

export function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  const isDark = theme === 'dark';
  const { language } = useLanguage();
  const label = language === 'pt'
    ? (isDark ? 'Ativar tema claro' : 'Ativar tema escuro')
    : (isDark ? 'Activate light theme' : 'Activate dark theme');

  return (
    <button
      type="button"
      className="icon-button"
      onClick={onToggle}
      aria-label={label}
      title={label}
    >
      <Sun aria-hidden="true" className={`absolute size-4 transition-[opacity,transform] duration-150 ${isDark ? 'scale-100 rotate-0 opacity-100' : 'scale-0 rotate-90 opacity-0'}`} />
      <Moon aria-hidden="true" className={`absolute size-4 transition-[opacity,transform] duration-150 ${isDark ? 'scale-0 -rotate-90 opacity-0' : 'scale-100 rotate-0 opacity-100'}`} />
    </button>
  );
}
