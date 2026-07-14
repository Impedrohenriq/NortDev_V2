import { ArrowDownRight, ArrowRight, CheckCircle2, Code2, Orbit, Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <section id="inicio" className="hero-section">
      <div className="hero-grid" aria-hidden="true" />
      <div className="container-site relative z-10 grid min-h-[760px] items-end gap-10 pb-16 pt-32 sm:min-h-[820px] sm:pb-20 lg:grid-cols-[1fr_25rem] lg:pb-24 lg:pt-40">
        <div>
          <div className="hero-badge">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-cyan-300 opacity-70" />
              <span className="relative inline-flex size-2 rounded-full bg-cyan-300" />
            </span>
            Software com estratégia e direção
          </div>

          <h1 className="hero-title mt-7">
            Ideias fortes.
            <span className="block text-gradient">Produtos que avançam.</span>
          </h1>
          <p className="hero-copy mt-6 max-w-2xl">
            Criamos software, automações e experiências digitais sob medida para transformar desafios complexos em produtos claros,
            rápidos e prontos para crescer.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#contato" className="button-primary justify-center">
              Falar sobre seu projeto
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
            <a href="#projetos" className="button-secondary justify-center">
              Conhecer projetos
              <ArrowDownRight className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="hero-console" aria-label="Pilares da North Dev">
          <div className="flex items-center justify-between border-b border-line px-5 py-4">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">North / System</span>
            <div className="flex gap-1.5" aria-hidden="true">
              <span className="size-2 rounded-full bg-cyan-400/70" />
              <span className="size-2 rounded-full bg-blue-400/40" />
              <span className="size-2 rounded-full bg-white/15" />
            </div>
          </div>
          <div className="space-y-3 p-4">
            <div className="console-row">
              <span className="console-icon"><Code2 /></span>
              <span><strong>Build</strong><small>Produtos digitais sólidos</small></span>
              <CheckCircle2 className="ml-auto size-4 text-cyan-400" />
            </div>
            <div className="console-row">
              <span className="console-icon"><Orbit /></span>
              <span><strong>Automate</strong><small>Operações mais inteligentes</small></span>
              <CheckCircle2 className="ml-auto size-4 text-cyan-400" />
            </div>
            <div className="console-row">
              <span className="console-icon"><Sparkles /></span>
              <span><strong>Scale</strong><small>Experiências preparadas</small></span>
              <CheckCircle2 className="ml-auto size-4 text-cyan-400" />
            </div>
          </div>
        </div>

        <div className="hero-metrics lg:col-span-2">
          {[
            ['+20', 'Projetos desenvolvidos'],
            ['24h', 'Tempo médio de resposta'],
            ['100%', 'Soluções personalizadas'],
          ].map(([value, label]) => (
            <div key={label} className="metric-item">
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
