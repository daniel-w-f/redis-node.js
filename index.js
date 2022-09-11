import Redis from "ioredis";

// [ioredis] Unhandled error event: Error: connect ECONNREFUSED 127.0.0.1:6379
const redis = new Redis({
    // password: 'dontputthispasswordongithub'
});

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
