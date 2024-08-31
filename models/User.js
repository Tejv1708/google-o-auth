 import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    googleId : String ,
    userName : String ,
    email : String , 
    photos : String 
})


const User = mongoose.model('User' , userSchema)

export default User