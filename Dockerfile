FROM node:20-alpine

WORKDIR /app

RUN npm i -g serve

COPY package.json package-lock.json* ./
RUN npm install

COPY . .
RUN npm run build

EXPOSE 3003
CMD ["serve", "-s", "dist", "-p", "3003"]
