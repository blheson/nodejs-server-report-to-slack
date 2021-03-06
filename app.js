const express = require('express');
const path = require('path');
const fetch = require('node-fetch');

const { version1Router } = require("./routes");
const { routeError } = require("./middleware");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());


app.use("/api/v1", version1Router);
app.use(routeError);
app.listen(port);