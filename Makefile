export GO111MODULE=on


install:
	@go generate
	@go build
	@go install
