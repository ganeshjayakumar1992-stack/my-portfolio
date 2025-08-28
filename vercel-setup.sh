#!/bin/bash

echo "🚀 Vercel Deployment Setup Script"
echo "=================================="

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "📦 Installing Vercel CLI..."
    npm install -g vercel
else
    echo "✅ Vercel CLI already installed"
fi

echo ""
echo "🔐 Please login to Vercel (this will open your browser):"
vercel login

echo ""
echo "🔗 Linking project to Vercel..."
vercel link

echo ""
echo "🚀 Deploying to production..."
vercel --prod

echo ""
echo "✅ Setup complete! Your project should now be connected to Vercel."
echo "🌐 Check your Vercel dashboard for the deployment URL."
echo ""
echo "📝 To trigger future deployments, simply push to GitHub:"
echo "   git push origin main"
