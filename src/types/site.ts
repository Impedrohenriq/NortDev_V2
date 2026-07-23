import type { LucideIcon } from 'lucide-react';

export type NavItem = {
  label: string;
  href: string;
};

export type Service = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export type Project = {
  name: string;
  category: string;
  description: string;
  url: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  accent: 'blue' | 'cyan';
};

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};
