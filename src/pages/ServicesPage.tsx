import { PageIntro } from '../components/PageIntro';
import { Contact } from '../sections/Contact';
import { Services } from '../sections/Services';

export function ServicesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Soluções"
        title="Tecnologia para transformar"
        highlight="desafios em avanço."
        description="Desenvolvimento, automação e produtos sob medida para resolver necessidades reais e sustentar o crescimento."
      />
      <Services />
      <Contact />
    </>
  );
}
