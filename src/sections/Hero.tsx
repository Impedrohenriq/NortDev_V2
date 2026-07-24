import { ArrowDownRight, ArrowRight, Bot, Braces, Network } from 'lucide-react';
import { useEffect, useState } from 'react';
import type { Theme } from '../hooks/useTheme';

type HeroProps = {
  theme: Theme;
};

const heroImageSizes = '(max-width: 639px) 100vw, (max-width: 1023px) calc(100vw - 3.5rem), 54vw';

function getHeroImage(theme: Theme) {
  const imageBase = `/images/northdev-system-core-${theme}`;
  return {
    src: `${imageBase}-1729.webp`,
    srcSet: `${imageBase}-640.webp 640w, ${imageBase}-1024.webp 1024w, ${imageBase}-1729.webp 1729w`,
  };
}

function HeroArtwork({ theme }: HeroProps) {
  const [currentTheme, setCurrentTheme] = useState(theme);
  const [incomingTheme, setIncomingTheme] = useState<Theme | null>(null);
  const [showIncoming, setShowIncoming] = useState(false);

  useEffect(() => {
    if (theme === currentTheme) {
      setIncomingTheme(null);
      setShowIncoming(false);
      return;
    }

    let cancelled = false;
    let animationFrame: number | undefined;
    const incomingImage = getHeroImage(theme);
    const preload = new Image();
    preload.src = incomingImage.src;
    preload.srcset = incomingImage.srcSet;
    preload.sizes = heroImageSizes;

    const reveal = () => {
      if (cancelled) return;
      setIncomingTheme(theme);
      animationFrame = window.requestAnimationFrame(() => {
        if (!cancelled) setShowIncoming(true);
      });
    };

    if (typeof preload.decode === 'function') {
      preload.decode().then(reveal).catch(reveal);
    } else {
      preload.onload = reveal;
      preload.onerror = reveal;
    }

    return () => {
      cancelled = true;
      if (animationFrame !== undefined) window.cancelAnimationFrame(animationFrame);
    };
  }, [currentTheme, theme]);

  useEffect(() => {
    if (!incomingTheme || !showIncoming) return;

    const transitionTimer = window.setTimeout(() => {
      setCurrentTheme(incomingTheme);
      setIncomingTheme(null);
      setShowIncoming(false);
    }, 380);

    return () => window.clearTimeout(transitionTimer);
  }, [incomingTheme, showIncoming]);

  const currentImage = getHeroImage(currentTheme);
  const incomingImage = incomingTheme ? getHeroImage(incomingTheme) : null;

  return (
    <>
      <img
        className="hero-image-current"
        src={currentImage.src}
        srcSet={currentImage.srcSet}
        sizes={heroImageSizes}
        alt=""
        width="1729"
        height="910"
        fetchPriority="high"
        decoding="async"
      />
      {incomingImage && (
        <img
          className={`hero-image-incoming ${showIncoming ? 'hero-image-incoming-visible' : ''}`}
          src={incomingImage.src}
          srcSet={incomingImage.srcSet}
          sizes={heroImageSizes}
          alt=""
          width="1729"
          height="910"
          decoding="async"
        />
      )}
    </>
  );
}

export function Hero({ theme }: HeroProps) {

  return (
    <section id="inicio" className="hero-section">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-glow hero-glow-one" aria-hidden="true" />
      <div className="hero-glow hero-glow-two" aria-hidden="true" />
      <div className="container-site relative z-10 grid min-h-screen items-center gap-10 pb-14 pt-32 lg:grid-cols-[minmax(0,0.92fr)_minmax(30rem,1.08fr)] lg:pb-20 lg:pt-36">
        <div className="relative z-20 max-w-3xl">
          <div className="hero-badge">
            <span className="relative flex size-2">
              <span className="hero-pulse absolute inline-flex size-full animate-ping rounded-full bg-cyan-300 opacity-70" />
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

        <div className="hero-visual" aria-hidden="true">
          <HeroArtwork theme={theme} />
          <div className="hero-visual-frame">
            <div className="visual-chip visual-chip-build">
              <span><Braces /></span>
              <div><small>BUILD</small><strong>Software sólido</strong></div>
            </div>
            <div className="visual-chip visual-chip-automate">
              <span><Bot /></span>
              <div><small>AUTOMATE</small><strong>Fluxos inteligentes</strong></div>
            </div>
            <div className="visual-chip visual-chip-scale">
              <span><Network /></span>
              <div><small>SCALE</small><strong>Sistemas conectados</strong></div>
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
