import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    id: 'tempo',
    question: 'Quanto tempo leva o processo de recuperação?',
    answer:
      'O tempo varia conforme a complexidade do caso. O diagnóstico inicial é entregue em até 24 horas úteis. A recuperação em si pode levar de 24 horas (casos simples de deleção lógica) até 7 dias úteis (casos com danos físicos severos que requerem trabalho em sala limpa). Em situações de urgência, oferecemos atendimento prioritário — consulte-nos.',
  },
  {
    id: 'riscos',
    question: 'Quais os riscos de usar programas gratuitos de recuperação?',
    answer:
      'É um dos maiores erros que vemos. Programas gratuitos como Recuva ou PhotoRec escrevem dados temporários no próprio disco enquanto operam, o que pode sobrescrever exatamente os setores onde seus arquivos perdidos estão armazenados. Além disso, rodar o sistema operacional faz o mesmo. Cada tentativa amadora reduz drasticamente a chance de recuperação profissional. Desligue o dispositivo imediatamente e nos contate.',
  },
  {
    id: 'seguranca',
    question: 'Meus arquivos confidenciais ficam seguros durante o processo?',
    answer:
      'Absolutamente. Todo o trabalho é realizado em ambiente controlado com acesso restrito. Utilizamos Write Blockers forenses que impedem qualquer gravação no dispositivo original. Ao final, todo material é armazenado criptografado e transferido por canal seguro. Assinamos um Acordo de Confidencialidade (NDA) antes de qualquer análise. Seu sigilo é uma questão técnica e legal para nós.',
  },
  {
    id: 'taxa',
    question: 'Qual é a taxa de sucesso da recuperação?',
    answer:
      'Nossa taxa de sucesso para danos puramente lógicos (deleção, formatação, corrupção leve) é superior a 95%. Para danos físicos (cabeça de leitura, platters danificados, circuito queimado), a taxa varia entre 70% e 90% dependendo da extensão do dano. Somos transparentes sobre as chances reais desde o diagnóstico inicial — nunca prometemos o que não podemos entregar. Você só paga se houver recuperação.',
  },
]

function FAQItem({ item }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="card-glass rounded-2xl overflow-hidden">
      <button
        id={`faq-btn-${item.id}`}
        className="w-full flex items-center justify-between gap-4 p-6 text-left hover:bg-slate-800/30 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-emerald-400"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${item.id}`}
      >
        <span className="font-semibold text-white text-base leading-snug">{item.question}</span>
        <ChevronDown
          className={`w-5 h-5 text-emerald-400 flex-shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
          aria-hidden="true"
        />
      </button>

      <div
        id={`faq-answer-${item.id}`}
        role="region"
        aria-labelledby={`faq-btn-${item.id}`}
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="px-6 pb-6 text-slate-400 leading-relaxed text-sm border-t border-slate-800/80 pt-4">
          {item.answer}
        </p>
      </div>
    </div>
  )
}

export default function FAQSection() {
  return (
    <section
      id="faq"
      className="section-padding relative overflow-hidden"
      aria-labelledby="faq-heading"
    >
      <div className="section-container relative z-10">
        {/* Section Label */}
        <div className="text-center mb-4">
          <span className="section-label">FAQ</span>
        </div>

        {/* Heading */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2
            id="faq-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4"
          >
            Perguntas frequentes
          </h2>
          <p className="text-slate-400 text-lg">
            Tudo que você precisa saber antes de dar o próximo passo.
          </p>
        </div>

        {/* FAQ List */}
        <div
          className="max-w-3xl mx-auto space-y-4"
          role="list"
          aria-label="Perguntas frequentes sobre recuperação de dados"
        >
          {faqs.map((faq) => (
            <div key={faq.id} role="listitem">
              <FAQItem item={faq} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
