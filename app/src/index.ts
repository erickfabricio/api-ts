import express = require('express');
import { config } from "./config";

// Create a new express application instance
const app: express.Application = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(config.port, function () {
    console.log(`Example app listening on port ${config.port}!`);
});