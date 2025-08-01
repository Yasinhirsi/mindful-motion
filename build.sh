#!/bin/bash

# Build script for Mindful Motion Docker image
# This script builds the image with your Supabase credentials from .env.local

echo "🚀 Building Mindful Motion Docker image..."

# Check if .env.local exists
if [ ! -f .env.local ]; then
    echo "❌ Error: .env.local file not found!"
    echo "Please create .env.local with your Supabase credentials:"
    echo "NEXT_PUBLIC_SUPABASE_URL=your_supabase_url"
    echo "NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key"
    exit 1
fi

# Build the Docker image
echo "🔨 Building Docker image..."
docker build -t mindful-motion .

if [ $? -eq 0 ]; then
    echo "✅ Docker image built successfully!"
    echo "📦 Image name: mindful-motion"
    echo ""
    echo "🚀 To run the container:"
    echo "docker run -p 3000:3000 mindful-motion"
    echo ""
    echo "🌐 Or use docker-compose:"
    echo "docker-compose up -d"
else
    echo "❌ Build failed!"
    exit 1
fi 