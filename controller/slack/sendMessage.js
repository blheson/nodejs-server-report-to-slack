const { WebClient, LogLevel } = require("@slack/web-api");
// When using Bolt, you can use either `app.client` or the `client` passed to listeners.
const channelId = 'CHANNEL ID';
const botToken = 'BOT TOKEN';
const client = new WebClient(botToken);
// const client = new WebClient(botToken, {
//     // LogLevel can be imported and used to make debugging simpler
//     logLevel: LogLevel.DEBUG
// });

// Post a message to a channel your app is in using ID and message text

async function publishMessage(id, text) {
    try {
        // Call the chat.postMessage method using the built-in WebClient
        const result = await client.chat.postMessage({
            // The token you used to initialize your app
            // token: botToken,
            channel: id,
            text: text
            // You could also use a blocks[] array to send richer content
        });

        // Print result, which includes information about the message (like TS)
        // console.log(result, '24');
        return result
    }
    catch (error) {
        console.log(error, '29');
    }
}
module.exports = {
    initMessage: (message) => {
        return publishMessage(channelId, message);
    }
}

// {
//     ok: true,
//     channel: 'C02AGHEA3KR',
//     ts: '1628744082.000400',
//     message: {
//       bot_id: 'B02AU9SE58D',
//       type: 'message',
//       text: 'Hello world :tada:',
//       user: 'U02AXAKN7H8',
//       ts: '1628744082.000400',
//       team: 'T02AGH8RS5D',
//       bot_profile: {
//         id: 'B02AU9SE58D',
//         deleted: false,
//         name: 'Server Status',
//         updated: 1628708686,
//         app_id: 'A02B3FRN0G4',
//         icons: [Object],
//         team_id: 'T02AGH8RS5D'
//       }
//     },
//     response_metadata: {
//       scopes: [ 'app_mentions:read', 'channels:read', 'chat:write' ],
//       acceptedScopes: [ 'chat:write' ]
//     }
//   }