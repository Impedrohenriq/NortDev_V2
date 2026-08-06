import { PageIntro } from '../components/PageIntro';
import { Contact } from '../sections/Contact';
import { Projects } from '../sections/Projects';
import { useLanguage } from '../i18n/LanguageContext';

export function ProjectsPage() {
  const { language } = useLanguage();
  const copy = language === 'pt' ? {
    eyebrow: 'Modelos',
    title: 'Produtos digitais com',
    highlight: 'clareza e personalidade.',
    description: 'Uma seleção de experiências desenvolvidas para diferentes contextos, públicos e objetivos de negócio.',
  } : {
    eyebrow: 'Projects',
    title: 'Digital products with',
    highlight: 'clarity and personality.',
    description: 'A selection of experiences developed for different contexts, audiences and business goals.',
  };
  return (
    <>
      <PageIntro
        {...copy}
        palette="pink"
      />
      <Projects />
      <Contact />
    </>
  );
}
