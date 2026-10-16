import { Building2, Filter, MapPin, Sparkles, Target } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const mockupContent = {
  pt: {
    title: 'NorthDev Prospec',
    profile: 'Perfil: padarias e restaurantes',
    filters: ['Alimentação', 'Belo Horizonte · MG', 'Pequeno porte', 'Ativa'],
    results: '248 empresas encontradas',
    fit: 'aderência',
    companies: [
      ['Padaria Pão Dourado', 'Savassi · Matriz', 94],
      ['Restaurante Sabor Mineiro', 'Funcionários · 2 filiais', 88],
      ['Café & Forno Lourdes', 'Lourdes · Aberta em 2025', 81],
    ],
    draftLabel: 'Rascunho de abordagem com IA',
    draft: 'Olá! Vi que a Pão Dourado tem forte presença na Savassi. Ajudamos padarias a reduzir custos com embalagens…',
  },
  en: {
    title: 'NorthDev Prospec',
    profile: 'Profile: bakeries and restaurants',
    filters: ['Food service', 'Belo Horizonte · MG', 'Small business', 'Active'],
    results: '248 companies found',
    fit: 'fit',
    companies: [
      ['Pão Dourado Bakery', 'Savassi · Headquarters', 94],
      ['Sabor Mineiro Restaurant', 'Funcionários · 2 branches', 88],
      ['Café & Forno Lourdes', 'Lourdes · Opened in 2025', 81],
    ],
    draftLabel: 'AI outreach draft',
    draft: 'Hi! I noticed Pão Dourado has a strong presence in Savassi. We help bakeries cut packaging costs…',
  },
};

export function ProspecMockup() {
  const { language } = useLanguage();
  const content = mockupContent[language];

  return (
    <div className="prospec-mockup" aria-hidden="true">
      <div className="prospec-mockup-halo" />
      <div className="prospec-mockup-frame">
        <div className="prospec-mockup-bar">
          <span className="prospec-mockup-dots"><i /><i /><i /></span>
          <strong>{content.title}</strong>
        </div>

        <div className="prospec-mockup-body">
          <div className="prospec-mockup-profile">
            <Target />
            <span>{content.profile}</span>
          </div>

          <div className="prospec-mockup-filters">
            <Filter />
            {content.filters.map((filter) => <span key={filter}>{filter}</span>)}
          </div>

          <p className="prospec-mockup-count">{content.results}</p>

          <ul className="prospec-mockup-list">
            {content.companies.map(([name, detail, score]) => (
              <li key={name}>
                <span className="prospec-mockup-avatar"><Building2 /></span>
                <div className="prospec-mockup-company">
                  <strong>{name}</strong>
                  <small><MapPin /> {detail}</small>
                </div>
                <div className="prospec-mockup-score">
                  <strong>{score}%</strong>
                  <small>{content.fit}</small>
                  <span><i style={{ width: `${score}%` }} /></span>
                </div>
              </li>
            ))}
          </ul>

          <div className="prospec-mockup-draft">
            <span><Sparkles /> {content.draftLabel}</span>
            <p>{content.draft}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
