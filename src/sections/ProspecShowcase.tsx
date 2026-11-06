import { SectionHeading } from '../components/SectionHeading';
import { useLanguage } from '../i18n/LanguageContext';
import type { Language } from '../i18n/LanguageContext';

type Shot = {
  src: string;
  step: Record<Language, string>;
  title: Record<Language, string>;
  text: Record<Language, string>;
  alt: Record<Language, string>;
};

/**
 * Telas reais do NorthDev Prospec capturadas num ambiente de teste descartável, com dados
 * fictícios (empresas, CNPJs e contatos inventados). Cada legenda descreve só o que aparece na imagem.
 */
const shots: Shot[] = [
  {
    src: '/prospec/prospec-buscar.webp',
    step: { pt: '01 · Encontre', en: '01 · Find' },
    title: { pt: 'Monte o recorte e veja o custo antes de confirmar.', en: 'Build your segment and see the cost before confirming.' },
    text: {
      pt: 'Filtre por localização e atividade. O resumo da busca mostra a estimativa de empresas, quantas já estão na sua carteira e quantos créditos a busca vai custar.',
      en: 'Filter by location and activity. The search summary shows the estimated number of companies, how many are already in your portfolio and how many credits the search will cost.',
    },
    alt: {
      pt: 'Tela Buscar empresas do NorthDev Prospec, com filtros de localização e atividade e o resumo da busca com estimativa e custo em créditos.',
      en: 'NorthDev Prospec Find companies screen, with location and activity filters and a search summary with the estimate and credit cost.',
    },
  },
  {
    src: '/prospec/prospec-ficha.webp',
    step: { pt: '02 · Priorize', en: '02 · Prioritize' },
    title: { pt: 'Aderência ao seu cliente ideal, com cada fator explicado.', en: 'Fit with your ideal customer, with every factor explained.' },
    text: {
      pt: 'Na ficha da empresa, a nota de aderência ao seu ICP mostra quanto cada fator somou, como atividade e região. É uma nota de aderência ao perfil, não uma promessa de venda.',
      en: 'On the company profile, the fit score for your ICP shows how much each factor added, such as activity and region. It is a profile fit score, not a sales promise.',
    },
    alt: {
      pt: 'Ficha de uma empresa no NorthDev Prospec, com nota de aderência ao ICP e a pontuação de cada fator.',
      en: 'A company profile in NorthDev Prospec, with an ICP fit score and the points for each factor.',
    },
  },
  {
    src: '/prospec/prospec-carteira.webp',
    step: { pt: '03 · Organize', en: '03 · Organize' },
    title: { pt: 'Uma carteira para a equipe retomar de onde parou.', en: 'A portfolio your team can pick up where they left off.' },
    text: {
      pt: 'As empresas entregues ficam na carteira da organização, com filtros, favoritas, visão em mapa e exportação. Filtrar, ordenar e abrir fichas não consome créditos.',
      en: 'Delivered companies stay in the organization portfolio, with filters, favorites, a map view and export. Filtering, sorting and opening profiles does not use credits.',
    },
    alt: {
      pt: 'Carteira de empresas do NorthDev Prospec, em tabela, com atividade, cidade, porte e telefone de cada empresa.',
      en: 'NorthDev Prospec company portfolio as a table, with activity, city, size and phone for each company.',
    },
  },
];

export function ProspecShowcase() {
  const { language } = useLanguage();
  const pt = language === 'pt';

  return (
    <section id="por-dentro" className="section-space pt-0">
      <div className="container-site">
        <div data-reveal>
          <SectionHeading
            eyebrow={pt ? 'Por dentro do produto' : 'Inside the product'}
            title={pt ? 'Do recorte à carteira, em três telas.' : 'From segment to portfolio, in three screens.'}
            align="center"
          />
        </div>

        <div className="prospec-showcase mt-12 lg:mt-16">
          {shots.map((shot, index) => (
            <figure className={`prospec-showcase-row ${index % 2 === 1 ? 'is-reversed' : ''}`} key={shot.src} data-reveal>
              <figcaption className="prospec-showcase-copy">
                <p className="eyebrow">{shot.step[language]}</p>
                <h3>{shot.title[language]}</h3>
                <p>{shot.text[language]}</p>
              </figcaption>
              <div className="prospec-shot">
                <img
                  src={shot.src}
                  alt={shot.alt[language]}
                  width={1138}
                  height={639}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </figure>
          ))}
        </div>

        <p className="pricing-note">
          {pt ? 'Telas do NorthDev Prospec com dados fictícios, capturadas em ambiente de teste.' : 'NorthDev Prospec screens with fictional data, captured in a test environment.'}
        </p>
      </div>
    </section>
  );
}
