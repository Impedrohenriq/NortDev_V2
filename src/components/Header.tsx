import { Menu, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import type { MouseEvent as ReactMouseEvent } from 'react';
import { Link, NavLink } from 'react-router-dom';
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
  const [isScrolled, setIsScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstMobileLinkRef = useRef<HTMLAnchorElement>(null);
  const shouldFocusMenuRef = useRef(false);

  useEffect(() => {
    if (!isOpen) return;

    const focusFrame = shouldFocusMenuRef.current
      ? window.requestAnimationFrame(() => {
          firstMobileLinkRef.current?.focus({ preventScroll: true });
        })
      : undefined;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      if (focusFrame !== undefined) window.cancelAnimationFrame(focusFrame);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const handleMenuToggle = (event: ReactMouseEvent<HTMLButtonElement>) => {
    shouldFocusMenuRef.current = event.detail === 0;
    setIsOpen((open) => !open);
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`site-header ${isScrolled ? 'site-header-scrolled' : ''} ${isOpen ? 'site-header-menu-open' : ''}`}>
      <div className="nav-shell mx-auto max-w-7xl">
        <Logo />

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <Link to="/#contato" className="button-primary hidden sm:inline-flex">
            Iniciar projeto
          </Link>
          <button
            ref={menuButtonRef}
            type="button"
            className="icon-button lg:hidden"
            onClick={handleMenuToggle}
            aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-haspopup="menu"
          >
            {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div id="mobile-navigation" className="mobile-menu mobile-menu-open mx-auto max-w-7xl">
          <nav className="grid gap-1 p-3" aria-label="Navegação mobile">
            {navItems.map((item, index) => (
              <NavLink
                ref={index === 0 ? firstMobileLinkRef : undefined}
                key={item.href}
                to={item.href}
                className={({ isActive }) => `mobile-link ${isActive ? 'mobile-link-active' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
            <Link to="/#contato" className="button-primary mt-2 justify-center sm:hidden" onClick={() => setIsOpen(false)}>
              Iniciar projeto
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
