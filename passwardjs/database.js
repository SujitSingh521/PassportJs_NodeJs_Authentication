const mongoose = require("mongoose");  

exports.connectMongoose = () => {  
    mongoose.connect('mongodb://localhost:27017/passport')  
    .then(e => console.log(`Connected to MongoDB: ${e.connection.host}`))  
    .catch(e => console.log(e));  
};


const userSchema =new mongoose.Schema({
    username: String,
    password: String,
    email: String,
    role: String
    });
    const User = mongoose.model('User', userSchema);
    exports.User = User;
    exports.userSchema = userSchema;
    exports.connectMongoose = connectMongoose;
    exports.mongoose = mongoose;
    exports.connectMongoose();
    

