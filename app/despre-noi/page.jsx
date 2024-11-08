"use client"

import Layout from '@/components/Layout'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'

export default function AboutPage() {
  useEffect(() => {
    document.title = "Despre Noi | AcoperisuriPro - Experți în Acoperișuri"
  }, [])

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/pattern.svg"
            alt="Echipa AcoperisuriPro"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/70 to-gray-900/50"></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Construim Acoperișuri<br />
            <span className="text-teal-400">Care Durează Generații</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Cu peste 15 ani de experiență în domeniu, suntem dedicați excelenței 
            în montajul și reparația acoperișurilor, oferind soluții durabile și 
            servicii de cea mai înaltă calitate.
          </p>
        </div>
      </section>

      {/* Statistici */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">15+</div>
              <div className="text-gray-600">Ani de Experiență</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">1000+</div>
              <div className="text-gray-600">Proiecte Finalizate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">50+</div>
              <div className="text-gray-600">Angajați Profesioniști</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">98%</div>
              <div className="text-gray-600">Clienți Mulțumiți</div>
            </div>
          </div>
        </div>
      </section>

      {/* Povestea Noastră */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center -mx-4">
            <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
              <div className="relative">
                <Image
                  src="/images/pattern.svg"
                  alt="Povestea noastră"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-8 -right-8 bg-teal-600 text-white p-8 rounded-lg shadow-lg hidden md:block">
                  <p className="text-2xl font-bold">Din 2008</p>
                  <p>În serviciul clienților noștri</p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Povestea Noastră
              </h2>
              <p className="text-gray-600 mb-6">
                Totul a început în 2008, când un grup de profesioniști pasionați 
                au decis să ridice standardele în industria acoperișurilor din România. 
                Am pornit cu o echipă mică, dar cu o viziune mare: să oferim servicii 
                de excepție și să construim acoperișuri care să reziste generații.
              </p>
              <p className="text-gray-600 mb-6">
                De-a lungul anilor, am crescut constant, ne-am perfecționat tehnicile 
                și am investit în cele mai moderne echipamente. Astăzi, suntem mândri 
                să fim unul dintre cei mai respectați furnizori de servicii pentru 
                acoperișuri din țară.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valorile Noastre */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Valorile Noastre
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Calitate Premium</h3>
              <p className="text-gray-600">
                Folosim doar materiale de cea mai înaltă calitate și tehnici 
                moderne de instalare pentru rezultate excepționale.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Profesionalism</h3>
              <p className="text-gray-600">
                Echipa noastră este formată din profesioniști certificați, 
                cu ani de experiență în domeniu.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Satisfacția Clientului</h3>
              <p className="text-gray-600">
                Prioritatea noastră este satisfacția deplină a clienților 
                și depășirea așteptărilor lor.
              </p>
            </div>
          </div>
        </div>
      </section>

     

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-gray-900 via-teal-900 to-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Pregătiți să Începem un Proiect Împreună?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contactați-ne astăzi pentru o evaluare gratuită și 
            descoperiți diferența calității premium.
          </p>
          <Link href="/contact" className="bg-white text-teal-900 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors">
            Contactați-ne
          </Link>
        </div>
      </section>
    </Layout>
  )
}