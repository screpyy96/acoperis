'use client'

import { useState } from 'react'
import Image from 'next/image'

const projects = [
  {
    id: 1,
    title: "Vila Modernă București",
    category: "montaj",
    description: "Montaj acoperiș țiglă ceramică, 320mp, sistem pluvial complet",
    location: "București, Sector 1",
    year: "2023",
    images: ["/projects/project1-1.jpg", "/projects/project1-2.webp"],
    tags: ["țiglă ceramică", "sistem pluvial", "rezidențial"]
  },
  {
    id: 2,
    title: "Pensiune Turistică Sinaia",
    category: "renovare",
    description: "Renovare completă acoperiș, înlocuire șarpantă, 450mp",
    location: "Sinaia, Prahova",
    year: "2023",
    images: ["/projects/project2-1.jpg", "/projects/project2-2.jpg"],
    tags: ["renovare", "șarpantă", "comercial"]
  },
  {
    id: 3,
    title: "Complex Rezidențial Pipera",
    category: "montaj",
    description: "Montaj acoperișuri pentru 6 vile duplex, 1200mp total",
    location: "Pipera, Ilfov",
    year: "2023",
    images: ["/projects/project3-1.jpg", "/projects/project3-2.jpg"],
    tags: ["țiglă metalică", "proiect mare", "rezidențial"]
  },
  {
    id: 4,
    title: "Casă Tradițională Brașov",
    category: "renovare",
    description: "Restaurare acoperiș casă istorică, 280mp, materiale tradiționale",
    location: "Brașov",
    year: "2023",
    images: ["/projects/project4-1.jpeg", "/projects/project4-2.jpg"],
    tags: ["restaurare", "tradițional", "șindrilă"]
  },
  {
    id: 5,
    title: "Reparații Urgente Ploiești",
    category: "reparatii",
    description: "Intervenție rapidă după furtună, reparații și înlocuiri parțiale",
    location: "Ploiești",
    year: "2023",
    images: ["/projects/project5-1.jpg", "/projects/project5-2.jpg"],
    tags: ["reparații", "urgență", "rezidențial"]
  },
  {
    id: 6,
    title: "Hală Industrială Chitila",
    category: "montaj",
    description: "Montaj acoperiș hală industrială, 2000mp, tablă cutată",
    location: "Chitila, Ilfov",
    year: "2023",
    images: ["/projects/project6-1.jpg", "/projects/project6-2.jpg"],
    tags: ["industrial", "tablă cutată", "proiect mare"]
  },
  {
    id: 7,
    title: "Bloc Rezidențial Militari",
    category: "renovare",
    description: "Renovare acoperiș bloc, hidroizolație și termo-sistem nou",
    location: "București, Sector 6",
    year: "2023",
    images: ["/projects/project7-1.jpg", "/projects/project7-2.jpg"],
    tags: ["bloc", "hidroizolație", "termosistem"]
  },
  {
    id: 8,
    title: "Reparații Mall Băneasa",
    category: "reparatii",
    description: "Reparații și întreținere acoperiș complex comercial",
    location: "București, Sector 1",
    year: "2023",
    images: ["/projects/project8-1.jpg", "/projects/project8-2.jpg"],
    tags: ["comercial", "întreținere", "complex"]
  },
  {
    id: 9,
    title: "Ansamblu Case Corbeanca",
    category: "montaj",
    description: "Montaj acoperișuri pentru 12 case individuale, proiect rezidențial",
    location: "Corbeanca, Ilfov",
    year: "2023",
    images: ["/projects/project9-1.jpeg", "/projects/project9-2.jpg"],
    tags: ["rezidențial", "proiect mare", "țiglă metalică"]
  },
  {
    id: 10,
    title: "Școală Generală Sector 3",
    category: "renovare",
    description: "Renovare completă acoperiș instituție de învățământ",
    location: "București, Sector 3",
    year: "2023",
    images: ["/projects/project10-1.jpg", "/projects/project10-2.jpg"],
    tags: ["instituție", "renovare", "public"]
  },
  {
    id: 11,
    title: "Reparații Hotel Predeal",
    category: "reparatii",
    description: "Reparații și întreținere acoperiș complex hotelier",
    location: "Predeal, Brașov",
    year: "2023",
    images: ["/projects/project11-1.jpg", "/projects/project11-2.jpg"],
    tags: ["hotel", "turistic", "întreținere"]
  },
  {
    id: 12,
    title: "Mansardare Vila Snagov",
    category: "montaj",
    description: "Montaj acoperiș nou cu mansardare, 380mp",
    location: "Snagov, Ilfov",
    year: "2023",
    images: ["/projects/project12-1.jpg", "/projects/project12-2.jpg"],
    tags: ["mansardare", "rezidențial", "premium"]
  }
]

const categories = [
  { id: 'toate', label: 'Toate Proiectele' },
  { id: 'montaj', label: 'Montaj Acoperișuri' },
  { id: 'renovare', label: 'Renovări' },
  { id: 'reparatii', label: 'Reparații' },
]

const INITIAL_PROJECTS_TO_SHOW = 6

export default function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState('toate')
  const [showAll, setShowAll] = useState(false)

  const filteredProjects = activeCategory === 'toate' 
    ? projects 
    : projects.filter(project => project.category === activeCategory)

  const projectsToDisplay = showAll 
    ? filteredProjects 
    : filteredProjects.slice(0, INITIAL_PROJECTS_TO_SHOW)

  const handleCategoryChange = (category) => {
    setActiveCategory(category)
    setShowAll(false)
  }

  return (
    <section className="py-12 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center mb-6">
            <div className="w-2 h-2 rounded-full bg-teal-600 mr-2"></div>
            <span className="text-teal-600 font-semibold uppercase tracking-wider">
              Portofoliu
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
            Proiectele Noastre
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descoperă o selecție din cele mai reprezentative lucrări realizate de echipa noastră
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300
                ${activeCategory === category.id
                  ? 'bg-teal-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsToDisplay.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.images[0]}
                  alt={project.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                
                {/* Project Details */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>{project.location}</span>
                  <span>{project.year}</span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {filteredProjects.length > INITIAL_PROJECTS_TO_SHOW && !showAll && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center px-8 py-4 bg-teal-600 text-white font-medium rounded-full hover:bg-teal-700 transition-colors duration-300 group"
            >
              Vezi mai multe proiecte
              <svg
                className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>
        )}

        {/* Show Less Button - Optional */}
        {showAll && filteredProjects.length > INITIAL_PROJECTS_TO_SHOW && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(false)}
              className="inline-flex items-center px-8 py-4 bg-gray-200 text-gray-700 font-medium rounded-full hover:bg-gray-300 transition-colors duration-300"
            >
              Arată mai puține
              <svg
                className="w-5 h-5 ml-2 transform rotate-90"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 15l7-7 7 7"
                />
              </svg>
            </button>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center mt-20">
          <p className="text-xl text-gray-600 mb-8">
            Vrei să vezi mai multe proiecte sau să discutăm despre proiectul tău?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-teal-600 text-white font-medium rounded-full hover:bg-teal-700 transition-colors duration-300"
          >
            Contactează-ne
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}