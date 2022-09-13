const Lists = (redis) => {
    redis.rpush('planets', 'Venus', 'Earth', 'Mars', 'Jupiter');
    redis.rpush('planets', 'Merkur');
    redis.lpush('planets', 'Saturn');
    redis.lrange('planets', '0', '-1', (err, result) => {
        console.log(result);
    });

    redis.lpop('planets');    
    redis.lrange('planets', '0', '-1', (err, result) => {
        console.log(result);
    });

    redis.rpop('planets');
    redis.lrange('planets', '0', '-1', (err, result) => {
        console.log(result);
    });

    redis.ltrim('planets', '1', '5');    
    redis.lrange('planets', '0', '-1', (err, result) => {
        console.log(result);
    });
}

export default Lists;
