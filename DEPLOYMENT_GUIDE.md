# ComplianceAI Website - Deployment Guide

## Overview
This is the redesigned ComplianceAI website with enhanced compliance resources, improved infographics, and professional Accenture-style design elements. This guide will help you deploy the site on GitHub and Vercel.

## Important: node_modules Removed
The `node_modules` folder has been **intentionally removed** from this repository to reduce file size. This is the correct approach for deployment.

## What's Included
- ✅ Redesigned Compliance Resources section with category tabs
- ✅ Professional infographics carousel with navigation
- ✅ Updated LinkedIn profile link
- ✅ Contact form configured to send to f.mohemam85@gmail.com
- ✅ .gitignore file to prevent node_modules from being committed
- ✅ All source code and configuration files

## Deployment Steps

### Step 1: Push to GitHub
1. Initialize a Git repository (if not already done):
   ```bash
   git init
   ```

2. Add all files:
   ```bash
   git add .
   ```

3. Commit the changes:
   ```bash
   git commit -m "Initial commit: ComplianceAI website redesign"
   ```

4. Add your GitHub repository as the remote:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   ```

5. Push to GitHub:
   ```bash
   git push -u origin main
   ```

### Step 2: Deploy on Vercel
1. Go to [Vercel](https://vercel.com) and sign in with your GitHub account
2. Click "New Project"
3. Select your GitHub repository
4. Vercel will automatically detect the project configuration
5. Click "Deploy"

Vercel will:
- Install dependencies using `pnpm install`
- Build the project using `npm run build`
- Deploy the static files and server functions

### Step 3: Environment Variables (Optional)
If you need to configure email settings for the contact form, add these environment variables in Vercel:
- `EMAIL_USER`: Your Gmail address
- `EMAIL_PASSWORD`: Your Gmail app-specific password

## Project Structure
```
grc-consulting-redesign/
├── client/                 # React frontend
│   └── src/
│       ├── pages/         # Main pages (Home, Resources)
│       ├── components/    # Reusable components
│       └── ...
├── server/                # Express backend
│   └── index.ts          # API routes and email handling
├── package.json           # Dependencies and scripts
├── vite.config.ts        # Vite build configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── .gitignore            # Git ignore rules
└── vercel.json           # Vercel deployment configuration
```

## Key Files Modified
- **client/src/pages/Resources.tsx** - Completely redesigned with:
  - Accenture-style compliance resources section
  - Professional infographics carousel
  - Improved navigation and user experience
  
- **client/src/pages/Home.tsx** - Updated with:
  - Full LinkedIn profile URL

- **server/index.ts** - Contact form configured to send to:
  - f.mohemam85@gmail.com

## Build and Development Commands
```bash
# Install dependencies
npm install
# or
pnpm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Important Notes
1. **Do NOT commit node_modules** - The .gitignore file prevents this
2. **Vercel will install dependencies automatically** during deployment
3. **Your designs and animations are preserved** - All Framer Motion animations and Tailwind CSS styling remain intact
4. **Contact form is fully functional** - Inquiries will be sent to your email

## Troubleshooting
If you encounter issues:
1. Ensure all dependencies are listed in package.json
2. Check that the .gitignore file is present
3. Verify environment variables are set in Vercel if needed
4. Check Vercel deployment logs for detailed error messages

## Support
For questions about deployment, refer to:
- [Vercel Documentation](https://vercel.com/docs)
- [GitHub Documentation](https://docs.github.com)
- [Vite Documentation](https://vitejs.dev)

---
**Last Updated:** November 7, 2025
**Status:** Ready for Deployment
