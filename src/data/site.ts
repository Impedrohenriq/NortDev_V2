import { Blocks, Braces, Gauge, Workflow } from 'lucide-react';
import type { NavItem, ProcessStep, Project, Service } from '../types/site';

export const navItems: NavItem[] = [
  { label: 'Sobre', href: '/sobre' },
  { label: 'Soluções', href: '/solucoes' },
  {
    label: 'Modelos',
    href: '/modelos',
    children: [
      {
        label: 'Landing Pages',
        labelEn: 'Landing Pages',
        href: '/projetos/landing-pages',
        description: 'Páginas de alta conversão para campanhas e tráfego pago.',
        descriptionEn: 'High-conversion pages for campaigns and paid traffic.',
      },
      {
        label: 'Sites Institucionais',
        labelEn: 'Institutional Websites',
        href: '/projetos/sites',
        description: 'Autoridade digital, SEO local e presença profissional.',
        descriptionEn: 'Digital authority, local SEO and professional presence.',
      },
      {
        label: 'Gestão Inteligente',
        labelEn: 'Intelligent Management',
        href: '/projetos/gestao',
        description: 'Gestão, atendimento, vendas e prospecção em um só lugar.',
        descriptionEn: 'Management, service, sales and prospecting in one place.',
      },
    ],
  },
  { label: 'Prospec', href: '/prospec', badge: 'Novo', badgeEn: 'New' },
  { label: 'Processo', href: '/processo' },
  { label: 'Preços', href: '/precos' },
];

export const services: Service[] = [
  {
    number: '01',
    title: 'Desenvolvimento',
    description: 'Interfaces sólidas, integrações limpas e software construído para evoluir com segurança.',
    icon: Braces,
  },
  {
    number: '02',
    title: 'Automação',
    description: 'Fluxos manuais se transformam em processos rápidos, confiáveis e fáceis de acompanhar.',
    icon: Workflow,
  },
  {
    number: '03',
    title: 'SaaS sob medida',
    description: 'Produtos digitais com arquitetura leve, visão de negócio e uma experiência que gera valor.',
    icon: Blocks,
  },
  {
    number: '04',
    title: 'Evolução digital',
    description: 'Diagnóstico e melhoria de produtos existentes com foco em clareza, performance e conversão.',
    icon: Gauge,
  },
];

