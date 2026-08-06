import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import 'lenis/dist/lenis.css';
import './styles/index.css';
import { LanguageProvider } from './i18n/LanguageContext';

document.documentElement.classList.add('js');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </StrictMode>,
);
