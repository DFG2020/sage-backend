# Start by building the typescript application, compiling protos and testing
FROM node:14.15.0-alpine3.12 as build

WORKDIR /app
COPY . .
RUN yarn install
RUN yarn build

# To keep our image as small as possible, we will copy ONLY the executables
FROM gcr.io/distroless/nodejs

WORKDIR /build
COPY --from=build /app .

EXPOSE 3000