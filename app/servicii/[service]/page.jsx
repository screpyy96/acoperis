"use client"

import { useParams } from 'next/navigation'
import { roofingServices } from '@/data/services'
import Layout from '@/components/Layout'
import Link from 'next/link'
import { useEffect } from 'react'

export default function ServiceCategoryPage() {
  const params = useParams()
  const { service } = params

  const categoryData = roofingServices[service]

  if (!categoryData) {
    return <Layout><div>Serviciul nu a fost găsit</div></Layout>
  }

  const metaDescription = `${categoryData.title} profesionale în toată România. ${
    categoryData.services.map(s => s.name).join(', ')
  }. Experți cu peste 10 ani de experiență, materiale premium și garanție extinsă.`

  // Setăm titlul și meta tag-urile dinamic
  useEffect(() => {
    // Titlu
    document.title = `${categoryData.title} | Servicii Profesionale pentru Acoperiș`
    
    // Meta description
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) {
      metaDesc.setAttribute('content', metaDescription)
    } else {
      const newMetaDesc = document.createElement('meta')
      newMetaDesc.name = 'description'
      newMetaDesc.content = metaDescription
      document.head.appendChild(newMetaDesc)
    }

    // Schema markup
    const existingSchema = document.querySelector('#schema-markup')
    if (existingSchema) {
      existingSchema.remove()
    }
    
    const schemaScript = document.createElement('script')
    schemaScript.id = 'schema-markup'
    schemaScript.type = 'application/ld+json'
    schemaScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": categoryData.title,
      "description": metaDescription,
      "provider": {
        "@type": "Organization",
        "name": "Servicii Acoperiș"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": categoryData.title,
        "itemListElement": categoryData.services.map((service) => ({
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": service.name,
            "description": service.description
          }
        }))
      }
    })
    document.head.appendChild(schemaScript)

    // Cleanup
    return () => {
      if (existingSchema) {
        existingSchema.remove()
      }
    }
  }, [categoryData, metaDescription])

  return (
    <Layout>
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-teal-600 mb-8">
          {categoryData.title}
        </h1>

        <div className="prose max-w-none mb-8">
          <p className="text-gray-700 leading-relaxed">
            Oferim servicii complete de {categoryData.title.toLowerCase()} cu echipe specializate 
            și materiale de cea mai înaltă calitate. Experiența noastră de peste 10 ani în domeniu 
            ne recomandă ca partenerul ideal pentru proiectul dumneavoastră.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryData.services.map((subService) => (
            <div key={subService.slug} className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {subService.name}
              </h2>
              <p className="text-gray-700 mb-4">
                {subService.description}
              </p>
              <Link 
                href={`/servicii/${service}/${subService.slug}`}
                className="inline-block mt-4 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
              >
                Vezi detalii
              </Link>
            </div>
          ))}
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-teal-600 mb-6">
            De ce să alegeți serviciile noastre
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expertiză Dovedită</h3>
              <p className="text-gray-700">
                Peste 10 ani de experiență și mii de proiecte finalizate cu succes.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Calitate Garantată</h3>
              <p className="text-gray-700">
                Folosim doar materiale premium și oferim garanție pentru toate lucrările.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Servicii Complete</h3>
              <p className="text-gray-700">
                De la evaluare gratuită până la finalizarea lucrării și mentenanță ulterioară.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-teal-600 mb-6">
            Întrebări Frecvente despre {categoryData.title}
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Cât durează o lucrare tipică?
              </h3>
              <p className="text-gray-700">
                Durata depinde de complexitatea proiectului. La evaluarea inițială vă vom oferi 
                un calendar detaliat al lucrărilor.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Ce garanție oferim?
              </h3>
              <p className="text-gray-700">
                Oferim garanție extinsă pentru toate lucrările noastre, perioada exactă 
                fiind stabilită în funcție de tipul serviciului.
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
} 