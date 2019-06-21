const db = require('../data/dbConfig.js');
const supertest = require('supertest');
const server = require('..api/server')

const { addGame, getGames } = require('./gamesModel')

//tests go here