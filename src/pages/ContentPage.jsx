import { useState } from 'react'
import { PlayCircle, Tag, ChevronRight, Headphones, MonitorPlay, Clock, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

// ── Video data ──────────────────────────────────────────────
const videos = [
  {
    id: '1pVqojW7hqk',
    type: 'Apresentação Visual',
    typeIcon: MonitorPlay,
    duration: '~20 min',
    title: 'A Ilusão da Exclusão: Os arquivos deletados nunca somem de verdade',
    description:
      'Sabe aquele momento de pânico quando você deleta um arquivo super importante por engano? O coração dispara, a mão gela... Mas e se a gente te disser que, na maioria das vezes, ele não sumiu de verdade? Neste episódio, mergulhamos no mundo fascinante da recuperação de dados e da ciência forense digital. Vamos desmistificar a "ilusão da exclusão" e explicar, usando a analogia de uma biblioteca gigantesca, o que acontece por debaixo do capô do seu sistema operacional. Descubra a diferença crucial entre os velhos discos rígidos (HDD) e os modernos SSDs, como o implacável comando "Trim" pode ser o seu maior inimigo, e quais são as "regras de ouro" (o que fazer e o que não fazer) quando acontece um desastre digital. E, claro, a gente revela por que o melhor a se fazer num momento de desespero é desligar tudo e chamar um especialista de verdade, como o perito Jonilson. Aperta o cinto e vem viajar com a gente, desde os papiros de Herculano até o tunelamento quântico dos seus pendrives!',
    tags: [
      '#podcasttech',
      '#recuperaçãodedados',
      '#ComputacaoForense',
      '#tecnologia',
      '#segurançadainformação',
      '#ArquivosDeletados',
      '#informatica',
      '#ssdvshdd',
      '#JonilsonPerito',
      '#PeritoEmDados',
      '#cibersegurança',
    ],
  },
  {
    id: 'w0t7o0yX_7I',
    type: 'Formato Podcast',
    typeIcon: Headphones,
    duration: '~45 min',
    title: 'A Ilusão da Exclusão: Os arquivos deletados nunca somem de verdade',
    description:
      'Sabe aquele momento de pânico quando você deleta um arquivo super importante por engano? O coração dispara, a mão gela... Mas e se a gente te disser que, na maioria das vezes, ele não sumiu de verdade? Neste episódio, mergulhamos no mundo fascinante da recuperação de dados e da ciência forense digital. Descubra o que realmente acontece com seus arquivos após a exclusão, a diferença entre HDDs e SSDs e as regras de ouro para agir num momento de emergência digital.',
    tags: [
      '#podcasttech',
      '#recuperaçãodedados',
      '#ComputacaoForense',
      '#tecnologia',
      '#segurançadainformação',
      '#ArquivosDeletados',
      '#informatica',
      '#ssdvshdd',
      '#JonilsonPerito',
      '#PeritoEmDados',
      '#cibersegurança',
    ],
  },
]

// ── Playlist Card ─────────────────────────────────────────────
function PlaylistCard({ video, isActive, onClick }) {
  const TypeIcon = video.typeIcon
  return (
    <button
      onClick={onClick}
      className={`w-full text-left rounded-2xl border transition-all duration-300 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${
        isActive
          ? 'border-emerald-500 bg-emerald-500/8 shadow-lg shadow-emerald-500/10'
          : 'border-slate-800 bg-slate-900/60 hover:border-slate-600 hover:bg-slate-800/60'
      }`}
      aria-label={`Reproduzir: ${video.title}`}
      aria-pressed={isActive}
    >
      {/* Thumbnail */}
      <div className="relative overflow-hidden rounded-t-2xl">
        <img
          src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
          alt={`Thumbnail: ${video.title}`}
          className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          width="320"
          height="180"
        />
        {/* Play overlay */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
            isActive ? 'bg-emerald-500/20 opacity-100' : 'bg-navy-950/50 opacity-0 group-hover:opacity-100'
          }`}
        >
          <PlayCircle
            className={`w-12 h-12 drop-shadow-lg transition-colors duration-200 ${
              isActive ? 'text-emerald-400' : 'text-white'
            }`}
          />
        </div>
        {/* Active badge */}
        {isActive && (
          <div className="absolute top-2 left-2 flex items-center gap-1.5 bg-emerald-500 text-navy-950 text-xs font-bold px-2.5 py-1 rounded-full shadow">
            <span className="w-1.5 h-1.5 rounded-full bg-navy-950 animate-pulse" />
            Reproduzindo
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-4">
        {/* Type badge + duration */}
        <div className="flex items-center justify-between mb-2">
          <span
            className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full ${
              isActive
                ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                : 'bg-slate-800 text-slate-400 border border-slate-700'
            }`}
          >
            <TypeIcon className="w-3 h-3" aria-hidden="true" />
            {video.type}
          </span>
          <span className="flex items-center gap-1 text-xs text-slate-500">
            <Clock className="w-3 h-3" aria-hidden="true" />
            {video.duration}
          </span>
        </div>

        <p
          className={`text-sm font-semibold leading-tight line-clamp-2 transition-colors duration-200 ${
            isActive ? 'text-emerald-300' : 'text-slate-200 group-hover:text-white'
          }`}
        >
          {video.title}
        </p>

        {/* Active arrow */}
        {isActive && (
          <div className="flex items-center gap-1 mt-3 text-emerald-400 text-xs font-medium">
            <ChevronRight className="w-3 h-3" aria-hidden="true" />
            Em exibição
          </div>
        )}
      </div>
    </button>
  )
}

