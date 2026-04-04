import { useState, useEffect } from 'react'
import { Menu, X, Shield, PlayCircle } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  // Anchor links only work on home, otherwise navigate home + hash
  const anchorLinks = [
    { label: 'O Processo', href: '#processo' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Preços', href: '#precos' },
    { label: 'FAQ', href: '#faq' },
  ]

  const handleAnchor = (e, href) => {
    if (isHome) {
      e.preventDefault()
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    } else {
      // Navigate home and let the hash handle the scroll
      setIsOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy-950/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-navy-950/50'
          : 'bg-transparent'
      }`}
    >
      <nav className="section-container">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group" aria-label="Perito Jony — Início">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-400 flex items-center justify-center shadow-lg shadow-emerald-500/30 group-hover:shadow-emerald-500/50 transition-shadow duration-300">
              <Shield className="w-5 h-5 text-navy-950" strokeWidth={2.5} />
            </div>
            <div>
              <span className="font-bold text-white text-lg leading-none block">Perito Jony</span>
              <span className="text-xs text-slate-400 leading-none font-mono">Perícia &amp; Recuperação Forense</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {anchorLinks.map((link) => (
              <a
                key={link.href}
                href={isHome ? link.href : `/${link.href}`}
                onClick={(e) => handleAnchor(e, link.href)}
                className="text-sm font-medium text-slate-400 hover:text-emerald-400 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}

            {/* Podcast & Aulas link */}
            <Link
              to="/conteudo"
              className={`flex items-center gap-1.5 text-sm font-medium transition-colors duration-200 ${
                location.pathname === '/conteudo'
                  ? 'text-emerald-400'
                  : 'text-slate-400 hover:text-emerald-400'
              }`}
              aria-label="Página de Podcast e Aulas"
            >
              <PlayCircle className="w-4 h-4" aria-hidden="true" />
              Podcast e Aulas
            </Link>

            <a
              href={isHome ? '#contato' : '/#contato'}
              className="btn-primary text-sm px-6 py-3"
            >
              Falar com o Perito
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/50 transition-colors"
            aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-slate-800/80 py-4 space-y-1 animate-fade-up">
            {anchorLinks.map((link) => (
              <a
                key={link.href}
                href={isHome ? link.href : `/${link.href}`}
                onClick={(e) => handleAnchor(e, link.href)}
                className="block px-4 py-3 text-sm font-medium text-slate-300 hover:text-emerald-400 hover:bg-slate-800/40 rounded-xl transition-colors"
              >
                {link.label}
              </a>
            ))}

            {/* Podcast & Aulas mobile */}
            <Link
              to="/conteudo"
              onClick={() => setIsOpen(false)}
              className={`flex items-center gap-2 px-4 py-3 text-sm font-medium rounded-xl transition-colors ${
                location.pathname === '/conteudo'
                  ? 'text-emerald-400 bg-emerald-500/10'
                  : 'text-slate-300 hover:text-emerald-400 hover:bg-slate-800/40'
              }`}
            >
              <PlayCircle className="w-4 h-4" aria-hidden="true" />
              Podcast e Aulas
            </Link>

            <div className="pt-2 px-4">
              <a
                href={isHome ? '#contato' : '/#contato'}
                onClick={() => setIsOpen(false)}
                className="btn-primary w-full justify-center text-sm"
              >
                Falar com o Perito
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
