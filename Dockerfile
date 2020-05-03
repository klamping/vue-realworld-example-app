FROM node:latest
WORKDIR /app
COPY . /app/
RUN yarn install
EXPOSE 8080
CMD [ "yarn", "serve" ]
