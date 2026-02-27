'use client';

import { ReactNode } from 'react'
import { usePathname } from 'next/navigation'

export default function AdminLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const isLoginPage = pathname === '/admin/login'

  // For login page, render without any wrapper
  if (isLoginPage) {
    return <>{children}</>
  }

  // For other admin pages, they have their own headers
  return <>{children}</>
}
