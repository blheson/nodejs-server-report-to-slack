const { sendMessage,status } = require('../../controller/slack');
const slackRouter = require("express").Router();
slackRouter.get('/', (req, res, next) => {
    res.send({ 'status': 'success', 'message': 'Response from server' });
});
// console.log(status);
slackRouter.get('/status/:status', status);
module.exports = slackRouter;
