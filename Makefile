.PHONY: build

all:
	@echo "make dev"
	@echo "make build"

dev:
	@npm run dev

build:
	@rm -rf ./build
	@npm run build

resize:
	rm -rf venv
	virtualenv --no-site-package venv
	source venv/bin/activate && pip install Pillow && python scripts/resize.py

deploy: build resize
	@rm -rf ./deploy

	@mkdir ./deploy
	@cp -Rf build ./deploy
	@cp -Rf data ./deploy
	@cp index.html ./deploy
	@cp robots.txt ./deploy

	@npm run deploy

clean:
	@rm -rf ./build
	@rm -rf ./deploy
	@rm -rf ./venv

