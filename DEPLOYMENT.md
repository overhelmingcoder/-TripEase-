# Weather App - Vercel Deployment Guide

This guide will help you deploy your weather app to Vercel without deleting any existing files.

## Prerequisites

1. **Vercel Account**: Sign up at [vercel.com](https://vercel.com) if you don't have one
2. **GitHub Account**: Your code should be in a GitHub repository
3. **OpenWeatherMap API Key**: Get a free API key from [OpenWeatherMap](https://openweathermap.org/api)

## Step 1: Prepare Your Repository

1. **Commit all your changes** to your GitHub repository:
   ```bash
   git add .
   git commit -m "Prepare for Vercel deployment"
   git push origin main
   ```

2. **Verify your project structure** - make sure all files are committed and pushed

## Step 2: Deploy to Vercel

### Option A: Deploy via Vercel Dashboard (Recommended)

1. **Go to [vercel.com](https://vercel.com)** and sign in
2. **Click "New Project"**
3. **Import your GitHub repository**:
   - Select your weather app repository
   - Vercel will automatically detect it's a Next.js project
4. **Configure the project**:
   - Project Name: `weather-app` (or your preferred name)
   - Framework Preset: Next.js (should be auto-detected)
   - Root Directory: `./` (default)
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)
   - Install Command: `npm install` (default)

### Option B: Deploy via Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy from your project directory**:
   ```bash
   vercel
   ```

4. **Follow the prompts**:
   - Link to existing project or create new one
   - Confirm settings
   - Deploy

## Step 3: Configure Environment Variables

**IMPORTANT**: Your app requires these environment variables to work properly.

1. **In your Vercel dashboard**, go to your project
2. **Click on "Settings"** tab
3. **Click on "Environment Variables"**
4. **Add the following variables**:

### Required Variables:
```
NEXTAUTH_URL=https://your-app-name.vercel.app
NEXTAUTH_SECRET=your-secret-key-here
OPENWEATHER_API_KEY=your-openweathermap-api-key
```

### Optional Variables (for full functionality):
```
MONGODB_URI=your-mongodb-connection-string
GOOGLE_CLIENT_ID=your-google-oauth-client-id
GOOGLE_CLIENT_SECRET=your-google-oauth-client-secret
```

### How to get the values:

1. **NEXTAUTH_SECRET**: Generate a random string (32+ characters)
   ```bash
   openssl rand -base64 32
   ```

2. **OPENWEATHER_API_KEY**: 
   - Go to [OpenWeatherMap](https://openweathermap.org/api)
   - Sign up for a free account
   - Get your API key from the dashboard

3. **NEXTAUTH_URL**: This will be your Vercel domain (e.g., `https://weather-app-abc123.vercel.app`)

4. **MONGODB_URI** (Optional):
   - Use MongoDB Atlas for a free cloud database
   - Or leave empty if you don't need user authentication

5. **Google OAuth** (Optional):
   - Go to [Google Cloud Console](https://console.cloud.google.com)
   - Create OAuth 2.0 credentials
   - Add your Vercel domain to authorized origins

## Step 4: Redeploy

After adding environment variables:

1. **Go to "Deployments" tab** in Vercel
2. **Click "Redeploy"** on your latest deployment
3. **Or push a new commit** to trigger automatic deployment

## Step 5: Test Your Deployment

1. **Visit your Vercel URL** (e.g., `https://your-app-name.vercel.app`)
2. **Test the weather functionality**:
   - Search for a city
   - Check if weather data loads
   - Test user authentication (if configured)

## Troubleshooting

### Common Issues:

1. **"API key not configured" error**:
   - Make sure `OPENWEATHER_API_KEY` is set in Vercel environment variables
   - Redeploy after adding the variable

2. **Authentication not working**:
   - Check `NEXTAUTH_URL` matches your Vercel domain
   - Verify `NEXTAUTH_SECRET` is set
   - For Google OAuth, ensure authorized domains include your Vercel URL

3. **Build failures**:
   - Check the build logs in Vercel dashboard
   - Ensure all dependencies are in `package.json`
   - Try running `npm run build` locally first

4. **Database connection issues**:
   - MongoDB is optional - the app works without it
   - If using MongoDB, ensure the connection string is correct
   - Check if your MongoDB Atlas IP whitelist includes Vercel's IPs

### Getting Help:

- Check Vercel's [Next.js documentation](https://vercel.com/docs/frameworks/nextjs)
- Review build logs in Vercel dashboard
- Test locally with `npm run build` and `npm start`

## Features That Work Without Additional Setup:

✅ Weather data display  
✅ City search  
✅ 5-day forecast  
✅ Air pollution data  
✅ UV index  
✅ Interactive maps  
✅ Responsive design  
✅ Dark/light theme  

## Features That Require Additional Setup:

🔧 User authentication (requires MongoDB or Google OAuth)  
🔧 User dashboard (requires authentication)  
🔧 Admin dashboard (requires authentication)  
🔧 Hotel booking (requires external API integration)  

## Next Steps After Deployment:

1. **Custom Domain** (Optional):
   - Add your own domain in Vercel settings
   - Update `NEXTAUTH_URL` to match your custom domain

2. **Analytics** (Optional):
   - Enable Vercel Analytics in your dashboard
   - Add Google Analytics if desired

3. **Performance Monitoring**:
   - Use Vercel's built-in performance monitoring
   - Set up error tracking

Your weather app is now live on Vercel! 🎉
