import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ProjectsGrid } from '../components/ProjectsGrid';
import { SectionHeading } from '../components/SectionHeading';
import { projects } from '../data/site';
import { useLanguage } from '../i18n/LanguageContext';
import type { ProjectType } from '../types/site';

type ProjectsProps = {
  filter?: ProjectType;
  hideHeading?: boolean;
  emptyState?: {
    title: string;
    description: string;
  };
};

export function Projects({ filter, hideHeading = false, emptyState }: ProjectsProps) {
  const { language } = useLanguage();
  const filtered = filter ? projects.filter((project) => project.type === filter) : projects;

  return (
    <section id="modelos" className="section-space overflow-hidden">
      <div className="container-site">
        {!hideHeading && (
          <div className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between" data-reveal>
            <SectionHeading
              eyebrow={language === 'pt' ? 'Modelos selecionados' : 'Selected projects'}
              title={language === 'pt' ? 'Trabalhos que transformam intenção em presença digital.' : 'Work that turns intention into digital presence.'}
              description={language === 'pt' ? 'Experiências criadas para contextos, públicos e objetivos diferentes — sempre com clareza e personalidade.' : 'Experiences created for different contexts, audiences and goals — always with clarity and personality.'}
            />
            <Link to="/#contato" className="button-secondary w-fit shrink-0">
              {language === 'pt' ? 'Criar algo novo' : 'Create something new'} <ArrowUpRight className="size-4" />
            </Link>
          </div>
        )}

        <ProjectsGrid projects={filtered} emptyState={emptyState} />
      </div>
    </section>
  );
}
