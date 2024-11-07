'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

// Înlocuim importurile de la heroicons cu componente SVG locale
const PhoneIcon = () => (
  <svg 
    className="w-5 h-5" 
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  </svg>
)

const EnvelopeIcon = () => (
  <svg 
    className="w-5 h-5" 
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
)

export default function Navbar() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  // Închide meniul mobil când se schimbă path-ul
  useEffect(() => {
    setMobileNavOpen(false)
  }, [pathname])

  // Dezactivează scroll-ul când meniul mobil este deschis
  useEffect(() => {
    if (mobileNavOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [mobileNavOpen])

  // Handle navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: 'Acasă', href: '/' },
    { name: 'Despre Noi', href: '/despre' },
    { name: 'Servicii', href: '/servicii' },
    { name: 'Portofoliu', href: '/portofoliu' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className="relative z-50">
      {/* Top Info Bar - Vizibil doar pe desktop */}
      <div className="bg-teal-950 text-white py-2 hidden lg:block">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <a href="tel:+40 727 524 831" className="flex items-center hover:text-lime-500 text-sm">
              <PhoneIcon />
              <span>+40 727 524 831</span>
            </a>
            <a href="mailto:contact@acoperisuri.ro" className="flex items-center hover:text-lime-500 text-sm">
              <EnvelopeIcon />
              <span>contact@acoperisuri.ro</span>
            </a>
          </div>
          <div className="text-sm">
            <span>Program: Luni - Vineri 08:00 - 17:00</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className={`sticky top-0 w-full ${
        scrolled ? 'bg-teal-900 shadow-lg' : 'bg-teal-900/95'
      } transition-all duration-300`}>
        <nav className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="relative z-10">
              <Image 
                src="/logo.svg" 
                alt="Logo" 
                width={80}
                height={80}
                className="h-12 w-auto lg:h-14"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-white hover:text-lime-500 font-medium transition-colors
                    ${pathname === item.href ? 'text-lime-500' : ''}`}
                >
                  {item.name}
                </Link>
              ))}
              <Link 
                href="/contact"
                className="inline-flex px-4 py-2 text-sm font-medium text-white border-2 border-lime-500 hover:bg-lime-500 rounded-full transition-all duration-300"
              >
                Solicită Ofertă
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
              className="lg:hidden relative z-10 p-2 text-white hover:text-lime-500"
              aria-label={mobileNavOpen ? 'Închide meniul' : 'Deschide meniul'}
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <span className={`absolute h-0.5 w-5 bg-current transform transition duration-300 ease-in-out ${mobileNavOpen ? 'rotate-45' : '-translate-y-1.5'}`} />
                <span className={`absolute h-0.5 w-5 bg-current transition-opacity duration-300 ${mobileNavOpen ? 'opacity-0' : 'opacity-100'}`} />
                <span className={`absolute h-0.5 w-5 bg-current transform transition duration-300 ease-in-out ${mobileNavOpen ? '-rotate-45' : 'translate-y-1.5'}`} />
              </div>
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div
          className={`fixed inset-0 bg-teal-900 z-0 transform transition-transform duration-300 lg:hidden ${
            mobileNavOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full pt-24 px-4 pb-6">
            <div className="flex-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block py-3 text-lg text-white hover:text-lime-500 font-medium transition-colors
                    ${pathname === item.href ? 'text-lime-500' : ''}`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            
            {/* Mobile Contact Info */}
            <div className="space-y-4 border-t border-teal-800 pt-6">
              <a href="tel:+40722222222" className="flex items-center text-white hover:text-lime-500">
                <PhoneIcon />
                <span>+40 722 222 222</span>
              </a>
              <a href="mailto:contact@acoperisuri.ro" className="flex items-center text-white hover:text-lime-500">
                <EnvelopeIcon />
                <span>contact@acoperisuri.ro</span>
              </a>
              <Link 
                href="/contact"
                className="block w-full py-3 text-center text-white bg-lime-500 hover:bg-lime-600 rounded-full transition-colors mt-6"
              >
                Solicită Ofertă Gratuită
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
