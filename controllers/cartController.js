import Cart from "../models/Cart.js";
import Product from "../models/Product.js";


export const addToCart=async (req,res)=>{
       const { productId, quantity } = req.body;

        try{
             // Check product exists
            const product=await Product.findById(productId);
            if(!product)
                return res.status(400).json({message:"Product not Found"});

             // Check if product already in cart
    const existingItem = await Cart.findOne({
      userId: req.user.id,
      productId
    });

    if (existingItem) {
      existingItem.quantity += quantity;
      await existingItem.save();
      return res.json(existingItem);
    }
    //Add new cart item

            const cartItem=await Cart.create({
                userId:req.user.id,
                productId,
                quantity
            })
            res.json(cartItem);
        }
    catch  {
        res.status(500).json({message:"Server Error"})
        
    }
}
    // Update cart item quantity

export const updateCartItem=async (req,res)=>{
      
        try{
            const updatedItem=await Cart.findByIdAndUpdate
            (req.params.id,
                {quantity:req.body.quantity},
                {new:true}
            );
           if (!updatedItem)
      return res.status(404).json({ message: 'Cart item not found' });  
           
        res.json(updatedItem);
        }
    catch  {
        res.status(400).json({message:"Invalid Cart ID"})
        
    }

}; 
//remove the item in cart

export const removeCartItem = async (req, res) => {
    try {
        const deleted = await Cart.findByIdAndDelete(req.params.id);
        if (!deleted)
            return res.status(404).json({ message: 'Cart item not found' });

        res.json({ message: "Item removed from Cart" });
    } catch {
        res.status(400).json({ message: "Invalid Cart ID" });
    }
}; 



