import { ArrowUp, ArrowUpRight, Instagram, Mail, Phone } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useLayoutEffect, useRef } from 'react';
import type { MouseEvent, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { company, navItems } from '../data/site';
import { useLanguage } from '../i18n/LanguageContext';
import { InfiniteLogoMarquee } from './InfiniteLogoMarquee';
import { Logo } from './Logo';

gsap.registerPlugin(ScrollTrigger);

type MagneticActionProps = {
  href: string;
  label: string;
  children: ReactNode;
  external?: boolean;
};

function MagneticAction({ href, label, children, external = false }: MagneticActionProps) {
  const actionRef = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = (event: MouseEvent<HTMLAnchorElement>) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const element = actionRef.current;
    if (!element) return;
    const bounds = element.getBoundingClientRect();
    const x = (event.clientX - bounds.left - bounds.width / 2) * 0.18;
    const y = (event.clientY - bounds.top - bounds.height / 2) * 0.24;
    gsap.to(element, { x, y, duration: 0.38, ease: 'power3.out', overwrite: true });
  };

  const handleMouseLeave = () => {
    if (!actionRef.current) return;
    gsap.to(actionRef.current, { x: 0, y: 0, duration: 0.72, ease: 'elastic.out(1, 0.38)', overwrite: true });
  };

  return (
    <a
      ref={actionRef}
      href={href}
      className="motion-footer-action"
      aria-label={label}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <span>{children}</span>
      <ArrowUpRight aria-hidden="true" />
    </a>
  );
}

type FooterProps = {
  refreshKey: number;
};

