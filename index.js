import Redis from "ioredis";
import Strings from './strings';
import Hashes from './hashes';

// [ioredis] Unhandled error event: Error: connect ECONNREFUSED 127.0.0.1:6379
const redis = new Redis({
    // password: 'dontputthispasswordongithub'
});

Strings(redis);
Hashes(redis);
