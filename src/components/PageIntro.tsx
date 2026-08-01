import { motion, useReducedMotion } from 'motion/react';

type PageIntroProps = {
  eyebrow: string;
  title: string;
  highlight: string;
  description: string;
};

export function PageIntro({ eyebrow, title, highlight, description }: PageIntroProps) {
  const reduceMotion = useReducedMotion();
  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="page-hero">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-glow hero-glow-one" aria-hidden="true" />
      <div className="hero-glow hero-glow-two" aria-hidden="true" />
      <div className="container-site relative z-10 flex min-h-[34rem] items-end pb-20 pt-36 sm:min-h-[40rem] sm:pb-24 lg:pb-28">
        <motion.div
          className="max-w-5xl"
          initial={reduceMotion ? false : 'hidden'}
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { delayChildren: 0.08, staggerChildren: 0.09 },
            },
          }}
        >
          <motion.p className="eyebrow" variants={itemVariants}>{eyebrow}</motion.p>
          <motion.h1 className="page-title mt-5" variants={itemVariants}>
            {title}
            <span className="text-gradient"> {highlight}</span>
          </motion.h1>
          <motion.p className="page-copy mt-6" variants={itemVariants}>{description}</motion.p>
        </motion.div>
      </div>
    </section>
  );
}
