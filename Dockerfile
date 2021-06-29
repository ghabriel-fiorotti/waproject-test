FROM node:14

WORKDIR /usr/api/

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000
CMD ["npm", "start"]