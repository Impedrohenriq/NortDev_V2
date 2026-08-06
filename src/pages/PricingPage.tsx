import { PageIntro } from '../components/PageIntro';
import { Contact } from '../sections/Contact';
import { Pricing } from '../sections/Pricing';
import { useLanguage } from '../i18n/LanguageContext';

export function PricingPage() {
  const { language } = useLanguage();
  const copy = language === 'pt' ? {
    eyebrow: 'Planos e preços',
    title: 'Tecnologia acessível para',
    highlight: 'fazer seu negócio avançar.',
    description: 'Escolha o melhor ponto de partida para fortalecer sua presença digital, automatizar o atendimento e criar novas oportunidades.',
  } : {
    eyebrow: 'Plans and pricing',
    title: 'Accessible technology to',
    highlight: 'move your business forward.',
    description: 'Choose the best starting point to strengthen your digital presence, automate service and create new opportunities.',
  };
  return (
    <>
      <PageIntro
        {...copy}
        palette="green"
      />
      <Pricing />
      <Contact />
    </>
  );
}
