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

    describe('addGame()', () => {
        it('should add a game to the table', async () => {

            await addGame({ title: "Megaman", genre: "platformer", releaseYear: 1987 })

            const games = await db('gameTable')

            expect(games).toHaveLength(1)
        })

        it('should return a 200 status code if game added correctly', async () => {
            await supertest(server)
                .post('/games')
                .send({ title: "Tetris", genre: "puzzle", releaseYear: 1984 })
                .expect(200)
        })

        it('should return a 422 status code if incomplete game info added', async () => {
            await supertest(server)
                .post('/games')
                .send({ title: '', genre: '', releaseYear: 1919 })
                .expect(422)
        })
    })

    describe('getGames()', () => {
        it('should return a 200 status code when get request is successful', async () => {
            await supertest(server)
                .get('/games')
                .expect(200)
        })

        it('should return games in the form of a json object', async () => {
            await supertest(server)
                .get('/games')
                .expect('Content-Type', /json/i)
        })

        it('should always return an array, even if it is an empty array', async () => {
            await supertest(server)
                .get('/games')

            let games = await db('gameTable')

            expect(Array.isArray(games)).toBeTruthy()
        })
    })
})

