import { ArrowUpRight, Bot, Boxes, Check, PanelsTopLeft, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SectionHeading } from '../components/SectionHeading';
import { TechCard } from '../components/TechCard';
import { useLanguage } from '../i18n/LanguageContext';

const planDesign = [
  { icon: Rocket, accent: 'blue' as const },
  { icon: PanelsTopLeft, accent: 'cyan' as const },
  { icon: Bot, accent: 'violet' as const, featured: true },
  { icon: Boxes, accent: 'blue' as const },
];

const planContent = {
  pt: [
    {
      name: 'Landing Page', label: 'Presença essencial', price: 'R$ 300', originalPrice: 'R$ 500', monthly: 'Suporte de R$ 49 a R$ 99/mês',
      description: 'Uma página moderna, rápida e responsiva para apresentar sua oferta e transformar visitantes em contatos.',
      value: 'Organiza sua comunicação, aumenta a credibilidade e cria um caminho direto para novos clientes.',
      audience: 'Profissionais, campanhas, lançamentos e pequenos negócios.',
      features: ['Página única completa', 'Formulário e WhatsApp', 'SEO básico', 'Publicação assistida'],
      cta: 'Quero uma landing page',
    },
    {
      name: 'Site Completo', label: 'Autoridade digital', price: 'R$ 500', originalPrice: 'R$ 800', monthly: 'Suporte de R$ 79 a R$ 149/mês',
      description: 'Um site institucional com navegação estruturada para apresentar sua empresa, serviços e diferenciais.',
      value: 'Fortalece a marca, centraliza informações importantes e transmite mais confiança durante a decisão de compra.',
      audience: 'Empresas que precisam de presença profissional e mais espaço para comunicar seus serviços.',
      features: ['Até 5 páginas', 'Layout responsivo', 'Formulários e WhatsApp', 'SEO básico'],
      cta: 'Quero um site completo',
    },
    {
      name: 'Site + Chatbot com IA', label: 'Atendimento inteligente', price: 'R$ 800', originalPrice: 'R$ 1.200', monthly: 'R$ 150/mês',
      description: 'Site completo com um chatbot preparado para responder dúvidas, apresentar serviços e apoiar a captação de leads.',
      value: 'Mantém o negócio disponível por mais tempo, agiliza respostas e reduz tarefas repetitivas no atendimento.',
      audience: 'Negócios com volume frequente de dúvidas, contatos ou oportunidades comerciais.',
      features: ['Site completo', 'Chatbot configurado', 'Base inicial de respostas', 'Suporte e acompanhamento'],
      cta: 'Automatizar meu atendimento',
    },
    {
      name: 'SaaS + Site + Chatbot', label: 'Produto sob medida', price: 'Sob orçamento', monthly: 'Recorrência definida pelo escopo',
      description: 'Uma plataforma personalizada que conecta sistema, presença institucional e atendimento automatizado.',
      value: 'Transforma processos em um produto escalável, centraliza a operação e cria novas possibilidades de crescimento.',
      audience: 'Empresas com processos próprios, produtos digitais ou necessidades que exigem uma solução exclusiva.',
      features: ['Planejamento técnico', 'Plataforma personalizada', 'Site e chatbot integrados', 'Evolução contínua'],
      cta: 'Avaliar meu projeto',
    },
  ],
  en: [
    {
      name: 'Landing Page', label: 'Essential presence', price: 'R$ 300', originalPrice: 'R$ 500', monthly: 'Support from R$ 49 to R$ 99/month',
      description: 'A modern, fast and responsive page to present your offer and turn visitors into contacts.',
      value: 'Organizes your communication, increases credibility and creates a direct path to new customers.',
      audience: 'Professionals, campaigns, launches and small businesses.',
      features: ['Complete single page', 'Form and WhatsApp', 'Basic SEO', 'Assisted publishing'],
      cta: 'I want a landing page',
    },
    {
      name: 'Complete Website', label: 'Digital authority', price: 'R$ 500', originalPrice: 'R$ 800', monthly: 'Support from R$ 79 to R$ 149/month',
      description: 'An institutional website with structured navigation to present your company, services and differentiators.',
      value: 'Strengthens the brand, centralizes important information and builds trust during purchase decisions.',
      audience: 'Companies that need a professional presence and more space to communicate their services.',
      features: ['Up to 5 pages', 'Responsive layout', 'Forms and WhatsApp', 'Basic SEO'],
      cta: 'I want a complete website',
    },
    {
      name: 'Website + AI Chatbot', label: 'Smart service', price: 'R$ 800', originalPrice: 'R$ 1,200', monthly: 'R$ 150/month',
      description: 'A complete website with a chatbot prepared to answer questions, present services and support lead generation.',
      value: 'Keeps the business available longer, speeds up responses and reduces repetitive service tasks.',
      audience: 'Businesses with a frequent volume of questions, contacts or sales opportunities.',
      features: ['Complete website', 'Configured chatbot', 'Initial response base', 'Support and monitoring'],
      cta: 'Automate my service',
    },
    {
      name: 'SaaS + Website + Chatbot', label: 'Custom product', price: 'Custom quote', monthly: 'Recurring fee defined by scope',
      description: 'A custom platform that connects systems, institutional presence and automated service.',
      value: 'Turns processes into a scalable product, centralizes operations and creates new growth opportunities.',
      audience: 'Companies with proprietary processes, digital products or needs that require an exclusive solution.',
      features: ['Technical planning', 'Custom platform', 'Integrated website and chatbot', 'Continuous evolution'],
      cta: 'Evaluate my project',
    },
  ],
};

