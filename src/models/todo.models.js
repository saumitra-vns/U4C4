const mongoose = require("mongoose")


const User = require("./user.models")


const todoSchema = new mongoose.Schema({
    title : {type:String,required:true},
    user : {type: mongoose.Schema.Types.ObjectId,ref:'User'}
},
{
    versionKey: false,
    timestamps: true
})


module.exports = mongoose.model("todo",todoSchema)