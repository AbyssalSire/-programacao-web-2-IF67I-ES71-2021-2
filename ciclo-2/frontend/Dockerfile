# syntax=docker/dockerfile:1
FROM node:16
WORKDIR /frontend
COPY package*.json ./
RUN yarn install
COPY . .
EXPOSE 5000
CMD ["npm", "start"]