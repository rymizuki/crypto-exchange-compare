FROM node:10.4.0-alpine

RUN apk update \
  && apk --no-cache --update add yarn \
  && apk --no-cache --update add tzdata \
  && cp /usr/share/zoneinfo/Asia/Tokyo /etc/localtime \
  && apk del tzdata \
  && rm -fr /var/cache/apk/*

WORKDIR /app

EXPOSE 8080

COPY ./package.json   /app/package.json
COPY ./yarn.lock      /app/yarn.lock

RUN yarn install

CMD ["yarn", "dev"]
