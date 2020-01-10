#!/bin/bash

cd web
yarn build
cd ..
go generate
go build
