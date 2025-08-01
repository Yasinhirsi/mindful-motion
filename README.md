# Mindful Motion

A Next.js application for mental health tracking and emotion analysis.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- Supabase account

### Local Development
1. Clone the repository
2. Install dependencies: `npm install`
3. Create `.env.local` with your Supabase credentials:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```
4. Run the development server: `npm run dev`

## 🐳 Docker Deployment

### Secure Container Setup
The Docker image is built **without embedding any credentials**, making it safe to share and deploy.

#### Build the Image
```bash
# Build without credentials (they're injected at runtime)
./build.sh
```

#### Run with Environment Variables
```bash
# Method 1: Direct docker run
docker run -p 3000:3000 \
  -e NEXT_PUBLIC_SUPABASE_URL=your_supabase_url \
  -e NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key \
  mindful-motion

# Method 2: Using docker-compose
echo "NEXT_PUBLIC_SUPABASE_URL=your_supabase_url" > .env
echo "NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key" >> .env
docker-compose up -d
```

### 🔐 Security Features
- ✅ **No credentials embedded in Docker image**
- ✅ **Runtime environment injection only**
- ✅ **Image can be safely shared/distributed**
- ✅ **Each environment can use different Supabase projects**

## 🛠️ Tech Stack

- **Frontend:** Next.js 14, React, TypeScript
- **Styling:** Tailwind CSS, shadcn/ui
- **Backend:** Supabase (PostgreSQL + Auth)
- **Deployment:** Docker, Docker Compose

## 📁 Project Structure

```
mindful-motion/
├── app/                 # Next.js app directory
├── components/          # React components
├── lib/                 # Utility functions
├── hooks/               # Custom React hooks
├── styles/              # Global styles
├── public/              # Static assets
├── supabase/            # Supabase configuration
└── migrations/          # Database migrations
```

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run test` - Run tests

### Database Setup
1. Create a Supabase project
2. Run the SQL schema in `schema.sql`
3. Configure environment variables

## 📚 Documentation

- [Deployment Guide](./DEPLOYMENT_GUIDE.md) - Detailed deployment instructions
- [API Documentation](./API.md) - API endpoints and usage

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License.


