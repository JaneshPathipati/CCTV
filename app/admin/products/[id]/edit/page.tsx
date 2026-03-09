'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { supabase, getProductImageUrl } from '@/lib/supabase';
import Link from 'next/link';
import Image from 'next/image';

export default function EditProductPage() {
  const router = useRouter();
  const params = useParams();
  const productId = decodeURIComponent(params.id as string);
  
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [error, setError] = useState('');
  const [notFound, setNotFound] = useState(false);

  const [formData, setFormData] = useState({
    id: '',
    name: '',
    model_number: '',
    category: 'IP Camera',
    camera_type: 'Dome',
    resolution: '4MP',
    audio: 'None',
    connectivity: 'IP',
    description: '',
    status: 'active',
    image: '',
    stock_quantity: 0,
    lens: '',
    special_features: [] as string[],
  });

  const [featureInput, setFeatureInput] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>('');
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    loadProduct();
  }, [productId]);

  const loadProduct = async () => {
    try {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('id', productId)
        .maybeSingle();

      if (error) throw error;

      if (!data) {
        setNotFound(true);
        setLoading(false);
        return;
      }

      setFormData({
        id: data.id,
        name: data.name,
        model_number: data.model_number,
        category: data.category,
        camera_type: data.camera_type,
        resolution: data.resolution,
        audio: data.audio || 'None',
        connectivity: data.connectivity,
        description: data.description || '',
        status: data.status,
        image: data.image || '',
        stock_quantity: data.stock_quantity || 0,
        lens: data.lens || '',
        special_features: data.special_features || [],
      });
    } catch (error: any) {
      setError(error.message || 'Failed to load product');
    } finally {
      setLoading(false);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const uploadImage = async (): Promise<string | null> => {
    if (!imageFile) return null;

    try {
      setUploading(true);
      
      const fileExt = imageFile.name.split('.').pop();
      const fileName = `${formData.id}-${Date.now()}.${fileExt}`;

      const { data, error } = await supabase.storage
        .from('product-images')
        .upload(fileName, imageFile, {
          cacheControl: '3600',
          upsert: false
        });

      if (error) throw error;

      return fileName;
    } catch (error: any) {
      console.error('Error uploading image:', error);
      throw new Error('Failed to upload image: ' + error.message);
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setUpdating(true);
    setError('');

    try {
      let imagePath = formData.image;
      if (imageFile) {
        const uploadedPath = await uploadImage();
        if (uploadedPath) {
          imagePath = uploadedPath;
        }
      }

      const { error } = await supabase
        .from('products')
        .update({
          name: formData.name,
          model_number: formData.model_number,
          category: formData.category,
          camera_type: formData.camera_type,
          resolution: formData.resolution,
          audio: formData.audio,
          connectivity: formData.connectivity,
          description: formData.description,
          status: formData.status,
          image: imagePath,
          stock_quantity: formData.stock_quantity,
          lens: formData.lens,
          special_features: formData.special_features,
          specifications: {
            resolution: formData.resolution,
            lens_type: formData.lens,
          }
        })
        .eq('id', productId);

      if (error) throw error;

      alert('Product updated successfully!');
      router.push('/admin/products');
    } catch (error: any) {
      setError(error.message || 'Failed to update product');
    } finally {
      setUpdating(false);
    }
  };

  const addFeature = () => {
    if (featureInput.trim()) {
      setFormData({
        ...formData,
        special_features: [...formData.special_features, featureInput.trim()]
      });
      setFeatureInput('');
    }
  };

  const removeFeature = (index: number) => {
    setFormData({
      ...formData,
      special_features: formData.special_features.filter((_, i) => i !== index)
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin w-12 h-12 border-4 border-premiummyello border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-gray-600">Loading product...</p>
        </div>
      </div>
    );
  }

  if (notFound) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-white flex items-center justify-center">
        <div className="text-center">
          <span className="material-symbols-outlined text-9xl text-gray-400 mb-4 block">error</span>
          <h2 className="text-2xl font-bold text-jet-black mb-2">Product Not Found</h2>
          <p className="text-gray-600 mb-6">The product with ID "{productId}" does not exist.</p>
          <Link
            href="/admin/products"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-premiummyello to-yellow-400 text-jet-black rounded-xl hover:shadow-lg font-semibold transition-all"
          >
            <span className="material-symbols-outlined">arrow_back</span>
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-jet-black to-gray-900 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-premiummyello flex items-center gap-3">
              <span className="material-symbols-outlined text-4xl">edit</span>
              Edit Product
            </h1>
            <Link
              href="/admin/products"
              className="px-6 py-2.5 bg-white/10 backdrop-blur-sm text-white rounded-xl hover:bg-white/20 transition-all border border-white/20 flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-sm">arrow_back</span>
              Back to Products
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-gray-100">
          {error && (
            <div className="mb-6 bg-red-50 border-2 border-red-200 text-red-700 px-4 py-3 rounded-xl flex items-center gap-2">
              <span className="material-symbols-outlined">error</span>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Product ID (Read-only) */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Product ID
              </label>
              <input
                type="text"
                value={formData.id}
                disabled
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl bg-gray-50 text-gray-600 font-mono"
              />
            </div>

            {/* Basic Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Model Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.model_number}
                  onChange={(e) => setFormData({ ...formData, model_number: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-premiummyello focus:border-premiummyello transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Stock Quantity
                </label>
                <input
                  type="number"
                  value={formData.stock_quantity}
                  onChange={(e) => setFormData({ ...formData, stock_quantity: parseInt(e.target.value) || 0 })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-premiummyello focus:border-premiummyello transition-all"
                  min="0"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Product Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-premiummyello focus:border-premiummyello transition-all"
              />
            </div>

            {/* Category & Type */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Category
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-premiummyello focus:border-premiummyello transition-all"
                >
                  <option value="IP Camera">IP Camera</option>
                  <option value="HD Camera">HD Camera</option>
                  <option value="WiFi & 4G Camera">WiFi & 4G Camera</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Camera Type
                </label>
                <select
                  value={formData.camera_type}
                  onChange={(e) => setFormData({ ...formData, camera_type: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-premiummyello focus:border-premiummyello transition-all"
                >
                  <option value="Dome">Dome</option>
                  <option value="Bullet">Bullet</option>
                  <option value="PT">PT (Pan/Tilt)</option>
                  <option value="Fisheye">Fisheye</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Resolution
                </label>
                <select
                  value={formData.resolution}
                  onChange={(e) => setFormData({ ...formData, resolution: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-premiummyello focus:border-premiummyello transition-all"
                >
                  <option value="2MP">2MP</option>
                  <option value="3MP">3MP</option>
                  <option value="4MP">4MP</option>
                  <option value="5MP">5MP</option>
                  <option value="6MP">6MP</option>
                  <option value="8MP">8MP</option>
                  <option value="12MP">12MP</option>
                </select>
              </div>
            </div>

            {/* Current Image */}
            {formData.image && !imagePreview && (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Current Image
                </label>
                <div className="relative w-48 h-48 border-2 border-gray-200 rounded-xl overflow-hidden bg-gray-50 shadow-sm">
                  <Image
                    src={getProductImageUrl(formData.image)}
                    alt={formData.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                </div>
              </div>
            )}

            {/* Image Upload */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                {formData.image ? 'Replace Image' : 'Upload Image'}
              </label>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <label className="flex-1 cursor-pointer">
                    <div className="flex items-center justify-center w-full px-4 py-3 border-2 border-dashed border-gray-300 rounded-xl hover:border-premiummyello transition-colors">
                      <div className="text-center">
                        <svg className="mx-auto h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <p className="mt-1 text-sm text-gray-600">
                          {imageFile ? imageFile.name : 'Click to upload new image'}
                        </p>
                      </div>
                    </div>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                    />
                  </label>
                  {imageFile && (
                    <button
                      type="button"
                      onClick={() => {
                        setImageFile(null);
                        setImagePreview('');
                      }}
                      className="px-4 py-2 text-red-600 hover:text-red-700 font-medium"
                    >
                      Remove
                    </button>
                  )}
                </div>

                {imagePreview && (
                  <div className="relative w-full h-48 border-2 border-gray-200 rounded-lg overflow-hidden bg-gray-50">
                    <Image
                      src={imagePreview}
                      alt="Preview"
                      fill
                      className="object-contain"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Description
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={4}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-premiummyello focus:border-premiummyello transition-all"
              />
            </div>

            {/* Status */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Status
              </label>
              <select
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-premiummyello focus:border-premiummyello transition-all"
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>

            {/* Submit Buttons */}
            <div className="flex gap-4 pt-6 border-t-2 border-gray-100">
              <button
                type="submit"
                disabled={updating || uploading}
                className="flex-1 bg-gradient-to-r from-premiummyello to-yellow-400 text-jet-black py-3 rounded-xl font-bold hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:scale-105 flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined">{updating ? 'sync' : 'save'}</span>
                {updating ? 'Updating...' : 'Update Product'}
              </button>
              <Link
                href="/admin/products"
                className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-xl font-semibold text-center hover:bg-gray-300 transition-all flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined">cancel</span>
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
