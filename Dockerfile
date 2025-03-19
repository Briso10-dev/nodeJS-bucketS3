# Build stage
FROM node:20-slim AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Production stage
FROM node:20-slim

WORKDIR /app

# Copy only necessary files from builder
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/app.mjs ./

# Create a non-root user
RUN addgroup --system appgroup && \
    adduser --system appuser --ingroup appgroup && \
    chown -R appuser:appgroup /app

USER appuser

# Set environment variables
ENV NODE_ENV=production

# Expose port if needed (uncomment if you add an HTTP server later)
# EXPOSE 3000

CMD ["node", "app.mjs"]