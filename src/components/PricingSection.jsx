import { Zap, Shield, Check, ArrowRight, MessageCircle } from 'lucide-react'

const plans = [
  {
    id: 'diagnostico',
    icon: Zap,
    name: 'Diagnóstico Expresso',
    subtitle: 'Análise crítica de urgência',
    price: 'Sob consulta',
    priceNote: 'Avaliação sem custo inicial',
    highlight: false,
    features: [
      'Avaliação inicial do dispositivo',
      'Relatório de viabilidade de recuperação',
      'Estimativa real de tempo e custo',
      'Diagnóstico com Write Blocker (sem alteração)',
      'Retorno em até 24 horas úteis',
    ],
    cta: 'Solicitar Diagnóstico',
    ctaLink: '#contato',
  },
  {
    id: 'forense',
    icon: Shield,
    name: 'Recuperação Forense Avançada',
    subtitle: 'Para danos físicos ou lógicos complexos',
    price: 'Personalizado',
    priceNote: 'Com base na complexidade do caso',
    highlight: true,
    features: [
      'Tudo do Diagnóstico Expresso',
      'Extração forense completa de dados',
      'Sala de análise controlada (sala limpa)',
      'Write Blockers hardware forenses',
      'Laudo pericial com cadeia de custódia',
      'Entrega criptografada e segura',
      'Suporte técnico pós-recuperação',
    ],
    cta: 'Solicitar Análise Segura',
    ctaLink: '#contato',
  },
]

export default function PricingSection() {
  return (
    <section
      id="precos"
      className="section-padding relative overflow-hidden"
      aria-labelledby="pricing-heading"
    >
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 50% 0%, rgba(16,185,129,0.05) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="section-container relative z-10">
        {/* Section Label */}
        <div className="text-center mb-4">
          <span className="section-label">Avaliação & Preços</span>
        </div>

        {/* Heading */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2
            id="pricing-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4"
          >
            O primeiro passo para o{' '}
            <span className="gradient-text">resgate definitivo</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Transparência total desde o diagnóstico. Sem surpresas, sem cobranças ocultas.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan) => {
            const Icon = plan.icon
            return (
              <article
                key={plan.id}
                className={`pricing-card relative overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
                  plan.highlight
                    ? 'border-emerald-500/40 shadow-emerald-500/10 shadow-2xl'
                    : 'hover:border-slate-600/70'
                }`}
                aria-label={`Plano: ${plan.name}`}
              >
                {/* Highlight border effect */}
                {plan.highlight && (
                  <>
                    <div
                      className="absolute top-0 left-0 right-0 h-px"
                      style={{
                        background: 'linear-gradient(90deg, transparent, rgba(16,185,129,0.7), transparent)',
                      }}
                      aria-hidden="true"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="tag-badge text-xs px-2.5 py-1">Mais Popular</span>
                    </div>
                    <div
                      className="absolute inset-0 rounded-2xl pointer-events-none"
                      style={{
                        background: 'radial-gradient(ellipse 80% 40% at 50% 0%, rgba(16,185,129,0.04) 0%, transparent 70%)',
                      }}
                      aria-hidden="true"
                    />
                  </>
                )}

                {/* Header */}
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      plan.highlight
                        ? 'bg-emerald-500/20 border border-emerald-500/30'
                        : 'bg-slate-800/80 border border-slate-700/50'
                    }`}
                  >
                    <Icon
                      className={`w-6 h-6 ${plan.highlight ? 'text-emerald-400' : 'text-slate-400'}`}
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                    <p className="text-slate-400 text-sm">{plan.subtitle}</p>
                  </div>
                </div>

                {/* Price */}
                <div className="border-t border-slate-800/80 pt-6">
                  <div className="text-2xl font-black text-white mb-1">{plan.price}</div>
                  <p className="text-xs text-slate-500 font-mono">{plan.priceNote}</p>
                </div>

                {/* Features */}
                <ul className="space-y-3" aria-label={`Inclui em ${plan.name}`}>
                  {plan.features.map((feature, fi) => (
                    <li key={fi} className="flex items-start gap-2.5">
                      <Check
                        className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                          plan.highlight ? 'text-emerald-400' : 'text-slate-500'
                        }`}
                        aria-hidden="true"
                      />
                      <span className="text-slate-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={plan.ctaLink}
                  id={`cta-pricing-${plan.id}`}
                  className={plan.highlight ? 'btn-primary w-full justify-center' : 'btn-outline w-full justify-center'}
                  aria-label={`${plan.cta} — ${plan.name}`}
                >
                  {plan.highlight ? (
                    <MessageCircle className="w-4 h-4" aria-hidden="true" />
                  ) : (
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  )}
                  {plan.cta}
                </a>
              </article>
            )
          })}
        </div>

        {/* Disclaimer */}
        <p className="text-center text-slate-600 text-xs mt-10 font-mono">
          * Preços finais são definidos após o diagnóstico, com base na complexidade do caso e no tipo de dispositivo.
          <br />
          Não cobramos pela avaliação inicial.
        </p>
      </div>
    </section>
  )
}
