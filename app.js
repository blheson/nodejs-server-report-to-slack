const express = require('express')
const fetch = require('node-fetch');
const { initMessage } = require("./controller/slack/sendMessage.js");
const config = require('./config');

const app = express();
const port = process.env.PORT || 3000;
const endpoint = config.endpoint;
const hourTimer = config.TIMER || 3600000 //per hour;
app.use('/',(req,res,next)=>{
  res.send('here');
})
// (() => {
//   // check server every set interval and send status to slack
//   setInterval(async () => {
//     let response = await fetch(endpoint);
//     let result = await response.json();
//     let feedback = await initMessage(result.message);
//     console.log(feedback, result.message);
//   }, hourTimer);
// })()

app.listen(port);