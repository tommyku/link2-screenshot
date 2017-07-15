FROM node:8.1.4

ENV PROJECT_DIR=/usr/src/app/

WORKDIR $PROJECT_DIR

COPY package.json $PROJECT_DIR

RUN npm install

COPY entrypoint $PROJECT_DIR

COPY . $PROJECT_DIR

EXPOSE 8080

ENTRYPOINT [ "./entrypoint" ]

CMD [ "start" ]
