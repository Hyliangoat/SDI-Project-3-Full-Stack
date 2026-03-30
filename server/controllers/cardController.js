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
        const {name, location_of_origin, age, workplace, job_title, description, phone_number, email} = req.body;
        const image = req.file;
        console.log('FILE:', req.file);

        let lastId = await knex('cards').max('id').first();
        console.log(lastId)
        
        await knex('cards').insert({
            name: name, 
            location_of_origin: location_of_origin, 
            age: age, workplace: workplace, 
            job_title: job_title, 
            image_url: image ? image.filename : null, 
            description: description,
            phone_number: phone_number,
            email: email,
            user_id: userId
        })

        res.json({message: 'Card has been stored'})

    }catch(err)
    {
        console.error(err)
        res.status(500).send({message: 'Card could not be created'})
    }
}

exports.getCardById = async (req, res) => {
    try{
        const cardId = req.params.id;
        const card = await knex('cards').where({id: cardId}).first()
        if (!card) {
            return res.status(404).send({message: 'Card not found'})
        }
        res.json(card)
    }catch(err)
    {
        console.error(err)
        res.status(500).send({message: 'Cards could not be found'})
    }
}

exports.deleteCard = async (req, res) => {
    try{
        const cardId = req.params.id;
        await knex('cards').where({id: cardId}).del()
        res.json({message: 'Card has been deleted'})
    }catch(err)
    {
        console.error(err)
        res.status(500).send({message: 'Card could not be deleted'})
    }
}

exports.updateCard = async (req, res) => {
    try{
        const cardId = req.params.id;
        const {name, location_of_origin, age, workplace, job_title, description, phone_number, email} = req.body;
        const image = req.file;

        const updates = {
            name, 
            location_of_origin, 
            age, 
            workplace, 
            job_title, 
            description,
            phone_number,
            email
        };

        if (image) {
            updates.image_url = image.filename;
        }
        await knex('cards').where({id: cardId}).update(updates)

        res.json({message: 'Card has been updated'})
    }catch(err)
    {
        console.error(err)
        res.status(500).send({message: 'Card could not be updated'})
    }
}