const { sendMessage } = require('./send_message');
const endpoint = process.env.endpoint || 'https://immense-journey-49318.herokuapp.com/api/v1/health'
const hourTimer = 60000 //per hour;
module.exports = status = async (req, res, next) => {


    let payload = req.body;
    res.sendStatus(200);

    if (payload.event.type === "app_mention") {
        if (payload.event.text.includes("start server check")) {
            // Make call to chat.postMessage using bot's token
            botIntervalTimer = setInterval(async () => {
                let response = await fetch(endpoint);
                let result = await response.json();
                let feedback = await sendMessage(result.message);
                console.log(feedback, result.message);
            }, hourTimer);
        } else if (payload.event.text.includes("stop server check")) {
            clearInterval(botIntervalTimer);
            let feedback = await sendMessage("I have stopped checking the server's health");
            console.log(feedback, result.message);
        }else{
            let feedback = await sendMessage("I do not recognise that command");
        }
    }
    // let botIntervalTimer;
    // const endPoint = process.env.endpoint;
    // switch (req.params.status) {
    //     case 'start':
    //         // botIntervalTimer = setInterval(async () => {
    //         //     let response = await fetch(endpoint);
    //         //     let result = await response.json();
    //         //     let feedback = await sendMessage(result.message);
    //         //     console.log(feedback, result.message);
    //         // }, hourTimer);
    //         res.send('You have started the bot');
    //         break;
    //     case 'stop':
    //         clearInterval(botIntervalTimer);
    //         res.send('You have stopped the bot');
    //         break;
    //     default:
    //         res.send('You did not specify a recognised command');
    //         break;
    // }
}


// (() => {
//   // check server every set interval and send status to slack
//   setInterval(async () => {
//     let response = await fetch(endpoint);
//     let result = await response.json();
//     let feedback = await initMessage(result.message);
//     console.log(feedback, result.message);
//   }, hourTimer);
// })()