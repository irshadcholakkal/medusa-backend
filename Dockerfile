# FROM node:20-alpine

# WORKDIR /app

# COPY package*.json ./
# RUN npm ci

# COPY . .
# RUN npm run build

# EXPOSE 9000

# CMD ["npm", "run", "start"]
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=9000

RUN npm run build

EXPOSE 9000

CMD ["npm", "run", "start"]
