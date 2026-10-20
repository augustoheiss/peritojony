import { Link } from 'react-router-dom'
import { ArrowLeft, Shield, Scale, Eye, UserCheck, Mail, MessageCircle } from 'lucide-react'

export default function LegalPage() {
  const PROFESSIONAL_NAME = 'Perito Jony (Jonilson)'
  const EMAIL = 'jonyperito2001@gmail.com'
  const WHATSAPP = '(11) 96103-0036'
  const SERVICE_DESCRIPTION = 'recuperação forense de dados em SSDs, HDDs, dispositivos móveis, bancos de dados corrompidos e assistência técnica pericial'
  const LAST_UPDATED = '20 de outubro de 2026 — Padrão de Conformidade v3.0'

  const sections = [
    {
      icon: Scale,
      number: '1',
      title: 'Termos de Uso',
      subsections: [
        {
          id: '1.1',
          title: 'Descrição dos Serviços',
          content: `Este site tem como objetivo apresentar e facilitar o contato para os serviços de ${SERVICE_DESCRIPTION}, oferecidos de forma autônoma por ${PROFESSIONAL_NAME}.`,
        },
        {
          id: '1.2',
          title: 'Contato, Triagem Técnica e Agendamentos',
          content:
            'Os contatos, diagnósticos preliminares, orçamentos e agendamentos realizados através dos botões de redirecionamento deste site (como WhatsApp e E-mail) são de inteira responsabilidade do usuário e do perito prestador do serviço. O site funciona exclusivamente como um canal de vitrine institucional e facilitação de comunicação inicial.',
        },
        {
          id: '1.3',
          title: 'Segredo de Justiça (CPC Art. 189) e Cadeia de Custódia Forense',
          content:
            'Por razões de segurança forense e sigilo processual (Art. 189 do Código de Processo Civil), é estritamente vedado o envio ou upload não solicitado de autos processuais sob Segredo de Justiça, mídias sensíveis ou evidências digitais críticas através de canais abertos sem prévia formalização de contrato de confidencialidade (NDA/Termo de Custódia) e definição de canal criptografado diretamente com o Perito.',
        },
        {
          id: '1.4',
          title: 'Isenção de Responsabilidade Técnica, Repositório Público e Cláusula de Indenização (Hold Harmless)',
          content:
            'A arquitetura de software, design e código-fonte desta plataforma foram desenvolvidos de forma independente sob o modelo AS-IS ("no estado em que se encontra"). Por razões de transparência tecnológica, auditoria de segurança da informação e portfólio de engenharia de software, o código-fonte de apresentação (front-end) pode estar hospedado em repositório público (GitHub), contendo exclusivamente marcação estrutural e metadados públicos de divulgação comercial expressamente autorizados pelo Controlador. O engenheiro de software responsável pelo desenvolvimento não possui vínculo societário com o Perito, não possui acesso físico ou lógico às mídias periciadas, não emite laudos ou pareceres técnicos judiciais e não detém responsabilidade solidária ou subsidiária (Art. 42 da LGPD) pelos serviços forenses prestados ou pelos dados tratados após o redirecionamento externo.',
        },
        {
          id: '1.5',
          title: 'Propriedade Intelectual e Reserva de Direitos em Repositório Público',
          content:
            'A disponibilização pública do código-fonte para fins de transparência técnica e portfólio não concede licença de uso sobre a marca, nome profissional, fotografias, certificações ou textos técnicos desta página, os quais permanecem protegidos pela Lei de Direitos Autorais (Lei nº 9.610/1998) e pela Lei da Propriedade Industrial (Lei nº 9.279/1996). É vedada a clonagem comercial ou uso indevido de identidade profissional.',
        },
      ],
    },
    {
      icon: Eye,
      number: '2',
      title: 'Política de Privacidade (LGPD)',
      intro:
        'Em conformidade com a Lei Geral de Proteção de Dados (Lei Federal nº 13.709/2018), detalhamos de forma transparente como tratamos as suas informações:',
      subsections: [
        {
          id: '2.1',
          title: 'Coleta Mínima e Processamento 100% Local (Client-Side)',
          content: `Adotamos o princípio da minimização de dados (Art. 6º, III da LGPD). Toda a navegação nesta página ocorre exclusivamente na memória do navegador do próprio usuário (Client-Side), sem bancos de dados ocultos ou servidores intermediários de captura. Quando você aciona nossos botões de contato (WhatsApp ou E-mail), os dados fornecidos voluntariamente por você são recebidos diretamente por ${PROFESSIONAL_NAME} nos canais oficiais criptografados.`,
        },
        {
          id: '2.2',
          title: 'Finalidade e Bases Legais do Tratamento (Art. 7º da LGPD)',
          content: 'Os dados fornecidos voluntariamente pelo titular fundamentam-se nas seguintes bases legais e finalidades estritas:',
          list: [
            'Procedimentos Preliminares e Execução de Contrato (Art. 7º, V): Retornar o contato, avaliar a viabilidade técnica de recuperação/perícia, enviar orçamentos e executar o serviço contratado;',
            'Exercício Regular de Direitos em Processo Judicial, Administrativo ou Arbitral (Art. 7º, VI): Quando aplicável à assistência técnica pericial contratada;',
            'Cumprimento de Obrigação Legal ou Regulatória (Art. 7º, II): Emissão fiscal e cumprimento de normas técnicas e judiciais;',
            'Legítimo Interesse (Art. 7º, IX): Segurança cibernética e prevenção a fraudes.',
          ],
        },
        {
          id: '2.3',
          title: 'Compartilhamento de Informações e Sigilo Pericial',
          content:
            'Nós não vendemos, alugamos ou compartilhamos seus dados pessoais ou informações técnicas com terceiros para fins de marketing ou qualquer outra finalidade alheia ao serviço contratado, observando rigoroso sigilo profissional e cadeia de custódia, exceto se exigido por lei ou determinação judicial.',
        },
        {
          id: '2.4',
          title: 'Cookies, Armazenamento Técnico e Zero-Tracking',
          content:
            'Esta aplicação segue o princípio de Privacy by Design e não utiliza cookies de rastreamento publicitário invasivo, pixels de retargeting ou comercialização de perfil comportamental. Apenas recursos técnicos essenciais do navegador são utilizados para garantir o carregamento seguro e responsivo da interface.',
        },
        {
          id: '2.5',
          title: 'Direitos do Titular dos Dados (Art. 18 da LGPD)',
          content: 'Nos termos do Art. 18 da LGPD, você tem o direito de solicitar ao Controlador a qualquer momento:',
          list: [
            'A confirmação da existência de tratamento e o acesso aos seus dados pessoais;',
            'A correção de dados incompletos, inexatos ou desatualizados;',
            'A anonimização, bloqueio ou exclusão dos seus dados dos contatos comerciais;',
            'A revogação do consentimento (Art. 18, IX), com resposta em até 15 (quinze) dias conforme o Art. 19, II da LGPD.',
          ],
        },
        {
          id: '2.6',
          title: 'Proteção dos Dados Públicos do Perito — Vedação de Scraping e Spam (Art. 7º, §§ 3º e 4º da LGPD)',
          content:
            'Os dados de contato profissional (WhatsApp, e-mail e identificação técnica) disponibilizados publicamente nesta página e no código-fonte público têm como única e estrita finalidade permitir o contato comercial e técnico por potenciais clientes e operadores do Direito (Art. 7º, §§ 3º e 4º da LGPD). É expressamente proibida a coleta automatizada (web scraping, crawling, mineração por bots), a inclusão em listas de spam ou telemarketing, a comercialização por data brokers ou o uso para treinamento de inteligência artificial sem autorização expressa.',
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-navy-950">
      {/* Header bar */}
      <header className="sticky top-0 z-50 bg-navy-950/80 backdrop-blur-xl border-b border-slate-800/80">
        <div className="section-container flex items-center justify-between py-4">
          <Link
            to="/"
            className="group flex items-center gap-2.5 text-slate-400 hover:text-emerald-400 transition-colors duration-200"
            aria-label="Voltar para o início"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" aria-hidden="true" />
            <span className="text-sm font-medium">Voltar para o Início</span>
          </Link>

          <Link to="/" className="flex items-center gap-2.5" aria-label="Perito Jony — Início">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-400 flex items-center justify-center shadow-lg shadow-emerald-500/20">
              <Shield className="w-3.5 h-3.5 text-navy-950" strokeWidth={2.5} aria-hidden="true" />
            </div>
            <span className="font-bold text-white text-sm">Perito Jony</span>
          </Link>
        </div>
      </header>

      {/* Main content */}
      <main className="section-container py-16 lg:py-24">
        {/* Page title */}
        <div className="text-center mb-16">
          <span className="section-label mb-4 block">Documento Legal</span>
          <h1 className="text-3xl lg:text-4xl font-black text-white mb-4 text-balance">
            Termos de Uso e{' '}
            <span className="gradient-text">Política de Privacidade</span>
          </h1>
          <p className="text-slate-400 text-sm font-mono">
            Última atualização: {LAST_UPDATED}
          </p>
        </div>

        {/* Intro paragraph */}
        <div className="card-glass p-6 lg:p-8 rounded-2xl mb-10 border-l-2 border-emerald-500/40">
          <p className="text-slate-300 leading-relaxed">
            Bem-vindo(a) ao site de <strong className="text-white">{PROFESSIONAL_NAME}</strong>.
            Ao acessar e utilizar esta página, você concorda com os Termos de Uso e a Política de
            Privacidade descritos abaixo. Caso não concorde com algum dos termos, pedimos que não
            utilize os serviços aqui oferecidos.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-12">
          {sections.map((section) => {
            const SectionIcon = section.icon
            return (
              <section key={section.number} aria-labelledby={`section-${section.number}`}>
                {/* Section header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
                    <SectionIcon className="w-5 h-5 text-emerald-400" aria-hidden="true" />
                  </div>
                  <h2
                    id={`section-${section.number}`}
                    className="text-xl lg:text-2xl font-bold text-white"
                  >
                    {section.number}. {section.title}
                  </h2>
                </div>

                {section.intro && (
                  <p className="text-slate-400 leading-relaxed mb-6 ml-14">
                    {section.intro}
                  </p>
                )}

                {/* Subsections */}
                <div className="space-y-6 ml-14">
                  {section.subsections.map((sub) => (
                    <div
                      key={sub.id}
                      className="group card-glass p-5 lg:p-6 rounded-xl hover:border-slate-600/80 transition-colors duration-300"
                    >
                      <h3 className="text-base font-semibold text-emerald-400 mb-3">
                        {sub.id}. {sub.title}
                      </h3>
                      <p className="text-slate-300 leading-relaxed text-sm">{sub.content}</p>
                      {sub.list && (
                        <ul className="mt-3 space-y-2" role="list">
                          {sub.list.map((item, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2.5 text-sm text-slate-300"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/60 mt-1.5 flex-shrink-0" aria-hidden="true" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )
          })}
        </div>

        {/* Data Controller contact card */}
        <div className="mt-16">
          <div className="card-glass p-6 lg:p-8 rounded-2xl border-l-2 border-gold-400/40">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gold-400/10 border border-gold-400/20 flex items-center justify-center flex-shrink-0">
                <UserCheck className="w-5 h-5 text-gold-400" aria-hidden="true" />
              </div>
              <h2 className="text-xl font-bold text-white">
                2.7. Contato do Controlador de Dados e Alerta Antifraude
              </h2>
            </div>
            <p className="text-slate-400 leading-relaxed mb-6 ml-14">
              Para exercer seus direitos ou tirar dúvidas sobre esta política, entre em contato diretamente
              com o responsável pelo tratamento dos dados exclusivamente pelos canais oficiais abaixo (o Perito jamais solicita senhas bancárias, códigos SMS/WhatsApp de 6 dígitos ou pagamentos Pix para contas de terceiros desconhecidos):
            </p>
            <div className="ml-14 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-800/80 border border-slate-700/60 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-4 h-4 text-slate-400" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-slate-500 text-xs">Responsável</span>
                  <p className="text-white text-sm font-semibold">{PROFESSIONAL_NAME}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-800/80 border border-slate-700/60 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-slate-400" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-slate-500 text-xs">E-mail</span>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="block text-sm font-mono text-emerald-400 hover:text-emerald-300 transition-colors duration-200"
                  >
                    {EMAIL}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-800/80 border border-slate-700/60 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-4 h-4 text-slate-400" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-slate-500 text-xs">WhatsApp</span>
                  <p className="text-white text-sm font-mono">{WHATSAPP}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Back to home CTA */}
        <div className="mt-16 text-center">
          <Link
            to="/"
            className="btn-outline"
            id="cta-back-home-legal"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            Voltar para o Início
          </Link>
        </div>
      </main>

      {/* Mini footer */}
      <footer className="border-t border-slate-800/80 py-8">
        <div className="section-container text-center">
          <p className="text-slate-500 text-xs font-mono">
            Copyright © {new Date().getFullYear()} Perito Jony — Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}
