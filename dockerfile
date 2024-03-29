FROM --platform=linux/arm64/v8 nginx:mainline-alpine3.18-perl
COPY html /usr/share/nginx/html
