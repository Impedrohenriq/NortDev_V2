import type { Language } from '../i18n/LanguageContext';

type LocalizedFaq = Record<Language, Array<{ question: string; answer: string }>>;

/**
 * Perguntas do Prospec. Cada resposta foi conferida na página oficial de planos
 * (/planos) e na Central de ajuda (/ajuda/entrada) do produto em 06/11/2026.
 * Não incluir aqui prazo/entrega de sites, nem promessas de teste grátis: o teste
 * grátis aparece como inativo (`testeGratisAtivo: false`) na API do Prospec.
 */
export const prospecFaq: LocalizedFaq = {
  pt: [
    {
      question: 'Como funcionam os créditos?',
      answer: 'Os créditos são compartilhados por todas as pessoas da organização. As empresas entregues em uma busca usam créditos; visualizar empresas que já estão na carteira continua disponível quando o saldo acaba. Os créditos do plano renovam todo mês e não acumulam.',
    },
    {
      question: 'Uma empresa que já está na minha carteira consome crédito de novo?',
      answer: 'Não. Uma empresa já entregue à sua organização não consome crédito outra vez.',
    },
    {
      question: 'A inteligência artificial consome créditos?',
      answer: 'Sim. A IA usa os créditos do plano. A busca por texto e a ajuda não têm custo. Sempre revise as sugestões e abordagens antes de usá-las.',
    },
    {
      question: 'O que acontece se os créditos acabarem?',
      answer: 'Você pode comprar pacotes avulsos de 100, 500 ou 1.000 créditos, disponíveis para assinaturas ativas. Os créditos avulsos valem 12 meses.',
    },
    {
      question: 'Quantas pessoas podem usar o mesmo plano?',
      answer: 'O Básico inclui 2 usuários, o Profissional 3 e a Equipe 5. Na Equipe, cada usuário adicional custa R$ 149 por mês e traz mais 800 créditos.',
    },
    {
      question: 'Existe plano anual?',
      answer: 'Sim, nos planos Profissional (R$ 4.490 por ano) e Equipe (R$ 9.900 por ano). O anual equivale a 10 mensalidades, ou seja, 2 meses grátis.',
    },
    {
      question: 'Como eu começo?',
      answer: 'Crie sua conta, confirme seu e-mail e informe o CNPJ da empresa. Depois dessas validações, a NorthDev ativa o plano contratado. Se preferir, chame a gente no WhatsApp e tiramos suas dúvidas antes.',
    },
  ],
  en: [
    {
      question: 'How do credits work?',
      answer: 'Credits are shared by everyone in the organization. Companies delivered in a search use credits; viewing companies already in your portfolio remains available when the balance runs out. Plan credits renew every month and do not accumulate.',
    },
    {
      question: 'Does a company already in my portfolio use credits again?',
      answer: 'No. A company already delivered to your organization does not use credits a second time.',
    },
    {
      question: 'Does artificial intelligence use credits?',
      answer: 'Yes. AI uses your plan credits. Text search and help are free of charge. Always review suggestions and outreach drafts before using them.',
    },
    {
      question: 'What happens if I run out of credits?',
      answer: 'You can buy one-off packs of 100, 500 or 1,000 credits, available to active subscriptions. One-off credits are valid for 12 months.',
    },
    {
      question: 'How many people can use the same plan?',
      answer: 'Basic includes 2 users, Professional 3 and Team 5. On Team, each additional user costs R$ 149 per month and adds 800 credits.',
    },
    {
      question: 'Is there an annual plan?',
      answer: 'Yes, on Professional (R$ 4,490 per year) and Team (R$ 9,900 per year). Annual billing equals 10 monthly payments, that is, 2 months free.',
    },
    {
      question: 'How do I get started?',
      answer: 'Create your account, confirm your email and enter your company tax ID (CNPJ). After these checks, NorthDev activates the plan you chose. If you prefer, message us on WhatsApp and we will answer your questions first.',
    },
  ],
};
