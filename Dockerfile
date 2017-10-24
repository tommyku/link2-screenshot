FROM ubuntu:16.04

# Preparing dependencies

ENV DEBIAN_FRONTEND noninteractive

RUN apt-get -y update && \
    apt-get install -y --no-install-recommends curl bzip2 ca-certificates

RUN curl -sL https://deb.nodesource.com/setup_8.x | bash -

RUN apt-get -y update && \
    apt-get install -y --no-install-recommends nodejs apt-utils locales fonts-noto-cjk fonts-noto libfontconfig && \
    rm -rf /var/lib/apt/lists/*

RUN localedef -i en_HK -c -f UTF-8 -A /usr/share/locale/locale.alias en_HK.UTF-8

ENV LANG en_HK.utf8

# Setup for the project

ENV PROJECT_DIR=/usr/src/app/

RUN mkdir -p $PROJECT_DIR

WORKDIR $PROJECT_DIR

COPY package.json $PROJECT_DIR

RUN npm install

COPY entrypoint $PROJECT_DIR

COPY . $PROJECT_DIR

EXPOSE 8080

ENTRYPOINT [ "./entrypoint" ]

CMD [ "start" ]
