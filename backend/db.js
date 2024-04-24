
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://admin:1234567890@cluster0.nttkgm3.mongodb.net/paytm')

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        maxLength: 50,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        maxLength: 50,
        trim: true
    },
    username: {
        type: String,
        required: true,
        minLenght: 3,
        maxLength: 50,
        lowercase: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        minLenght: 3,
        maxLength: 10,
        lowercase: true,
        trim: true,
    }
})

const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
})
const User = mongoose.model('User', UserSchema)
const Account = mongoose.model('Account', accountSchema)

module.exports = {
    User,
    Account
}