import { ChevronDown, Menu, X } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import type { MouseEvent as ReactMouseEvent, RefObject } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { navItems } from '../data/site';
import type { Theme } from '../hooks/useTheme';
import { Logo } from './Logo';
import { NavDropdown } from './NavDropdown';
import { ThemeToggle } from './ThemeToggle';
import { LanguageToggle } from './LanguageToggle';
import { useLanguage } from '../i18n/LanguageContext';

type HeaderProps = {
  theme: Theme;
  onToggleTheme: () => void;
};

const englishLabels: Record<string, string> = {
  '/sobre': 'About',
  '/solucoes': 'Solutions',
  '/modelos': 'Projects',
  '/processo': 'Process',
  '/precos': 'Pricing',
};

export function Header({ theme, onToggleTheme }: HeaderProps) {
  const { language } = useLanguage();
  const location = useLocation();
  const reduceMotion = useReducedMotion();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstMobileLinkRef = useRef<HTMLElement | null>(null);
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

  useEffect(() => {
    setIsOpen(false);
    setExpandedMobile(null);
  }, [location.pathname]);

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

  const closeMobile = () => setIsOpen(false);

  return (
    <motion.header
      className={`site-header ${isScrolled ? 'site-header-scrolled' : ''} ${isOpen ? 'site-header-menu-open' : ''}`}
      initial={reduceMotion ? false : { opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: reduceMotion ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="nav-shell mx-auto max-w-7xl">
        <Logo />

        <nav className="hidden items-center gap-7 lg:flex" aria-label={language === 'pt' ? 'Navegação principal' : 'Main navigation'}>
          {navItems.map((item) => {
            if (item.children && item.children.length > 0) {
              return <NavDropdown key={item.href} item={item} />;
            }
            return (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}
              >
                {language === 'pt' ? item.label : englishLabels[item.href] ?? item.label}
              </NavLink>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageToggle />
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <Link to="/#contato" className="button-primary hidden sm:inline-flex">
            {language === 'pt' ? 'Iniciar projeto' : 'Start a project'}
          </Link>
          <button
            ref={menuButtonRef}
            type="button"
            className="icon-button lg:hidden"
            onClick={handleMenuToggle}
            aria-label={isOpen ? (language === 'pt' ? 'Fechar menu' : 'Close menu') : (language === 'pt' ? 'Abrir menu' : 'Open menu')}
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
          <nav className="grid gap-1 p-3" aria-label={language === 'pt' ? 'Navegação mobile' : 'Mobile navigation'}>
            {navItems.map((item, index) => {
              if (item.children && item.children.length > 0) {
                const expanded = expandedMobile === item.href;
                return (
                  <div key={item.href}>
                    <button
                      ref={index === 0 ? (firstMobileLinkRef as RefObject<HTMLButtonElement>) : undefined}
                      type="button"
                      className="mobile-accordion-toggle"
                      aria-expanded={expanded}
                      aria-controls={`mobile-submenu-${item.href}`}
                      onClick={() => setExpandedMobile(expanded ? null : item.href)}
                    >
                      <span>{language === 'pt' ? item.label : englishLabels[item.href] ?? item.label}</span>
                      <ChevronDown className="size-4" aria-hidden="true" />
                    </button>
                    <AnimatePresence initial={false}>
                      {expanded && (
                        <motion.div
                          key="submenu"
                          id={`mobile-submenu-${item.href}`}
                          initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
                          transition={{ duration: reduceMotion ? 0 : 0.22, ease: [0.22, 1, 0.36, 1] }}
                          style={{ overflow: 'hidden' }}
                        >
                          <div className="mobile-submenu">
                            <NavLink
                              to={item.href}
                              className={({ isActive }) => `mobile-link ${isActive ? 'mobile-link-active' : ''}`}
                              onClick={closeMobile}
                            >
                              {language === 'pt' ? 'Visão geral' : 'Overview'}
                            </NavLink>
                            {item.children.map((child) => (
                              <NavLink
                                key={child.href}
                                to={child.href}
                                className={({ isActive }) => `mobile-link ${isActive ? 'mobile-link-active' : ''}`}
                                onClick={closeMobile}
                              >
                                {language === 'pt' ? child.label : child.labelEn}
                              </NavLink>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }
              return (
                <NavLink
                  ref={index === 0 ? (firstMobileLinkRef as RefObject<HTMLAnchorElement>) : undefined}
                  key={item.href}
                  to={item.href}
                  className={({ isActive }) => `mobile-link ${isActive ? 'mobile-link-active' : ''}`}
                  onClick={closeMobile}
                >
                  {language === 'pt' ? item.label : englishLabels[item.href] ?? item.label}
                </NavLink>
              );
            })}
            <Link to="/#contato" className="button-primary mt-2 justify-center sm:hidden" onClick={closeMobile}>
              {language === 'pt' ? 'Iniciar projeto' : 'Start a project'}
            </Link>
          </nav>
        </div>
      )}
    </motion.header>
  );
}
