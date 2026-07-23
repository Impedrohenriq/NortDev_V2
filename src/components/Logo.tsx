type LogoProps = {
  className?: string;
};

export function Logo({ className = '' }: LogoProps) {
  return (
    <a href="#inicio" className={`inline-flex items-center gap-2.5 ${className}`} aria-label="North Dev — início">
      <img src="/favicon.svg" alt="" className="size-8" aria-hidden="true" />
      <span className="brand-wordmark font-display text-base font-extrabold tracking-[-0.035em] sm:text-lg">
        North<span className="brand-accent">Dev</span>
      </span>
    </a>
  );
}
