const express = require('express');

const Games = require('../games/gamesModel');

const server = express();

server.use(express.json());



//endpoints here;


module.exports = server;