const express = require("express")

const Todo = require("../models/todo.models")



const router = express.Router()

router.post("", async(req,res) =>{

    try{
        const todo = await Todo.create(req.body)

        return res.send(todo)

    }catch(err){
        return res.send(err)
    }
})

router.get("", async(req,res) =>{
    try{
        const todos = await Todo.find().lean().exec()

        return res.send(todos)
    }catch(e){
        return res.send(err)
    }
})

router.get("/:id", async(req,res) =>{
    try{
        const todos = await Todo.findById(req.params.id).lean().exec()

        return res.send(todos)
    }catch(e){
        return res.send(err)
    }
})

module.exports = router