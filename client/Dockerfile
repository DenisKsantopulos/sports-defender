FROM node:22-alpine3.19 as build

# dependency installation
COPY package*.json .

RUN npm i 

# building production folder
COPY . . 

RUN npm run build

# running production via Nginx
FROM nginx:1.27.0-alpine as prod 

COPY --from=build /build /usr/share/nginx/html
COPY --from=build /nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 5173

CMD ["nginx", "-g", "daemon off;"]

