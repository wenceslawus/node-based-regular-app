var userModel = require('../../models/User');
var faker = require('faker');
var mongoose = require('mongoose')


exports.seedUsers = function (req, res, next) {
    for (var i = 0; i < 20; i++) {
        var User = new userModel({
            _id: mongoose.Types.ObjectId(),
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            position: faker.name.jobTitle(),
            salary: faker.finance.amount(),
            birthDay: faker.date.past(),
            email: faker.internet.email(),
            password: 'qwerty',
            isEmployer: true,
        })

        User.save((err) => {
            if (err) {
                res.status(500).send('Error occured', err);
            }
        });
    }
};