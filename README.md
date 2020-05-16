# Online-Ide
An Online Ide compatible with languages C, C++14, Python and Ruby.


## Steps to install
clone the repository

execute command `docker build -t ide:1 .`

to start sever execute `docker run -p 3000:3000 ide:1`

visit http://localhost:3000 for the IDE

## Built
Online Ide is build with NodeJs using EJS (Embedded JavaScript).

## Features Supported
Show Errors (Compilation, Runtime etc)

Support 4 Languages (C, C++, Python, Ruby)

Allow user input

## Features to be added
Doesn't support tab spacing

Doesn't allow code save

## Helper Repo for Code Editor is present at [Code-Editor](https://github.com/Ryand1234/Code-Editor)
