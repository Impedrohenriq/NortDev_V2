import { Building2, Check, Globe, ListPlus, MapPin, Pause, Phone, Play, Search, Sparkles, Target, TriangleAlert } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import type { LucideIcon } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

type Company = { name: string; place: string; score: number };
type Scenario = {
  tab: string;
  sells: string;
  icp: [string, string][];
  estimate: number;
  breakdown: [string, number][];
  companies: Company[];
  units: string;
  phone: string;
  digital: string;
  shared: string;
  draft: string;
  list: string;
};

// Exemplos ilustrativos: empresas e números fictícios, seguindo as regras reais do app
// (pesos do ICP 35/20/15/15/15, aderência Alta ≥ 80, Média 50–79, Baixa < 50).
const scenarios: Record<'pt' | 'en', Scenario[]> = {
  pt: [
    {
      tab: 'Embalagens',
      sells: 'Vendemos embalagens para padarias e restaurantes em Belo Horizonte.',
      icp: [['Atividade', 'Padarias · Restaurantes'], ['Região', 'Belo Horizonte · MG'], ['Porte', 'ME · EPP'], ['Idade', '2 a 15 anos']],
      estimate: 3214,
      breakdown: [['Atividade', 35], ['Região', 20], ['Porte', 15], ['Idade', 15], ['Capital', 9]],
      companies: [
        { name: 'Padaria Pão Dourado', place: 'Savassi', score: 94 },
        { name: 'Restaurante Sabor Mineiro', place: 'Funcionários', score: 86 },
        { name: 'Café & Forno Lourdes', place: 'Lourdes', score: 71 },
        { name: 'Lanchonete Ponto Doce', place: 'Contagem', score: 46 },
      ],
      units: 'Matriz + 2 filiais em BH',
      phone: 'Celular provável',
      digital: 'Site e Instagram encontrados',
      shared: 'E-mail aparece em 14 empresas — provável contador',
      draft: 'Olá! Vi que a Pão Dourado já tem três unidades em BH. Atendemos padarias da região com embalagens sob medida e entrega semanal — posso enviar uma proposta para a nova filial?',
      list: 'Rota Centro-Sul',
    },
    {
      tab: 'Agência',
      sells: 'Cuidamos do marketing digital de clínicas odontológicas em São Paulo.',
      icp: [['Atividade', 'Odontologia'], ['Região', 'São Paulo · SP'], ['Porte', 'ME · EPP'], ['Capital', 'Acima de R$ 50 mil']],
      estimate: 5870,
      breakdown: [['Atividade', 35], ['Região', 20], ['Porte', 15], ['Capital', 15], ['Idade', 6]],
      companies: [
        { name: 'Clínica Sorriso Pleno', place: 'Moema', score: 91 },
        { name: 'OdontoVila Mariana', place: 'Vila Mariana', score: 83 },
        { name: 'Instituto Dental Pinheiros', place: 'Pinheiros', score: 68 },
        { name: 'Consultório Prado & Lima', place: 'Osasco', score: 42 },
      ],
      units: 'Matriz única · aberta há 6 anos',
      phone: 'Fixo',
      digital: 'Site encontrado · sem redes sociais',
      shared: 'Telefone aparece em 9 empresas — escritório contábil',
      draft: 'Olá! Encontrei o site da Sorriso Pleno, mas não achei perfis nas redes sociais. Ajudamos clínicas de Moema a atrair pacientes pelo Instagram — vale uma conversa de 15 minutos?',
      list: 'Clínicas Zona Sul',
    },
    {
      tab: 'Software',
      sells: 'Sistema de gestão para indústrias de alimentos no Sul do país.',
      icp: [['Atividade', 'Fabricação de alimentos'], ['Região', 'PR · SC · RS'], ['Porte', 'EPP · Demais'], ['Idade', 'Mais de 5 anos']],
      estimate: 4102,
      breakdown: [['Atividade', 35], ['Região', 20], ['Porte', 15], ['Idade', 15], ['Capital', 7]],
      companies: [
        { name: 'Laticínios Vale Verde', place: 'Chapecó · SC', score: 92 },
        { name: 'Massas Serra Gaúcha', place: 'Caxias do Sul · RS', score: 84 },
        { name: 'Conservas Litoral', place: 'Itajaí · SC', score: 73 },
        { name: 'Doces da Colônia', place: 'Pelotas · RS', score: 55 },
      ],
      units: 'Matriz + 4 filiais no Sul',
      phone: 'Fixo',
      digital: 'Site e LinkedIn encontrados',
      shared: 'Nenhum contato compartilhado',
      draft: 'Olá! A Vale Verde opera com cinco unidades no Sul. Nosso sistema integra produção, estoque e expedição entre filiais — posso mostrar como outras indústrias da região usam?',
      list: 'Indústrias Sul · Q4',
    },
  ],
  en: [
    {
      tab: 'Packaging',
      sells: 'We sell packaging to bakeries and restaurants in Belo Horizonte.',
      icp: [['Activity', 'Bakeries · Restaurants'], ['Region', 'Belo Horizonte · MG'], ['Size', 'Micro · Small'], ['Age', '2 to 15 years']],
      estimate: 3214,
      breakdown: [['Activity', 35], ['Region', 20], ['Size', 15], ['Age', 15], ['Capital', 9]],
      companies: [
        { name: 'Pão Dourado Bakery', place: 'Savassi', score: 94 },
        { name: 'Sabor Mineiro Restaurant', place: 'Funcionários', score: 86 },
        { name: 'Café & Forno Lourdes', place: 'Lourdes', score: 71 },
        { name: 'Ponto Doce Snack Bar', place: 'Contagem', score: 46 },
      ],
      units: 'Headquarters + 2 branches in BH',
      phone: 'Likely mobile',
      digital: 'Website and Instagram found',
      shared: 'Email appears in 14 companies — likely their accountant',
      draft: 'Hi! I noticed Pão Dourado already has three locations in BH. We supply local bakeries with custom packaging and weekly delivery — may I send a proposal for the new branch?',
      list: 'South-Central route',
    },
    {
      tab: 'Agency',
      sells: 'We run digital marketing for dental clinics in São Paulo.',
      icp: [['Activity', 'Dentistry'], ['Region', 'São Paulo · SP'], ['Size', 'Micro · Small'], ['Capital', 'Over R$ 50k']],
      estimate: 5870,
      breakdown: [['Activity', 35], ['Region', 20], ['Size', 15], ['Capital', 15], ['Age', 6]],
      companies: [
        { name: 'Sorriso Pleno Clinic', place: 'Moema', score: 91 },
        { name: 'OdontoVila Mariana', place: 'Vila Mariana', score: 83 },
        { name: 'Pinheiros Dental Institute', place: 'Pinheiros', score: 68 },
        { name: 'Prado & Lima Office', place: 'Osasco', score: 42 },
      ],
      units: 'Single location · open for 6 years',
      phone: 'Landline',
      digital: 'Website found · no social media',
      shared: 'Phone appears in 9 companies — accounting firm',
      draft: 'Hi! I found Sorriso Pleno’s website but no social media profiles. We help Moema clinics attract patients on Instagram — worth a 15-minute chat?',
      list: 'South Zone clinics',
    },
    {
      tab: 'Software',
      sells: 'Management software for food manufacturers in southern Brazil.',
      icp: [['Activity', 'Food manufacturing'], ['Region', 'PR · SC · RS'], ['Size', 'Small · Other'], ['Age', 'Over 5 years']],
      estimate: 4102,
      breakdown: [['Activity', 35], ['Region', 20], ['Size', 15], ['Age', 15], ['Capital', 7]],
      companies: [
        { name: 'Vale Verde Dairy', place: 'Chapecó · SC', score: 92 },
        { name: 'Serra Gaúcha Pasta', place: 'Caxias do Sul · RS', score: 84 },
        { name: 'Litoral Preserves', place: 'Itajaí · SC', score: 73 },
        { name: 'Colônia Sweets', place: 'Pelotas · RS', score: 55 },
      ],
      units: 'Headquarters + 4 branches in the South',
      phone: 'Landline',
      digital: 'Website and LinkedIn found',
      shared: 'No shared contacts',
      draft: 'Hi! Vale Verde runs five plants in the South. Our system connects production, inventory and shipping across branches — may I show you how other manufacturers in the region use it?',
      list: 'South manufacturers · Q4',
    },
  ],
};

