# syntax=docker/dockerfile:1
FROM node:16
WORKDIR /api
COPY package*.json ./
RUN yarn install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]