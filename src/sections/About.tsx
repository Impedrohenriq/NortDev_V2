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
import { useLanguage } from '../i18n/LanguageContext';

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

const englishExpertise = [
  { title: 'Digital presence', description: 'Landing pages, complete websites and responsive web experiences designed for conversion.', icon: Target, accent: 'blue' as const },
  { title: 'Automation and service', description: 'Smart WhatsApp chatbots that capture leads, qualify contacts and improve customer service.', icon: MessageCircleMore, accent: 'cyan' as const },
  { title: 'Custom systems', description: 'ERPs, CRMs, sales funnels and SaaS platforms developed for each operation.', icon: Cpu, accent: 'violet' as const },
];

const englishCapabilities = [
  { title: 'Websites and landing pages', description: 'Responsive, conversion-optimized experiences built with strong UX and UI practices.', icon: Target },
  { title: 'WhatsApp chatbots', description: 'Smart automation that captures leads 24 hours a day, qualifies customers and improves service.', icon: MessageCircleMore },
  { title: 'Custom systems', description: 'ERPs, CRMs, sales funnels and SaaS platforms developed specifically for each need.', icon: Cpu },
  { title: 'Integration and security', description: 'System connections, data protection and best-practice compliance for safer operations.', icon: Link },
  { title: 'Continuous evolution', description: 'Constant improvements, updates and optimizations that follow business growth.', icon: Zap },
  { title: 'Greater reach and sales', description: 'Digital strategies that expand online presence and turn more visitors into customers.', icon: Gauge },
];

const englishCommitments = [
  { title: 'Security first', description: 'Data protection and best-practice compliance at every development stage.' },
  { title: 'Continuous evolution', description: 'Constant improvements and adaptations as the business evolves and the market changes.' },
  { title: 'Results focused', description: 'Every solution is guided by its real impact on numbers and company growth.' },
];

export function About() {
  const { language } = useLanguage();
  const currentExpertise = language === 'pt' ? expertise : englishExpertise;
  const currentCapabilities = language === 'pt' ? capabilities : englishCapabilities;
  const currentCommitments = language === 'pt' ? commitments : englishCommitments;

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
            <div className="status-chip status-chip-top">{language === 'pt' ? 'clareza' : 'clarity'} <Check /></div>
            <div className="status-chip status-chip-bottom">{language === 'pt' ? 'impacto' : 'impact'} <MoveUpRight /></div>
          </div>

          <div className="p-6 sm:p-9 lg:p-12">
            <SectionHeading
              eyebrow={language === 'pt' ? 'Sobre a North Dev' : 'About North Dev'}
              title={language === 'pt' ? 'Engenharia próxima do negócio.' : 'Engineering close to the business.'}
              description={language === 'pt' ? 'Atuamos na camada onde produto, tecnologia e velocidade precisam conversar. Cada escolha técnica parte do impacto que ela precisa gerar.' : 'We work where product, technology and speed need to connect. Every technical choice starts with the impact it needs to create.'}
            />
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <div className="value-item"><span>01</span><p>{language === 'pt' ? 'Comunicação direta e decisões transparentes.' : 'Direct communication and transparent decisions.'}</p></div>
              <div className="value-item"><span>02</span><p>{language === 'pt' ? 'Execução em ciclos curtos e objetivos.' : 'Execution in short, objective cycles.'}</p></div>
              <div className="value-item"><span>03</span><p>{language === 'pt' ? 'Qualidade técnica sem complexidade desnecessária.' : 'Technical quality without unnecessary complexity.'}</p></div>
              <div className="value-item"><span>04</span><p>{language === 'pt' ? 'Produtos pensados para pessoas e resultados.' : 'Products designed for people and results.'}</p></div>
            </div>
          </div>
        </div>

        <div className="pt-20 sm:pt-24 lg:pt-32" data-reveal>
          <SectionHeading
            eyebrow={language === 'pt' ? 'Quem somos' : 'Who we are'}
            title={language === 'pt' ? 'Sua engenharia digital.' : 'Your digital engineering partner.'}
            description={language === 'pt' ? 'Desenvolvemos soluções de software sob medida para empreendedores e empresas consolidadas que querem avançar no mercado digital. Da landing page estratégica aos sistemas mais complexos, atuamos em toda a jornada de transformação do negócio.' : 'We develop custom software solutions for entrepreneurs and established companies that want to move forward in the digital market. From strategic landing pages to complex systems, we work throughout the business transformation journey.'}
          />
          <p className="mt-6 max-w-3xl text-base leading-7 text-muted">
            {language === 'pt' ? 'Nossa missão é simplificar a complexidade tecnológica e entregar soluções que funcionam, evoluem com segurança e geram impacto mensurável.' : 'Our mission is to simplify technological complexity and deliver solutions that work, evolve safely and create measurable impact.'}
          </p>

          <div className="mt-10 grid auto-rows-fr gap-4 md:grid-cols-2 lg:mt-14 xl:grid-cols-3">
            {currentExpertise.map(({ title, description, icon: Icon, accent }, index) => (
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
              eyebrow={language === 'pt' ? 'Nossa atuação' : 'What we do'}
              title={language === 'pt' ? 'Da estratégia à evolução.' : 'From strategy to evolution.'}
              description={language === 'pt' ? 'Cobrimos a cadeia de transformação digital com soluções conectadas ao contexto e aos objetivos de cada negócio.' : 'We cover the digital transformation chain with solutions connected to each business context and goals.'}
            />
          </div>

          <div className="mt-10 grid auto-rows-fr gap-4 sm:grid-cols-2 lg:mt-14 xl:grid-cols-3">
            {currentCapabilities.map(({ title, description, icon: Icon }, index) => (
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
            eyebrow={language === 'pt' ? 'Nosso compromisso' : 'Our commitment'}
            title={language === 'pt' ? 'Desenvolvimento na direção correta.' : 'Development in the right direction.'}
            description={language === 'pt' ? 'Não desenvolvemos apenas código. Construímos parcerias para integrar empresas ao ecossistema digital de forma segura, eficiente e escalável.' : 'We do more than develop code. We build partnerships that integrate companies into the digital ecosystem safely, efficiently and at scale.'}
            align="center"
          />

          <div className="mt-10 grid gap-6 md:grid-cols-3 lg:mt-14">
            {currentCommitments.map(({ title, description }, index) => (
              <div key={title} className="border-t border-line pt-5 text-center sm:text-left">
                <span className="text-xs font-bold text-accent">0{index + 1}</span>
                <h3 className="mt-3 font-display text-lg font-bold text-heading">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{description}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface-soft px-4 py-2 text-sm font-semibold text-heading">
              {language === 'pt' ? 'Clareza, segurança e impacto' : 'Clarity, security and impact'} <Shield className="size-4 text-accent" aria-hidden="true" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
