import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";
import { z } from "zod";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

class LoginController {
    async login (req: Request, res: Response) {
        try {
            const bodySchema = z.object({
                email: z.string(),
                password: z.string(),
            })

            const { email, password } = bodySchema.parse(req.body)
            const user = await prisma.user.findUnique({
                where: { email }
            })

            if (!user) {
                return res.status(400).json('O e-mail ou senha inválidos')
            }
            
            const verifyPassword = await bcrypt.compare(password, user.password)

            if (!verifyPassword) {
                return res.status(400).json('O e-mail ou senha inválidos')
            }

            const token = jwt.sign({ id: user.id}, process.env.JWT_PASS ?? '', { expiresIn: '8h'})
            console.log(token);

        } catch (error) {
            return res.status(500).json({ message: 'Erro ao validar login'})
        }
    }
}

export default new LoginController();