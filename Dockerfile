FROM ubuntu:19.10
RUN apt-get update

#Install C/C++ Compiler
RUN apt-get install -y gcc
RUN apt-get install -y g++

#Install Ruby Compiler
RUN apt-get install -y ruby-full

#Install Node
RUN apt-get install -y npm
RUN apt-get install -y nodejs

#Install Python3 Compiler
RUN apt-get install -y python3

#Free Extra Space
RUN apt-get autoremove

COPY . /usr/local/ide
WORKDIR /usr/local/ide

#Installing Node Dependencies
RUN npm install nodaemon

RUN ls -la

EXPOSE 3000

#Run server
CMD [ "node", "main.js" ]
