'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';

export default function ProfilePage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [message, setMessage] = useState('');
  
  const [formData, setFormData] = useState({
    email: '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      router.push('/admin/login');
    } else {
      setUser(session.user);
      setFormData({ ...formData, email: session.user.email || '' });
      setLoading(false);
    }
  };

  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault();
    setUpdating(true);
    setMessage('');

    try {
      if (formData.newPassword !== formData.confirmPassword) {
        throw new Error('New passwords do not match');
      }

      if (formData.newPassword.length < 6) {
        throw new Error('Password must be at least 6 characters');
      }

      const { error } = await supabase.auth.updateUser({
        password: formData.newPassword
      });

      if (error) throw error;

      setMessage('Password updated successfully!');
      setFormData({
        ...formData,
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
      });
    } catch (error: any) {
      setMessage(error.message || 'Failed to update password');
    } finally {
      setUpdating(false);
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
          <p className="text-gray-600">Loading profile...</p>
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
              <h1 className="text-3xl font-bold text-premiummyello flex items-center gap-3 justify-center sm:justify-start">
                <span className="material-symbols-outlined text-4xl">person</span>
                Profile Settings
              </h1>
              <p className="text-sm text-white/70 mt-1">Manage your account settings</p>
            </div>
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
              className="px-3 py-3 sm:py-4 text-gray-600 hover:text-jet-black transition-colors flex items-center gap-2 whitespace-nowrap"
            >
              <span className="material-symbols-outlined text-lg">inventory_2</span>
              Products
            </Link>
            <Link
              href="/admin/profile"
              className="px-3 py-3 sm:py-4 text-jet-black border-b-2 border-premiummyello font-semibold flex items-center gap-2 whitespace-nowrap"
            >
              <span className="material-symbols-outlined text-lg">person</span>
              Profile
            </Link>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 gap-6">
          {/* Account Information */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-jet-black mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-3xl text-premiummyello">account_circle</span>
              Account Information
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={formData.email}
                  disabled
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl bg-gray-50 text-gray-600"
                />
                <p className="text-sm text-gray-500 mt-1 flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">info</span>
                  Email cannot be changed
                </p>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  User ID
                </label>
                <input
                  type="text"
                  value={user?.id || ''}
                  disabled
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl bg-gray-50 text-gray-600 font-mono text-sm"
                />
              </div>
            </div>
          </div>

          {/* Change Password */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-jet-black mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-3xl text-premiummyello">lock</span>
              Change Password
            </h2>
            
            {message && (
              <div className={`mb-6 px-4 py-3 rounded-xl flex items-center gap-2 ${
                message.includes('success') 
                  ? 'bg-green-50 border-2 border-green-200 text-green-700'
                  : 'bg-red-50 border-2 border-red-200 text-red-700'
              }`}>
                <span className="material-symbols-outlined">{message.includes('success') ? 'check_circle' : 'error'}</span>
                {message}
              </div>
            )}

            <form onSubmit={handlePasswordChange} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  New Password
                </label>
                <input
                  type="password"
                  value={formData.newPassword}
                  onChange={(e) => setFormData({ ...formData, newPassword: e.target.value })}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-premiummyello focus:border-premiummyello transition-all"
                  placeholder="Enter new password"
                  minLength={6}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-premiummyello focus:border-premiummyello transition-all"
                  placeholder="Confirm new password"
                  minLength={6}
                />
              </div>

              <button
                type="submit"
                disabled={updating}
                className="w-full bg-gradient-to-r from-premiummyello to-yellow-400 text-jet-black py-3 rounded-xl font-bold hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:scale-105 flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined">{updating ? 'sync' : 'lock_reset'}</span>
                {updating ? 'Updating...' : 'Update Password'}
              </button>
            </form>
          </div>

          {/* Danger Zone */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 border-2 border-red-200">
            <h2 className="text-2xl font-bold text-red-600 mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-3xl">warning</span>
              Danger Zone
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-red-50 rounded-xl border border-red-100">
                <div>
                  <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                    <span className="material-symbols-outlined text-red-600">logout</span>
                    Logout
                  </h3>
                  <p className="text-sm text-gray-600">Sign out of your admin account</p>
                </div>
                <button
                  onClick={handleLogout}
                  className="px-6 py-2.5 bg-red-600 text-white rounded-xl hover:bg-red-700 font-semibold transition-all hover:shadow-lg flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-sm">logout</span>
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
