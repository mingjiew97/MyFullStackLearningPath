import { heroes } from '../models/heroes.model';

export function getHeroes(req, res) {
    res.json(heroes);
}