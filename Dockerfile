FROM node AS frontend-build

WORKDIR /build/frontend
COPY frontend/package*.json ./
RUN npm install
COPY frontend/ ./
ARG GIT_COMMIT=default
ENV VITE_GIT_COMMIT=$GIT_COMMIT
RUN npm run build


FROM node AS server-build
WORKDIR /build/server
RUN apk add --no-cache python3 make gcc cmake curl g++ tar pkgconfig
COPY server/package*.json ./
RUN npm install
COPY server/ ./
RUN npm run precompile


FROM node
RUN adduser --disabled-password --gecos '' app
USER app
WORKDIR /home/app/
COPY --chown=app --from=frontend-build /build/dist dist
COPY --chown=app --from=server-build /build/server server

WORKDIR /home/app/server/
ENTRYPOINT [ "npm", "run", "backend" ]
