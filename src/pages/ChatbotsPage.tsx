import { ArrowUpRight, Bot, Clock, MessagesSquare, ShieldCheck, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ChatbotMockup } from '../components/ChatbotMockup';
import { PageIntro } from '../components/PageIntro';
import { SectionHeading } from '../components/SectionHeading';
import { TechCard } from '../components/TechCard';
import { Contact } from '../sections/Contact';
import { useLanguage } from '../i18n/LanguageContext';

const capabilities = {
  pt: [
    { icon: Clock, title: 'Operação mais organizada', description: 'Centralize atendimento, tarefas, agenda e informações importantes para sua equipe trabalhar com mais clareza.' },
    { icon: MessagesSquare, title: 'Atendimento que gera oportunidades', description: 'Converse com seus clientes pelo WhatsApp, entenda cada necessidade e transforme interações em próximos passos.' },
    { icon: ShieldCheck, title: 'Decisões com contexto', description: 'Tenha uma visão completa do relacionamento, do funil e das atividades para agir no momento certo.' },
    { icon: Sparkles, title: 'Inteligência em toda a jornada', description: 'A IA automatiza processos, qualifica oportunidades e apoia sua equipe desde a prospecção até a venda.' },
  ],
  en: [
    { icon: Clock, title: 'A more organized operation', description: 'Centralize service, tasks, calendar and important information so your team can work with more clarity.' },
    { icon: MessagesSquare, title: 'Service that creates opportunities', description: 'Talk to customers on WhatsApp, understand each need and turn interactions into clear next steps.' },
    { icon: ShieldCheck, title: 'Context for better decisions', description: 'Get a complete view of relationships, the sales funnel and activities so you can act at the right time.' },
    { icon: Sparkles, title: 'Intelligence across the journey', description: 'AI automates processes, qualifies opportunities and supports your team from prospecting to closing.' },
  ],
};

export function ChatbotsPage() {
  const { language } = useLanguage();
  const intro = language === 'pt' ? {
    eyebrow: 'Gestão inteligente',
    title: 'Gestão Inteligente para sua',
    highlight: 'Empresa.',
    description: 'Uma plataforma completa para organizar sua operação, conquistar novos clientes e aumentar suas vendas.',
  } : {
    eyebrow: 'Intelligent management',
    title: 'Intelligent Management for your',
    highlight: 'Business.',
    description: 'A complete platform to organize your operation, win new customers and increase sales.',
  };

  const currentCapabilities = capabilities[language];

  return (
    <>
      <PageIntro {...intro} palette="pink" />

      <section className="section-space pt-0">
        <div className="container-site">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div data-reveal>
              <p className="eyebrow">{language === 'pt' ? 'Uma plataforma conectada' : 'One connected platform'}</p>
              <h2 className="mt-4 font-display text-3xl font-bold leading-[1.05] tracking-[-0.03em] text-heading sm:text-4xl lg:text-[2.75rem]">
                {language === 'pt' ? 'Tudo o que sua equipe precisa para crescer melhor.' : 'Everything your team needs to grow better.'}
              </h2>
              <p className="mt-5 max-w-lg text-base leading-7 text-muted">
                {language === 'pt'
                  ? 'O North Dev conecta gestão, atendimento, vendas e prospecção em um único ambiente, com inteligência artificial trabalhando para automatizar processos e apoiar as melhores decisões.'
                  : 'North Dev connects management, service, sales and prospecting in one environment, with AI working to automate processes and support better decisions.'}
              </p>
              <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-line bg-surface-soft px-4 py-2 text-sm font-semibold text-heading">
                <Bot className="size-4 text-accent" aria-hidden="true" />
                {language === 'pt' ? 'Inteligência aplicada à operação' : 'Intelligence applied to your operation'}
              </div>
            </div>

            <div data-reveal>
              <ChatbotMockup />
            </div>
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container-site">
          <div data-reveal>
            <SectionHeading
              eyebrow={language === 'pt' ? 'O que a plataforma conecta' : 'What the platform connects'}
              title={language === 'pt' ? 'Gestão, atendimento e vendas em um só lugar.' : 'Management, service and sales in one place.'}
              description={language === 'pt' ? 'Agente Comercial com IA, CRM, funil de vendas, prospecção de empresas, atendimento pelo WhatsApp, agenda e gestão de tarefas — tudo integrado para sua empresa crescer de forma mais organizada e eficiente.' : 'AI Sales Agent, CRM, sales funnel, company prospecting, WhatsApp service, calendar and task management — all integrated to help your business grow in a more organized and efficient way.'}
            />
          </div>

          <div className="mt-10 grid auto-rows-fr gap-4 md:grid-cols-2 lg:mt-14 xl:grid-cols-4">
            {currentCapabilities.map(({ icon: Icon, title, description }, index) => (
              <TechCard
                key={title}
                accent={index === 1 ? 'cyan' : index === 2 ? 'violet' : 'blue'}
                className="about-expertise-card"
                revealDelay={index * 0.06}
              >
                <span className="service-icon"><Icon /></span>
                <h3 className="mt-6 font-display text-lg font-bold text-heading">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{description}</p>
              </TechCard>
            ))}
          </div>

          <div className="mt-14 flex flex-col items-center gap-4 text-center" data-reveal>
            <p className="max-w-2xl text-base leading-7 text-muted">
              {language === 'pt'
                ? 'Quer entender como uma operação mais conectada pode ajudar sua empresa a vender mais? Vamos mostrar a plataforma no contexto do seu negócio.'
                : 'Want to see how a more connected operation can help your business sell more? We will show the platform in your business context.'}
            </p>
            <Link to="/#contato" className="button-primary">
              {language === 'pt' ? 'Conhecer a plataforma' : 'Explore the platform'} <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <Contact />
    </>
  );
}
