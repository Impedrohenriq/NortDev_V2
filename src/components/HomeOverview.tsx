import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { navItems } from '../data/site';
import { SectionHeading } from './SectionHeading';
import { TechCard } from './TechCard';

const pageDescriptions: Record<string, string> = {
  '/sobre': 'Conheça a forma como conectamos engenharia, produto e objetivos de negócio.',
  '/solucoes': 'Explore software, automações, SaaS e evolução de produtos digitais.',
  '/projetos': 'Veja experiências digitais desenvolvidas para diferentes mercados e objetivos.',
  '/processo': 'Entenda as etapas que conduzem cada projeto da descoberta à evolução.',
  '/precos': 'Confira os planos da North Dev para landing pages, sites completos, chatbots com IA e produtos SaaS.',
};

export function HomeOverview() {
  return (
    <section className="section-space">
      <div className="container-site">
        <div data-reveal>
          <SectionHeading
            eyebrow="Explore a North Dev"
            title="Cada assunto com o espaço que merece."
            description="Navegue pelas áreas da North Dev e encontre informações mais completas sobre nossa atuação, entregas e forma de trabalhar."
          />
        </div>

        <div className="overview-grid mt-10 lg:mt-14">
          {navItems.map((item, index) => (
            <TechCard
              key={item.href}
              accent={index === 1 ? 'cyan' : index === 2 ? 'violet' : 'blue'}
              className="overview-card"
              revealDelay={index * 0.07}
            >
              <span className="service-number">0{index + 1}</span>
              <div>
                <h2>{item.label}</h2>
                <p>{pageDescriptions[item.href]}</p>
              </div>
              <Link to={item.href} className="overview-link">
                Acessar página <ArrowUpRight className="size-4" aria-hidden="true" />
              </Link>
            </TechCard>
          ))}
        </div>
      </div>
    </section>
  );
}
