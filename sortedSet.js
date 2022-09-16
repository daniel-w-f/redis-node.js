const SortedSet = (redis) => {

    redis.zadd('rocket', 1969, 'Apollo 11', 1998, 'Deep space 1', 1990, 'Fake Rocket', 2008, 'Falcon 1', 1966,
        'Luna 9', 1957, 'Sputnik');

    redis.zrange('rocket', 0, -1, (err, result) => {
        console.log(result);
    });

    redis.zrange('rocket', 0, -1, 'withscores', (err, result) => {
        console.log(result);
    });

    redis.zrevrange('rocket', 0, -1, 'withscores', (err, result) => {
        console.log(result);
    });

    redis.zrangebyscore('rocket', 1970, 2000, (err, result) => {
        console.log(result);
    });

    redis.zrangebyscore('rocket', 1970, 2000, 'withscores', (err, result) => {
        console.log(result);
    });

    redis.zrangebyscore('rocket', '-inf', 1999, 'withscores', (err, result) => {
        console.log(result);
    });

    redis.zrank('rocket', 'Deep space 1', (err, result) => {
        console.log(result);
    });
}

export default SortedSet;
