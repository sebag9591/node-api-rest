import * as service from '../services/products.services.js'

// la hago corta con el falso servicio
const products = service.getProductsArray();

export const getAllProducts = (req,res) =>{
    res.json(products);
};

export const searchProducts = (req, res) => {
    const {nombre} = req.query;

    const filteredProducts = products.filter((p) => p.name.toLowerCase().includes(nombre.toLowerCase()));

    res.json(filteredProducts);
};

export const getProductById = (req,res) =>{
    const { id } = req.params;
    const product = products.find((item) => item.id == id )

    if (product === undefined) {
        //res.send('<h1>no existe ameo</h1>')
        res.status(404).json({ error: "No existe ameo"});
    }
    res.json(product);
};

export const createProduct = (req,res) => {
    const {name,price} = req.body;

    const newProduct = {
        id: products.length + 1,
        name,
        price,
    };

    products.push(newProduct);

    res.status(201).json(newProduct);
};

export const editProduct = (req,res) =>{
    const productId = parseInt( req.params.id , 10);
    const productIndex = products.findIndex((p) => p.id === productId);

    if (productIndex === -1) {
        res.status(404).json({ error: "No existe ameo"});
    }
    
    const {name,price} = req.body;
 
    products[productIndex] = {id:productId, name, price};

    res.status(201).json(products[productIndex]);
};

export const deleteProduct = (req,res) =>{
    const productId = parseInt( req.params.id , 10);
    const productIndex = products.findIndex((p) => p.id === productId);

    if (productIndex === -1) {
        res.status(404).json({ error: "No existe ameo"});
    }
    
    products.splice(productIndex, 1);

    res.status(202).json({message:"producto borrado"});
};

