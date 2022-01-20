FROM node:17.3-alpine3.15
# needed for bcrypt since it uses node-gyp
RUN apk add python3 make g++
WORKDIR /usr/src/app
RUN npm install -g nodemon
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install