# Torki Ahmed - Portfolio Website

A modern, responsive portfolio website built with Next.js, React, and Framer Motion.

🌐 **Live Site:** [https://AhmedTurkiii.github.io/E-Portfolio](https://AhmedTurkiii.github.io/E-Portfolio)

## Prerequisites

- Node.js 18+ installed
- npm or yarn
- At least 500MB free disk space

## Setup Instructions

1. **Free up disk space** (currently at 100% capacity)
   - Clean npm cache: `npm cache clean --force`
   - Remove unused node_modules: Find and delete old project node_modules
   - Empty trash/bin

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production (static export)
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run deploy` - Build and deploy to GitHub Pages

## Project Structure

```
├── app/
│   ├── layout.jsx      # Root layout with navigation
│   ├── page.jsx        # Home page
│   └── globals.css     # Global styles
├── components/
│   ├── portfolio/      # Portfolio sections
│   └── ui/             # UI components (Button, Input, Textarea)
└── package.json
```

## Customization

Update the following files with your information:
- `components/portfolio/HeroSection.jsx` - Name, title, description
- `components/portfolio/AboutSection.jsx` - About content and stats
- `components/portfolio/ProjectsSection.jsx` - Your projects
- `components/portfolio/ExperienceSection.jsx` - Work experience
- `components/portfolio/ContactSection.jsx` - Contact information
- `components/portfolio/Layout.jsx` - Logo/name in navigation
- `components/portfolio/Footer.jsx` - Footer text

## Technologies Used

- Next.js 14
- React 18
- Framer Motion
- Tailwind CSS
- Lucide React (icons)
- Sonner (toast notifications)

## Deployment

This portfolio is deployed on GitHub Pages. See [DEPLOY.md](./DEPLOY.md) for detailed deployment instructions.

**Quick Deploy:**
```bash
npm run deploy
```

This will build the static site and push it to the `gh-pages` branch.

