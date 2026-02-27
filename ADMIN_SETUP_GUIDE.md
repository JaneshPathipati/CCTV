# HSO CCTV Admin Dashboard Setup Guide

## 🚀 Quick Start

This guide will help you set up the admin dashboard with Supabase backend for managing products, orders, inventory, and analytics.

---

## 📋 Prerequisites

- Supabase account (free tier works fine)
- Your HSO CCTV website running locally

---

## 🔧 Step 1: Create Supabase Project

1. Go to [https://supabase.com](https://supabase.com)
2. Sign up or log in
3. Click **"New Project"**
4. Fill in:
   - **Name**: HSO CCTV
   - **Database Password**: (create a strong password and save it)
   - **Region**: Choose closest to India (e.g., Mumbai)
5. Click **"Create new project"** (takes ~2 minutes)

---

## 🗄️ Step 2: Set Up Database

1. In your Supabase dashboard, go to **SQL Editor** (left sidebar)
2. Click **"New Query"**
3. Copy the entire contents of `/supabase/schema.sql` file
4. Paste it into the SQL editor
5. Click **"Run"** (bottom right)
6. You should see: "Success. No rows returned"

This creates:
- ✅ Products table
- ✅ Orders table
- ✅ Analytics table
- ✅ Dashboard statistics view
- ✅ Popular products view

---

## 🔑 Step 3: Get Your API Keys

1. In Supabase dashboard, go to **Settings** → **API** (left sidebar)
2. You'll see:
   - **Project URL** (looks like: `https://xxxxx.supabase.co`)
   - **anon public** key (long string starting with `eyJ...`)
   - **service_role** key (another long string - keep this SECRET!)

---

## 📝 Step 4: Configure Environment Variables

1. In your HSO project folder, create a file named `.env.local`
2. Add the following (replace with your actual values):

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here

# Existing variables (keep these)
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_CONTACT_PHONE=+918282824138
NEXT_PUBLIC_CONTACT_EMAIL=dlcctv@gmail.com
NEXT_PUBLIC_WHATSAPP_NUMBER=918282824138
```

3. Save the file

---

## 👤 Step 5: Create Admin User

1. In Supabase dashboard, go to **Authentication** → **Users**
2. Click **"Add user"** → **"Create new user"**
3. Fill in:
   - **Email**: Your admin email (e.g., `admin@hsocctv.com`)
   - **Password**: Create a strong password
   - **Auto Confirm User**: ✅ Check this box
4. Click **"Create user"**

---

## 📦 Step 6: Migrate Products to Database

1. Open terminal in your HSO project folder
2. Run the migration script:

```bash
npx ts-node scripts/migrate-to-supabase.ts
```

This will:
- Read all 70 products from your JSON file
- Upload them to Supabase database
- Show progress and success count

Expected output:
```
🚀 Starting product migration to Supabase...
📦 Found 70 products to migrate
Processing batch 1...
✅ Successfully migrated 50 products
Processing batch 2...
✅ Successfully migrated 20 products
🎉 All products migrated successfully!
```

---

## 🎨 Step 7: Access Admin Dashboard

1. Restart your development server:
```bash
npm run dev
```

2. Open your browser and go to:
```
http://localhost:3000/admin/login
```

3. Login with your admin credentials

4. You'll see the dashboard with:
   - 📊 Statistics overview
   - 📦 Product management
   - 🛒 Order tracking
   - 📈 Analytics

---

## 🎯 Admin Dashboard Features

### Dashboard (`/admin/dashboard`)
- View total products, orders, and statistics
- See weekly performance metrics
- Quick action buttons

### Products Management (`/admin/products`)
- ✅ View all products in a table
- ✅ Search and filter products
- ✅ Add new products
- ✅ Edit existing products
- ✅ Delete products
- ✅ Toggle product status (active/inactive)
- ✅ Manage stock quantities

### Orders Management (`/admin/orders`)
- View all customer inquiries from WhatsApp
- Filter by status (pending, contacted, completed)
- Update order status
- Add notes to orders

### Analytics (`/admin/analytics`)
- Product view counts
- Cart additions tracking
- Popular products
- Weekly trends
- Customer behavior insights

---

## 🔐 Security Notes

1. **Never commit `.env.local`** to Git (it's already in `.gitignore`)
2. Keep your `service_role` key secret
3. Only share admin credentials with trusted team members
4. Use strong passwords for admin accounts

---

## 🛠️ Troubleshooting

### "Failed to fetch" error
- Check if `.env.local` file exists
- Verify Supabase URL and keys are correct
- Make sure you restarted the dev server after adding env variables

### "No products showing"
- Run the migration script: `npx ts-node scripts/migrate-to-supabase.ts`
- Check Supabase dashboard → Table Editor → products table

### "Authentication error"
- Verify admin user exists in Supabase → Authentication → Users
- Make sure "Auto Confirm User" was checked
- Try resetting the password in Supabase dashboard

### Migration script errors
- Install ts-node: `npm install -D ts-node`
- Check that `hso-camera-products.json` exists in `/public` folder

---

## 📱 Mobile Access

The admin dashboard is fully responsive and works on:
- 📱 Mobile phones
- 📱 Tablets
- 💻 Desktop computers

---

## 🎓 Next Steps

1. **Customize the dashboard** - Add your branding, colors
2. **Set up email notifications** - Get alerts for new orders
3. **Add more analytics** - Track conversion rates, popular categories
4. **Integrate payment gateway** - If you want to accept online payments
5. **Add inventory alerts** - Get notified when stock is low

---

## 📞 Support

If you need help:
1. Check Supabase documentation: [https://supabase.com/docs](https://supabase.com/docs)
2. Review error messages in browser console (F12)
3. Check Supabase logs in dashboard

---

## ✅ Checklist

- [ ] Created Supabase project
- [ ] Ran database schema SQL
- [ ] Added environment variables to `.env.local`
- [ ] Created admin user in Supabase
- [ ] Ran product migration script
- [ ] Logged into admin dashboard
- [ ] Verified products are showing
- [ ] Tested adding/editing a product

---

**Congratulations! 🎉 Your admin dashboard is ready to use!**

You can now manage your entire CCTV product catalog, track customer inquiries, and analyze your business performance from one place.
