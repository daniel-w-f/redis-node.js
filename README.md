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
# todo: how to run this with relative path?
# todo: check if that is actually working (was taken from redis-stack example)
docker run -d -p 6381:6381 --name redis-server-81 -v F:\Development\source\github\redis-node.js\redis-conf\redis2.conf:/redis.conf redis:4.0.2
```

Starting afterwards:

```docker
docker start redis-server-4.0.2
```

Connect to Redis-CLI on the Docker Redis-Server:

```docker
docker exec -it redis-server-4.0.2 redis-cli
```

### Start with different port

Start Docker container with port 82
`docker run -d -p 6382:6382 --name redis-server-82 -v F:\Development\source\github\redis-node.js\redis-82-conf:/usr/local/etc/redis redis:4.0.2 redis-server /usr/local/etc/redis/redis.conf`

Connect to redis-cli on a non default port
`docker exec -it redis-server-82 redis-cli -p 6382`

## Redis CLI

Simple list of commands, might be enhanced with more details later.

- `redis-cli config get dir`

```redis-cli
127.0.0.1:6379> config get dir
1) "dir"
2) "/data"
```

## Redis configuration

<https://redis.io/docs/stack/get-started/install/docker/>

> **Persistence**
>
> To persist your Redis data to a local path, specify -v to configure a local volume. This command stores all data in the local directory local-data:
>
> `$ docker run -v /local-data/:/data redis/redis-stack:latest`

https://hub.docker.com/_/redis
