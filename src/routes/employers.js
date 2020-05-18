const {Router} = require('express')
const Employers = require('../models/User')
const router = Router()
var fakerController = require('../controllers/fakerController')

router.get('/', async (req, res) => {
    const employers = await Employers.find({})

    res.render('index', {
        title: 'Employer list',
        isIndex: true,
        employers
    })
})

router.get('/faker', async (req, res, next) => {
    fakerController.index(req, res, next)
})


module.exports = router