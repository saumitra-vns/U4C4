const express = require("express")

const User = require("../models/todo.models")


const router = express.Router()

router.post("", async(req,res) =>{

    try{
        const user = await User.create(req.body)

        return res.send(user)

    }catch(err){
        return res.send(err)
    }
})

router.get("", async(req,res) =>{
    try{
        const users = await User.find().lean().exec()

        return res.send(users)
    }catch(e){
        return res.send(err)
    }
})

router.get("/:id", async(req,res) =>{
    try{
        const user = await User.findById(req.params.id).lean().exec()

        return res.send(user)
    }catch(e){
        return res.send(err)
    }
})




module.exports = router