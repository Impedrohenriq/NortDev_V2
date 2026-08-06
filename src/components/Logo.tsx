import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';

type LogoProps = {
  className?: string;
};

export function Logo({ className = '' }: LogoProps) {
  const { language } = useLanguage();

  return (
    <Link
      to="/#inicio"
      className={`inline-flex items-center gap-2.5 ${className}`}
      aria-label={language === 'pt' ? 'North Dev — página inicial' : 'North Dev — home page'}
    >
      <img
        src="/northdev-logo.jpg"
        alt=""
        className="size-8 rounded-lg object-cover"
        width="80"
        height="80"
        aria-hidden="true"
      />
      <span className="brand-wordmark font-display text-base font-extrabold tracking-[-0.035em] sm:text-lg">
        North<span className="brand-accent">Dev</span>
      </span>
    </Link>
  );
}
