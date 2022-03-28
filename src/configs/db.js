const mongoose = require("mongoose")

module.exports = () =>{
   return mongoose.connect("mongodb+srv://saumitravns:saumitra_123@cluster0.s7kaq.mongodb.net/U4C4?retryWrites=true&w=majority")
}