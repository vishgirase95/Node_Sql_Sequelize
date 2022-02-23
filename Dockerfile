# FROM node:alpine
# COPY . /app
# CMD node /app/index.js

# FROM node:alpine

# COPY package.json ./
# RUN npm install
# COPY . .
# CMD node app.js
# EXPOSE 3000
# EXPOSE 5000

# FROM node:14
# WORKDIR /usr/src/app
# COPY package.json ./
# RUN npm install
# COPY . .
# EXPOSE 3000
# EXPOSE 5000
# CMD ["node","app.js"]


FROM node:14

COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node","app.js"]