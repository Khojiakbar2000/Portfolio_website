# PM2 Deployment Guide for VPS

This guide will help you deploy your 3D portfolio to a VPS using PM2.

## Prerequisites

- Ubuntu/Debian VPS (or similar Linux distribution)
- Node.js 18+ installed
- PM2 installed globally
- Nginx (recommended for reverse proxy)
- Domain name (optional, but recommended)

---

## Step 1: Prepare Your VPS

### 1.1 Update System
```bash
sudo apt update && sudo apt upgrade -y
```

### 1.2 Install Node.js
```bash
# Install Node.js 20.x (LTS)
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Verify installation
node --version
npm --version
```

### 1.3 Install PM2 Globally
```bash
sudo npm install -g pm2
```

### 1.4 Install Nginx (Optional but Recommended)
```bash
sudo apt install nginx -y
sudo systemctl enable nginx
sudo systemctl start nginx
```

---

## Step 2: Transfer Files to VPS

### Option A: Using Git (Recommended)
```bash
# On your VPS
cd /var/www  # or your preferred directory
git clone YOUR_GITHUB_REPO_URL portfolio
cd portfolio/3D_portfolio
```

### Option B: Using SCP
```bash
# From your local machine
scp -r 3D_portfolio user@your-vps-ip:/var/www/portfolio
```

### Option C: Using rsync
```bash
# From your local machine
rsync -avz --exclude 'node_modules' --exclude 'dist' \
  3D_portfolio/ user@your-vps-ip:/var/www/portfolio/
```

---

## Step 3: Install Dependencies and Build

```bash
cd /var/www/portfolio/3D_portfolio

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
nano .env  # Edit with your EmailJS credentials

# Build the production version
npm run build
```

### Environment Variables (.env)
Edit `.env` file with your EmailJS credentials:
```env
VITE_APP_EMAILJS_SERVICE_ID=your_service_id
VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
PORT=3000
```

**Note:** Since Vite uses `VITE_` prefix, these variables are embedded at build time. You'll need to rebuild after changing them.

---

## Step 4: Start with PM2

### 4.1 Create logs directory
```bash
mkdir -p logs
```

### 4.2 Start the application
```bash
# Start with PM2
npm run pm2:start

# Or directly:
pm2 start ecosystem.config.cjs

# Check status
pm2 status

# View logs
pm2 logs portfolio
```

### 4.3 Save PM2 Configuration
```bash
# Save PM2 process list
pm2 save

# Setup PM2 to start on system boot
pm2 startup
# Follow the instructions it provides (usually run a sudo command)
```

---

## Step 5: Configure Nginx (Reverse Proxy)

### 5.1 Create Nginx Configuration
```bash
sudo nano /etc/nginx/sites-available/portfolio
```

Add this configuration:
```nginx
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;  # Replace with your domain

    # If no domain, use your VPS IP
    # server_name _;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    # Increase timeout for large 3D model files
    proxy_read_timeout 300s;
    proxy_connect_timeout 300s;
}
```

### 5.2 Enable the Site
```bash
# Create symbolic link
sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/

# Test Nginx configuration
sudo nginx -t

# Reload Nginx
sudo systemctl reload nginx
```

---

## Step 6: SSL Certificate (HTTPS) - Optional but Recommended

### Using Let's Encrypt (Free)
```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx -y

# Get SSL certificate
sudo certbot --nginx -d your-domain.com -d www.your-domain.com

# Certbot will automatically update your Nginx config
# Test auto-renewal
sudo certbot renew --dry-run
```

---

## Step 7: Firewall Configuration

```bash
# Allow HTTP and HTTPS
sudo ufw allow 'Nginx Full'
# Or individually:
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp

# If not using Nginx, allow your app port
sudo ufw allow 3000/tcp

# Enable firewall
sudo ufw enable
```

---

## PM2 Commands Reference

```bash
# Start application
npm run pm2:start
# or
pm2 start ecosystem.config.cjs

# Stop application
npm run pm2:stop
# or
pm2 stop portfolio

# Restart application
npm run pm2:restart
# or
pm2 restart portfolio

# Delete from PM2
npm run pm2:delete
# or
pm2 delete portfolio

# View logs
pm2 logs portfolio

# View real-time monitoring
pm2 monit

# View status
pm2 status

# Save current process list
pm2 save

# Reload (zero-downtime restart)
pm2 reload portfolio
```

---

## Updating Your Application

### When you make changes:

```bash
cd /var/www/portfolio/3D_portfolio

# Pull latest changes (if using Git)
git pull origin main

# Install new dependencies (if any)
npm install

# Rebuild
npm run build

# Restart PM2
pm2 restart portfolio

# Or reload (zero-downtime)
pm2 reload portfolio
```

---

## Troubleshooting

### Application not starting
```bash
# Check PM2 logs
pm2 logs portfolio --lines 50

# Check if port is in use
sudo lsof -i :3000

# Check Node.js version
node --version
```

### Nginx 502 Bad Gateway
```bash
# Check if app is running
pm2 status

# Check Nginx error logs
sudo tail -f /var/log/nginx/error.log

# Verify proxy_pass URL matches your app port
```

### 3D Models not loading
- Check file paths in `dist` folder
- Verify file sizes aren't too large
- Check browser console for errors
- Ensure Nginx timeout is increased (see Step 5)

### EmailJS not working
- Verify environment variables are set correctly
- Rebuild after changing `.env` file
- Check browser console for errors
- Verify EmailJS service is active

---

## Performance Optimization

### 1. Enable Gzip Compression in Nginx
Add to your Nginx config:
```nginx
gzip on;
gzip_vary on;
gzip_min_length 1024;
gzip_types text/plain text/css text/xml text/javascript 
           application/x-javascript application/xml+rss 
           application/javascript application/json;
```

### 2. PM2 Cluster Mode (if needed)
Update `ecosystem.config.cjs`:
```js
instances: 'max',  // Use all CPU cores
exec_mode: 'cluster'
```

### 3. Monitor Resources
```bash
pm2 monit
```

---

## Security Checklist

- [ ] Firewall configured (UFW)
- [ ] SSH key authentication (disable password login)
- [ ] SSL certificate installed (HTTPS)
- [ ] Environment variables secured (not in Git)
- [ ] Regular system updates
- [ ] PM2 running as non-root user
- [ ] Nginx configured with security headers

---

## Quick Start Script

Save this as `deploy.sh` for easy deployment:

```bash
#!/bin/bash
cd /var/www/portfolio/3D_portfolio
git pull origin main
npm install
npm run build
pm2 restart portfolio
echo "Deployment complete!"
```

Make it executable:
```bash
chmod +x deploy.sh
```

Run with:
```bash
./deploy.sh
```

---

## Support

If you encounter issues:
1. Check PM2 logs: `pm2 logs portfolio`
2. Check Nginx logs: `sudo tail -f /var/log/nginx/error.log`
3. Verify all services are running: `pm2 status && sudo systemctl status nginx`

