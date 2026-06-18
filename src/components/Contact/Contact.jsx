import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import styles from './Contact.module.css';

const contactItems = [
  {
    icon: Mail,
    title: 'E-mail',
    value: 'hello@northdev.com',
  },
  {
    icon: Phone,
    title: 'Telefone',
    value: '+55 (11) 99999-0000',
  },
  {
    icon: MapPin,
    title: 'Local',
    value: 'Brasil · remoto ou presencial',
  },
];

export default function Contact() {
  const sectionRef = useScrollReveal();

  return (
    <section id="contact" className={`${styles.section} reveal`} ref={sectionRef}>
      <div className={styles.inner}>
        <p className="section-label">Contato</p>
        <h2 className="section-title">Vamos desenhar a próxima entrega</h2>
        <p className="section-intro">
          Se a sua operação precisa de mais velocidade, menos atrito e um produto que faça sentido para o negócio, o próximo passo é uma
          conversa objetiva.
        </p>

        <div className={styles.grid}>
          <aside className={styles.panel}>
            <h3 className={styles.panelTitle}>Fale com a North Dev</h3>
            <p className={styles.panelCopy}>
              Conte brevemente o contexto, a dor principal e o prazo desejado. A resposta volta com um caminho claro para o próximo passo.
            </p>

            <div className={styles.contactList}>
              {contactItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className={styles.contactItem}>
                    <div className={styles.contactIcon} aria-hidden="true">
                      <Icon size={18} />
                    </div>
                    <div>
                      <p className={styles.contactTitle}>{item.title}</p>
                      <p className={styles.contactValue}>{item.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </aside>

          <form className={styles.panel} action="https://formspree.io/f/YOUR_FORMSPREE_ID" method="POST">
            <div className={styles.field}>
              <label className={styles.label} htmlFor="name">
                Nome
              </label>
              <input className={styles.input} id="name" name="name" type="text" placeholder="Seu nome" required />
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="email">
                E-mail
              </label>
              <input className={styles.input} id="email" name="email" type="email" placeholder="voce@empresa.com" required />
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="message">
                Mensagem
              </label>
              <textarea
                className={styles.textarea}
                id="message"
                name="message"
                rows="6"
                placeholder="Conte sobre o projeto, objetivo e prazo."
                required
              />
            </div>

            <button className="btn-primary" type="submit">
              Enviar mensagem
              <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
