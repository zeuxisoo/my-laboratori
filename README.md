## Laboratori

A static website to record my side projects

## Usage

### Installation

Install the dependencies

    npm install

### Development

Run the dev server (http://localhost:5173)

    make dev

Build dist directory (include resize task)

    make build

Resize all related data images

    make resize

Clear all generated files and directories

    make clean

### Deploy

Edit the deploy file

    cp .env.example .env
    vim .env

Run the commands

    make deploy
