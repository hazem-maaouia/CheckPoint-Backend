const mongoose= require('mongoose');
const {Schema}= mongoose;
const userSchema=new Schema({
    lastname:{
        type:String,
        required:true
    },
    firstname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }
    });
    module.exports= mongoose.model("User",userSchema);