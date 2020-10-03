'use strict';
const http = require('http');
const port = process.env.PORT || 1337;
const halloweenService = require("./services/halloweenService");
const express = require('express');
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/', (request, response) => {
    response.header("Access-Control-Allow-Origin", "https://halloween.azurewebsites.net/"); // update to match the domain you will make the request from
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    response.json({ service: process.env.npm_package_name, version: process.env.npm_package_version });
});

app.get('/gameState', halloweenService.getGameState);

let server = app.listen(port, () => {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Listening on " + host + ":" + port);
});