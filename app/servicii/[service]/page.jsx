"use client"

import { useParams } from 'next/navigation'
import { roofingServices } from '@/data/services'
import Link from 'next/link'
import Layout from '@/components/Layout'

export default function ServiceCategoryPage() {
  const params = useParams()
  const { service } = params

  // Find the correct service category
  const serviceKey = Object.keys(roofingServices).find(
    key => roofingServices[key].slug === service
  )

  if (!serviceKey) {
    return <Layout><div>Serviciul nu a fost găsit</div></Layout>
  }

  const categoryData = roofingServices[serviceKey]

  return (
    <Layout>
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-teal-600 mb-8">
          {categoryData.title}
        </h1>
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
      </div>
    </Layout>
  )
} 