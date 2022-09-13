const Sets = (redis) => {
    redis.sadd('groceries list', 'apples', 'chocolate', 'beer', 'chips');
    redis.smembers('groceries list', (err, result) => {
        console.log(result);
    });

    redis.sadd('groceries list:food', 'bread', 'chesse');
    redis.smembers('groceries list:food', (err, result) => {
        console.log(result);
    });

    redis.spop('groceries list');
    redis.smembers('groceries list', (err, result) => {
        console.log(result);
    });

    redis.spop('groceries list');
    redis.smembers('groceries list', (err, result) => {
        console.log(result);
    });

    redis.spop('groceries list:food');
    redis.smembers('groceries list:food', (err, result) => {
        console.log(result);
    });

    redis.spop('groceries list:food');
    redis.smembers('groceries list:food', (err, result) => {
        console.log(result);
    });

    redis.spop('groceries list:food');
    redis.smembers('groceries list:food', (err, result) => {
        console.log(result);
    });
}

export default Sets;
