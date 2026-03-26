//Hold authentication routes, will be imported into app.js and used as middleware for the /auth endpoint
const express = require("express")
const router = express.Router()


const authController = require('../controllers/authController')

router.post('/register', authController.register)
router.post('/login', authController.login)

module.exports = router;