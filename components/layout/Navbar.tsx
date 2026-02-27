'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const navigation = [
  { name: 'Home', href: '/' },
  { 
    name: 'Products', 
    href: '/products',
    dropdown: [
      { name: 'All Products', href: '/products' },
      { name: 'HD Cameras', href: '/products?category=hd' },
      { name: 'IP Cameras', href: '/products?category=ip' },
      { name: 'WiFi & 4G Cameras', href: '/products?category=wifi' },
    ]
  },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Contact Us', href: '/contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false)
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-4 transition-all">
      <div className={`max-w-7xl mx-auto ${
        isScrolled
          ? 'backdrop-blur-2xl shadow-lg py-3'
          : 'backdrop-blur-xl py-4'
      } rounded-2xl sm:rounded-3xl border border-yellow-100 bg-white/95 glass-nav transition-all`}>
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16 sm:h-18">
          <Link href="/" className="flex items-center group">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 group-hover:scale-110 transition-transform">
              <Image
                src="/hsologo_1.png"
                alt="HSO CCTV Logo"
                fill
                className="object-contain"
                priority
                unoptimized
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <div 
                key={item.name} 
                className="relative group"
              >
                {item.dropdown ? (
                  <>
                    <button
                      type="button"
                      onMouseEnter={() => setIsProductsDropdownOpen(true)}
                      onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
                      className={`px-4 py-2 rounded-xl text-sm font-semibold transition-colors flex items-center ${
                        pathname?.startsWith(item.href)
                          ? 'bg-premiummyello text-jet-black shadow-glow-yellow'
                          : 'text-black/70 hover:text-premiummyello'
                      }`}
                    >
                      {item.name}
                      <span className="material-symbols-outlined text-sm ml-1 inline-block align-middle">expand_more</span>
                    </button>
                    {isProductsDropdownOpen && (
                      <div 
                        className="absolute top-full left-0 mt-1 w-56 bg-white backdrop-blur-md rounded-xl border border-yellow-100 shadow-xl py-2 z-50"
                        onMouseEnter={() => setIsProductsDropdownOpen(true)}
                        onMouseLeave={() => setIsProductsDropdownOpen(false)}
                      >
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            onClick={() => setIsProductsDropdownOpen(false)}
                            className="block px-4 py-2 text-sm text-black/70 hover:bg-yellow-50 hover:text-premiummyello transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={`px-4 py-2 rounded-xl text-sm font-semibold transition-colors ${
                      pathname === item.href
                        ? 'bg-premiummyello text-jet-black shadow-glow-yellow'
                        : 'text-black/70 hover:text-premiummyello'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Search Bar & Actions */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Search Icon */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-black/70 hover:text-premiummyello transition-colors"
            >
              <span className="material-symbols-outlined">search</span>
            </button>
            
            {/* Contact Button */}
            <Link
              href="/contact"
              className="px-4 py-2 bg-premiummyello text-jet-black rounded-xl text-sm font-bold hover:bg-premiummyello-light shadow-glow-yellow hover:scale-105 transition-all"
            >
              Contact Us
            </Link>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-black/70 hover:bg-yellow-50 transition-colors"
          >
            <span className="material-symbols-outlined text-2xl">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>

        {/* Search Bar (Expanded) */}
        {isSearchOpen && (
          <div className="px-4 py-3 border-t border-yellow-100">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                placeholder="Search products, models..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 px-4 py-2 bg-white border border-yellow-200 rounded-xl text-black placeholder-black/50 focus:outline-none focus:border-premiummyello"
              />
              <button
                onClick={() => {
                  // Handle search
                  setIsSearchOpen(false)
                }}
                className="px-4 py-2 bg-premiummyello text-jet-black rounded-xl font-semibold hover:bg-premiummyello-light"
              >
                Search
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden mt-2 mx-4 sm:mx-6 bg-white backdrop-blur-md rounded-2xl border border-yellow-100 shadow-xl overflow-hidden">
          <div className="p-4 space-y-1">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.dropdown ? (
                  <>
                    <button
                      type="button"
                      onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
                      className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold active:scale-95 flex items-center justify-between ${
                        pathname?.startsWith(item.href)
                          ? 'bg-premiummyello text-jet-black shadow-glow-yellow'
                          : 'text-black/70 hover:text-premiummyello hover:bg-yellow-50'
                      }`}
                    >
                      {item.name}
                      <span className={`material-symbols-outlined text-sm transition-transform ${isMobileProductsOpen ? 'rotate-180' : ''}`}>
                        expand_more
                      </span>
                    </button>
                    {isMobileProductsOpen && (
                      <div className="ml-4 mt-1 space-y-1">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            onClick={() => {
                              setIsMobileMenuOpen(false)
                              setIsMobileProductsOpen(false)
                            }}
                            className="block px-4 py-2 text-xs text-black/60 hover:text-premiummyello rounded-lg transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-xl text-sm font-semibold active:scale-95 ${
                      pathname === item.href
                        ? 'bg-premiummyello text-jet-black shadow-glow-yellow'
                        : 'text-black/70 hover:text-premiummyello hover:bg-yellow-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-3 mt-3 border-t border-yellow-100 space-y-2">
              <Link
                href="/contact"
                className="block px-4 py-3 bg-premiummyello text-jet-black rounded-xl text-sm font-bold text-center hover:bg-premiummyello-light active:scale-95 shadow-glow-yellow"
              >
                Contact Us
              </Link>
              <a
                href="tel:+918282824138"
                className="block px-4 py-3 text-black/70 rounded-xl text-sm font-semibold text-center hover:bg-yellow-50 active:scale-95"
              >
                📞 Call Now
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
