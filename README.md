# redis-node.js
Example application created along LinkedIn Learning: Learning Redis

## Init repo

- `npm init`
- `npm i --save-dev babel-cli babel-preset-env babel-preset-stage-0`
- `npm i --save ioredis`
- `npm i --save nodemon`

## Start application

```npm
npm run start
```

## Redis server

The application expects that a Redis server is running locally on **port 6379**.

First start:

```docker
docker run -d -p 6379:6379 --name redis-server-4.0.2 redis:4.0.2
```

Starting afterwards:

```docker
docker start redis-server-4.0.2
```

Connect to Redis-CLI on the Docker Redis-Server:

```docker
docker exec -it redis-server-4.0.2 redis-cli
```
