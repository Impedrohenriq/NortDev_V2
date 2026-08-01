import { PageIntro } from '../components/PageIntro';
import { Contact } from '../sections/Contact';
import { Process } from '../sections/Process';

export function ProcessPage() {
  return (
    <>
      <PageIntro
        eyebrow="Processo"
        title="Um caminho claro do contexto à"
        highlight="evolução."
        description="Decisões transparentes, ciclos objetivos e acompanhamento próximo em todas as etapas do projeto."
      />
      <Process />
      <Contact />
    </>
  );
}
