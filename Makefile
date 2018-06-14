.PHONY: build

all:
	@echo "make dev"
	@echo "make build"

dev:
	@npm run serve

build:
	@npm run build

resize:
	rm -rf venv
	virtualenv --no-site-package venv
	source venv/bin/activate && pip install Pillow && python scripts/resize.py

deploy: resize build
	@npm run deploy

clean:
	@rm -rf ./dist
	@rm -rf ./build
	@rm -rf ./deploy
	@rm -rf ./venv
