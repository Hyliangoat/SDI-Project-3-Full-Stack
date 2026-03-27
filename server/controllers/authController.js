//Will hold logic for login/register/logout (bcrypt, jwt, etc)
const knex = require('knex')(require('../db/knexfile.js')['development']);
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

exports.register = async (req,res) => {
    try{
        const {username, password} = req.body;

        //Validate
        if (!username || !password){
            return res.status(400).json({error: 'Incorrect or missing fields'})
        }

        //Hash it
        const hash = await bcrypt.hash(password, 10)

        //Store hash as pass
        await knex("users").insert({username, password_hash:hash})

        //Send a confirm back
        res.json({message: "User Created and stored in database"})
    } catch(err) {
        console.error(err)
        res.status(500).json({error: "Some sort of server error. Register catch triggered"})
    }
}

exports.login = async (req,res) => {
    try{
        const {username, password} = req.body

        //Find them in db
        const user = await knex('users').where({username}).first()

        if (!user){
            return res.status(401).json({error: "Invalid user"})
        }

        //Check the pass to the hash

        const match = await bcrypt.compare(password, user.password_hash)

        if(!match){
            return res.status(401).json({message: "Invalid password"})
        }

        //Create the JWT
        const token = jwt.sign({userId: user.id},`${process.env.JWT_SECRET}`, {expiresIn: '4h'})
        console.log(`Jwt for login: ${process.env.JWT_SECRET}`)
        res.json({token})

    }catch(err){
        console.error(err)
        res.status(500).json({error: "Server error with login"})
    }
}