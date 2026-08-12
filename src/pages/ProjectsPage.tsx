import { ArrowUpRight, Bot, LayoutTemplate, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageIntro } from '../components/PageIntro';
import { SectionHeading } from '../components/SectionHeading';
import { TechCard } from '../components/TechCard';
import { Contact } from '../sections/Contact';
import { useLanguage } from '../i18n/LanguageContext';

const hubCards = [
  {
    href: '/projetos/landing-pages',
    icon: Rocket,
    accent: 'blue' as const,
    pt: {
      eyebrow: '01 · Conversão',
      title: 'Landing Pages',
      description: 'Páginas objetivas, rápidas e otimizadas para transformar tráfego pago em oportunidades reais de venda.',
    },
    en: {
      eyebrow: '01 · Conversion',
      title: 'Landing Pages',
      description: 'Objective, fast pages optimized to turn paid traffic into real sales opportunities.',
    },
  },
  {
    href: '/projetos/sites',
    icon: LayoutTemplate,
    accent: 'cyan' as const,
    pt: {
      eyebrow: '02 · Autoridade',
      title: 'Sites Institucionais',
      description: 'Estrutura completa para apresentar empresa, serviços e credibilidade — com SEO local e presença profissional.',
    },
    en: {
      eyebrow: '02 · Authority',
      title: 'Institutional Websites',
      description: 'Full structure to present company, services and credibility — with local SEO and professional presence.',
    },
  },
  {
    href: '/projetos/chatbots',
    icon: Bot,
    accent: 'violet' as const,
    pt: {
      eyebrow: '03 · Automação',
      title: 'Chatbots com IA',
      description: 'Agentes de vendas que trabalham 24/7, respondem, qualificam leads e liberam seu tempo para o que importa.',
    },
    en: {
      eyebrow: '03 · Automation',
      title: 'AI Chatbots',
      description: 'Sales agents that work 24/7, respond, qualify leads and free your time for what matters.',
    },
  },
];

export function ProjectsPage() {
  const { language } = useLanguage();
  const intro = language === 'pt' ? {
    eyebrow: 'Modelos',
    title: 'Três frentes para acelerar seu',
    highlight: 'negócio digital.',
    description: 'Escolha a linha que faz mais sentido agora: converter tráfego, construir autoridade ou automatizar atendimento.',
  } : {
    eyebrow: 'Projects',
    title: 'Three fronts to accelerate your',
    highlight: 'digital business.',
    description: 'Pick the line that matters most now: convert traffic, build authority or automate customer service.',
  };

  return (
    <>
      <PageIntro {...intro} palette="pink" />

      <section className="section-space pt-0">
        <div className="container-site">
          <div data-reveal>
            <SectionHeading
              eyebrow={language === 'pt' ? 'Explore por categoria' : 'Explore by category'}
              title={language === 'pt' ? 'Cada frente com o espaço que merece.' : 'Each front with the space it deserves.'}
              description={language === 'pt' ? 'Navegue pelas categorias e veja modelos, explicações e como cada solução se conecta ao seu momento.' : 'Browse the categories and see templates, explanations and how each solution fits your moment.'}
            />
          </div>

          <div className="overview-grid mt-10 lg:mt-14">
            {hubCards.map((card, index) => {
              const Icon = card.icon;
              const copy = language === 'pt' ? card.pt : card.en;
              return (
                <TechCard
                  key={card.href}
                  accent={card.accent}
                  className="overview-card"
                  revealDelay={index * 0.07}
                >
                  <span className="service-icon"><Icon /></span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{copy.eyebrow}</p>
                    <h2 className="mt-3">{copy.title}</h2>
                    <p>{copy.description}</p>
                  </div>
                  <Link to={card.href} className="overview-link">
                    {language === 'pt' ? 'Ver categoria' : 'Open category'} <ArrowUpRight className="size-4" aria-hidden="true" />
                  </Link>
                </TechCard>
              );
            })}
          </div>
        </div>
      </section>

      <Contact />
    </>
  );
}
