from src.bot import bot

@bot.message_handler(regexp=r'^[@\/]?(all)$')
def router(message):
    if message.chat.type == 'private':
        return

    users = bot.get_chat_administrators(message.chat.id)

    user_list = ''

    for item in users:
        user_list += f'[{item.user.first_name}](tg://user?id={item.user.id})\n'

    bot.send_message(
        message.chat.id,
        'Hey everybody:\n\n' + user_list,
        parse_mode='Markdown'
    )
