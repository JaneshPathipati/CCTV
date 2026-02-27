import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Helper function to get product image URL
export function getProductImageUrl(imagePath: string | null | undefined): string {
  if (!imagePath) {
    return '/placeholder-camera.png'; // Fallback image
  }
  
  // If it's already a full URL, return it
  if (imagePath.startsWith('http')) {
    return imagePath;
  }
  
  // Check if it's a Supabase Storage file (contains timestamp pattern like -1771144698862)
  const isSupabaseFile = /\-\d{13}\.(png|jpg|jpeg|gif|webp)$/i.test(imagePath);
  
  if (isSupabaseFile) {
    // Construct Supabase Storage URL directly
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
    return `${supabaseUrl}/storage/v1/object/public/product-images/${imagePath}`;
  }
  
  // Otherwise, it's an old migrated image - use the old path
  return `/Velvu 12MP IP Low Light Color Bullet Camera ST-VB IP12002LL/${imagePath}`;
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
