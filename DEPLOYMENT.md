# Deployment Guide

## Option 1: Vercel (Recommended - Easiest)

### Prerequisites:
- GitHub account
- Vercel account (free)

### Steps:

1. **Push your code to GitHub:**
   ```bash
   cd 3D_portfolio
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with GitHub
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Vite settings
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `dist` (auto-detected)
   - Click "Deploy"
   - Your site will be live in ~2 minutes!

### Vercel Configuration:
Your `vercel.json` is already configured for React Router. No additional setup needed!

---

## Option 2: Netlify

### Steps:

1. **Push to GitHub** (same as above)

2. **Deploy to Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Sign up/Login with GitHub
   - Click "Add new site" → "Import an existing project"
   - Select your repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"

3. **Configure SPA routing:**
   - Create `netlify.toml` in project root:
   ```toml
   [[redirects]]
     from = "/*"
     to = "/index.html"
     status = 200
   ```

---

## Option 3: GitHub Pages

### Steps:

1. **Install gh-pages:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json:**
   Add to scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
   Add homepage:
   ```json
   "homepage": "https://YOUR_USERNAME.github.io/3D_portfolio"
   ```

3. **Update vite.config.js:**
   ```js
   export default defineConfig({
     plugins: [react()],
     assetsInclude: ['**/*.glb'],
     base: '/3D_portfolio/', // Your repo name
   })
   ```

4. **Deploy:**
   ```bash
   npm run deploy
   ```

---

## Option 4: Cloudflare Pages

### Steps:

1. **Push to GitHub**

2. **Deploy to Cloudflare:**
   - Go to [pages.cloudflare.com](https://pages.cloudflare.com)
   - Sign up/Login
   - Click "Create a project" → "Connect to Git"
   - Select your repository
   - Build settings:
     - Framework preset: Vite
     - Build command: `npm run build`
     - Build output directory: `dist`
   - Click "Save and Deploy"

---

## Option 5: Render

### Steps:

1. **Push to GitHub**

2. **Deploy to Render:**
   - Go to [render.com](https://render.com)
   - Sign up/Login with GitHub
   - Click "New" → "Static Site"
   - Connect your repository
   - Settings:
     - Name: Your portfolio name
     - Build Command: `npm run build`
     - Publish Directory: `dist`
   - Click "Create Static Site"

---

## Build Locally First (Test Before Deploying)

```bash
cd 3D_portfolio
npm install
npm run build
npm run preview
```

This will:
1. Install dependencies
2. Build the production version
3. Preview the built site locally

---

## Important Notes:

1. **Environment Variables:**
   - If you use EmailJS, add your keys in the platform's environment variables section
   - EmailJS keys are in `Contact.jsx` - make sure they're set correctly

2. **3D Models:**
   - Your `.glb` files are included in the build
   - Make sure file sizes aren't too large (optimize if needed)

3. **Custom Domain:**
   - All platforms support custom domains
   - Add your domain in the platform's settings

4. **Auto-Deploy:**
   - Most platforms auto-deploy on git push
   - Vercel and Netlify have the best auto-deploy features

---

## Quick Start (Vercel - Fastest):

```bash
# 1. Install Vercel CLI (optional, but recommended)
npm i -g vercel

# 2. From your project directory
cd 3D_portfolio

# 3. Deploy
vercel

# Follow the prompts:
# - Set up and deploy? Y
# - Which scope? (your account)
# - Link to existing project? N
# - Project name? (your-portfolio)
# - Directory? ./
# - Override settings? N

# Your site will be live at: https://your-portfolio.vercel.app
```

---

## Troubleshooting:

- **404 on routes:** Make sure SPA routing is configured (vercel.json already has this)
- **3D models not loading:** Check file paths and ensure files are in `src/assets/3d/`
- **Build errors:** Run `npm run build` locally first to catch errors
- **Large bundle size:** Consider code splitting for 3D models

