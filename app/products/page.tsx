'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { useCart } from '@/contexts/CartContext'
import { getProductImageUrl } from '@/lib/supabase'

// Product data - in production, this should come from an API or be imported properly
const productsData = {
  categories: [
    {
      name: "HD Camera",
      products: [
        { id: "HD2002PTA", model: "ST-VD HD2002PTA", name: "HSO 2MP HD Audio PT Dome Camera", type: "Dome", resolution: "2MP", features: ["Audio", "PT (Pan/Tilt)"], category: "HD Camera" },
        { id: "HD2002WAS", model: "ST-VB HD2002WAS", name: "HSO 2MP HD 2-Way Audio Bullet Camera", type: "Bullet", resolution: "2MP", features: ["2-Way Audio"], category: "HD Camera" },
        { id: "HD2002WAS-D", model: "ST-VD HD2002WAS", name: "HSO 2MP HD 2-Way Audio Dome Camera", type: "Dome", resolution: "2MP", features: ["2-Way Audio"], category: "HD Camera" },
        { id: "HD5002WLA-FE", model: "ST-VD HD5002WLA-FE", name: "HSO 5MP HD Color Audio Dome Fisheye Camera", type: "Dome", resolution: "5MP", features: ["Color", "Audio", "Fisheye"], category: "HD Camera" },
        { id: "HD5002WLA-FE-B", model: "ST-VB HD5002WLA-FE", name: "HSO 5MP HD Color Audio Bullet Fisheye Camera", type: "Bullet", resolution: "5MP", features: ["Color", "Audio", "Fisheye"], category: "HD Camera" },
        { id: "HD2001M-WLA", model: "ST-VB HD2001M-WLA", name: "HSO Color 2MP In-Built Audio HD Metal Bullet Camera", type: "Bullet", resolution: "2MP", features: ["Color", "In-Built Audio", "Metal"], category: "HD Camera" },
        { id: "HD2002WLA12", model: "ST-VB HD2002WLA12", name: "HSO 2MP HD Color In-Built Audio Bullet Camera", type: "Bullet", resolution: "2MP", lens: "12mm", features: ["Color", "In-Built Audio"], category: "HD Camera" },
        { id: "HD2002WLA8", model: "ST-VB HD2002WLA8", name: "HSO 2MP HD Color In-Built Audio Bullet Camera", type: "Bullet", resolution: "2MP", lens: "8mm", features: ["Color", "In-Built Audio"], category: "HD Camera" },
        { id: "HD2001WLA-OSD-B", model: "ST-VB HD2001WLA-OSD", name: "HSO 2MP HD Color and Audio Bullet Camera with OSD Button", type: "Bullet", resolution: "2MP", features: ["Color", "Audio", "OSD Button"], category: "HD Camera" },
        { id: "HD2001WLA-OSD-D", model: "ST-VD HD2001WLA-OSD", name: "HSO 2MP HD Color and Audio Dome Camera with OSD Button", type: "Dome", resolution: "2MP", features: ["Color", "Audio", "OSD Button"], category: "HD Camera" },
        { id: "HD2002WLA-FE", model: "ST-VB HD2002WLA-FE", name: "HSO 2MP HD Color Audio Bullet Fisheye Camera", type: "Bullet", resolution: "2MP", features: ["Color", "Audio", "Fisheye"], category: "HD Camera" },
        { id: "HD2001WLA-B", model: "ST-VB HD2001WLA", name: "HSO 2MP HD Color and Audio Bullet Camera", type: "Bullet", resolution: "2MP", features: ["Color", "Audio"], category: "HD Camera" },
        { id: "HD2001WLA-D", model: "ST-VD HD2001WLA", name: "HSO 2MP HD Color and Audio Dome Camera", type: "Dome", resolution: "2MP", features: ["Color", "Audio"], category: "HD Camera" },
        { id: "HD5002WLA-D", model: "ST-VD HD5002WLA", name: "HSO Color 5MP In-built Audio HD Dome Camera", type: "Dome", resolution: "5MP", features: ["Color", "In-Built Audio"], category: "HD Camera" },
        { id: "HD2002WLA-FE-D", model: "ST-VD HD2002WLA-FE", name: "HSO 2MP HD Color Audio Dome Fisheye Camera", type: "Dome", resolution: "2MP", features: ["Color", "Audio", "Fisheye"], category: "HD Camera" },
        { id: "HD2002DLA-D", model: "ST-VD HD2002DLA", name: "HSO 2MP HD Dual Light Audio Dome Camera", type: "Dome", resolution: "2MP", features: ["Dual Light", "Audio"], category: "HD Camera" },
        { id: "HD2002DLA-B", model: "ST-VB HD2002DLA", name: "HSO 2MP HD Dual Light Audio Bullet Camera", type: "Bullet", resolution: "2MP", features: ["Dual Light", "Audio"], category: "HD Camera" },
        { id: "HD5002DLA-D", model: "ST-VD HD5002DLA", name: "HSO 5MP HD Dual Light Audio Dome Camera", type: "Dome", resolution: "5MP", features: ["Dual Light", "Audio"], category: "HD Camera" },
        { id: "HD5002DLA-B", model: "ST-VB HD5002DLA", name: "HSO 5MP HD Dual Light Audio Bullet Camera", type: "Bullet", resolution: "5MP", features: ["Dual Light", "Audio"], category: "HD Camera" },
        { id: "HD5002WLA8", model: "ST-VB HD5002WLA8", name: "HSO 5MP HD Color In-Built Audio Bullet Camera", type: "Bullet", resolution: "5MP", lens: "8mm", features: ["Color", "In-Built Audio"], category: "HD Camera" },
        { id: "HD5002WLA12", model: "ST-VB HD5002WLA12", name: "HSO 5MP HD Color In-Built Audio Bullet Camera", type: "Bullet", resolution: "5MP", lens: "12mm", features: ["Color", "In-Built Audio"], category: "HD Camera" },
        { id: "HD2002WLA-D", model: "ST-VD HD2002WLA", name: "HSO 2MP HD Color In-Built Audio Dome Camera", type: "Dome", resolution: "2MP", features: ["Color", "In-Built Audio"], category: "HD Camera" },
        { id: "HD2002WLA6", model: "ST-VB HD2002WLA6", name: "HSO 2MP HD Color In-Built Audio Bullet Camera", type: "Bullet", resolution: "2MP", lens: "6mm", features: ["Color", "In-Built Audio"], category: "HD Camera" },
        { id: "HD2002WLA", model: "ST-VB HD2002WLA", name: "HSO Color 2MP In-Built Audio HD Bullet Camera", type: "Bullet", resolution: "2MP", features: ["Color", "In-Built Audio"], category: "HD Camera" },
        { id: "HD5002WLA", model: "ST-VB HD5002WLA", name: "HSO 5MP HD Color In-Built Audio Bullet Camera", type: "Bullet", resolution: "5MP", features: ["Color", "In-Built Audio"], category: "HD Camera" },
        { id: "HD5002WLA6", model: "ST-VB HD5002WLA6", name: "HSO 5MP HD Color In-Built Audio Bullet Camera", type: "Bullet", resolution: "5MP", lens: "6mm", features: ["Color", "In-Built Audio"], category: "HD Camera" },
      ]
    },
    {
      name: "IP Camera",
      products: [
        { 
          id: "IP4002DES-NEW", 
          model: "ST-VD IP4002DES", 
          name: "4MP IP 2-Way Audio Dome Camera (Supports External Speaker)", 
          type: "Dome", 
          resolution: "4MP", 
          lens: "2.8mm Fixed",
          features: ["Two-Way Audio", "Supports External Speaker", "Built-in Mic", "Smart Dual Night Vision", "Metal Body", "ONVIF Support", "POE", "MAKE IN INDIA"], 
          category: "IP Camera",
          description: "TWO-WAY NETWORK EYEBALL CAMERA - Supports External Speaker, Network Dome Camera with High-Definition Image Sensor",
          nightVision: "25mtr",
          ipAddress: "192.168.1.100",
          power: "12V DC",
          warranty: "1 Year Replacement + 1 Year Repair Warranty",
          image: "IP-1.png"
        },
        { 
          id: "IP4002DES-BULLET", 
          model: "ST-VB IP4002DES", 
          name: "4MP IP 2-Way Audio Bullet Camera (Supports External Speaker)", 
          type: "Bullet", 
          resolution: "4MP", 
          lens: "3.6mm Fixed",
          features: ["Two-Way Audio", "Supports External Speaker", "Built-in Mic", "Smart Dual Night Vision", "Metal Body", "ONVIF Support", "POE", "MAKE IN INDIA"], 
          category: "IP Camera",
          description: "TWO-WAY NETWORK BULLET CAMERA - Supports External Speaker with High-Definition Image Sensor",
          nightVision: "30mtr",
          power: "12V DC",
          warranty: "1 Year Replacement + 1 Year Repair Warranty",
          image: "IP-2.png"
        },
        { id: "IP4002DES-D", model: "ST-VD IP4002DES", name: "HSO 4MP IP 2-Way Audio Dome Camera", type: "Dome", resolution: "4MP", features: ["2-Way Audio", "Supports External Speaker"], category: "IP Camera" },
        { id: "IP4002DES-B", model: "ST-VB IP4002DES", name: "HSO 4MP IP 2-Way Audio Bullet Camera", type: "Bullet", resolution: "4MP", features: ["2-Way Audio", "Supports External Speaker"], category: "IP Camera" },
        { id: "IP4002DAS-B", model: "ST-VB IP4002DAS", name: "HSO 4MP IP 2-Way Audio Bullet Camera", type: "Bullet", resolution: "4MP", features: ["2-Way Audio"], category: "IP Camera" },
        { id: "IP4002DAS-D", model: "ST-VD IP4002DAS", name: "HSO 4MP IP 2-Way Audio Dome Camera", type: "Dome", resolution: "4MP", features: ["2-Way Audio"], category: "IP Camera" },
        { id: "IP6002DL12", model: "ST-VB IP6002DL12", name: "HSO 6MP IP Bullet Camera", type: "Bullet", resolution: "6MP", lens: "12mm", features: ["Color"], category: "IP Camera" },
        { id: "IP6002DL8", model: "ST-VB IP6002DL8", name: "HSO 6MP IP Bullet Camera", type: "Bullet", resolution: "6MP", lens: "8mm", features: ["Color"], category: "IP Camera" },
        { id: "IP2002DL-B", model: "ST-VB IP2002DL", name: "HSO 2MP IP In-Built Audio and Color Bullet Camera", type: "Bullet", resolution: "2MP", features: ["In-Built Audio", "Color"], category: "IP Camera" },
        { id: "IP2002DL-D", model: "ST-VD IP2002DL", name: "HSO 2MP IP In-Built Audio and Color Dome Camera", type: "Dome", resolution: "2MP", features: ["In-Built Audio", "Color"], category: "IP Camera" },
        { id: "IP6002DL-FE", model: "ST-VB IP6002DL-FE", name: "HSO 6MP IP Color Fisheye Bullet Camera", type: "Bullet", resolution: "6MP", features: ["Color", "Fisheye"], category: "IP Camera" },
        { id: "IP6002DL", model: "ST-VB IP6002DL", name: "HSO 6MP IP In-Built Audio and Color Bullet Camera", type: "Bullet", resolution: "6MP", features: ["In-Built Audio", "Color"], category: "IP Camera" },
        { id: "IP6002DL6", model: "ST-VB IP6002DL6", name: "HSO 6MP IP In-Built Audio and Color Bullet Camera", type: "Bullet", resolution: "6MP", lens: "6mm", features: ["In-Built Audio", "Color"], category: "IP Camera" },
        { id: "IP6002DL-D", model: "ST-VD IP6002DL", name: "HSO 6MP IP In-Built Audio and Color Dome Camera", type: "Dome", resolution: "6MP", features: ["In-Built Audio", "Color"], category: "IP Camera" },
        { id: "IP4002DVFL", model: "ST-VB IP4002DVFL", name: "HSO 4MP IP Motorized Vari-focal Bullet Camera", type: "Bullet", resolution: "4MP", lens: "2.8 - 13.5 mm", features: ["Motorized Vari-focal"], category: "IP Camera" },
        { id: "IP8002LL-D", model: "ST-VD IP8002LL", name: "HSO 8MP IP Low Light Color Dome Camera", type: "Dome", resolution: "8MP", features: ["Low Light", "Color"], category: "IP Camera" },
        { id: "IP8002LL-B", model: "ST-VB IP8002LL", name: "HSO 8MP IP Low Light Color Bullet Camera", type: "Bullet", resolution: "8MP", features: ["Low Light", "Color"], category: "IP Camera" },
        { id: "IP3001DL6", model: "ST-VB IP3001DL6", name: "HSO 3MP IP Bullet Camera", type: "Bullet", resolution: "3MP", lens: "6mm", features: ["Color"], category: "IP Camera" },
        { id: "IP4002LL-D", model: "ST-VD IP4002LL", name: "HSO 4MP IP Low Light Color Dome Camera", type: "Dome", resolution: "4MP", features: ["Low Light", "Color"], category: "IP Camera" },
        { id: "IP4002LL-B", model: "ST-VB IP4002LL", name: "HSO 4MP IP Low Light Color Bullet Camera", type: "Bullet", resolution: "4MP", features: ["Low Light", "Color"], category: "IP Camera" },
        { id: "IP4002DL-FE-B", model: "ST-VB IP4002DL-FE", name: "HSO 4MP IP Color Fisheye Bullet Camera", type: "Bullet", resolution: "4MP", features: ["Color", "Fisheye"], category: "IP Camera" },
        { id: "IP4002DL-FE-D", model: "ST-VD IP4002DL-FE", name: "HSO 4MP IP Color Fisheye Dome Camera", type: "Dome", resolution: "4MP", features: ["Color", "Fisheye"], category: "IP Camera" },
        { id: "IP3001DL-D", model: "ST-VD IP3001DL", name: "HSO 3MP IP Dome Camera", type: "Dome", resolution: "3MP", features: ["Color"], category: "IP Camera" },
        { id: "IP3001DL-B", model: "ST-VB IP3001DL", name: "HSO 3MP IP Bullet Camera", type: "Bullet", resolution: "3MP", features: ["Color"], category: "IP Camera" },
        { id: "IP4002DXA-D", model: "ST-VD IP4002DXA", name: "HSO 4MP IP Dome Alarm Camera", type: "Dome", resolution: "4MP", features: ["Alarm"], category: "IP Camera" },
        { id: "IP4002DL12", model: "ST-VB IP4002DL12", name: "HSO 4MP IP Bullet Camera", type: "Bullet", resolution: "4MP", lens: "12mm", features: ["Color"], category: "IP Camera" },
        { id: "IP4002DL8", model: "ST-VB IP4002DL8", name: "HSO 4MP IP Bullet Camera", type: "Bullet", resolution: "4MP", lens: "8mm", features: ["Color"], category: "IP Camera" },
        { id: "IP4002DL6", model: "ST-VB IP4002DL6", name: "HSO 4MP IP Bullet Camera", type: "Bullet", resolution: "4MP", lens: "6mm", features: ["Color"], category: "IP Camera" },
        { id: "IP4002DL-B", model: "ST-VB IP4002DL", name: "HSO 4MP Dual Smart LED IP Color Bullet Camera", type: "Bullet", resolution: "4MP", features: ["Dual Smart LED", "Color"], category: "IP Camera" },
        { id: "IP4002DL-D", model: "ST-VD IP4002DL", name: "HSO 4MP Dual Smart LED IP Color Dome Camera", type: "Dome", resolution: "4MP", features: ["Dual Smart LED", "Color"], category: "IP Camera" },
        { id: "IP4002DRSL", model: "ST-VB IP4002DRSL", name: "HSO 4MP IP WDR Color + Audio Bullet Camera", type: "Bullet", resolution: "4MP", features: ["WDR", "Color", "Audio"], category: "IP Camera" },
        { id: "IP4002DXA-B", model: "ST-VB IP4002DXA", name: "HSO 4MP IP Bullet Alarm Camera", type: "Bullet", resolution: "4MP", features: ["Alarm"], category: "IP Camera" },
        { id: "IP2002DL-W", model: "ST-VB IP2002DL-W", name: "HSO 2MP IP In-Built Audio and Color Bullet Camera", type: "Bullet", resolution: "2MP", features: ["In-Built Audio", "Color"], category: "IP Camera" },
        { id: "IPDA41M-B", model: "ST-VB IPDA41M", name: "HSO 4MP IP Star Light Color Bullet Camera", type: "Bullet", resolution: "4MP", features: ["Star Light", "Color"], category: "IP Camera" },
        { id: "IPDA41M-D", model: "ST-VD IPDA41M", name: "HSO 4MP IP Star Light Color Dome Camera", type: "Dome", resolution: "4MP", features: ["Star Light", "Color"], category: "IP Camera" },
        { id: "IP5001DL6", model: "ST-VB IP5001DL6", name: "HSO 5MP IP In-Built Audio and Color Bullet Camera", type: "Bullet", resolution: "5MP", lens: "6mm", features: ["In-Built Audio", "Color"], category: "IP Camera" },
        { id: "IP8002DVFL", model: "ST-VB IP8002DVFL", name: "HSO 8MP IP Motorized Vari-focal Bullet Camera", type: "Bullet", resolution: "8MP", lens: "2.8 - 13.5 mm", features: ["Motorized Vari-focal"], category: "IP Camera" },
        { id: "IP5004DVFL", model: "ST-VB IP5004DVFL", name: "HSO 5MP IP Motorized Vari-focal Bullet Camera", type: "Bullet", resolution: "5MP", lens: "2.8 - 13.5 mm", features: ["Motorized Vari-focal"], category: "IP Camera" },
        { id: "IP12002LL", model: "ST-VB IP12002LL", name: "HSO 12MP IP Low Light Color Bullet Camera", type: "Bullet", resolution: "12MP", features: ["Low Light", "Color"], category: "IP Camera" },
        { id: "IP4002DRSL-D", model: "ST-VD IP4002DRSL", name: "HSO 4MP IP WDR Color + Audio Dome Camera", type: "Dome", resolution: "4MP", features: ["WDR", "Color", "Audio"], category: "IP Camera" },
        { id: "IP5001DL", model: "ST-VB IP5001DL", name: "HSO 5MP IP In-Built Audio and Color Bullet Camera", type: "Bullet", resolution: "5MP", features: ["In-Built Audio", "Color"], category: "IP Camera" },
        { id: "IP5001DL-D", model: "ST-VD IP5001DL", name: "HSO 5MP IP In-Built Audio and Color Dome Camera", type: "Dome", resolution: "5MP", features: ["In-Built Audio", "Color"], category: "IP Camera" },
        { id: "IP6002DL-FE-D", model: "ST-VD IP6002DL-FE", name: "HSO 6MP IP Color Fisheye Dome Camera", type: "Dome", resolution: "6MP", features: ["Color", "Fisheye"], category: "IP Camera" },
        { id: "IP6002DVFL", model: "ST-VB IP6002DVFL", name: "HSO 6MP IP Motorized Vari-focal Bullet Camera", type: "Bullet", resolution: "6MP", lens: "2.8 - 13.5 mm", features: ["Motorized Vari-focal"], category: "IP Camera" },
      ]
    },
    {
      name: "WiFi & 4G Camera",
      products: [
        { id: "IP3002DL-WF-D", model: "ST-VD IP3002DL-WF", name: "HSO 3MP WIFI Dome Camera", type: "Dome", resolution: "3MP", features: ["WiFi"], category: "WiFi & 4G Camera" },
        { id: "IP3002DL-WF-B", model: "ST-VB IP3002DL-WF", name: "HSO 3MP WIFI Bullet Camera", type: "Bullet", resolution: "3MP", features: ["WiFi"], category: "WiFi & 4G Camera" },
        { id: "IP3002DL-4G-B", model: "ST-VB IP3002DL-4G", name: "HSO 3MP 4G Sim Bullet Camera", type: "Bullet", resolution: "3MP", features: ["4G SIM"], category: "WiFi & 4G Camera" },
        { id: "IP3002DL-4G-D", model: "ST-VD IP3002DL-4G", name: "HSO 3MP 4G Sim Dome Camera", type: "Dome", resolution: "3MP", features: ["4G SIM"], category: "WiFi & 4G Camera" },
      ]
    }
  ]
}

