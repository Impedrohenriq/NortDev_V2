import { Plus } from 'lucide-react';
import { useId, useState } from 'react';

export type FaqItem = { question: string; answer: string };

type FaqProps = {
  items: FaqItem[];
};

/**
 * Acordeão acessível: cada pergunta é um botão com `aria-expanded`/`aria-controls`
 * e a resposta é uma região rotulada pela pergunta. Vários itens podem ficar abertos.
 * A resposta recolhida fica com `visibility: hidden` (ver CSS), então não é lida
 * por leitores de tela nem recebe foco.
 */
export function Faq({ items }: FaqProps) {
  const baseId = useId();
  const [open, setOpen] = useState<Set<number>>(() => new Set());

  const toggle = (index: number) => {
    setOpen((current) => {
      const next = new Set(current);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  return (
    <div className="faq-list">
      {items.map((item, index) => {
        const isOpen = open.has(index);
        const questionId = `${baseId}-q-${index}`;
        const answerId = `${baseId}-a-${index}`;
        return (
          <div className="faq-item" data-open={isOpen} key={item.question}>
            <h3>
              <button
                type="button"
                id={questionId}
                className="faq-question"
                aria-expanded={isOpen}
                aria-controls={answerId}
                onClick={() => toggle(index)}
              >
                <span>{item.question}</span>
                <Plus className="faq-icon" aria-hidden="true" />
              </button>
            </h3>
            <div className="faq-answer" id={answerId} role="region" aria-labelledby={questionId}>
              <div>
                <p>{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
