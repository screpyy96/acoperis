
import "./globals.css";
import Navbar from "../src/components/Navbar";
import WhatsAppButton from "../src/components/WhatsAppButton";
import Footer from "../src/components/Footer";

export const metadata = {
  title: "Acoperiș de la A la Z",
  description: "Oferim servicii complete de acoperiș în toată România. Expertiză în montaj, reparații și întreținere acoperișuri. Calitate garantată și prețuri competitive.",
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
