import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { whatsappLink, whatsappMessages, whatsappTopicForPath } from '../data/site';
import { useLanguage } from '../i18n/LanguageContext';

/** Distância rolada (px) a partir da qual o CTA passa a aparecer. */
const SHOW_AFTER_SCROLL = 480;

/**
 * CTA persistente para telas pequenas (< 640 px), onde o botão do header fica
 * dentro do menu. Aparece depois do topo da página e sai de cena quando a seção
 * de contato entra na tela, para não cobrir o conteúdo nem os botões do rodapé.
 */
export function FloatingCta() {
  const { language } = useLanguage();
  const { pathname } = useLocation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const contact = document.getElementById('contato');
      const contactInView = contact ? contact.getBoundingClientRect().top < window.innerHeight : false;
      setVisible(window.scrollY > SHOW_AFTER_SCROLL && !contactInView);
    };
    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    schedule();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    };
  }, [pathname]);

  const message = whatsappMessages[whatsappTopicForPath(pathname)][language];
  const label = language === 'pt' ? 'Pedir orçamento' : 'Request a quote';

  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noreferrer"
      className={`floating-cta ${visible ? 'is-visible' : ''}`}
      aria-label={language === 'pt' ? 'Pedir orçamento pelo WhatsApp' : 'Request a quote on WhatsApp'}
    >
      <MessageCircle aria-hidden="true" />
      <span>{label}</span>
      <ArrowUpRight aria-hidden="true" />
    </a>
  );
}
