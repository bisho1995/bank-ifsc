FROM node:10
RUN apt-get update
RUN apt-get install -y nmap
RUN npm i  -g yarn
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app/
RUN yarn
COPY . /usr/src/app
ENV PORT=3003
EXPOSE 3003
CMD [ "yarn", "dev" ]
