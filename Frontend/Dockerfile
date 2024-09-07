FROM node:18.19.1-alpine as angular
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN npm install -g @angular/cli@18.2
RUN npm install
RUN npm run build
CMD ["ng", "serve", "--host", "0.0.0.0"]
