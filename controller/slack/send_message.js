const { WebClient, LogLevel } = require("@slack/web-api");
const path = require('path');
const channelId = process.env.CHANNEL_ID;
const botToken = process.env.BOT_TOKEN;

//initialize slack webclient
const client = new WebClient(botToken, {
    logLevel: LogLevel.DEBUG
});
async function publishMessage(id, text) {
    try {
        //post request to send message 
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
    sendMessage: (message) => {
        return publishMessage(channelId, message);
    }
}
