
const mongoose = require('mongoos');

const { default: mongoos, Types } = require("mongoose");

const userSchema = new mongoos.Schema({

    username: {
        Types: String,
        requied: true,
        unique: true,

    },

    eamil: {
        Types: String,
        requied: true,
        lowercase: true,
        unique: true,

    },


    password: {
        Types: String,
        requied: true,
    },


}, { timestamps: true })

export const User = mongoose.model("User", userSchema);