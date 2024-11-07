import PortfolioGrid from '../../src/components/PortFolioGrid'

export const metadata = {
  title: 'Portofoliu Lucrări Acoperișuri | Numele Companiei',
  description: 'Vezi galeria noastră cu proiecte finalizate de montaj, reparații și renovări acoperișuri. Peste 500 de clienți mulțumiți în toată România.',
}

export default function PortfolioPage() {
  return (
    <main>
      <PortfolioGrid />
    </main>
  )
}