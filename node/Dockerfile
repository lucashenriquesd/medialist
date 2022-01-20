FROM node:17.3-alpine3.15
WORKDIR /usr/src/app
RUN npm install -g nodemon
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install