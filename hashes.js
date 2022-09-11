const Hashes = (redis) => {
    redis.hmset('user:1', 'username', 'First', 'firstName', 'Peter', 'lastName', 'Parker');
    redis.hincrby('user:1', 'age', '3');
    redis.hmset('user:1', 'country', 'germany');
    redis.hgetall('user:1', (err, result) => {
        console.log(result);
    });
}

export default Hashes;
