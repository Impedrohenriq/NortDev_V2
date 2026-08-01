import { ArrowUpRight, Bot, Boxes, Check, PanelsTopLeft, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SectionHeading } from '../components/SectionHeading';
import { TechCard } from '../components/TechCard';

const plans = [
  {
    name: 'Landing Page',
    label: 'Presença essencial',
    price: 'R$ 300',
    monthly: 'Suporte de R$ 49 a R$ 99/mês',
    description: 'Uma página moderna, rápida e responsiva para apresentar sua oferta e transformar visitantes em contatos.',
    value: 'Organiza sua comunicação, aumenta a credibilidade e cria um caminho direto para novos clientes.',
    audience: 'Profissionais, campanhas, lançamentos e pequenos negócios.',
    features: ['Página única completa', 'Formulário e WhatsApp', 'SEO básico', 'Publicação assistida'],
    icon: Rocket,
    accent: 'blue' as const,
    cta: 'Quero uma landing page',
  },
  {
    name: 'Site Completo',
    label: 'Autoridade digital',
    price: 'R$ 500',
    monthly: 'Suporte de R$ 79 a R$ 149/mês',
    description: 'Um site institucional com navegação estruturada para apresentar sua empresa, serviços e diferenciais.',
    value: 'Fortalece a marca, centraliza informações importantes e transmite mais confiança durante a decisão de compra.',
    audience: 'Empresas que precisam de presença profissional e mais espaço para comunicar seus serviços.',
    features: ['Até 5 páginas', 'Layout responsivo', 'Formulários e WhatsApp', 'SEO básico'],
    icon: PanelsTopLeft,
    accent: 'cyan' as const,
    cta: 'Quero um site completo',
  },
  {
    name: 'Site + Chatbot com IA',
    label: 'Atendimento inteligente',
    price: 'R$ 800',
    monthly: 'R$ 150/mês',
    description: 'Site completo com um chatbot preparado para responder dúvidas, apresentar serviços e apoiar a captação de leads.',
    value: 'Mantém o negócio disponível por mais tempo, agiliza respostas e reduz tarefas repetitivas no atendimento.',
    audience: 'Negócios com volume frequente de dúvidas, contatos ou oportunidades comerciais.',
    features: ['Site completo', 'Chatbot configurado', 'Base inicial de respostas', 'Suporte e acompanhamento'],
    icon: Bot,
    accent: 'violet' as const,
    cta: 'Automatizar meu atendimento',
    featured: true,
  },
  {
    name: 'SaaS + Site + Chatbot',
    label: 'Produto sob medida',
    price: 'Sob orçamento',
    monthly: 'Recorrência definida pelo escopo',
    description: 'Uma plataforma personalizada que conecta sistema, presença institucional e atendimento automatizado.',
    value: 'Transforma processos em um produto escalável, centraliza a operação e cria novas possibilidades de crescimento.',
    audience: 'Empresas com processos próprios, produtos digitais ou necessidades que exigem uma solução exclusiva.',
    features: ['Planejamento técnico', 'Plataforma personalizada', 'Site e chatbot integrados', 'Evolução contínua'],
    icon: Boxes,
    accent: 'blue' as const,
    cta: 'Avaliar meu projeto',
  },
];

export function Pricing() {
  return (
    <section id="planos" className="section-space pt-0">
      <div className="container-site">
        <div data-reveal>
          <SectionHeading
            eyebrow="Escolha seu ponto de partida"
            title="Planos objetivos para diferentes momentos do negócio."
            description="Os valores abaixo representam escopos iniciais. Antes do desenvolvimento, alinhamos necessidades, prazo e tudo o que estará incluído."
            align="center"
          />
        </div>

        <div className="pricing-grid mt-12 lg:mt-16">
          {plans.map(({ icon: Icon, features, featured, ...plan }, index) => (
            <TechCard
              key={plan.name}
              accent={plan.accent}
              className={`pricing-card ${featured ? 'pricing-card-featured' : ''}`}
              revealDelay={index * 0.07}
            >
              <div className="flex items-start justify-between gap-4">
                <span className="pricing-icon"><Icon /></span>
                {featured && <span className="pricing-featured-label">Mais completo</span>}
              </div>

              <p className="pricing-label">{plan.label}</p>
              <h3 className="pricing-name">{plan.name}</h3>
              <p className="pricing-price"><span>A partir de</span>{plan.price}</p>
              <p className="pricing-monthly">{plan.monthly}</p>
              <p className="pricing-description">{plan.description}</p>

              <div className="pricing-value">
                <strong>Por que investir</strong>
                <p>{plan.value}</p>
              </div>

              <div className="pricing-audience">
                <strong>Ideal para</strong>
                <p>{plan.audience}</p>
              </div>

              <ul className="pricing-features">
                {features.map((feature) => (
                  <li key={feature}><Check />{feature}</li>
                ))}
              </ul>

              <Link to="/#contato" className={featured ? 'button-primary pricing-cta' : 'button-secondary pricing-cta'}>
                {plan.cta} <ArrowUpRight />
              </Link>
            </TechCard>
          ))}
        </div>

        <p className="pricing-note">
          Domínio, serviços externos e consumo excedente de ferramentas de IA não estão incluídos. Quantidade de revisões,
          prazo e limites de suporte são definidos na proposta.
        </p>
      </div>
    </section>
  );
}
