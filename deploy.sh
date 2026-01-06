#!/bin/bash

# Portfolio Deployment Script for VPS
# Usage: ./deploy.sh

echo "🚀 Starting deployment..."

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Are you in the project root?"
    exit 1
fi

# Install dependencies
echo -e "${YELLOW}📦 Installing dependencies...${NC}"
npm install

# Build the application
echo -e "${YELLOW}🔨 Building application...${NC}"
npm run build

# Check if build was successful
if [ ! -d "dist" ]; then
    echo "❌ Error: Build failed. dist directory not found."
    exit 1
fi

# Create logs directory if it doesn't exist
mkdir -p logs

# Check if PM2 is installed
if ! command -v pm2 &> /dev/null; then
    echo -e "${YELLOW}⚠️  PM2 not found. Installing globally...${NC}"
    npm install -g pm2
fi

# Stop existing instance if running
echo -e "${YELLOW}🛑 Stopping existing instance (if any)...${NC}"
pm2 stop portfolio 2>/dev/null || true
pm2 delete portfolio 2>/dev/null || true

# Start with PM2
echo -e "${YELLOW}▶️  Starting application with PM2...${NC}"
pm2 start ecosystem.config.cjs

# Save PM2 configuration
pm2 save

# Show status
echo -e "${GREEN}✅ Deployment complete!${NC}"
echo ""
echo "📊 Application Status:"
pm2 status portfolio
echo ""
echo "📝 View logs with: pm2 logs portfolio"
echo "🔄 Restart with: pm2 restart portfolio"
echo "🛑 Stop with: pm2 stop portfolio"

