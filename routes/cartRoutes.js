import express from "express";
import {
    addToCart,updateCartItem,removeCartItem 
} from "../controllers/cartController.js";
import protect from "../middleware/authMiddleware.js";

const router=express.Router();

router.post('/',protect,addToCart);  // POST /cart
router.put('/:id', protect,updateCartItem);  // PUT /cart/:id
router.delete('/:id' ,protect,removeCartItem);  // DELETE /cart/:id

export default router;
