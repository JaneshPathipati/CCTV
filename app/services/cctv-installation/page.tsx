'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function CCTVInstallationPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-yellow-50 to-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-premiummyello/10 text-black font-semibold rounded-full text-sm mb-4">
              Professional CCTV Installation Services
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-black">
              Protect What Matters Most with Professional CCTV Installation
            </h1>
            <p className="text-xl text-black/70 leading-relaxed mb-8">
              Complete security solutions for homes, offices, factories, and retail stores in Madanapalle & Rayachoty
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-premiummyello text-jet-black rounded-xl font-bold text-lg hover:bg-premiummyello-light hover:scale-105 transition-all shadow-xl flex items-center gap-2"
              >
                Book Free Site Inspection
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
              <a
                href="tel:+918282824138"
                className="px-8 py-4 border-2 border-premiummyello text-black rounded-xl font-bold text-lg hover:bg-premiummyello hover:text-jet-black transition-all flex items-center gap-2"
              >
                <span className="material-symbols-outlined">call</span>
                +91 82828 24138
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Solved Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
              Why You Need CCTV Security Today
            </h2>
            <p className="text-lg text-black/70 max-w-3xl mx-auto">
              Without proper surveillance, you're leaving your property vulnerable to theft, vandalism, and security breaches
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🏠',
                title: 'Theft & Break-ins',
                problem: 'Homes and businesses without CCTV are 3x more likely to be targeted by thieves',
                solution: 'Visible cameras act as a powerful deterrent and provide evidence if incidents occur'
              },
              {
                icon: '👥',
                title: 'Employee Monitoring',
                problem: 'Unable to monitor staff activities, leading to productivity loss and internal theft',
                solution: 'Track employee performance, prevent theft, and ensure workplace safety'
              },
              {
                icon: '🚗',
                title: 'Property Damage',
                problem: 'Vandalism, vehicle damage, and property disputes with no proof or accountability',
                solution: 'Record all activities 24/7 with clear footage for insurance and legal purposes'
              },
              {
                icon: '😰',
                title: 'Peace of Mind',
                problem: 'Constant worry about family safety and property security when you are away',
                solution: 'Monitor your property from anywhere using mobile app - stay connected always'
              },
              {
                icon: '💼',
                title: 'Customer Disputes',
                problem: 'No evidence in case of customer complaints, false claims, or liability issues',
                solution: 'Protect your business with recorded proof of all transactions and interactions'
              },
              {
                icon: '🌙',
                title: 'Night Security',
                problem: 'Blind spots and poor visibility at night leave your property exposed',
                solution: 'Advanced night vision cameras provide crystal-clear footage even in complete darkness'
              }
            ].map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-yellow-50 to-white p-8 rounded-2xl border-2 border-premiummyello/20 hover:border-premiummyello transition-all hover:shadow-xl">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-black mb-3">{item.title}</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <span className="text-red-500 font-bold mt-1">✗</span>
                    <p className="text-sm text-black/60">{item.problem}</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-500 font-bold mt-1">✓</span>
                    <p className="text-sm text-black font-medium">{item.solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Workflow Section */}
      <section className="section-padding bg-gradient-to-br from-yellow-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
              Our Simple 5-Step Installation Process
            </h2>
            <p className="text-lg text-black/70 max-w-2xl mx-auto">
              Professional, transparent, and hassle-free installation from start to finish
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                step: '01',
                title: 'Site Inspection',
                description: 'Free visit to assess your property and identify security needs',
                icon: 'location_searching',
                details: ['Coverage area analysis', 'Identify blind spots', 'Entry/exit points review']
              },
              {
                step: '02',
                title: 'Camera Selection',
                description: 'Recommend the best cameras based on your requirements and budget',
                icon: 'videocam',
                details: ['HD/IP camera options', 'Night vision capability', 'Indoor/outdoor models']
              },
              {
                step: '03',
                title: 'Installation',
                description: 'Expert technicians install cameras with clean cable management',
                icon: 'construction',
                details: ['Professional mounting', 'Neat wiring', 'Weatherproof setup']
              },
              {
                step: '04',
                title: 'Testing & Setup',
                description: 'Configure system, test all cameras, and set up mobile viewing',
                icon: 'settings',
                details: ['DVR/NVR configuration', 'Mobile app setup', 'Recording settings']
              },
              {
                step: '05',
                title: 'Support & Maintenance',
                description: 'Training, documentation, and ongoing technical support',
                icon: 'support_agent',
                details: ['User training', 'Warranty coverage', '24/7 support available']
              }
            ].map((process, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-6 rounded-2xl border-2 border-premiummyello shadow-lg hover:shadow-2xl transition-all h-full">
                  <div className="w-16 h-16 bg-premiummyello rounded-full flex items-center justify-center mb-4 mx-auto">
                    <span className="material-symbols-outlined text-3xl text-jet-black">{process.icon}</span>
                  </div>
                  <div className="text-4xl font-bold text-black/30 mb-2 text-center">{process.step}</div>
                  <h3 className="text-lg font-bold text-black mb-2 text-center">{process.title}</h3>
                  <p className="text-sm text-black/70 mb-4 text-center">{process.description}</p>
                  <ul className="space-y-2">
                    {process.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-black/60">
                        <span className="w-1.5 h-1.5 bg-premiummyello rounded-full"></span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
                {index < 4 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <span className="material-symbols-outlined text-3xl text-black">arrow_forward</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Camera Types Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
              Choose the Right Camera for Your Needs
            </h2>
            <p className="text-lg text-black/70 max-w-2xl mx-auto">
              We offer a complete range of CCTV cameras with expert guidance on what works best for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Bullet Cameras',
                image: '/hso-bullet.png',
                description: 'Long-range outdoor surveillance with weatherproof design',
                features: ['Outdoor use', 'Long-range viewing', 'Visible deterrent', 'Weatherproof'],
                bestFor: 'Entrances, parking lots, perimeter security',
                link: '/products?category=hd'
              },
              {
                name: 'Dome Cameras',
                image: '/hso-dome.png',
                description: 'Discreet indoor/outdoor cameras with wide coverage',
                features: ['360° rotation', 'Vandal-resistant', 'Indoor/outdoor', 'Discreet design'],
                bestFor: 'Offices, retail stores, hallways, lobbies',
                link: '/products?category=hd'
              },
              {
                name: 'WiFi & 4G Cameras',
                image: '/hso-wifi-camera.png',
                description: 'Wireless cameras with remote viewing capability',
                features: ['No wiring needed', 'Mobile app access', '4G SIM support', 'Easy installation'],
                bestFor: 'Remote locations, temporary setups, homes',
                link: '/products?category=wifi'
              },
              {
                name: 'Night Vision Cameras',
                image: '/hso-dual-light-dome.png',
                description: 'Crystal-clear footage even in complete darkness',
                features: ['IR night vision', 'Up to 30m range', 'Color night mode', 'Auto switch'],
                bestFor: '24/7 monitoring, low-light areas, night security',
                link: '/products?category=hd'
              },
              {
                name: 'PTZ Cameras',
                image: '/hso-ptz.png',
                description: 'Pan, tilt, and zoom for active monitoring',
                features: ['Remote control', '360° coverage', 'Optical zoom', 'Auto tracking'],
                bestFor: 'Large areas, warehouses, factories, malls',
                link: '/products?category=hd'
              },
              {
                name: 'Fisheye Cameras',
                image: '/hso-fisheye.png',
                description: '180° or 360° panoramic view with single camera',
                features: ['Wide coverage', 'No blind spots', 'Cost-effective', 'Ceiling mount'],
                bestFor: 'Shops, showrooms, small offices, reception areas',
                link: '/products?category=hd'
              }
            ].map((camera, index) => (
              <div key={index} className="bg-gradient-to-br from-yellow-50 to-white rounded-2xl overflow-hidden border-2 border-premiummyello/20 hover:border-premiummyello transition-all hover:shadow-xl group">
                <div className="relative h-48 bg-white">
                  <Image
                    src={camera.image}
                    alt={camera.name}
                    fill
                    className="object-contain p-4 group-hover:scale-110 transition-transform"
                    unoptimized
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-2">{camera.name}</h3>
                  <p className="text-sm text-black/70 mb-4">{camera.description}</p>
                  <div className="space-y-2 mb-4">
                    {camera.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-premiummyello rounded-full"></span>
                        <span className="text-sm text-black/60">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-black/10">
                    <p className="text-xs font-semibold text-black/50 mb-2">BEST FOR:</p>
                    <p className="text-sm text-black mb-4">{camera.bestFor}</p>
                    <Link
                      href={camera.link}
                      className="inline-flex items-center gap-2 text-black font-semibold hover:gap-3 transition-all"
                    >
                      View Products
                      <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal For Section */}
      <section className="section-padding bg-gradient-to-br from-yellow-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
              Perfect Security Solutions For Every Property Type
            </h2>
            <p className="text-lg text-black/70 max-w-2xl mx-auto">
              Customized CCTV installations designed for your specific security needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🏡',
                title: 'Homes & Villas',
                description: 'Protect your family and property with 24/7 surveillance',
                features: ['Main entrance monitoring', 'Backyard coverage', 'Night vision', 'Mobile alerts'],
                typical: '4-8 cameras'
              },
              {
                icon: '🏢',
                title: 'Apartments & Societies',
                description: 'Comprehensive security for residential complexes',
                features: ['Entry/exit gates', 'Common areas', 'Parking lots', 'Lift lobbies'],
                typical: '12-30 cameras'
              },
              {
                icon: '💼',
                title: 'Offices & Corporates',
                description: 'Monitor employee activity and secure sensitive areas',
                features: ['Reception area', 'Workspaces', 'Server rooms', 'Parking'],
                typical: '8-20 cameras'
              },
              {
                icon: '🏭',
                title: 'Warehouses & Factories',
                description: 'Large-area coverage for industrial facilities',
                features: ['Perimeter security', 'Loading docks', 'Storage areas', 'Production floor'],
                typical: '20-50+ cameras'
              },
              {
                icon: '🛍️',
                title: 'Retail Stores & Showrooms',
                description: 'Prevent theft and monitor customer activity',
                features: ['Sales floor', 'Cash counters', 'Storage rooms', 'Entrances'],
                typical: '6-15 cameras'
              },
              {
                icon: '🏫',
                title: 'Schools & Institutions',
                description: 'Ensure student safety and campus security',
                features: ['Classrooms', 'Playgrounds', 'Entry gates', 'Corridors'],
                typical: '15-40 cameras'
              }
            ].map((property, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border-2 border-premiummyello/20 hover:border-premiummyello transition-all hover:shadow-xl">
                <div className="text-5xl mb-4">{property.icon}</div>
                <h3 className="text-xl font-bold text-black mb-2">{property.title}</h3>
                <p className="text-sm text-black/70 mb-4">{property.description}</p>
                <ul className="space-y-2 mb-4">
                  {property.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-black/60">
                      <svg className="w-4 h-4 text-black flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-black/10">
                  <p className="text-xs text-black/50 mb-1">TYPICAL SETUP:</p>
                  <p className="text-sm font-bold text-black">{property.typical}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
              Transparent Pricing - No Hidden Costs
            </h2>
            <p className="text-lg text-black/70 max-w-2xl mx-auto">
              Get a customized quote based on your specific requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                package: 'Basic',
                price: '₹15,000',
                description: 'Perfect for small homes and shops',
                features: [
                  '4 HD cameras (2MP)',
                  '4-channel DVR with 1TB HDD',
                  'Basic installation',
                  'Mobile viewing app',
                  '1 year warranty'
                ],
                popular: false
              },
              {
                package: 'Standard',
                price: '₹35,000',
                description: 'Ideal for homes and small offices',
                features: [
                  '8 HD cameras (5MP)',
                  '8-channel DVR with 2TB HDD',
                  'Professional installation',
                  'Night vision cameras',
                  'Mobile viewing + alerts',
                  '2 year warranty'
                ],
                popular: true
              },
              {
                package: 'Premium',
                price: '₹75,000+',
                description: 'Complete solution for businesses',
                features: [
                  '16+ IP cameras (5MP-8MP)',
                  '16-channel NVR with 4TB HDD',
                  'Advanced installation',
                  'PTZ + night vision',
                  'Remote access + cloud backup',
                  '3 year warranty + AMC'
                ],
                popular: false
              }
            ].map((plan, index) => (
              <div key={index} className={`relative rounded-2xl p-8 border-2 ${plan.popular ? 'border-premiummyello bg-gradient-to-br from-yellow-50 to-white shadow-2xl scale-105' : 'border-black/10 bg-white'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="px-4 py-1 bg-premiummyello text-jet-black rounded-full text-sm font-bold">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-black mb-2">{plan.package}</h3>
                  <div className="text-4xl font-bold text-black mb-2">{plan.price}</div>
                  <p className="text-sm text-black/60">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-black mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-black">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`block text-center py-3 rounded-xl font-bold transition-all ${plan.popular ? 'bg-premiummyello text-jet-black hover:bg-premiummyello-light' : 'border-2 border-premiummyello text-black hover:bg-premiummyello hover:text-jet-black'}`}
                >
                  Get Quote
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-12 max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-yellow-50 to-white p-8 rounded-2xl border-2 border-premiummyello/20">
              <h3 className="text-xl font-bold text-black mb-4 text-center">What Affects Your CCTV Installation Cost?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { factor: 'Number of cameras', impact: 'More cameras = higher cost' },
                  { factor: 'Camera resolution', impact: '2MP to 12MP options available' },
                  { factor: 'Recording storage', impact: '1TB to 8TB HDD/SSD options' },
                  { factor: 'Cable length required', impact: 'Depends on property size' },
                  { factor: 'Installation complexity', impact: 'Height, accessibility, wiring' },
                  { factor: 'Additional features', impact: 'Audio, PTZ, analytics, etc.' }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-black mt-1">check_circle</span>
                    <div>
                      <p className="font-semibold text-black text-sm">{item.factor}</p>
                      <p className="text-xs text-black/60">{item.impact}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-black/10 text-center">
                <p className="text-sm text-black/70 mb-3">
                  <span className="font-bold text-premiummyello">FREE</span> site inspection to give you an accurate quote
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-premiummyello font-bold hover:gap-3 transition-all"
                >
                  Schedule Free Inspection
                  <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-premiummyello to-premiummyello-light">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-jet-black">
              Ready to Secure Your Property?
            </h2>
            <p className="text-xl mb-10 text-jet-black/80">
              Get a free site inspection and customized security solution today
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {[
                { icon: 'verified', text: '500+ Installations' },
                { icon: 'support_agent', text: '24/7 Support' },
                { icon: 'workspace_premium', text: '3 Year Warranty' }
              ].map((badge, i) => (
                <div key={i} className="flex items-center justify-center gap-2 bg-white/20 backdrop-blur-sm rounded-xl p-4">
                  <span className="material-symbols-outlined text-jet-black">{badge.icon}</span>
                  <span className="font-semibold text-jet-black">{badge.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 bg-jet-black text-white rounded-xl text-lg font-bold hover:bg-black hover:scale-105 transition-all shadow-xl flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined">calendar_month</span>
                Book Free Site Inspection
              </Link>
              <a
                href="https://wa.me/918282824138"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-white text-jet-black rounded-xl text-lg font-bold hover:bg-white/90 hover:scale-105 transition-all shadow-xl flex items-center justify-center gap-2"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp Us
              </a>
              <a
                href="tel:+918282824138"
                className="w-full sm:w-auto px-8 py-4 bg-white text-jet-black rounded-xl text-lg font-bold hover:bg-white/90 hover:scale-105 transition-all shadow-xl flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined">call</span>
                +91 82828 24138
              </a>
            </div>

            <p className="mt-8 text-sm text-jet-black/70">
              Serving Madanapalle, Rayachoty, and surrounding areas • Licensed & Insured • 100% Satisfaction Guaranteed
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
