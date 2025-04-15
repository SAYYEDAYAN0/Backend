const mongoose = require("mongoose")


const {dafault:mongoose} = require ("mongoose");


const todoSchema = new mongoose({


    title : {
        type : String,
        required : true,
    },

    description : {
        type : String,
        required : true,  
    },

    createdBy : {
        type : mongoose.Types.ObjectId,
        ref : "user"
    }


    

}, {timestamps : true})


export const Todo = mongoose.model("todo",todoSchema)