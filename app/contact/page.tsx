'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    // Create WhatsApp message
    const whatsappMessage = `Hello, I'm interested in your services.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nService: ${formData.service}\nMessage: ${formData.message}`
    const whatsappUrl = `https://wa.me/918282824138?text=${encodeURIComponent(whatsappMessage)}`
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank')
    
    // Reset form
    setFormData({ name: '', phone: '', email: '', service: '', message: '' })
    setIsSubmitting(false)
    setSubmitStatus('success')
    
    setTimeout(() => setSubmitStatus('idle'), 3000)
  }

  return (
    <>
      <section className="relative pt-32 pb-12 bg-gradient-to-br from-yellow-50 to-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-premiummyello text-jet-black font-bold rounded-full text-sm mb-4">
              ✓ FREE Site Inspection • No Obligation Quote
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-black">
              Get Your Free Security Consultation
            </h1>
            <p className="text-xl text-black/70 leading-relaxed mb-8">
              Expert advice, same-day response, and customized solutions for your property
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-black/70">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-black">schedule</span>
                <span>Response within 2 hours</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-black">verified</span>
                <span>15+ years experience</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-black">star</span>
                <span>4.9/5 rating (518 reviews)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full">
            <div>
              <h2 className="text-3xl font-bold text-black mb-2">Request Free Site Inspection</h2>
              <p className="text-black/60 mb-8">Fill out the form and we'll call you within 2 hours</p>
              
              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-black font-semibold mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-black/5 border border-black/10 rounded-xl text-black placeholder-black/40 focus:outline-none focus:border-premiummyello"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-black font-semibold mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-black/5 border border-black/10 rounded-xl text-black placeholder-black/40 focus:outline-none focus:border-premiummyello"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-black font-semibold mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-black/5 border border-black/10 rounded-xl text-black placeholder-black/40 focus:outline-none focus:border-premiummyello"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-black font-semibold mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 bg-black/5 border border-black/10 rounded-xl text-black focus:outline-none focus:border-premiummyello"
                  >
                    <option value="">Select a service</option>
                    <option value="CCTV Installation">CCTV Installation</option>
                    <option value="IP & Analog Surveillance">IP & Analog Surveillance</option>
                    <option value="AMC & Maintenance">AMC & Maintenance</option>
                    <option value="Networking & PoE Systems">Networking & PoE Systems</option>
                    <option value="Residential Security">Residential Security</option>
                    <option value="Commercial & Industrial">Commercial & Industrial</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-black font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-black/5 border border-black/10 rounded-xl text-black placeholder-black/40 focus:outline-none focus:border-premiummyello resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-xl text-green-600 text-sm font-medium">
                    ✓ Form submitted! Opening WhatsApp...
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-4 bg-premiummyello text-jet-black rounded-xl font-semibold hover:bg-premiummyello-light shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02]"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit via WhatsApp'}
                </button>
              </form>
            </div>

            <div>
              <div className="glass-card rounded-2xl p-8 border border-black/10 shadow-lg sticky top-24">
                <h2 className="text-2xl font-bold text-black mb-6">Direct Contact</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-premiummyello/20 to-premiummyello/10 rounded-xl flex items-center justify-center text-black">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-black mb-1">Contact Person</h3>
                      <p className="text-black font-semibold text-lg mb-1">Sainath</p>
                      <p className="text-black/60 text-sm">Proprietor</p>
                    </div>
                  </div>

                  <div className="border-t border-black/10 pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-premiummyello/20 to-premiummyello/10 rounded-xl flex items-center justify-center text-black">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-black mb-1">Phone Number</h3>
                        <a href="tel:+918282824138" className="text-black hover:text-black/60 font-semibold text-lg block mb-1">
                          📞 +91 82 8282 4138
                        </a>
                        <p className="text-black/60 text-sm mb-3">Available for calls and messages</p>
                        <a
                          href="https://wa.me/918282824138"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-3 py-2 bg-green-500 text-white rounded-lg text-xs font-semibold hover:bg-green-600 transition-colors"
                        >
                          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                          </svg>
                          Chat on WhatsApp
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-black/10 pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-premiummyello/20 to-premiummyello/10 rounded-xl flex items-center justify-center text-black">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-black mb-1">Business Type</h3>
                        <p className="text-black font-semibold text-lg">Sales & Installations</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-black/10 pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-premiummyello/20 to-premiummyello/10 rounded-xl flex items-center justify-center text-black">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-black mb-1">Location / Address</h3>
                        <p className="text-black/60 text-sm">
                          📍 NTR Circle, Opposite to Sundar Raj Petrol Bunk<br />
                          Madanapalle, Annamayya District<br />
                          Andhra Pradesh
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-black/10 pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-premiummyello/20 to-premiummyello/10 rounded-xl flex items-center justify-center text-black">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-black mb-1">Business Hours</h3>
                        <p className="text-black font-semibold text-sm mb-1">Monday – Saturday</p>
                        <p className="text-black/60 text-sm mb-2">9:00 AM – 8:00 PM</p>
                        <p className="text-black/60 text-xs mb-3">Sunday: By Appointment</p>
                        <a
                          href="https://wa.me/918282824138?text=I%20would%20like%20to%20schedule%20a%20Sunday%20appointment"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-3 py-2 bg-premiummyello/20 border border-premiummyello/30 text-black rounded-lg text-xs font-semibold hover:bg-premiummyello/30 transition-colors"
                        >
                          <svg className="w-3 h-3 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          Book Sunday Appointment
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="glass-card rounded-2xl p-8 border border-black/10 shadow-lg">
            <h2 className="text-2xl font-bold text-black mb-6">Service Areas</h2>
                
                <div className="space-y-6 mb-8">
                  <div>
                    <h3 className="text-lg font-semibold text-black mb-3">Primary Coverage</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {['Madanapalli', 'Rayachoty', 'Chittoor', 'Annamayya District'].map((area, index) => (
                        <div key={index} className="flex items-center space-x-2 bg-black/5 p-3 rounded-lg border border-black/10">
                          <svg className="w-5 h-5 text-black flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-black font-medium text-sm">{area}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-black mb-3">Extended Coverage</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {['Kadapa District', 'Tirupati', 'Bangalore Rural', 'Nearby Areas'].map((area, index) => (
                        <div key={index} className="flex items-center space-x-2 bg-black/5 p-3 rounded-lg border border-black/10">
                          <svg className="w-5 h-5 text-black flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-black font-medium text-sm">{area}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-black/5 rounded-xl p-6 border-2 border-premiummyello/20">
                  <h3 className="text-lg font-bold text-black mb-4">Why Contact Us?</h3>
                  <ul className="space-y-3">
                    {[
                      'Free site inspection and consultation',
                      'Customized security solutions',
                      'Transparent pricing with no hidden costs',
                      'Professional installation by experts',
                      'Lifetime technical support',
                    ].map((benefit, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <svg className="w-5 h-5 text-black mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-black text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="w-full">
            <div className="glass-card rounded-2xl shadow-xl overflow-hidden border border-black/10">
              <div className="aspect-video relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.84916296526!2d77.6309395!3d13.6288397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb268d1e5c0e7a7%3A0x8c3bdb9d0f5e5e5e!2sMadanapalle%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                ></iframe>
              </div>
              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold text-black mb-3">Visit Us or Request Site Inspection</h3>
                <p className="text-black/70 mb-6">
                  We serve Madanapalli, Rayachoty, and surrounding areas with professional CCTV installation services
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="https://wa.me/918282824138"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-3 bg-premiummyello text-jet-black rounded-lg font-semibold hover:bg-premiummyello-light shadow-lg"
                  >
                    Schedule Inspection via WhatsApp
                  </a>
                  <a
                    href="tel:+918282824138"
                    className="w-full sm:w-auto px-6 py-3 btn-secondary font-semibold shadow-lg"
                  >
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-yellow-50 to-white text-black">
        <div className="container-custom">
          <div className="w-full text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Trusted Security Partner Since 2008
            </h2>
            <p className="text-xl mb-8 text-black/70">
              15+ years of experience | 1000+ cameras installed | GCC & India projects
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Authorized HSO Partner</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>GST: DL ENTERPRISES</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
