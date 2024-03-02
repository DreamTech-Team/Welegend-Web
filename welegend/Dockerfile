FROM node:20-alpine

WORKDIR /usr/src/app

COPY package*.json ./

COPY prisma ./prisma/

RUN npm ci

COPY . .

RUN npx prisma generate --schema ./prisma/schema.prisma

RUN npm run build

EXPOSE 3000

ENV HOST=0.0.0.0 PORT=3000 NODE_ENV=production

CMD [ "npm", "start" ]