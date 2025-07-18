import 'dotenv/config';
import express from 'express';
import cors from 'cors';


const app = express();

// middleware para poder comprender el cuerpo de la petición
// lo deja disponible en req.body
app.use(express.json());

// para que no de error de cors al consumirse la api desde una vista
app.use(cors());

// ruta principal
app.get('/', (req,res) =>{
    res.json( { message: 'Bienvenido a la API Rest' } );
});

// rutas de login
import authRouter from './src/routes/auth.routes.js'
app.use("/api/auth", authRouter);

// rutas de productos
import productsRouter from './src/routes/products.routes.js'
app.use("/api", productsRouter);

// middleware - control de rutas 
app.use((req,res,next) => {
    res.status(404).json({ error: "Esta URL no está disponible en la API" });
})

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));