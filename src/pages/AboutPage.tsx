import { PageIntro } from '../components/PageIntro';
import { About } from '../sections/About';
import { Contact } from '../sections/Contact';

export function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="Sobre a North Dev"
        title="Tecnologia próxima do"
        highlight="negócio."
        description="Construímos produtos digitais combinando visão estratégica, proximidade e decisões técnicas que geram impacto real."
      />
      <About />
      <Contact />
    </>
  );
}
