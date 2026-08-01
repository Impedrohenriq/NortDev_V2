import { PageIntro } from '../components/PageIntro';
import { Contact } from '../sections/Contact';
import { Projects } from '../sections/Projects';

export function ProjectsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Projetos"
        title="Produtos digitais com"
        highlight="clareza e personalidade."
        description="Uma seleção de experiências desenvolvidas para diferentes contextos, públicos e objetivos de negócio."
      />
      <Projects />
      <Contact />
    </>
  );
}
