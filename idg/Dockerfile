FROM node:12.10.0

WORKDIR /app

COPY package.json yarn.lock cas.cer /app/

ENV NODE_EXTRA_CA_CERTS /app/cas.cer

RUN yarn config set cafile /app/cas.cer
RUN yarn install

COPY . /app

CMD yarn develop -H 0.0.0.0 -p 8000

EXPOSE 8000
