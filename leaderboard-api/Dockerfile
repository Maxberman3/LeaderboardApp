FROM node:alpine
WORKDIR /app
RUN apk update && apk add bash
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
RUN npm i
CMD ["npm", "run", "start"]