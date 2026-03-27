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
        const userId = req.user.userId;
        const {name, location, age, workplace, job, image} = req.body;
        let lastId = await knex('cards').max('id').first();
        console.log(lastId)
        await knex('cards').insert({name: name, location_of_origin: location, age: age, workplace: workplace, job_title: job, image_url: image, user_id: userId})

        res.json({message: 'Card has been stored'})

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