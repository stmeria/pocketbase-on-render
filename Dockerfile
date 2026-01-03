# Dockerfile (place at repo root)
FROM alpine:3.19

# Pin the PocketBase version you want to deploy
ENV PB_VERSION=0.21.0 \
    PORT=8090

WORKDIR /pb

# Install tools, download Linux amd64 PocketBase, and clean up
RUN apk add --no-cache ca-certificates curl unzip \
 && curl -L -o pocketbase.zip "https://github.com/pocketbase/pocketbase/releases/download/v${PB_VERSION}/pocketbase_${PB_VERSION}_linux_amd64.zip" \
 && unzip pocketbase.zip -d /pb \
 && rm pocketbase.zip

# Expose PocketBase internal port
EXPOSE 8090

# Start PocketBase bound to 0.0.0.0
CMD ["/pb/pocketbase", "serve", "--http=0.0.0.0:8090"]
