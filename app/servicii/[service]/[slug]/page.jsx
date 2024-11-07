"use client"

import { useParams } from 'next/navigation'
import { roofingServices } from '@/data/services'
import { serviceLocations } from '@/data/locations'
import Link from 'next/link'
import Layout from '@/components/Layout'

export default function SubservicePage() {
  const params = useParams()
  const { service, slug } = params

  // Find the correct service category
  const serviceKey = Object.keys(roofingServices).find(
    key => roofingServices[key].slug === service
  )

  if (!serviceKey) {
    return <Layout><div>Serviciul nu a fost găsit</div></Layout>
  }

  const categoryData = roofingServices[serviceKey]

  // Find the correct subservice
  const subServiceData = categoryData.services.find(
    subService => subService.slug === slug
  )

  if (!subServiceData) {
    return <Layout><div>Subserviciul nu a fost găsit</div></Layout>
  }

  // List of cities where the service is available
  const availableCities = Object.values(serviceLocations).filter(location =>
    location.regions.some(region => region.services.includes(service))
  )

  return (
    <Layout>
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-teal-600 mb-8">
          {subServiceData.name}
        </h1>
        <p className="text-gray-700 mb-6">
          {subServiceData.description}
        </p>
        <ul className="space-y-3">
          {subServiceData.benefits.map((benefit, index) => (
            <li key={index} className="flex items-center text-gray-700">
              <span className="text-teal-500 mr-2">✓</span>
              {benefit}
            </li>
          ))}
        </ul>
        <img src={subServiceData.image} alt={subServiceData.name} className="mt-6 rounded-lg shadow-lg" />

        <h2 className="text-2xl font-bold text-teal-600 mt-12 mb-4">
          Orașe principale
        </h2>
        <ul className="list-disc pl-5">
          {availableCities.map(city => (
            <li key={city.slug} className="text-gray-700">
              <Link href={`/servicii/${service}/${city.slug}`}>
                {city.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  )
} 