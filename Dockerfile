FROM node:latest

WORKDIR /app
FROM base AS build
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

CMD ["npm", "start"]
