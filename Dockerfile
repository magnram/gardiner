FROM node:latest

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

ARG REACT_APP_BACKEND_URL

ENV REACT_APP_BACKEND_URL $REACT_APP_BACKEND_URL

CMD ["npm", "start"]