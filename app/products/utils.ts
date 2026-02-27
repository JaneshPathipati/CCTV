// Utility function to load and process product data
export async function getProductsData() {
  try {
    // In production, this should be an API call or static import
    const response = await fetch('/velvu-products.json')
    const data = await response.json()
    
    // Replace Velvu with HSO in all product names
    const processedData = {
      ...data,
      categories: data.categories.map((category: any) => ({
        ...category,
        products: category.products.map((product: any) => ({
          ...product,
          name: product.name.replace(/Velvu/gi, 'HSO').replace(/VELVU/gi, 'HSO')
        }))
      }))
    }
    
    return processedData
  } catch (error) {
    console.error('Error loading products:', error)
    return null
  }
}

// Replace Velvu with HSO in product names
export const getHSOProductName = (name: string) => {
  return name.replace(/Velvu/gi, 'HSO').replace(/VELVU/gi, 'HSO')
}
