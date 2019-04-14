import os

import telebot

bot = telebot.TeleBot(os.environ.get('TGTOKEN'))

telebot.apihelper.proxy = {
    'https': os.environ.get('PROXY')
}
