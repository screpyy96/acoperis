import "./globals.css";
import Navbar from "../src/components/Navbar";
import WhatsAppButton from "../src/components/WhatsAppButton";
import Footer from "../src/components/Footer";

export const metadata = {
  metadataBase: new URL('https://acoperis.vercel.app'),
  title: {
    default: 'Reparatii Acoperisuri - Experți în Acoperișuri',
    template: '%s | Reparatii Acoperisuri'
  },
  description: 'Servicii profesionale de montaj și reparații acoperișuri. Expertiză, calitate și garanție pentru acoperișul casei tale.',
  keywords: ['acoperis', 'montaj acoperis', 'reparatii acoperis', 'mansardari', 'sisteme pluviale'],
  authors: [{ name: 'Reparatii Acoperisuri' }],
  creator: 'Reparatii Acoperisuri',
  publisher: 'Reparatii Acoperisuri',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
