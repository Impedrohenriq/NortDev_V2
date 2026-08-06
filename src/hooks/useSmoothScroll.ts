import Lenis from 'lenis';
import type { ScrollToOptions } from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

let lenisInstance: Lenis | null = null;
gsap.registerPlugin(ScrollTrigger);

export function scrollToPageTarget(target: number | string | HTMLElement, options?: ScrollToOptions) {
  if (lenisInstance) {
    lenisInstance.scrollTo(target, options);
    return;
  }

  if (typeof target === 'number') {
    window.scrollTo({ top: target, behavior: options?.immediate ? 'auto' : 'smooth' });
    return;
  }

  const element = typeof target === 'string' ? document.querySelector<HTMLElement>(target) : target;
  element?.scrollIntoView({ behavior: options?.immediate ? 'auto' : 'smooth' });
}

export function useSmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: false,
      smoothWheel: true,
      syncTouch: false,
      lerp: 0.09,
      wheelMultiplier: 0.9,
      anchors: {
        offset: -88,
        lerp: 0.1,
      },
      overscroll: false,
      stopInertiaOnNavigate: true,
      respectReducedMotion: true,
    });
    const updateLenis = (time: number) => lenis.raf(time * 1000);
    const updateScrollTrigger = () => ScrollTrigger.update();

    lenisInstance = lenis;
    lenis.on('scroll', updateScrollTrigger);
    gsap.ticker.add(updateLenis);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.off('scroll', updateScrollTrigger);
      gsap.ticker.remove(updateLenis);
      lenis.destroy();
      if (lenisInstance === lenis) lenisInstance = null;
    };
  }, []);
}
