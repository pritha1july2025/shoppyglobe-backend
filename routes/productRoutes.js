import express from 'express';
import {getAllProducts,getProductsId} from "../controllers/productController.js";

const router=express.Router();

router.get('/', getAllProducts);// GET /products
router.get('/:id',getProductsId); // GET /products/:id

export default router;


