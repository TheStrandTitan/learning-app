FROM node:latest

WORKDIR /usr/src/app/learningTestHere/

COPY package.json ./

RUN npm install

COPY . .

RUN npm run build

CMD npm run start