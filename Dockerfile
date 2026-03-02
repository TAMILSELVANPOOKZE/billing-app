# Use lightweight Node image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files first (for caching)
COPY package*.json ./

# Install only production dependencies
RUN npm install --omit=dev

# Copy remaining app files
COPY . .

# Expose port (important for AKS)
EXPOSE 3000

# Start the app
CMD ["npm", "start"]