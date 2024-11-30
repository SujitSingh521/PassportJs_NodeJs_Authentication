Passport Js In Install  :-

   npm install nodemon
   npm  install express
   npm install  mongoose
   npm install 




2. and create server.js file and include the code  :- 

const express = require('express');
const app = express();



app.listen(3000,()=>{
    console.log("Listening on 3000")
});



3. ==============================>

Server.js :->
==========
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




database.js :->
=============
const mongoose =require("mongoose");

exports.connectMongoose =()=>{
    mongoose.connect('mongodb://localhost:27017/passport')
    .than(e=>console.log(`Connect to mongoDB:${e.connection.host}`))
    .catch(e=>console.log(`Connect to mongoDB failed:${e}`

));
}