export const projects: Project[] = [
  {
    name: 'NorthDev — Site Profissional',
    category: 'Modelo institucional · Tecnologia',
    categoryEn: 'Institutional template · Technology',
    description: 'Modelo de site profissional com narrativa editorial, estrutura modular e apresentação clara de serviços, projetos e diferenciais.',
    descriptionEn: 'A professional website template with editorial storytelling, a modular structure and clear presentation of services, projects and differentiators.',
    url: 'https://siteprofissional-ef8.pages.dev/',
    image: '/projects/site-profissional.png',
    imageWidth: 1265,
    imageHeight: 712,
    accent: 'cyan',
    type: 'site',
  },
  {
    name: 'NorthDev Auto Detailing',
    category: 'Experiência premium · Serviços',
    categoryEn: 'Premium experience · Services',
    description: 'Landing page de alta conversão para um estúdio de estética automotiva, com direção visual imersiva e foco em agendamento.',
    descriptionEn: 'A high-conversion landing page for an auto detailing studio, with immersive visual direction and a focus on bookings.',
    url: 'https://estetica-automotiva2.vercel.app/',
    image: '/projects/estetica-automotiva.webp',
    imageWidth: 1265,
    imageHeight: 712,
    accent: 'blue',
    type: 'landing',
    featured: true,
  },
  {
    name: 'Vértice Imóveis',
    category: 'Modelo institucional · Imobiliária',
    categoryEn: 'Institutional template · Real estate',
    description: 'Modelo premium para imobiliárias apresentarem imóveis exclusivos, serviços de curadoria e uma experiência de atendimento personalizada.',
    descriptionEn: 'A premium template for real estate agencies to present exclusive properties, curation services and a personalized client experience.',
    url: 'https://imobiliaria-modelo.pages.dev/',
    image: '/projects/imobiliaria-modelo.png',
    imageWidth: 1265,
    imageHeight: 712,
    accent: 'cyan',
    type: 'site',
    featured: true,
  },
  {
    name: 'Sorriso Prime',
    category: 'Modelo institucional · Odontologia',
    categoryEn: 'Institutional template · Dentistry',
    description: 'Modelo sofisticado para clínicas odontológicas apresentarem especialidades, diferenciais e conduzirem novos pacientes ao agendamento.',
    descriptionEn: 'A sophisticated template for dental clinics to present specialties, differentiators and guide new patients toward booking.',
    url: 'https://dentista-modelo.pages.dev/',
    image: '/projects/dentista-modelo.png',
    imageWidth: 1265,
    imageHeight: 712,
    accent: 'blue',
    type: 'site',
  },
  {
    name: 'Lumière Clínica de Estética',
    category: 'Modelo institucional · Estética e bem-estar',
    categoryEn: 'Institutional template · Beauty and wellness',
    description: 'Modelo premium para clínicas de estética apresentarem tratamentos, transmitirem cuidado e direcionarem novos clientes ao agendamento.',
    descriptionEn: 'A premium template for beauty clinics to present treatments, convey care and guide new clients toward booking.',
    url: 'https://clinica-estetica-modelo.pages.dev/',
    image: '/projects/clinica-estetica-modelo.png',
    imageWidth: 1265,
    imageHeight: 712,
    accent: 'cyan',
    type: 'site',
  },
  {
    name: 'MJ Emporium',
    category: 'Catálogo digital · E-commerce',
    categoryEn: 'Digital catalog · E-commerce',
    description: 'Vitrine mobile first para venda de iPhones, com catálogo organizado, experiência refinada e contato direto pelo WhatsApp.',
    descriptionEn: 'A mobile-first iPhone storefront with an organized catalog, refined experience and direct WhatsApp contact.',
    url: 'https://mjemporium.vercel.app/',
    image: '/projects/mj-emporium.webp',
    imageWidth: 1265,
    imageHeight: 712,
    accent: 'blue',
    type: 'landing',
    featured: true,
  },
  {
    name: 'Bolo & Champagne',
    category: 'Portfólio autoral · Gastronomia',
    categoryEn: 'Author portfolio · Food',
    description: 'Site institucional para confeitaria artesanal, construído para apresentar criações autorais e facilitar novas encomendas.',
    descriptionEn: 'An institutional website for an artisan bakery, designed to showcase original creations and simplify new orders.',
    url: 'https://benditobolodecoracao.vercel.app/',
    image: '/projects/bendito-bolo.webp',
    imageWidth: 1265,
    imageHeight: 712,
    accent: 'cyan',
    type: 'landing',
  },
];

export const processSteps: ProcessStep[] = [
  { number: '01', title: 'Entender', description: 'Mapeamos o contexto, o objetivo e o que realmente precisa ser resolvido.' },
  { number: '02', title: 'Direcionar', description: 'Transformamos o cenário em escopo, prioridades e uma rota de execução clara.' },
  { number: '03', title: 'Construir', description: 'Criamos em ciclos curtos, com visibilidade e decisões orientadas por qualidade.' },
  { number: '04', title: 'Evoluir', description: 'Entregamos, medimos e deixamos o produto preparado para os próximos movimentos.' },
];

export const whatsappNumber = '5531999670890';

