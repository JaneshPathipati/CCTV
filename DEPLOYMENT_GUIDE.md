# HSO CCTV Website - Deployment Guide

## 🚀 Complete Deployment Instructions

This guide will walk you through deploying your HSO CCTV website to production using Vercel (recommended) or other hosting platforms.

---

## Prerequisites

Before deploying, ensure you have:
- ✅ Supabase project set up and running
- ✅ All environment variables ready
- ✅ Domain name (optional, but recommended)
- ✅ Git repository (GitHub, GitLab, or Bitbucket)

---

## Option 1: Deploy to Vercel (Recommended) ⭐

Vercel is the best platform for Next.js applications and offers:
- Free SSL certificates
- Automatic deployments from Git
- Edge network for fast global delivery
- Built-in analytics

### Step 1: Prepare Your Repository

1. **Initialize Git (if not already done):**
```bash
cd /Users/harsha_reddy/HSO
git init
git add .
git commit -m "Initial commit - HSO CCTV website"
```

2. **Create a GitHub repository:**
   - Go to https://github.com/new
   - Create a new repository (e.g., "hso-cctv-website")
   - Don't initialize with README (you already have code)

3. **Push your code to GitHub:**
```bash
git remote add origin https://github.com/YOUR_USERNAME/hso-cctv-website.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel

1. **Sign up for Vercel:**
   - Go to https://vercel.com/signup
   - Sign up with your GitHub account

2. **Import your project:**
   - Click "Add New Project"
   - Select your GitHub repository
   - Click "Import"

3. **Configure Environment Variables:**
   
   In Vercel dashboard, add these environment variables:
   
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
   ```
   
   **Where to find these values:**
   - Go to your Supabase Dashboard
   - Navigate to Settings → API
   - Copy the Project URL and API keys

4. **Deploy:**
   - Click "Deploy"
   - Wait 2-3 minutes for build to complete
   - Your site will be live at: `https://your-project.vercel.app`

### Step 3: Configure Custom Domain (Optional)

1. **Add your domain in Vercel:**
   - Go to Project Settings → Domains
   - Add your domain (e.g., hsocctv.com)

2. **Update DNS records:**
   
   Add these records in your domain registrar:
   
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

3. **Wait for DNS propagation (5-60 minutes)**

4. **SSL Certificate:**
   - Vercel automatically provisions SSL certificates
   - Your site will be accessible via HTTPS

---

## Option 2: Deploy to Netlify

### Step 1: Prepare Build Configuration

Create `netlify.toml` in your project root:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

### Step 2: Deploy

1. Go to https://app.netlify.com
2. Click "Add new site" → "Import an existing project"
3. Connect to GitHub and select your repository
4. Add environment variables (same as Vercel)
5. Click "Deploy site"

---

## Option 3: Deploy to Your Own Server (VPS)

### Requirements:
- Ubuntu/Debian server
- Node.js 18+ installed
- Nginx for reverse proxy
- PM2 for process management

### Step 1: Prepare Server

```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js 18
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Install PM2
sudo npm install -g pm2

# Install Nginx
sudo apt install -y nginx
```

### Step 2: Deploy Application

```bash
# Clone repository
cd /var/www
sudo git clone https://github.com/YOUR_USERNAME/hso-cctv-website.git
cd hso-cctv-website

# Install dependencies
npm install

# Create .env.local file
sudo nano .env.local
# Add your environment variables

# Build application
npm run build

# Start with PM2
pm2 start npm --name "hso-cctv" -- start
pm2 save
pm2 startup
```

### Step 3: Configure Nginx

Create Nginx configuration:

```bash
sudo nano /etc/nginx/sites-available/hsocctv.com
```

Add this configuration:

```nginx
server {
    listen 80;
    server_name hsocctv.com www.hsocctv.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable site and restart Nginx:

```bash
sudo ln -s /etc/nginx/sites-available/hsocctv.com /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

### Step 4: Install SSL Certificate

```bash
# Install Certbot
sudo apt install -y certbot python3-certbot-nginx

# Get SSL certificate
sudo certbot --nginx -d hsocctv.com -d www.hsocctv.com
```

---

## Post-Deployment Checklist

After deployment, verify these items:

### ✅ Functionality Tests

1. **Homepage:**
   - [ ] Hero section loads
   - [ ] Featured products display
   - [ ] Images load from Supabase
   - [ ] Animations work smoothly
   - [ ] WhatsApp chat widget appears

