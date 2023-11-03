const express = require('express')
const router = express.Router()
const UserController = require('../controllers/userController')
const authentication = require('../middlewares/authentication')

router.post('/login', UserController.login)
router.post('/register', UserController.register)

router.use(authentication)

router.get('/movies', UserController.fetchMovie)
router.get('/movies/:id', UserController.detailMovie)
router.post('/movies', UserController.createMovie)

router.get('/genres', UserController.fetchGenre)
router.post('/genres', UserController.createGenre)


module.exports = router