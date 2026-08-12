import { Bot, Check, CheckCheck } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { useEffect, useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';

type ChatMessage = {
  role: 'user' | 'bot';
  text: string;
};

const conversations: Record<'pt' | 'en', ChatMessage[]> = {
  pt: [
    { role: 'user', text: 'Olá! Vocês fazem site com integração de WhatsApp?' },
    { role: 'bot', text: 'Olá! Fazemos sim 👋 Posso te enviar um material com valores, prazos e o que está incluído?' },
    { role: 'user', text: 'Pode sim, aguardo.' },
    { role: 'bot', text: 'Perfeito 🚀 Qual o melhor horário para nossa equipe te ligar hoje?' },
  ],
  en: [
    { role: 'user', text: 'Hi! Do you build websites with WhatsApp integration?' },
    { role: 'bot', text: 'Hi! We do 👋 May I send you a package with prices, timelines and what is included?' },
    { role: 'user', text: 'Sure, go ahead.' },
    { role: 'bot', text: 'Perfect 🚀 What is the best time for our team to call you today?' },
  ],
};

const STEP_DELAY = 1400;
const TYPING_DELAY = 900;
const RESTART_DELAY = 3200;

export function ChatbotMockup() {
  const { language } = useLanguage();
  const reduceMotion = useReducedMotion();
  const messages = conversations[language];
  const [visibleCount, setVisibleCount] = useState(reduceMotion ? messages.length : 0);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    if (reduceMotion) {
      setVisibleCount(messages.length);
      setTyping(false);
      return;
    }

    let cancelled = false;
    const timers: number[] = [];
    setVisibleCount(0);
    setTyping(false);

    const scheduleStep = (index: number) => {
      if (cancelled) return;
      if (index >= messages.length) {
        const restart = window.setTimeout(() => {
          if (cancelled) return;
          setVisibleCount(0);
          scheduleStep(0);
        }, RESTART_DELAY);
        timers.push(restart);
        return;
      }
      const next = messages[index];
      if (next.role === 'bot') {
        setTyping(true);
        const typingTimer = window.setTimeout(() => {
          if (cancelled) return;
          setTyping(false);
          setVisibleCount(index + 1);
          const followUp = window.setTimeout(() => scheduleStep(index + 1), STEP_DELAY);
          timers.push(followUp);
        }, TYPING_DELAY);
        timers.push(typingTimer);
        return;
      }
      setVisibleCount(index + 1);
      const followUp = window.setTimeout(() => scheduleStep(index + 1), STEP_DELAY);
      timers.push(followUp);
    };

    const initial = window.setTimeout(() => scheduleStep(0), 700);
    timers.push(initial);

    return () => {
      cancelled = true;
      timers.forEach((id) => window.clearTimeout(id));
    };
  }, [language, messages, reduceMotion]);

  const visibleMessages = messages.slice(0, visibleCount);

  return (
    <div className="chatbot-mockup" aria-hidden="true">
      <div className="chatbot-mockup-frame">
        <div className="chatbot-mockup-header">
          <div className="chatbot-mockup-avatar"><Bot aria-hidden="true" /></div>
          <div>
            <strong>North Dev · Agente</strong>
            <span>
              <i /> {language === 'pt' ? 'Online agora' : 'Online now'}
            </span>
          </div>
        </div>

        <div className="chatbot-mockup-body">
          <AnimatePresence initial={false}>
            {visibleMessages.map((message, index) => (
              <motion.div
                key={`${language}-${index}-${message.role}`}
                className={`chatbot-bubble chatbot-bubble-${message.role}`}
                initial={reduceMotion ? false : { opacity: 0, y: 12, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={reduceMotion ? undefined : { opacity: 0 }}
                transition={{ duration: reduceMotion ? 0 : 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <p>{message.text}</p>
                {message.role === 'user' ? (
                  <span className="chatbot-status"><CheckCheck aria-hidden="true" /></span>
                ) : (
                  <span className="chatbot-status"><Check aria-hidden="true" /></span>
                )}
              </motion.div>
            ))}

            {typing && (
              <motion.div
                key="typing"
                className="chatbot-bubble chatbot-bubble-bot chatbot-bubble-typing"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                <span className="chatbot-typing-dot" />
                <span className="chatbot-typing-dot" />
                <span className="chatbot-typing-dot" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="chatbot-mockup-footer">
          <div className="chatbot-mockup-input">
            {language === 'pt' ? 'Digite uma mensagem…' : 'Type a message…'}
          </div>
        </div>
      </div>

      <span className="chatbot-mockup-halo" />
    </div>
  );
}
