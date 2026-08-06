import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageIntro } from '../components/PageIntro';
import { useLanguage } from '../i18n/LanguageContext';

export function NotFoundPage() {
  const { language } = useLanguage();
  const copy = language === 'pt' ? {
    eyebrow: 'Erro 404',
    title: 'Esta página não foi',
    highlight: 'encontrada.',
    description: 'O endereço pode ter mudado ou não estar mais disponível.',
  } : {
    eyebrow: 'Error 404',
    title: 'This page could not be',
    highlight: 'found.',
    description: 'The address may have changed or may no longer be available.',
  };
  return (
    <>
      <PageIntro
        {...copy}
      />
      <div className="container-site pb-20 sm:pb-24">
        <Link to="/" className="button-primary w-fit">
          <ArrowLeft className="size-4" aria-hidden="true" /> {language === 'pt' ? 'Voltar ao início' : 'Back to home'}
        </Link>
      </div>
    </>
  );
}
