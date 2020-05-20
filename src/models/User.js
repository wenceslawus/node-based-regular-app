/*
 *  MONGO Table User Model
 *
 */

const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('express-jwt')
const {check} = require('express-validator')

const userSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email: {
        type: String,
        required: true,
        unique: true,
        validate: value => {
            if (!check(value).isEmail()) {
                throw new Error({error: 'Invalid Email address'})
            }
        }
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    position: String,
    salary: Number,
    birthDay:Date,
    password: String,
    token: String,
    isEmployer: {
        type: Boolean,
        default: true
    }
})

userSchema.pre('save', async function (next) {
    // Hash the password before saving the user model
    const user = this
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }
    next()
})

userSchema.methods.generateAuthToken = async function () {
    // Generate an auth token for the user
    const token = jwt.sign({_id: user._id}, process.env.JWT_KEY)
    this.token = this.token.concat({token})
    await this.save()
    return token
}

userSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({email})
    if (!user) {
        throw new Error({error: 'Invalid login credentials'})
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password)
    if (!isPasswordMatch) {
        throw new Error({error: 'Invalid login credentials'})
    }
    return user
}

module.exports = mongoose.model('User', userSchema)