export function whatsappLink(message: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export type WhatsappTopic = 'default' | 'landing' | 'sites' | 'management' | 'prospec' | 'pricing' | 'process';

/** Mensagens pré-preenchidas do WhatsApp, por assunto da página em que o visitante está. */
export const whatsappMessages: Record<WhatsappTopic, { pt: string; en: string }> = {
  default: {
    pt: 'Olá! Gostaria de solicitar um orçamento.',
    en: 'Hello! I would like to request a quote.',
  },
  landing: {
    pt: 'Olá! Quero saber mais sobre uma landing page para o meu negócio.',
    en: 'Hello! I would like to know more about a landing page for my business.',
  },
  sites: {
    pt: 'Olá! Quero saber mais sobre um site institucional para o meu negócio.',
    en: 'Hello! I would like to know more about an institutional website for my business.',
  },
  management: {
    pt: 'Olá! Quero conhecer o aplicativo de Gestão Inteligente.',
    en: 'Hello! I would like to learn about the Intelligent Management app.',
  },
  prospec: {
    pt: 'Olá! Quero saber mais sobre o NorthDev Prospec.',
    en: 'Hello! I would like to know more about NorthDev Prospec.',
  },
  pricing: {
    pt: 'Olá! Quero tirar dúvidas sobre os planos e preços.',
    en: 'Hello! I would like to ask about your plans and pricing.',
  },
  process: {
    pt: 'Olá! Quero começar um projeto e entender como funciona o processo.',
    en: 'Hello! I would like to start a project and understand how the process works.',
  },
};

const whatsappTopicByPath: Record<string, WhatsappTopic> = {
  '/projetos/landing-pages': 'landing',
  '/projetos/sites': 'sites',
  '/projetos/gestao': 'management',
  '/prospec': 'prospec',
  '/precos': 'pricing',
  '/processo': 'process',
};

export function whatsappTopicForPath(pathname: string): WhatsappTopic {
  return whatsappTopicByPath[pathname] ?? 'default';
}

export const company = {
  email: 'northdev.solutions@gmail.com',
  phone: '+55 (31) 99967-0890',
  whatsappUrl: whatsappLink(whatsappMessages.default.pt),
  instagramUrl: 'https://www.instagram.com/northdeveloper/',
  location: 'Brasil · remoto ou presencial',
};

/**
 * Planos do NorthDev Prospec, copiados da página oficial de planos do produto
 * (https://prospeccao.northdevsolution.com.br/planos), conferida em 06/11/2026.
 * A API pública do Prospec não libera CORS para este domínio, então os valores ficam aqui:
 * ao mudar um preço no Prospec, atualize este bloco e `prospecPricingCheckedAt`.
 */
export const prospecPricingCheckedAt = '2026-11-06';

export type ProspecPlan = {
  code: 'BASICO' | 'PROFISSIONAL' | 'EQUIPE';
  name: { pt: string; en: string };
  monthly: number;
  /** Valor anual (equivale a 10 mensalidades: "2 meses grátis"). */
  annual?: number;
  credits: number;
  users: number;
  extraUser?: { monthly: number; credits: number };
  featured?: boolean;
};

export const prospecPlans: ProspecPlan[] = [
  { code: 'BASICO', name: { pt: 'Básico', en: 'Basic' }, monthly: 249, credits: 1_000, users: 2 },
  { code: 'PROFISSIONAL', name: { pt: 'Profissional', en: 'Professional' }, monthly: 449, annual: 4_490, credits: 2_500, users: 3, featured: true },
  { code: 'EQUIPE', name: { pt: 'Equipe', en: 'Team' }, monthly: 990, annual: 9_900, credits: 6_000, users: 5, extraUser: { monthly: 149, credits: 800 } },
];

/** Plano separado, só para acompanhar concorrentes no Instagram. */
export const prospecCompetitionPlan = { monthly: 49.9, annual: 499, users: 2, competitors: 5, aiSuggestions: 60 };

export const prospecCreditPacks = [100, 500, 1_000];

export const prospec = {
  appUrl: 'https://prospeccao.northdevsolution.com.br/',
  plansUrl: 'https://prospeccao.northdevsolution.com.br/planos',
  trialUrl: {
    pt: `https://wa.me/5531999670890?text=${encodeURIComponent('Olá! Quero testar o NorthDev Prospec.')}`,
    en: `https://wa.me/5531999670890?text=${encodeURIComponent('Hello! I would like to try NorthDev Prospec.')}`,
  },
};
