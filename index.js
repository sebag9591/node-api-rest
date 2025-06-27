import express from 'express'
import cors from 'cors'


const app = express();

// middleware para poder comprender el cuerpo de la petición
// lo deja disponible en req.body
app.use(express.json());

// para que no de error de cors al consumirse la api desde una vista
app.use(cors());

app.get('/', (req,res) =>{
    res.send('<h1>Hola API Rest</h1>');
});


// rutas de productos
import productsRouter from './src/routes/products.routes.js'
app.use("/api", productsRouter);

app.use((req,res,next) => {
    res.status(404).json({error: "no se encontró esta URL ameo"});
})

const PORT = 3000

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));