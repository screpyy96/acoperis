'use client'

import { useState } from 'react'

const ChevronDownIcon = () => (
  <svg 
    className="w-6 h-6" 
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M19 9l-7 7-7-7" 
    />
  </svg>
)

const ChevronUpIcon = () => (
  <svg 
    className="w-6 h-6" 
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M5 15l7-7 7 7" 
    />
  </svg>
)

const faqs = [
  {
    id: 1,
    question: "Care sunt pașii pentru montarea unui acoperiș nou?",
    answer: "Procesul de montare include evaluarea inițială, alegerea materialelor, îndepărtarea vechiului acoperiș (dacă este cazul), montarea structurii de susținere, instalarea membranei hidroizolante, și montarea învelitorii. Totul durează între 5-10 zile, în funcție de complexitate și suprafață."
  },
  {
    id: 2,
    question: "Ce garanție oferiti pentru lucrări?",
    answer: "Oferim garanție extinsă pentru toate lucrările noastre: 5 ani pentru manoperă și până la 30 de ani pentru materiale, în funcție de producător. Garanția acoperă defecte de instalare, infiltrații și probleme structurale."
  },
  {
    id: 3,
    question: "Cât costă renovarea unui acoperiș?",
    answer: "Costul variază în funcție de mai mulți factori: suprafața acoperișului, materialele alese, complexitatea lucrării și accesibilitatea locației. Oferim evaluări gratuite și cotații detaliate după inspectarea locației."
  },
  {
    id: 4,
    question: "Ce materiale folosiți pentru acoperișuri?",
    answer: "Utilizăm materiale premium de la producători de renume: țiglă ceramică, țiglă metalică, tablă cutată, membrane bituminoase și materiale de hidroizolație de înaltă calitate. Toate materialele sunt certificate și vin cu garanție de la producător."
  },
  {
    id: 5,
    question: "În cât timp puteți începe o lucrare?",
    answer: "În general, putem începe lucrarea în 7-14 zile de la semnarea contractului. Pentru urgențe și reparații, avem echipe dedicate care pot interveni în 24-48 de ore."
  }
]

export default function FAQ() {
  const [openId, setOpenId] = useState(null)

  return (
    <section className="py-12 lg:py-24 bg-gradient-to-b from-white to-gray-100" aria-labelledby="faq-title">
      <div className="container mx-auto px-4">
        {/* Header cu stil diferit */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center mb-6">
            <div className="w-2 h-2 rounded-full bg-teal-600 mr-2"></div>
            <span className="text-teal-600 font-semibold uppercase tracking-wider">FAQ</span>
          </div>
          <h2 
            id="faq-title" 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gray-900"
          >
            Întrebări <span className="text-teal-600">Frecvente</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
            Află răspunsurile la cele mai comune întrebări despre serviciile noastre de acoperișuri
          </p>
        </div>

        {/* FAQ Items cu design nou */}
        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="flex w-full items-center justify-between p-6 text-left"
                aria-expanded={openId === faq.id}
                aria-controls={`faq-answer-${faq.id}`}
              >
                <h3 className="text-xl font-bold text-gray-900 pr-8">
                  {faq.question}
                </h3>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-colors duration-300 ${
                  openId === faq.id 
                    ? 'bg-teal-600 border-teal-600' 
                    : 'border-gray-300 hover:border-teal-600'
                }`}>
                  {openId === faq.id ? (
                    <ChevronUpIcon />
                  ) : (
                    <ChevronDownIcon />
                  )}
                </div>
              </button>
              
              <div
                id={`faq-answer-${faq.id}`}
                className={`overflow-hidden transition-all duration-300 ${
                  openId === faq.id ? 'max-h-96' : 'max-h-0'
                }`}
                role="region"
                aria-labelledby={`faq-question-${faq.id}`}
              >
                <div className="p-6 pt-0 border-t border-gray-100">
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Box cu design nou */}
        <div className="max-w-4xl mx-auto mt-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-center p-8 bg-teal-50 rounded-xl border border-teal-100">
            <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-6">
              <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center">
                <svg 
                  className="w-7 h-7 text-teal-600" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                  />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Ai alte întrebări?
              </h3>
              <p className="text-lg text-gray-600">
                Contactează-ne la{' '}
                <a 
                  href="tel:0722222222" 
                  className="text-teal-600 font-bold hover:text-teal-700 transition-colors"
                >
                  0722 222 222
                </a>
                {' '}sau vizitează pagina noastră de{' '}
                <a 
                  href="/contact" 
                  className="text-teal-600 font-bold hover:text-teal-700 transition-colors"
                >
                  Contact
                </a>
                . Echipa noastră îți stă la dispoziție pentru orice nelămurire.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 