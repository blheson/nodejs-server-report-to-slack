const version1Router = require("express").Router();
const {slackbot } = require("./v1");

version1Router.use('/slackbot', slackbot)
version1Router.get('/', (req,res,next) => {
    res.send({ status: 200, message: 'welcome' });
})
module.exports = { version1Router };