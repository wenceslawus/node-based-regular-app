/*
 *  MONGO Table User Model
 *
 */

const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email: {
        type: String,
        required: true,
        unique: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    password: String,
    isEmployer: {
        type: Boolean,
        default: true
    }
})

module.exports = mongoose.model('User', schema)