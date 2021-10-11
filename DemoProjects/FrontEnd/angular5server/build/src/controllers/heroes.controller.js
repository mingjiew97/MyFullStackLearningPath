'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getHeroes = getHeroes;

var _heroes = require('../models/heroes.model');

function getHeroes(req, res) {
    res.json(_heroes.heroes);
}