//Logic for crud operations on baseball cards

const knex = require('knex')(require('../db/knexfile.js')['development']);

exports.getAllCards = async (req, res) => {
    try{
        const userId = req.user.userId;
        const cards = await knex('cards').where({user_id: userId})
        res.json(cards)
        console.log('getallcards')
    }catch(err)
    {
        console.error(err)
        res.status(500).send({message: 'Cards could not be found'})
    }
}

exports.createCard = async (req, res) => {
    try{
        console.log('createcard')
    }catch(err)
    {
        console.error(err)
        res.status(500).send({message: 'Card could not be created'})
    }
}

exports.getCardById = async (req, res) => {
    try{
        console.log('getcardbyid')
    }catch(err)
    {
        console.error(err)
        res.status(500).send({message: 'Cards could not be found'})
    }
}