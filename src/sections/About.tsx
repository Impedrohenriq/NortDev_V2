import {
  Check,
  Cpu,
  Gauge,
  Link,
  MessageCircleMore,
  MoveUpRight,
  Shield,
  Target,
  Zap,
} from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { TechCard } from '../components/TechCard';

const expertise = [
  {
    title: 'Presença digital',
    description: 'Landing pages, sites completos e experiências web responsivas, pensadas para conversão.',
    icon: Target,
    accent: 'blue' as const,
  },
  {
    title: 'Automação e atendimento',
    description: 'Chatbots inteligentes para WhatsApp que capturam leads, qualificam contatos e melhoram o atendimento.',
    icon: MessageCircleMore,
    accent: 'cyan' as const,
  },
  {
    title: 'Sistemas sob medida',
    description: 'ERPs, CRMs, funis de vendas e plataformas SaaS desenvolvidos para cada operação.',
    icon: Cpu,
    accent: 'violet' as const,
  },
];

const capabilities = [
  {
    title: 'Websites e landing pages',
    description: 'Experiências responsivas e otimizadas para conversão, construídas com boas práticas de UX e UI.',
    icon: Target,
  },
  {
    title: 'Chatbots para WhatsApp',
    description: 'Automação inteligente para capturar leads 24 horas por dia, qualificar clientes e melhorar o atendimento.',
    icon: MessageCircleMore,
  },
  {
    title: 'Sistemas customizados',
    description: 'ERPs, CRMs, funis de vendas e plataformas SaaS desenvolvidos especificamente para cada necessidade.',
    icon: Cpu,
  },
  {
    title: 'Integração e segurança',
    description: 'Conexão entre sistemas, proteção de dados e conformidade com boas práticas para operações mais seguras.',
    icon: Link,
  },
  {
    title: 'Evolução contínua',
    description: 'Melhorias, atualizações e otimizações constantes para acompanhar o crescimento do negócio.',
    icon: Zap,
  },
  {
    title: 'Aumento de alcance e vendas',
    description: 'Estratégias digitais para ampliar a presença online e transformar mais visitantes em clientes.',
    icon: Gauge,
  },
];

const commitments = [
  {
    title: 'Segurança em primeiro lugar',
    description: 'Proteção de dados e conformidade com boas práticas em cada etapa do desenvolvimento.',
  },
  {
    title: 'Evolução contínua',
    description: 'Melhorias e adaptações constantes conforme o negócio evolui e o mercado muda.',
  },
  {
    title: 'Foco em resultados',
    description: 'Cada solução é orientada pelo impacto real nos números e no crescimento da empresa.',
  },
];

export function About() {
  return (
    <section id="sobre" className="section-space pt-0">
      <div className="container-site">
        <div className="about-panel" data-reveal>
          <div className="about-visual" aria-hidden="true">
            <div className="system-map">
              <span className="system-line system-line-one" />
              <span className="system-line system-line-two" />
              <span className="system-line system-line-three" />
              <span className="system-node system-node-one" />
              <span className="system-node system-node-two" />
              <span className="system-node system-node-three" />
              <div className="system-core"><Cpu /></div>
            </div>
            <div className="status-chip status-chip-top">clareza <Check /></div>
            <div className="status-chip status-chip-bottom">impacto <MoveUpRight /></div>
          </div>

          <div className="p-6 sm:p-9 lg:p-12">
            <SectionHeading
              eyebrow="Sobre a North Dev"
              title="Engenharia próxima do negócio."
              description="Atuamos na camada onde produto, tecnologia e velocidade precisam conversar. Cada escolha técnica parte do impacto que ela precisa gerar."
            />
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <div className="value-item"><span>01</span><p>Comunicação direta e decisões transparentes.</p></div>
              <div className="value-item"><span>02</span><p>Execução em ciclos curtos e objetivos.</p></div>
              <div className="value-item"><span>03</span><p>Qualidade técnica sem complexidade desnecessária.</p></div>
              <div className="value-item"><span>04</span><p>Produtos pensados para pessoas e resultados.</p></div>
            </div>
          </div>
        </div>

        <div className="pt-20 sm:pt-24 lg:pt-32" data-reveal>
          <SectionHeading
            eyebrow="Quem somos"
            title="Sua engenharia digital."
            description="Desenvolvemos soluções de software sob medida para empreendedores e empresas consolidadas que querem avançar no mercado digital. Da landing page estratégica aos sistemas mais complexos, atuamos em toda a jornada de transformação do negócio."
          />
          <p className="mt-6 max-w-3xl text-base leading-7 text-muted">
            Nossa missão é simplificar a complexidade tecnológica e entregar soluções que funcionam, evoluem com segurança e geram impacto mensurável.
          </p>

          <div className="mt-10 grid auto-rows-fr gap-4 md:grid-cols-2 lg:mt-14 xl:grid-cols-3">
            {expertise.map(({ title, description, icon: Icon, accent }, index) => (
              <TechCard
                key={title}
                accent={accent}
                className="about-expertise-card"
                revealDelay={index * 0.07}
              >
                <span className="service-icon"><Icon /></span>
                <h3 className="mt-6 font-display text-xl font-bold text-heading">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted sm:text-base sm:leading-7">{description}</p>
              </TechCard>
            ))}
          </div>
        </div>

        <div className="pt-20 sm:pt-24 lg:pt-32">
          <div data-reveal>
            <SectionHeading
              eyebrow="Nossa atuação"
              title="Da estratégia à evolução."
              description="Cobrimos a cadeia de transformação digital com soluções conectadas ao contexto e aos objetivos de cada negócio."
            />
          </div>

          <div className="mt-10 grid auto-rows-fr gap-4 sm:grid-cols-2 lg:mt-14 xl:grid-cols-3">
            {capabilities.map(({ title, description, icon: Icon }, index) => (
              <TechCard
                key={title}
                accent={index % 3 === 1 ? 'cyan' : index % 3 === 2 ? 'violet' : 'blue'}
                className="about-capability-card"
                revealDelay={index * 0.05}
              >
                <span className="service-icon"><Icon /></span>
                <h3 className="mt-6 font-display text-lg font-bold text-heading">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{description}</p>
              </TechCard>
            ))}
          </div>
        </div>

        <div
          className="mt-20 overflow-hidden rounded-[1.75rem] border border-line bg-surface p-7 shadow-[var(--shadow-card)] sm:mt-24 sm:p-10 lg:mt-32 lg:p-14"
          data-reveal
        >
          <SectionHeading
            eyebrow="Nosso compromisso"
            title="Desenvolvimento na direção correta."
            description="Não desenvolvemos apenas código. Construímos parcerias para integrar empresas ao ecossistema digital de forma segura, eficiente e escalável."
            align="center"
          />

          <div className="mt-10 grid gap-6 md:grid-cols-3 lg:mt-14">
            {commitments.map(({ title, description }, index) => (
              <div key={title} className="border-t border-line pt-5 text-center sm:text-left">
                <span className="text-xs font-bold text-accent">0{index + 1}</span>
                <h3 className="mt-3 font-display text-lg font-bold text-heading">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{description}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface-soft px-4 py-2 text-sm font-semibold text-heading">
              Clareza, segurança e impacto <Shield className="size-4 text-accent" aria-hidden="true" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
