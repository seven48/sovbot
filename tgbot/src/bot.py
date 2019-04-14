import os

import telebot

bot = telebot.TeleBot(os.environ.get('TGTOKEN'))

telebot.apihelper.proxy = {
    'https': 'https://simonsuprun:Z4k9GlC@146.120.110.18:65233'
}
