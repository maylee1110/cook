const mongoose = require('mongoose');

const useSchema = mongoose.Schema({

    name: {
        type: String,
        maxLength: 50,
    },

    email: {
        type: String,
        trim: true,
        unique: 1

    },

    password: {
        type: String,
        minLength: 5
    },

    role: {

        type: Number,
        default: 0
    },

    image: String,
    token: {
        type: String
    },
    tokenExp: {
        type: Number
    }


})

const User = mongoose.model('User', useSchema)
module.exports = {User}