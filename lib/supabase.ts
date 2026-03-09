import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Supabase project URL — hardcoded as a reliable fallback (also inlined at build via NEXT_PUBLIC_)
const SUPABASE_PROJECT_URL = 'https://xfojwfbxxibqwhilyycs.supabase.co'

// Helper function to get product image URL
export function getProductImageUrl(imagePath: string | null | undefined): string {
  if (!imagePath) {
    return '/placeholder-camera.png'
  }

  // If it's already a full URL, return it as-is
  if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
    return imagePath
  }

  // Check if it's a Supabase Storage file (timestamp pattern like -1771144698862)
  const isSupabaseFile = /\-\d{13}\.(png|jpg|jpeg|gif|webp)$/i.test(imagePath)

  if (isSupabaseFile) {
    const base = process.env.NEXT_PUBLIC_SUPABASE_URL || SUPABASE_PROJECT_URL
    // Encode filename to handle any spaces or special characters in storage names
    const encodedName = encodeURIComponent(imagePath)
    return `${base}/storage/v1/object/public/product-images/${encodedName}`
  }

  // Fallback to placeholder for any unrecognised format
  return '/placeholder-camera.png'
}

// For server-side operations with elevated privileges (use only in API routes or server components)
export function getSupabaseAdmin() {
  if (typeof window !== 'undefined') {
    throw new Error('supabaseAdmin can only be used on the server side')
  }
  
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    {
      auth: {
        autoRefreshToken: false,
        persistSession: false
      }
    }
  )
}

// Database Types
export interface Product {
  id: string
  name: string
  model_number: string
  category: string
  camera_type: string
  resolution: string
  audio?: string
  connectivity: string
  description?: string
  specifications?: any
  special_features: string[]
  status: string
  image?: string
  stock_quantity?: number
  created_at?: string
  updated_at?: string
}

export interface Order {
  id: string
  customer_name?: string
  customer_phone?: string
  customer_email?: string
  items: any[]
  total_items: number
  status: 'pending' | 'contacted' | 'completed' | 'cancelled'
  notes?: string
  created_at: string
  updated_at?: string
}

export interface Analytics {
  id: string
  product_id: string
  event_type: 'view' | 'add_to_cart' | 'inquiry'
  created_at: string
}
