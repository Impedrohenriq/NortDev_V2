import { Languages } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();
  const nextLanguage = language === 'pt' ? 'English' : 'Português';

  return (
    <button
      type="button"
      className="language-toggle"
      onClick={toggleLanguage}
      aria-label={language === 'pt' ? 'Mudar idioma para inglês' : 'Switch language to Portuguese'}
      title={nextLanguage}
    >
      <Languages aria-hidden="true" />
      <span>{language === 'pt' ? 'PT' : 'EN'}</span>
    </button>
  );
}
