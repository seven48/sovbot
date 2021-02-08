import os
import requests

from src.bot import bot

API_HOST = 'http://0.0.0.0:5000'

@bot.message_handler(commands=['register'])
def router(message):
    if message.chat.type == 'private':
        return

    headers = {
        'Authorization': os.environ['APITOKEN']
    }

    exists = requests.get(
        f'{API_HOST}/room/exists?chatId={message.chat.id}',
        headers=headers
    ).json()

    if exists.get('exists'):
        bot.send_message(
            message.chat.id,
            'Эта комната уже зарегистрирована'
        )
    else:
        headers['Content-Type'] = 'application/json'
        insert = requests.post(
            f'{API_HOST}/room/insert',
            headers=headers,
            data='{"chatId":"' + str(message.chat.id) + '"}'
        ).json()

        print(insert)

        bot.send_message(
            message.chat.id,
            f'Комната успешно зарегистрирована\n{insert.get("link")}'
        )
