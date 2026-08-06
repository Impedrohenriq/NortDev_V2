import { ArrowUpRight } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { Link } from 'react-router-dom';
import { SectionHeading } from '../components/SectionHeading';
import { projects } from '../data/site';
import { useLanguage } from '../i18n/LanguageContext';

export function Projects() {
  const reduceMotion = useReducedMotion();
  const { language } = useLanguage();
  const englishProjects = [
    ['Premium experience · Services', 'A high-conversion landing page for an auto detailing studio, with immersive visual direction and a focus on bookings.'],
    ['Digital catalog · E-commerce', 'A mobile-first iPhone storefront with an organized catalog, refined experience and direct WhatsApp contact.'],
    ['Author portfolio · Food', 'An institutional website for an artisan bakery, designed to showcase original creations and simplify new orders.'],
    ['Landing page · Beauty and wellness', 'A premium institutional experience that presents aesthetic treatments, conveys care and directs WhatsApp bookings.'],
    ['Landing page · Architecture and interiors', 'An immersive institutional website for an architecture studio, presenting projects, transformations and areas of expertise.'],
  ];

  return (
    <section id="Modelos" className="section-space overflow-hidden">
      <div className="container-site">
        <div className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between" data-reveal>
          <SectionHeading
            eyebrow={language === 'pt' ? 'Modelos selecionados' : 'Selected projects'}
            title={language === 'pt' ? 'Trabalhos que transformam intenção em presença digital.' : 'Work that turns intention into digital presence.'}
            description={language === 'pt' ? 'Experiências criadas para contextos, públicos e objetivos diferentes — sempre com clareza e personalidade.' : 'Experiences created for different contexts, audiences and goals — always with clarity and personality.'}
          />
          <Link to="/#contato" className="button-secondary w-fit shrink-0">{language === 'pt' ? 'Criar algo novo' : 'Create something new'} <ArrowUpRight className="size-4" /></Link>
        </div>

        <div className="mt-10 grid gap-4 lg:mt-14 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.name}
              className={`project-card project-card-${project.accent} ${index === 0 ? 'lg:col-span-2' : ''}`}
              initial={reduceMotion ? false : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: reduceMotion ? 0 : 0.58, delay: reduceMotion ? 0 : index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={reduceMotion ? undefined : { y: -8, transition: { type: 'spring', stiffness: 340, damping: 26, mass: 0.6, delay: 0 } }}
            >
              <a href={project.url} target="_blank" rel="noreferrer" className="project-preview group" aria-label={`${language === 'pt' ? 'Visualizar' : 'View'} ${project.name}`}>
                <img
                  src={project.image}
                  alt={`${language === 'pt' ? 'Página inicial do projeto' : 'Project home page'} ${project.name}`}
                  width={project.imageWidth}
                  height={project.imageHeight}
                  loading="lazy"
                  decoding="async"
                  sizes={index === 0 ? '(min-width: 1024px) 1344px, 100vw' : '(min-width: 1024px) 672px, 100vw'}
                />
                <span className="project-open"><ArrowUpRight /></span>
              </a>
              <div className="p-5 sm:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">{language === 'pt' ? project.category : englishProjects[index][0]}</p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-heading sm:text-3xl">{project.name}</h3>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-muted sm:text-base">{language === 'pt' ? project.description : englishProjects[index][1]}</p>
                <div className="mt-6 flex flex-wrap items-center gap-2">
                  <a href={project.url} target="_blank" rel="noreferrer" className="project-link ml-auto">
                    {language === 'pt' ? 'Visualizar' : 'View project'} <ArrowUpRight className="size-4" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
