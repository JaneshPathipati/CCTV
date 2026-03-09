'use client'

import Link from 'next/link'

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-10 text-black">
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-4">
              About <span className="text-black">HSO CCTV</span>
            </h1>
            <p className="text-lg sm:text-xl text-black/70 leading-relaxed">
              Your trusted partner for professional CCTV and security solutions with 15+ years of excellence
            </p>
          </div>
        </div>
      </section>

      {/* Our Story + Key Points */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            {/* Story card */}
            <div className="bg-gradient-to-br from-premiummyello/20 to-premiummyello/5 border border-premiummyello/30 rounded-2xl p-6 sm:p-10 shadow-lg">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-black">Our Story</h2>
              <p className="text-base sm:text-lg leading-relaxed text-black/80 mb-4">
                DL CCTV, a division of DL Security System, has been at the forefront of security solutions for 15+ years. As an authorized HSO CCTV partner, we combine international expertise with local trust.
              </p>
              <p className="text-base sm:text-lg leading-relaxed text-black/80">
                Our journey began with a vision to make professional-grade security accessible to homes, shops, and industries across Madanapalli, Rayachoty, and beyond.
              </p>
            </div>

            {/* Key highlights */}
            <div className="space-y-5">
              {[
                {
                  title: 'Authorized HSO Partner',
                  desc: 'Official partnership with HSO CCTV for authentic products and warranty support',
                  icon: (
                    <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  ),
                },
                {
                  title: 'International Experience',
                  desc: 'Successfully completed projects in GCC (Kuwait) and across India',
                  icon: (
                    <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                },
                {
                  title: 'Quality Assurance',
                  desc: 'Own brand manufacturing ensures premium quality at competitive prices',
                  icon: (
                    <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  ),
                },
                {
                  title: 'Expert Team',
                  desc: 'Skilled engineers with deep knowledge of IP, analog, and network systems',
                  icon: (
                    <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  ),
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-11 h-11 bg-premiummyello/20 rounded-lg flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-black mb-1">{item.title}</h3>
                    <p className="text-sm text-black/70">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-black mb-3">
              Experience Highlights
            </h2>
            <p className="text-base sm:text-xl text-black/70 max-w-2xl mx-auto">
              Proven track record of excellence in security solutions
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            {[
              { number: '15+', label: 'Years', description: 'Industry Experience' },
              { number: '1000+', label: 'Cameras', description: 'Successfully Installed' },
              { number: '500+', label: 'Projects', description: 'Completed Successfully' },
              { number: '24/7', label: 'Support', description: 'Technical Assistance' },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-5 sm:p-8 text-center border border-yellow-100 shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="text-3xl sm:text-4xl font-bold text-black mb-1">{stat.number}</div>
                <div className="text-sm sm:text-lg font-semibold text-black mb-1">{stat.label}</div>
                <div className="text-xs sm:text-sm text-black/60">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-black mb-3">
              Our Expertise
            </h2>
            <p className="text-base sm:text-xl text-black/70 max-w-2xl mx-auto">
              Comprehensive knowledge across all security technologies
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: 'IP Camera Systems',
                items: ['2MP / 5MP / 8MP Cameras', 'Network Video Recorders', 'PoE Infrastructure', 'Remote Viewing Setup'],
              },
              {
                title: 'Analog HD Systems',
                items: ['HD-TVI / AHD Cameras', 'Digital Video Recorders', 'Coaxial Cabling', 'Hybrid Solutions'],
              },
              {
                title: 'Network & Infrastructure',
                items: ['PoE Switch Configuration', 'Network Cabling', 'WiFi Integration', 'Cloud Storage'],
              },
            ].map((expertise, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-yellow-100 shadow-md"
              >
                <h3 className="text-lg font-bold text-black mb-4">{expertise.title}</h3>
                <ul className="space-y-3">
                  {expertise.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-black mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-black/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Justdial Rating */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-black mb-3">
              What Our Customers Say
            </h2>
            <p className="text-base sm:text-xl text-black/70 max-w-2xl mx-auto">
              Trusted by hundreds of satisfied customers across Madanapalle and beyond
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-premiummyello/10 to-white border-2 border-premiummyello rounded-2xl p-6 sm:p-10 shadow-xl">
              {/* Header: icon + stars — stacked on mobile, side-by-side on sm+ */}
              <div className="flex flex-col sm:flex-row items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-14 h-14 bg-premiummyello rounded-full flex items-center justify-center">
                  <svg className="w-7 h-7 text-jet-black" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <div className="flex items-center gap-1">
                      {[1,2,3,4,5].map((s) => (
                        <svg key={s} className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-xl font-bold text-black">4.9/5</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-black mb-3 leading-tight">
                    DL ENTERPRISES – Justdial Verified
                  </h3>
                  <p className="text-sm sm:text-base text-black/80 leading-relaxed mb-5">
                    With an outstanding <span className="font-bold text-black">4.9 out of 5 rating</span> from{' '}
                    <span className="font-bold">518 customer reviews</span> on Justdial, DL Enterprises has established
                    itself as a trusted name in CCTV and security solutions.
                  </p>

                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-3 mb-5">
                    <div className="bg-white rounded-xl p-3 text-center border border-premiummyello/20">
                      <div className="text-2xl font-bold text-black">518</div>
                      <div className="text-xs text-black/60 mt-0.5">Reviews</div>
                    </div>
                    <div className="bg-white rounded-xl p-3 text-center border border-premiummyello/20">
                      <div className="text-2xl font-bold text-black">20+</div>
                      <div className="text-xs text-black/60 mt-0.5">Years</div>
                    </div>
                    <div className="bg-white rounded-xl p-3 text-center border border-premiummyello/20">
                      <div className="text-2xl font-bold text-black">✓</div>
                      <div className="text-xs text-black/60 mt-0.5">Verified</div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {['CCTV Dealers', 'Repair & Services', 'Installation', 'GPS & Home Automation'].map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-premiummyello/20 text-black rounded-full text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-black/10">
                    <p className="text-xs text-black/50 italic">
                      Located on NTR Road, Madanapalle • Established 2006 • Claimed Business
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-premiummyello/10 to-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-4 text-black">
              Ready to Secure Your Property?
            </h2>
            <p className="text-base sm:text-xl mb-8 text-black/70">
              Partner with experts who have 15+ years of proven experience
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 bg-premiummyello text-jet-black rounded-xl text-base font-bold hover:bg-premiummyello-light shadow-xl hover:scale-105 transition-all text-center"
              >
                Get Free Consultation
              </Link>
              <Link
                href="/services"
                className="w-full sm:w-auto px-8 py-4 border-2 border-premiummyello text-black rounded-xl text-base font-bold hover:bg-premiummyello hover:text-jet-black transition-all text-center"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
