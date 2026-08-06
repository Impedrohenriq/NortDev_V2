import { lazy, Suspense, useEffect, useLayoutEffect, useState } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import type { Location } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { useReveal } from './hooks/useReveal';
import { scrollToPageTarget, useSmoothScroll } from './hooks/useSmoothScroll';
import { useTheme } from './hooks/useTheme';
import { useLanguage } from './i18n/LanguageContext';

const siteUrl = 'https://www.northdevsolution.com.br';
const HomePage = lazy(() => import('./pages/HomePage').then((module) => ({ default: module.HomePage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then((module) => ({ default: module.AboutPage })));
const ServicesPage = lazy(() => import('./pages/ServicesPage').then((module) => ({ default: module.ServicesPage })));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage').then((module) => ({ default: module.ProjectsPage })));
const PricingPage = lazy(() => import('./pages/PricingPage').then((module) => ({ default: module.PricingPage })));
const ProcessPage = lazy(() => import('./pages/ProcessPage').then((module) => ({ default: module.ProcessPage })));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage').then((module) => ({ default: module.NotFoundPage })));

const routeMetadata = {
  pt: {
    '/': ['North Dev — Software com direção', 'Software, automações e produtos digitais sob medida para negócios que querem avançar com clareza.'],
    '/sobre': ['Sobre | North Dev', 'Conheça a North Dev e nossa forma de conectar engenharia, produto e objetivos de negócio.'],
    '/solucoes': ['Soluções | North Dev', 'Desenvolvimento, automações, SaaS sob medida e evolução de produtos digitais.'],
    '/Modelos': ['Modelos | North Dev', 'Conheça Modelos e experiências digitais desenvolvidos pela North Dev.'],
    '/precos': ['Preços | North Dev', 'Conheça os planos da North Dev para landing pages, sites completos, chatbots com IA e produtos SaaS.'],
    '/processo': ['Processo | North Dev', 'Entenda como a North Dev conduz Modelos da descoberta à entrega e evolução.'],
  },
  en: {
    '/': ['North Dev — Software with direction', 'Custom software, automation and digital products for businesses ready to move forward with clarity.'],
    '/sobre': ['About | North Dev', 'Meet North Dev and the way we connect engineering, product and business goals.'],
    '/solucoes': ['Solutions | North Dev', 'Development, automation, custom SaaS and digital product evolution.'],
    '/Modelos': ['Projects | North Dev', 'Explore digital experiences developed by North Dev.'],
    '/precos': ['Pricing | North Dev', 'Explore North Dev plans for landing pages, complete websites, AI chatbots and SaaS products.'],
    '/processo': ['Process | North Dev', 'See how North Dev leads projects from discovery to delivery and evolution.'],
  },
};

function RouteEffects({
  location,
  onLayoutReady,
}: {
  location: Location;
  onLayoutReady: Dispatch<SetStateAction<number>>;
}) {
  const { language } = useLanguage();
  useReveal(location.pathname);

  useEffect(() => {
    const currentMetadata = routeMetadata[language] as Record<string, string[]>;
    const metadata = currentMetadata[location.pathname] ?? (
      language === 'pt'
        ? ['Página não encontrada | North Dev', 'A página solicitada não foi encontrada.']
        : ['Page not found | North Dev', 'The requested page was not found.']
    );
    const canonicalUrl = `${siteUrl}${location.pathname === '/' ? '/' : location.pathname}`;

    document.title = metadata[0];
    document.querySelector('meta[name="description"]')?.setAttribute('content', metadata[1]);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', metadata[0]);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', metadata[1]);
    document.querySelector('meta[property="og:url"]')?.setAttribute('content', canonicalUrl);
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', canonicalUrl);

  }, [language, location.hash, location.pathname]);

  useLayoutEffect(() => {
    if (location.hash) {
      const target = document.getElementById(location.hash.slice(1));
      if (target) scrollToPageTarget(target, { offset: -88, lerp: 0.1 });
    } else {
      scrollToPageTarget(0, { immediate: true });
    }
  }, [location.hash, location.pathname]);

  useLayoutEffect(() => {
    onLayoutReady((version) => version + 1);
  }, [location.pathname, onLayoutReady]);

  return null;
}

function Site() {
  const { theme, toggleTheme } = useTheme();
  const { language } = useLanguage();
  const location = useLocation();
  const reduceMotion = useReducedMotion();
  const pageTheme = location.pathname === '/' ? 'home' : location.pathname.slice(1);
  const [activePageTheme, setActivePageTheme] = useState(pageTheme);
  const [footerLayoutVersion, setFooterLayoutVersion] = useState(0);

  useSmoothScroll();

  return (
    <div
      className="theme-root min-h-screen overflow-x-clip bg-bg text-body transition-colors duration-500"
      data-page={activePageTheme}
    >
      <a href="#conteudo" className="skip-link">{language === 'pt' ? 'Ir para o conteúdo' : 'Skip to content'}</a>
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <main id="conteudo">
        <AnimatePresence
          mode="wait"
          initial={false}
          onExitComplete={() => setActivePageTheme(pageTheme)}
        >
          <motion.div
            key={location.pathname}
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={reduceMotion ? { opacity: 1 } : {
              opacity: 1,
              y: 0,
              transition: { duration: 0.24, ease: [0.22, 1, 0.36, 1] },
            }}
            exit={reduceMotion ? undefined : {
              opacity: 0,
              y: -6,
              transition: { duration: 0.15, ease: [0.4, 0, 1, 1] },
            }}
          >
            <Suspense fallback={<div className="route-loading" aria-hidden="true" />}>
              <RouteEffects location={location} onLayoutReady={setFooterLayoutVersion} />
              <Routes location={location}>
                <Route path="/" element={<HomePage />} />
                <Route path="/sobre" element={<AboutPage />} />
                <Route path="/solucoes" element={<ServicesPage />} />
                <Route path="/Modelos" element={<ProjectsPage />} />
                <Route path="/precos" element={<PricingPage />} />
                <Route path="/processo" element={<ProcessPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </Suspense>
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer refreshKey={footerLayoutVersion} />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Site />
    </BrowserRouter>
  );
}
