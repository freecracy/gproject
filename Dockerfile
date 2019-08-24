FROM alpine:latest as front
RUN apk --upgrade add nodejs npm git && \
	git clone https://github.com/freecracy/gproject.git && \
	cd gproject/web && \
    npm install && \
    npm run build

FROM golang:latest as backend
COPY --from=front /gproject /go/src/github.com/freecracy
ENV GO111MODULE=on
RUN go get github.com/rakyll/statik && \
    cd /go/src/github.com/freecracy && \
    go mod download && \
    go mod vendor && \
    go generate && \
    go build -ldflags="-s -w -extldflags -static"

FROM scratch
MAINTAINER freecracy1024@gmail.com
COPY --from=backend /go/src/github.com/freecracy/gproject .
CMD gproject server
