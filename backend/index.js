const express =require("express")
const app=express()
const cors = require("cors")

app.use(cors())
let username="rizwan@gmail.com"
let password =123

app.use(express.urlencoded({extended:true}))

app.get("/login",(req,res)=>{
    console.log(req.query.username)
    if(req.query.username==username && req.query.password==password){
        res.send(true)
    }
    else{
        res.send(false)
    }
})
app.listen(4000,()=>{
    console.log("Server started...")
})

