'use client'


import Link from 'next/link'


export default function AboutPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 text-black">
        <div className="container-custom relative z-10">
          <div
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              About <span className="text-black">HSO CCTV</span>
            </h1>
            <p className="text-xl text-black/70 leading-relaxed">
              Your trusted partner for professional CCTV and security solutions with 15+ years of excellence
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div
              
              
              
            >
              <div className=" from-premiummyello to-premiummyello-light rounded-2xl p-12 shadow-glow-yellow">
                <div className="text-black">
                  <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                  <p className="text-lg leading-relaxed text-jet-black mb-6">
                    DL CCTV, a division of DL Security System, has been at the forefront of security solutions for 15+ years. As an authorized HSO CCTV partner, we combine international expertise with local trust.
                  </p>
                  <p className="text-lg leading-relaxed text-jet-black">
                    Our journey began with a vision to make professional-grade security accessible to homes, shops, and industries across Madanapalli, Rayachoty, and beyond.
                  </p>
                </div>
              </div>
            </div>

            <div
              
              
              
              className="space-y-6"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-premiummyello/20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">Authorized HSO Partner</h3>
                  <p className="text-black/70">Official partnership with HSO CCTV for authentic products and warranty support</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-premiummyello/20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">International Experience</h3>
                  <p className="text-black/70">Successfully completed projects in GCC (Kuwait) and across India</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-premiummyello/20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">Quality Assurance</h3>
                  <p className="text-black/70">Own brand manufacturing ensures premium quality at competitive prices</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-premiummyello/20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">Expert Team</h3>
                  <p className="text-black/70">Skilled engineers with deep knowledge of IP, analog, and network systems</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4">
              Experience Highlights
            </h2>
            <p className="text-xl text-black/70 max-w-2xl mx-auto">
              Proven track record of excellence in security solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: '15+',
                label: 'Years',
                description: 'Industry Experience',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                number: '1000+',
                label: 'Cameras',
                description: 'Successfully Installed',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                ),
              },
              {
                number: '500+',
                label: 'Projects',
                description: 'Completed Successfully',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                number: '24/7',
                label: 'Support',
                description: 'Technical Assistance',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ),
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="glass-card-hover p-8 text-center hover:shadow-xl"
              >
                <div className="w-16 h-16  from-premiummyello to-premiummyello-light rounded-xl flex items-center justify-center text-black mx-auto mb-6 shadow-lg">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-black mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-black mb-1">{stat.label}</div>
                <div className="text-sm text-black/70">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4">
              Our Expertise
            </h2>
            <p className="text-xl text-black/70 max-w-2xl mx-auto">
              Comprehensive knowledge across all security technologies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
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
                className="p-8 rounded-2xl"
              >
                <h3 className="text-xl font-bold text-black mb-6">{expertise.title}</h3>
                <ul className="space-y-3">
                  {expertise.items.map((item, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <svg className="w-5 h-5 text-black mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-black">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-black/70 max-w-2xl mx-auto">
              Trusted by hundreds of satisfied customers across Madanapalle and beyond
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-premiummyello/10 to-white border-2 border-premiummyello rounded-2xl p-8 sm:p-12 shadow-xl">
              <div className="flex items-start gap-6 mb-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-premiummyello rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-jet-black" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-2xl font-bold text-black">4.9/5</span>
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-3">DL ENTERPRISES - Justdial Verified</h3>
                  <p className="text-lg text-black/80 leading-relaxed mb-4">
                    With an outstanding <span className="font-bold text-black">4.9 out of 5 rating</span> from <span className="font-bold">518 customer reviews</span> on Justdial, DL Enterprises has established itself as a trusted name in CCTV and security solutions.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                    <div className="bg-white/50 rounded-lg p-4 text-center border border-premiummyello/20">
                      <div className="text-3xl font-bold text-black">518</div>
                      <div className="text-sm text-black/70">Customer Reviews</div>
                    </div>
                    <div className="bg-white/50 rounded-lg p-4 text-center border border-premiummyello/20">
                      <div className="text-3xl font-bold text-black">20+</div>
                      <div className="text-sm text-black/70">Years in Business</div>
                    </div>
                    <div className="bg-white/50 rounded-lg p-4 text-center border border-premiummyello/20">
                      <div className="text-3xl font-bold text-black">✓</div>
                      <div className="text-sm text-black/70">Justdial Verified</div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-premiummyello/20 text-black rounded-full text-sm font-medium">CCTV Dealers</span>
                    <span className="px-3 py-1 bg-premiummyello/20 text-black rounded-full text-sm font-medium">Repair & Services</span>
                    <span className="px-3 py-1 bg-premiummyello/20 text-black rounded-full text-sm font-medium">Installation Services</span>
                    <span className="px-3 py-1 bg-premiummyello/20 text-black rounded-full text-sm font-medium">GPS & Home Automation</span>
                  </div>
                  <div className="mt-6 pt-6 border-t border-black/10">
                    <p className="text-sm text-black/60 italic">
                      Located on NTR Road, Madanapalle • Established 2006 • Claimed Business
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding  from-premiummyello to-premiummyello-light text-black">
        <div className="container-custom">
          <div
            
            
            
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Secure Your Property?
            </h2>
            <p className="text-xl mb-10 text-black/70">
              Partner with experts who have 15+ years of proven experience
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 bg-premiummyello text-jet-black rounded-xl text-lg font-semibold hover:bg-premiummyello-light shadow-xl hover:shadow-2xl hover:scale-105 transform"
              >
                Get Free Consultation
              </Link>
              <Link
                href="/services"
                className="w-full sm:w-auto px-8 py-4 backdrop-blur-xl text-black rounded-xl text-lg font-semibold hover:bg-white/10 shadow-xl hover:shadow-2xl hover:scale-105 transform border border-white/20"
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
