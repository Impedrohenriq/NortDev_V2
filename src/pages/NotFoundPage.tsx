import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageIntro } from '../components/PageIntro';

export function NotFoundPage() {
  return (
    <>
      <PageIntro
        eyebrow="Erro 404"
        title="Esta página não foi"
        highlight="encontrada."
        description="O endereço pode ter mudado ou não estar mais disponível."
      />
      <div className="container-site pb-20 sm:pb-24">
        <Link to="/" className="button-primary w-fit">
          <ArrowLeft className="size-4" aria-hidden="true" /> Voltar ao início
        </Link>
      </div>
    </>
  );
}
