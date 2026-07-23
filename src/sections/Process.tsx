import { processSteps } from '../data/site';
import { SectionHeading } from '../components/SectionHeading';
import { TechCard } from '../components/TechCard';

export function Process() {
  return (
    <section id="processo" className="section-space">
      <div className="container-site">
        <div data-reveal>
          <SectionHeading
            eyebrow="Como trabalhamos"
            title="Um processo simples para decisões melhores."
            description="Sem caixas-pretas ou etapas desnecessárias. Você acompanha o raciocínio, a execução e a evolução do projeto."
            align="center"
          />
        </div>
        <div className="process-grid mt-12 lg:mt-16">
          {processSteps.map((step, index) => (
            <TechCard
              key={step.number}
              accent={index % 2 === 0 ? 'blue' : 'cyan'}
              className="process-step"
              data-reveal
              style={{ transitionDelay: `${index * 70}ms` }}
            >
              <span className="process-number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </TechCard>
          ))}
        </div>
      </div>
    </section>
  );
}
