import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SectionHeading } from '../components/SectionHeading';
import { TechCard } from '../components/TechCard';
import { services } from '../data/site';
import { useLanguage } from '../i18n/LanguageContext';

export function Services() {
  const { language } = useLanguage();
  const englishServices = [
    ['Development', 'Solid interfaces, clean integrations and software built to evolve safely.'],
    ['Automation', 'Manual workflows become fast, reliable processes that are easy to follow.'],
    ['Custom SaaS', 'Digital products with lightweight architecture, business vision and an experience that creates value.'],
    ['Digital evolution', 'Diagnosis and improvement of existing products focused on clarity, performance and conversion.'],
  ];

  return (
    <section id="solucoes" className="section-space">
      <div className="container-site">
        <div data-reveal>
          <SectionHeading
            eyebrow={language === 'pt' ? 'O que construímos' : 'What we build'}
            title={language === 'pt' ? 'Tecnologia que resolve hoje e sustenta o próximo passo.' : 'Technology that solves today and supports the next step.'}
            description={language === 'pt' ? 'Da primeira decisão ao produto em produção, trabalhamos com foco em utilidade, qualidade técnica e experiência.' : 'From the first decision to a live product, we focus on usefulness, technical quality and experience.'}
          />
        </div>

        <div className="services-grid mt-10 lg:mt-14">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <TechCard
                key={service.title}
                accent={index === 1 ? 'cyan' : index === 2 ? 'violet' : 'blue'}
                className={`service-card service-card-${index + 1}`}
                revealDelay={index * 0.07}
              >
                <div className="flex items-start justify-between">
                  <span className="service-icon"><Icon /></span>
                  <span className="service-number">{service.number}</span>
                </div>
                <div className="service-copy">
                  <h3>{language === 'pt' ? service.title : englishServices[index][0]}</h3>
                  <p>{language === 'pt' ? service.description : englishServices[index][1]}</p>
                </div>
                <Link to="/#contato" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-accent">
                  {language === 'pt' ? 'Conversar' : 'Let’s talk'} <ArrowUpRight className="size-4" aria-hidden="true" />
                </Link>
              </TechCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
