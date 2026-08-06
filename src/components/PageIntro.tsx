import { motion, useReducedMotion } from 'motion/react';
import { StarfallBackground } from './StarfallBackground';
import type { StarfallPalette } from './StarfallBackground';

type PageIntroProps = {
  eyebrow: string;
  title: string;
  highlight: string;
  description: string;
  palette?: StarfallPalette;
};

export function PageIntro({ eyebrow, title, highlight, description, palette = 'blue' }: PageIntroProps) {
  const reduceMotion = useReducedMotion();
  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="page-hero starfall-page-hero">
      <StarfallBackground palette={palette} />
      <div className="starfall-noise" aria-hidden="true" />
      <div className="starfall-orbit starfall-orbit-one" aria-hidden="true" />
      <div className="starfall-orbit starfall-orbit-two" aria-hidden="true" />
      <div className="container-site starfall-page-shell">
        <motion.div
          className="mx-auto flex max-w-5xl flex-col items-center text-center"
          initial={reduceMotion ? false : 'hidden'}
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { delayChildren: 0.08, staggerChildren: 0.09 },
            },
          }}
        >
          <motion.p className="starfall-badge w-fit" variants={itemVariants}>{eyebrow}</motion.p>
          <motion.h1 className="page-title mx-auto mt-7" variants={itemVariants}>
            {title}
            <span className="text-gradient"> {highlight}</span>
          </motion.h1>
          <motion.p className="page-copy mx-auto mt-6" variants={itemVariants}>{description}</motion.p>
        </motion.div>
      </div>
    </section>
  );
}
