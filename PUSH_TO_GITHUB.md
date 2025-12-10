# Quick Guide: Push to GitHub

## Step 1: Create Repository on GitHub
1. Go to: https://github.com/new
2. Repository name: `E-Portfolio`
3. Description: `Modern portfolio website built with Next.js, React, and Framer Motion`
4. Make it **Public** (required for GitHub Pages)
5. **DO NOT** check:
   - ❌ Add README
   - ❌ Add .gitignore  
   - ❌ Choose a license
6. Click **"Create repository"**

## Step 2: Push Your Code

After creating the repository, run these commands:

```bash
# Commit all files
git commit -m "Initial commit - Portfolio website"

# Add remote repository (replace with your actual GitHub username if different)
git remote add origin https://github.com/AhmedTurkiii/E-Portfolio.git

# Rename branch to main
git branch -M main

# Push to GitHub
git push -u origin main
```

## Step 3: Deploy to GitHub Pages

```bash
npm run deploy
```

This will:
- Build your Next.js app as static files
- Create/update the `gh-pages` branch
- Deploy to GitHub Pages

## Step 4: Enable GitHub Pages

1. Go to: https://github.com/AhmedTurkiii/E-Portfolio/settings/pages
2. Under **Source**:
   - Branch: Select `gh-pages`
   - Folder: Select `/ (root)`
3. Click **Save**

## Step 5: Wait & Access

- Wait 1-2 minutes for GitHub Pages to update
- Your portfolio will be live at: **https://AhmedTurkiii.github.io/E-Portfolio**

## Troubleshooting

If you get authentication errors:
```bash
# Use GitHub CLI or Personal Access Token
# Or use SSH instead:
git remote set-url origin git@github.com:AhmedTurkiii/E-Portfolio.git
```

If the site shows 404:
- Wait a few minutes (GitHub Pages can take 1-5 minutes to update)
- Clear browser cache
- Check that `gh-pages` branch exists in your repository

