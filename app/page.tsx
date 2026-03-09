'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { supabase, getProductImageUrl } from '@/lib/supabase'

function AnimatedWords({ words }: { words: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setInterval(() => {
      setIsVisible(false)
      setTimeout(() => {
        setCurrentIndex((prev) => {
          const nextIndex = (prev + 1) % words.length // Loop back to 0 after last word
          setIsVisible(true)
          return nextIndex
        })
      }, 200) // Fade out duration
    }, 1500) // 1500ms delay between each word

    return () => clearInterval(timer)
  }, [words.length])

  return (
    <span 
      className="inline-block min-w-[300px]"
          style={{
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.3s ease-in-out'
      }}
    >
      {words[currentIndex]}
    </span>
  )
}

function ImageCarousel() {
  return (
    <div className="w-full h-auto">
      <Image
        src="/hso-hero.png"
        alt="HSO CCTV Security Solutions"
        width={1920}
        height={1080}
        className="w-full h-auto"
        priority
        unoptimized
      />
    </div>
  )
}

export default function Home() {
  const [featuredProducts, setFeaturedProducts] = useState<any[]>([])

  useEffect(() => {
    loadFeaturedProducts()
  }, [])

  const loadFeaturedProducts = async () => {
    try {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('status', 'active')
        .not('image', 'is', null)
        .limit(4)
        .order('created_at', { ascending: false })

      if (error) throw error
      setFeaturedProducts(data || [])
    } catch (error) {
      console.error('Error loading featured products:', error)
    }
  }

  return (
    <>
      {/* Hero Section - Full Width Image */}
      <section className="w-full pt-32">
        {/* Full Width Image */}
        <ImageCarousel />
      </section>

      {/* Stats Section - White & Blue Theme */}
      <section className="py-12 border-y border-yellow-100 bg-white">
        <div className="container-custom">
          <p className="text-center text-[10px] text-black/50 tracking-[0.5em] uppercase mb-8">Trusted Excellence</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: 'schedule', label: '15+ Years', sublabel: 'Experience' },
              { icon: 'videocam', label: '1000+', sublabel: 'Cameras Installed' },
              { icon: 'public', label: 'GCC Kuwait', sublabel: 'Project Expertise' },
              { icon: 'factory', label: 'HSO CCTV', sublabel: 'Own Brand Manufacturing' },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center"
              >
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center text-black">
                  <span className="material-symbols-outlined text-2xl">{stat.icon}</span>
                </div>
                <div className="text-2xl font-bold text-black mb-1">{stat.label}</div>
                <div className="text-sm text-black/60">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
              Our Product Categories
            </h2>
            <p className="text-lg text-black/70 max-w-2xl mx-auto">
              Explore our comprehensive range of CCTV and security solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                id: 'hd',
                title: 'HD Cameras',
                description: 'High-definition analog cameras for crystal-clear surveillance',
                icon: 'hd',
                count: '20+ Products',
                features: ['2MP to 5MP Resolution', 'Night Vision', 'Weatherproof', 'Audio Support'],
                link: '/products?category=hd'
              },
              {
                id: 'ip',
                title: 'IP Cameras',
                description: 'Network cameras with advanced features and remote access',
                icon: 'wifi',
                count: '15+ Products',
                features: ['1080P to 4K Resolution', 'Smart Detection', 'Cloud Storage', 'Mobile App'],
                link: '/products?category=ip'
              },
              {
                id: 'wifi',
                title: 'WiFi & 4G Cameras',
                description: 'Wireless cameras for easy installation and flexible placement',
                icon: 'router',
                count: '8+ Products',
                features: ['Wireless Setup', '4G SIM Support', 'Battery Options', 'Remote Viewing'],
                link: '/products?category=wifi'
              }
            ].map((category, index) => (
              <Link
                key={category.id}
                href={category.link}
                className="group bg-white rounded-2xl border-2 border-black/10 hover:border-premiummyello shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className="p-8">
                  <div className="w-16 h-16 bg-premiummyello/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-premiummyello transition-colors">
                    <span className="material-symbols-outlined text-3xl text-black group-hover:text-jet-black transition-colors">
                      {category.icon}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-3">{category.title}</h3>
                  <p className="text-black/70 mb-4 leading-relaxed">{category.description}</p>
                  <div className="flex items-center gap-2 text-black font-semibold mb-4">
                    <span className="material-symbols-outlined text-lg">inventory_2</span>
                    {category.count}
                  </div>
                  <ul className="space-y-2 mb-6">
                    {category.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-black/60">
                        <svg className="w-4 h-4 text-black flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-2 text-black font-semibold group-hover:gap-3 transition-all">
                    <span>Explore Products</span>
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="section-padding bg-gradient-to-br from-yellow-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
              Featured Products
            </h2>
            <p className="text-lg text-black/70 max-w-2xl mx-auto">
              Our most popular CCTV cameras and security equipment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => {
              const badges = ['Bestseller', 'Premium', 'Wireless', '360°']
              return (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="group relative bg-white/90 backdrop-blur-sm rounded-2xl border-2 border-black/10 hover:border-premiummyello shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-premiummyello/0 to-premiummyello/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"></div>
                <div className="relative">
                  <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 p-6">
                    <Image
                      src={getProductImageUrl(product.image)}
                      alt={product.name}
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-300"
                      unoptimized
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                  {index < badges.length && (
                    <div className="absolute top-4 left-4 px-3 py-1 bg-premiummyello text-jet-black rounded-full text-xs font-bold">
                      {badges[index]}
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-black mb-1 line-clamp-2">{product.name}</h3>
                  <p className="text-sm text-black/60 mb-3">{product.model_number}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-black">{product.resolution}</span>
                    <span className="text-sm text-black/50 group-hover:text-black transition-colors">
                      View Details →
                    </span>
                  </div>
                </div>
              </Link>
              )
            })}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/products"
              className="inline-flex items-center gap-3 px-8 py-4 bg-premiummyello text-jet-black rounded-xl font-bold text-lg hover:bg-premiummyello-light hover:scale-105 transition-all shadow-xl"
            >
              View All Products
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Our Completed Projects Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
              Our Completed Projects
            </h2>
            <p className="text-lg text-black/70 max-w-2xl mx-auto">
              Trusted by homes, businesses, and enterprises across the region
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              '/hso-works/006_dl-enterprises-ntr-road-madanapalle-cctv-dealers-2se1gsq9dc.jpg.jpeg',
              '/hso-works/010_dl-enterprises-ntr-road-madanapalle-cctv-dealers-geb5usb91b.jpg.jpeg',
              '/hso-works/011_dl-enterprise-madanapalle-old-bypass-road-madanapalle-cctv-dealers-d3t4i37mxy.jpg.jpeg',
              '/hso-works/012_dl-enterprises-ntr-road-madanapalle-cctv-dealers-b7etjg7c0g.jpg.jpeg',
              '/hso-works/015_dl-enterprises-ntr-road-madanapalle-cctv-dealers-8b09oyka7f.jpg.jpeg',
              '/hso-works/016_dl-enterprises-ntr-road-madanapalle-cctv-dealers-ye2p4b2moa.jpg.jpeg',
              '/hso-works/017_dl-cctv-security-camera-service-patel-road-madanapalle-security-system-installation-services-jmwfu4igoj.jpg.jpeg',
              '/hso-works/020_dl-enterprises-ntr-road-madanapalle-cctv-dealers-b6jhwpd5co.jpg.jpeg',
              '/hso-works/021_dl-enterprises-ntr-road-madanapalle-cctv-dealers-k5yfh3kc77.jpg.jpeg',
              '/hso-works/023_dl-cctv-security-camera-service-patel-road-madanapalle-security-system-installation-services-b99ahuzheo.jpg.jpeg',
              '/hso-works/024_dl-enterprises-ntr-road-madanapalle-cctv-dealers-hrwwwoq1sh.jpg.jpeg',
              '/hso-works/026_dl-cctv-security-camera-service-patel-road-madanapalle-security-system-installation-services-9g1d527hha.jpg.jpeg',
              '/hso-works/029_dl-enterprises-ntr-road-madanapalle-cctv-dealers-1znrye2g6f.jpg.jpeg',
              '/hso-works/030_dl-enterprises-ntr-road-madanapalle-cctv-dealers-vl4gwx67cx.jpg.jpeg',
              '/hso-works/032_dl-cctv-security-camera-service-patel-road-madanapalle-security-system-installation-services-rqkvjgdkqa.jpg.jpeg',
              '/hso-works/034_dl-enterprises-ntr-road-madanapalle-cctv-dealers-99ayyp1s2d.jpg.jpeg',
              '/hso-works/036_dl-enterprise-madanapalle-cctv-dealers-3bmgegvjse.jpg.jpeg',
              '/hso-works/038_dl-enterprises-ntr-road-madanapalle-cctv-dealers-mx73ycsois.jpg.jpeg',
              '/hso-works/040_dl-enterprises-ntr-road-madanapalle-cctv-dealers-udpx2xgyvy.jpg.jpeg',
              '/hso-works/041_dl-cctv-security-camera-service-patel-road-madanapalle-security-system-installation-services-tg2t7ilpbb.jpg.jpeg',
              '/hso-works/043_dl-enterprises-ntr-road-madanapalle-cctv-dealers-fxegqhgmj7.jpg.jpeg',
              '/hso-works/044_dl-cctv-security-camera-service-patel-road-madanapalle-security-system-installation-services-g11vyjrwe0.jpg.jpeg',
              '/hso-works/045_dl-enterprises-ntr-road-madanapalle-cctv-dealers-udpx2xgyvy.jpg.jpeg',
              '/hso-works/048_dl-enterprises-ntr-road-madanapalle-cctv-dealers-shhn6rbujh.jpg.jpeg',
            ].map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl border border-black/10 hover:border-premiummyello shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-[4/3] relative bg-gray-100">
                  <Image
                    src={image}
                    alt={`CCTV Installation Project ${index + 1}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    unoptimized
                    loading={index < 8 ? 'eager' : 'lazy'}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-3 text-white translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-xs font-semibold">Project {index + 1}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-premiummyello text-jet-black rounded-xl font-bold text-lg hover:bg-premiummyello-light hover:scale-105 transition-all shadow-xl"
            >
              Start Your Project
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">
                Why Choose HSO CCTV?
              </h2>
              <p className="text-lg text-black/70 mb-8 leading-relaxed">
                With over 15 years of experience in security solutions, we provide cutting-edge CCTV systems 
                tailored to your specific needs. Our commitment to quality and customer satisfaction has made us 
                a trusted name in the industry.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: 'verified',
                    title: 'Quality Assurance',
                    description: 'All our products come with manufacturer warranty and quality certification'
                  },
                  {
                    icon: 'support_agent',
                    title: 'Expert Support',
                    description: '24/7 technical support and maintenance services for complete peace of mind'
                  },
                  {
                    icon: 'rocket_launch',
                    title: 'Fast Installation',
                    description: 'Professional installation team ensures quick and efficient setup'
                  },
                  {
                    icon: 'payments',
                    title: 'Best Prices',
                    description: 'Competitive pricing with no compromise on quality or service'
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 bg-premiummyello/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined text-xl text-black">
                        {feature.icon}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-bold text-black mb-1">{feature.title}</h3>
                      <p className="text-black/70 text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-yellow-50 to-white rounded-2xl border-2 border-premiummyello/20 overflow-hidden">
                <Image
                  src="/hso-works/049_dl-enterprises-ntr-road-madanapalle-cctv-dealers-47xq1710z2.jpg.jpeg"
                  alt="HSO CCTV - Professional Installation"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="py-12 bg-gradient-to-r from-jet-black to-gray-900">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '15+', label: 'Years Experience', icon: 'workspace_premium' },
              { number: '500+', label: 'Happy Customers', icon: 'groups' },
              { number: '1000+', label: 'Installations', icon: 'task_alt' },
              { number: '24/7', label: 'Support Available', icon: 'support_agent' }
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="mb-3 flex justify-center">
                  <span className="material-symbols-outlined text-4xl text-premiummyello group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </span>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-premiummyello transition-colors">
                  {stat.number}
                </div>
                <div className="text-sm text-white/70 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-black/70 max-w-2xl mx-auto">
              Real experiences from satisfied customers across Andhra Pradesh
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Rajesh Kumar',
                location: 'Madanapalli',
                rating: 5,
                text: 'Excellent service! The installation was quick and professional. The cameras work perfectly and the team provided great support.',
                image: '/hso-works/006_dl-enterprises-ntr-road-madanapalle-cctv-dealers-2se1gsq9dc.jpg.jpeg'
              },
              {
                name: 'Priya Sharma',
                location: 'Tirupati',
                rating: 5,
                text: 'Very satisfied with HSO CCTV. Quality products and affordable prices. The after-sales support is outstanding.',
                image: '/hso-works/010_dl-enterprises-ntr-road-madanapalle-cctv-dealers-geb5usb91b.jpg.jpeg'
              },
              {
                name: 'Venkat Reddy',
                location: 'Chittoor',
                rating: 5,
                text: 'Best CCTV dealer in the region. Professional team, quality cameras, and excellent maintenance service. Highly recommended!',
                image: '/hso-works/012_dl-enterprises-ntr-road-madanapalle-cctv-dealers-b7etjg7c0g.jpg.jpeg'
              }
            ].map((testimonial, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden bg-gradient-to-br from-premiummyello to-yellow-300 flex-shrink-0">
                    <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-jet-black">
                      {testimonial.name.charAt(0)}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-black">{testimonial.name}</h3>
                    <p className="text-sm text-black/60">{testimonial.location}</p>
                    <div className="flex gap-1 mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-premiummyello text-sm">★</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-black/70 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <span className="text-xs text-black/50 font-medium">Verified Customer</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="section-padding bg-gradient-to-br from-premiummyello to-premiummyello-light">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-jet-black mb-6">
              Ready to Enhance Your Security?
            </h2>
            <p className="text-xl text-jet-black/80 mb-10">
              Get in touch with our experts for a free consultation and customized security solution
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 bg-jet-black text-white rounded-xl font-bold text-lg hover:bg-black hover:scale-105 transition-all shadow-xl flex items-center justify-center gap-3"
              >
                <span className="material-symbols-outlined">calendar_month</span>
                Schedule Consultation
              </Link>
              <a
                href="tel:+918282824138"
                className="w-full sm:w-auto px-8 py-4 bg-white text-jet-black rounded-xl font-bold text-lg hover:bg-white/90 hover:scale-105 transition-all shadow-xl flex items-center justify-center gap-3"
              >
                <span className="material-symbols-outlined">call</span>
                +91 82828 24138
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
