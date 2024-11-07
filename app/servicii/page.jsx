import { roofingServices } from '@/data/services'
import Link from 'next/link'

export default async function ServicesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        Servicii Acoperiș
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.values(roofingServices).map((category) => (
          <div key={category.slug} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {category.title}
              </h2>
              <div className="space-y-2 mb-6">
                {category.services.map((service) => (
                  <p key={service.slug} className="flex items-center text-gray-600">
                    <span className="text-teal-500 mr-2">•</span>
                    {service.name}
                  </p>
                ))}
              </div>
              <Link 
                href={`/servicii/${category.slug}`}
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
