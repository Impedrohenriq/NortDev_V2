import { ArrowUpRight } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
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

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <article key={service.title} className="service-card" data-reveal style={{ transitionDelay: `${index * 70}ms` }}>
                <div className="flex items-start justify-between">
                  <span className="service-icon"><Icon /></span>
                  <span className="text-xs font-semibold text-muted">{service.number}</span>
                </div>
                <div className="mt-12">
                  <h3 className="text-xl font-semibold tracking-tight text-heading">{service.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted">{service.description}</p>
                </div>
                <a href="#contato" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-accent">
                  Conversar <ArrowUpRight className="size-4" />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
