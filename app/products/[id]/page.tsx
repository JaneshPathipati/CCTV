'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { useCart } from '@/contexts/CartContext'
import { getProductImageUrl } from '@/lib/supabase'

type Product = {
  id: string
  name: string
  model_number: string
  category: string
  camera_type: string
  resolution: string
  audio?: string
  connectivity: string
  description?: string
  specifications?: {
    resolution?: string
    lens_type?: string
    field_of_view?: string
    night_vision?: string
    power_voltage?: string
    min_illumination?: string
    transmission?: string
    sensor?: string
    weatherproof?: string
    features?: string[]
    warranty?: string
    made_in?: string
  }
  special_features: string[]
  status: string
  image?: string
}

export default function ProductDetailPage() {
  const params = useParams()
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)
  const [addedToCart, setAddedToCart] = useState(false)
  const [showImageModal, setShowImageModal] = useState(false)
  const { addToCart } = useCart()

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const { supabase } = await import('@/lib/supabase')
        const { data, error } = await supabase
          .from('products')
          .select('*')
          .eq('id', params.id)
          .maybeSingle()

        if (error) throw error
        setProduct(data || null)
      } catch (error) {
        console.error('Error loading product:', error)
        setProduct(null)
      } finally {
        setLoading(false)
      }
    }
    
    loadProduct()
  }, [params.id])

  const handleAddToCart = () => {
    if (product) {
      addToCart({
        id: product.id,
        name: product.name,
        model_number: product.model_number,
        image: product.image || '',
        category: product.category,
      })
      setAddedToCart(true)
      setTimeout(() => setAddedToCart(false), 2000)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin w-12 h-12 border-4 border-premiummyello border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-black/60">Loading product details...</p>
        </div>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="min-h-screen pt-32 pb-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl font-bold text-black mb-4">Product Not Found</h1>
          <p className="text-black/60 mb-8">The product you're looking for doesn't exist.</p>
          <Link href="/products" className="btn-primary px-8 py-3">
            Back to Products
          </Link>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* Breadcrumb */}
      <section className="pt-32 pb-8 bg-gradient-to-br from-yellow-50 to-white">
        <div className="container-custom">
          <div className="flex items-center gap-2 text-sm text-black/60 mb-4">
            <Link href="/" className="hover:text-premiummyello">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-premiummyello">Products</Link>
            <span>/</span>
            <span className="text-black">{product.name}</span>
          </div>
        </div>
      </section>

      {/* Product Detail */}
      <section className="pb-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Product Image - Sticky */}
            <div className="lg:sticky lg:top-32 h-fit">
              <div 
                className="bg-white rounded-2xl overflow-hidden border-2 border-premiummyello/20 cursor-zoom-in hover:border-premiummyello/40 transition-colors"
                onClick={() => product.image && setShowImageModal(true)}
              >
                <div className="relative aspect-square">
                  {product.image ? (
                    <>
                      <Image
                        src={getProductImageUrl(product.image)}
                        alt={product.name}
                        fill
                        className="object-contain p-4"
                        unoptimized
                      />
                      <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                        Click to zoom
                      </div>
                    </>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-yellow-50">
                      <span className="material-symbols-outlined text-premiummyello text-9xl">videocam</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Product Info - Scrollable */}
            <div className="max-h-[calc(100vh-8rem)] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-premiummyello scrollbar-track-yellow-50">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-premiummyello/10 text-premiummyello text-sm font-semibold rounded-full">
                  {product.category}
                </span>
                <span className="px-3 py-1 bg-black/5 text-black/60 text-sm font-semibold rounded-full">
                  {product.camera_type}
                </span>
                {product.specifications?.made_in && (
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-semibold rounded-full">
                    Made in {product.specifications.made_in}
                  </span>
                )}
              </div>

              <h1 className="text-3xl sm:text-4xl font-bold text-black mb-2">
                {product.name}
              </h1>
              
              <p className="text-lg text-black/60 mb-6">
                Model: {product.model_number}
              </p>

              {product.description && (
                <p className="text-lg text-black/80 leading-relaxed mb-8">
                  {product.description}
                </p>
              )}

              {/* Quick Specs */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-black mb-4">Quick Specifications</h3>
                <div className="grid grid-cols-2 gap-4">
                  {product.specifications?.resolution && (
                    <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg">
                      <span className="material-symbols-outlined text-premiummyello">high_quality</span>
                      <div>
                        <p className="text-xs text-black/60 font-semibold">Resolution</p>
                        <p className="text-sm text-black font-bold">{product.specifications.resolution}</p>
                      </div>
                    </div>
                  )}
                  {product.specifications?.lens_type && (
                    <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg">
                      <span className="material-symbols-outlined text-premiummyello">camera</span>
                      <div>
                        <p className="text-xs text-black/60 font-semibold">Lens Type</p>
                        <p className="text-sm text-black font-bold">{product.specifications.lens_type}</p>
                      </div>
                    </div>
                  )}
                  {product.specifications?.field_of_view && (
                    <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg">
                      <span className="material-symbols-outlined text-premiummyello">panorama</span>
                      <div>
                        <p className="text-xs text-black/60 font-semibold">Field of View</p>
                        <p className="text-sm text-black font-bold">{product.specifications.field_of_view}</p>
                      </div>
                    </div>
                  )}
                  {product.specifications?.night_vision && (
                    <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg">
                      <span className="material-symbols-outlined text-premiummyello">nightlight</span>
                      <div>
                        <p className="text-xs text-black/60 font-semibold">Night Vision</p>
                        <p className="text-sm text-black font-bold">{product.specifications.night_vision}</p>
                      </div>
                    </div>
                  )}
                  {product.specifications?.power_voltage && (
                    <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg">
                      <span className="material-symbols-outlined text-premiummyello">power</span>
                      <div>
                        <p className="text-xs text-black/60 font-semibold">Power Voltage</p>
                        <p className="text-sm text-black font-bold">{product.specifications.power_voltage}</p>
                      </div>
                    </div>
                  )}
                  {product.specifications?.min_illumination && (
                    <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg">
                      <span className="material-symbols-outlined text-premiummyello">light_mode</span>
                      <div>
                        <p className="text-xs text-black/60 font-semibold">Min. Illumination</p>
                        <p className="text-sm text-black font-bold">{product.specifications.min_illumination}</p>
                      </div>
                    </div>
                  )}
                  {product.specifications?.sensor && (
                    <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg">
                      <span className="material-symbols-outlined text-premiummyello">sensors</span>
                      <div>
                        <p className="text-xs text-black/60 font-semibold">Sensor</p>
                        <p className="text-sm text-black font-bold">{product.specifications.sensor}</p>
                      </div>
                    </div>
                  )}
                  {product.specifications?.weatherproof && (
                    <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg">
                      <span className="material-symbols-outlined text-premiummyello">water_drop</span>
                      <div>
                        <p className="text-xs text-black/60 font-semibold">Weatherproof</p>
                        <p className="text-sm text-black font-bold">{product.specifications.weatherproof}</p>
                      </div>
                    </div>
                  )}
                  {product.specifications?.transmission && (
                    <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg">
                      <span className="material-symbols-outlined text-premiummyello">cable</span>
                      <div>
                        <p className="text-xs text-black/60 font-semibold">Transmission</p>
                        <p className="text-sm text-black font-bold">{product.specifications.transmission}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Additional Features */}
              {product.specifications?.features && product.specifications.features.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-black mb-4">Additional Features</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {product.specifications.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-premiummyello text-lg">check_circle</span>
                        <span className="text-black/80 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Warranty */}
              {product.specifications?.warranty && (
                <div className="mb-8 p-4 bg-gradient-to-br from-premiummyello/10 to-white border-2 border-premiummyello rounded-xl">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-premiummyello text-3xl">shield</span>
                    <div>
                      <h4 className="font-bold text-black">Warranty</h4>
                      <p className="text-black/70">{product.specifications.warranty}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* CTAs */}
              <div className="flex flex-col gap-4 mb-8">
                <button
                  onClick={handleAddToCart}
                  className={`w-full px-8 py-4 rounded-xl font-bold text-center transition-all ${
                    addedToCart
                      ? 'bg-green-600 text-white'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  {addedToCart ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      Added to Cart!
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                        />
                      </svg>
                      Add to Cart
                    </span>
                  )}
                </button>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="flex-1 px-8 py-4 bg-premiummyello text-jet-black rounded-xl font-bold text-center hover:bg-premiummyello-light transition-all"
                  >
                    Request Quote
                  </Link>
                  <a
                    href="tel:+918282824138"
                    className="flex-1 px-8 py-4 border-2 border-premiummyello text-black rounded-xl font-bold text-center hover:bg-premiummyello hover:text-jet-black transition-all"
                  >
                    Call Now
                  </a>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 p-6 bg-yellow-50 rounded-xl">
                <div className="text-center">
                  <span className="material-symbols-outlined text-premiummyello text-3xl mb-2 block">verified</span>
                  <p className="text-xs text-black/70 font-semibold">Authorized Dealer</p>
                </div>
                <div className="text-center">
                  <span className="material-symbols-outlined text-premiummyello text-3xl mb-2 block">local_shipping</span>
                  <p className="text-xs text-black/70 font-semibold">Fast Delivery</p>
                </div>
                <div className="text-center">
                  <span className="material-symbols-outlined text-premiummyello text-3xl mb-2 block">support_agent</span>
                  <p className="text-xs text-black/70 font-semibold">24/7 Support</p>
                </div>
              </div>
            </div>
          </div>


          {/* CTA Section */}
          <div className="mt-16 p-8 bg-gradient-to-br from-premiummyello to-premiummyello-light rounded-2xl text-center">
            <h3 className="text-2xl font-bold text-jet-black mb-4">
              Interested in this product?
            </h3>
            <p className="text-jet-black/80 mb-6">
              Get a free consultation and customized quote for your security needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-jet-black text-premiummyello rounded-xl font-bold hover:bg-black transition-all"
              >
                Request Free Quote
              </Link>
              <a
                href="tel:+918282824138"
                className="px-8 py-4 bg-white text-jet-black rounded-xl font-bold hover:bg-white/90 transition-all"
              >
                Call +91 82828 24138
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Image Zoom Modal */}
      {showImageModal && product?.image && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setShowImageModal(false)}
        >
          <button
            onClick={() => setShowImageModal(false)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            aria-label="Close"
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div 
            className="relative w-full max-w-6xl h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={getProductImageUrl(product.image)}
              alt={product.name}
              fill
              className="object-contain"
              unoptimized
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-lg text-sm">
              {product.name}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
