type PageIntroProps = {
  eyebrow: string;
  title: string;
  highlight: string;
  description: string;
};

export function PageIntro({ eyebrow, title, highlight, description }: PageIntroProps) {
  return (
    <section className="page-hero">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-glow hero-glow-one" aria-hidden="true" />
      <div className="hero-glow hero-glow-two" aria-hidden="true" />
      <div className="container-site relative z-10 flex min-h-[34rem] items-end pb-20 pt-36 sm:min-h-[40rem] sm:pb-24 lg:pb-28">
        <div className="max-w-5xl" data-reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="page-title mt-5">
            {title}
            <span className="text-gradient"> {highlight}</span>
          </h1>
          <p className="page-copy mt-6">{description}</p>
        </div>
      </div>
    </section>
  );
}
