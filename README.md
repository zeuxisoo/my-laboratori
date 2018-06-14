## My-Laboratori

A static site generator to generate my my side projects website

## Usage

### Installation

Install the dependencies

    npm install

### Development

Run the commands

    make dev

The development url

    http://localhost:8080

### Deploy

Edit the deploy file

    cp deploy.sftp.js.example deploy.sftp.js
    vim deploy.sftp.js

Run the commands

    make deploy

### Clean

Clear all build files, deploy and env directories

    make clean

## Nginx

Add the following code to domain configuration

    location / {
        try_files $uri $uri/ /index.html =404;
    }
