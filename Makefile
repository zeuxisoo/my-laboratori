.PHONY: build

all:
	@echo
	@echo "Command      : Description"
	@echo "------------ : -----------"
	@echo "make dev     : Start the development server"
	@echo "make build   : Build the website into dist directory"
	@echo "make clean   : Clean all generated files and directories"
	@echo "make resize  : Resize the data images"
	@echo "make deploy  : Deploy the dist directory to server"
	@echo "make format  : Format the code"
	@echo

dev:
	@npm run dev

build: resize
	@npm run build

clean:
	@rm -rf ./dist
	@rm -rf ./venv3

resize:
	rm -rf venv3
	python3 -m venv venv3
	source venv3/bin/activate && pip install pillow && python scripts/resize.py

deploy:
	@node ./scripts/deploy.js

format:
	@npx prettier --write .
