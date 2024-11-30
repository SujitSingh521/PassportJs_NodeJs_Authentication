const mongoose =require("mongoose");

exports.connectMongoose =()=>{
    mongoose.connect('mongodb://localhost:27017/passport')
    .than(e=>console.log(`Connect to mongoDB:${e.connection.host}`))
    .catch(e=>console.log(`Connect to mongoDB failed:${e}`

));
}


