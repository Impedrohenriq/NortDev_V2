import { PageIntro } from '../components/PageIntro';
import { Contact } from '../sections/Contact';
import { Services } from '../sections/Services';
import { useLanguage } from '../i18n/LanguageContext';

export function ServicesPage() {
  const { language } = useLanguage();
  const copy = language === 'pt' ? {
    eyebrow: 'Soluções',
    title: 'Tecnologia para transformar',
    highlight: 'desafios em avanço.',
    description: 'Desenvolvimento, automação e produtos sob medida para resolver necessidades reais e sustentar o crescimento.',
  } : {
    eyebrow: 'Solutions',
    title: 'Technology to turn',
    highlight: 'challenges into progress.',
    description: 'Development, automation and custom products that solve real needs and sustain growth.',
  };
  return (
    <>
      <PageIntro
        {...copy}
        palette="gray"
      />
      <Services />
      <Contact />
    </>
  );
}
