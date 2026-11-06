import { ArrowUpRight, Bot, LayoutTemplate, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageIntro } from '../components/PageIntro';
import { SectionHeading } from '../components/SectionHeading';
import { TechCard } from '../components/TechCard';
import { projects } from '../data/site';
import { Contact } from '../sections/Contact';
import { useLanguage } from '../i18n/LanguageContext';
import type { ProjectType } from '../types/site';

type HubCard = {
  href: string;
  icon: typeof Rocket;
  accent: 'blue' | 'cyan' | 'violet';
  /** Categoria de `projects` usada para contar modelos e mostrar miniaturas. */
  type?: ProjectType;
  pt: { eyebrow: string; title: string; description: string };
  en: { eyebrow: string; title: string; description: string };
};

const hubCards: HubCard[] = [
  {
    href: '/projetos/landing-pages',
    icon: Rocket,
    accent: 'blue',
    type: 'landing',
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
    accent: 'cyan',
    type: 'site',
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
    href: '/projetos/gestao',
    icon: Bot,
    accent: 'violet',
    pt: {
      eyebrow: '03 · Automação',
      title: 'Gestão Inteligente',
      description: 'Plataforma completa para organizar a operação, conquistar clientes e aumentar as vendas.',
    },
    en: {
      eyebrow: '03 · Automation',
      title: 'Intelligent Management',
      description: 'A complete platform to organize operations, win customers and increase sales.',
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
              const items = card.type ? projects.filter((project) => project.type === card.type) : [];
              const count = items.length;
              const countLabel = count > 0
                ? ` · ${count} ${language === 'pt' ? (count === 1 ? 'modelo' : 'modelos') : (count === 1 ? 'project' : 'projects')}`
                : '';
              return (
                <TechCard
                  key={card.href}
                  accent={card.accent}
                  className="overview-card"
                  interactive
                  revealDelay={index * 0.07}
                >
                  <span className="service-icon"><Icon /></span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{copy.eyebrow}{countLabel}</p>
                    <h2 className="mt-3">{copy.title}</h2>
                    <p>{copy.description}</p>
                    {count > 0 && (
                      <div className="overview-thumbs" aria-hidden="true">
                        {items.slice(0, 3).map((project) => (
                          <img
                            key={project.name}
                            src={project.image}
                            alt=""
                            width={project.imageWidth}
                            height={project.imageHeight}
                            loading="lazy"
                            decoding="async"
                          />
                        ))}
                      </div>
                    )}
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
