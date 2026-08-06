import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { navItems } from '../data/site';
import { SectionHeading } from './SectionHeading';
import { TechCard } from './TechCard';
import { useLanguage } from '../i18n/LanguageContext';

const pageDescriptions: Record<string, string> = {
  '/sobre': 'Conheça a forma como conectamos engenharia, produto e objetivos de negócio.',
  '/solucoes': 'Explore software, automações, SaaS e evolução de produtos digitais.',
  '/Modelos': 'Veja experiências digitais desenvolvidas para diferentes mercados e objetivos.',
  '/processo': 'Entenda as etapas que conduzem cada projeto da descoberta à evolução.',
  '/precos': 'Confira os planos da North Dev para landing pages, sites completos, chatbots com IA e produtos SaaS.',
};

export function HomeOverview() {
  const { language } = useLanguage();
  const descriptions = language === 'pt' ? pageDescriptions : {
    '/sobre': 'See how we connect engineering, product and business goals.',
    '/solucoes': 'Explore software, automation, SaaS and digital product evolution.',
    '/Modelos': 'See digital experiences created for different markets and goals.',
    '/processo': 'Understand the stages that lead each project from discovery to evolution.',
    '/precos': 'See North Dev plans for landing pages, full websites, AI chatbots and SaaS products.',
  };
  const labels: Record<string, string> = {
    '/sobre': 'About',
    '/solucoes': 'Solutions',
    '/Modelos': 'Projects',
    '/processo': 'Process',
    '/precos': 'Pricing',
  };

  return (
    <section id="explorar" className="section-space home-overview-starfall">
      <div className="container-site">
        <div data-reveal>
          <SectionHeading
            eyebrow={language === 'pt' ? 'Explore a North Dev' : 'Explore North Dev'}
            title={language === 'pt' ? 'Cada assunto com o espaço que merece.' : 'Every subject gets the space it deserves.'}
            description={language === 'pt' ? 'Navegue pelas áreas da North Dev e encontre informações mais completas sobre nossa atuação, entregas e forma de trabalhar.' : 'Browse North Dev areas and find more details about our work, deliveries and process.'}
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
                <h2>{language === 'pt' ? item.label : labels[item.href]}</h2>
                <p>{descriptions[item.href]}</p>
              </div>
              <Link to={item.href} className="overview-link">
                {language === 'pt' ? 'Acessar página' : 'Open page'} <ArrowUpRight className="size-4" aria-hidden="true" />
              </Link>
            </TechCard>
          ))}
        </div>
      </div>
    </section>
  );
}
