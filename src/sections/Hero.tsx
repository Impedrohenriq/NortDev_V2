import { ArrowDownRight, ArrowRight, Bot, Braces, Network, Sparkles } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { Link } from 'react-router-dom';
import { StarfallBackground } from '../components/StarfallBackground';
import { useLanguage } from '../i18n/LanguageContext';

const heroContent = {
  pt: {
    badge: 'Software com estratégia e direção',
    title: 'Ideias fortes.',
    highlight: 'Produtos que avançam.',
    copy: 'Criamos software, automações e experiências digitais sob medida para transformar desafios complexos em produtos claros, rápidos e prontos para crescer.',
    primary: 'Falar sobre seu projeto',
    secondary: 'Conhecer Modelos',
    capabilities: [
      ['BUILD', 'Software sólido'],
      ['AUTOMATE', 'Fluxos inteligentes'],
      ['SCALE', 'Sistemas conectados'],
    ],
    metrics: [
      ['+20', 'Modelos desenvolvidos'],
      ['24h', 'Tempo médio de resposta'],
      ['100%', 'Soluções personalizadas'],
    ],
    scroll: 'Explore',
  },
  en: {
    badge: 'Software with strategy and direction',
    title: 'Strong ideas.',
    highlight: 'Products that move forward.',
    copy: 'We create custom software, automation and digital experiences to turn complex challenges into clear, fast products ready to grow.',
    primary: 'Talk about your project',
    secondary: 'Explore projects',
    capabilities: [
      ['BUILD', 'Solid software'],
      ['AUTOMATE', 'Smart workflows'],
      ['SCALE', 'Connected systems'],
    ],
    metrics: [
      ['+20', 'Projects developed'],
      ['24h', 'Average response time'],
      ['100%', 'Custom solutions'],
    ],
    scroll: 'Explore',
  },
};

const icons = [Braces, Bot, Network];

export function Hero() {
  const reduceMotion = useReducedMotion();
  const { language } = useLanguage();
  const content = heroContent[language];
  const itemVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="inicio" className="starfall-hero">
      <StarfallBackground />
      <div className="starfall-noise" aria-hidden="true" />
      <div className="starfall-orbit starfall-orbit-one" aria-hidden="true" />
      <div className="starfall-orbit starfall-orbit-two" aria-hidden="true" />

      <div className="container-site starfall-hero-shell">
        <motion.div
          className="starfall-copy"
          initial={reduceMotion ? false : 'hidden'}
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { delayChildren: 0.12, staggerChildren: 0.09 } },
          }}
        >
          <motion.div className="starfall-badge" variants={itemVariants}>
            <Sparkles aria-hidden="true" />
            {content.badge}
          </motion.div>

          <motion.h1 className="starfall-title" variants={itemVariants}>
            {content.title}
            <span>{content.highlight}</span>
          </motion.h1>

          <motion.p className="starfall-description" variants={itemVariants}>{content.copy}</motion.p>

          <motion.div className="starfall-actions" variants={itemVariants}>
            <Link to="/#contato" className="starfall-button starfall-button-primary">
              {content.primary}
              <ArrowRight aria-hidden="true" />
            </Link>
            <Link to="/modelos" className="starfall-button starfall-button-secondary">
              {content.secondary}
              <ArrowDownRight aria-hidden="true" />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="starfall-capabilities"
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.75, delay: reduceMotion ? 0 : 0.48 }}
        >
          {content.capabilities.map(([label, title], index) => {
            const Icon = icons[index];
            return (
              <div className="starfall-capability" key={label}>
                <span><Icon aria-hidden="true" /></span>
                <div>
                  <small>{label}</small>
                  <strong>{title}</strong>
                </div>
              </div>
            );
          })}
        </motion.div>

        <motion.div
          className="starfall-metrics"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: reduceMotion ? 0 : 0.7, delay: reduceMotion ? 0 : 0.65 }}
        >
          {content.metrics.map(([value, label]) => (
            <div key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </motion.div>

        <a href="#explorar" className="starfall-scroll">
          <span>{content.scroll}</span>
          <ArrowDownRight aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
