import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="relative bg-white border-t border-yellow-100">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-premiummyello to-premiummyello-light rounded-xl flex items-center justify-center shadow-glow-yellow">
                <svg className="w-7 h-7 text-jet-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-black">HSO CCTV</h3>
                <p className="text-sm text-premiummyello">DL Security System</p>
              </div>
            </div>
            <p className="text-black/60 text-sm leading-relaxed">
              Trusted CCTV & Security Solutions for Homes, Shops & Industries. 15+ years of professional expertise.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-black/60 hover:text-premiummyello text-sm transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-black/60 hover:text-premiummyello  text-sm transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-black/60 hover:text-premiummyello  text-sm transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-black/60 hover:text-premiummyello  text-sm transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-black/60 hover:text-premiummyello  text-sm transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3 text-sm text-black/60">
              <li>CCTV Installation</li>
              <li>IP & Analog Surveillance</li>
              <li>AMC & Maintenance</li>
              <li>Network Cabling</li>
              <li>Remote Viewing Setup</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-premiummyello mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <a href="tel:+918282824138" className="text-black/60 hover:text-premiummyello  text-sm transition-colors">
                    +91 82828 24138
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-premiummyello mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <a href="mailto:dlcctv@gmail.com" className="text-black/60 hover:text-premiummyello  text-sm transition-colors">
                    dlcctv@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-premiummyello mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div className="text-black/60 text-sm">
                  Madanapalli / Rayachoty<br />
                  Andhra Pradesh, India
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-yellow-100 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-black/60 text-sm">
              © {new Date().getFullYear()} DL Enterprises. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm text-black/60">
              <span className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-premiummyello" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Authorized HSO Partner</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
