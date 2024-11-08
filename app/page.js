
import Hero from '../src/components/Hero'
import ServicesSlider from '../src/components/ServicesSlider'
import ServicesGrid from '../src/components/ServicesGrid'
import Testimonials from '../src/components/Testimonials'
import FAQ from '../src/components/FAQ'

export const metadata = {
  title: 'Servicii Reparatii si Montaj Acoperisuri',
  description: 'Oferim servicii complete de acoperiș în toată România. Expertiză în montaj, reparații și întreținere acoperișuri. Calitate garantată și prețuri competitive.',
  keywords: 'acoperis, servicii acoperis, reparatii acoperis, montaj acoperis, acoperisuri romania',
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ServicesSlider />
      <ServicesGrid />
      <Testimonials />
      <FAQ />
    </main>
  )
}
