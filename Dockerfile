FROM node:20.12.0-alpine

WORKDIR /usr/app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

RUN npm install pm2 -g

CMD ["pm2-runtime", "src/index.js"]

