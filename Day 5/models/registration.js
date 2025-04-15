const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/web')

const registrationSchema = new mongoose.Schema({
    
    email: {
        type: String,
        required: true,
  
    },
    password: {
        type: String,
        required: true
    },
    confirmPassword: {
        type: String,
        required: true
    },
},{timestamps: true})

module.exports = mongoose.model('Registration', registrationSchema)
