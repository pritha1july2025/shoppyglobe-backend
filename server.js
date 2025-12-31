import express from 'express';
import mongoose from "mongoose";


// Routes
import productRoutes from "./routes/productRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";
import authRoutes from "./routes/authRoutes.js";


const app=express();

//==========JSON Middleware===========
app.use(express.json()) ;


//=========ROUTES================
app.use("/products",productRoutes);
app.use("/cart",cartRoutes)
app.use("/",authRoutes)

//============DATABASE CONNECTION============
mongoose.connect("mongodb://localhost:27017/shoppyglobe")
.then (()=>{console.log("DB IS CONNECTED")})
.catch(()=>{console.log("DB IS NOT CONNECTED")})

//============SERVER==========================

const PORT=8000
app.listen(PORT,()=>{
    console.log(`SERVER IS CONNECTED IN THE PORT ${PORT}`)
})


