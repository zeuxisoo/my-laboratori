## My-Laboratori

A web application to show my side projects

## Usage

### Installation

Install the dependencies

	npm install

### Development

Run the commands

	make dev
	
The development url

	http://localhost:9090
	
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
