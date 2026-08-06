import { motion, useReducedMotion } from 'motion/react';
import type { HTMLMotionProps } from 'motion/react';
import type { ReactNode } from 'react';

type TechCardProps = Omit<HTMLMotionProps<'article'>, 'children'> & {
  children: ReactNode;
  accent?: 'blue' | 'cyan' | 'violet';
  revealDelay?: number;
};

export function TechCard({ children, accent = 'blue', className = '', revealDelay = 0, ...props }: TechCardProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      className={`tech-card tech-card-${accent} ${className}`}
      initial={reduceMotion ? false : { opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: reduceMotion ? 0 : 0.55, delay: reduceMotion ? 0 : revealDelay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={reduceMotion ? undefined : { y: -8, scale: 1.008, transition: { type: 'spring', stiffness: 360, damping: 26, mass: 0.55, delay: 0 } }}
      whileTap={reduceMotion ? undefined : { scale: 0.995 }}
      {...props}
    >
      <span className="circuit-trace circuit-trace-top" aria-hidden="true" />
      <span className="circuit-trace circuit-trace-side" aria-hidden="true" />
      <span className="circuit-node circuit-node-a" aria-hidden="true" />
      <span className="circuit-node circuit-node-b" aria-hidden="true" />
      <div className="tech-card-content">{children}</div>
    </motion.article>
  );
}
