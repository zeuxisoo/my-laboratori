.PHONY: build

all:
	@echo "make dev"
	@echo "make build"

dev:
	@npm run dev

build:
	@rm -rf ./build
	@npm run build
