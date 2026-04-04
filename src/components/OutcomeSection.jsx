import { Smile, ShieldCheck, RotateCcw, ArrowRight } from 'lucide-react'

const outcomes = [
  {
    icon: Smile,
    number: '01',
    title: 'Alívio Imediato',
    description:
      'Ver aquele documento crucial para a empresa ou as fotos insubstituíveis da família abrindo perfeitamente, totalmente intactos.',
  },
  {
    icon: ShieldCheck,
    number: '02',
    title: 'Segurança e Privacidade',
    description:
      'Ter a certeza de que seus dados foram recuperados num laboratório de dados blindado, sem nenhum risco de vazamentos ou bisbilhoteiros.',
  },
  {
    icon: RotateCcw,
    number: '03',
    title: 'Volta à Normalidade',
    description:
      'Sua vida ou sua empresa volta a operar normalmente no mesmo dia, deixando o pesadelo da perda de dados definitivamente no passado.',
  },
]

export default function OutcomeSection() {
  return (
    <section
      id="depois"
      className="section-padding relative overflow-hidden"
      aria-labelledby="outcome-heading"
    >
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(16,185,129,0.06) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="section-container relative z-10">
        {/* Section Label */}
        <div className="text-center mb-4">
          <span className="section-label">O "Depois" — O Resultado</span>
        </div>

        {/* Heading */}
        <div className="text-center mb-16">
          <h2
            id="outcome-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 text-balance"
          >
            Imagine ter sua{' '}
            <span className="gradient-text">tranquilidade</span>{' '}
            e seus <span className="gradient-text">arquivos</span> de volta.
          </h2>
        </div>

        {/* Outcome Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {outcomes.map((item, i) => {
            const Icon = item.icon
            return (
              <article
                key={i}
                className="card-glass card-hover p-8 rounded-2xl relative overflow-hidden group"
                aria-label={`Resultado: ${item.title}`}
              >
                {/* Number watermark */}
                <span
                  className="absolute top-4 right-6 text-6xl font-black text-emerald-500/5 group-hover:text-emerald-500/10 transition-colors font-mono"
                  aria-hidden="true"
                >
                  {item.number}
                </span>

                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-emerald-400" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">{item.description}</p>
              </article>
            )
          })}
        </div>

        {/* New Paradigm */}
        <div className="max-w-3xl mx-auto">
          <div className="relative p-0.5 rounded-2xl overflow-hidden">
            {/* Gradient border */}
            <div
              className="absolute inset-0 rounded-2xl"
              style={{
                background: 'linear-gradient(135deg, rgba(16,185,129,0.5) 0%, rgba(59,130,246,0.3) 50%, rgba(16,185,129,0.1) 100%)',
              }}
              aria-hidden="true"
            />
            <div className="relative card-glass rounded-2xl p-8 lg:p-10 text-center">
              <blockquote>
                <p className="text-lg sm:text-xl font-medium text-slate-200 leading-relaxed italic">
                  "Você não precisa aceitar a perda. Usando{' '}
                  <span className="text-emerald-400 not-italic font-semibold">engenharia reversa</span> e{' '}
                  <span className="text-emerald-400 not-italic font-semibold">ferramentas de classe mundial</span>, o
                  que a tecnologia comum descarta, o verdadeiro perito restaura."
                </p>
              </blockquote>
              <div className="mt-6">
                <a href="#contato" className="btn-primary text-sm px-6 py-3 inline-flex">
                  Quero Recuperar Meus Dados
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
