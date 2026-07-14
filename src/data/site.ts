import { Blocks, Braces, Gauge, Workflow } from 'lucide-react';
import type { NavItem, ProcessStep, Project, Service } from '../types/site';

export const navItems: NavItem[] = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Soluções', href: '#solucoes' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Processo', href: '#processo' },
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
    name: 'NorthDev Auto Detailing',
    category: 'Experiência premium · Serviços',
    description: 'Landing page de alta conversão para um estúdio de estética automotiva, com direção visual imersiva e foco em agendamento.',
    technologies: ['React', 'Landing Page', 'UX/UI'],
    url: 'https://estetica-automotiva-two.vercel.app/',
    image: '/projects/estetica-automotiva.png',
    accent: 'cyan',
  },
  {
    name: 'MJ Emporium',
    category: 'Catálogo digital · E-commerce',
    description: 'Vitrine mobile first para venda de iPhones, com catálogo organizado, experiência refinada e contato direto pelo WhatsApp.',
    technologies: ['React', 'Catálogo', 'Mobile First'],
    url: 'https://mjemporium.vercel.app/',
    image: '/projects/mj-emporium.png',
    accent: 'blue',
  },
  {
    name: 'Bendito Bolo',
    category: 'Portfólio autoral · Gastronomia',
    description: 'Site institucional para confeitaria artesanal, construído para apresentar criações autorais e facilitar novas encomendas.',
    technologies: ['React', 'Sanity', 'Portfólio'],
    url: 'https://benditobolodecoracao.vercel.app/',
    image: '/projects/bendito-bolo.png',
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
  email: 'hello@northdev.com',
  phone: '+55 (11) 99999-0000',
  location: 'Brasil · remoto ou presencial',
};
