import { AlertTriangle, HardDrive, Zap } from 'lucide-react'

const painPoints = [
  {
    icon: Zap,
    iconColor: 'text-red-400',
    iconBg: 'bg-red-500/10',
    title: 'O Clique Fatal',
    description:
      'A lixeira foi esvaziada, o backup falhou e aquele projeto de meses evaporou. O desespero bate forte e as mãos começam a suar.',
  },
  {
    icon: HardDrive,
    iconColor: 'text-orange-400',
    iconBg: 'bg-orange-500/10',
    title: 'A Tela da Morte',
    description:
      'Seu disco parou de rodar ou o SSD entrou em curto. O suporte da TI olhou, balançou a cabeça e disse: "Sinto muito, já era."',
  },
  {
    icon: AlertTriangle,
    iconColor: 'text-yellow-400',
    iconBg: 'bg-yellow-500/10',
    title: 'O Perigo das Tentativas Amadoras',
    description:
      'Você tenta rodar aqueles programas gratuitos da internet para recuperar e acaba piorando tudo, corrompendo os blocos de memória e destruindo a única chance real de resgate.',
  },
]

export default function PainSection() {
  return (
    <section
      id="dor"
      className="section-padding relative overflow-hidden"
      aria-labelledby="pain-heading"
    >
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(239,68,68,0.04) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="section-container relative z-10">
        {/* Section Label */}
        <div className="text-center mb-4">
          <span className="section-label text-red-400">O "Antes" — A Dor</span>
        </div>

        {/* Heading */}
        <div className="text-center mb-16">
          <h2
            id="pain-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 text-balance"
          >
            O momento em que o{' '}
            <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              coração gela...
            </span>
          </h2>
        </div>

        {/* Pain Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {painPoints.map((point, i) => {
            const Icon = point.icon
            return (
              <article
                key={i}
                className="pain-card group hover:border-red-400/40 hover:-translate-y-1 transition-all duration-300"
                aria-label={`Ponto de dor: ${point.title}`}
              >
                <div className={`w-12 h-12 rounded-xl ${point.iconBg} flex items-center justify-center mb-4`}>
                  <Icon className={`w-6 h-6 ${point.iconColor}`} aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{point.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">{point.description}</p>
              </article>
            )
          })}
        </div>

        {/* Belief Deconstruction */}
        <div className="max-w-3xl mx-auto">
          <div className="card-glass p-8 lg:p-10 rounded-2xl border border-emerald-500/20 relative overflow-hidden">
            <div
              className="absolute inset-0 rounded-2xl"
              style={{
                background:
                  'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(16,185,129,0.06) 0%, transparent 70%)',
              }}
              aria-hidden="true"
            />
            <div className="relative z-10 text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 mb-6 mx-auto">
                <span className="text-2xl" aria-hidden="true">💡</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                A verdade que a maioria não sabe
              </h3>
              <p className="text-slate-300 leading-relaxed text-base sm:text-lg">
                A maioria das pessoas acha que{' '}
                <span className="text-red-400 font-semibold">formatar ou deletar apaga tudo de vez</span>. Na
                verdade, o sistema apenas{' '}
                <span className="text-yellow-400 font-semibold">oculta a referência do arquivo</span>. O dado cru
                continua gravado, e a{' '}
                <span className="text-emerald-400 font-semibold">perícia digital sabe exatamente onde procurá-lo</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
