import type { LucideIcon } from 'lucide-react';

export type NavChild = {
  label: string;
  labelEn: string;
  href: string;
  description?: string;
  descriptionEn?: string;
};

export type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
};

export type ProjectType = 'landing' | 'site' | 'chatbot';

export type Service = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export type Project = {
  name: string;
  category: string;
  categoryEn: string;
  description: string;
  descriptionEn: string;
  url: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  accent: 'blue' | 'cyan';
  type: ProjectType;
};

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};
