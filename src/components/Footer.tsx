import { ArrowUp, Github, Linkedin } from 'lucide-react';
import { navItems } from '../data/site';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="container-site py-8 sm:py-10">
      <div className="flex flex-col gap-8 border-t border-line pt-8 md:flex-row md:items-end md:justify-between">
        <div>
          <Logo />
          <p className="mt-4 max-w-sm text-sm leading-6 text-muted">Software, automações e SaaS com estratégia, qualidade e direção clara.</p>
        </div>
        <nav className="flex flex-wrap gap-x-5 gap-y-2" aria-label="Navegação do rodapé">
          {navItems.map((item) => <a key={item.href} href={item.href} className="nav-link">{item.label}</a>)}
        </nav>
      </div>
      <div className="mt-8 flex flex-col gap-4 border-t border-line pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 North Dev. Todos os direitos reservados.</p>
        <div className="flex items-center gap-3">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="footer-icon" aria-label="GitHub"><Github /></a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="footer-icon" aria-label="LinkedIn"><Linkedin /></a>
          <a href="#inicio" className="footer-icon ml-2" aria-label="Voltar ao topo"><ArrowUp /></a>
        </div>
      </div>
    </footer>
  );
}
