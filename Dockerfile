FROM node:alpine

WORKDIR /usr/app

ENV PORT=3000

COPY package.json ./

RUN yarn

COPY . .

EXPOSE 3000

CMD yarn start 