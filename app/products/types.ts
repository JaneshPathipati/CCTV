export interface Product {
  id: string
  model: string
  name: string
  type: 'Bullet' | 'Dome'
  resolution: string
  lens?: string
  features: string[]
  category: string
  price?: number
  image?: string
}

export interface ProductCategory {
  name: string
  products: Product[]
  icon?: string
}

export type SortOption = 'price-low' | 'price-high' | 'name-asc' | 'name-desc' | 'date-new' | 'date-old'

export interface ProductFilters {
  category?: string
  resolution?: string[]
  type?: string[]
  features?: string[]
  priceRange?: [number, number]
}
