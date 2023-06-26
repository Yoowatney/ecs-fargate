FROM node:16.16.0

WORKDIR /usr/src/app

COPY . .

RUN npm install

CMD ["npm", "start"]
