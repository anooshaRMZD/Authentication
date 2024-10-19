const TelegramBot = require('node-telegram-bot-api');
const bot = new TelegramBot('6147798706:AAHjlXuEHdQr6mIjudt_TaY9__BtrRp3ilU', {polling: true});
bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, "Hello! Welcome to my bot.");
  });