export function Pricing() {
  const { language } = useLanguage();
  const plans = planContent[language];

  return (
    <section id="planos" className="section-space pt-0">
      <div className="container-site">
        <div data-reveal>
          <SectionHeading
            eyebrow={language === 'pt' ? 'Escolha seu ponto de partida' : 'Choose your starting point'}
            title={language === 'pt' ? 'Planos objetivos para diferentes momentos do negócio.' : 'Objective plans for different business stages.'}
            description={language === 'pt' ? 'Os valores abaixo representam escopos iniciais. Antes do desenvolvimento, alinhamos necessidades, prazo e tudo o que estará incluído.' : 'The values below represent initial scopes. Before development, we align needs, timeline and everything included.'}
            align="center"
          />
        </div>

        <div className="pricing-grid mt-12 lg:mt-16">
          {plans.map((plan, index) => {
            const { icon: Icon, accent, featured } = planDesign[index];
            return (
              <TechCard
                key={plan.name}
                accent={accent}
                className={`pricing-card ${featured ? 'pricing-card-featured' : ''}`}
                revealDelay={index * 0.07}
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="pricing-icon"><Icon /></span>
                  {featured && <span className="pricing-featured-label">{language === 'pt' ? 'Mais completo' : 'Most complete'}</span>}
                </div>

                <p className="pricing-label">{plan.label}</p>
                <h3 className="pricing-name">{plan.name}</h3>
                {'originalPrice' in plan && plan.originalPrice ? (
                  <div className="pricing-promo">
                    <div className="pricing-promo-head">
                      <span className="pricing-promo-badge">{language === 'pt' ? 'PROMOÇÃO' : 'PROMO'}</span>
                      <span className="pricing-promo-from">
                        {language === 'pt' ? 'de ' : 'from '}
                        <s>{plan.originalPrice}</s>
                        {language === 'pt' ? ' por' : ' to'}
                      </span>
                    </div>
                    <p className="pricing-price pricing-price-promo">{plan.price}</p>
                    <p className="pricing-promo-note">{language === 'pt' ? 'à vista no Pix' : 'via Pix'} <strong>{plan.price}</strong></p>
                  </div>
                ) : (
                  <p className="pricing-price"><span>{language === 'pt' ? 'A partir de' : 'Starting at'}</span>{plan.price}</p>
                )}
                <p className="pricing-monthly">{plan.monthly}</p>
                <p className="pricing-description">{plan.description}</p>

                <div className="pricing-value">
                  <strong>{language === 'pt' ? 'Por que investir' : 'Why invest'}</strong>
                  <p>{plan.value}</p>
                </div>

                <div className="pricing-audience">
                  <strong>{language === 'pt' ? 'Ideal para' : 'Ideal for'}</strong>
                  <p>{plan.audience}</p>
                </div>

                <ul className="pricing-features">
                  {plan.features.map((feature) => <li key={feature}><Check />{feature}</li>)}
                </ul>

                <Link to="/#contato" className={featured ? 'button-primary pricing-cta' : 'button-secondary pricing-cta'}>
                  {plan.cta} <ArrowUpRight />
                </Link>
              </TechCard>
            );
          })}
        </div>

        <p className="pricing-note">
          {language === 'pt'
            ? 'Domínio, serviços externos e consumo excedente de ferramentas de IA não estão incluídos. Quantidade de revisões, prazo e limites de suporte são definidos na proposta.'
            : 'Domain, external services and excess AI tool consumption are not included. Review count, timeline and support limits are defined in the proposal.'}
        </p>
      </div>
    </section>
  );
}
