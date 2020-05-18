var userModel = require('../../models/User');
var faker = require('faker');
var mongoose = require('mongoose')


exports.seedUsers = function () {
    for (var i = 0; i < 20; i++) {
        var User = new userModel({
            _id: mongoose.Types.ObjectId(),
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
            isEmployer: true,
        })

        console.log(User)

        User.save((err, data) => {
            if (err) {
                // res.status(500).send('Error occured while saving', err);
                return err;
                console.log('Save error occured', err)
            }else{
                console.log('Database succesfully seeded')
                next();
            }

        });
    }


};