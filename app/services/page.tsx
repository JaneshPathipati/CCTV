'use client'

import Link from 'next/link'
import Image from 'next/image'


const services = [
  {
    title: 'CCTV Installation',
    description: 'Professional installation of IP and analog CCTV camera systems with expert planning and execution.',
    features: [
      'Site survey and security assessment',
      'Camera placement optimization',
      'Professional cable management',
      'System configuration and testing',
      'User training and documentation',
    ],
    useCases: ['Residential complexes', 'Retail stores', 'Offices', 'Warehouses'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'New Project Setup',
    description: 'Complete end-to-end security system design and implementation for new construction and renovations.',
    features: [
      'Comprehensive security planning',
      'Infrastructure design and layout',
      'Equipment procurement and installation',
      'Integration with building systems',
      'Handover and training',
    ],
    useCases: ['New buildings', 'Renovations', 'Industrial facilities', 'Institutions'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: 'AMC & Maintenance',
    description: 'Annual Maintenance Contracts to keep your security systems running optimally year-round.',
    features: [
      'Regular preventive maintenance',
      'Priority support and repairs',
      'System health monitoring',
      'Firmware and software updates',
      'Replacement of faulty components',
    ],
    useCases: ['Existing installations', 'Commercial properties', 'Industrial units', 'Residential societies'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Repair & Troubleshooting',
    description: 'Fast and reliable repair services for all types of CCTV and security equipment issues.',
    features: [
      'Quick diagnosis and resolution',
      'On-site and remote support',
      'Genuine spare parts',
      'Camera and DVR/NVR repairs',
      'Emergency support available',
    ],
    useCases: ['System failures', 'Camera malfunctions', 'Recording issues', 'Network problems'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
  },
  {
    title: 'Network Cabling',
    description: 'Professional structured cabling for IP cameras, networking equipment, and data infrastructure.',
    features: [
      'Cat5e / Cat6 cable installation',
      'Cable testing and certification',
      'Patch panel organization',
      'Cable tray and conduit work',
      'Documentation and labeling',
    ],
    useCases: ['IP camera networks', 'Office networking', 'Data centers', 'Building infrastructure'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
  {
    title: 'PoE Switch Configuration',
    description: 'Setup and configuration of Power over Ethernet switches for IP camera systems.',
    features: [
      'PoE switch selection and sizing',
      'Network switch configuration',
      'VLAN setup for security',
      'Power budget management',
      'Network optimization',
    ],
    useCases: ['IP camera installations', 'Network upgrades', 'PoE device integration', 'Enterprise networks'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
  },
  {
    title: 'Remote Viewing Setup',
    description: 'Configure mobile and web access to view your CCTV cameras from anywhere in the world.',
    features: [
      'Mobile app configuration',
      'Cloud service setup',
      'Port forwarding and DDNS',
      'Secure remote access',
      'Multi-device support',
    ],
    useCases: ['Business owners', 'Home monitoring', 'Multi-site management', 'Remote facilities'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Security Planning',
    description: 'Comprehensive security assessment and customized solution design for your property.',
    features: [
      'Threat and risk assessment',
      'Coverage area analysis',
      'Camera type recommendations',
      'Budget-optimized solutions',
      'Scalability planning',
    ],
    useCases: ['New installations', 'System upgrades', 'Security audits', 'Compliance requirements'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
]

export default function ServicesPage() {
  return (
    <>
      <section className="relative pt-32 pb-12 bg-gradient-to-br from-yellow-50 to-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-premiummyello/10 text-black font-semibold rounded-full text-sm mb-4">
              Complete Security Solutions
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-black">
              Professional CCTV Installation & Support
            </h1>
            <p className="text-xl text-black/70 leading-relaxed mb-8">
              From consultation to 24/7 maintenance — we handle everything for your home or business
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-premiummyello text-jet-black rounded-xl font-bold text-lg hover:bg-premiummyello-light hover:scale-105 transition-all shadow-xl flex items-center gap-2"
              >
                Get Free Site Inspection
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

      <section className="section-padding ">
        <div className="container-custom">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-20 h-20  from-premiummyello to-premiummyello-light rounded-2xl flex items-center justify-center text-black mb-6 shadow-xl">
                    {service.icon}
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-black/70 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center px-6 py-3 bg-premiummyello text-jet-black rounded-xl font-bold hover:bg-premiummyello-light transition-all"
                    >
                      Get Free Quote
                      <span className="material-symbols-outlined ml-2">arrow_forward</span>
                    </Link>
                    <a
                      href="tel:+918282824138"
                      className="inline-flex items-center justify-center px-6 py-3 border-2 border-premiummyello text-black rounded-xl font-semibold hover:bg-premiummyello hover:text-jet-black transition-all"
                    >
                      <span className="material-symbols-outlined mr-2">call</span>
                      Call Now
                    </a>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  {index === 0 || index === 1 || index === 2 || index === 3 || index === 4 || index === 5 || index === 6 || index === 7 ? (
                    <div className="rounded-2xl overflow-hidden border-2 border-premiummyello shadow-xl">
                      <div className="relative w-full h-64 sm:h-80 lg:h-96">
                        <Image
                          src={
                            index === 0 ? "/cctvinstalation.png" : 
                            index === 1 ? "/newprojectsetup.png" : 
                            index === 2 ? "/amc-maintenance.png" : 
                            index === 3 ? "/repair-troubleshooting.png" :
                            index === 4 ? "/network-cabling.png" :
                            index === 5 ? "/poe-switch-config.png" :
                            index === 6 ? "/remote-viewing-setup.png" :
                            "/security-planning.png"
                          }
                          alt={
                            index === 0 ? "CCTV Installation" : 
                            index === 1 ? "New Project Setup" : 
                            index === 2 ? "AMC & Maintenance" : 
                            index === 3 ? "Repair & Troubleshooting" :
                            index === 4 ? "Network Cabling" :
                            index === 5 ? "PoE Switch Configuration" :
                            index === 6 ? "Remote Viewing Setup" :
                            "Security Planning"
                          }
                          fill
                          className="object-cover"
                          unoptimized
                        />
                      </div>
                      <div className="p-8 bg-white">
                        <h3 className="text-xl font-bold text-black mb-4">What We Provide</h3>
                        <ul className="space-y-3 mb-6">
                          {service.features.map((feature, i) => (
                            <li key={i} className="flex items-start space-x-3">
                              <svg className="w-5 h-5 text-black mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              <span className="text-black">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="pt-4 border-t border-black/10">
                          <h4 className="text-sm font-semibold text-black mb-3">Ideal For:</h4>
                          <div className="flex flex-wrap gap-2">
                            {service.useCases.map((useCase, i) => (
                              <span
                                key={i}
                                className="px-3 py-1 bg-premiummyello/20 text-black rounded-full text-sm font-medium"
                              >
                                {useCase}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className=" rounded-2xl p-8 border-2 border-premiummyello text-black/60">
                      <h3 className="text-xl font-bold text-black mb-4">What We Provide</h3>
                      <ul className="space-y-3 mb-6">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start space-x-3">
                            <svg className="w-5 h-5 text-premiummyello mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-black">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="pt-4 border-t border-white/20">
                        <h4 className="text-sm font-semibold text-black mb-3">Ideal For:</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.useCases.map((useCase, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-premiummyello/20 text-premiummyello rounded-full text-sm font-medium"
                            >
                              {useCase}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
              Our Service Process
            </h2>
            <p className="text-lg text-black/70 max-w-2xl mx-auto">
              A systematic approach to delivering excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Consultation',
                description: 'Free site visit and security assessment',
                image: '/Consultation.png',
              },
              {
                step: '02',
                title: 'Planning',
                description: 'Customized solution design and quotation',
                image: '/Planning.png',
              },
              {
                step: '03',
                title: 'Installation',
                description: 'Professional setup by expert technicians',
                image: '/Installation.png',
              },
              {
                step: '04',
                title: 'Support',
                description: 'Training, documentation, and ongoing maintenance',
                image: '/Support.png',
              },
            ].map((process, index) => (
              <div
                key={index}
                className="rounded-2xl shadow-lg relative overflow-hidden border-2 border-premiummyello"
              >
                {process.image && (
                  <div className="relative w-full h-48">
                    <Image
                      src={process.image}
                      alt={process.title}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                )}
                <div className="p-8">
                  <div className="text-6xl font-bold text-black/30 mb-4">{process.step}</div>
                  <h3 className="text-xl font-bold text-black mb-3">{process.title}</h3>
                  <p className="text-black/70">{process.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <svg className="w-8 h-8 text-black/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Completed Projects Gallery */}
      <section className="section-padding bg-gradient-to-br from-yellow-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4">
              Our Completed Projects
            </h2>
            <p className="text-xl text-black/70 max-w-2xl mx-auto">
              Real installations showcasing our expertise and quality workmanship
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              '006_dl-enterprises-ntr-road-madanapalle-cctv-dealers-2se1gsq9dc.jpg.jpeg',
              '010_dl-enterprises-ntr-road-madanapalle-cctv-dealers-geb5usb91b.jpg.jpeg',
              '011_dl-enterprise-madanapalle-old-bypass-road-madanapalle-cctv-dealers-d3t4i37mxy.jpg.jpeg',
              '012_dl-enterprises-ntr-road-madanapalle-cctv-dealers-b7etjg7c0g.jpg.jpeg',
              '015_dl-enterprises-ntr-road-madanapalle-cctv-dealers-8b09oyka7f.jpg.jpeg',
              '016_dl-enterprises-ntr-road-madanapalle-cctv-dealers-ye2p4b2moa.jpg.jpeg',
              '020_dl-enterprises-ntr-road-madanapalle-cctv-dealers-b6jhwpd5co.jpg.jpeg',
              '021_dl-enterprises-ntr-road-madanapalle-cctv-dealers-k5yfh3kc77.jpg.jpeg',
              '023_dl-cctv-security-camera-service-patel-road-madanapalle-security-system-installation-services-b99ahuzheo.jpg.jpeg',
              '024_dl-enterprises-ntr-road-madanapalle-cctv-dealers-hrwwwoq1sh.jpg.jpeg',
              '026_dl-cctv-security-camera-service-patel-road-madanapalle-security-system-installation-services-9g1d527hha.jpg.jpeg',
              '029_dl-enterprises-ntr-road-madanapalle-cctv-dealers-1znrye2g6f.jpg.jpeg',
              '030_dl-enterprises-ntr-road-madanapalle-cctv-dealers-vl4gwx67cx.jpg.jpeg',
              '034_dl-enterprises-ntr-road-madanapalle-cctv-dealers-99ayyp1s2d.jpg.jpeg',
              '036_dl-enterprise-madanapalle-cctv-dealers-3bmgegvjse.jpg.jpeg',
              '038_dl-enterprises-ntr-road-madanapalle-cctv-dealers-mx73ycsois.jpg.jpeg',
              '040_dl-enterprises-ntr-road-madanapalle-cctv-dealers-udpx2xgyvy.jpg.jpeg',
              '043_dl-enterprises-ntr-road-madanapalle-cctv-dealers-fxegqhgmj7.jpg.jpeg',
              '044_dl-cctv-security-camera-service-patel-road-madanapalle-security-system-installation-services-g11vyjrwe0.jpg.jpeg',
              '048_dl-enterprises-ntr-road-madanapalle-cctv-dealers-shhn6rbujh.jpg.jpeg',
              '049_dl-enterprises-ntr-road-madanapalle-cctv-dealers-47xq1710z2.jpg.jpeg',
              '050_dl-enterprise-madanapalle-cctv-dealers-ut2vqy4322.jpg.jpeg',
              '051_dl-cctv-security-camera-service-patel-road-madanapalle-security-system-installation-services-zeqha5s32c.jpg.jpeg',
              '053_dl-cctv-security-camera-service-patel-road-madanapalle-security-system-installation-services-xssez3c4fq.jpg.jpeg',
            ].map((image, index) => (
              <div
                key={index}
                className="group relative aspect-square overflow-hidden rounded-xl border-2 border-premiummyello/20 hover:border-premiummyello shadow-md hover:shadow-2xl transition-all duration-300"
              >
                <Image
                  src={`/hso works /${image}`}
                  alt={`CCTV Installation Project ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white text-sm font-semibold">Project {index + 1}</p>
                    <p className="text-white/80 text-xs">Professional Installation</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-black/60 text-sm mb-4">
              Over 500+ successful installations across Madanapalle, Rayachoty, and surrounding areas
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="px-4 py-2 bg-white rounded-full text-sm font-medium text-black border border-premiummyello/20">
                Residential Projects
              </span>
              <span className="px-4 py-2 bg-white rounded-full text-sm font-medium text-black border border-premiummyello/20">
                Commercial Installations
              </span>
              <span className="px-4 py-2 bg-white rounded-full text-sm font-medium text-black border border-premiummyello/20">
                Industrial Security
              </span>
              <span className="px-4 py-2 bg-white rounded-full text-sm font-medium text-black border border-premiummyello/20">
                Network Infrastructure
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding text-black">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-10 text-black/70">
              Contact us today for a free consultation and customized security solution
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 bg-premiummyello text-jet-black rounded-xl text-lg font-semibold hover:bg-premiummyello-light shadow-xl hover:shadow-2xl hover:scale-105 transform"
              >
                Schedule Free Inspection
              </Link>
              <a
                href="tel:+918282824138"
                className="w-full sm:w-auto px-8 py-4 backdrop-blur-xl text-black rounded-xl text-lg font-semibold hover:bg-white/10 shadow-xl hover:shadow-2xl hover:scale-105 transform border border-white/20"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
