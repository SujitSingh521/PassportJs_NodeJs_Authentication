const express = require('express');
const app = express();
const {connectMongoose} = require ("./database.js")

connectMongoose();
app.get("/",(req,res)=>{
    res.send("Hello World");
})

app.post("/register",(req,res)=>{

})

app.listen(3000,()=>{
    console.log("Listening on 3000");
});


