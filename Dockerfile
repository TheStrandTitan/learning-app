FROM node:latest

WORKDIR /usr/src/app/learningTestHere/

COPY package.json ./

RUN npm install
RUN npm install -g serve

COPY . .

RUN npm run build

CMD npm run start