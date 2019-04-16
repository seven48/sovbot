import Redis from 'ioredis'

import { REDIS_LINK } from './globals'

const redis = new Redis(REDIS_LINK, {
  lazyConnect: true,
  retryStrategy (times) {
    return times < 30 ? Math.min(times * 100, 2000) : false
  }
})

redis.on('end', () => console.error('Redis connection is closed'))

redis.on('connect', () => console.error('Redis connected'))

redis.on('error', (err) => {
  console.error('Redis:', err.message)
})

export default redis
