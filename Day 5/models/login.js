const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/web')

const loginSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    
    },
    password: {
        type: String,
        required: true
    },
    
},{timestamps: true})

module.exports = mongoose.model('Login', loginSchema)

