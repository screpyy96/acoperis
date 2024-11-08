import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <section className="p-4">
      <div className="relative py-16 px-4 sm:px-8 rounded-3xl overflow-hidden bg-gradient-to-br from-gray-900 via-teal-900 to-gray-900">
        {/* Overlay cu efect de gradient și opacitate */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50"></div>

        <div className="container px-4 mx-auto relative">
          <div className="flex flex-wrap mb-12 md:mb-24 xl:mb-40 -mx-4">
            {/* Logo */}
            <div className="w-full lg:w-2/12 xl:w-3/12 px-4 mb-16 lg:mb-0">
              <Link href="/" className="inline-block mb-4">
                <Image 
                  src="/logo.svg" 
                  alt="AcoperisuriPro Logo" 
                  width={50} 
                  height={50}
                />
              </Link>
              <p className="text-gray-300 text-sm">
                Experți în acoperișuri din 2010. 
                Calitate și profesionalism pentru casa ta.
              </p>
            </div>

            {/* Links */}
            <div className="w-full md:w-7/12 lg:w-7/12 xl:w-6/12 px-4 mb-16 lg:mb-0">
              <div className="flex flex-wrap -mx-4">
                <div className="w-1/2 xs:w-1/3 px-4 mb-8 xs:mb-0">
                  <h3 className="mb-6 text-white font-bold">Servicii</h3>
                  <ul className="space-y-4">
                    <li>
                      <Link href="/servicii/montaj-acoperis" 
                            className="inline-block text-gray-300 hover:text-white transition-colors duration-200">
                        Montaj Acoperiș
                      </Link>
                    </li>
                    <li>
                      <Link href="/servicii/reparatii-acoperis" 
                            className="inline-block text-gray-300 hover:text-white transition-colors duration-200">
                        Reparații Acoperiș
                      </Link>
                    </li>
                    <li>
                      <Link href="/servicii/hidroizolatii" 
                            className="inline-block text-gray-300 hover:text-white transition-colors duration-200">
                        Hidroizolații
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="w-1/2 xs:w-1/3 px-4 mb-8 xs:mb-0">
                  <h3 className="mb-6 text-white font-bold">Informații</h3>
                  <ul className="space-y-4">
                    <li>
                      <Link href="/despre-noi" 
                            className="inline-block text-gray-300 hover:text-white transition-colors duration-200">
                        Despre Noi
                      </Link>
                    </li>
                    <li>
                      <Link href="/portofoliu" 
                            className="inline-block text-gray-300 hover:text-white transition-colors duration-200">
                        Portofoliu
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog" 
                            className="inline-block text-gray-300 hover:text-white transition-colors duration-200">
                        Blog
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="w-full xs:w-1/3 px-4">
                  <h3 className="mb-6 text-white font-bold">Contact</h3>
                  <ul className="space-y-4">
                    <li>
                      <Link href="/contact" 
                            className="inline-block text-gray-300 hover:text-white transition-colors duration-200">
                        Contact
                      </Link>
                    </li>
                    <li>
                      <a href="tel:+40 727 524 831" 
                         className="inline-block text-gray-300 hover:text-white transition-colors duration-200">
                        +40 727 524 831
                      </a>
                    </li>
                    <li>
                      <a href="mailto:contact@example.com" 
                         className="inline-block text-gray-300 hover:text-white transition-colors duration-200">
                        contact@acoperisuri.ro
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="w-full md:w-5/12 lg:w-3/12 xl:w-3/12 px-4">
              <div className="flex flex-col w-full">
                <div>
                  <a href="#" className="group flex p-1 max-w-xs mb-4 items-center rounded-full bg-white bg-opacity-20">
                    <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 text-teal-900 group-hover:text-teal-400 bg-teal-400 group-hover:bg-black rounded-full transition duration-200">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.8577 23.9999V13.0532H17.5306L18.0816 8.78575H13.8577V6.06164C13.8577 4.82652 14.1993 3.98479 15.9725 3.98479L18.2303 3.98387V0.166954C17.8398 0.116212 16.4995 -0.00012207 14.9395 -0.00012207C11.682 -0.00012207 9.45185 1.98824 9.45185 5.639V8.78575H5.76782V13.0532H9.45185V23.9999H13.8577Z" fill="currentColor"/>
                      </svg>
                    </div>
                    <span className="ml-4 font-medium text-white">Facebook</span>
                  </a>
                  <a href="#" className="group flex p-1 max-w-xs mb-4 items-center rounded-full bg-white bg-opacity-20">
                    <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 text-teal-900 group-hover:text-teal-400 bg-teal-400 group-hover:bg-black rounded-full transition duration-200">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2C22 17.7383 21.3889 19.2135 20.3012 20.3012C19.2135 21.3889 17.7383 22 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8C2 6.26174 2.61107 4.78649 3.69878 3.69878C4.78649 2.61107 6.26174 2 7.8 2Z" fill="currentColor"/>
                      </svg>
                    </div>
                    <span className="ml-4 font-medium text-white">Instagram</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="md:text-right">
            <p className="text-sm text-white opacity-80">
              © {new Date().getFullYear()} AcoperisuriPro. Toate drepturile rezervate.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
