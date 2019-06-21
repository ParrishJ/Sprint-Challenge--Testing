const db = require('../data/dbConfig');

module.exports = {
    addGame,
    getGames
};

function addGame(game) {
    return db('gameTable')
        .insert(game, 'id')
}

function getGames() {
    return db('gameTable')
}