// ── Main Page ─────────────────────────────────────────────────
export default function ContentPage() {
  const [activeVideo, setActiveVideo] = useState(videos[0])

  return (
    <div className="min-h-screen bg-navy-950 flex flex-col">
      <Navbar />

      <main className="flex-1 pt-28 pb-24" id="conteudo-main">
        <div className="section-container">

          {/* ── Page header ── */}
          <div className="mb-12">
            {/* Breadcrumb */}
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-emerald-400 transition-colors mb-6 group"
              aria-label="Voltar para a página inicial"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" aria-hidden="true" />
              Voltar para o início
            </Link>

            <div className="flex items-center gap-3 mb-4">
              <span className="section-label">Educação &amp; Conteúdo</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-4 text-balance">
              Aprenda com o{' '}
              <span className="gradient-text">Perito</span>
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
              Entenda como funciona a ciência forense digital, o que realmente acontece com seus dados quando um
              desastre ocorre e como tomar as decisões certas para{' '}
              <span className="text-emerald-400 font-medium">proteger as suas informações</span>.
            </p>
          </div>

          {/* ── Main content grid ── */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

            {/* ── LEFT / Main player (col-span-2) ── */}
            <div className="lg:col-span-2 space-y-6">

              {/* Player */}
              <div className="rounded-2xl overflow-hidden shadow-2xl shadow-navy-950/80 border border-slate-800/60 bg-black">
                <div className="aspect-video w-full">
                  <iframe
                    key={activeVideo.id}
                    src={`https://www.youtube.com/embed/${activeVideo.id}?rel=0&modestbranding=1&autoplay=1`}
                    title={activeVideo.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Video info */}
              <div className="card-glass rounded-2xl p-6 lg:p-8 border border-slate-800/60 space-y-5">
                {/* Type badge */}
                <div className="flex items-center gap-3 flex-wrap">
                  {(() => {
                    const TypeIcon = activeVideo.typeIcon
                    return (
                      <span className="inline-flex items-center gap-1.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/25 text-xs font-semibold px-3 py-1.5 rounded-full">
                        <TypeIcon className="w-3.5 h-3.5" aria-hidden="true" />
                        {activeVideo.type}
                      </span>
                    )
                  })()}
                  <span className="inline-flex items-center gap-1.5 bg-slate-800 text-slate-400 border border-slate-700 text-xs px-3 py-1.5 rounded-full">
                    <Clock className="w-3 h-3" aria-hidden="true" />
                    {activeVideo.duration}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-xl lg:text-2xl font-bold text-white leading-snug">
                  {activeVideo.title}
                </h2>

                {/* Description */}
                <div className="border-t border-slate-800/80 pt-5">
                  <p className="text-slate-400 text-sm lg:text-base leading-relaxed whitespace-pre-line">
                    {activeVideo.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="border-t border-slate-800/80 pt-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Tag className="w-4 h-4 text-slate-500" aria-hidden="true" />
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Tags</span>
                  </div>
                  <div className="flex flex-wrap gap-2" role="list" aria-label="Tags do episódio">
                    {activeVideo.tags.map((tag) => (
                      <span
                        key={tag}
                        role="listitem"
                        className="text-xs font-mono text-slate-400 bg-slate-800/80 border border-slate-700/60 rounded-full px-3 py-1 hover:border-emerald-500/30 hover:text-emerald-400 transition-colors duration-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* ── RIGHT / Playlist sidebar (col-span-1) ── */}
            <aside
              className="lg:col-span-1 space-y-4"
              aria-label="Playlist de vídeos"
            >
              {/* Sidebar header */}
              <div className="flex items-center gap-2 mb-6">
                <PlayCircle className="w-5 h-5 text-emerald-400" aria-hidden="true" />
                <span className="font-bold text-white text-base">Playlist</span>
                <span className="ml-auto text-xs font-mono text-slate-500">
                  {videos.length} episódio{videos.length !== 1 ? 's' : ''}
                </span>
              </div>

              {/* Cards */}
              <div className="space-y-4" role="list" aria-label="Lista de episódios">
                {videos.map((video) => (
                  <div key={video.id} role="listitem">
                    <PlaylistCard
                      video={video}
                      isActive={activeVideo.id === video.id}
                      onClick={() => {
                        setActiveVideo(video)
                        // Scroll to top of player on mobile
                        document.getElementById('conteudo-main')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                      }}
                    />
                  </div>
                ))}
              </div>

              {/* CTA card */}
              <div className="mt-6 card-glass rounded-2xl p-6 border border-emerald-500/20 text-center">
                <div
                  className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-400 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-emerald-500/30"
                  aria-hidden="true"
                >
                  <PlayCircle className="w-6 h-6 text-navy-950" />
                </div>
                <p className="text-sm text-white font-semibold mb-1">Mais conteúdo em breve</p>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  Novos episódios sobre forense digital e segurança da informação.
                </p>
                <a
                  href="https://wa.me/5511961030036?text=Ol%C3%A1%20Jonilson%2C%20quero%20ser%20avisado%20sobre%20novos%20conte%C3%BAdos!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full justify-center text-sm"
                  aria-label="Receber notificações de novos episódios via WhatsApp"
                >
                  Avisar-me no WhatsApp
                </a>
              </div>
            </aside>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
