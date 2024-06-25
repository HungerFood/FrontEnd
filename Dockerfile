#Primera Etapa
FROM node:18-alpine as angular
WORKDIR /app

COPY . .
RUN npm install
RUN npm run build
#Segunda Etapa
FROM httpd:alpine3.15
WORKDIR /usr/local/apache2/htdocs/
COPY --from=angular /app/dist/hungerfood-frontend/browser .
