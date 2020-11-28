FROM node:lts AS development

ENV PORT $PORT

WORKDIR /home/node/app

COPY package.json ./

RUN npm install -s

COPY . ./

CMD ["npm", "run", "dev"]


FROM development AS production

RUN npm run build

EXPOSE $PORT

CMD ["node", "dist/main.js"]