import jwt from 'jsonwebtoken';

// TODO: gestión de usuarios
const default_user = {
    id: 1,
    email: "usuario@talentotech.com.ar",
    password: "strongPass123"
}

export async function login(req, res) {
    const { email, password } = req.body;
    
    // Aquí deberías verificar las credenciales del usuario
    const user = { id: 1 }

    if (email == default_user.email && password == default_user.password) {
        const payload = { email } ;
        const expiration =  { expiresIn: "1h" } ;

        const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, expiration);
        res.json({token});
    } else {
        return res.sendStatus(401);
    }

    res.json({message: 'ok'});
}