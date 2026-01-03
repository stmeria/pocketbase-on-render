FROM alpine:3.19

ENV PB_VERSION=0.21.0 \
    PORT=8090

WORKDIR /pb

RUN apk add --no-cache ca-certificates curl unzip \
 && curl -L -o pocketbase.zip "https://github.com/pocketbase/pocketbase/releases/download/v${PB_VERSION}/pocketbase_${PB_VERSION}_linux_amd64.zip" \
 && unzip pocketbase.zip -d /pb \
 && rm pocketbase.zip

# Copy your static files
COPY pb_public /pb/pb_public

EXPOSE 8090

CMD ["/pb/pocketbase", "serve", "--http=0.0.0.0:8090"]
