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
    { icon: Clock, title: '24/7 sem cansar', description: 'Enquanto você opera ou descansa, o agente segue respondendo, qualificando e coletando o que interessa.' },
    { icon: MessagesSquare, title: 'Conversas naturais', description: 'Treinado com o vocabulário e as ofertas do seu negócio, responde no tom certo e mantém a jornada humana.' },
    { icon: ShieldCheck, title: 'Regras claras', description: 'Você define o que ele pode fazer, para onde escalar humano e como registrar cada conversa.' },
    { icon: Sparkles, title: 'Integrado ao restante', description: 'Se conecta a WhatsApp, formulários, CRM e planilhas — o lead cai direto onde o time trabalha.' },
  ],
  en: [
    { icon: Clock, title: '24/7 without tiring', description: 'While you operate or rest, the agent keeps replying, qualifying and collecting what matters.' },
    { icon: MessagesSquare, title: 'Natural conversation', description: 'Trained on your business vocabulary and offers, it replies in the right tone and keeps the journey human.' },
    { icon: ShieldCheck, title: 'Clear rules', description: 'You define what it can do, when to escalate to a human, and how each conversation is recorded.' },
    { icon: Sparkles, title: 'Fits into the stack', description: 'Connects with WhatsApp, forms, CRM and spreadsheets — leads land where your team already works.' },
  ],
};

export function ChatbotsPage() {
  const { language } = useLanguage();
  const intro = language === 'pt' ? {
    eyebrow: 'Chatbots com IA',
    title: 'Um agente de vendas que trabalha',
    highlight: 'enquanto você respira.',
    description: 'Agentes de vendas que atendem, qualificam e vendem 24/7, liberando seu tempo para gerenciar e produzir dentro do seu negócio.',
  } : {
    eyebrow: 'AI Chatbots',
    title: 'A sales agent that works',
    highlight: 'while you breathe.',
    description: 'Sales agents that respond, qualify and sell 24/7, freeing your time to manage and produce inside your business.',
  };

  const currentCapabilities = capabilities[language];

  return (
    <>
      <PageIntro {...intro} palette="pink" />

      <section className="section-space pt-0">
        <div className="container-site">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div data-reveal>
              <p className="eyebrow">{language === 'pt' ? 'Demonstração ao vivo' : 'Live demo'}</p>
              <h2 className="mt-4 font-display text-3xl font-bold leading-[1.05] tracking-[-0.03em] text-heading sm:text-4xl lg:text-[2.75rem]">
                {language === 'pt' ? 'Assim conversa um agente de vendas da North Dev.' : 'This is how a North Dev sales agent talks.'}
              </h2>
              <p className="mt-5 max-w-lg text-base leading-7 text-muted">
                {language === 'pt'
                  ? 'Uma simulação real de como o agente responde um cliente que chega pelo WhatsApp — mantendo o ritmo, conduzindo o próximo passo e nunca deixando o lead esperando.'
                  : 'A real simulation of how the agent replies to a customer arriving on WhatsApp — keeping the pace, guiding the next step and never letting the lead wait.'}
              </p>
              <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-line bg-surface-soft px-4 py-2 text-sm font-semibold text-heading">
                <Bot className="size-4 text-accent" aria-hidden="true" />
                {language === 'pt' ? 'Conversa gerada em tempo real' : 'Conversation generated in real time'}
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
              eyebrow={language === 'pt' ? 'O que ele resolve' : 'What it solves'}
              title={language === 'pt' ? 'Tempo, qualificação e presença — os três gargalos do atendimento.' : 'Time, qualification and presence — the three service bottlenecks.'}
              description={language === 'pt' ? 'O agente entra na primeira linha, resolve as dúvidas repetitivas e entrega ao humano só o que realmente precisa dele.' : 'The agent takes the first line, handles repetitive questions and hands over to a human only what really needs one.'}
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
                ? 'Quer ver o agente respondendo com o vocabulário do seu negócio? A gente monta uma demonstração com o seu contexto.'
                : 'Want to see the agent answering with your business vocabulary? We put together a demo with your context.'}
            </p>
            <Link to="/#contato" className="button-primary">
              {language === 'pt' ? 'Quero uma demonstração' : 'Book a demo'} <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <Contact />
    </>
  );
}
