import { Github, Linkedin } from 'lucide-react';
import { useState } from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  const [logoFailed, setLogoFailed] = useState(false);

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <a className={styles.brand} href="#top" aria-label="North Dev - voltar ao topo">
          {logoFailed ? (
            <span className={styles.brandText}>North.Dev</span>
          ) : (
            <img
              src="/logo_northDev.png"
              alt="North Dev"
              className={styles.logo}
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = '/logo-north-dev.svg';
                e.currentTarget.addEventListener('error', () => setLogoFailed(true));
              }}
            />
          )}
        </a>

        <p className={styles.tagline}>Build. Automate. Scale. North.</p>
        <div className={styles.socialLinks} aria-label="Redes sociais">
          <a className={styles.socialLink} href="https://github.com" target="_blank" rel="noreferrer">
            <Github size={16} />
            GitHub
          </a>
          <a className={styles.socialLink} href="https://linkedin.com" target="_blank" rel="noreferrer">
            <Linkedin size={16} />
            LinkedIn
          </a>
        </div>

        <p className={styles.copy}>© 2026 North Dev. Software, automações e SaaS com direção clara.</p>
      </div>
    </footer>
  );
}
