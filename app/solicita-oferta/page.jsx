'use client'

import { useState } from 'react'

export default function RequestQuote() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    projectType: 'montaj',
    message: '',
  })

  const renderStep = () => {
    switch(step) {
      case 1:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Informații Personale
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nume Complet *
                </label>
                <input
                  type="text"
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Telefon *
                </label>
                <input
                  type="tel"
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>
          </div>
        )
      case 2:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Detalii Proiect
            </h2>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Adresa Proiectului *
              </label>
              <input
                type="text"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500"
                value={formData.address}
                onChange={(e) => setFormData({...formData, address: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tip Proiect *
              </label>
              <select
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500"
                value={formData.projectType}
                onChange={(e) => setFormData({...formData, projectType: e.target.value})}
              >
                <option value="montaj">Montaj Acoperiș Nou</option>
                <option value="renovare">Renovare Acoperiș</option>
                <option value="reparatii">Reparații</option>
                <option value="altele">Altele</option>
              </select>
            </div>
          </div>
        )
      case 3:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Descriere Proiect
            </h2>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Detalii Proiect
              </label>
              <textarea
                rows={4}
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                placeholder="Descrieți pe scurt proiectul dvs..."
              />
            </div>
          </div>
        )
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (step < 3) {
      setStep(step + 1)
    } else {
      console.log('Form data:', formData)
      // Aici adaugi logica de trimitere
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        {/* Progress bar cu titlu */}
        <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Solicită Ofertă Gratuită
        </h1>
        
        <div className="mb-8">
          <div className="relative">
            {/* Container pentru linia de progres */}
            <div className="flex items-center justify-between relative">
              {/* Linia de bază (gri) */}
              <div className="absolute left-0 right-0 h-1 top-1/2 -translate-y-1/2 bg-gray-200" />
              
              {/* Linia de progres (verde) */}
              <div 
                className="absolute left-0 h-1 top-1/2 -translate-y-1/2 bg-teal-600 transition-all duration-300" 
                style={{ width: `${((step - 1) / 2) * 100}%` }} 
              />

              {/* Punctele cu numere */}
              <div className="relative flex justify-between w-full">
                {[
                  { num: 1, label: 'Informații Personale' },
                  { num: 2, label: 'Detalii Proiect' },
                  { num: 3, label: 'Descriere' }
                ].map(({ num, label }) => (
                  <div key={num} className="flex flex-col items-center flex-1">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        num <= step 
                          ? 'bg-teal-600 text-white border-4 border-teal-100' 
                          : 'bg-white text-gray-500 border-4 border-gray-200'
                      } transition-colors duration-300`}
                    >
                      {num}
                    </div>
                    <span className={`mt-2 text-sm font-medium ${
                      num <= step ? 'text-teal-600' : 'text-gray-500'
                    }`}>
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Form cu fundal alb și umbră */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <form onSubmit={handleSubmit}>
            {renderStep()}
            <div className="mt-6 flex justify-between">
              {step > 1 && (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Anterior
                </button>
              )}
              <button
                type={step === 3 ? 'submit' : 'button'}
                onClick={step < 3 ? () => setStep(step + 1) : undefined}
                className="px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors ml-auto"
              >
                {step === 3 ? 'Trimite' : 'Următorul'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
} 