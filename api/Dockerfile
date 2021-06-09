FROM node:14.17.0-alpine

WORKDIR /app

COPY ./api/package.json .
RUN npm install 
RUN npm i -g tsc

COPY ./api .
RUN npm run build

CMD ["npm","run","start"]
