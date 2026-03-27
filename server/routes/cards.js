// //Hold routes for cards, will be imported into app.js and used as middleware for the /cards endpoint

const express = require("express")
const router = express.Router()


const {getAllCards, getCardById, createCard} = require('../controllers/cardController')

const {jwtCheck} = require('../middleware/auth.js')

router.get('/', jwtCheck, getAllCards)
router.get('/:id', jwtCheck, getCardById)
router.post('/', jwtCheck, createCard)

module.exports = router;
