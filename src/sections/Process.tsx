import { processSteps } from '../data/site';
import { SectionHeading } from '../components/SectionHeading';
import { TechCard } from '../components/TechCard';
import { useLanguage } from '../i18n/LanguageContext';

export function Process() {
  const { language } = useLanguage();
  const englishSteps = [
    ['Understand', 'We map the context, the goal and what truly needs to be solved.'],
    ['Direct', 'We turn the scenario into scope, priorities and a clear execution route.'],
    ['Build', 'We create in short cycles, with visibility and quality-driven decisions.'],
    ['Evolve', 'We deliver, measure and prepare the product for its next moves.'],
  ];

  return (
    <section id="processo" className="section-space">
      <div className="container-site">
        <div data-reveal>
          <SectionHeading
            eyebrow={language === 'pt' ? 'Como trabalhamos' : 'How we work'}
            title={language === 'pt' ? 'Um processo simples para decisões melhores.' : 'A simple process for better decisions.'}
            description={language === 'pt' ? 'Sem caixas-pretas ou etapas desnecessárias. Você acompanha o raciocínio, a execução e a evolução do projeto.' : 'No black boxes or unnecessary steps. You follow the thinking, execution and evolution of the project.'}
            align="center"
          />
        </div>
        <div className="process-grid mt-12 lg:mt-16">
          {processSteps.map((step, index) => (
            <TechCard
              key={step.number}
              accent={index % 2 === 0 ? 'blue' : 'cyan'}
              className="process-step"
              revealDelay={index * 0.07}
            >
              <span className="process-number">{step.number}</span>
              <h3>{language === 'pt' ? step.title : englishSteps[index][0]}</h3>
              <p>{language === 'pt' ? step.description : englishSteps[index][1]}</p>
            </TechCard>
          ))}
        </div>
      </div>
    </section>
  );
}
