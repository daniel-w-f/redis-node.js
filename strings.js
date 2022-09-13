const Strings = (redis) => {
    redis.set('name', 'Daniel', "ex", 5);
    redis.get('name', (err, result) => {
        console.log(result);
    });

    redis.get('address', (err, result) => {
        console.log(result);
    });

    redis.incrby('counter', 300);

    redis.get('counter', (err, result) => {
        console.log(result);
    });

    redis.mset('street', 'Straße', 'city', 'Berlin');
    redis.mget('street', 'city', (err, result) => {
        console.log(result);
    });
}

export default Strings;
