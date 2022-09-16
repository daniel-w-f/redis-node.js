import Redis from "ioredis";
import Strings from './strings';
import Hashes from './hashes';
import Lists from './lists';
import Sets from './sets';
import SortedSet from './sortedSet';

// [ioredis] Unhandled error event: Error: connect ECONNREFUSED 127.0.0.1:6379
const redis = new Redis({
    // password: 'dontputthispasswordongithub'
});

Strings(redis);
Hashes(redis);
Lists(redis);
Sets(redis);
SortedSet(redis);
