import { PageIntro } from '../components/PageIntro';
import { About } from '../sections/About';
import { Contact } from '../sections/Contact';
import { useLanguage } from '../i18n/LanguageContext';

export function AboutPage() {
  const { language } = useLanguage();
  const copy = language === 'pt' ? {
    eyebrow: 'Sobre a North Dev',
    title: 'Tecnologia próxima do',
    highlight: 'negócio.',
    description: 'Construímos produtos digitais combinando visão estratégica, proximidade e decisões técnicas que geram impacto real.',
  } : {
    eyebrow: 'About North Dev',
    title: 'Technology close to the',
    highlight: 'business.',
    description: 'We build digital products by combining strategic vision, proximity and technical decisions that create real impact.',
  };
  return (
    <>
      <PageIntro
        {...copy}
        palette="violet"
      />
      <About />
      <Contact />
    </>
  );
}
