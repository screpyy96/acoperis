'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function ServicesSlider() {
  const [activeSlide, setActiveSlide] = useState(1)
  const slideCount = 3

  const services = [
    {
      id: 1,
      title: "Montaj Acoperișuri",
      description: "Servicii complete de montaj acoperișuri noi, cu materiale premium și garanție extinsă. Echipa noastră de experți asigură o execuție impecabilă și durabilă.",
      image: "/images/montaj-acoperis.jpg",
      bgColor: "bg-orange-50",
      textColor: "text-gray-900",
      descColor: "text-gray-700",
      link: "/servicii/montaj-acoperisuri"
    },
    {
      id: 2,
      title: "Reparații Acoperișuri",
      description: "Reparăm orice tip de acoperiș, de la infiltrații și țigle sparte până la probleme structurale. Intervenim rapid pentru a preveni deteriorările majore.",
      image: "/images/reparatii-acoperis.jpg",
      bgColor: "bg-teal-50",
      textColor: "text-gray-900",
      descColor: "text-gray-700",
      link: "/servicii/reparatii-acoperisuri"
    },
    {
      id: 3,
      title: "Mansardări",
      description: "Transformăm spațiul neutilizat al podului într-un spațiu locuibil confortabil. Oferim soluții complete de mansardare cu izolare termică premium.",
      image: "/images/mansardari.jpg",
      bgColor: "bg-lime-50",
      textColor: "text-gray-900",
      descColor: "text-gray-700",
      link: "/servicii/mansardari"
    }
  ]

  return (
    <section className="pt-12 lg:pt-24">
      <div className="container mx-auto px-4">
        <div className="flex mb-4 items-center">
          <div className="w-2 h-2 rounded-full bg-teal-400"></div>
          <span className="inline-block ml-2 text-sm font-medium text-teal-300">
            Serviciile Populare
          </span>
        </div>
        <div className="border-t border-gray-700 pt-16">
          <div>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl mb-6 text-white font-bold">
              Soluții Complete pentru {' '}
              <span className="text-teal-400">Acoperișul Tău</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl">
              Oferim servicii profesionale pentru orice tip de acoperiș, 
              cu focus pe calitate și durabilitate.
            </p>
          </div>
        </div>
      </div>

      <div className="px-4 pb-4 mt-12 md:mt-24">
        <div className={`py-12 md:py-16 ${services[activeSlide-1].bgColor} rounded-3xl transition-colors duration-500 shadow-lg`}>
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap -mx-4">
              {/* Text Content */}
              <div className="w-full md:w-1/2 px-4 mb-16 md:mb-0">
                <div className="max-w-lg lg:pt-14">
                  <h3 className={`font-heading text-4xl sm:text-5xl mb-6 ${services[activeSlide-1].textColor} font-bold leading-tight`}>
                    {services[activeSlide-1].title}
                  </h3>
                  <p className={`text-xl ${services[activeSlide-1].descColor} mb-10 leading-relaxed`}>
                    {services[activeSlide-1].description}
                  </p>
                  <Link 
                    href={services[activeSlide-1].link}
                    className="inline-flex mb-20 py-4 px-8 items-center justify-center text-lg font-medium text-white bg-teal-600 hover:bg-teal-700 rounded-full transition duration-300 shadow-md"
                  >
                    Află mai multe
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                    </svg>
                  </Link>
                  
                  {/* Navigation Buttons */}
                  <div className="flex items-center space-x-6">
                    <button 
                      onClick={() => setActiveSlide(activeSlide > 1 ? activeSlide - 1 : slideCount)}
                      className="p-2 text-gray-600 hover:text-teal-600 transition-colors"
                      aria-label="Previous slide"
                    >
                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24.4001 16H7.6001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M16.0001 24.4L7.6001 16L16.0001 7.59998" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                    <div className="flex space-x-3">
                      {[1, 2, 3].map((dot) => (
                        <button
                          key={dot}
                          onClick={() => setActiveSlide(dot)}
                          className={`w-3 h-3 rounded-full transition-colors ${
                            activeSlide === dot ? 'bg-teal-600' : 'bg-gray-300 hover:bg-gray-400'
                          }`}
                          aria-label={`Go to slide ${dot}`}
                        />
                      ))}
                    </div>
                    <button 
                      onClick={() => setActiveSlide(activeSlide < slideCount ? activeSlide + 1 : 1)}
                      className="p-2 text-gray-600 hover:text-teal-600 transition-colors"
                      aria-label="Next slide"
                    >
                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.6001 16H24.4001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M16 7.59998L24.4 16L16 24.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Image Slider */}
              <div className="w-full md:w-1/2 px-4">
                <div className="relative h-[400px] md:h-[600px] rounded-2xl overflow-hidden">
                  <div 
                    className="absolute inset-0 w-[300%] flex transition-transform duration-500"
                    style={{ transform: `translateX(-${(activeSlide - 1) * 33.333}%)` }}
                  >
                    {services.map((service) => (
                      <div key={service.id} className="relative w-1/3 h-full">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                          priority
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 