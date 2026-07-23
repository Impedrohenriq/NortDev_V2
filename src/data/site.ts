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
    url: 'https://estetica-automotiva-two.vercel.app/',
    image: '/projects/estetica-automotiva.webp',
    imageWidth: 1265,
    imageHeight: 712,
    accent: 'cyan',
  },
  {
    name: 'MJ Emporium',
    category: 'Catálogo digital · E-commerce',
    description: 'Vitrine mobile first para venda de iPhones, com catálogo organizado, experiência refinada e contato direto pelo WhatsApp.',
    url: 'https://mjemporium.vercel.app/',
    image: '/projects/mj-emporium.webp',
    imageWidth: 1265,
    imageHeight: 712,
    accent: 'blue',
  },
  {
    name: 'Bendito Bolo',
    category: 'Portfólio autoral · Gastronomia',
    description: 'Site institucional para confeitaria artesanal, construído para apresentar criações autorais e facilitar novas encomendas.',
    url: 'https://benditobolodecoracao.vercel.app/',
    image: '/projects/bendito-bolo.webp',
    imageWidth: 1265,
    imageHeight: 712,
    accent: 'cyan',
  },
  {
    name: 'Clínica de Estética Feminina',
    category: 'Landing page · Estética e bem-estar',
    description: 'Experiência institucional premium para apresentar tratamentos estéticos, transmitir cuidado e direcionar agendamentos pelo WhatsApp.',
    url: 'https://clinicaesteticanorthdev.vercel.app/',
    image: '/projects/clinica-estetica.webp',
    imageWidth: 1265,
    imageHeight: 712,
    accent: 'blue',
  },
  {
    name: 'Estúdio Lume',
    category: 'Landing page · Arquitetura e interiores',
    description: 'Site institucional para um estúdio de arquitetura autoral, com apresentação imersiva de projetos, transformações e áreas de atuação.',
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
