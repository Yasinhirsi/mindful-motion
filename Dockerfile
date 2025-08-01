FROM node:18-alpine
WORKDIR /app

# Set environment variables
ENV NODE_ENV=development
ENV NEXT_TELEMETRY_DISABLED=1

COPY package*.json ./

# Install dependencies
RUN npm ci --legacy-peer-deps

COPY . .

# Expose port
EXPOSE 3000

# Start the development server
CMD ["npm", "run", "dev"] 