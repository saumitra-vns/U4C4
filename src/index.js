const express = require("express")

const usersController = require("./controllers/user.controllers")
const todoController = require("./controllers/todo.controllers")

const app = express()

app.use(express.json())

app.use("/users",usersController)

app.use("/todo",todoController)


module.exports = app