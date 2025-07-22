import { Router } from "express";

// instanciamos el router
const router = Router();

import { 
    getAllProducts, 
    getProductsByName,
    getProductById, 
    createProduct, 
    editProduct, 
    deleteProduct, 
} from "../controllers/products.controller.js";

import { auth } from "../middlewares/auth.middleware.js";

router.get('/products', getAllProducts);
router.get('/products/search', getProductsByName);
router.get('/products/:id', getProductById);

router.post('/products', auth, createProduct);

router.put('/products/:id', auth, editProduct);

router.delete('/products/:id', auth, deleteProduct);


export default router;

export const Hola = () => {}
