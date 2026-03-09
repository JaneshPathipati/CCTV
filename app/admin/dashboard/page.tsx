'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';

interface DashboardStats {
  total_products: number;
  total_orders: number;
  pending_orders: number;
  orders_this_week: number;
  views_this_week: number;
  cart_adds_this_week: number;
}

export default function AdminDashboard() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    checkAuth();
    loadStats();
  }, []);

  const checkAuth = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      router.push('/admin/login');
    } else {
      setUser(session.user);
    }
  };

  const loadStats = async () => {
    try {
      const { data, error } = await supabase
        .from('dashboard_stats')
        .select('*')
        .single();

      if (error) throw error;
      setStats(data);
    } catch (error) {
      console.error('Error loading stats:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/admin/login');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin w-12 h-12 border-4 border-premiummyello border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-gray-600">Loading dashboard...</p>
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
            <div className="text-center sm:text-left">
              <h1 className="text-3xl font-bold text-premiummyello flex items-center gap-3">
                <span className="material-symbols-outlined text-4xl">admin_panel_settings</span>
                HSO CCTV Admin
              </h1>
              <p className="text-sm text-white/70 mt-1 break-all">Welcome back, {user?.email}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/"
                target="_blank"
                className="px-5 py-2.5 bg-white/10 backdrop-blur-sm text-white rounded-xl hover:bg-white/20 transition-all border border-white/20 flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-sm">open_in_new</span>
                View Site
              </Link>
              <button
                onClick={handleLogout}
                className="px-5 py-2.5 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-sm">logout</span>
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <div className="flex space-x-6 overflow-x-auto no-scrollbar">
            <Link
              href="/admin/dashboard"
              className="px-3 py-3 sm:py-4 text-jet-black border-b-2 border-premiummyello font-semibold flex items-center gap-2 whitespace-nowrap"
            >
              <span className="material-symbols-outlined text-lg">dashboard</span>
              Dashboard
            </Link>
            <Link
              href="/admin/products"
              className="px-3 py-3 sm:py-4 text-gray-600 hover:text-jet-black transition-colors flex items-center gap-2 whitespace-nowrap"
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

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="group bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-gray-100 hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-2 font-medium">Total Products</p>
                <p className="text-4xl font-bold text-jet-black">{stats?.total_products || 0}</p>
              </div>
              <div className="bg-gradient-to-br from-premiummyello to-yellow-300 p-4 rounded-2xl group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl text-jet-black">inventory_2</span>
              </div>
            </div>
          </div>

          <div className="group bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-gray-100 hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-2 font-medium">Total Orders</p>
                <p className="text-4xl font-bold text-jet-black">{stats?.total_orders || 0}</p>
              </div>
              <div className="bg-gradient-to-br from-green-500 to-green-400 p-4 rounded-2xl group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl text-white">shopping_cart</span>
              </div>
            </div>
          </div>

          <div className="group bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-gray-100 hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-2 font-medium">Pending Orders</p>
                <p className="text-4xl font-bold text-jet-black">{stats?.pending_orders || 0}</p>
              </div>
              <div className="bg-gradient-to-br from-orange-500 to-orange-400 p-4 rounded-2xl group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl text-white">pending</span>
              </div>
            </div>
          </div>

          <div className="group bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-gray-100 hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-2 font-medium">Orders This Week</p>
                <p className="text-4xl font-bold text-jet-black">{stats?.orders_this_week || 0}</p>
              </div>
              <div className="bg-gradient-to-br from-purple-500 to-purple-400 p-4 rounded-2xl group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl text-white">trending_up</span>
              </div>
            </div>
          </div>

          <div className="group bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-gray-100 hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-2 font-medium">Views This Week</p>
                <p className="text-4xl font-bold text-jet-black">{stats?.views_this_week || 0}</p>
              </div>
              <div className="bg-gradient-to-br from-blue-500 to-blue-400 p-4 rounded-2xl group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl text-white">visibility</span>
              </div>
            </div>
          </div>

          <div className="group bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-gray-100 hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-2 font-medium">Cart Adds This Week</p>
                <p className="text-4xl font-bold text-jet-black">{stats?.cart_adds_this_week || 0}</p>
              </div>
              <div className="bg-gradient-to-br from-pink-500 to-pink-400 p-4 rounded-2xl group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl text-white">add_shopping_cart</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-gray-100">
          <h2 className="text-2xl font-bold text-jet-black mb-6 flex items-center gap-2">
            <span className="material-symbols-outlined text-3xl text-premiummyello">bolt</span>
            Quick Actions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/admin/products/new"
              className="group flex items-center gap-4 p-6 border-2 border-dashed border-gray-300 rounded-2xl hover:border-premiummyello hover:bg-yellow-50 transition-all hover:shadow-lg"
            >
              <div className="bg-gradient-to-br from-premiummyello to-yellow-300 p-3 rounded-xl group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-2xl text-jet-black">add_circle</span>
              </div>
              <span className="font-semibold text-gray-900 group-hover:text-jet-black">Add New Product</span>
            </Link>

            <Link
              href="/admin/products"
              className="group flex items-center gap-4 p-6 border-2 border-dashed border-gray-300 rounded-2xl hover:border-green-500 hover:bg-green-50 transition-all hover:shadow-lg"
            >
              <div className="bg-gradient-to-br from-green-500 to-green-400 p-3 rounded-xl group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-2xl text-white">inventory_2</span>
              </div>
              <span className="font-semibold text-gray-900 group-hover:text-jet-black">Manage Products</span>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
