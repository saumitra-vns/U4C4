const app = require("./index.js")

const connect = require("./configs/db")


app.listen(5500, async() =>{

    try{
        await connect()
        console.log("Listining on 5500")
    }
    catch(err)
    {
        console.error(err)
    }
})