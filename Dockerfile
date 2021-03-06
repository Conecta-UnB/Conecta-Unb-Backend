FROM node:alpine 


WORKDIR /app

COPY package.json ./

RUN yarn install 

COPY . .

EXPOSE 3333

CMD ["yarn", "start"]