const mongoose = require('mongoose')

const userRegister = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: mongoose.Schema.Types.Mixed,
        min: 8,
    },
})

const RegisterSchema = mongoose.model('User', userRegister)

module.exports = RegisterSchema;