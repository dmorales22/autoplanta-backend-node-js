# Autoplanta Backend

This is a backend for new version of Autoplanta. 

## Install

To install the backend on a server, make sure you have these prerequisite programs installed onto your server.

- Node.js 14 and above
- npm
- MongoDB 5.0 and above
- Git

Lookup any guides out there to install this software relating to your OS and development environment.

### Download Project

You can download this project by using the git clone command. Make sure you have proper authorization to use to this Git repository as it may ask for a username and password (or token).

`git clone https://github.com/nop-softworks/autoplanta-backend-nodejs`

### Quick Start

Once the project is downloaded. Go to the directory of the project in your command line and run this command to install dependencies:

`npm install`

Then start up the server with this command:

`npm start`

If there are any errors, make sure you have the prerequisite software and any dependencies installed first.

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT` The port the server will run on. Any ports below 1024 will require root access. Please input only a number here.

Ex: 5001

`MONGODB_USER` The user of the MongoDB

Ex: dev

`MONGODB_NAME` The name of the database you are trying to access to.

Ex: DevDB

`MONGODB_SERVER` The URL or IP address of the database server

Ex: localhost:27012

`DB_PASSWORD` The password of the user to access the database server

Ex: devPass233xLc@

`TOKEN_KEY` The key for the JWT tokens. It can be any sequence of numbers and letters, just make sure it's a strong key.

Ex: bn2sLcM34xX302PIn\*23

`COOKIE_EXP` The number of hours before a cookie is expires. Please input only a number.

Ex: 24

`CORSURL` An URL or IP address that has access to any routes of the backend. This is to prevent outside sources from running requests to any route of the server.

Ex: localhost:3000

`COOKIE_SECRET` The JWT cookies secret key. It can be any sequence of numbers and letters, just make sure it's a strong key.

Ex: scN9s1BMnXa02uUclmMA2

`SSL_KEY` The directory path of where your SSL key is. This is for SSL and HTTPS.

Ex: /dir/privkey.pem

`SSL_CERT` The directory path of where your SSL cert is. This is for SSL and HTTPS.

Ex: /dir/cert.pem

`SSL_CA` The directory path of where your SSL CA is. This is for SSL and HTTPS.

Ex: /dir/chain.pem

`SITE_URL` The base or default URL the system will use. This is used to hard code URLs like in the QR codes.

Ex: http://localhost:3000/

`DEPLOYMENT`: Either a 0 or 1. 0 is for local testing and 1 is for deployment. Deployment will use HTTPS/SSL and stricter security settings. Please just enter a 0 or 1 only.

Ex: 0

### Sample .env

And of course, there's a sample .env file is included in this repo.

## Contributors

Here are the list of people have contributed to this repo:

- David Morales (dmoral1414@gmail.com)
