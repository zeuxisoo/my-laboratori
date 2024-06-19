.PHONY: build

all:
	@echo
	@echo "Command      : Description"
	@echo "------------ : -----------"
	@echo "make dev     : Start the development server"
	@echo "make build   : Build the website into dist directory"
	@echo "make deploy  : Deploy the dist directory to server"
	@echo "make clean   : Clean all generated files and directories"
	@echo "make resize  : Resize the data images"
	@echo

dev:
	@npm run serve

build:
	@npm run build

resize:
	rm -rf venv3
	python3 -m venv venv3
	source venv3/bin/activate && pip install Pillow && python scripts/resize.py

deploy: resize build
	@npm run deploy

clean:
	@rm -rf ./dist
	@rm -rf ./build
	@rm -rf ./deploy
	@rm -rf ./venv

format:
	@npx prettier --write .