2. **Products Page:**
   - [ ] All 73 products load
   - [ ] Category filters work
   - [ ] Search functionality works
   - [ ] Images load correctly
   - [ ] Add to cart works

3. **Product Detail Pages:**
   - [ ] Product information displays
   - [ ] Image zoom works
   - [ ] Add to cart button works

4. **Shopping Cart:**
   - [ ] Cart items display
   - [ ] Quantity changes work
   - [ ] WhatsApp checkout generates correct message
   - [ ] Phone number is correct (+91 82828 24138)

5. **Admin Panel:**
   - [ ] Login works
   - [ ] Dashboard statistics load
   - [ ] Product management works
   - [ ] Image upload works
   - [ ] Edit/Delete functions work

### ✅ Performance Tests

1. **Speed:**
   - [ ] Homepage loads in < 3 seconds
   - [ ] Products page loads in < 3 seconds
   - [ ] Images load progressively

2. **Mobile:**
   - [ ] Site is responsive on mobile
   - [ ] Touch interactions work
   - [ ] WhatsApp links work on mobile

3. **SEO:**
   - [ ] Meta tags are correct
   - [ ] Sitemap is accessible (/sitemap.xml)
   - [ ] Robots.txt is accessible (/robots.txt)

### ✅ Security

1. **Environment Variables:**
   - [ ] No secrets in client-side code
   - [ ] Service role key is server-side only
   - [ ] .env.local is in .gitignore

2. **Supabase:**
   - [ ] RLS policies are active
   - [ ] Storage bucket is public
   - [ ] Admin routes are protected

---

## Updating Your Deployed Site

### For Vercel/Netlify (Automatic):
```bash
# Just push to GitHub
git add .
git commit -m "Update website"
git push origin main

# Vercel/Netlify will automatically rebuild and deploy
```

### For VPS (Manual):
```bash
# SSH into server
ssh user@your-server-ip

# Navigate to project
cd /var/www/hso-cctv-website

# Pull latest changes
git pull origin main

# Install any new dependencies
npm install

# Rebuild
npm run build

# Restart PM2
pm2 restart hso-cctv
```

---

## Monitoring & Maintenance

### 1. Set up monitoring:
- **Vercel:** Built-in analytics in dashboard
- **Custom:** Use Google Analytics or Plausible

### 2. Regular backups:
- Backup Supabase database weekly
- Keep Git repository updated

### 3. Updates:
- Update dependencies monthly: `npm update`
- Check for security vulnerabilities: `npm audit`

---

## Troubleshooting

### Issue: Images not loading
**Solution:**
- Verify Supabase Storage bucket is public
- Check environment variables are set correctly
- Verify image paths in database

### Issue: Admin login not working
**Solution:**
- Check Supabase authentication is enabled
- Verify admin user exists in Supabase
- Check environment variables

### Issue: Build fails
**Solution:**
- Run `npm run build` locally first
- Check for TypeScript errors
- Verify all dependencies are installed

### Issue: WhatsApp links not working
**Solution:**
- Verify phone number format: +918282824138
- Test on mobile device
- Check URL encoding

---

## Support & Resources

- **Vercel Documentation:** https://vercel.com/docs
- **Next.js Documentation:** https://nextjs.org/docs
- **Supabase Documentation:** https://supabase.com/docs
- **Your Project Repository:** [Add your GitHub URL here]

---

## Quick Reference

### Important URLs:
- **Production Site:** https://hsocctv.com (or your Vercel URL)
- **Admin Panel:** https://hsocctv.com/admin/login
- **Supabase Dashboard:** https://app.supabase.com

### Important Credentials:
- Store admin credentials securely
- Keep Supabase service role key private
- Never commit .env.local to Git

---

## Next Steps After Deployment

1. **Google Search Console:**
   - Add your site
   - Submit sitemap
   - Monitor search performance

2. **Google My Business:**
   - Create business listing
   - Add photos and information
   - Encourage customer reviews

3. **Social Media:**
   - Share website on Facebook, Instagram
   - Add website link to WhatsApp Business profile

4. **Marketing:**
   - Share with existing customers
   - Print website URL on business cards
   - Add to vehicle branding

---

**🎉 Congratulations! Your HSO CCTV website is now live!**

For any issues or questions, refer to this guide or check the documentation links above.
