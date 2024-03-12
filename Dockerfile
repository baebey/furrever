FROM node:current-slim

WORKDIR /FurreverProject

COPY ./FurreverProject/package.json ./FurreverProject/package-lock.json ./

RUN npm install

COPY . /FurreverProject

EXPOSE 8081

CMD ["npx", "expo", "start"]