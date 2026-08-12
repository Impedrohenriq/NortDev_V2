import { Check, Rocket, Target, Zap } from 'lucide-react';
import { PageIntro } from '../components/PageIntro';
import { SectionHeading } from '../components/SectionHeading';
import { TechCard } from '../components/TechCard';
import { Contact } from '../sections/Contact';
import { Projects } from '../sections/Projects';
import { useLanguage } from '../i18n/LanguageContext';

const benefits = {
  pt: [
    { icon: Target, title: 'Foco em uma única ação', description: 'Cada elemento existe para conduzir o visitante ao clique certo — sem distração, sem menu inflado.' },
    { icon: Zap, title: 'Carregamento rápido', description: 'Performance otimizada para o clique do Google/Meta Ads não virar rejeição no primeiro segundo.' },
    { icon: Rocket, title: 'Prova social + CTA claro', description: 'Layout construído em cima do que gera confiança e fecha: benefícios, depoimentos e botão sempre à mão.' },
  ],
  en: [
    { icon: Target, title: 'Focused on one action', description: 'Every element pushes the visitor to the right click — no distractions, no bloated menus.' },
    { icon: Zap, title: 'Fast loading', description: 'Performance optimized so a Google/Meta Ads click does not turn into an immediate bounce.' },
    { icon: Rocket, title: 'Social proof + clear CTA', description: 'Layout built on what drives trust and closes: benefits, testimonials and a button always within reach.' },
  ],
};

const bullets = {
  pt: [
    'Estrutura pensada para funil de tráfego pago (Google, Meta e TikTok Ads).',
    'Integração direta com WhatsApp, formulários e ferramentas de disparo.',
    'Copy persuasiva escrita para reduzir atrito e ampliar a taxa de resposta.',
    'Publicação assistida com domínio próprio e monitoramento inicial.',
  ],
  en: [
    'Structure designed for paid-traffic funnels (Google, Meta and TikTok Ads).',
    'Direct integration with WhatsApp, forms and outreach tools.',
    'Persuasive copy written to reduce friction and boost reply rates.',
    'Assisted publishing with custom domain and initial monitoring.',
  ],
};

export function LandingPagesPage() {
  const { language } = useLanguage();
  const intro = language === 'pt' ? {
    eyebrow: 'Landing Pages',
    title: 'Cada real investido em anúncio',
    highlight: 'precisa virar oportunidade.',
    description: 'Landing pages construídas com objetivo único: transformar visitas em contato, agendamento ou venda.',
  } : {
    eyebrow: 'Landing Pages',
    title: 'Every ad dollar spent',
    highlight: 'must turn into opportunity.',
    description: 'Landing pages built with a single objective: turning visits into contact, bookings or sales.',
  };

  const currentBenefits = benefits[language];
  const currentBullets = bullets[language];

  return (
    <>
      <PageIntro {...intro} palette="pink" />

      <section className="section-space pt-0">
        <div className="container-site">
          <div data-reveal>
            <SectionHeading
              eyebrow={language === 'pt' ? 'Por que uma landing page dedicada' : 'Why a dedicated landing page'}
              title={language === 'pt' ? 'O site institucional não foi feito para conversão de anúncio.' : 'An institutional website was not built for ad conversion.'}
              description={language === 'pt' ? 'Uma landing page enxuta, com foco, mensagem e uma única ação, mantém o custo por lead sob controle e cresce o retorno do investimento em mídia paga.' : 'A focused landing page with one message and one action keeps cost per lead in check and grows the return on paid media.'}
            />
          </div>

          <div className="mt-10 grid auto-rows-fr gap-4 md:grid-cols-2 lg:mt-14 xl:grid-cols-3">
            {currentBenefits.map(({ icon: Icon, title, description }, index) => (
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
              eyebrow={language === 'pt' ? 'Modelos de landing page' : 'Landing page templates'}
              title={language === 'pt' ? 'Projetos entregues com foco em conversão.' : 'Projects delivered with conversion in mind.'}
              description={language === 'pt' ? 'Exemplos reais de landing pages criadas para diferentes segmentos e campanhas.' : 'Real examples of landing pages built for different segments and campaigns.'}
            />
          </div>
        </div>
        <Projects filter="landing" hideHeading />
      </section>

      <Contact />
    </>
  );
}
