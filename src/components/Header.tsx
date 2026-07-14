import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { navItems } from '../data/site';
import type { Theme } from '../hooks/useTheme';
import { Logo } from './Logo';
import { ThemeToggle } from './ThemeToggle';

type HeaderProps = {
  theme: Theme;
  onToggleTheme: () => void;
};

export function Header({ theme, onToggleTheme }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-5">
      <div className="nav-shell mx-auto max-w-7xl">
        <Logo />

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <a href="#contato" className="button-primary hidden sm:inline-flex">
            Iniciar projeto
          </a>
          <button
            type="button"
            className="icon-button lg:hidden"
            onClick={() => setIsOpen((open) => !open)}
            aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <div className={`mobile-menu mx-auto max-w-7xl ${isOpen ? 'mobile-menu-open' : ''}`}>
        <nav className="grid gap-1 p-3" aria-label="Navegação mobile">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="mobile-link" onClick={() => setIsOpen(false)}>
              {item.label}
            </a>
          ))}
          <a href="#contato" className="button-primary mt-2 justify-center sm:hidden" onClick={() => setIsOpen(false)}>
            Iniciar projeto
          </a>
        </nav>
      </div>
    </header>
  );
}
