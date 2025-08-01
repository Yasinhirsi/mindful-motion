# Mindful Motion Deployment Guide

This guide explains how to deploy the Mindful Motion application on different platforms.

## 🐳 Docker Deployment

### Local Development
```bash
# Build the secure image (no credentials embedded)
docker build -t mindful-motion .

# Run with environment variables
docker run -p 3000:3000 \
  -e NEXT_PUBLIC_SUPABASE_URL=your_supabase_url \
  -e NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key \
  mindful-motion
```

### Using Docker Compose
```bash
# Create .env file with your credentials (NOT .env.local)
echo "NEXT_PUBLIC_SUPABASE_URL=your_supabase_url" > .env
echo "NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key" >> .env

# Run with docker-compose
docker-compose up -d
```

### 🔐 Security Features
- ✅ **No credentials embedded in Docker image**
- ✅ **Runtime environment injection only**
- ✅ **Image can be safely shared/distributed**
- ✅ **Each environment can use different Supabase projects**

## ☁️ Cloud Deployment Options

### AWS ECS Fargate

#### Task Definition Environment Variables
```json
{
  "environment": [
    {
      "name": "NEXT_PUBLIC_SUPABASE_URL",
      "value": "your_supabase_project_url"
    },
    {
      "name": "NEXT_PUBLIC_SUPABASE_ANON_KEY",
      "value": "your_supabase_anon_key"
    },
    {
      "name": "NODE_ENV",
      "value": "production"
    }
  ]
}
```

#### Container Port Mapping
- Container Port: 3000
- Protocol: TCP

### Google Cloud Run

#### Environment Variables
```bash
gcloud run deploy mindful-motion \
  --image gcr.io/your-project/mindful-motion \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated \
  --set-env-vars="NEXT_PUBLIC_SUPABASE_URL=your_supabase_url,NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key"
```

### Azure Container Instances

#### Environment Variables
```bash
az container create \
  --resource-group your-rg \
  --name mindful-motion \
  --image your-registry/mindful-motion \
  --ports 3000 \
  --environment-variables \
    NEXT_PUBLIC_SUPABASE_URL=your_supabase_url \
    NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key
```

### Heroku

#### Environment Variables
```bash
heroku config:set NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
heroku config:set NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key
```

## 🔐 Environment Variables

### Required Variables
- `NEXT_PUBLIC_SUPABASE_URL`: Your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Your Supabase anonymous key

### Optional Variables
- `NODE_ENV`: Set to `production` for production deployments
- `NEXT_TELEMETRY_DISABLED`: Set to `1` to disable Next.js telemetry

## 🚀 Production Checklist

- [ ] Set up Supabase project
- [ ] Configure environment variables at runtime
- [ ] Build Docker image (no credentials needed)
- [ ] Deploy to chosen platform
- [ ] Set up custom domain (optional)
- [ ] Configure SSL/TLS
- [ ] Set up monitoring and logging
- [ ] Test all features (auth, emotion analysis, etc.)

## 🔧 Troubleshooting

### Common Issues

1. **Supabase Connection Errors**
   - Verify environment variables are set correctly at runtime
   - Check Supabase project is active
   - Ensure CORS settings allow your domain

2. **Build Failures**
   - Ensure all dependencies are installed
   - Check for TypeScript errors
   - Verify Next.js configuration

3. **Runtime Errors**
   - Check container logs: `docker logs container-name`
   - Verify port mappings
   - Ensure environment variables are accessible

### Health Check
```bash
# Test if the application is responding
curl -I http://your-domain:3000
```

## 📝 Security Notes

- ✅ The Docker image is built WITHOUT any credentials
- ✅ Environment variables are injected at runtime only
- ✅ This makes the image portable and secure across different environments
- ✅ You can safely share the Docker image without exposing your Supabase credentials
- ✅ Each deployment can use different Supabase projects by changing environment variables 