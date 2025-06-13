import express from 'express'

const app = express();

// pequeña bd jaja - con lo que tenía cerca
const products = [
    {id:1, name: "termo", price: 10},
    {id:2, name: "mate", price: 10},
    {id:3, name: "botella", price: 5},
];

app.get('/', (req,res) =>{
    res.send('<h1>Hola API Rest</h1>');
});

app.get('/products', (req,res) =>{
    res.json(products);
});

app.get('/products/:id', (req,res) =>{
    const product = products.find((item) => item.id == req.params.id )

    if (product === undefined) {
        res.send('<h1>no existe ameo</h1>')
    }
    res.json(product);
});

const PORT = 3000

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));