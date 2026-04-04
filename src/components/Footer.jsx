import { Shield, MessageCircle, Mail, Instagram, Linkedin, Twitter, ExternalLink } from 'lucide-react'

// WhatsApp SVG icon (not in Lucide)
function WhatsAppIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

export default function Footer() {
  const navLinks = [
    { label: 'O Processo', href: '#processo' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Preços', href: '#precos' },
    { label: 'FAQ', href: '#faq' },
  ]

  const legalLinks = [
    { label: 'Política de Privacidade', href: '#privacidade' },
    { label: 'Termos de Uso', href: '#termos' },
    { label: 'Sigilo e NDA', href: '#nda' },
  ]

  const socialLinks = [
    { icon: Instagram, label: 'Instagram', href: 'https://instagram.com/peritojony' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/company/peritojony' },
    { icon: Twitter, label: 'Twitter / X', href: 'https://twitter.com/peritojony' },
  ]

  const WHATSAPP_URL =
    'https://wa.me/5511961030036?text=Ol%C3%A1%20Jonilson%2C%20estou%20com%20uma%20emerg%C3%AAncia%20de%20perda%20de%20dados%20e%20preciso%20da%20sua%20ajuda%20urgente!'
  const EMAIL = 'jonyperito2001@gmail.com'

  return (
    <footer
      id="contato"
      className="relative overflow-hidden border-t border-slate-800/80"
      aria-label="Rodapé e contato"
    >
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% 100%, rgba(16,185,129,0.04) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 grid-bg opacity-20" aria-hidden="true" />

      <div className="section-container relative z-10 py-16 lg:py-20">
        {/* Top section: Contact CTAs + Nav */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 pb-16 border-b border-slate-800/80">

          {/* Contact CTAs */}
          <div>
            <span className="section-label mb-3 block">Contato Rápido</span>
            <h3 className="text-2xl lg:text-3xl font-black text-white mb-4">
              Dados em risco?{' '}
              <span className="gradient-text">Fale agora.</span>
            </h3>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Atendimento direto com o Perito Jony. Quanto antes você nos contatar, maiores são
              as chances de recuperação completa dos seus dados.
            </p>

            {/* WhatsApp primary CTA */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              id="cta-whatsapp-footer"
              className="group flex items-center gap-4 w-full sm:w-auto px-6 py-5 rounded-2xl
                bg-gradient-to-r from-emerald-500 to-emerald-400 text-navy-950
                font-bold text-base shadow-xl shadow-emerald-500/30
                hover:shadow-emerald-500/50 hover:-translate-y-0.5 active:translate-y-0
                transition-all duration-200 focus-visible:outline-none focus-visible:ring-2
                focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950"
              aria-label="Falar com Jonilson no WhatsApp (abre em nova aba)"
            >
              <span className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                <WhatsAppIcon className="w-6 h-6 text-navy-950" />
              </span>
              <span className="text-left">
                <span className="block text-navy-950/70 text-xs font-semibold uppercase tracking-wider mb-0.5">
                  Emergência de Dados?
                </span>
                <span className="block text-lg font-black leading-tight">
                  Falar com o Perito no WhatsApp
                </span>
              </span>
              <ExternalLink
                className="w-4 h-4 ml-auto flex-shrink-0 opacity-60 group-hover:opacity-100 transition-opacity"
                aria-hidden="true"
              />
            </a>

            {/* Email secondary contact */}
            <div className="mt-5 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-slate-800/80 border border-slate-700/60 flex items-center justify-center flex-shrink-0">
                <Mail className="w-4 h-4 text-slate-400" aria-hidden="true" />
              </div>
              <div>
                <p className="text-slate-500 text-xs mb-0.5">Prefere e-mail formal?</p>
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-slate-300 text-sm font-mono hover:text-emerald-400 transition-colors duration-200"
                  aria-label={`Enviar e-mail para ${EMAIL}`}
                >
                  {EMAIL}
                </a>
              </div>
            </div>
          </div>

          {/* Navigation + Social */}
          <div className="grid grid-cols-2 gap-8">
            {/* Nav Links */}
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">Navegação</h4>
              <ul className="space-y-3" role="list">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-emerald-400 transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal & Social */}
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">Legal</h4>
              <ul className="space-y-3 mb-8" role="list">
                {legalLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-slate-300 transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>

              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">Redes Sociais</h4>
              <div className="flex gap-3" role="list" aria-label="Redes sociais do Perito Jony">
                {socialLinks.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400
                      hover:border-emerald-500/40 hover:text-emerald-400 hover:bg-emerald-500/5
                      transition-all duration-200"
                    aria-label={`${label} do Perito Jony (abre em nova aba)`}
                  >
                    <Icon className="w-4 h-4" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom: Logo + Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group" aria-label="Perito Jony — Início">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-400 flex items-center justify-center shadow-lg shadow-emerald-500/20">
              <Shield className="w-4 h-4 text-navy-950" strokeWidth={2.5} aria-hidden="true" />
            </div>
            <span className="font-bold text-white">Perito Jony</span>
          </a>

          {/* Copyright */}
          <p className="text-slate-500 text-xs text-center font-mono">
            Copyright © 2026 Perito Jony — Todos os direitos reservados.
          </p>

          {/* Vercel badge area */}
          <div className="text-slate-600 text-xs font-mono">
            peritojony.vercel.app
          </div>
        </div>
      </div>
    </footer>
  )
}
