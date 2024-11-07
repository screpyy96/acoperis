import { roofingServices } from '@/data/services'
import Link from 'next/link'

export async function generateStaticParams() {
  return Object.values(roofingServices).map((service) => ({
    service: service.slug,
  }))
}

export default async function ServicePage({ params }) {
  const { service } = await params
  const serviceData = Object.values(roofingServices).find(
    (s) => s.slug === service
  )

  if (!serviceData) {
    return <div>Serviciul nu a fost găsit</div>
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        {serviceData.title}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {serviceData.services.map((subService) => (
          <div key={subService.slug} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                {subService.name}
              </h2>
              <p className="text-gray-600 mb-4">
                {subService.description}
              </p>
              <ul className="space-y-2 mb-6">
                {subService.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <span className="text-teal-500 mr-2">✓</span>
                    {benefit}
                  </li>
                ))}
              </ul>
              <Link 
                href={`/servicii/${serviceData.slug}/${subService.slug}`}
                className="inline-block px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
              >
                Vezi detalii
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
