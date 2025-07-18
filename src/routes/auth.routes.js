import { Router } from "express";
import jwt from "jsonwebtoken";

const router = Router();

import { login } from '../controllers/auth.controller.js';


router.post('/login', login);

export default router;

export const Hola = () => {}
