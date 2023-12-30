FROM node:20-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci && npm run build

COPY . .

EXPOSE 3000

CMD npm run start