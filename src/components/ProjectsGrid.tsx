import { ArrowUpRight } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import type { Project } from '../types/site';
import { useLanguage } from '../i18n/LanguageContext';

type ProjectsGridProps = {
  projects: Project[];
  emptyState?: {
    title: string;
    description: string;
  };
};

export function ProjectsGrid({ projects, emptyState }: ProjectsGridProps) {
  const reduceMotion = useReducedMotion();
  const { language } = useLanguage();

  if (projects.length === 0 && emptyState) {
    return (
      <div className="projects-empty" data-reveal>
        <h3>{emptyState.title}</h3>
        <p>{emptyState.description}</p>
      </div>
    );
  }

  return (
    <div className="mt-10 grid gap-4 lg:mt-14 lg:grid-cols-2">
      {projects.map((project, index) => (
        <motion.article
          key={project.name}
          className={`project-card project-card-${project.accent} ${projects.length > 1 && index === 0 ? 'lg:col-span-2' : ''}`}
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: reduceMotion ? 0 : 0.58, delay: reduceMotion ? 0 : index * 0.08, ease: [0.22, 1, 0.36, 1] }}
          whileHover={reduceMotion ? undefined : { y: -8, transition: { type: 'spring', stiffness: 340, damping: 26, mass: 0.6, delay: 0 } }}
        >
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="project-preview group"
            aria-label={`${language === 'pt' ? 'Visualizar' : 'View'} ${project.name}`}
          >
            <img
              src={project.image}
              alt={`${language === 'pt' ? 'Página inicial do projeto' : 'Project home page'} ${project.name}`}
              width={project.imageWidth}
              height={project.imageHeight}
              loading="lazy"
              decoding="async"
              sizes={projects.length > 1 && index === 0 ? '(min-width: 1024px) 1344px, 100vw' : '(min-width: 1024px) 672px, 100vw'}
            />
            <span className="project-open"><ArrowUpRight /></span>
          </a>
          <div className="p-5 sm:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              {language === 'pt' ? project.category : project.categoryEn}
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-heading sm:text-3xl">{project.name}</h3>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-muted sm:text-base">
              {language === 'pt' ? project.description : project.descriptionEn}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-2">
              <a href={project.url} target="_blank" rel="noreferrer" className="project-link ml-auto">
                {language === 'pt' ? 'Visualizar' : 'View project'} <ArrowUpRight className="size-4" />
              </a>
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
