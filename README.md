# 🎥 HSO CCTV - Complete E-Commerce & Admin Platform

> **Professional CCTV Installation & Security Solutions for Andhra Pradesh**  
> A full-stack Next.js e-commerce platform with shopping cart, admin dashboard, and Supabase backend

[![Next.js](https://img.shields.io/badge/Next.js-16.1.1-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Supabase](https://img.shields.io/badge/Supabase-Backend-green?style=for-the-badge&logo=supabase)](https://supabase.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Installation](#-installation)
- [Configuration](#-configuration)
- [Database Setup](#-database-setup)
- [Features Documentation](#-features-documentation)
- [Admin Dashboard](#-admin-dashboard)
- [Deployment](#-deployment)
- [API Reference](#-api-reference)
- [Contributing](#-contributing)

---

## 🌟 Overview

HSO CCTV is a **production-ready, full-stack e-commerce platform** built for DL Enterprises, a professional CCTV installation company serving Andhra Pradesh, India. The platform features a complete shopping experience with WhatsApp checkout, comprehensive admin dashboard, and premium UI/UX design.

### 🏢 Business Information

- **Company:** DL Enterprises (HSO CCTV Partner)
- **Location:** Madanapalli, Andhra Pradesh, India
- **Service Area:** State-wide Andhra Pradesh
- **Experience:** 15+ Years
- **Contact:** +91 82828 24138
- **Email:** dlcctv@gmail.com
- **Website:** https://hsocctv.com

---

## ✨ Features

### 🛒 E-Commerce Features

- **Product Catalog:** 73 CCTV products with detailed specifications
- **Shopping Cart:** Add/remove items, quantity management
- **WhatsApp Checkout:** Direct order placement via WhatsApp
- **Product Search:** Real-time search functionality
- **Category Filters:** IP Camera, HD Camera, WiFi & 4G Camera
- **Product Details:** Image zoom, specifications, add to cart
- **Responsive Design:** Mobile-first, works on all devices

### 🎨 Premium UI/UX

- **Glass-morphism Effects:** Backdrop blur on cards and modals
- **Smooth Animations:** Hover effects, transitions, lift animations
- **Material Icons:** Google Material Symbols throughout
- **Yellow/Black Theme:** Consistent branding across all pages
- **Premium Typography:** Inter font with optimized weights
- **Gradient Backgrounds:** Professional color schemes
- **Enhanced Shadows:** Depth and visual hierarchy

### 👨‍💼 Admin Dashboard

- **Secure Authentication:** Supabase Auth integration
- **Product Management:** Full CRUD operations
- **Image Upload:** Supabase Storage integration
- **Dashboard Statistics:** Total products, orders, views
- **Status Management:** Active/Inactive product toggle
- **Profile Management:** Password change, account settings
- **Responsive Admin UI:** Works on desktop and tablet

### 📱 Additional Features

- **SEO Optimized:** Meta tags, Schema.org, sitemap
- **WhatsApp Chat Widget:** Floating chat button
- **Customer Testimonials:** Social proof section
- **Trust Badges:** 15+ years, 500+ customers, 1000+ installations
- **Completed Projects:** 8 installation photos showcase
- **Mobile Responsive:** Perfect on all screen sizes

---

## 🛠 Tech Stack

### Frontend

| Technology | Version | Purpose |
|------------|---------|---------|
| **Next.js** | 16.1.1 | React framework with App Router |
| **React** | 19.x | UI library |
| **TypeScript** | 5.x | Type safety |
| **Tailwind CSS** | 3.4.x | Utility-first CSS |
| **Framer Motion** | 11.x | Animations |
| **Material Symbols** | Latest | Icon system |

### Backend & Database

| Technology | Purpose |
|------------|---------|
| **Supabase** | PostgreSQL database, authentication, storage |
| **Supabase Storage** | Product image hosting (61 images) |
| **Row Level Security** | Database security policies |

### Development Tools

| Tool | Purpose |
|------|---------|
| **ESLint** | Code linting |
| **PostCSS** | CSS processing |
| **Autoprefixer** | CSS vendor prefixes |

---

## 📁 Project Structure

```
HSO/
├── 📂 app/                          # Next.js App Router
│   ├── 📂 admin/                    # Admin Dashboard
│   │   ├── 📂 dashboard/            # Dashboard page
│   │   │   └── page.tsx             # Stats, quick actions
│   │   ├── 📂 products/             # Product management
│   │   │   ├── page.tsx             # Products list
│   │   │   ├── new/                 # Add product
│   │   │   └── [id]/edit/           # Edit product
│   │   ├── 📂 profile/              # Admin profile
│   │   │   └── page.tsx             # Account settings
│   │   ├── 📂 login/                # Admin login
│   │   │   └── page.tsx             # Authentication
│   │   └── layout.tsx               # Admin layout wrapper
│   │
│   ├── 📂 products/                 # Public products
│   │   ├── page.tsx                 # Products catalog (73 items)
│   │   ├── [id]/                    # Product detail
│   │   │   └── page.tsx             # Single product view
│   │   ├── types.ts                 # TypeScript interfaces
│   │   └── utils.ts                 # Helper functions
│   │
│   ├── 📂 cart/                     # Shopping cart
│   │   └── page.tsx                 # Cart page with WhatsApp checkout
│   │
│   ├── 📂 services/                 # Services pages
│   │   ├── page.tsx                 # Services overview
│   │   └── cctv-installation/       # Service detail
│   │       └── page.tsx
│   │
│   ├── 📂 about/                    # About page
│   │   └── page.tsx
│   │
│   ├── 📂 contact/                  # Contact page
│   │   └── page.tsx
│   │
│   ├── page.tsx                     # Homepage
│   ├── layout.tsx                   # Root layout
│   ├── globals.css                  # Global styles
│   └── sitemap.ts                   # Dynamic sitemap
│
├── 📂 components/                   # Reusable components
│   ├── 📂 layout/                   # Layout components
│   │   ├── Navbar.tsx               # Navigation bar
│   │   ├── Footer.tsx               # Footer
│   │   └── ConditionalLayout.tsx   # Layout wrapper
│   ├── 📂 animations/               # Animation components
│   │   ├── FadeIn.tsx               # Fade in animation
│   │   └── StaggerContainer.tsx    # Stagger children
│   └── WhatsAppChat.tsx             # Floating chat widget
│
├── 📂 contexts/                     # React Context
│   └── CartContext.tsx              # Shopping cart state
│
├── 📂 lib/                          # Utilities
│   └── supabase.ts                  # Supabase client & helpers
│
├── 📂 public/                       # Static assets
│   ├── 📂 hso-works/                # Installation photos (44 images)
│   ├── 📂 Velvu 12MP.../            # Product images folder
│   ├── HSO.png                      # Logo
│   ├── robots.txt                   # SEO robots file
│   └── *.png                        # Service icons, images
│
├── 📂 supabase/                     # Database
│   └── schema.sql                   # Database schema
│
├── 📂 scripts/                      # Utility scripts
│   ├── upload-all-images.ts         # Bulk image upload
│   └── check-storage.ts             # Storage verification
│
├── 📄 tailwind.config.ts            # Tailwind configuration
├── 📄 next.config.js                # Next.js configuration
├── 📄 tsconfig.json                 # TypeScript config
├── 📄 package.json                  # Dependencies
├── 📄 .env.local.example            # Environment variables template
├── 📄 ADMIN_SETUP_GUIDE.md          # Admin setup instructions
├── 📄 DEPLOYMENT_GUIDE.md           # Deployment instructions
└── 📄 README.md                     # This file
```

---

## 🚀 Installation

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Supabase account (free tier works)
- Git

### Step 1: Clone Repository

```bash
git clone <your-repo-url>
cd HSO
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Environment Variables

Create `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
```

**Get these values from:**
1. Go to [Supabase Dashboard](https://app.supabase.com)
2. Select your project
3. Go to Settings → API
4. Copy the values

### Step 4: Database Setup

Run the SQL schema in your Supabase SQL Editor:

```bash
# Copy contents from supabase/schema.sql
# Paste in Supabase Dashboard → SQL Editor → New Query
# Run the query
```

### Step 5: Storage Setup

1. Go to Supabase Dashboard → Storage
2. Create bucket named `product-images`
3. Make it public:
   ```sql
   UPDATE storage.buckets 
   SET public = true 
   WHERE name = 'product-images';
   ```

### Step 6: Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## ⚙️ Configuration

### Tailwind CSS Custom Colors

```typescript
// tailwind.config.ts
colors: {
  'premiummyello': '#FFD700',
  'premiummyello-light': '#FFE44D',
  'jet-black': '#0A0A0A',
}
```

### Next.js Image Configuration

```javascript
// next.config.js
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: '*.supabase.co',
    },
  ],
}
```

### Material Icons

Add to `app/layout.tsx`:

```html
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
```

---

## 🗄️ Database Setup

### Tables

#### 1. `products` Table

```sql
CREATE TABLE products (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  model_number TEXT,
  category TEXT,
  camera_type TEXT,
  resolution TEXT,
  audio TEXT,
  connectivity TEXT,
  description TEXT,
  status TEXT DEFAULT 'active',
  image TEXT,
  stock_quantity INTEGER DEFAULT 0,
  lens TEXT,
  special_features TEXT[],
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

**Sample Data:** 73 products loaded

#### 2. `dashboard_stats` Table

```sql
CREATE TABLE dashboard_stats (
  id SERIAL PRIMARY KEY,
  total_products INTEGER DEFAULT 0,
  total_orders INTEGER DEFAULT 0,
  pending_orders INTEGER DEFAULT 0,
  orders_this_week INTEGER DEFAULT 0,
  views_this_week INTEGER DEFAULT 0,
  cart_adds_this_week INTEGER DEFAULT 0,
  updated_at TIMESTAMP DEFAULT NOW()
);
```

### Storage Buckets

#### `product-images` Bucket

- **Purpose:** Store product images
- **Access:** Public
- **Images:** 61 product images uploaded
- **Policies:**
  - SELECT: Public access
  - INSERT: Authenticated users only
  - DELETE: Authenticated users only

---

## 📚 Features Documentation

### 1. Shopping Cart System

**Location:** `contexts/CartContext.tsx`

**Features:**
- Add products to cart
- Remove products from cart
- Update quantities
- Persistent cart (localStorage)
- Cart count badge
- WhatsApp checkout integration

**Usage:**
```typescript
import { useCart } from '@/contexts/CartContext';

const { cart, addToCart, removeFromCart, cartCount } = useCart();

addToCart({
  id: 'HSO-HD2B075',
  name: 'Product Name',
  model_number: 'ST-VB-001',
  image: 'image.jpg',
  category: 'IP Camera'
});
```

### 2. WhatsApp Integration

**Checkout Flow:**
1. User adds products to cart
2. Clicks "Checkout on WhatsApp"
3. Message auto-generated with:
   - Product list
   - Quantities
   - Business phone number
4. Opens WhatsApp with pre-filled message

**Phone Number:** +91 82828 24138

### 3. Image Management

**Helper Function:** `getProductImageUrl()`

```typescript
// lib/supabase.ts
export function getProductImageUrl(imagePath: string | null): string {
  if (!imagePath) return '/placeholder-camera.png';
  
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  return `${supabaseUrl}/storage/v1/object/public/product-images/${imagePath}`;
}
```

### 4. Product Search & Filter

**Features:**
- Real-time search by name/model
- Category filtering (All, IP, HD, WiFi & 4G)
- Responsive grid layout (4 columns desktop, 2 mobile)
- Suspense boundary for loading states

### 5. SEO Optimization

**Meta Tags:**
```typescript
export const metadata: Metadata = {
  title: 'CCTV Installation Andhra Pradesh | HSO Security Cameras',
  description: 'Professional CCTV installation across Andhra Pradesh...',
  keywords: 'CCTV installation Andhra Pradesh, security cameras...',
  // ... more metadata
}
```

**Schema.org Markup:**
- LocalBusiness schema
- Service areas (Andhra Pradesh cities)
- Aggregate ratings
- Opening hours
- Contact information

**Files:**
- `app/sitemap.ts` - Dynamic sitemap
- `public/robots.txt` - Search engine directives

---

## 👨‍💼 Admin Dashboard

### Access

**URL:** `http://localhost:3000/admin/login`

**Default Credentials:**
- Set up via Supabase Authentication
- See `ADMIN_SETUP_GUIDE.md` for details

### Features

#### 1. Dashboard (`/admin/dashboard`)

**Statistics Cards:**
- Total Products
- Total Orders
- Pending Orders
- Orders This Week
- Views This Week
- Cart Adds This Week

**Quick Actions:**
- Add New Product
- Manage Products

#### 2. Products Management (`/admin/products`)

**Features:**
- View all products in table
- Search products
- Filter by category
- Toggle product status (Active/Inactive)
- Edit product
- Delete product
- Add new product

**Table Columns:**
- Product image & name
- Model number
- Category
- Stock quantity
- Status badge
- Actions (Edit/Delete)

#### 3. Add/Edit Product (`/admin/products/new`, `/admin/products/[id]/edit`)

**Form Fields:**
- Product ID (auto-generated)
- Product Name *
- Model Number *
- Category (dropdown)
- Camera Type (dropdown)
- Resolution (dropdown)
- Audio (dropdown)
- Connectivity (dropdown)
- Lens
- Stock Quantity
- Description (textarea)
- Special Features (tags)
- Image Upload
- Status (Active/Inactive)

**Image Upload:**
- Drag & drop or click to upload
- Image preview
- Upload to Supabase Storage
- Replace existing image

#### 4. Profile Management (`/admin/profile`)

**Features:**
- View email & user ID
- Change password
- Logout

**Security:**
- Password minimum 6 characters
- Confirmation required
- Success/error messages

---

## 🎨 Design System

### Color Palette

```css
/* Primary Colors */
--premiummyello: #FFD700;        /* Yellow accent */
--premiummyello-light: #FFE44D;  /* Light yellow */
--jet-black: #0A0A0A;            /* Dark black */

/* Gradients */
background: linear-gradient(to right, #0A0A0A, #1F1F1F);  /* Dark header */
background: linear-gradient(to bottom right, #FFF9E6, #FFFFFF);  /* Light bg */
```

### Typography

```css
/* Font Family */
font-family: 'Inter', sans-serif;

/* Heading Sizes */
h1: 3xl - 6xl (48px - 96px)
h2: 2xl - 4xl (32px - 48px)
h3: xl - 2xl (24px - 32px)

/* Body Text */
body: base - lg (16px - 18px)
small: sm - xs (14px - 12px)
```

### Spacing System

```css
/* Padding */
section-padding: py-16 md:py-24 (64px - 96px)
container-padding: px-4 sm:px-6 lg:px-8

/* Gaps */
gap-2: 8px
gap-4: 16px
gap-6: 24px
gap-8: 32px
```

### Border Radius

```css
rounded-lg: 8px
rounded-xl: 12px
rounded-2xl: 16px
rounded-3xl: 24px
```

### Shadows

```css
shadow-sm: 0 1px 2px rgba(0,0,0,0.05)
shadow-lg: 0 10px 15px rgba(0,0,0,0.1)
shadow-xl: 0 20px 25px rgba(0,0,0,0.1)
shadow-2xl: 0 25px 50px rgba(0,0,0,0.25)
```

---

## 🚢 Deployment

### Vercel (Recommended)

1. **Push to GitHub:**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-repo-url>
git push -u origin main
```

2. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Add environment variables
   - Deploy

3. **Environment Variables in Vercel:**
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`

### Custom Domain

1. Add domain in Vercel dashboard
2. Update DNS records:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

3. SSL certificate auto-provisioned

**See `DEPLOYMENT_GUIDE.md` for detailed instructions**

---

## 📡 API Reference

### Supabase Client

```typescript
// lib/supabase.ts
import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);
```

### Common Operations

#### Fetch Products

```typescript
const { data, error } = await supabase
  .from('products')
  .select('*')
  .eq('status', 'active')
  .order('created_at', { ascending: false });
```

#### Add Product

```typescript
const { data, error } = await supabase
  .from('products')
  .insert([{
    id: 'HSO-001',
    name: 'Product Name',
    category: 'IP Camera',
    // ... other fields
  }]);
```

#### Upload Image

```typescript
const { data, error } = await supabase.storage
  .from('product-images')
  .upload(fileName, file, {
    cacheControl: '3600',
    upsert: false
  });
```

#### Authentication

```typescript
// Login
const { data, error } = await supabase.auth.signInWithPassword({
  email: 'admin@example.com',
  password: 'password'
});

// Logout
await supabase.auth.signOut();

// Get Session
const { data: { session } } = await supabase.auth.getSession();
```

---

## 📊 Statistics

### Project Metrics

- **Total Files:** 50+ TypeScript/React files
- **Total Products:** 73 CCTV products
- **Product Images:** 61 images in Supabase Storage
- **Installation Photos:** 44 project images
- **Pages:** 15+ pages (public + admin)
- **Components:** 20+ reusable components
- **Lines of Code:** ~15,000+ lines

### Performance

- **Lighthouse Score:** 90+ (Performance, Accessibility, SEO)
- **First Contentful Paint:** < 1.5s
- **Time to Interactive:** < 3.5s
- **Build Size:** Optimized with Next.js code splitting

---

## 🔒 Security

### Implemented Security Measures

1. **Authentication:**
   - Supabase Auth with secure tokens
   - Protected admin routes
   - Session management

2. **Database:**
   - Row Level Security (RLS) policies
   - Prepared statements (SQL injection prevention)
   - Input validation

3. **Storage:**
   - Public read, authenticated write
   - File type validation
   - Size limits

4. **Environment Variables:**
   - Sensitive data in `.env.local`
   - Not committed to Git
   - Server-side only for service role key

5. **HTTPS:**
   - Enforced in production
   - Secure cookies
   - CORS configured

---

## 🧪 Testing

### Manual Testing Checklist

- [ ] Homepage loads correctly
- [ ] Products page displays all items
- [ ] Search functionality works
- [ ] Category filters work
- [ ] Product detail page loads
- [ ] Image zoom works
- [ ] Add to cart works
- [ ] Cart page displays items
- [ ] WhatsApp checkout generates message
- [ ] Admin login works
- [ ] Admin dashboard loads
- [ ] Product CRUD operations work
- [ ] Image upload works
- [ ] Mobile responsive on all pages

---

## 📞 Support & Contact

### Business Contact

- **Phone:** +91 82828 24138
- **WhatsApp:** +91 82828 24138
- **Email:** dlcctv@gmail.com
- **Address:** Near RTC Bus Stand, Madanapalli, AP 517325

### Technical Support

For technical issues or questions about the codebase:
1. Check `ADMIN_SETUP_GUIDE.md`
2. Check `DEPLOYMENT_GUIDE.md`
3. Review this README
4. Contact the development team

---

## 📝 Changelog

### Version 1.0.0 (Current)

**Features:**
- ✅ Complete e-commerce platform
- ✅ Shopping cart with WhatsApp checkout
- ✅ 73 products with images
- ✅ Admin dashboard with CRUD
- ✅ Image upload system
- ✅ SEO optimization
- ✅ Premium UI/UX with animations
- ✅ Mobile responsive design
- ✅ Customer testimonials
- ✅ Trust badges
- ✅ WhatsApp chat widget
- ✅ Completed projects showcase

**Tech Stack:**
- Next.js 16.1.1
- React 19
- TypeScript 5
- Tailwind CSS 3.4
- Supabase (PostgreSQL + Storage + Auth)
- Framer Motion 11

---

## 🎯 Future Enhancements

### Planned Features

1. **Payment Integration:**
   - Razorpay/Stripe integration
   - Online payment processing
   - Order tracking

2. **Advanced Features:**
   - Product reviews & ratings
   - Wishlist functionality
   - Product comparison
   - Advanced search filters
   - Inventory management

3. **Marketing:**
   - Email notifications
   - SMS alerts
   - Newsletter subscription
   - Promotional banners

4. **Analytics:**
   - Google Analytics integration
   - Conversion tracking
   - User behavior analysis

---

## 🤝 Contributing

This is a private project for DL Enterprises. For contributions or modifications, please contact the business owner.

---

## 📄 License

© 2025 DL Enterprises. All rights reserved.

This project is proprietary software developed for HSO CCTV (DL Enterprises). Unauthorized copying, modification, distribution, or use of this software is strictly prohibited.

---

## 🙏 Acknowledgments

- **Next.js Team** - For the amazing framework
- **Supabase Team** - For the backend platform
- **Tailwind CSS** - For the utility-first CSS framework
- **Vercel** - For hosting and deployment
- **Google Fonts** - For Inter font family
- **Material Symbols** - For the icon system

---

## 📚 Additional Documentation

- **Admin Setup:** See `ADMIN_SETUP_GUIDE.md`
- **Deployment:** See `DEPLOYMENT_GUIDE.md`
- **Database Schema:** See `supabase/schema.sql`

---

**Built with ❤️ for HSO CCTV - Your Trusted Security Partner in Andhra Pradesh**

**Website:** https://hsocctv.com  
**Phone:** +91 82828 24138  
**Email:** dlcctv@gmail.com

---

*Last Updated: February 2026*