export function Footer({ refreshKey }: FooterProps) {
  const { language } = useLanguage();
  const footerRef = useRef<HTMLElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const auroraRef = useRef<HTMLDivElement>(null);
  const wordmarkRef = useRef<HTMLDivElement>(null);
  const labels: Record<string, string> = {
    '/sobre': 'About',
    '/solucoes': 'Solutions',
    '/Modelos': 'Projects',
    '/processo': 'Process',
    '/precos': 'Pricing',
  };
  const whatsappUrl = language === 'pt'
    ? company.whatsappUrl
    : `https://wa.me/5531999670890?text=${encodeURIComponent('Hello! I would like to request a quote.')}`;

  useLayoutEffect(() => {
    const footer = footerRef.current;
    const panel = panelRef.current;
    if (!footer || !panel) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.matchMedia('(max-width: 767px)').matches;

    if (reduceMotion || isMobile) {
      gsap.set([panel, wordmarkRef.current, auroraRef.current], { clearProps: 'all' });
      return;
    }

    const context = gsap.context(() => {
      gsap.fromTo(
        panel,
        { y: 130, clipPath: 'inset(16% 0 0 0 round 2.5rem)' },
        {
          y: 0,
          clipPath: 'inset(0% 0 0 0 round 2.5rem)',
          ease: 'none',
          scrollTrigger: {
            trigger: footer,
            start: 'top 96%',
            end: 'top 64%',
            scrub: 0.9,
            invalidateOnRefresh: true,
          },
        },
      );

      if (auroraRef.current) {
        gsap.fromTo(
          auroraRef.current,
          { scale: 0.82, rotate: -8, opacity: 0.45 },
          {
            scale: 1.12,
            rotate: 8,
            opacity: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: footer,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.2,
              invalidateOnRefresh: true,
            },
          },
        );
      }

      if (wordmarkRef.current) {
        gsap.fromTo(
          wordmarkRef.current,
          { yPercent: 42, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: wordmarkRef.current,
              start: 'top 94%',
              end: 'top 72%',
              scrub: 0.7,
              invalidateOnRefresh: true,
            },
          },
        );
      }
    }, footer);

    let cancelled = false;
    let outerFrame = 0;
    let innerFrame = 0;
    const scheduleRefresh = () => {
      window.cancelAnimationFrame(outerFrame);
      window.cancelAnimationFrame(innerFrame);
      outerFrame = window.requestAnimationFrame(() => {
        innerFrame = window.requestAnimationFrame(() => {
          if (!cancelled) ScrollTrigger.refresh();
        });
      });
    };

    const main = document.getElementById('conteudo');
    const layoutObserver = new ResizeObserver(scheduleRefresh);
    if (main) layoutObserver.observe(main);
    layoutObserver.observe(footer);

    scheduleRefresh();
    void document.fonts.ready.then(() => {
      if (!cancelled) scheduleRefresh();
    });

    return () => {
      cancelled = true;
      layoutObserver?.disconnect();
      window.cancelAnimationFrame(outerFrame);
      window.cancelAnimationFrame(innerFrame);
      context.revert();
    };
  }, []);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.matchMedia('(max-width: 767px)').matches;
    if (reduceMotion || isMobile) return;

    let innerFrame = 0;
    const outerFrame = window.requestAnimationFrame(() => {
      innerFrame = window.requestAnimationFrame(() => ScrollTrigger.refresh());
    });

    return () => {
      window.cancelAnimationFrame(outerFrame);
      window.cancelAnimationFrame(innerFrame);
    };
  }, [refreshKey]);

  return (
    <footer ref={footerRef} className="motion-footer">
      <div className="motion-footer-grid" aria-hidden="true" />
      <div ref={auroraRef} className="motion-footer-aurora" aria-hidden="true" />

      <div ref={panelRef} className="motion-footer-panel">
        <InfiniteLogoMarquee />

        <div className="container-site motion-footer-content">
          <div className="motion-footer-intro">
            <div>
              <p className="eyebrow">{language === 'pt' ? 'Próximo projeto' : 'Next project'}</p>
              <h2>
                {language === 'pt' ? 'Vamos criar o próximo' : 'Let’s create the next'}
                <span>{language === 'pt' ? 'movimento.' : 'move.'}</span>
              </h2>
            </div>
            <p>
              {language === 'pt'
                ? 'Software, automações e experiências digitais construídas com estratégia, qualidade e direção clara.'
                : 'Software, automation and digital experiences built with strategy, quality and clear direction.'}
            </p>
          </div>

          <div className="motion-footer-actions">
            <MagneticAction href={`mailto:${company.email}`} label={language === 'pt' ? 'Enviar e-mail' : 'Send email'}>
              <Mail aria-hidden="true" /> E-mail
            </MagneticAction>
            <MagneticAction href={whatsappUrl} label={language === 'pt' ? 'Conversar pelo WhatsApp' : 'Talk on WhatsApp'} external>
              <Phone aria-hidden="true" /> WhatsApp
            </MagneticAction>
            <MagneticAction href={company.instagramUrl} label="Instagram" external>
              <Instagram aria-hidden="true" /> Instagram
            </MagneticAction>
            <MagneticAction href="/#inicio" label={language === 'pt' ? 'Voltar ao topo' : 'Back to top'}>
              <ArrowUp aria-hidden="true" /> {language === 'pt' ? 'Topo' : 'Top'}
            </MagneticAction>
          </div>

          <div className="motion-footer-navigation">
            <Logo />
            <nav aria-label={language === 'pt' ? 'Navegação do rodapé' : 'Footer navigation'}>
              {navItems.map((item) => (
                <Link key={item.href} to={item.href}>
                  {language === 'pt' ? item.label : labels[item.href]}
                </Link>
              ))}
            </nav>
          </div>

          <div ref={wordmarkRef} className="motion-footer-wordmark" aria-hidden="true">
            North<span>Dev</span>
          </div>

          <div className="motion-footer-legal">
            <p>© 2026 North Dev. {language === 'pt' ? 'Todos os direitos reservados.' : 'All rights reserved.'}</p>
            <span>{language === 'pt' ? 'Brasil · remoto ou presencial' : 'Brazil · remote or in person'}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
