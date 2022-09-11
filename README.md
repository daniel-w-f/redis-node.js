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
docker run -d -p 6379:6379 --name redis-server-4.0.2 -v F:\Development\source\github\redis-node.js\redis-conf:/usr/local/etc/redis redis:4.0.2 redis-server /usr/local/etc/redis/
docker run -d -p 6379:6379 --name redis-server-4.0.2 -h redis-master -v F:\Development\source\github\redis-node.js\redis-conf:/usr/local/etc/redis redis:4.0.2 redis-server /usr/local/etc/redis/
docker run -d -p 6381:6381 --name redis-server-81 -v F:\Development\source\github\redis-node.js\redis-conf\redis2.conf:/redis.conf redis:4.0.2
docker run -d -p 6379:6379 --name redis-server-4.0.2 -v F:\Development\source\github\redis-node.js\redis-conf:/usr/local/etc/redis redis:4.0.2 redis-server /usr/local/etc/redis/
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

### issues

Somehow requirepass in redis.conf from the master is not working?!
Setting it via `config set requirepass <pass>` it is working.
No problems with the `masterauth` setting from the slave. As soon as the master password is set via CLI, the slave can connect successfully.

## Redis master - slave

https://github.com/codenote-net/docker-redis-master-slave/blob/master/docker-compose.yml
https://github.com/codenote-net/docker-redis-master-slave
https://developpaper.com/master-slave-replication-of-redis-using-docker/

IP address is my local working PC / docker host IP

```docker
docker run -d -p 6383:6383 --name redis-server-83-slave -v F:\Development\source\github\redis-node.js\redis-83-conf:/usr/local/etc/redis redis:4.0.2 redis-server /usr/local/etc/redis/redis.conf --slaveof 192.168.16.1 6379
```

Also working with `--slaveof`, but it is already set in the redis-83-conf/redis.conf, therefore we can run it without it.

```docker
docker run -d -p 6383:6383 --name redis-server-83-slave -v F:\Development\source\github\redis-node.js\redis-83-conf:/usr/local/etc/redis redis:4.0.2 redis-server /usr/local/etc/redis/redis.conf
```

Log showing the connection

```log
master
1:M 11 Sep 18:14:01.056 * Slave 172.17.0.1:6383 asks for synchronization
1:M 11 Sep 18:14:01.056 * Partial resynchronization not accepted: Replication ID mismatch (Slave asked for '6c63742103f723e46e72c0babafd7eb8d3aecc54', my replication IDs are 'de808f110b9b4e9f11bf21778712b09d8c169e60' and '0000000000000000000000000000000000000000')
slave
1:S 11 Sep 18:13:59.048 * Connecting to MASTER 192.168.16.1:6379
1:S 11 Sep 18:13:59.048 * MASTER <-> SLAVE sync started
1:S 11 Sep 18:14:01.050 * Non blocking connect for SYNC fired the event.
1:S 11 Sep 18:14:01.052 * Master replied to PING, replication can continue...
1:S 11 Sep 18:14:01.055 * Trying a partial resynchronization (request 6c63742103f723e46e72c0babafd7eb8d3aecc54:211).
1:S 11 Sep 18:14:01.058 * Full resync from master: 269bf8168f9c64b618bd9e81af858b5b3747b592:0
1:S 11 Sep 18:14:01.058 * Discarding previously cached master state.
1:S 11 Sep 18:14:01.135 * MASTER <-> SLAVE sync: receiving 175 bytes from master
1:S 11 Sep 18:14:01.135 * MASTER <-> SLAVE sync: Flushing old data
1:S 11 Sep 18:14:01.162 * MASTER <-> SLAVE sync: Loading DB in memory
```

Show master slave connection via CLI

```redis-cli
PS F:\Development\source\github\redis-node.js> docker exec -it redis-server-4.0.2 redis-cli
127.0.0.1:6379> set masterslave blub
OK

PS F:\Development\source\github\redis-node.js> docker exec -it redis-server-83-slave redis-cli -p 6383
127.0.0.1:6383> keys *
1) "name"
2) "masterslave"
127.0.0.1:6383> get masterslave
"blub"
```
