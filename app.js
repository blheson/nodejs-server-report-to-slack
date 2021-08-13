const express = require('express');
const path = require('path');
const fetch = require('node-fetch');
const { initMessage } = require( path.join(__dirname, 'controller/slack/sendMessage.js'));
const config = require( path.join(__dirname, 'config'));
console.log(path.join(__dirname, 'config'));
const app = express();
const port = process.env.PORT || 5000;
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