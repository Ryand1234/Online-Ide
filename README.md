# Online-Ide  ![Docker Image CI](https://github.com/Ryand1234/Online-Ide/workflows/Docker%20Image%20CI/badge.svg)
An Online Ide compatible with languages C, C++14, Python and Ruby.


## Steps to build locally
clone the repository

execute command `docker build -t ide:1 .`

to start sever execute `docker run -p 3000:3000 ide:1`

visit http://localhost:3000 for the IDE

## Built
Online Ide is build with NodeJs using React as frontend.

## Features Supported
Show Errors (Compilation, Runtime etc)

Support 4 Languages (C, C++, Python, Ruby)

Code highlighting

Improved Rich Editor

## Features to be added
Doesn't allow code save

Allow user input

## Helper Repo for Code Editor is present at [Code-Editor](https://github.com/Ryand1234/Code-Editor)
