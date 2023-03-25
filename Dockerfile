FROM node:16-alpine

ENV PORT 3001

WORKDIR /sas

COPY package.json package.json

RUN npm install

COPY . .

RUN npm run build

EXPOSE ${PORT}

CMD ["node","server/index.js"]
