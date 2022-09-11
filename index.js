import Redis from "ioredis";

// [ioredis] Unhandled error event: Error: connect ECONNREFUSED 127.0.0.1:6379
const redis = new Redis();

redis.set('name', 'Daniel');
redis.get('name', (err, result) => {
    console.log(result);
});
