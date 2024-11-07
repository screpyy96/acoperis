'use client'

const testimonials = [
  {
    id: 1,
    text: "Am ales această firmă pentru montajul acoperișului casei noastre și suntem foarte mulțumiți. Echipa a fost profesionistă, lucrările au fost executate la timp și calitatea este excelentă!",
    author: "Adrian Popescu",
    role: "Proprietar casă, București",
    rating: 5
  },
  {
    id: 2,
    text: "Recomand cu încredere serviciile lor de reparații acoperișuri. Au intervenit prompt când am avut probleme cu infiltrațiile și au rezolvat totul profesionist.",
    author: "Maria Ionescu",
    role: "Proprietar vilă, Ilfov",
    rating: 5
  },
  {
    id: 3,
    text: "Izolația termică realizată la acoperiș a redus semnificativ costurile de încălzire. Echipa a fost serioasă și a lucrat curat și organizat.",
    author: "George Dumitrescu",
    role: "Administrator pensiune",
    rating: 5
  }
]

const StarRating = ({ rating }) => {
  return (
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-32 bg-gray-900" aria-labelledby="testimonials-title">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="w-2 h-2 rounded-full bg-teal-400"></div>
            <span className="inline-block ml-2 text-sm font-medium text-teal-300">
              Testimoniale Clienți
            </span>
          </div>
          <h2 
            id="testimonials-title" 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Ce Spun <span className="text-teal-400">Clienții Noștri</span>
          </h2>
          <p className="text-xl text-gray-300">
            Părerile clienților noștri sunt cea mai bună dovadă a calității serviciilor oferite
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className={`bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl hover:bg-gray-700/50 transition-all duration-300
                ${index === 0 ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              {/* Rating */}
              <StarRating rating={testimonial.rating} />
              
              {/* Quote */}
              <blockquote>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  "{testimonial.text}"
                </p>
              </blockquote>

              {/* Author */}
              <div className="flex items-center">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold text-white bg-teal-600`}>
                  {testimonial.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="ml-4">
                  <cite className="block text-lg font-medium text-white not-italic">
                    {testimonial.author}
                  </cite>
                  <span className="text-sm text-gray-400">
                    {testimonial.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 