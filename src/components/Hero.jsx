import { ChevronDown, MessageCircle, ArrowRight, CheckCircle2, Lock, Database, Cpu } from 'lucide-react'

export default function Hero() {
  const bullets = [
    'Recuperação profunda em HDDs, SSDs e dispositivos móveis.',
    'Resgate após formatação, exclusão acidental ou danos físicos severos.',
    'Sigilo absoluto com padrões internacionais de preservação da informação.',
  ]

  const handleScrollToProcess = (e) => {
    e.preventDefault()
    document.getElementById('processo')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Seção principal"
    >
      {/* Background layers */}
      <div className="absolute inset-0 grid-bg opacity-50" aria-hidden="true" />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(16,185,129,0.08) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 80% at 90% 50%, rgba(15,32,64,0.6) 0%, transparent 60%)',
        }}
        aria-hidden="true"
      />

      {/* Floating orbs */}
      <div
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full opacity-5 animate-pulse-slow"
        style={{ background: 'radial-gradient(circle, #10b981 0%, transparent 70%)' }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/3 left-1/3 w-64 h-64 rounded-full opacity-5 animate-pulse-slow animate-delay-300"
        style={{ background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="section-container relative z-10 pt-28 pb-16 lg:pt-40 lg:pb-24">
        <div className="max-w-4xl">

          {/* Badge */}
          <div className="flex items-center gap-2 mb-8 animate-fade-up">
            <span className="tag-badge">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
              Ciência Forense Digital
            </span>
            <span className="text-xs text-slate-500 font-mono">peritojony.vercel.app</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight mb-6 animate-fade-up animate-delay-100 text-balance">
            A Ilusão da Exclusão:<br />
            <span className="gradient-text">Seus dados sumiram?</span><br />
            <span className="text-slate-100">Eles ainda estão lá.</span>
            <br />
            <span className="text-slate-300 text-3xl sm:text-4xl lg:text-5xl font-bold">E nós sabemos como buscar.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-8 max-w-2xl animate-fade-up animate-delay-200">
            Para empresas e pessoas físicas que perderam arquivos vitais. O{' '}
            <span className="text-white font-semibold">Perito Jony</span> usa Ciência Forense Digital para resgatar
            dados que pareciam perdidos para sempre —{' '}
            <span className="text-emerald-400">mesmo em SSDs formatados</span> ou com graves falhas de hardware.
          </p>

          {/* Bullet Points */}
          <ul className="space-y-3 mb-10 animate-fade-up animate-delay-300" aria-label="Benefícios principais">
            {bullets.map((bullet, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span className="text-slate-300 text-base">{bullet}</span>
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up animate-delay-400">
            <a
              href="#contato"
              id="cta-hero-primary"
              className="btn-primary text-base"
              aria-label="Falar com o Perito Jony agora"
            >
              <MessageCircle className="w-5 h-5" aria-hidden="true" />
              Falar com o Perito Agora
            </a>
            <a
              href="#processo"
              id="cta-hero-secondary"
              onClick={handleScrollToProcess}
              className="btn-secondary text-sm"
              aria-label="Entender o processo de recuperação"
            >
              Entender o Processo
              <ChevronDown className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center gap-6 mt-12 pt-10 border-t border-slate-800/80 animate-fade-up animate-delay-500">
            <div className="flex items-center gap-2 text-slate-400 text-sm">
              <Lock className="w-4 h-4 text-emerald-400" aria-hidden="true" />
              <span>Sigilo garantido por contrato</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400 text-sm">
              <Database className="w-4 h-4 text-emerald-400" aria-hidden="true" />
              <span>Laboratório blindado de dados</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400 text-sm">
              <Cpu className="w-4 h-4 text-emerald-400" aria-hidden="true" />
              <span>Write Blockers Forenses</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
        <ChevronDown className="w-5 h-5 text-slate-600" />
      </div>
    </section>
  )
}
