const TwitterBot = require('./twitter-bot.js');

// Initiate Bot
function BotInit() {
	TwitterBot.BotRetweet();
}

BotInit();

module.exports = {
	BotInit,
};
