import { useEffect } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { useReveal } from './hooks/useReveal';
import { useTheme } from './hooks/useTheme';
import { AboutPage } from './pages/AboutPage';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { ProcessPage } from './pages/ProcessPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ServicesPage } from './pages/ServicesPage';

const siteUrl = 'https://northdevsolution.vercel.app';

const routeMetadata: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'North Dev — Software com direção',
    description: 'Software, automações e produtos digitais sob medida para negócios que querem avançar com clareza.',
  },
  '/sobre': {
    title: 'Sobre | North Dev',
    description: 'Conheça a North Dev e nossa forma de conectar engenharia, produto e objetivos de negócio.',
  },
  '/solucoes': {
    title: 'Soluções | North Dev',
    description: 'Desenvolvimento, automações, SaaS sob medida e evolução de produtos digitais.',
  },
  '/projetos': {
    title: 'Projetos | North Dev',
    description: 'Conheça projetos e experiências digitais desenvolvidos pela North Dev.',
  },
  '/processo': {
    title: 'Processo | North Dev',
    description: 'Entenda como a North Dev conduz projetos da descoberta à entrega e evolução.',
  },
};

function RouteEffects() {
  const location = useLocation();
  useReveal(location.pathname);

  useEffect(() => {
    const metadata = routeMetadata[location.pathname] ?? {
      title: 'Página não encontrada | North Dev',
      description: 'A página solicitada não foi encontrada.',
    };
    const canonicalUrl = `${siteUrl}${location.pathname === '/' ? '/' : location.pathname}`;

    document.title = metadata.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', metadata.description);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', metadata.title);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', metadata.description);
    document.querySelector('meta[property="og:url"]')?.setAttribute('content', canonicalUrl);
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', canonicalUrl);

    const frame = window.requestAnimationFrame(() => {
      if (location.hash) {
        document.getElementById(location.hash.slice(1))?.scrollIntoView();
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      }
    });

    return () => window.cancelAnimationFrame(frame);
  }, [location.hash, location.pathname]);

  return null;
}

function Site() {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const reduceMotion = useReducedMotion();
  const pageTheme = location.pathname === '/' ? 'home' : location.pathname.slice(1);

  return (
    <div
      className="theme-root min-h-screen overflow-x-clip bg-bg text-body transition-colors duration-500"
      data-page={pageTheme}
    >
      <RouteEffects />
      <a href="#conteudo" className="skip-link">Ir para o conteúdo</a>
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <main id="conteudo">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={location.pathname}
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: reduceMotion ? 0 : 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <Routes location={location}>
              <Route path="/" element={<HomePage theme={theme} />} />
              <Route path="/sobre" element={<AboutPage />} />
              <Route path="/solucoes" element={<ServicesPage />} />
              <Route path="/projetos" element={<ProjectsPage />} />
              <Route path="/processo" element={<ProcessPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
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
