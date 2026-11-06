import { ArrowUpRight, Check, Search, Target, Users } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { TechCard } from '../components/TechCard';
import {
  prospec,
  prospecCompetitionPlan,
  prospecCreditPacks,
  prospecPlans,
  prospecPricingCheckedAt,
  whatsappLink,
} from '../data/site';
import type { ProspecPlan } from '../data/site';
import { useLanguage } from '../i18n/LanguageContext';
import type { Language } from '../i18n/LanguageContext';

const planIcons: Record<ProspecPlan['code'], typeof Search> = {
  BASICO: Search,
  PROFISSIONAL: Target,
  EQUIPE: Users,
};

const planAccents: Record<ProspecPlan['code'], 'blue' | 'cyan' | 'violet'> = {
  BASICO: 'blue',
  PROFISSIONAL: 'violet',
  EQUIPE: 'cyan',
};

function money(value: number, language: Language) {
  return new Intl.NumberFormat(language === 'pt' ? 'pt-BR' : 'en-US', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: Number.isInteger(value) ? 0 : 2,
    maximumFractionDigits: 2,
  }).format(value);
}

function number(value: number, language: Language) {
  return value.toLocaleString(language === 'pt' ? 'pt-BR' : 'en-US');
}

type ProspecPricingProps = {
  id?: string;
};

