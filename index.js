if (process.env.NODE_ENV !== "production") {
	require("dotenv").config();
}

const TelegramBot = require("node-telegram-bot-api");
const botApi = process.env.HEROKU_BOT;

const bot = new TelegramBot(botApi, { polling: true });

bot.on("message", (msg) => {
	bot.sendMessage(msg.chat.id, `Hello ${msg.from.first_name}`);
});

bot.onText(/\/echo(.+)/, (msg, match) => {
	const chatId = msg.chat.id;
	const resp = match[1];

	bot.sendMessage(chatId, resp);
});
