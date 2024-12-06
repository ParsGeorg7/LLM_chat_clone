FROM node:latest
WORKDIR /app

COPY . ./

# building the app
RUN npm i
#RUN npm run build

# Running the app
CMD [ "npm", "start" ]
