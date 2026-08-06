import { ArrowUpRight, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { company } from '../data/site';
import { useLanguage } from '../i18n/LanguageContext';

export function Contact() {
  const reduceMotion = useReducedMotion();
  const { language } = useLanguage();
  const whatsappUrl = language === 'pt'
    ? company.whatsappUrl
    : `https://wa.me/5531999670890?text=${encodeURIComponent('Hello! I would like to request a quote.')}`;

  return (
    <section id="contato" className="section-space pb-6 sm:pb-8">
      <div className="container-site">
        <motion.div
          className="contact-panel"
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: reduceMotion ? 0 : 0.62, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="contact-circuit" aria-hidden="true" />
          <div className="contact-copy lg:flex lg:items-end lg:justify-between lg:gap-16">
            <div>
              <p className="eyebrow">{language === 'pt' ? 'Próximo movimento' : 'Next move'}</p>
              <h2 className="contact-title mt-4 max-w-3xl text-4xl font-bold leading-[1.02] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                {language === 'pt' ? 'Vamos construir algo que faça diferença.' : 'Let’s build something that makes a difference.'}
              </h2>
              <p className="contact-description mt-5 max-w-2xl leading-7">
                {language === 'pt'
                  ? 'Conte brevemente o contexto, o objetivo e o prazo desejado. A resposta volta com um caminho claro para o próximo passo.'
                  : 'Briefly share the context, goal and desired timeline. We will reply with a clear path to the next step.'}
              </p>
            </div>

            <div className="contact-details mt-10 grid shrink-0 gap-3 text-sm lg:mt-0 lg:min-w-80">
              <a href={`mailto:${company.email}`} className="contact-item"><Mail /> {company.email}</a>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="contact-item"><Phone /> {company.phone}</a>
              <a href={company.instagramUrl} target="_blank" rel="noreferrer" className="contact-item"><Instagram /> @northdeveloper</a>
              <span className="contact-item"><MapPin /> {language === 'pt' ? company.location : 'Brazil · remote or in person'}</span>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="button-primary mt-2 justify-center">
                {language === 'pt' ? 'Pedir orçamento no WhatsApp' : 'Request a quote on WhatsApp'} <ArrowUpRight className="size-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