type Product = {
  id: string
  name: string
  model_number: string
  category: 'HD Camera' | 'IP Camera' | 'WiFi & 4G Camera'
  camera_type: 'Dome' | 'Bullet' | 'Fisheye' | 'PT' | 'Varifocal'
  resolution: '2MP' | '3MP' | '4MP' | '5MP' | '6MP' | '8MP' | '12MP'
  audio: 'None' | 'In-Built' | '2-Way'
  connectivity: 'HD' | 'IP' | 'WiFi' | '4G'
  special_features: string[]
  status: 'active'
  lens?: string
  image?: string
}

type SortOption = 'default' | 'price-low' | 'price-high' | 'name-asc' | 'name-desc'

// Replace Velvu with HSO in product names
const getHSOProductName = (name: string) => {
  return name.replace(/Velvu/gi, 'HSO').replace(/VELVU/gi, 'HSO')
}

function ProductsContent() {
  const searchParams = useSearchParams()
  const categoryParam = searchParams.get('category')
  
  const { addToCart } = useCart()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [sortBy, setSortBy] = useState<SortOption>('default')
  const [allProducts, setAllProducts] = useState<Product[]>([])
  const [addedProductId, setAddedProductId] = useState<string | null>(null)

  useEffect(() => {
    // Update selected category when URL parameter changes
    setSelectedCategory(categoryParam || 'all')
  }, [categoryParam])

  useEffect(() => {
    // Load products from Supabase database
    const loadProducts = async () => {
      try {
        const { supabase } = await import('@/lib/supabase')
        const { data, error } = await supabase
          .from('products')
          .select('*')
          .eq('status', 'active')
          .order('created_at', { ascending: false })

        if (error) throw error
        setAllProducts(data || [])
      } catch (error) {
        console.error('Error loading products:', error)
        setAllProducts([])
      }
    }
    
    loadProducts()
  }, [])

  // Filter and sort products
  const filteredProducts = allProducts
    .filter((product) => {
      // Category filter
      if (selectedCategory !== 'all') {
        const categoryMap: Record<string, string> = {
          'hd': 'HD Camera',
          'ip': 'IP Camera',
          'wifi': 'WiFi & 4G Camera',
        }
        if (product.category !== categoryMap[selectedCategory]) return false
      }

      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase()
        const productName = product.name.toLowerCase()
        const model = product.model_number.toLowerCase()
        if (!productName.includes(query) && !model.includes(query)) return false
      }

      return true
    })
    .sort((a, b) => {
      if (sortBy === 'name-asc') {
        return a.name.localeCompare(b.name)
      }
      if (sortBy === 'name-desc') {
        return b.name.localeCompare(a.name)
      }
      return 0
    })

  const categories = [
    { id: 'all', name: 'All Products', icon: 'grid_view' },
    { id: 'hd', name: 'HD Camera', icon: 'videocam' },
    { id: 'ip', name: 'IP Camera', icon: 'monitor' },
    { id: 'wifi', name: 'WiFi & 4G Camera', icon: 'router' },
  ]

  const getFeatureBadges = (specialFeatures: string[]) => {
    const badgeMap: Record<string, string> = {
      '2-Way': 'Two-way',
      'Fisheye': 'Fish-eye',
      'Motorized Varifocal': 'Vari-focal',
      'PT': 'PT',
      'WDR': 'WDR',
      'Low Light': 'Low Light',
      'Star Light': 'Star Light',
    }

    const badges: string[] = []
    specialFeatures.forEach((feature) => {
      if (badgeMap[feature]) {
        badges.push(badgeMap[feature])
      }
    })
    return badges
  }

  return (
    <>
      {/* Header Section */}
      <section className="relative pt-32 pb-12 bg-gradient-to-br from-yellow-50 to-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-4">
              Our <span className="text-black">Products</span>
            </h1>
            <p className="text-xl text-black/70 leading-relaxed mb-8">
              Premium CCTV cameras and security equipment from HSO CCTV
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  placeholder="Search products, models..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 px-4 py-3 bg-white border-2 border-yellow-200 rounded-xl text-black placeholder-black/50 focus:outline-none focus:border-premiummyello"
                />
                <button className="px-6 py-3 bg-premiummyello text-jet-black rounded-xl font-semibold hover:bg-premiummyello-light transition-colors">
                  <span className="material-symbols-outlined">search</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="py-6 border-y border-yellow-100 bg-white sticky top-20 z-40">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:flex md:flex-wrap items-center justify-center gap-3 md:gap-4">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={category.id === 'all' ? '/products' : `/products?category=${category.id}`}
                className={`flex items-center justify-center gap-2 px-4 md:px-6 py-3 rounded-xl font-semibold text-sm transition-all ${
                  selectedCategory === category.id
                    ? 'bg-premiummyello text-jet-black shadow-lg'
                    : 'bg-white text-black/70 hover:bg-yellow-50 border-2 border-yellow-100'
                }`}
              >
                <span className="material-symbols-outlined text-xl">{category.icon}</span>
                <span className="whitespace-nowrap">{category.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Sort & Results Count */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
            <div className="text-black/70">
              Showing <span className="font-bold text-black">{filteredProducts.length}</span> products
            </div>
            <div className="flex items-center gap-3">
              <label className="text-sm text-black/70 font-medium">Sort By:</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="px-4 py-2 bg-white border-2 border-yellow-200 rounded-xl text-black focus:outline-none focus:border-premiummyello"
              >
                <option value="default">Default</option>
                <option value="name-asc">Name (A-Z)</option>
                <option value="name-desc">Name (Z-A)</option>
              </select>
            </div>
          </div>

          {/* Products Grid - 4 columns on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => {
              const badges = getFeatureBadges(product.special_features)

              return (
                <div
                  key={product.id}
                  className="relative bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-200/50 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 group overflow-hidden"
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-premiummyello/0 to-premiummyello/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  <div className="relative z-10">
                  {/* Product Image */}
                  <div className="w-full aspect-square bg-white rounded-xl mb-4 flex items-center justify-center overflow-hidden relative">
                    <Image
                      src={getProductImageUrl(product.image)}
                      alt={product.name}
                      fill
                      className="object-contain p-4 z-10"
                      unoptimized
                      onError={(e) => {
                        // Hide image on error, show fallback icon
                        const target = e.target as HTMLImageElement
                        target.style.display = 'none'
                      }}
                    />
                    <span className="material-symbols-outlined text-6xl text-black/30 absolute z-0">
                      videocam
                    </span>
                  </div>

                  {/* Badges */}
                  {badges.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-3">
                      {badges.map((badge, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-premiummyello/10 text-black text-[10px] font-bold uppercase tracking-wider rounded"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Product Name */}
                  <h3 className="text-base font-bold text-black mb-2 line-clamp-2 group-hover:text-black transition-colors">
                    {product.name}
                  </h3>

                  {/* Product Code */}
                  <p className="text-xs text-black/60 mb-2 font-mono">{product.id}</p>

                  {/* Specs */}
                  <div className="space-y-1 mb-4">
                    <p className="text-xs text-black/70">
                      <span className="font-semibold">Resolution:</span> {product.resolution}
                    </p>
                    <p className="text-xs text-black/70">
                      <span className="font-semibold">Type:</span> {product.camera_type}
                    </p>
                    {product.lens && (
                      <p className="text-xs text-black/70">
                        <span className="font-semibold">Lens:</span> {product.lens}
                      </p>
                    )}
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        addToCart({
                          id: product.id,
                          name: product.name,
                          model_number: product.model_number,
                          image: product.image || 'placeholder.png',
                          category: product.category,
                        })
                        setAddedProductId(product.id)
                        setTimeout(() => setAddedProductId(null), 1500)
                      }}
                      className={`flex-1 px-3 py-2 rounded-lg font-semibold text-xs text-center transition-colors flex items-center justify-center gap-1 ${
                        addedProductId === product.id
                          ? 'bg-green-600 text-white'
                          : 'bg-blue-600 text-white hover:bg-blue-700'
                      }`}
                    >
                      {addedProductId === product.id ? (
                        <>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-4 h-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M4.5 12.75l6 6 9-13.5"
                            />
                          </svg>
                          Added
                        </>
                      ) : (
                        <>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-4 h-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                            />
                          </svg>
                          Add
                        </>
                      )}
                    </button>
                    <Link
                      href={`/products/${product.id}`}
                      className="flex-1 px-3 py-2 bg-premiummyello text-jet-black rounded-lg font-semibold text-xs text-center hover:bg-premiummyello-light transition-colors"
                    >
                      Details
                    </Link>
                  </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* No Results */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <span className="material-symbols-outlined text-6xl text-black/30 mb-4 block">
                search_off
              </span>
              <h3 className="text-xl font-bold text-black mb-2">No products found</h3>
              <p className="text-black/70">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}

export default function ProductsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen pt-32 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin w-12 h-12 border-4 border-premiummyello border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-gray-600">Loading products...</p>
        </div>
      </div>
    }>
      <ProductsContent />
    </Suspense>
  )
}
