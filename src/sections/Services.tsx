import { ArrowUpRight } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { TechCard } from '../components/TechCard';
import { services } from '../data/site';

export function Services() {
  return (
    <section id="solucoes" className="section-space">
      <div className="container-site">
        <div data-reveal>
          <SectionHeading
            eyebrow="O que construímos"
            title="Tecnologia que resolve hoje e sustenta o próximo passo."
            description="Da primeira decisão ao produto em produção, trabalhamos com foco em utilidade, qualidade técnica e experiência."
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
                data-reveal
                style={{ transitionDelay: `${index * 70}ms` }}
              >
                <div className="flex items-start justify-between">
                  <span className="service-icon"><Icon /></span>
                  <span className="service-number">{service.number}</span>
                </div>
                <div className="service-copy">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
                <a href="#contato" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-accent">
                  Conversar <ArrowUpRight className="size-4" aria-hidden="true" />
                </a>
              </TechCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
