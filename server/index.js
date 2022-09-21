const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const jobRouter = require("./Routes/job.routes")
dotenv.config()

const USERNAME = process.env.mongoId
const PASSWORD = process.env.mongoPassword

const connection = mongoose.connect(`mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.s8snk0w.mongodb.net/?retryWrites=true&w=majority`)

const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.send("Welcome to Job Portal")
})

app.use(jobRouter)

const PORT = process.env.PORT || 8080

app.listen(PORT,async()=>{
    try {
       await connection
       console.log("Connected To Database") 
    } catch (error) {
        console.log(error);
    }
    console.log("Server:http://localhost:8080")
})