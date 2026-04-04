import {
  Cpu,
  HardDrive,
  Smartphone,
  Lock,
  Database,
  FileText,
} from 'lucide-react'

const features = [
  {
    icon: Cpu,
    title: 'Recuperação em SSDs',
    description:
      'Tecnologia especializada para lidar com o comando TRIM e a arquitetura NAND Flash, recuperando dados mesmo após apagamento lógico.',
    badge: 'TRIM-aware',
  },
  {
    icon: HardDrive,
    title: 'Resgate de HDDs Mecânicos',
    description:
      'Recuperação de discos com falhas de cabeça de leitura, setores defeituosos, danos físicos severos e motores travados.',
    badge: 'Sala limpa',
  },
  {
    icon: Smartphone,
    title: 'Dispositivos Móveis',
    description:
      'Extração forense de smartphones Android e iOS, incluindo dados de apps, mensagens, fotos e documentos excluídos.',
    badge: 'iOS & Android',
  },
  {
    icon: Lock,
    title: 'Write Blockers Forenses',
    description:
      'Bloqueadores de gravação hardware que preservam 100% da integridade da evidência, seguindo padrões forenses internacionais.',
    badge: 'ISO 27037',
  },
  {
    icon: Database,
    title: 'Bancos de Dados Corrompidos',
    description:
      'Recuperação de estruturas SQL, NoSQL, tabelas corrompidas, arquivos MDF/LDF e bancos de dados MySQL, PostgreSQL e SQLite.',
    badge: 'SQL & NoSQL',
  },
  {
    icon: FileText,
    title: 'Laudos Periciais',
    description:
      'Emissão de laudos técnicos com cadeia de custódia completa, para uso judicial, auditorias ou processos corporativos.',
    badge: 'Juridicamente válido',
  },
]

export default function FeaturesGrid() {
  return (
    <section
      id="servicos"
      className="section-padding relative overflow-hidden"
      aria-labelledby="features-heading"
    >
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-20" aria-hidden="true" />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(15,32,64,0.5) 0%, transparent 80%)',
        }}
        aria-hidden="true"
      />

      <div className="section-container relative z-10">
        {/* Section Label */}
        <div className="text-center mb-4">
          <span className="section-label">Grade de Soluções</span>
        </div>

        {/* Heading */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2
            id="features-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4"
          >
            O que podemos{' '}
            <span className="gradient-text">recuperar para você</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Soluções forenses para cada tipo de cenário de perda de dados.
          </p>
        </div>

        {/* 2x3 Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          role="list"
          aria-label="Serviços de recuperação"
        >
          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <article
                key={i}
                role="listitem"
                className="feature-card group"
                aria-label={feature.title}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-500/15 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-emerald-400" aria-hidden="true" />
                  </div>
                  <span className="tag-badge text-xs mt-1">{feature.badge}</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
