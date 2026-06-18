import { BadgeCheck, ExternalLink } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import styles from './Projects.module.css';

const featuredTech = ['React', 'PWA', 'Fluxos em tempo real'];
const syncTech = ['Vite', 'APIs', 'Dashboards'];

export default function Projects() {
  const sectionRef = useScrollReveal();

  return (
    <section id="projects" className={`${styles.section} reveal`} ref={sectionRef}>
      <div className={styles.inner}>
        <p className="section-label">Projetos</p>
        <h2 className="section-title">Projetos em destaque</h2>
        <p className="section-intro">
          Casos que combinam software utilitário, experiência clara e estrutura para evolução contínua.
        </p>

        <div className={styles.grid}>
          <article className={`${styles.card} ${styles.mainCard}`}>
            <span className={styles.dot} aria-hidden="true">
              ●
            </span>
            <div className={styles.badgeRow}>
              <span className={`${styles.badge} ${styles.badgeSuccess}`}>
                <BadgeCheck size={13} />
                PWA
              </span>
              <span className={styles.badge}>CPTM Ambiental</span>
            </div>
            <h3 className={styles.cardTitle}>CPTM Ambiental</h3>
            <p className={styles.cardCopy}>
              Portal progressivo para centralizar atendimento, processos de campo e acompanhamento operacional com navegação simples em
              qualquer dispositivo.
            </p>
            <div className={styles.cardFooter}>
              <div className={styles.techList}>
                {featuredTech.map((tech) => (
                  <span key={tech} className={styles.techPill}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </article>

          <article className={`${styles.card} ${styles.sideCard}`}>
            <span className={styles.dot} aria-hidden="true">
              ●
            </span>
            <div className={styles.badgeRow}>
              <span className={styles.badge}>Sync Engine</span>
            </div>
            <h3 className={styles.cardTitle}>Sync Engine</h3>
            <p className={styles.cardCopy}>
              Camada de automação para sincronizar dados entre ferramentas internas, reduzir retrabalho e dar previsibilidade à operação.
            </p>
            <div className={styles.cardFooter}>
              <div className={styles.techList}>
                {syncTech.map((tech) => (
                  <span key={tech} className={styles.techPill}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </article>

          <article className={`${styles.card} ${styles.placeholderCard}`}>
            <div>
              <p className={styles.placeholderLabel}>Novo projeto</p>
              <h3 className={styles.cardTitle}>Seu próximo produto pode nascer aqui</h3>
              <p className={styles.cardCopy}>
                Vamos desenhar o escopo, separar a execução em etapas e montar a melhor rota para seu orçamento.
              </p>
            </div>
            <a className={`btn-ghost ${styles.placeholderAction}`} href="#contact">
              Solicitar orçamento
              <ExternalLink size={16} />
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
