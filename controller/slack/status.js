module.exports = status = (req, res, next) => {
    // console.log(req.params.status);
    let botIntervalTimer;
    const endPoint = process.env.endpoint;
    switch (req.params.status) {
        case 'start':
            // botIntervalTimer = setInterval(async () => {
            //     let response = await fetch(endpoint);
            //     let result = await response.json();
            //     let feedback = await initMessage(result.message);
            //     console.log(feedback, result.message);
            // }, hourTimer);
            res.send('You have started the bot');
            break;
        case 'stop':
            clearInterval(botIntervalTimer);
            res.send('You have stopped the bot');
            break;
        default:
            res.send('You did not specify a recognised command');
            break;
    }
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