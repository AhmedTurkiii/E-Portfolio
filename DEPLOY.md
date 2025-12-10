# GitHub Pages Deployment Guide

## Initial Setup

1. **Initialize Git repository** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Portfolio website"
   ```

2. **Create GitHub repository**:
   - Go to https://github.com/new
   - Repository name: `E-Portfolio`
   - Make it public (required for GitHub Pages free tier)
   - Don't initialize with README, .gitignore, or license

3. **Connect to GitHub and push**:
   ```bash
   git remote add origin https://github.com/AhmedTurkiii/E-Portfolio.git
   git branch -M main
   git push -u origin main
   ```

## Deploy to GitHub Pages

1. **Build and deploy**:
   ```bash
   npm run deploy
   ```

   This will:
   - Build the Next.js app as static files
   - Deploy the `out` folder to the `gh-pages` branch
   - Your site will be live at: https://AhmedTurkiii.github.io/E-Portfolio

## Enable GitHub Pages

1. Go to your repository: https://github.com/AhmedTurkiii/E-Portfolio
2. Click **Settings** → **Pages**
3. Under **Source**, select:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
4. Click **Save**

Your portfolio will be available at: **https://AhmedTurkiii.github.io/E-Portfolio**

## Future Updates

After making changes:
```bash
git add .
git commit -m "Update portfolio"
git push origin main
npm run deploy
```

## Troubleshooting

- If the site shows 404, wait a few minutes for GitHub Pages to update
- Clear browser cache (Cmd+Shift+R / Ctrl+Shift+R)
- Check that the `gh-pages` branch exists in your repository
- Verify the basePath in `next.config.js` matches your repository name

