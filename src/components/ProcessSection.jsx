import { PowerOff, Microscope, FileCheck } from 'lucide-react'

const steps = [
  {
    icon: PowerOff,
    step: '01',
    title: 'Congele a Cena',
    description: 'Desligue a máquina imediatamente. Não tente reiniciar.',
    detail: 'Cada tentativa de boot pode sobrescrever blocos de dados críticos. A primeira ação correta é a mais importante.',
    color: 'emerald',
  },
  {
    icon: Microscope,
    step: '02',
    title: 'Diagnóstico Forense',
    description: 'Avaliamos seu dispositivo usando bloqueadores de escrita para garantir que nem um único bit seja alterado.',
    detail: 'Write Blockers forenses criam uma imagem perfeita do dispositivo, preservando 100% da integridade da evidência.',
    color: 'blue',
  },
  {
    icon: FileCheck,
    step: '03',
    title: 'Extração Limpa',
    description: 'Recuperamos a estrutura original dos arquivos e entregamos tudo em um ambiente 100% seguro.',
    detail: 'Protocolo de entrega criptografado com relatório técnico completo de cada arquivo recuperado.',
    color: 'gold',
  },
]

const colorMap = {
  emerald: {
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
    icon: 'text-emerald-400',
    step: 'text-emerald-500',
  },
  blue: {
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
    icon: 'text-blue-400',
    step: 'text-blue-500',
  },
  gold: {
    bg: 'bg-yellow-500/10',
    border: 'border-yellow-500/20',
    icon: 'text-yellow-400',
    step: 'text-yellow-500',
  },
}

export default function ProcessSection() {
  return (
    <section
      id="processo"
      className="section-padding relative overflow-hidden"
      aria-labelledby="process-heading"
    >
      {/* Background grid */}
      <div className="absolute inset-0 grid-bg opacity-30" aria-hidden="true" />

      <div className="section-container relative z-10">
        {/* Section Label */}
        <div className="text-center mb-4">
          <span className="section-label">O Processo — 3 Passos</span>
        </div>

        {/* Heading */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2
            id="process-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 text-balance"
          >
            Conheça o Perito Jony:{' '}
            <span className="gradient-text">O Especialista em Resgate de Dados</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Um método rigoroso baseado em ciência forense digital para garantir a máxima taxa de recuperação.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {steps.map((step, i) => {
            const Icon = step.icon
            const colors = colorMap[step.color]
            return (
              <article
                key={i}
                className="card-glass p-8 rounded-2xl relative group hover:-translate-y-1 hover:border-slate-600 transition-all duration-300"
                aria-label={`Passo ${step.step}: ${step.title}`}
              >
                {/* Step number */}
                <div className={`text-xs font-mono font-bold mb-4 ${colors.step} tracking-widest`}>
                  PASSO {step.step}
                </div>

                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl ${colors.bg} border ${colors.border} flex items-center justify-center mb-5`}>
                  <Icon className={`w-7 h-7 ${colors.icon}`} aria-hidden="true" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-slate-300 font-medium mb-3 text-sm leading-relaxed">{step.description}</p>
                <p className="text-slate-500 text-xs leading-relaxed border-t border-slate-800/80 pt-3 mt-3">
                  {step.detail}
                </p>

                {/* Connector line (hidden on last) */}
                {i < steps.length - 1 && (
                  <div
                    className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 z-20"
                    aria-hidden="true"
                  >
                    <div className="w-8 h-0.5 bg-gradient-to-r from-slate-600 to-slate-700" />
                  </div>
                )}
              </article>
            )
          })}
        </div>

        {/* ══ Founder Message Card ══ */}
        <div className="max-w-5xl mx-auto animate-scale-in">
          {/* Gradient border wrapper */}
          <div className="relative p-px rounded-2xl overflow-hidden">
            <div
              className="absolute inset-0 rounded-2xl"
              style={{
                background:
                  'linear-gradient(135deg, rgba(16,185,129,0.5) 0%, rgba(59,130,246,0.2) 50%, rgba(16,185,129,0.15) 100%)',
              }}
              aria-hidden="true"
            />

            {/* Card body */}
            <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden">
              {/* Top accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(16,185,129,0.6), transparent)',
                }}
                aria-hidden="true"
              />

              <div className="flex flex-col lg:flex-row gap-0">

                {/* ── Portrait image ── */}
                <div className="w-full lg:w-80 xl:w-96 flex-shrink-0 animate-fade-in">
                  <div className="relative h-72 lg:h-full min-h-[340px]">
                    <img
                      src="/images/peritojony-03.jpg"
                      alt="Jonilson, Perito Forense Digital"
                      className="w-full h-full object-cover object-top"
                      loading="lazy"
                      width="384"
                      height="512"
                    />
                    {/* Gradient overlay from right on desktop, from bottom on mobile */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          'linear-gradient(to right, transparent 60%, rgba(15,20,40,0.7) 100%), linear-gradient(to top, rgba(15,20,40,0.5) 0%, transparent 40%)',
                      }}
                      aria-hidden="true"
                    />
                    {/* Mobile overlay (fades into card below) */}
                    <div
                      className="lg:hidden absolute bottom-0 left-0 right-0 h-20"
                      style={{
                        background: 'linear-gradient(to top, rgba(15,20,40,0.95), transparent)',
                      }}
                      aria-hidden="true"
                    />
                  </div>
                </div>

                {/* ── Quote / Founder text ── */}
                <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center animate-fade-in-right">
                  {/* Label */}
                  <span className="text-emerald-400 text-xs font-mono font-semibold tracking-widest uppercase mb-6 block">
                    Mensagem do Fundador
                  </span>

                  {/* Big decorative quote mark */}
                  <div
                    className="text-8xl lg:text-9xl font-serif text-emerald-500/20 leading-none select-none mb-2 -mt-4"
                    aria-hidden="true"
                  >
                    "
                  </div>

                  <blockquote className="-mt-8">
                    <p className="text-slate-200 text-lg lg:text-xl leading-relaxed font-light mb-6">
                      Sou{' '}
                      <span className="text-white font-bold">Jonilson</span>, Perito em Dados. Já vi negócios quase
                      falirem por falhas de disco e famílias chorarem por memórias perdidas. Meu foco não é apenas{' '}
                      <em className="text-slate-400 not-italic italic">'consertar computadores'</em>, é{' '}
                      <span className="text-emerald-400 font-semibold">devolver a sua paz de espírito</span> usando o
                      mais alto rigor técnico da ciência forense digital.
                    </p>
                  </blockquote>

                  <footer className="pt-6 border-t border-slate-700/60">
                    <p className="text-white font-bold text-lg">Jonilson</p>
                    <p className="text-slate-400 text-sm mt-0.5">Perito em Dados &amp; Forense Digital</p>
                    <div className="flex items-center gap-2 mt-4">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
                      <span className="text-xs text-slate-500 font-mono">Atendimento disponível agora</span>
                    </div>
                  </footer>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
