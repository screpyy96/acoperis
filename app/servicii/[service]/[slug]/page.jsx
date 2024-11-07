import { roofingServices } from '@/data/services'
import { serviceLocations } from '@/data/locations'
import Link from 'next/link'

export async function generateStaticParams() {
  const paths = []
  
  // Adăugăm toate subserviciile
  Object.values(roofingServices).forEach(category => {
    category.services.forEach(service => {
      paths.push({
        service: category.slug,
        slug: service.slug
      })
    })
  })
  
  // Adăugăm toate orașele
  Object.values(roofingServices).forEach(service => {
    Object.values(serviceLocations).forEach(location => {
      paths.push({ 
        service: service.slug,
        slug: location.slug 
      })
    })
  })
  
  return paths
}

export default async function ServiceDetailPage({ params }) {
  const { service, slug } = await params
  
  // Găsim categoria de serviciu
  const categoryData = Object.values(roofingServices).find(
    cat => cat.slug === service
  )

  if (!categoryData) {
    return <div>Serviciul nu a fost găsit</div>
  }

  // Verificăm dacă slug-ul este un subserviciu
  const subServiceData = categoryData.services.find(
    s => s.slug === slug
  )

  // Verificăm dacă slug-ul este un oraș
  const locationData = Object.values(serviceLocations).find(
    l => l.slug === slug
  )

  // Dacă am găsit un subserviciu
  if (subServiceData) {
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
                Completează formularul pentru o estimare gratuită pentru {subServiceData.name}
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

  // Dacă am găsit o locație
  if (locationData) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          {categoryData.title} în {locationData.name}
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="prose max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Servicii Disponibile
              </h2>
              {categoryData.services.map((subService) => (
                <div key={subService.slug} className="mb-8">
                  <h3 className="text-xl font-semibold mb-3">{subService.name}</h3>
                  <p className="text-gray-600 mb-4">{subService.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Zone de Acoperire în {locationData.name}
              </h2>
              <ul className="space-y-2">
                {locationData.regions.map((region) => (
                  <li key={region.slug} className="text-gray-600">
                    • {region.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return <div>Pagina nu a fost găsită</div>
}
