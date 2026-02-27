# Deployment Guide - HSO CCTV Website

## Quick Deployment Options

### Option 1: Vercel (Recommended - Easiest)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - HSO CCTV website"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Connect your GitHub repository
   - Vercel will auto-detect Next.js
   - Click "Deploy"
   - Done! Your site will be live in ~2 minutes

3. **Custom Domain (Optional)**
   - Go to Project Settings → Domains
   - Add your custom domain
   - Update DNS records as instructed

### Option 2: Netlify

1. **Build Command:** `npm run build`
2. **Publish Directory:** `.next`
3. **Deploy**
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod
   ```

### Option 3: Traditional Hosting (cPanel/VPS)

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Start production server**
   ```bash
   npm start
   ```

3. **Use PM2 for process management**
   ```bash
   npm install -g pm2
   pm2 start npm --name "hso-cctv" -- start
   pm2 save
   pm2 startup
   ```

4. **Configure Nginx reverse proxy**
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;

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

## Pre-Deployment Checklist

- [ ] Update contact information in all pages
- [ ] Replace placeholder Google Maps embed URL in contact page
- [ ] Update sitemap.ts with your actual domain
- [ ] Update robots.txt with your actual domain
- [ ] Add Google Analytics (optional)
- [ ] Test all links and CTAs
- [ ] Test on mobile devices
- [ ] Optimize images (if you add custom images)
- [ ] Set up SSL certificate (auto with Vercel/Netlify)

## Environment Variables

Create `.env.local` file (copy from `.env.local.example`):

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_CONTACT_PHONE=+918282824138
NEXT_PUBLIC_CONTACT_EMAIL=dlcctv@gmail.com
NEXT_PUBLIC_WHATSAPP_NUMBER=918282824138
```

## Post-Deployment

### 1. SEO Setup
- Submit sitemap to Google Search Console
- Submit sitemap to Bing Webmaster Tools
- Set up Google My Business
- Add structured data (Schema.org)

### 2. Analytics
- Add Google Analytics
- Set up conversion tracking
- Monitor WhatsApp/Call click events

### 3. Performance Monitoring
- Use Lighthouse for performance audits
- Monitor Core Web Vitals
- Set up uptime monitoring

### 4. Marketing
- Share website on social media
- Add to business directories
- Update Google My Business with website URL
- Add to local business listings

## Custom Domain Setup

### For Vercel:
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

### For Netlify:
1. Add domain in Netlify dashboard
2. Update DNS records as provided by Netlify

## Troubleshooting

### Build Errors
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Port Already in Use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
```

### Dependencies Issues
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
```

## Support

For deployment issues, contact:
- Email: dlcctv@gmail.com
- Phone: +91 82828 24138

---

**Ready to go live! 🚀**
