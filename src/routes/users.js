const {Router} = require('express')
const Users = require('../models/User')
const router = Router()
var fakerController = require('../controllers/fakerController')


router.get('/faker', async (req, res, next) => {
    fakerController.index(req, res, next)
})

// router.get('/logout', function(req, res){

    // req.session.destroy(function(){
    //     res.redirect('/');
    // });
// });

// router.get('/login', function(req, res){
//     console.log(req.body)
//     res.render('login');
// });
//
// router.get('/register', function(req, res){
//     res.render('register');
// });


module.exports = router