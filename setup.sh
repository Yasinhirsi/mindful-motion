#!/bin/bash

echo "🚀 Mindful Motion Setup"
echo "========================"
echo ""
echo "This app requires your own Supabase project for data privacy."
echo ""

# Check if .env.local already exists
if [ -f .env.local ]; then
    echo "✅ .env.local found!"
    echo "Current Supabase URL: $(grep NEXT_PUBLIC_SUPABASE_URL .env.local | cut -d'=' -f2)"
    echo ""
    read -p "Do you want to update your Supabase credentials? (y/n): " update
    if [ "$update" != "y" ]; then
        echo "Using existing credentials."
        exit 0
    fi
fi

echo "📋 Please provide your Supabase credentials:"
echo ""

# Get Supabase URL
read -p "Enter your Supabase URL (e.g., https://your-project.supabase.co): " supabase_url

# Get Supabase Anon Key
read -p "Enter your Supabase Anon Key: " supabase_key

# Create .env.local
echo "NEXT_PUBLIC_SUPABASE_URL=$supabase_url" > .env.local
echo "NEXT_PUBLIC_SUPABASE_ANON_KEY=$supabase_key" >> .env.local

echo ""
echo "✅ .env.local created successfully!"
echo ""
echo "🚀 You can now run the app:"
echo "   docker-compose up"
echo ""
echo "📖 To get your Supabase credentials:"
echo "   1. Go to https://supabase.com"
echo "   2. Create a new project"
echo "   3. Go to Settings > API"
echo "   4. Copy the URL and anon key" 