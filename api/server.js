const express = require('express');

const Games = require('../games/gamesModel');

const server = express();

server.use(express.json());



server.get('/games', (req, res) => {
    Games.getGames()
        .then(game => {
            res.status(200).json(game)
        })
        .catch(error => {
            res.status(500).json(error)
        });
});

server.post('/games', (req, res) => {
    if (req.body.title && req.body.genre) {
        Games.addGame(req.body)
            .then(ids => {
                res.status(200).json(ids)
            })
            .catch(error => {
                res.status(500).json(error)
            })
    } else {
        res.status(422).json({ error: "Required data missing from post" })
    }
})


module.exports = server;