from multiprocessing import Process

from src.responds import (
    replace_all,
    register
)
from src.bot import bot

bot.polling(none_stop=True)
