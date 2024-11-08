'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import RequestModal from './RequestModal'

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section className="relative pt-10 pb-14 lg:pt-12 lg:pb-40 overflow-hidden">
      {/* Background cu gradient complex */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-teal-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-teal-900/30 via-transparent to-transparent"></div>
        <div className="absolute inset-0 backdrop-blur-[100px]"></div>
        {/* Opțional: adaugă un overlay cu noise pentru textură */}

      </div>

      {/* Opțional: adaugă un efect de "glow" în colțuri */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-teal-500/20 rounded-full filter blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full filter blur-[100px] translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-12 xl:space-x-20">
          {/* Text Content - Left Side */}
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <div className="max-w-xl mx-auto lg:mx-0">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 mb-8">
                <span className="text-sm text-teal-400 font-medium">
                  Servicii Premium de Acoperișuri
                </span>
              </div>

              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-5xl text-white font-bold mb-6 leading-tight">
                Experți în{' '}
                <span className="text-teal-400">Montaj și Reparații</span>{' '}
                Acoperișuri
              </h1>

              <div className="space-y-6 text-gray-300 text-lg mb-10">
                <p>
                  Oferim servicii complete de montaj, reparații și întreținere acoperișuri 
                  în toată România, cu materiale premium și garanție extinsă.
                </p>
                <ul className="grid grid-cols-2 gap-4">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-teal-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                    </svg>
                    Garanție 15 ani
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-teal-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                    </svg>
                    Echipă certificată
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-teal-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                    </svg>
                    Materiale premium
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-teal-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                    </svg>
                    Consultanță gratuită
                  </li>
                </ul>
              </div>

              {/* CTA Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/solicita-oferta"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 transition-colors duration-300"
                >
                  Solicită Ofertă Gratuită
                </Link>
                <Link 
                  href="/servicii"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white border-2 border-white/20 hover:bg-white/10 rounded-full transition-colors duration-300"
                >
                  Vezi Serviciile Noastre
                </Link>
              </div>
            </div>
          </div>

          {/* Image Section - Right Side */}
          <div className="w-full lg:w-1/2">
            <div className="relative">
              {/* Main Image */}
              <div className="relative w-full h-[400px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/pattern.svg"
                  alt="Servicii profesionale de montaj și reparații acoperișuri"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              
              {/* Portfolio Card - Floating over image */}
              <Link 
                href="/portofoliu"
                className="absolute bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-sm group bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-xl hover:bg-white transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-teal-500/10 rounded-lg">
                      <svg 
                        className="w-8 h-8 text-teal-500"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm0 2v12h16V6H4zm2 3h3v3H6V9zm5 0h3v3h-3V9zm5 0h3v3h-3V9z"/>
                      </svg>
                    </div>
                    <div>
                      <div className="text-xl font-semibold text-gray-900">500+ Proiecte</div>
                      <div className="text-sm text-gray-600">Vezi Portofoliul Nostru</div>
                    </div>
                  </div>
                  <svg 
                    className="w-6 h-6 text-gray-400 transform group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </Link>

              {/* Stats Badge - Optional, can be removed if too crowded */}
              <div className="absolute top-6 left-6 inline-flex items-center px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg">
                <span className="text-sm font-medium text-gray-900">
                  15+ Ani de Experiență
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal pentru solicitare ofertă */}
      <RequestModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  )
}
