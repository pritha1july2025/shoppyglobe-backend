import mongoose, { Schema } from "mongoose";

const userSchema=new Schema({
    name:String,
    email:{type:String,unique:true},
    password:String
});

//============model=========
const userModel=mongoose.model("User",userSchema)

//=================export=====
export default userModel;