"use client"

import { roofingServices } from '@/data/services'
import Link from 'next/link'
import Layout from '@/components/Layout'
import { useEffect } from 'react'

export default function ServicesPage() {
  const servicesList = Object.values(roofingServices)
    .map(category => category.title)
    .join(', ')

  const metaDescription = `Servicii profesionale pentru acoperiș: ${servicesList}. Experți în reparații, montaj și întreținere acoperișuri în toată România.`

  // Folosim useEffect pentru a seta titlul paginii
  useEffect(() => {
    document.title = "Servicii Reparații Acoperiș | Reparații și Montaj"
  }, [])

  // Schema markup pentru servicii
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Servicii Reparații Acoperiș",
    "description": metaDescription,
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servicii Reparații și Montaj Acoperiș",
      "itemListElement": Object.values(roofingServices).map((category, index) => ({
        "@type": "OfferCatalog",
        "name": category.title,
        "itemListElement": category.services.map((service, serviceIndex) => ({
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": service.name,
            "description": service.description
          }
        }))
      }))
    }
  }

  return (
    <Layout>
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-teal-600 mb-8">
          Servicii Profesionale pentru Acoperiș
        </h1>
        
        {/* Introducere optimizată pentru SEO */}
        <p className="text-gray-700 mb-8 leading-relaxed">
          Oferim o gamă completă de servicii profesionale pentru acoperiș, 
          incluzând reparații, montaj, hidroizolații și sisteme pluviale. 
          Cu o experiență de peste 10 ani în domeniu și echipe specializate, 
          garantăm calitatea lucrărilor și satisfacția clienților noștri.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(roofingServices).map(([serviceKey, category]) => (
            <div key={serviceKey} className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {category.title}
              </h2>
              <ul className="space-y-3 mb-4">
                {category.services.map((service) => (
                  <li key={service.slug}>
                    <Link 
                      href={`/servicii/${serviceKey}/${service.slug}`}
                      className="text-teal-600 hover:text-teal-700 hover:underline flex items-center"
                    >
                      <span className="text-teal-500 mr-2">→</span>
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link 
                href={`/servicii/${serviceKey}`}
                className="inline-block mt-4 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors text-sm"
              >
                Vezi toate serviciile
              </Link>
            </div>
          ))}
        </div>

        {/* Secțiune FAQ pentru SEO */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-teal-600 mb-6">
            Întrebări Frecvente
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Ce zone acoperim cu serviciile noastre?
              </h3>
              <p className="text-gray-700">
                Oferim servicii în majoritatea orașelor mari din România și zonele adiacente.
                Verificați pagina fiecărui serviciu pentru disponibilitatea în zona dumneavoastră.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Care este garanția oferită pentru servicii?
              </h3>
              <p className="text-gray-700">
                Toate serviciile noastre vin cu garanție extinsă, iar perioada exactă 
                depinde de tipul lucrării efectuate. Contactați-ne pentru detalii specifice.
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
} 