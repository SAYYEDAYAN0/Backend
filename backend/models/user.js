

const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/contact")

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: [true, 'Email already exists'],
    },
    message: {
        type: String,
        required: true

    },

})

module.exports = mongoose.model('User', userSchema);