export function ProspecPricing({ id = 'planos-prospec' }: ProspecPricingProps) {
  const { language } = useLanguage();
  const pt = language === 'pt';
  const checkedAt = new Date(`${prospecPricingCheckedAt}T12:00:00Z`).toLocaleDateString(pt ? 'pt-BR' : 'en-US', {
    day: '2-digit',
    month: pt ? '2-digit' : 'short',
    year: 'numeric',
    timeZone: 'UTC',
  });

  const planMessage = (plan: ProspecPlan) => (pt
    ? `Olá! Tenho interesse no plano ${plan.name.pt} do NorthDev Prospec (${money(plan.monthly, language)}/mês). Pode me passar os próximos passos?`
    : `Hello! I am interested in the ${plan.name.en} plan of NorthDev Prospec (${money(plan.monthly, language)}/month). Could you share the next steps?`);

  const competitionMessage = pt
    ? 'Olá! Tenho interesse no plano de concorrência do NorthDev Prospec. Pode me passar os próximos passos?'
    : 'Hello! I am interested in the competition plan of NorthDev Prospec. Could you share the next steps?';

  const packs = prospecCreditPacks.map((pack) => number(pack, language)).join(pt ? ', ' : ', ');

  return (
    <section id={id} className="section-space pt-0">
      <div className="container-site">
        <div data-reveal>
          <SectionHeading
            eyebrow={pt ? 'Planos do NorthDev Prospec' : 'NorthDev Prospec plans'}
            title={pt ? 'Escolha quantos créditos a sua equipe precisa.' : 'Choose how many credits your team needs.'}
            description={pt
              ? 'Os créditos são compartilhados por todas as pessoas da organização e renovam todo mês. A IA usa os créditos do plano; a busca por texto e a ajuda não têm custo.'
              : 'Credits are shared by everyone in the organization and renew every month. AI uses plan credits; text search and help are free of charge.'}
            align="center"
          />
        </div>

        <div className="prospec-pricing-grid mt-12 lg:mt-16">
          {prospecPlans.map((plan, index) => {
            const Icon = planIcons[plan.code];
            const name = plan.name[language];
            return (
              <TechCard
                key={plan.code}
                accent={planAccents[plan.code]}
                className={`pricing-card ${plan.featured ? 'pricing-card-featured' : ''}`}
                revealDelay={index * 0.07}
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="pricing-icon"><Icon /></span>
                  {plan.featured && <span className="pricing-featured-label">{pt ? 'Mais escolhido' : 'Most popular'}</span>}
                </div>

                <h3 className="pricing-name mt-8">{name}</h3>
                <p className="pricing-price">
                  {money(plan.monthly, language)}
                  <small className="prospec-price-unit">{pt ? '/mês' : '/month'}</small>
                </p>
                <p className="pricing-monthly">
                  {plan.annual
                    ? (pt
                      ? `ou ${money(plan.annual, language)}/ano · 2 meses grátis`
                      : `or ${money(plan.annual, language)}/year · 2 months free`)
                    : (pt ? 'Cobrança mensal' : 'Billed monthly')}
                </p>

                <ul className="pricing-features">
                  <li><Check aria-hidden="true" /><span><strong>{number(plan.credits, language)}</strong> {pt ? 'créditos por mês' : 'credits per month'}</span></li>
                  <li>
                    <Check aria-hidden="true" />
                    <span>
                      {plan.code === 'EQUIPE'
                        ? (pt ? `${plan.users} usuários incluídos` : `${plan.users} users included`)
                        : (pt ? `Até ${plan.users} usuários` : `Up to ${plan.users} users`)}
                    </span>
                  </li>
                  {plan.extraUser && (
                    <li>
                      <Check aria-hidden="true" />
                      <span>
                        {pt
                          ? `Usuário adicional: ${money(plan.extraUser.monthly, language)}/mês, com mais ${number(plan.extraUser.credits, language)} créditos`
                          : `Additional user: ${money(plan.extraUser.monthly, language)}/month, with ${number(plan.extraUser.credits, language)} more credits`}
                      </span>
                    </li>
                  )}
                  <li><Check aria-hidden="true" /><span>{pt ? 'Créditos do plano renovam no mês e não acumulam' : 'Plan credits renew monthly and do not accumulate'}</span></li>
                </ul>

                <a
                  href={whatsappLink(planMessage(plan))}
                  target="_blank"
                  rel="noreferrer"
                  className={plan.featured ? 'button-primary pricing-cta' : 'button-secondary pricing-cta'}
                >
                  {pt ? `Quero o plano ${name}` : `I want the ${name} plan`} <ArrowUpRight aria-hidden="true" />
                </a>
              </TechCard>
            );
          })}
        </div>

        <div className="prospec-competition" data-reveal>
          <div className="prospec-competition-copy">
            <p className="pricing-label">{pt ? 'Só a concorrência' : 'Competition only'}</p>
            <h3 className="pricing-name">
              {pt ? 'Concorrência: quem procura seus concorrentes no Instagram' : 'Competition: who is looking for your competitors on Instagram'}
            </h3>
            <p className="pricing-description">
              {pt
                ? `Acompanhe até ${prospecCompetitionPlan.competitors} concorrentes e veja quem pergunta preço, entrega ou reclama do atendimento deles, com prioridade para abordar, relatório semanal e avisos por WhatsApp. Até ${prospecCompetitionPlan.users} usuários e ${prospecCompetitionPlan.aiSuggestions} sugestões de mensagem com IA por mês.`
                : `Follow up to ${prospecCompetitionPlan.competitors} competitors and see who asks about price, delivery or complains about their service, with priority for outreach, a weekly report and WhatsApp alerts. Up to ${prospecCompetitionPlan.users} users and ${prospecCompetitionPlan.aiSuggestions} AI message suggestions per month.`}
            </p>
          </div>
          <div className="prospec-competition-buy">
            <p className="pricing-price">
              {money(prospecCompetitionPlan.monthly, language)}
              <small className="prospec-price-unit">{pt ? '/mês' : '/month'}</small>
            </p>
            <p className="pricing-monthly">
              {pt
                ? `ou ${money(prospecCompetitionPlan.annual, language)}/ano`
                : `or ${money(prospecCompetitionPlan.annual, language)}/year`}
            </p>
            <a href={whatsappLink(competitionMessage)} target="_blank" rel="noreferrer" className="button-secondary pricing-cta mt-6">
              {pt ? 'Quero esse plano' : 'I want this plan'} <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </div>

        <p className="pricing-note">
          {pt
            ? `Pacotes avulsos de ${packs} créditos ficam disponíveis para assinaturas ativas e valem 12 meses. Valores conferidos em ${checkedAt} na página oficial de planos do Prospec.`
            : `One-off packs of ${packs} credits are available to active subscriptions and are valid for 12 months. Prices checked on ${checkedAt} on the official Prospec plans page.`}{' '}
          <a href={prospec.plansUrl} target="_blank" rel="noreferrer" className="prospec-plans-link">
            {pt ? 'Ver planos no app' : 'See plans in the app'}
          </a>
        </p>
      </div>
    </section>
  );
}
