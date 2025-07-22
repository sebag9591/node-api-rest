//import * as service from '../services/products.services.js'
import * as model from '../models/products.model.js'

// obtener todos los productos
export const getAllProducts = async (req,res) =>{
    const products = await model.getAllProducts();
    res.json(products);
};

// obtener producto por id
export const getProductById = async (req,res) =>{
    const { id } = req.params;
    const product = await model.getProductById(id);

    if (!product) {
        res.status(404).json({ error: "No existe producto con ese ID"});
    }
    res.json(product);
};

// crear producto
export const createProduct = async (req,res) => {
    const {name,price, categories} = req.body;

    if (!name || !price || !categories)
        res.status(404).json({error: "El producto debe tener nombre, precio y categoría" });

    let newProduct = await model.createProduct({name,price, categories});
    
    res.status(201).json(newProduct);
};


// borrar producto
export const deleteProduct = async (req,res) =>{
    const { id } = req.params;
    
    const productDeleted = await model.deleteProduct( id );

    if (!productDeleted) {
        return res.status(404).json({error:"El producto no ha sido encontrado"})
    }

    res.status(204).send();
};

// editar producto
export const editProduct = async (req,res) => {
    const { id } = req.params;
    const productData = req.body;
    const product = await model.updateProduct(id, productData);

    if (!product) {
        res.status(404).json({ error: "No existe producto con ese ID"});
    }
    res.json(product);
};

// buscar producto por nombre
export const getProductsByName = async (req, res) => {
    const { name } = req.query;

    if (!name) {
        return res.status(400).json({ message: "Falta el parámetro 'name'" });
    }

    const products = await model.getProductsByName(name);

    if (!products || products.length === 0 ) {
        res.status(404).json({ error: "No existen productos con ese nombre"});
    }

    res.json(products);
};
