# Deployment Guide for GitHub Pages

## 📋 Pre-Deployment Checklist

✅ `.gitignore` file created  
✅ GitHub Actions workflow configured  
✅ `package.json` scripts updated  
✅ Next.js configured for static export  

## 🚀 GitHub Pages Setup Steps

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com)
2. Click "New repository"
3. Name it `portfolio` (or your preferred name)
4. Make it **Public** (required for free GitHub Pages)
5. Don't initialize with README (we already have one)
6. Click "Create repository"

### Step 2: Connect Local Repository

Run these commands in your project directory:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial portfolio commit"

# Add GitHub remote (replace 'nanragav' with your username)
git branch -M main
git remote add origin https://github.com/nanragav/portfolio.git

# Push to GitHub
git push -u origin main
```

### Step 3: Configure GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll to **Pages** section (left sidebar)
4. Under **Source**, select **"GitHub Actions"**
5. The workflow will automatically run on push

### Step 4: Verify Deployment

1. Go to **Actions** tab in your repository
2. Watch the deployment workflow run
3. Once complete, your site will be available at:
   `https://nanragav.github.io/portfolio`

## 🔧 Local Testing

Before deploying, test the build locally:

```bash
# Build the project
npm run build

# Serve the built files (install serve globally if needed)
npx serve out
```

## 🛠️ Troubleshooting

### Common Issues:

1. **Build fails on GitHub Actions**
   - Check the Actions tab for error details
   - Ensure all dependencies are in `package.json`
   - Verify TypeScript errors are fixed

2. **Images not loading**
   - Ensure images are in the `public` folder
   - Use relative paths (`/images/...`)

3. **CSS not applying**
   - Check `tailwind.config.js` content paths
   - Verify `globals.css` imports

4. **404 on GitHub Pages**
   - Ensure repository name matches URL
   - Check if Pages is enabled in settings
   - Wait a few minutes for deployment

### Useful Commands:

```bash
# Check for TypeScript errors
npm run lint

# Build and export
npm run build

# Test build locally
npx serve out -p 3000
```

## 🔄 Future Updates

To update your live site:

1. Make changes locally
2. Test with `npm run dev`
3. Commit and push to main branch:
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push
   ```
4. GitHub Actions will automatically redeploy

## 📊 Performance Tips

- Images are already optimized for static export
- CSS is purged automatically by Tailwind
- Next.js optimizations are configured
- Lighthouse scores should be 90+

Your portfolio is now ready for GitHub Pages deployment! 🎉