import mongoose, { Schema } from "mongoose";

//====schema=======
const productSchema=new Schema({
    name:{ type: String, required: true },
    price:{ type: Number, required: true },
    description:String,
    stock:{ type: Number, required: true },

});


//============model=========
const productModel=mongoose.model("Product", productSchema)

//=================export=====
export default productModel;
