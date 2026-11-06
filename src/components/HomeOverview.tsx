import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { navItems } from '../data/site';
import { SectionHeading } from './SectionHeading';
import { useLanguage } from '../i18n/LanguageContext';

const pageDescriptions: Record<string, string> = {
  '/sobre': 'Conheça a forma como conectamos engenharia, produto e objetivos de negócio.',
  '/solucoes': 'Explore software, automações, SaaS e evolução de produtos digitais.',
  '/modelos': 'Veja experiências digitais desenvolvidas para diferentes mercados e objetivos.',
  '/processo': 'Entenda as etapas que conduzem cada projeto da descoberta à evolução.',
  '/precos': 'Confira os planos da North Dev para landing pages, sites completos, aplicativos de gestão inteligente e produtos SaaS.',
};

export function HomeOverview() {
  const { language } = useLanguage();
  const descriptions = language === 'pt' ? pageDescriptions : {
    '/sobre': 'See how we connect engineering, product and business goals.',
    '/solucoes': 'Explore software, automation, SaaS and digital product evolution.',
    '/modelos': 'See digital experiences created for different markets and goals.',
    '/processo': 'Understand the stages that lead each project from discovery to evolution.',
    '/precos': 'See North Dev plans for landing pages, full websites, intelligent management apps and SaaS products.',
  };
  const labels: Record<string, string> = {
    '/sobre': 'About',
    '/solucoes': 'Solutions',
    '/modelos': 'Projects',
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

        <ul className="index-list mt-10 lg:mt-14">
          {navItems.filter((item) => !item.badge).map((item) => (
            <li key={item.href} data-reveal>
              <Link to={item.href} className="index-row">
                <h3 className="index-row-title">{language === 'pt' ? item.label : labels[item.href]}</h3>
                <p className="index-row-text">{descriptions[item.href]}</p>
                <span className="index-row-arrow" aria-hidden="true"><ArrowUpRight /></span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