const labels = {
  pt: {
    demo: 'Demonstração',
    steps: ['Perfil', 'Busca', 'Aderência', 'Ficha', 'Abordagem'],
    sells: 'Você vende',
    suggested: 'Perfil de cliente ideal sugerido pela IA',
    estimate: 'empresas ativas combinam com o perfil',
    estimateNote: 'Estimativa com dados da Receita Federal, antes de gastar créditos.',
    priority: ['Alta', 'Média', 'Baixa'],
    why: 'Por que combina',
    coverage: 'cobertura 100%',
    draft: 'Rascunho de abordagem com IA',
    added: 'Adicionada à lista',
    pause: 'Pausar demonstração',
    play: 'Continuar demonstração',
    scenarios: 'Exemplos de negócio',
  },
  en: {
    demo: 'Live demo',
    steps: ['Profile', 'Search', 'Fit', 'Profile card', 'Outreach'],
    sells: 'You sell',
    suggested: 'Ideal customer profile suggested by AI',
    estimate: 'active companies match the profile',
    estimateNote: 'Estimated from Brazilian Federal Revenue data, before spending credits.',
    priority: ['High', 'Medium', 'Low'],
    why: 'Why it matches',
    coverage: '100% coverage',
    draft: 'AI outreach draft',
    added: 'Added to list',
    pause: 'Pause demo',
    play: 'Play demo',
    scenarios: 'Business examples',
  },
};

