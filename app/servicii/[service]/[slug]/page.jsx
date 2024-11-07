"use client"

import { useParams } from 'next/navigation'
import { roofingServices } from '@/data/services'
import Link from 'next/link'

export default function ServiceDetailPage() {
  const params = useParams()
  const { service, slug } = params

  // Find the correct service category
  const serviceKey = Object.keys(roofingServices).find(
    key => roofingServices[key].slug === service
  )

  if (!serviceKey) {
    return <div>Serviciul nu a fost găsit</div>
  }

  const categoryData = roofingServices[serviceKey]

  // Find the correct subservice
  const subServiceData = categoryData.services.find(
    subService => subService.slug === slug
  )

  if (!subServiceData) {
    return <div>Subserviciul nu a fost găsit</div>
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        {subServiceData.name}
      </h1>
      <p className="text-gray-600 mb-6">
        {subServiceData.description}
      </p>
      <ul className="space-y-3">
        {subServiceData.benefits.map((benefit, index) => (
          <li key={index} className="flex items-center text-gray-600">
            <span className="text-teal-500 mr-2">✓</span>
            {benefit}
          </li>
        ))}
      </ul>
      <img src={subServiceData.image} alt={subServiceData.name} className="mt-6 rounded-lg shadow-lg" />
    </div>
  )
} 