"use client"

import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-gray-800">
      <header className="bg-teal-600 text-white py-4 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-2xl font-bold">
            <Link href="/">Servicii Acoperiș</Link>
          </h1>
          <nav>
            <Link href="/servicii" className="ml-4 hover:underline">
              Servicii
            </Link>
            <Link href="/orase" className="ml-4 hover:underline">
              Orașe
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {children}
        </div>
      </main>

      <footer className="bg-teal-600 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2023 Servicii Acoperiș. Toate drepturile rezervate.</p>
        </div>
      </footer>
    </div>
  )
}
