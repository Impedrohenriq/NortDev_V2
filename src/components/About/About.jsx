import { Code2, Layers3, Rocket, ShieldCheck } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import styles from './About.module.css';

const pillars = [
  {
    title: 'Desenvolvimento',
    description:
      'Interfaces sólidas, integrações limpas e software feito para crescer sem perder qualidade de execução.',
    icon: Code2,
    featured: true,
  },
  {
    title: 'Automação',
    description: 'Fluxos internos, operações e tarefas repetitivas viram processos confiáveis e rápidos.',
    icon: Layers3,
  },
  {
    title: 'SaaS sob medida',
    description: 'Produtos digitais com estrutura leve, visão de negócio clara e espaço para escalar.',
    icon: Rocket,
  },
  {
    title: 'Entrega segura',
    description: 'Processo direto, visibilidade contínua e decisões técnicas com foco em previsibilidade.',
    icon: ShieldCheck,
  },
];

export default function About() {
  const sectionRef = useScrollReveal();

  return (
    <section id="about" className={`${styles.section} reveal`} ref={sectionRef}>
      <div className={styles.inner}>
        <p className="section-label">Sobre</p>
        <h2 className="section-title">Progredindo na direção certa</h2>
        <p className="section-intro">
          Atuamos na camada onde produto, engenharia e velocidade precisam conversar. O resultado é uma entrega mais clara para o time e
          mais útil para o cliente final.
        </p>

        <div className={styles.grid}>
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article key={pillar.title} className={`${styles.card} ${pillar.featured ? styles.featured : ''}`}>
                <div className={styles.cardHeader}>
                  <div className={styles.iconWrap} aria-hidden="true">
                    <Icon size={22} />
                  </div>
                  <h3 className={styles.cardTitle}>{pillar.title}</h3>
                </div>
                <p className={styles.cardText}>{pillar.description}</p>
              </article>
            );
          })}
        </div>

        <p className={styles.mission}>
          Construímos software com estratégia, não só com velocidade. A direção é tão importante quanto a execução.
        </p>
      </div>
    </section>
  );
}
