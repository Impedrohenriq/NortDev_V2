import { ChevronDown } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import type { NavItem } from '../types/site';

type NavDropdownProps = {
  item: NavItem;
};

export function NavDropdown({ item }: NavDropdownProps) {
  const { language } = useLanguage();
  const location = useLocation();
  const reduceMotion = useReducedMotion();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const closeTimerRef = useRef<number | null>(null);
  const children = item.children ?? [];
  const labelPtEn: Record<string, string> = {
    '/sobre': 'About',
    '/solucoes': 'Solutions',
    '/modelos': 'Projects',
    '/processo': 'Process',
    '/precos': 'Pricing',
  };
  const isActive = location.pathname === item.href || location.pathname.startsWith('/projetos');

  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) setIsOpen(false);
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const scheduleClose = () => {
    if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current);
    closeTimerRef.current = window.setTimeout(() => setIsOpen(false), 140);
  };

  const cancelScheduledClose = () => {
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const openNow = () => {
    cancelScheduledClose();
    setIsOpen(true);
  };

  return (
    <div
      ref={containerRef}
      className="nav-dropdown"
      onMouseEnter={openNow}
      onMouseLeave={scheduleClose}
      onFocus={openNow}
      onBlur={(event) => {
        if (!containerRef.current?.contains(event.relatedTarget as Node)) scheduleClose();
      }}
    >
      <div className="nav-dropdown-trigger">
        <NavLink
          to={item.href}
          className={`nav-link ${isActive ? 'nav-link-active' : ''}`}
        >
          {language === 'pt' ? item.label : labelPtEn[item.href] ?? item.label}
        </NavLink>
        <button
          type="button"
          className={`nav-dropdown-chevron ${isOpen ? 'is-open' : ''}`}
          aria-label={language === 'pt' ? 'Abrir submenu' : 'Open submenu'}
          aria-expanded={isOpen}
          aria-haspopup="menu"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <ChevronDown className="size-4" aria-hidden="true" />
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            role="menu"
            className="nav-dropdown-panel"
            initial={reduceMotion ? false : { opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: reduceMotion ? 0 : 0.18, ease: [0.22, 1, 0.36, 1] }}
          >
            {children.map((child) => (
              <NavLink
                key={child.href}
                to={child.href}
                role="menuitem"
                className={({ isActive: linkActive }) => `nav-dropdown-item ${linkActive ? 'is-active' : ''}`}
              >
                <strong>{language === 'pt' ? child.label : child.labelEn}</strong>
                {child.description && (
                  <span>{language === 'pt' ? child.description : child.descriptionEn}</span>
                )}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
