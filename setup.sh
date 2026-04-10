#!/bin/bash

# AJXS Website - Quick Setup Script
# This script sets up the development environment

echo "🚀 Welcome to AJXS Website Setup!"
echo "================================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed!"
    echo "📥 Download from: https://nodejs.org/"
    echo "   Choose the LTS version (18.0 or higher)"
    exit 1
fi

echo "✅ Node.js detected: $(node -v)"
echo "✅ npm detected: $(npm -v)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Create .env file if it doesn't exist
if [ ! -f .env ]; then
    echo "📝 Creating .env file..."
    cp .env.example .env
    echo "⚠️  Please update .env with your contact information"
fi

echo ""
echo "✅ Setup complete!"
echo ""
echo "🎯 Next steps:"
echo "   1. Update .env with your contact details"
echo "   2. Run: npm run dev"
echo "   3. Visit: http://localhost:5173"
echo ""
echo "📖 For deployment, see DEPLOYMENT_GUIDE.md"
echo ""
