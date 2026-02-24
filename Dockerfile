FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --production

COPY . .

RUN ls -la /app        # ← add this line temporarily
RUN ls -la /app/views  # ← add this line temporarily

EXPOSE 3000
CMD ["node", "server.js"]