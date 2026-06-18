import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';

const links = [
  { label: 'Sobre', href: '#about' },
  { label: 'Projetos', href: '#projects' },
  { label: 'Contato', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [logoFailed, setLogoFailed] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <a className={styles.brand} href="#top" aria-label="North Dev - início">
          {logoFailed ? (
            <span className={styles.brandText}>North.Dev</span>
          ) : (
            <img
              src="/logo-north-dev.svg"
              alt="North Dev"
              className={styles.logo}
              onError={() => setLogoFailed(true)}
            />
          )}
        </a>

        <nav className={styles.desktopNav} aria-label="Navegação principal">
          <div className={styles.links}>
            {links.map((link) => (
              <a key={link.href} className={styles.link} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
          <a className="btn-primary" href="#contact">
            Agendar conversa
          </a>
        </nav>

        <button
          type="button"
          className={styles.menuButton}
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div className={`${styles.mobilePanel} ${isOpen ? styles.mobilePanelOpen : ''}`}>
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <a key={link.href} className={styles.mobileLink} href={link.href} onClick={handleLinkClick}>
              {link.label}
            </a>
          ))}
          <a className={`btn-primary ${styles.mobileCta}`} href="#contact" onClick={handleLinkClick}>
            Agendar conversa
          </a>
        </div>
      </div>
    </header>
  );
}
