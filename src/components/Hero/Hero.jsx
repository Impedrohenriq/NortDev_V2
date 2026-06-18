import { ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import styles from './Hero.module.css';

const stats = [
  { value: '+20', label: 'Projetos' },
  { value: '24h', label: 'Resposta' },
  { value: '100%', label: 'Custom' },
];

export default function Hero() {
  const sectionRef = useScrollReveal();

  return (
    <section id="top" className={`${styles.section} reveal`} ref={sectionRef}>
      <div className={styles.inner}>
        <p className={styles.eyebrow}>BUILD · AUTOMATE · SCALE · NORTH</p>
        <h1 className={styles.title}>
          Software que <span className={styles.highlight}>avança</span> na direção certa
        </h1>
        <p className={styles.lead}>
          A North Dev cria produtos digitais, automações e experiências SaaS sob medida para tirar o plano do papel com velocidade,
          clareza e impacto real.
        </p>

        <div className={styles.actions}>
          <a className="btn-primary" href="#projects">
            Ver projetos
          </a>
          <a className="btn-ghost" href="#contact">
            Agendar conversa
          </a>
        </div>

        <div className={styles.stats} aria-label="Métricas da empresa">
          {stats.map((stat) => (
            <div key={stat.label} className={styles.stat}>
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>

        <div className={styles.signature} aria-hidden="true" />
      </div>
    </section>
  );
}
