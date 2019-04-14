import time
import os
import json

import redis

from src.bot import bot

def run():
    print('redis here')

    r = redis.StrictRedis(port=26379)

    p = r.pubsub()
    p.subscribe('sovbot')

    while True:
        data = p.get_message()

        if not data:
            time.sleep(1)
            continue

        message = json.loads(data['data'])

        bot.send_message(message['chatId'], message['text'])
