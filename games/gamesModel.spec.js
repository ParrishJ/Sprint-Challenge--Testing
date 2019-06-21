const db = require('../data/dbConfig.js');
const supertest = require('supertest');
const server = require('../api/server')

const { addGame, getGames } = require('./gamesModel')

describe('game model', () => {
    beforeEach(async () => {
        await db('gameTable').truncate();
    });

    it('should set testing env variable', () => {
        expect(process.env.DB_ENV).toBe('testing');
    });
})