FROM node:latest
WORKDIR /app

COPY package.json package-lock.json ./

# building the app
RUN npm i
#RUN npm run build

COPY . .

# Running the app
CMD [ "npm", "start" ]
