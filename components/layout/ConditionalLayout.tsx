'use client';

import { usePathname } from 'next/navigation';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingCTA from '@/components/layout/FloatingCTA';
import CartIcon from '@/components/layout/CartIcon';

export default function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdminPage = pathname.startsWith('/admin');

  if (isAdminPage) {
    return <main className="min-h-screen">{children}</main>;
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen pb-28 md:pb-8">
        {children}
      </main>
      <Footer />
      <FloatingCTA />
      <CartIcon />
    </>
  );
}
