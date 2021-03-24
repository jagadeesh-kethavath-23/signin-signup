# signin-signup
using nodejs , mongodb,express and handle bars

inorder to deploy i, follow the steps below

note:this repository is to give an intutuion of how webdevelopment project be done using node.js , mongodb , express frameework,handle bars

### step-1
 ```
git clone https://github.com/jagadeesh-kethavath-23/signin-signup.git
```

### step-2
use these command lines to install dependencies and modules:
note:make sure that node js and mongo db are preinstalled in your pc.

This command line is to install jason file packages
```
npm init -y
```
### step-3
This is to install express framework
```
npm install express
```
### step-4
This is to install mongoose
```npm install mongoose
```
### step-5
This is to install nodemom
```
npm install nodemon
```
### step-6
Make edits in the *Scripts* key-value part installed *package.json* file
```
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev" :"nodemon src/app.js -e js,hbs"
  }
```
