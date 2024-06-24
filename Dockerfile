# Primera Etapa: Construcción de la aplicación Angular
FROM node:18-alpine as build-step
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm run build --prod

# Segunda Etapa: Configuración del servidor Nginx
FROM nginx:1.17.1-alpine
COPY --from=build-step /app/dist/hunger-food-front-end /usr/share/nginx/html

