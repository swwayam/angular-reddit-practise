FROM nodejs:alpine AS build

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

# Serve Application using ngnix server

FROM ngnix:alpine

COPY --from=build /app/dist/angular-reddit-practise/ /usr/share/ngnix/html
 
EXPOSE 80