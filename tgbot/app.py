from multiprocessing import Process

from src.channel import run

from src.responds import (
    replace_all,
    register
)
from src.bot import bot

redis = Process(target=run)
redis.start()

# bot.polling(none_stop=True)
