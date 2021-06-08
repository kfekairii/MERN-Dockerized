FROM node:14.17.0-alpine as builder
WORKDIR '/app'
COPY ./web/package.json .
RUN npm install
COPY . . 
RUN npm run builde

FROM nginx
#For deploymant in aws Elastic beanstalk
EXPOSE 3000  
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html
