import { roofingServices } from '@/data/services'
import { serviceLocations } from '@/data/locations'
import Link from 'next/link'

export async function generateStaticParams() {
  const paths = []
  Object.values(roofingServices).forEach(category => {
    category.services.forEach(service => {
      paths.push({
        service: category.slug,
        subservice: service.slug
      })
    })
  })
  return paths
}

export default function SubServicePage({ params }) {
  const { service, subservice } = params

  // Găsim categoria principală și subserviciul
  const categoryData = Object.values(roofingServices).find(
    cat => cat.slug === service
  )
  const subServiceData = categoryData?.services.find(
    s => s.slug === subservice
  )

  if (!categoryData || !subServiceData) {
    return <div>Serviciul nu a fost găsit</div>
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        {subServiceData.name}
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Descriere Serviciu
            </h2>
            <p className="text-gray-600 mb-6">
              {subServiceData.description}
            </p>
            
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Beneficii
            </h3>
            <ul className="space-y-3">
              {subServiceData.benefits.map((benefit, index) => (
                <li key={index} className="flex items-center text-gray-600">
                  <span className="text-teal-500 mr-2">✓</span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Disponibil în
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {Object.values(serviceLocations).map((location) => (
                <Link
                  key={location.slug}
                  href={`/servicii/${service}/${location.slug}`}
                  className="text-teal-600 hover:text-teal-700 font-medium"
                >
                  {location.name} →
                </Link>
              ))}
            </div>
          </div>

          <div className="bg-teal-50 rounded-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Solicită o Ofertă
            </h2>
            <p className="text-gray-600 mb-4">
              Completează formularul pentru o estimare gratuită
            </p>
            <Link 
              href="/solicita-oferta"
              className="inline-block px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
            >
              Solicită Ofertă
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 