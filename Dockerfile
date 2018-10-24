FROM node:10

LABEL maintainer="a1p4ca(SeongMin Park) <dev.alpaca@gmail.com>"
ENV APP=/app
RUN mkdir -p ${APP}
WORKDIR ${APP}

RUN yarn global add pm2

COPY package.json $APP/package.json
COPY yarn.lock $APP/yarn.lock
RUN yarn

RUN yarn build

EXPOSE 3000

ENTRYPOINT ["pm2-docker", "start", "--auto-exit", "--env", "production", "ecosystem.config.js"]