import mongoose, { Schema } from "mongoose";

const cartSchema=new Schema({
   userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
    quantity: { type: Number, default: 1 }
});

//============model=========
const cartModel=mongoose.model("Cart",cartSchema)

//=================export=====
export default cartModel;