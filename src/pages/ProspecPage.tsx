import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Building2,
  Compass,
  History,
  Lightbulb,
  ListChecks,
  Megaphone,
  Network,
  Package,
  Search,
  Sparkles,
  Target,
  Terminal,
} from 'lucide-react';
import { ProspecDemo } from '../components/ProspecDemo';
import { PageIntro } from '../components/PageIntro';
import { SectionHeading } from '../components/SectionHeading';
import { TechCard } from '../components/TechCard';
import { prospec } from '../data/site';
import { useLanguage } from '../i18n/LanguageContext';
import { Contact } from '../sections/Contact';

const content = {
  pt: {
    intro: {
      eyebrow: 'Lançamento · NorthDev Prospec',
      title: 'Encontre empresas que combinam com o que você',
      highlight: 'vende.',
      description: 'Descubra novos potenciais clientes, escolha onde prospectar e organize sua próxima abordagem com dados empresariais e inteligência de mercado.',
    },
    primary: 'Quero testar o Prospec',
    access: 'Já tenho acesso',
    about: {
      eyebrow: 'O que é',
      title: 'Uma plataforma de prospecção para quem vende para outras empresas.',
      paragraphs: [
        'Você define quem deseja atender — por exemplo, restaurantes de uma determinada região, clínicas de certo porte ou empresas abertas recentemente — e encontra cadastros que correspondem a esses critérios.',
        'A partir daí, analisa cada empresa, consulta os contatos disponíveis, identifica quais combinam melhor com seu perfil de cliente ideal e organiza uma lista para trabalhar.',
        'A plataforma também ajuda a comparar regiões e setores, descobrir outras empresas compatíveis e preparar uma abordagem com IA. Sua equipe ganha uma rotina mais direcionada para iniciar novas conversas comerciais.',
      ],
    },
    verbs: {
      eyebrow: 'Como funciona',
      title: 'Quatro passos da busca à primeira conversa.',
      description: 'Cada etapa foi pensada para você chegar ao contato com mais contexto e menos tentativa e erro.',
      items: [
        [Search, 'Encontre', 'Busca por atividade, região, porte, situação cadastral e outras características.'],
        [Target, 'Priorize', 'Perfil de cliente ideal, aderência explicada e recomendações de empresas.'],
        [Building2, 'Conheça', 'Ficha empresarial, contatos disponíveis, presença digital e relações cadastrais.'],
        [ListChecks, 'Aborde', 'Listas organizadas e sugestões de abordagem para a equipe revisar e utilizar.'],
      ],
    },
    differentials: {
      eyebrow: 'Diferenciais',
      title: 'Prospecção com direção, não com sorte.',
      items: [
        [Target, 'O perfil do cliente orienta a busca', 'Defina o público que deseja atender e reaproveite esse perfil nas buscas e recomendações.'],
        [Lightbulb, 'A prioridade tem explicação', 'A aderência mostra quais características combinam com o perfil e onde faltam informações.'],
        [Compass, 'Escolha onde procurar', 'A análise de mercado mostra a concentração de empresas por setor e região.'],
        [Network, 'Cada cadastro ganha contexto', 'Matriz e filiais, contatos compartilhados, origem dos dados e informações disponíveis antes do contato.'],
        [History, 'O trabalho continua organizado', 'Carteira, histórico, listas, mapa e fila para retomar a prospecção de onde parou.'],
        [Bot, 'IA em tarefas concretas', 'Sugestões de critérios de busca e rascunhos de abordagem com o contexto do seu negócio.'],
      ],
    },
    examples: {
      eyebrow: 'Na prática',
      title: 'Você vende isto. Estas são as empresas que pode encontrar.',
      sells: 'Vende',
      finds: 'Quer encontrar',
      uses: 'Como usa',
      items: [
        [Package, 'Distribuidora de embalagens', 'Embalagens para food service', 'Padarias e restaurantes na sua região', 'Filtra por atividade e bairro, prioriza quem tem maior aderência e monta a rota de visitas.'],
        [Megaphone, 'Agência de marketing', 'Gestão de presença digital', 'Empresas de um segmento específico', 'Avalia a presença digital de cada empresa e prepara uma conversa com contexto real.'],
        [Terminal, 'Empresa de software', 'Sistema de gestão B2B', 'Empresas no porte que já atende', 'Define o perfil ideal e organiza listas de potenciais clientes por território para a equipe.'],
      ],
    },
    cta: {
      title: 'Veja quais empresas combinam com o seu negócio.',
      copy: 'Vamos montar uma busca com o setor, a região e o perfil de cliente que você deseja conquistar.',
    },
  },
  en: {
    intro: {
      eyebrow: 'Launch · NorthDev Prospec',
      title: 'Find companies that match what you',
      highlight: 'sell.',
      description: 'Discover new potential customers, choose where to prospect and organize your next outreach with business data and market intelligence.',
    },
    primary: 'I want to try Prospec',
    access: 'I already have access',
    about: {
      eyebrow: 'What it is',
      title: 'A prospecting platform for companies that sell to other businesses.',
      paragraphs: [
        'You define who you want to serve — for example, restaurants in a given region, clinics of a certain size or recently opened companies — and find records that match those criteria.',
        'From there, you analyze each company, check available contacts, identify which ones best match your ideal customer profile and organize a list to work on.',
        'The platform also helps you compare regions and sectors, discover other compatible companies and prepare an AI-assisted outreach. Your team gets a more focused routine to start new sales conversations.',
      ],
    },
    verbs: {
      eyebrow: 'How it works',
      title: 'Four steps from search to first conversation.',
      description: 'Each stage helps you reach out with more context and less trial and error.',
      items: [
        [Search, 'Find', 'Search by activity, region, company size, registration status and other attributes.'],
        [Target, 'Prioritize', 'Ideal customer profile, explained fit and company recommendations.'],
        [Building2, 'Understand', 'Company profile, available contacts, digital presence and registration relationships.'],
        [ListChecks, 'Reach out', 'Organized lists and outreach suggestions for your team to review and use.'],
      ],
    },
    differentials: {
      eyebrow: 'Differentiators',
      title: 'Prospecting with direction, not luck.',
      items: [
        [Target, 'Your customer profile guides the search', 'Define the audience you want to serve and reuse that profile across searches and recommendations.'],
        [Lightbulb, 'Priority comes with an explanation', 'Fit shows which attributes match your profile and where information is missing.'],
        [Compass, 'Choose where to look', 'Market analysis shows how companies concentrate by sector and region.'],
        [Network, 'Every record gets context', 'Headquarters and branches, shared contacts, data sources and available information before you reach out.'],
        [History, 'Work stays organized', 'Portfolio, history, lists, map and queue so you can pick up prospecting where you left off.'],
        [Bot, 'AI for concrete tasks', 'Search criteria suggestions and outreach drafts with your business context.'],
      ],
    },
    examples: {
      eyebrow: 'In practice',
      title: 'You sell this. These are the companies you can find.',
      sells: 'Sells',
      finds: 'Wants to find',
      uses: 'How they use it',
      items: [
        [Package, 'Packaging distributor', 'Food service packaging', 'Bakeries and restaurants in their region', 'Filters by activity and neighborhood, prioritizes the best fits and plans the visit route.'],
        [Megaphone, 'Marketing agency', 'Digital presence management', 'Companies in a specific segment', 'Reviews each company’s digital presence and prepares a conversation with real context.'],
        [Terminal, 'Software company', 'B2B management system', 'Companies in the size range it already serves', 'Defines the ideal profile and organizes prospect lists by territory for the team.'],
      ],
    },
    cta: {
      title: 'See which companies match your business.',
      copy: 'Let’s build a search with the sector, region and customer profile you want to win.',
    },
  },
} as const;

