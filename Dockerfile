FROM node:12-slim
WORKDIR /app
COPY package.json /app
COPY package-lock.json /app
RUN npm ci
COPY . /app
RUN npm run build
RUN rm -rf node_modules
RUN npm ci --production
CMD  ["node", "server.js"]
