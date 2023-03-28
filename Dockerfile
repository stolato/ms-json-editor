FROM node:19.7.0-alpine3.17

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 8080

CMD ["node", "dist/main"]
