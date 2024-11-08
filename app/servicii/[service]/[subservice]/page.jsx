"use client"

import { useParams } from 'next/navigation'
import { roofingServices } from '@/data/services'
import { serviceLocations } from '@/data/locations'
import Layout from '@/components/Layout'
import Link from 'next/link'
import { useEffect } from 'react'

export default function SubservicePage() {
  const params = useParams()
  const { service, subservice } = params

  // Găsește categoria de servicii
  const categoryData = roofingServices[service]
  if (!categoryData) {
    return <Layout><div>Serviciul nu a fost găsit</div></Layout>
  }

  // Găsește subserviciul
  const subServiceData = categoryData.services.find(
    s => s.slug === subservice
  )
  if (!subServiceData) {
    return <Layout><div>Subserviciul nu a fost găsit</div></Layout>
  }

  // Găsește orașele disponibile
  const availableCities = Object.values(serviceLocations).filter(city =>
    city.regions.some(region => 
      region.services.includes(subservice)
    )
  )

  // Actualizare dinamică meta tags
  useEffect(() => {
    // Titlu
    document.title = `${subServiceData.name} | Servicii Profesionale în Toată România`
    
    // Meta description
    const metaDescription = `${subServiceData.name} profesionale în ${availableCities.map(city => city.name).join(', ')}. ${subServiceData.description} Experți certificați, materiale premium și garanție extinsă.`
    
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) {
      metaDesc.setAttribute('content', metaDescription)
    }

    // Schema markup
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": subServiceData.name,
      "description": subServiceData.description,
      "provider": {
        "@type": "Organization",
        "name": "Servicii Acoperiș",
        "image": subServiceData.image
      },
      "areaServed": availableCities.map(city => ({
        "@type": "City",
        "name": city.name
      })),
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": subServiceData.name,
        "itemListElement": availableCities.map(city => ({
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": `${subServiceData.name} în ${city.name}`
          }
        }))
      }
    }

    const existingSchema = document.querySelector('#schema-markup')
    if (existingSchema) {
      existingSchema.remove()
    }

    const schemaScript = document.createElement('script')
    schemaScript.id = 'schema-markup'
    schemaScript.type = 'application/ld+json'
    schemaScript.text = JSON.stringify(schemaData)
    document.head.appendChild(schemaScript)

    return () => {
      if (existingSchema) {
        existingSchema.remove()
      }
    }
  }, [subServiceData, availableCities])

  return (
    <Layout>
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-teal-600 mb-8">
          {subServiceData.name}
        </h1>

        {/* Introducere */}
        <div className="prose max-w-none mb-8">
          <p className="text-gray-700 text-lg leading-relaxed">
            {subServiceData.description} Oferim servicii profesionale în toate orașele mari 
            din România, cu echipe specializate și materiale de cea mai înaltă calitate.
          </p>
        </div>

        {/* Beneficii */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-teal-600 mb-6">
            De ce să alegeți serviciul nostru de {subServiceData.name.toLowerCase()}
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {subServiceData.benefits.map((benefit, index) => (
              <li key={index} className="flex items-center text-gray-700 bg-gray-50 p-4 rounded-lg">
                <span className="text-teal-500 mr-2">✓</span>
                {benefit}
              </li>
            ))}
          </ul>
        </section>

        {/* Imagine serviciu */}
        {subServiceData.image && (
          <div className="mb-12">
            <img 
              src={subServiceData.image} 
              alt={subServiceData.name} 
              className="rounded-lg shadow-lg w-full object-cover"
            />
          </div>
        )}

        {/* Orașe disponibile */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-teal-600 mb-6">
            Orașe unde oferim {subServiceData.name.toLowerCase()}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {availableCities.map(city => (
              <Link 
                key={city.slug}
                href={`/servicii/${service}/${subservice}/${city.slug}`}
                className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  {city.name}
                </h3>
                <p className="text-sm text-gray-600">
                  {city.regions.length} {city.regions.length === 1 ? 'regiune' : 'regiuni'} disponibile
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* Proces de lucru */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-teal-600 mb-6">
            Procesul nostru de lucru
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">1. Evaluare gratuită</h3>
              <p className="text-gray-700">
                Evaluăm gratuit situația și vă oferim cea mai bună soluție pentru necesitățile dvs.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">2. Execuție profesională</h3>
              <p className="text-gray-700">
                Echipa noastră de profesioniști execută lucrarea cu atenție la detalii.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">3. Garanție extinsă</h3>
              <p className="text-gray-700">
                Oferim garanție pentru toate lucrările și asistență post-execuție.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-teal-600 mb-6">
            Întrebări Frecvente
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Cât durează lucrarea?
              </h3>
              <p className="text-gray-700">
                Durata variază în funcție de complexitatea proiectului. La evaluarea 
                inițială vă vom oferi un calendar detaliat al lucrărilor.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Ce materiale folosiți?
              </h3>
              <p className="text-gray-700">
                Utilizăm exclusiv materiale premium de la producători recunoscuți, 
                oferind cea mai bună calitate pentru proiectul dumneavoastră.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-teal-50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-teal-600 mb-4">
            Solicitați o ofertă gratuită
          </h2>
          <p className="text-gray-700 mb-4">
            Contactați-ne pentru o evaluare gratuită și o ofertă personalizată pentru 
            serviciul de {subServiceData.name.toLowerCase()}.
          </p>
          <Link href="/solicita-oferta" className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors">
            Contactați-ne acum
          </Link>
        </section>
      </div>
    </Layout>
  )
}