const stepIcons: LucideIcon[] = [Target, Search, Sparkles, Building2, ListPlus];
const stepDurations = [4200, 3400, 3800, 4200, 5600];
// Pesos padrão do ICP no app: atividade 35, região 20 e 15 para os demais critérios.
const icpWeights = [35, 20, 15, 15];

function useTyped(text: string, active: boolean, instant: boolean, speed = 22) {
  const [count, setCount] = useState(instant ? text.length : 0);
  useEffect(() => {
    if (instant || !active) {
      setCount(instant ? text.length : 0);
      return;
    }
    setCount(0);
    const timer = window.setInterval(() => {
      setCount((value) => {
        if (value >= text.length) {
          window.clearInterval(timer);
          return value;
        }
        return value + 1;
      });
    }, speed);
    return () => window.clearInterval(timer);
  }, [text, active, instant, speed]);
  return text.slice(0, count);
}

function useCountUp(target: number, active: boolean, instant: boolean, duration = 1100) {
  const [value, setValue] = useState(instant ? target : 0);
  useEffect(() => {
    if (instant || !active) {
      setValue(instant ? target : 0);
      return;
    }
    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setValue(Math.round(target * (1 - Math.pow(1 - progress, 3))));
      if (progress < 1) frame = window.requestAnimationFrame(tick);
    };
    frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, [target, active, instant, duration]);
  return value;
}

function priorityOf(score: number) {
  return score >= 80 ? 0 : score >= 50 ? 1 : 2;
}

