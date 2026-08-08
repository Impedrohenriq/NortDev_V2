import { Blocks, Braces, Gauge, Workflow } from 'lucide-react';
import type { NavItem, ProcessStep, Project, Service } from '../types/site';

export const navItems: NavItem[] = [
  { label: 'Sobre', href: '/sobre' },
  { label: 'Soluções', href: '/solucoes' },
  { label: 'Modelos', href: '/Modelos' },
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
    description: 'Modelo de site profissional com narrativa editorial, estrutura modular e apresentação clara de serviços, projetos e diferenciais.',
    url: 'https://siteprofissional-ef8.pages.dev/',
    image: '/projects/site-profissional.png',
    imageWidth: 1265,
    imageHeight: 712,
    accent: 'cyan',
  },
  {
    name: 'NorthDev Auto Detailing',
    category: 'Experiência premium · Serviços',
    description: 'Landing page de alta conversão para um estúdio de estética automotiva, com direção visual imersiva e foco em agendamento.',
    url: 'https://estetica-automotiva2.vercel.app/',
    image: '/projects/estetica-automotiva.png',
    imageWidth: 1265,
    imageHeight: 712,
    accent: 'blue',
  },
  {
    name: 'Vértice Imóveis',
    category: 'Modelo institucional · Imobiliária',
    description: 'Modelo premium para imobiliárias apresentarem imóveis exclusivos, serviços de curadoria e uma experiência de atendimento personalizada.',
    url: 'https://imobiliaria-modelo.pages.dev/',
    image: '/projects/imobiliaria-modelo.png',
    imageWidth: 1265,
    imageHeight: 712,
    accent: 'cyan',
  },
  {
    name: 'Sorriso Prime',
    category: 'Modelo institucional · Odontologia',
    description: 'Modelo sofisticado para clínicas odontológicas apresentarem especialidades, diferenciais e conduzirem novos pacientes ao agendamento.',
    url: 'https://dentista-modelo.pages.dev/',
    image: '/projects/dentista-modelo.png',
    imageWidth: 1265,
    imageHeight: 712,
    accent: 'blue',
  },
  {
    name: 'Lumière Clínica de Estética',
    category: 'Modelo institucional · Estética e bem-estar',
    description: 'Modelo premium para clínicas de estética apresentarem tratamentos, transmitirem cuidado e direcionarem novos clientes ao agendamento.',
    url: 'https://clinica-estetica-modelo.pages.dev/',
    image: '/projects/clinica-estetica-modelo.png',
    imageWidth: 1265,
    imageHeight: 712,
    accent: 'cyan',
  },
  {
    name: 'MJ Emporium',
    category: 'Catálogo digital · E-commerce',
    description: 'Vitrine mobile first para venda de iPhones, com catálogo organizado, experiência refinada e contato direto pelo WhatsApp.',
    url: 'https://mjemporium.vercel.app/',
    image: '/projects/mj-emporium.png',
    imageWidth: 1265,
    imageHeight: 712,
    accent: 'blue',
  },
  {
    name: 'Bolo & Champagne',
    category: 'Portfólio autoral · Gastronomia',
    description: 'Site institucional para confeitaria artesanal, construído para apresentar criações autorais e facilitar novas encomendas.',
    url: 'https://benditobolodecoracao.vercel.app/',
    image: '/projects/bendito-bolo.webp',
    imageWidth: 1265,
    imageHeight: 712,
    accent: 'cyan',
  },
  {
    name: 'Estúdio Lume',
    category: 'Landing page · Arquitetura e interiores',
    description: 'Site institucional para um estúdio de arquitetura autoral, com apresentação imersiva de Modelos, transformações e áreas de atuação.',
    url: 'https://estudiolume.vercel.app/',
    image: '/projects/estudio-lume.webp',
    imageWidth: 1280,
    imageHeight: 768,
    accent: 'cyan',
  },
];

export const processSteps: ProcessStep[] = [
  { number: '01', title: 'Entender', description: 'Mapeamos o contexto, o objetivo e o que realmente precisa ser resolvido.' },
  { number: '02', title: 'Direcionar', description: 'Transformamos o cenário em escopo, prioridades e uma rota de execução clara.' },
  { number: '03', title: 'Construir', description: 'Criamos em ciclos curtos, com visibilidade e decisões orientadas por qualidade.' },
  { number: '04', title: 'Evoluir', description: 'Entregamos, medimos e deixamos o produto preparado para os próximos movimentos.' },
];

export const company = {
  email: 'northdev.solutions@gmail.com',
  phone: '+55 (31) 99967-0890',
  whatsappUrl: `https://wa.me/5531999670890?text=${encodeURIComponent('Olá! Gostaria de solicitar um orçamento.')}`,
  instagramUrl: 'https://www.instagram.com/northdeveloper/',
  location: 'Brasil · remoto ou presencial',
};
