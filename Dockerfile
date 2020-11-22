FROM node:lts

ENV PORT $PORT

WORKDIR /home/node/app

COPY package.json ./

RUN npm install -s

COPY . ./

RUN npm run build

EXPOSE $PORT

CMD ["node", "dist/main.js"]