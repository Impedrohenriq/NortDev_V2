import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import { company } from '../data/site';

export function Contact() {
  return (
    <section id="contato" className="section-space pb-6 sm:pb-8">
      <div className="container-site">
        <div className="contact-panel" data-reveal>
          <div className="contact-copy lg:flex lg:items-end lg:justify-between lg:gap-16">
            <div>
              <p className="eyebrow">Próximo movimento</p>
              <h2 className="mt-4 max-w-3xl text-4xl font-bold leading-[1.02] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
                Vamos construir algo que faça diferença.
              </h2>
              <p className="mt-5 max-w-2xl leading-7 text-slate-300">
                Conte brevemente o contexto, o objetivo e o prazo desejado. A resposta volta com um caminho claro para o próximo passo.
              </p>
            </div>

            <div className="mt-10 grid shrink-0 gap-3 text-sm text-slate-300 lg:mt-0 lg:min-w-80">
              <a href={`mailto:${company.email}`} className="contact-item"><Mail /> {company.email}</a>
              <a href={`tel:${company.phone.replace(/\D/g, '')}`} className="contact-item"><Phone /> {company.phone}</a>
              <span className="contact-item"><MapPin /> {company.location}</span>
              <a href={`mailto:${company.email}`} className="button-primary mt-2 justify-center">
                Iniciar conversa <ArrowUpRight className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
