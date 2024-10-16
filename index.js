const express=require("express");
const nodemon=require('nodemon')
const app=express();

const PORT=3000;

app.use(nodemon("dev"));
app.use(express.json())
app.get('',(req,res)=>{
    res.send("it is  sss hello world")
})

app.listen(PORT,()=>{
    console.log(`server is running on portno https://localhost:${PORT}`)
})