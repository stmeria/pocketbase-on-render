
FROM alpine:latest
WORKDIR /app
COPY pocketbase /app/pocketbase
COPY pb_data /app/pb_data
EXPOSE 8080
CMD ["./pocketbase", "serve", "--http=0.0.0.0:8080"]
