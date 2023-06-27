FROM node:18.16.0-slim AS build
COPY . /src
WORKDIR /src
ARG base_url=/
ENV VITE_BASE_URL=$base_url
RUN yarn install
RUN yarn build

FROM nginx:stable
COPY --from=build /src/dist /usr/share/nginx/html
