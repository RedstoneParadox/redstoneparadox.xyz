FROM  --platform=linux/arm64/v8 ghcr.io/getzola/zola:v0.17.1 as zola

COPY . /project
WORKDIR /project
RUN ["zola", "build"]

FROM  --platform=linux/arm64/v8 caddy:2.7.6-alpine
WORKDIR /
COPY --from=zola /project/public /usr/share/caddy
