var userModel = require('../models/User');
var helper = require('./helpers')


exports.index = async function (req, res, next) {
    userModel.find({}).then(data =>{
        if(data.length>20){
            res.status(200).send('You already have 20 entities there').end();
        }else{
            helper.seedUsers();
        }
    }).catch(err => {
        res.status(500).send('Error occured while saving', err);
    })
};