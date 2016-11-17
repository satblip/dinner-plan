FROM node:6.9.1

ENV APP_NAME dinnerplan
ENV NODE_TLS_REJECT_UNAUTHORIZED 0

WORKDIR /var/www

ADD package.json /tmp/package.json
RUN cd /tmp && npm config set registry http://registry.npmjs.org/ && npm config set loglevel info && npm install --no-optional
RUN mkdir -p /var/www && cp -a /tmp/node_modules /var/www && cp /tmp/package.json /var/www && cd /var/www

COPY ./.eslintrc /var/www/.eslintrc
COPY ./webpack.config.js /var/www/webpack.config.js
COPY ./dist /var/www/dist
COPY ./src /var/www/src

CMD ["npm", "start"]
