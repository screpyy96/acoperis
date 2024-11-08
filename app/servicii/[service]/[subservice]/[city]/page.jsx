"use client"

import { useParams } from 'next/navigation'
import { roofingServices } from '@/data/services'
import { serviceLocations } from '@/data/locations'
import Layout from '@/components/Layout'
import { useEffect } from 'react'

export default function CityServicePage() {
  const params = useParams()
  const { service, subservice, city } = params

  // Găsește datele serviciului
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

  // Găsește datele orașului
  const cityData = serviceLocations[city]
  if (!cityData) {
    return <Layout><div>Orașul nu a fost găsit</div></Layout>
  }

  // Filtrează regiunile care oferă acest serviciu
  const availableRegions = cityData.regions.filter(region =>
    region.services.includes(subservice)
  )

  // Actualizare dinamică meta tags
  useEffect(() => {
    const metaTitle = `${subServiceData.name} în ${cityData.name} | Servicii Profesionale`
    const metaDescription = `Servicii profesionale de ${subServiceData.name.toLowerCase()} în ${cityData.name} și împrejurimi. ${subServiceData.description} Experți certificați, materiale premium și garanție extinsă.`

    document.title = metaTitle

    // Schema markup
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": `${subServiceData.name} în ${cityData.name}`,
      "description": metaDescription,
      "provider": {
        "@type": "Organization",
        "name": "Servicii Acoperiș",
        "image": subServiceData.image
      },
      "areaServed": {
        "@type": "City",
        "name": cityData.name
      },
      "serviceArea": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": "44.4268",  // Coordonate pentru București
          "longitude": "26.1025"
        },
        "geoRadius": "50000"
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
  }, [subServiceData, cityData])

  return (
    <Layout>
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-teal-600 mb-4">
          {subServiceData.name} în {cityData.name}
        </h1>
        
        {/* Introducere */}
        <div className="text-gray-700 mb-8 leading-relaxed">
          <p className="mb-4">
            Oferim servicii profesionale de {subServiceData.name.toLowerCase()} în {cityData.name} și împrejurimi.
            Cu o experiență de peste 10 ani în domeniu, echipa noastră de experți vă stă la dispoziție
            pentru orice tip de proiect.
          </p>
          <p>
            Acoperim toate sectoarele și zonele adiacente din {cityData.name}, oferind servicii prompte
            și de cea mai înaltă calitate.
          </p>
        </div>

        {/* Beneficii */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-teal-600 mb-6">
            De ce să alegeți serviciile noastre în {cityData.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {subServiceData.benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center text-gray-700">
                  <span className="text-teal-500 mr-2">✓</span>
                  {benefit}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Zone Acoperite */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-teal-600 mb-6">
            Zone acoperite în {cityData.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {availableRegions.map(region => (
              <div key={region.slug} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {region.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {region.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Proces de Lucru */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-teal-600 mb-6">
            Cum lucrăm în {cityData.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">1. Contact</h3>
              <p className="text-gray-700">
                Ne contactați pentru o evaluare gratuită a proiectului.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">2. Evaluare</h3>
              <p className="text-gray-700">
                Evaluăm gratuit la fața locului și oferim o ofertă detaliată.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">3. Execuție</h3>
              <p className="text-gray-700">
                Executăm lucrarea cu materiale premium și atenție la detalii.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">4. Garanție</h3>
              <p className="text-gray-700">
                Oferim garanție extinsă și suport post-execuție.
              </p>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="bg-teal-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-teal-600 mb-4">
            Contactați-ne pentru o ofertă personalizată
          </h2>
          <p className="text-gray-700 mb-6">
            Suntem disponibili 24/7 pentru urgențe în {cityData.name} și împrejurimi.
            Contactați-ne pentru o evaluare gratuită și o ofertă personalizată pentru 
            serviciul de {subServiceData.name.toLowerCase()}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors">
              Solicită ofertă gratuită
            </button>
            <button className="bg-white text-teal-600 border-2 border-teal-600 px-6 py-3 rounded-lg hover:bg-teal-50 transition-colors">
              Apelează acum: 0123 456 789
            </button>
          </div>
        </section>
      </div>
    </Layout>
  )
}