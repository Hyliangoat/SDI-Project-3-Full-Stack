//Hold routes for cards, will be imported into app.js and used as middleware for the /cards endpoint

const express = require('express');
const knex = require('knex')(require('../db/knexfile.js')['development']);

const router = express.Router();

// Get all cards
router.get('/', async (req, res) => {
    try {
        const cards = await knex('cards').select('*');
        res.json(cards);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error fetching cards' });
    }
});

// Create a new card
router.post('/', async (req, res) => {
    const { title, description } = req.body;
    try {
        const [newCard] = await knex('cards').insert({ title, description }).returning('*');
        res.status(201).json(newCard);
    } catch (error) {
        res.status(500).json({ error: 'Error creating card' });
    }
});

module.exports = router;