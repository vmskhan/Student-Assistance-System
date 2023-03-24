FROM node:18-buster

ENV PORT 3001

WORKDIR /sas

COPY package.json package.json

RUN npm install

COPY . .

RUN npm run build

EXPOSE ${PORT}

CMD ["node","server/index.js"]