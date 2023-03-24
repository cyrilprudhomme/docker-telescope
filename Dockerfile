FROM node:latest as builder
RUN npm i -g @ionic/cli
RUN npm i -g @angular/cli
WORKDIR /usr/src/app
COPY front/package*.json ./
RUN npm install
COPY front .
RUN npm run build_ionic

FROM node:latest
WORKDIR /usr/src/app
COPY server/package*.json ./
RUN npm ci --only=production
COPY server/. .
COPY --from=builder /usr/src/app/www ./www
CMD [ "node", "index.js" ]
