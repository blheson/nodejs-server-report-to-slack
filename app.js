const express = require('express')
const fetch = require('node-fetch');
const { initMessage } = require("./controller/slack/sendMessage.js");

const app = express();
const port = process.env.PORT || 3000;
const endpoint = 'path/to/serverendpoint';
const hourTimer = 3600000;

// const { version1Router } = require("./routes");

// app.use("/api/v1", version1Router);

(() => {
  // check server every hour and send status to slack
  setInterval(async () => {
    let response = await fetch(endpoint);
    let result = await response.json();
    let feedback = await initMessage(result.message);
    console.log(feedback, result.message);
  }, hourTimer);
})()

app.listen(port);