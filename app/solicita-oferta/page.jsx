'use client'

import { useState } from 'react'
import Layout from '@/components/Layout'
import { motion, AnimatePresence } from 'framer-motion'

export default function RequestQuotePage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    location: '',
    message: ''
  })

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  })

  const steps = [
    {
      id: 1,
      title: "Ce serviciu vă interesează?",
      fields: ["service"]
    },
    {
      id: 2,
      title: "Unde doriți să efectuăm lucrarea?",
      fields: ["location"]
    },
    {
      id: 3,
      title: "Datele dumneavoastră de contact",
      fields: ["name", "phone", "email"]
    },
    {
      id: 4,
      title: "Detalii suplimentare",
      fields: ["message"]
    }
  ]

  const handleNext = () => {
    if (validateStep()) {
      setStep(prev => prev + 1)
    }
  }

  const handlePrev = () => {
    setStep(prev => prev - 1)
  }

  const validateStep = () => {
    const currentStep = steps.find(s => s.id === step)
    return currentStep.fields.every(field => {
      if (field === 'email') return true // email-ul este opțional
      return formData[field]?.trim() !== ''
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ submitting: true, submitted: false, error: null })

    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      const data = await response.json()

      if (data.success) {
        setStatus({
          submitting: false,
          submitted: true,
          error: null
        })
      } else {
        throw new Error(data.error || 'A apărut o eroare')
      }
    } catch (error) {
      setStatus({
        submitting: false,
        submitted: false,
        error: error.message
      })
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900">
                Ce serviciu vă interesează?
              </h2>
              <p className="text-gray-600 mt-2">
                Selectați serviciul dorit pentru a primi o ofertă personalizată
              </p>
            </div>
            <div className="grid gap-4">
              {['Montaj Acoperiș', 'Reparații Acoperiș', 'Mansardări'].map((service) => (
                <button
                  key={service}
                  type="button"
                  onClick={() => {
                    setFormData(prev => ({ ...prev, service }))
                    handleNext()
                  }}
                  className={`p-6 text-left rounded-lg border-2 transition-all ${
                    formData.service === service
                      ? 'border-teal-600 bg-teal-50'
                      : 'border-gray-200 hover:border-teal-600'
                  }`}
                >
                  <div className="flex items-center">
                    <div className={`w-5 h-5 rounded-full border-2 mr-4 ${
                      formData.service === service
                        ? 'border-teal-600 bg-teal-600'
                        : 'border-gray-300'
                    }`} />
                    <span className="text-lg font-medium">{service}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900">
                Unde doriți să efectuăm lucrarea?
              </h2>
              <p className="text-gray-600 mt-2">
                Introduceți localitatea și zona pentru o estimare precisă
              </p>
            </div>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Ex: București, Sector 1"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
          </div>
        )

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900">
                Datele dumneavoastră de contact
              </h2>
              <p className="text-gray-600 mt-2">
                Vă vom contacta pentru a discuta detaliile proiectului
              </p>
            </div>
            <div className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Nume complet"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Număr de telefon"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email (opțional)"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </div>
          </div>
        )

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900">
                Detalii suplimentare
              </h2>
              <p className="text-gray-600 mt-2">
                Descrieți pe scurt proiectul dumneavoastră (opțional)
              </p>
            </div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder="Detalii despre proiect..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
          </div>
        )

      default:
        return null
    }
  }

  if (status.submitted) {
    return (
      <Layout>
        <div className="min-h-screen bg-gray-50 py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Mulțumim pentru solicitare!
              </h2>
              <p className="text-gray-600 mb-8">
                Vom analiza cererea dumneavoastră și vă vom contacta în cel mai scurt timp posibil.
              </p>
              <button
                onClick={() => window.location.href = '/'}
                className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors"
              >
                Înapoi la pagina principală
              </button>
            </div>
          </div>
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between mb-2">
                {steps.map((s) => (
                  <div
                    key={s.id}
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      step >= s.id ? 'bg-teal-600 text-white' : 'bg-gray-200'
                    }`}
                  >
                    {s.id}
                  </div>
                ))}
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div
                  className="h-full bg-teal-600 rounded-full transition-all duration-300"
                  style={{ width: `${((step - 1) / (steps.length - 1)) * 100}%` }}
                />
              </div>
            </div>

            {/* Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                >
                  {renderStep()}
                </motion.div>
              </AnimatePresence>

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8">
                {step > 1 && (
                  <button
                    onClick={handlePrev}
                    className="px-6 py-3 text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    Înapoi
                  </button>
                )}
                {step < steps.length ? (
                  <button
                    onClick={handleNext}
                    disabled={!validateStep()}
                    className={`ml-auto px-6 py-3 rounded-lg transition-colors ${
                      validateStep()
                        ? 'bg-teal-600 text-white hover:bg-teal-700'
                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    Continuă
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    disabled={status.submitting}
                    className="ml-auto px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors disabled:bg-gray-400"
                  >
                    {status.submitting ? 'Se trimite...' : 'Trimite solicitarea'}
                  </button>
                )}
              </div>

              {status.error && (
                <div className="mt-4 p-4 bg-red-50 text-red-600 rounded-lg">
                  {status.error}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
} 