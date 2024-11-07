"use client"

import { roofingServices } from '@/data/services'
import Link from 'next/link'
import Layout from '@/components/Layout'

export default function ServicesPage() {
  return (
    <Layout>
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-teal-600 mb-8">
          Serviciile Noastre
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.values(roofingServices).map((category) => (
            <div key={category.slug} className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {category.title}
              </h2>
              <ul className="list-disc pl-5 mb-4 text-gray-700">
                {category.services.map((service) => (
                  <li key={service.slug}>
                    {service.name}
                  </li>
                ))}
              </ul>
              <Link 
                href={`/servicii/${category.slug}`}
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