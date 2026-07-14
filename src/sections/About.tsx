import { Check, MoveUpRight } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';

export function About() {
  return (
    <section id="sobre" className="section-space pt-0">
      <div className="container-site">
        <div className="about-panel" data-reveal>
          <div className="about-visual" aria-hidden="true">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="orbit-core"><span>N</span></div>
            <div className="status-chip status-chip-top">clareza <Check /></div>
            <div className="status-chip status-chip-bottom">impacto <MoveUpRight /></div>
          </div>

          <div className="p-6 sm:p-9 lg:p-12">
            <SectionHeading
              eyebrow="Sobre a North Dev"
              title="Engenharia próxima do negócio."
              description="Atuamos na camada onde produto, tecnologia e velocidade precisam conversar. Cada escolha técnica parte do impacto que ela precisa gerar."
            />
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <div className="value-item"><span>01</span><p>Comunicação direta e decisões transparentes.</p></div>
              <div className="value-item"><span>02</span><p>Execução em ciclos curtos e objetivos.</p></div>
              <div className="value-item"><span>03</span><p>Qualidade técnica sem complexidade desnecessária.</p></div>
              <div className="value-item"><span>04</span><p>Produtos pensados para pessoas e resultados.</p></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
