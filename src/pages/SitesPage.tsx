import { Check, Compass, Layers, Search } from 'lucide-react';
import { PageIntro } from '../components/PageIntro';
import { SectionHeading } from '../components/SectionHeading';
import { TechCard } from '../components/TechCard';
import { Contact } from '../sections/Contact';
import { Projects } from '../sections/Projects';
import { useLanguage } from '../i18n/LanguageContext';

const pillars = {
  pt: [
    { icon: Compass, title: 'Autoridade e credibilidade', description: 'Um site que apresenta sua empresa com clareza posiciona a marca em outro nível de confiança durante a decisão de compra.' },
    { icon: Search, title: 'SEO local e orgânico', description: 'Estrutura semântica, performance e conteúdo pensados para aparecer nas buscas certas — sem depender só de anúncios.' },
    { icon: Layers, title: 'Centro da comunicação', description: 'Serviços, cases, canais de contato e provas sociais reunidos num único lugar consultável por clientes, parceiros e imprensa.' },
  ],
  en: [
    { icon: Compass, title: 'Authority and credibility', description: 'A website that presents your company clearly moves the brand into another level of trust during the purchase decision.' },
    { icon: Search, title: 'Local and organic SEO', description: 'Semantic structure, performance and content designed to show up on the right searches — without relying only on ads.' },
    { icon: Layers, title: 'Communication hub', description: 'Services, cases, contact channels and social proof in one place clients, partners and press can reference.' },
  ],
};

const bullets = {
  pt: [
    'Arquitetura de páginas conectada ao objetivo do negócio.',
    'Boas práticas de SEO técnico e conteúdo desde o dia um.',
    'Layouts responsivos, acessíveis e consistentes com sua marca.',
    'Painel simples para atualizar textos, contatos e novos cases.',
  ],
  en: [
    'Page architecture connected to the business objective.',
    'Technical SEO and content best practices from day one.',
    'Responsive, accessible layouts consistent with your brand.',
    'Simple panel to update copy, contacts and new cases.',
  ],
};

export function SitesPage() {
  const { language } = useLanguage();
  const intro = language === 'pt' ? {
    eyebrow: 'Sites Institucionais',
    title: 'Presença profissional que sustenta',
    highlight: 'a decisão do cliente.',
    description: 'Sites completos, com narrativa e estrutura pensadas para transmitir autoridade, credibilidade e clareza.',
  } : {
    eyebrow: 'Institutional Websites',
    title: 'Professional presence that supports',
    highlight: 'the client decision.',
    description: 'Complete websites with storytelling and structure designed to convey authority, credibility and clarity.',
  };

  const currentPillars = pillars[language];
  const currentBullets = bullets[language];

  return (
    <>
      <PageIntro {...intro} palette="pink" />

      <section className="section-space pt-0">
        <div className="container-site">
          <div data-reveal>
            <SectionHeading
              eyebrow={language === 'pt' ? 'Por que investir em um site institucional' : 'Why invest in an institutional website'}
              title={language === 'pt' ? 'É a base para todo o resto acontecer.' : 'It is the foundation for everything else.'}
              description={language === 'pt' ? 'Anúncio, indicação, orgânico ou LinkedIn — tudo desemboca no seu site. Ele precisa transmitir seriedade e conduzir o próximo passo.' : 'Ads, referrals, organic, LinkedIn — everything lands on your site. It has to convey seriousness and lead to the next step.'}
            />
          </div>

          <div className="mt-10 grid auto-rows-fr gap-4 md:grid-cols-2 lg:mt-14 xl:grid-cols-3">
            {currentPillars.map(({ icon: Icon, title, description }, index) => (
              <TechCard
                key={title}
                accent={index === 1 ? 'cyan' : index === 2 ? 'violet' : 'blue'}
                className="about-expertise-card"
                revealDelay={index * 0.07}
              >
                <span className="service-icon"><Icon /></span>
                <h3 className="mt-6 font-display text-xl font-bold text-heading">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted sm:text-base sm:leading-7">{description}</p>
              </TechCard>
            ))}
          </div>

          <div className="mt-16 grid gap-4 sm:grid-cols-2" data-reveal>
            {currentBullets.map((item) => (
              <div key={item} className="value-item">
                <span><Check className="size-4" /></span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container-site">
          <div data-reveal>
            <SectionHeading
              eyebrow={language === 'pt' ? 'Modelos de site institucional' : 'Institutional templates'}
              title={language === 'pt' ? 'Modelos entregues para diferentes segmentos.' : 'Templates delivered for different segments.'}
              description={language === 'pt' ? 'Cada projeto foi construído para a realidade e o vocabulário do mercado atendido.' : 'Each project was built for the reality and vocabulary of the market it serves.'}
            />
          </div>
        </div>
        <Projects
          filter="site"
          hideHeading
          emptyState={{
            title: language === 'pt' ? 'Novos modelos chegando em breve.' : 'New templates coming soon.',
            description: language === 'pt' ? 'Estamos preparando novos projetos institucionais para publicar aqui.' : 'We are preparing new institutional projects to publish here.',
          }}
        />
      </section>

      <Contact />
    </>
  );
}
