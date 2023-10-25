import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";
import { z } from "zod";
import bcrypt from "bcrypt";

class UserControllerPut {
    async updateUser(req: Request, res: Response) {
        try {
            const paramsSchema = z.object({
                id: z.string(),
            })

            const { id } = paramsSchema.parse(req.params)

            const bodySchema = z.object({
                name: z.string(),
                password: z.string(),
            })
            const {
                name,
                password,

            } = bodySchema.parse(req.body)

            const hashPassword = await bcrypt.hash(password, 10)

            const user = await prisma.user.update({
                where: {
                    id: parseInt(id),
                },
                data: {
                    name,
                    password: hashPassword,
                }
            })

            if (!user) {
                return res.status(404).json({ message: 'Não existe um usuário com este ID' })
            }

            return res.status(200).json('Cadastro atualizado com sucesso!')

        } catch (error) {
            console.log(error, 'erro ao tentar atualizar o usuário', error);
            return res.status(500).json({ message: 'Erro ao atualizar o usuário' })


        }
    }

}

export default new UserControllerPut();