import { ArrowUpRight } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { projects } from '../data/site';

export function Projects() {
  return (
    <section id="projetos" className="section-space overflow-hidden">
      <div className="container-site">
        <div className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between" data-reveal>
          <SectionHeading
            eyebrow="Projetos selecionados"
            title="Trabalhos que transformam intenção em presença digital."
            description="Experiências criadas para contextos, públicos e objetivos diferentes — sempre com clareza e personalidade."
          />
          <a href="#contato" className="button-secondary w-fit shrink-0">Criar algo novo <ArrowUpRight className="size-4" /></a>
        </div>

        <div className="mt-10 grid gap-4 lg:mt-14 lg:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.name}
              className={`project-card ${index === 0 ? 'lg:col-span-2' : ''}`}
              data-reveal
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <a href={project.url} target="_blank" rel="noreferrer" className="project-preview group" aria-label={`Visualizar ${project.name}`}>
                <img src={project.image} alt={`Página inicial do projeto ${project.name}`} loading="lazy" />
                <span className="project-open"><ArrowUpRight /></span>
              </a>
              <div className="p-5 sm:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">{project.category}</p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-heading sm:text-3xl">{project.name}</h3>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-muted sm:text-base">{project.description}</p>
                <div className="mt-6 flex flex-wrap items-center gap-2">
                  {project.technologies.map((technology) => <span key={technology} className="tech-pill">{technology}</span>)}
                  <a href={project.url} target="_blank" rel="noreferrer" className="ml-auto inline-flex items-center gap-2 text-sm font-semibold text-heading transition-colors hover:text-accent">
                    Visualizar <ArrowUpRight className="size-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
