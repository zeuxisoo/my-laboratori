## My-Laboratori

A static website to record my side projects

## Usage

### Installation

Install the dependencies

    npm install

### Development

Run the dev server (http://localhost:8080)

    make dev

Build dist directory

    make build

Resize all related data images

    make resize

Clear all generated files and directories

    make clean

### Deploy

Edit the deploy file

    cp deploy.sftp.js.example deploy.sftp.js

    vim deploy.sftp.js

Run the commands

    make deploy

## Nginx

Add the following code to domain configuration

    location / {
        try_files $uri $uri/ /index.html =404;
    }
