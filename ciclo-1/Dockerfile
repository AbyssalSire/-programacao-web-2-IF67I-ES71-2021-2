# syntax=docker/dockerfile:1
FROM node:16
WORKDIR /programacao-web-2-if67i-es71-2021-2
COPY package*.json ./
RUN yarn install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]