const { signIn, signUp } = require('../controllers/User')

const router = require('express').Router()




router.post('/signup', signUp)

router.post('/signin', signIn)


module.exports = router