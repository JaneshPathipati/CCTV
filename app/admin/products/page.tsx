'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase, getProductImageUrl } from '@/lib/supabase';
import Link from 'next/link';
import Image from 'next/image';

interface Product {
  id: string;
  name: string;
  model_number: string;
  category: string;
  resolution: string;
  status: string;
  stock_quantity: number;
  image?: string;
}

export default function ProductsManagementPage() {
  const router = useRouter();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);

  useEffect(() => {
    checkAuth();
    loadProducts();
  }, []);

  const checkAuth = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      router.push('/admin/login');
    }
  };

  const loadProducts = async () => {
    try {
      let query = supabase
        .from('products')
        .select('id, name, model_number, category, resolution, status, stock_quantity, image')
        .order('created_at', { ascending: false });

      const { data, error } = await query;

      if (error) throw error;
      setProducts(data || []);
    } catch (error) {
      console.error('Error loading products:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const { error } = await supabase
        .from('products')
        .delete()
        .eq('id', id);

      if (error) throw error;

      setProducts(products.filter(p => p.id !== id));
      setDeleteConfirm(null);
      alert('Product deleted successfully!');
    } catch (error) {
      console.error('Error deleting product:', error);
      alert('Failed to delete product');
    }
  };

  const toggleStatus = async (id: string, currentStatus: string) => {
    const newStatus = currentStatus === 'active' ? 'inactive' : 'active';
    
    try {
      const { error } = await supabase
        .from('products')
        .update({ status: newStatus })
        .eq('id', id);

      if (error) throw error;

      setProducts(products.map(p => 
        p.id === id ? { ...p, status: newStatus } : p
      ));
    } catch (error) {
      console.error('Error updating status:', error);
      alert('Failed to update status');
    }
  };

  const filteredProducts = products.filter(product => {
    const matchesSearch = 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.model_number.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = categoryFilter === 'all' || product.category === categoryFilter;

    return matchesSearch && matchesCategory;
  });

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin w-12 h-12 border-4 border-premiummyello border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-gray-600">Loading products...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-jet-black to-gray-900 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <h1 className="text-3xl font-bold text-premiummyello flex items-center gap-3 text-center sm:text-left">
              <span className="material-symbols-outlined text-4xl">inventory_2</span>
              Product Management
            </h1>
            <Link
              href="/admin/dashboard"
              className="px-5 py-2.5 bg-white/10 backdrop-blur-sm text-white rounded-xl hover:bg-white/20 transition-all border border-white/20 flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-sm">arrow_back</span>
              Back to Dashboard
            </Link>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <div className="flex space-x-6 overflow-x-auto no-scrollbar">
            <Link
              href="/admin/dashboard"
              className="px-3 py-3 sm:py-4 text-gray-600 hover:text-jet-black transition-colors flex items-center gap-2 whitespace-nowrap"
            >
              <span className="material-symbols-outlined text-lg">dashboard</span>
              Dashboard
            </Link>
            <Link
              href="/admin/products"
              className="px-3 py-3 sm:py-4 text-jet-black border-b-2 border-premiummyello font-semibold flex items-center gap-2 whitespace-nowrap"
            >
              <span className="material-symbols-outlined text-lg">inventory_2</span>
              Products
            </Link>
            <Link
              href="/admin/profile"
              className="px-3 py-3 sm:py-4 text-gray-600 hover:text-jet-black transition-colors flex items-center gap-2 whitespace-nowrap"
            >
              <span className="material-symbols-outlined text-lg">person</span>
              Profile
            </Link>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Actions Bar */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-6 mb-6 border border-gray-100">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            <div className="flex-1 w-full md:w-auto">
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">search</span>
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-premiummyello focus:border-premiummyello transition-all"
                />
              </div>
            </div>
            
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-premiummyello focus:border-premiummyello transition-all"
            >
              <option value="all">All Categories</option>
              <option value="IP Camera">IP Camera</option>
              <option value="HD Camera">HD Camera</option>
              <option value="WiFi & 4G Camera">WiFi & 4G Camera</option>
            </select>

            <Link
              href="/admin/products/new"
              className="px-6 py-3 bg-gradient-to-r from-premiummyello to-yellow-400 text-jet-black rounded-xl hover:shadow-lg font-semibold whitespace-nowrap transition-all hover:scale-105 flex items-center gap-2"
            >
              <span className="material-symbols-outlined">add_circle</span>
              Add Product
            </Link>
          </div>
        </div>

        {/* Products Table */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden border border-gray-100">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gradient-to-r from-gray-50 to-gray-100">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                    Product
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                    Model Number
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                    Stock
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4 text-right text-xs font-bold text-gray-700 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-100">
                {filteredProducts.map((product) => (
                  <tr key={product.id} className="hover:bg-yellow-50/50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-10 w-10 flex-shrink-0 relative bg-gray-50 rounded overflow-hidden">
                          {product.image ? (
                            <Image
                              src={getProductImageUrl(product.image)}
                              alt={product.name}
                              fill
                              className="object-contain"
                              unoptimized
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center bg-gray-100">
                              <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                            </div>
                          )}
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900 max-w-xs truncate">
                            {product.name}
                          </div>
                          <div className="text-sm text-gray-500">{product.resolution}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900 font-mono">{product.model_number}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                        {product.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{product.stock_quantity || 0}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button
                        onClick={() => toggleStatus(product.id, product.status)}
                        className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          product.status === 'active'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        {product.status}
                      </button>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex justify-end gap-2">
                        <Link
                          href={`/admin/products/${product.id}/edit`}
                          className="text-blue-600 hover:text-blue-900"
                        >
                          Edit
                        </Link>
                        {deleteConfirm === product.id ? (
                          <div className="flex gap-2">
                            <button
                              onClick={() => handleDelete(product.id)}
                              className="text-red-600 hover:text-red-900 font-bold"
                            >
                              Confirm
                            </button>
                            <button
                              onClick={() => setDeleteConfirm(null)}
                              className="text-gray-600 hover:text-gray-900"
                            >
                              Cancel
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={() => setDeleteConfirm(product.id)}
                            className="text-red-600 hover:text-red-900"
                          >
                            Delete
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
              </svg>
              <h3 className="mt-2 text-sm font-medium text-gray-900">No products found</h3>
              <p className="mt-1 text-sm text-gray-500">Get started by adding a new product.</p>
            </div>
          )}
        </div>

        {/* Summary */}
        <div className="mt-4 text-sm text-gray-600">
          Showing {filteredProducts.length} of {products.length} products
        </div>
      </main>
    </div>
  );
}
