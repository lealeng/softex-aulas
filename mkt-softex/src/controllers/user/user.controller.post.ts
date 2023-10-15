import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";
import {z} from "zod";
import bcrypt from 'bcrypt';

class UserControllerPost {
    async createUser (req: Request, res: Response) {
        try {
            const bodySchema = z.object({
                name: z.string(),
                email: z.string(),
                password: z.string(),
            })
            const { name, email, password } = bodySchema.parse(req.body)
            
            const userExist = await prisma.user.findUnique({
                where: { email }
            })

            if (userExist) {
                return res.status(400).json('O e-mail informado já existe.')
            }

            const hashPassword = await bcrypt.hash(password, 10)

            const users = await prisma.user.create({
                data: {
                    name,
                    email,
                    password: hashPassword
                }
            })

            const {password: _, ...user} = users
            
            return res.status(201).json(users)
        } catch (error) {
            return res.status(500).json({ message: 'Erro ao criar o usuário, tente novamente'})
        }
    }
}

export default new UserControllerPost();