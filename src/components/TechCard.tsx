import type { HTMLAttributes, ReactNode } from 'react';

type TechCardProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
  accent?: 'blue' | 'cyan' | 'violet';
};

export function TechCard({ children, accent = 'blue', className = '', ...props }: TechCardProps) {
  return (
    <article className={`tech-card tech-card-${accent} ${className}`} {...props}>
      <span className="circuit-trace circuit-trace-top" aria-hidden="true" />
      <span className="circuit-trace circuit-trace-side" aria-hidden="true" />
      <span className="circuit-node circuit-node-a" aria-hidden="true" />
      <span className="circuit-node circuit-node-b" aria-hidden="true" />
      <div className="tech-card-content">{children}</div>
    </article>
  );
}
