import { PageIntro } from '../components/PageIntro';
import { Contact } from '../sections/Contact';
import { Pricing } from '../sections/Pricing';

export function PricingPage() {
  return (
    <>
      <PageIntro
        eyebrow="Planos e preços"
        title="Tecnologia acessível para"
        highlight="fazer seu negócio avançar."
        description="Escolha o melhor ponto de partida para fortalecer sua presença digital, automatizar o atendimento e criar novas oportunidades."
      />
      <Pricing />
      <Contact />
    </>
  );
}
