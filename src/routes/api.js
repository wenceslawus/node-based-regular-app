const {Router} = require('express')
const User = require('../models/User')
const router = Router()
var bodyParser = require('body-parser')

var urlencodedParser = bodyParser.urlencoded({ extended: false })

router.post('/api/login', urlencodedParser , async(req, res) => {

    //Login a registered user
    console.log('POST', req.body)
    // res.status(201).send('test')
    try {
        const { email, password } = req.body
        const user = await User.findByCredentials(email, password)
        if (!user) {
            return res.status(401).send({error: 'Login failed! Check authentication credentials'})
        }
        const token = await user.generateAuthToken()
        res.send({ user, token })
    } catch (error) {
        res.status(400).send(error)
    }

})

router.get('/api/user', async(req, res) => {
    // var user='test'
    const user = await User.find()
    res.send(user)

})



module.exports = router