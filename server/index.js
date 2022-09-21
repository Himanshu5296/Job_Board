const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config()

const USERNAME = process.env.mongoId
const PASSWORD = process.env.mongoPassword

const connection = mongoose.connect(`mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.s8snk0w.mongodb.net/?retryWrites=true&w=majority`)

const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Welcome to Job Portal")
})

app.listen(8080,async()=>{
    try {
       await connection
       console.log("Connected To Database") 
    } catch (error) {
        console.log(error);
    }
    console.log("Server:http://localhost:8080")
})