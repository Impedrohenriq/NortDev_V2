import {
  SiCss,
  SiDeepseek,
  SiGithub,
  SiGooglegemini,
  SiHtml5,
  SiJavascript,
  SiNestjs,
  SiNodedotjs,
  SiPython,
  SiSupabase,
  SiTypescript,
} from 'react-icons/si';
import { useLanguage } from '../i18n/LanguageContext';

const technologies = [
  { name: 'HTML', icon: SiHtml5, className: 'logo-html' },
  { name: 'CSS', icon: SiCss, className: 'logo-css' },
  { name: 'JavaScript', icon: SiJavascript, className: 'logo-javascript' },
  { name: 'TypeScript', icon: SiTypescript, className: 'logo-typescript' },
  { name: 'Python', icon: SiPython, className: 'logo-python' },
  { name: 'Node.js', icon: SiNodedotjs, className: 'logo-nodejs' },
  { name: 'NestJS', icon: SiNestjs, className: 'logo-nestjs' },
  { name: 'GitHub', icon: SiGithub, className: 'logo-github' },
  { name: 'Supabase', icon: SiSupabase, className: 'logo-supabase' },
  { name: 'Gemini', icon: SiGooglegemini, className: 'logo-gemini' },
  { name: 'DeepSeek', icon: SiDeepseek, className: 'logo-deepseek' },
];

function LogoGroup({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <ul className="logo-marquee-group" aria-hidden={duplicate || undefined}>
      {technologies.map(({ name, icon: Icon, className }) => (
        <li className={`logo-marquee-item ${className}`} key={name}>
          <Icon aria-hidden="true" />
          <span>{name}</span>
        </li>
      ))}
    </ul>
  );
}

export function InfiniteLogoMarquee() {
  const { language } = useLanguage();

  return (
    <section
      className="logo-marquee-section"
      aria-label={language === 'pt' ? 'Tecnologias utilizadas' : 'Technologies we use'}
    >
      <div className="container-site">
        <div className="logo-marquee-heading">
          <span>{language === 'pt' ? 'Tecnologias' : 'Technologies'}</span>
          <p>{language === 'pt' ? 'Ferramentas que transformam ideias em produtos.' : 'Tools that turn ideas into products.'}</p>
        </div>
      </div>
      <div className="logo-marquee">
        <div className="logo-marquee-track">
          <LogoGroup />
          <LogoGroup duplicate />
        </div>
      </div>
    </section>
  );
}
