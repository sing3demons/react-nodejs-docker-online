FROM node:18.16.0-alpine as builder

WORKDIR /usr/app

COPY ./package*.json ./

RUN npm install

COPY . .

EXPOSE 4173

RUN npm run build


FROM nginx:stable-alpine

COPY --from=builder /usr/app/dist/ /usr/share/nginx/html

COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]