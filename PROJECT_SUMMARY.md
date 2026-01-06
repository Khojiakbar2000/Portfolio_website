# 3D Portfolio Website - Project Summary

## Project Overview
A modern, interactive 3D portfolio website built with React, Three.js, and Vite. Features a 3D interactive island scene, dark mode, bilingual support (English/Korean), and a fully responsive design.

## Owner & Contact
- **Name**: John
- **Email**: john369dev@gmail.com
- **Phone**: 01098926611

## Tech Stack

### Frontend
- **React 18.2.0** - UI framework
- **Vite 4.4.5** - Build tool
- **Three.js / React Three Fiber** - 3D graphics
- **React Router DOM** - Navigation
- **Tailwind CSS** - Styling
- **EmailJS** - Contact form handling

### Backend/Deployment
- **Express.js** - Static file server
- **PM2** - Process manager
- **Nginx** - Reverse proxy (recommended)

## Key Features

### 1. 3D Interactive Homepage
- Interactive 3D island scene with:
  - Rotatable island
  - Flying bird animation
  - Biplane model
  - Dynamic sky
- Stage-based navigation (4 stages)
- Background music toggle

### 2. Dark Mode
- Full dark mode support across all pages
- Theme persistence (localStorage)
- System preference detection
- Toggle button in navbar

### 3. Bilingual Support (i18n)
- **Languages**: English (en) and Korean (ko)
- Language switcher in navbar
- All content translated:
  - Navigation
  - About page
  - Projects page
  - Contact page
  - Footer
- Language preference saved in localStorage

### 4. Pages

#### Home (`/`)
- 3D interactive scene
- Stage-based information cards
- Music player

#### About (`/about`)
- Personal introduction
- Skills showcase (with icons)
- Work experience timeline:
  - **Backend Developer** at Fintegra (USA)
    - Mar 2023 – Sep 2025
    - Tech: NestJS, MongoDB, GraphQL, Socket.io, Docker, Nginx, PM2
  - **Front-End Developer** at SkyTech Solutions (Tashkent, Uzbekistan)
    - Apr 2022 – Jan 2023
    - Tech: React.js, TypeScript, Redux Toolkit, SCSS

#### Projects (`/projects`)
- Two main projects:
  1. **ArtHaus** - Full-stack art marketplace
     - Link: http://72.60.236.97:4000/
     - Tech: Next.js, TypeScript, NestJS, GraphQL, MongoDB
  2. **Cafert** - Café management platform
     - Link: http://72.60.236.97:3000/
     - Tech: React.js, TypeScript, Express.js, MongoDB
- Toggle between project details
- Tech stack categorized (Frontend, Backend, Infrastructure)

#### Contact (`/contact`)
- Contact form with EmailJS integration
- 3D fox animation
- Phone number display
- Form validation

### 5. Components
- **Navbar** - Navigation with dark mode & language switcher
- **Footer** - Social links & copyright
- **CTA** - Call-to-action section
- **Alert** - Success/error notifications
- **Loader** - Loading states
- **HomeInfo** - Stage-based info cards

## Project Structure

```
3D_portfolio/
├── src/
│   ├── assets/
│   │   ├── 3d/          # 3D model files (.glb)
│   │   ├── icons/       # SVG icons
│   │   ├── images/      # Images (ArtHaus, Cafert, logo)
│   │   └── sakura.mp3   # Background music
│   ├── components/      # React components
│   ├── constants/       # Data (skills, experiences, projects)
│   ├── contexts/        # Theme & Language contexts
│   ├── hooks/           # Custom hooks
│   ├── models/          # 3D model components
│   ├── pages/           # Page components
│   └── translations/    # i18n translation files
├── public/              # Public assets
├── server.js           # Express server for PM2
├── ecosystem.config.cjs # PM2 configuration
└── deploy.sh           # Deployment script
```

## Environment Variables

Required for EmailJS contact form:
```env
VITE_APP_EMAILJS_SERVICE_ID=your_service_id
VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
PORT=3000
```

**Important**: EmailJS template must be configured to send emails to:
- **To Email**: john369dev@gmail.com
- **To Name**: John

## Deployment

### PM2 on VPS
- Server: Express.js serving static files from `dist/`
- Process Manager: PM2
- Port: 3000 (default)
- Reverse Proxy: Nginx (recommended)

### Quick Deploy Commands
```bash
npm install
npm run build
pm2 start ecosystem.config.cjs
pm2 save
pm2 startup
```

See `PM2_DEPLOYMENT.md` for full deployment guide.

## Build Commands

```bash
npm run dev      # Development server
npm run build    # Production build
npm run preview  # Preview production build
npm start        # Start Express server
```

## PM2 Scripts

```bash
npm run pm2:start    # Start with PM2
npm run pm2:stop     # Stop application
npm run pm2:restart  # Restart application
npm run pm2:delete   # Delete from PM2
```

## Customization Notes

### Logo
- Location: `src/assets/images/logo.svg`
- Text: "John" (replaced from "AH")

### Personal Info
- Name: John
- Introduction: "A full-stack engineer passionate about designing, building, and scaling modern applications."
- Work experience: Updated with Fintegra and SkyTech Solutions details
- Projects: ArtHaus and Cafert only

### Styling
- Dark mode: Fully implemented with Tailwind `dark:` classes
- Colors: Blue gradient for highlights
- Fonts: Poppins (headings), Work Sans (body)

## Important Files

- `src/pages/Contact.jsx` - Contact form (EmailJS config)
- `src/constants/index.js` - All data (experiences, projects, skills)
- `src/translations/en.js` & `ko.js` - Translation files
- `src/contexts/ThemeContext.jsx` - Dark mode management
- `src/contexts/LanguageContext.jsx` - Language switching
- `vercel.json` - Vercel deployment config (if using Vercel)
- `ecosystem.config.cjs` - PM2 configuration
- `server.js` - Express server for PM2 deployment

## Recent Updates

1. ✅ Dark mode implementation
2. ✅ Bilingual support (English/Korean)
3. ✅ Updated personal information (John, work experience)
4. ✅ Added ArtHaus and Cafert projects
5. ✅ Updated contact email to john369dev@gmail.com
6. ✅ Fixed all dark mode text visibility issues
7. ✅ PM2 deployment setup

## Notes for Future Development

- EmailJS template must be configured on EmailJS dashboard
- 3D models (.glb files) are in `src/assets/3d/`
- All translations are in `src/translations/`
- Dark mode uses Tailwind's class-based dark mode
- Language preference persists in localStorage
- Theme preference persists in localStorage

## Deployment URLs

- ArtHaus: http://72.60.236.97:4000/
- Cafert: http://72.60.236.97:3000/
- Portfolio: (To be deployed on VPS with PM2)

---

**Last Updated**: 2025
**Maintained By**: John (john369dev@gmail.com)

