# John's 3D Portfolio Website

A modern, interactive 3D portfolio website showcasing full-stack development projects and experience.

![Portfolio](https://img.shields.io/badge/React-18.2.0-blue) ![Vite](https://img.shields.io/badge/Vite-4.4.5-purple) ![Three.js](https://img.shields.io/badge/Three.js-0.157.0-green)

## 🌟 Features

- **3D Interactive Homepage** - Rotatable island scene with animations
- **Dark Mode** - Full dark mode support with theme persistence
- **Bilingual** - English and Korean language support
- **Responsive Design** - Works on all devices
- **Contact Form** - EmailJS integration for inquiries
- **Project Showcase** - Detailed project pages with tech stacks

## 🚀 Quick Start

### Development
```bash
npm install
npm run dev
```

### Production Build
```bash
npm run build
npm run preview
```

### Deploy with PM2
```bash
npm install
npm run build
pm2 start ecosystem.config.cjs
pm2 save
```

## 📁 Project Structure

```
src/
├── assets/        # 3D models, images, icons
├── components/    # Reusable components
├── contexts/      # Theme & Language contexts
├── pages/         # Page components
├── translations/  # i18n files (en, ko)
└── models/        # 3D model components
```

## 🛠️ Tech Stack

- **React 18.2.0** - UI Framework
- **Vite** - Build Tool
- **Three.js / React Three Fiber** - 3D Graphics
- **Tailwind CSS** - Styling
- **React Router** - Navigation
- **EmailJS** - Contact Form

## 📧 Contact

- **Email**: john369dev@gmail.com
- **Phone**: 01098926611

## 📝 Documentation

- `PROJECT_SUMMARY.md` - Complete project documentation
- `PM2_DEPLOYMENT.md` - VPS deployment guide
- `DEPLOYMENT.md` - Alternative deployment options

## 🎨 Customization

All personal information, projects, and work experience are in:
- `src/constants/index.js` - Data constants
- `src/translations/` - Translation files
- `src/assets/images/logo.svg` - Logo

## 📄 License

Private project - All rights reserved

---

**Built with ❤️ by John**
