FROM node:14

WORKDIR /api

COPY package*.json /api
RUN npm install

COPY . /api