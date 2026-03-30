// //Hold routes for cards, will be imported into app.js and used as middleware for the /cards endpoint

const express = require("express")
const router = express.Router()
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      cb(null, uniqueSuffix + '-' + file.originalname);
    }
  });
  
const upload = multer({ storage: storage });

const {getAllCards, getCardById, createCard} = require('../controllers/cardController')

const {jwtCheck} = require('../middleware/auth.js')

router.get('/', jwtCheck, getAllCards)
router.get('/:id', jwtCheck, getCardById)
router.post('/', jwtCheck, upload.single('image'), createCard)

module.exports = router;
