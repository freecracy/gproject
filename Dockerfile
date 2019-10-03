FROM alpine:latest as front
RUN apk --upgrade add nodejs yarn git && \
	git clone https://github.com/freecracy/gproject.git && \
	cd gproject/web.v3 && \
    yarn install && \
    yarn run build

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
#COPY --from=backend /go/src/github.com/freecracy/gproject/lib64 lib64
COPY --from=backend ["/lib/x86_64-linux-gnu/", "lib/x86_64-linux-gnu/"]
CMD gproject server

# docker stop gproject && docker rm gproject &&  docker run -d --name gproject --restart=always -p 8080:8080 cn100800/gproject:$TAG /gproject server
