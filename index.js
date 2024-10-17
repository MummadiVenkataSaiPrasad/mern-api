const express = require("express");
const nodemon = require('nodemon')
const morgan = require('morgan')
const app = express();
const connectDB=require('./databaseconnect')
const usersrouter=require('./routers/usersrouter')
const PORT = 3000;

//  app.use(nodemon("dev"));
//const userRouter = require('./routers/usersrouter')
app.use(express.json())
app.use(morgan("dev"))
app.use("",usersrouter) 

connectDB()
app.use(express.urlencoded({ extended: true }))
app.get('', (req, res) => {
    let obj = { 'name': 'venkat', 'age': 19 }
    res.send(obj)
})

app.listen(PORT, () => {
    console.log(`server is running on portno http://localhost:${PORT}`)
})