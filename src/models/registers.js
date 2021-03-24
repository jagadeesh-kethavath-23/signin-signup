const mongoose= require("mongoose");

const user_schema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        reqiuire:true
    }
})
const Register =new mongoose.model("Register",user_schema);
module.exports =Register;