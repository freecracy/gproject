FROM alpine:latest as front
RUN apk --upgrade add nodejs npm git && \
	git clone https://github.com/freecracy/gproject.git && \
	cd gproject/web && \
    npm install && \
    npm run build

FROM golang:latest as backend
COPY --from=front /gproject /go/src/github.com/freecracy/gproject
ENV GO111MODULE=off
RUN go get github.com/rakyll/statik && \
    go get -u github.com/golang/dep/cmd/dep && \
    cd /go/src/github.com/freecracy/gproject && \
    dep ensure && \
    go generate && \
    go build -ldflags="-s -w -extldflags -static"

FROM scratch
MAINTAINER freecracy1024@gmail.com
COPY --from=backend /go/src/github.com/freecracy/gproject/gproject .
COPY --from=backend /go/src/github.com/freecracy/gproject/lib64 lib64
CMD gproject server
