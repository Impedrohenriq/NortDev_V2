import { PageIntro } from '../components/PageIntro';
import { Contact } from '../sections/Contact';
import { Process } from '../sections/Process';
import { useLanguage } from '../i18n/LanguageContext';

export function ProcessPage() {
  const { language } = useLanguage();
  const copy = language === 'pt' ? {
    eyebrow: 'Processo',
    title: 'Um caminho claro do contexto à',
    highlight: 'evolução.',
    description: 'Decisões transparentes, ciclos objetivos e acompanhamento próximo em todas as etapas do projeto.',
  } : {
    eyebrow: 'Process',
    title: 'A clear path from context to',
    highlight: 'evolution.',
    description: 'Transparent decisions, objective cycles and close collaboration throughout every project stage.',
  };
  return (
    <>
      <PageIntro
        {...copy}
        palette="orange"
      />
      <Process />
      <Contact />
    </>
  );
}
