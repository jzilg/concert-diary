FROM node:14-slim as build-stage
WORKDIR /app
COPY . /app
RUN npm ci
RUN npm run build

FROM nginx:latest
COPY --from=build-stage /app/build /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
