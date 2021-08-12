const { WebClient, LogLevel } = require("@slack/web-api");

const channelId = 'CHANNEL ID';
const botToken = 'BOT TOKEN';

const client = new WebClient(botToken, {
    logLevel: LogLevel.DEBUG
}); 
async function publishMessage(id, text) {
    try {
        const result = await client.chat.postMessage({
            // token: botToken,
            channel: id,
            text: text
        });
        return result
    }
    catch (error) {
        console.log(error);
    }
}
module.exports = {
    initMessage: (message) => {
        return publishMessage(channelId, message);
    }
}