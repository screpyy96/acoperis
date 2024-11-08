import Link from 'next/link'

// Înlocuim importurile cu componente SVG locale
const HomeIcon = () => (
  <svg 
    className="w-6 h-6" 
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
    />
  </svg>
)

const WrenchIcon = () => (
  <svg 
    className="w-6 h-6" 
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
    />
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
)

const ShieldCheckIcon = () => (
  <svg 
    className="w-6 h-6" 
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    />
  </svg>
)

const SwatchIcon = () => (
  <svg 
    className="w-6 h-6" 
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
    />
  </svg>
)

const services = [
  {
    id: 1,
    title: "Montaj Acoperișuri",
    description: "Servicii profesionale de montaj acoperișuri noi, cu materiale premium și tehnologii moderne. Oferim soluții complete, de la structură până la învelitoare.",
    icon: HomeIcon,
    link: "/servicii/montaj-acoperis"
  },
  {
    id: 2,
    title: "Reparații și Întreținere",
    description: "Reparăm și întreținem orice tip de acoperiș, de la infiltrații și țigle deteriorate până la probleme structurale complexe. Intervenim rapid pentru a preveni pagubele.",
    icon: WrenchIcon,
    link: "/servicii/reparatii-acoperis"
  },
  {
    id: 3,
    title: "Izolații Termice",
    description: "Izolăm profesional acoperișul casei dumneavoastră, reducând costurile de încălzire și răcire. Folosim materiale de înaltă calitate pentru eficiență maximă.",
    icon: ShieldCheckIcon,
    link: "/servicii/hidroizolatii"
  },
  {
    id: 4,
    title: "Sisteme Pluviale",
    description: "Instalăm și întreținem sisteme complete de colectare a apei pluviale. Protejați-vă casa cu jgheaburi și burlane de calitate superioară.",
    icon: SwatchIcon,
    link: "/servicii/sisteme-pluviale"
  }
]

export default function ServicesGrid() {
  return (
    <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-40 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] bg-repeat opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="flex mb-4 items-center">
          <div className="w-2 h-2 rounded-full bg-teal-400"></div>
          <span className="inline-block ml-2 text-sm font-medium text-teal-300">
            Servicii Specializate
          </span>
        </div>

        <div className="border-t border-gray-700 pt-16">
          <h2 id="services-title" className="font-heading text-4xl sm:text-5xl lg:text-6xl mb-12 text-white font-bold">
            Servicii Complete pentru{' '}
            <span className="text-teal-400">Acoperișul Tău</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mb-20">
            De la montaj și reparații, până la izolații și sisteme pluviale, 
            suntem aici să oferim soluții profesionale pentru orice necesitate.
          </p>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div key={service.id} className="group">
                <div className="flex flex-col h-full p-8 bg-gray-800/50 backdrop-blur-sm rounded-2xl hover:bg-gray-700/50 transition-all duration-300">
                  {/* Icon */}
                  <div className="w-14 h-14 p-3 bg-teal-500/10 rounded-xl mb-6">
                    <service.icon className="w-full h-full text-teal-400" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-medium mb-4 text-white group-hover:text-teal-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="mb-8 text-gray-300 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Link */}
                  <Link 
                    href={service.link}
                    className="inline-flex items-center mt-auto text-lg font-medium text-teal-400 hover:text-teal-300 transition-colors"
                  >
                    Află mai multe
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
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 