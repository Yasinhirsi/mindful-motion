#!/bin/bash

# Build script for Mindful Motion Docker image
# This script builds the image with your real Supabase credentials

echo "🚀 Building Mindful Motion Docker image with your Supabase credentials..."

# Source the environment variables from .env.local
if [ -f .env.local ]; then
    source .env.local
    echo "✅ Loaded environment variables from .env.local"
else
    echo "❌ Error: .env.local file not found!"
    echo "Please create .env.local with your Supabase credentials:"
    echo "NEXT_PUBLIC_SUPABASE_URL=your_supabase_url"
    echo "NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key"
    exit 1
fi

# Check if environment variables are set
if [ -z "$NEXT_PUBLIC_SUPABASE_URL" ] || [ -z "$NEXT_PUBLIC_SUPABASE_ANON_KEY" ]; then
    echo "❌ Error: Missing Supabase environment variables!"
    echo "Please check your .env.local file"
    exit 1
fi

# Build the Docker image with your credentials
echo "🔨 Building Docker image..."
docker build \
    --build-arg NEXT_PUBLIC_SUPABASE_URL="$NEXT_PUBLIC_SUPABASE_URL" \
    --build-arg NEXT_PUBLIC_SUPABASE_ANON_KEY="$NEXT_PUBLIC_SUPABASE_ANON_KEY" \
    -t mindful-motion .

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