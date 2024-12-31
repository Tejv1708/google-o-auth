 import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    googleId : String ,
    userName : String ,
    email : String , 
    photos : String ,
    credits : {
        type : Number ,
        default : 0
    } ,
    
})


const User = mongoose.model('User' , userSchema)

export default User