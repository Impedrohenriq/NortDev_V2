import { ArrowRight, ArrowUpRight, Building2, ListChecks, Search, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ProspecDemo } from '../components/ProspecDemo';
import { prospec } from '../data/site';
import { useLanguage } from '../i18n/LanguageContext';

const launchContent = {
  pt: {
    tag: 'Lançamento',
    eyebrow: 'Nova ferramenta North Dev',
    title: 'Encontre empresas que combinam com o que você vende.',
    copy: 'O NorthDev Prospec ajuda sua equipe a descobrir potenciais clientes, escolher onde prospectar e organizar a próxima abordagem com dados empresariais e inteligência de mercado.',
    steps: [
      [Search, 'Encontre', 'Busque por atividade, região, porte e situação cadastral.'],
      [Target, 'Priorize', 'Veja quais empresas combinam com seu cliente ideal — e por quê.'],
      [Building2, 'Conheça', 'Ficha, contatos disponíveis e presença digital antes do contato.'],
      [ListChecks, 'Aborde', 'Listas organizadas e rascunhos de abordagem com IA.'],
    ],
    primary: 'Falar com a equipe',
    secondary: 'Conhecer a ferramenta',
  },
  en: {
    tag: 'Launch',
    eyebrow: 'New North Dev tool',
    title: 'Find companies that match what you sell.',
    copy: 'NorthDev Prospec helps your team discover potential customers, choose where to prospect and organize the next outreach with business data and market intelligence.',
    steps: [
      [Search, 'Find', 'Search by activity, region, company size and registration status.'],
      [Target, 'Prioritize', 'See which companies match your ideal customer — and why.'],
      [Building2, 'Understand', 'Company profile, available contacts and digital presence before reaching out.'],
      [ListChecks, 'Reach out', 'Organized lists and AI-assisted outreach drafts.'],
    ],
    primary: 'Talk to the team',
    secondary: 'Explore the tool',
  },
} as const;

export function ProspecLaunch() {
  const { language } = useLanguage();
  const content = launchContent[language];

  return (
    <section id="prospec" className="prospec-launch section-space">
      <div className="container-site">
        <div className="prospec-launch-panel" data-reveal>
          <div className="prospec-launch-copy">
            <div className="prospec-launch-eyebrow">
              <span className="prospec-launch-tag"><i />{content.tag}</span>
              <p className="eyebrow">{content.eyebrow}</p>
            </div>
            <h2 className="section-title mt-5">{content.title}</h2>
            <p className="section-copy mt-5">{content.copy}</p>

            <ul className="prospec-launch-steps">
              {content.steps.map(([Icon, title, description]) => (
                <li key={title}>
                  <span className="service-icon"><Icon /></span>
                  <div>
                    <strong>{title}</strong>
                    <p>{description}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href={prospec.trialUrl[language]} target="_blank" rel="noreferrer" className="button-primary justify-center">
                {content.primary} <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
              <Link to="/prospec" className="button-secondary justify-center">
                {content.secondary} <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <ProspecDemo />
        </div>
      </div>
    </section>
  );
}