const accents = ['blue', 'cyan', 'violet'] as const;

export function ProspecPage() {
  const { language } = useLanguage();
  const page = content[language];

  const actions = (
    <div className="flex flex-col justify-center gap-3 sm:flex-row">
      <a href={prospec.trialUrl[language]} target="_blank" rel="noreferrer" className="starfall-button starfall-button-primary">
        {page.primary} <ArrowUpRight aria-hidden="true" />
      </a>
      <a href={prospec.appUrl} target="_blank" rel="noreferrer" className="starfall-button starfall-button-secondary">
        {page.access} <ArrowRight aria-hidden="true" />
      </a>
    </div>
  );

  return (
    <>
      <PageIntro {...page.intro} palette="carrot">{actions}</PageIntro>

      <section className="section-space pt-0">
        <div className="container-site">
          <div className="grid grid-cols-[minmax(0,1fr)] gap-12 lg:grid-cols-2 lg:items-center">
            <div className="min-w-0" data-reveal>
              <p className="eyebrow">{page.about.eyebrow}</p>
              <h2 className="mt-4 font-display text-3xl font-bold leading-[1.05] tracking-[-0.03em] text-heading sm:text-4xl lg:text-[2.75rem]">
                {page.about.title}
              </h2>
              {page.about.paragraphs.map((paragraph) => (
                <p key={paragraph} className="mt-5 max-w-xl text-base leading-7 text-muted">{paragraph}</p>
              ))}
            </div>
            <div className="min-w-0" data-reveal>
              <ProspecDemo />
            </div>
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container-site">
          <div data-reveal>
            <SectionHeading eyebrow={page.verbs.eyebrow} title={page.verbs.title} description={page.verbs.description} />
          </div>
          <div className="mt-10 grid auto-rows-fr gap-4 md:grid-cols-2 lg:mt-14 xl:grid-cols-4">
            {page.verbs.items.map(([Icon, title, description], index) => (
              <TechCard key={title} accent={accents[index % 3]} className="prospec-step-card" revealDelay={index * 0.06}>
                <div className="flex items-center justify-between">
                  <span className="service-icon"><Icon /></span>
                  <span className="service-number">0{index + 1}</span>
                </div>
                <h3 className="mt-8 font-display text-2xl font-bold tracking-tight text-heading">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{description}</p>
              </TechCard>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container-site">
          <div data-reveal>
            <SectionHeading eyebrow={page.differentials.eyebrow} title={page.differentials.title} />
          </div>
          <div className="prospec-differentials mt-10 lg:mt-14">
            {page.differentials.items.map(([Icon, title, description]) => (
              <div key={title} className="prospec-differential" data-reveal>
                <span className="service-icon"><Icon /></span>
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container-site">
          <div data-reveal>
            <SectionHeading eyebrow={page.examples.eyebrow} title={page.examples.title} />
          </div>
          <div className="mt-10 grid gap-4 lg:mt-14 lg:grid-cols-3">
            {page.examples.items.map(([Icon, name, sells, finds, uses], index) => (
              <TechCard key={name} accent={accents[index % 3]} className="prospec-example-card" revealDelay={index * 0.06}>
                <span className="service-icon"><Icon /></span>
                <h3 className="mt-6 font-display text-xl font-bold text-heading">{name}</h3>
                <dl className="prospec-example-list">
                  <div><dt>{page.examples.sells}</dt><dd>{sells}</dd></div>
                  <div><dt>{page.examples.finds}</dt><dd>{finds}</dd></div>
                  <div><dt>{page.examples.uses}</dt><dd>{uses}</dd></div>
                </dl>
              </TechCard>
            ))}
          </div>

          <div className="prospec-cta" data-reveal>
            <span className="prospec-launch-tag"><Sparkles aria-hidden="true" />{language === 'pt' ? 'Lançamento' : 'Launch'}</span>
            <h2 className="section-title mt-5">{page.cta.title}</h2>
            <p className="section-copy mx-auto mt-5">{page.cta.copy}</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a href={prospec.trialUrl[language]} target="_blank" rel="noreferrer" className="button-primary justify-center">
                {page.primary} <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
              <a href={prospec.appUrl} target="_blank" rel="noreferrer" className="button-secondary justify-center">
                {page.access} <ArrowRight className="size-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </>
  );
}
