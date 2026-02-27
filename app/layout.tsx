import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ConditionalLayout from '@/components/layout/ConditionalLayout'
import { CartProvider } from '@/contexts/CartContext'
import WhatsAppChat from '@/components/WhatsAppChat'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'CCTV Installation Andhra Pradesh | HSO Security Cameras | Madanapalli, Tirupati, Chittoor',
  description: 'Professional CCTV installation across Andhra Pradesh. 15+ years experience, 500+ installations. IP, HD, WiFi & 4G cameras. Free site inspection. AMC available. Call +91 82828 24138',
  keywords: 'CCTV installation Andhra Pradesh, security cameras Madanapalli, CCTV Tirupati, CCTV Chittoor, CCTV Rayachoty, IP cameras Andhra Pradesh, HD CCTV cameras, WiFi cameras, 4G cameras, CCTV AMC, surveillance systems AP, home security cameras, business CCTV, HSO CCTV, CCTV dealers Andhra Pradesh, CCTV installation near me',
  authors: [{ name: 'HSO CCTV - DL Enterprises' }],
  openGraph: {
    title: 'HSO CCTV - Professional Security Camera Installation Andhra Pradesh',
    description: '15+ years of CCTV installation expertise across Andhra Pradesh. IP, HD, WiFi & 4G cameras. 500+ satisfied customers. Free consultation.',
    type: 'website',
    url: 'https://hsocctv.com',
    siteName: 'HSO CCTV Andhra Pradesh',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HSO CCTV - Security Camera Installation Andhra Pradesh',
    description: '15+ years CCTV installation expertise | IP, HD, WiFi & 4G Cameras | Free Consultation',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification
  },
  alternates: {
    canonical: 'https://hsocctv.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'HSO CCTV - DL Enterprises',
    alternateName: 'HSO Security Cameras',
    description: 'Professional CCTV installation and security camera systems across Andhra Pradesh. Specializing in IP cameras, HD cameras, WiFi and 4G cameras with 15+ years experience.',
    image: 'https://hsocctv.com/HSO.png',
    '@id': 'https://hsocctv.com',
    url: 'https://hsocctv.com',
    telephone: '+918282824138',
    email: 'dlcctv@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Near RTC Bus Stand',
      addressLocality: 'Madanapalli',
      addressRegion: 'Andhra Pradesh',
      postalCode: '517325',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 13.6288,
      longitude: 78.5000,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ],
      opens: '09:00',
      closes: '20:00',
    },
    priceRange: '$$',
    areaServed: [
      {
        '@type': 'State',
        name: 'Andhra Pradesh',
      },
      {
        '@type': 'City',
        name: 'Madanapalli',
      },
      {
        '@type': 'City',
        name: 'Tirupati',
      },
      {
        '@type': 'City',
        name: 'Chittoor',
      },
      {
        '@type': 'City',
        name: 'Rayachoty',
      },
      {
        '@type': 'City',
        name: 'Kadapa',
      },
      {
        '@type': 'City',
        name: 'Anantapur',
      },
      {
        '@type': 'City',
        name: 'Kurnool',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '500',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'CCTV Security Camera Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'CCTV Installation',
            description: 'Professional CCTV camera installation for homes and businesses',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'IP Camera Systems',
            description: 'High-resolution IP camera installation and setup',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'CCTV AMC Services',
            description: 'Annual maintenance contracts for CCTV systems',
          },
        },
      ],
    },
  }

  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <CartProvider>
          <ConditionalLayout>
            {children}
          </ConditionalLayout>
          <WhatsAppChat />
        </CartProvider>
      </body>
    </html>
  )
}
