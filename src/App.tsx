import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { useReveal } from './hooks/useReveal';
import { useTheme } from './hooks/useTheme';
import { About } from './sections/About';
import { Contact } from './sections/Contact';
import { Hero } from './sections/Hero';
import { Process } from './sections/Process';
import { Projects } from './sections/Projects';
import { Services } from './sections/Services';

export default function App() {
  const { theme, toggleTheme } = useTheme();
  useReveal();

  return (
    <div className="min-h-screen overflow-x-clip bg-bg text-body transition-colors duration-500">
      <a href="#conteudo" className="skip-link">Ir para o conteúdo</a>
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <main id="conteudo">
        <Hero />
        <Services />
        <About />
        <Projects />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
