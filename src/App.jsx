import { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import styles from './App.module.css';

export default function App() {
  const [booting, setBooting] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setBooting(false), 700);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className={styles.appShell}>
      <div className={`${styles.loadingOverlay} ${booting ? styles.loadingOverlayVisible : styles.loadingOverlayHidden}`} aria-hidden={!booting}>
        <div className={styles.loadingCard}>
          <img
            src="/logo_escrita_NorthDev.png"
            alt="North Dev"
            className={styles.loadingLogo}
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = '/logo-north-dev.svg';
            }}
          />
          <span className={styles.loadingText}>Build. Automate. Scale.</span>
        </div>
      </div>
      <Navbar />
      <main className={styles.main}>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
