import Product from "../models/Product.js";

//GET/products: Fetch a list of products from MongoDB.
export const getAllProducts=async (req,res)=>{
  
        try{
            const products=await Product.find();
            res.json(products);
        }
    catch  {
        res.status(500).json({message:"Server error"})
        
    }
}; 
//GET/products: Fetch details of a single product by its ID.
export const getProductsId=async (req,res)=>{
  
        try{
            const product=await Product.findById(req.params.id);
            if(!product)
                return res.status(404).json({message:"Product not Found"})
            res.json(product);
        }
    catch  {
        res.status(400).json({message:"Invalid ID"})
        
    }
}; 