export function ProspecDemo() {
  const { language } = useLanguage();
  const text = labels[language];
  const [scenarioIndex, setScenarioIndex] = useState(0);
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [inView, setInView] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLElement>(null);
  const elapsedRef = useRef(0);

  const scenario = scenarios[language][scenarioIndex];
  const running = playing && !hovered && inView;

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduceMotion(query.matches);
    if (query.matches) setPlaying(false);
  }, []);

  useEffect(() => {
    const element = rootRef.current;
    if (!element) return;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.25 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  // Reinicia a barra de progresso a cada etapa.
  useEffect(() => {
    elapsedRef.current = 0;
    if (progressRef.current) progressRef.current.style.transform = 'scaleX(0)';
  }, [scenarioIndex, step]);

  useEffect(() => {
    if (!running) return;
    let frame = 0;
    let last = performance.now();
    const duration = stepDurations[step];
    const tick = (now: number) => {
      if (document.hidden) {
        last = now;
        frame = window.requestAnimationFrame(tick);
        return;
      }
      elapsedRef.current += Math.min(now - last, 100);
      last = now;
      const progress = Math.min(elapsedRef.current / duration, 1);
      if (progressRef.current) progressRef.current.style.transform = `scaleX(${progress})`;
      if (progress >= 1) {
        if (step < stepDurations.length - 1) setStep(step + 1);
        else {
          setStep(0);
          setScenarioIndex((index) => (index + 1) % scenarios[language].length);
        }
        return;
      }
      frame = window.requestAnimationFrame(tick);
    };
    frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, [running, step, language]);

  const typedSells = useTyped(scenario.sells, step === 0 && inView, reduceMotion);
  const typedDraft = useTyped(scenario.draft, step === 4 && inView, reduceMotion, 16);
  const estimate = useCountUp(scenario.estimate, step === 1 && inView, reduceMotion);
  const top = scenario.companies[0];
  const stageKey = `${language}-${scenarioIndex}-${step}`;

  const selectScenario = (index: number) => {
    setScenarioIndex(index);
    setStep(0);
  };

  return (
    <div
      ref={rootRef}
      className="prospec-demo"
      role="group"
      aria-label={language === 'pt' ? 'Demonstração do NorthDev Prospec' : 'NorthDev Prospec demo'}
      onPointerEnter={(event) => event.pointerType === 'mouse' && setHovered(true)}
      onPointerLeave={() => setHovered(false)}
    >
      <div className="prospec-demo-halo" aria-hidden="true" />
      <div className="prospec-demo-frame">
        <div className="prospec-demo-bar">
          <span className="prospec-demo-dots" aria-hidden="true"><i /><i /><i /></span>
          <strong>NorthDev Prospec</strong>
          <span className={`prospec-demo-live ${running ? 'is-running' : ''}`}><i aria-hidden="true" />{text.demo}</span>
          <button
            type="button"
            className="prospec-demo-toggle"
            onClick={() => setPlaying((value) => !value)}
            aria-label={playing ? text.pause : text.play}
          >
            {playing ? <Pause aria-hidden="true" /> : <Play aria-hidden="true" />}
          </button>
        </div>

        <div className="prospec-demo-tabs" role="tablist" aria-label={text.scenarios}>
          {scenarios[language].map((item, index) => (
            <button
              key={item.tab}
              type="button"
              role="tab"
              aria-selected={index === scenarioIndex}
              className={index === scenarioIndex ? 'is-active' : ''}
              onClick={() => selectScenario(index)}
            >
              {item.tab}
            </button>
          ))}
        </div>

        <div className="prospec-demo-stage" key={stageKey}>
          {step === 0 && (
            <>
              <div className="prospec-demo-sells">
                <small>{text.sells}</small>
                <p>{typedSells}<span className="prospec-demo-caret" aria-hidden="true" /></p>
              </div>
              <p className="prospec-demo-label"><Sparkles aria-hidden="true" />{text.suggested}</p>
              <ul className="prospec-demo-icp">
                {scenario.icp.map(([label, value], index) => (
                  <li key={label} style={{ animationDelay: `${1.3 + index * 0.35}s` }}>
                    <small>{label}</small>
                    <strong>{value}</strong>
                    <em>{icpWeights[index]}%</em>
                  </li>
                ))}
              </ul>
            </>
          )}

          {step === 1 && (
            <>
              <div className="prospec-demo-filters">
                <Search aria-hidden="true" />
                {scenario.icp.map(([label, value]) => <span key={label}>{value}</span>)}
              </div>
              <div className="prospec-demo-estimate">
                <strong>{estimate.toLocaleString(language === 'pt' ? 'pt-BR' : 'en-US')}</strong>
                <span>{text.estimate}</span>
              </div>
              <div className="prospec-demo-bars" aria-hidden="true">
                {[78, 54, 37, 22].map((width, index) => (
                  <span key={width} style={{ width: `${width}%`, animationDelay: `${0.25 + index * 0.12}s` }} />
                ))}
              </div>
              <p className="prospec-demo-note">{text.estimateNote}</p>
            </>
          )}

          {step === 2 && (
            <ul className="prospec-demo-list">
              {scenario.companies.map((company, index) => {
                const priority = priorityOf(company.score);
                return (
                  <li key={company.name} className={index === 0 ? 'is-top' : ''} style={{ animationDelay: `${index * 0.18}s` }}>
                    <span className="prospec-demo-avatar" aria-hidden="true"><Building2 /></span>
                    <div className="prospec-demo-company">
                      <strong>{company.name}</strong>
                      <small><MapPin aria-hidden="true" />{company.place}</small>
                    </div>
                    <div className="prospec-demo-score">
                      <strong>{company.score}</strong>
                      <span className={`prospec-demo-priority prospec-demo-priority-${priority}`}>{text.priority[priority]}</span>
                      <span className="prospec-demo-meter" aria-hidden="true">
                        <i style={{ width: `${company.score}%`, animationDelay: `${0.2 + index * 0.18}s` }} />
                      </span>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}

          {step === 3 && (
            <>
              <div className="prospec-demo-head">
                <span className="prospec-demo-avatar" aria-hidden="true"><Building2 /></span>
                <div className="prospec-demo-company">
                  <strong>{top.name}</strong>
                  <small>{scenario.units}</small>
                </div>
                <div className="prospec-demo-score">
                  <strong>{top.score}</strong>
                  <span className="prospec-demo-priority prospec-demo-priority-0">{text.priority[0]}</span>
                </div>
              </div>
              <p className="prospec-demo-label">{text.why} · {text.coverage}</p>
              <ul className="prospec-demo-why">
                {scenario.breakdown.map(([label, points], index) => (
                  <li key={label} style={{ animationDelay: `${0.15 + index * 0.16}s` }}>
                    <Check aria-hidden="true" />
                    <span>{label}</span>
                    <strong>+{points}</strong>
                  </li>
                ))}
              </ul>
              <ul className="prospec-demo-facts">
                <li><Phone aria-hidden="true" />{scenario.phone}</li>
                <li><Globe aria-hidden="true" />{scenario.digital}</li>
                <li className="is-warning"><TriangleAlert aria-hidden="true" />{scenario.shared}</li>
              </ul>
            </>
          )}

          {step === 4 && (
            <>
              <div className="prospec-demo-draft">
                <span><Sparkles aria-hidden="true" />{text.draft}</span>
                <p>{typedDraft}<span className="prospec-demo-caret" aria-hidden="true" /></p>
              </div>
              <div className="prospec-demo-added">
                <Check aria-hidden="true" />
                <span>{text.added}: <strong>{scenario.list}</strong></span>
              </div>
            </>
          )}
        </div>

        <div className="prospec-demo-steps">
          {text.steps.map((label, index) => {
            const Icon = stepIcons[index];
            return (
              <button
                key={label}
                type="button"
                className={`${index === step ? 'is-active' : ''} ${index < step ? 'is-done' : ''}`}
                onClick={() => setStep(index)}
                aria-current={index === step ? 'step' : undefined}
              >
                <Icon aria-hidden="true" />
                <span>{label}</span>
                {index === step && <span className="prospec-demo-progress" aria-hidden="true"><i ref={progressRef} /></span>}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
