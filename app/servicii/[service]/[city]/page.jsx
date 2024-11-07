"use client"

import { useParams } from 'next/navigation'
import { roofingServices } from '@/data/services'
import { serviceLocations } from '@/data/locations'
import Link from 'next/link'
import Layout from '@/components/Layout'

export default function ServiceCityPage() {
  const params = useParams()
  const { service, city } = params

  // Find the correct service category
  const serviceKey = Object.keys(roofingServices).find(
    key => roofingServices[key].slug === service
  )

  if (!serviceKey) {
    return <Layout><div>Serviciul nu a fost găsit</div></Layout>
  }

  const categoryData = roofingServices[serviceKey]

  // Find the correct city
  const cityData = serviceLocations[city]

  if (!cityData) {
    return <Layout><div>Orașul nu a fost găsit</div></Layout>
  }

  // Filter regions that offer the specific service
  const regionsWithService = cityData.regions.filter(region =>
    region.services.includes(service)
  )

  return (
    <Layout>
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-teal-600 mb-8">
          {categoryData.title} în {cityData.name}
        </h1>
        {regionsWithService.length > 0 ? (
          regionsWithService.map((region) => (
            <div key={region.slug} className="mb-8">
              <h2 className="text-2xl font-bold text-teal-600 mb-4">
                {region.name}
              </h2>
              <p className="text-gray-700 mb-4">
                {region.description}
              </p>
              <ul className="list-disc pl-5 mb-4">
                {region.services.map((serviceSlug) => (
                  <li key={serviceSlug} className="text-gray-700">
                    <Link href={`/servicii/${serviceSlug}`}>
                      {serviceSlug.replace(/-/g, ' ')}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))
        ) : (
          <p className="text-gray-700">Nu există regiuni disponibile pentru acest serviciu în {cityData.name}.</p>
        )}
      </div>
    </Layout>
  )
}
